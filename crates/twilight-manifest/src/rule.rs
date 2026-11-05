use std::collections::{BTreeMap, BTreeSet};

use serde::{Deserialize, Deserializer, Serialize};

use crate::RuntimeContext;

/// Rule action. An absent or unknown `action` string behaves as `Defer`
/// (the rule never decides anything), mirroring Qt's default.
#[derive(Debug, Clone, Copy, PartialEq, Eq, Default, Serialize, Deserialize)]
#[serde(rename_all = "lowercase")]
pub enum Action {
    #[default]
    Allow,
    Disallow,
}

/// Outcome of evaluating a rule list: `Defer` means "no rule decided".
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum RuleResult {
    Allow,
    Disallow,
    Defer,
}

#[derive(Debug, Clone, Default, PartialEq, Eq, Serialize, Deserialize)]
pub struct OsRule {
    name: Option<String>,
    /// Unsupported by this client; retained only so data round-trips losslessly (Qt FIXME).
    #[serde(skip_serializing_if = "Option::is_none")]
    version: Option<String>,
}

/// One manifest rule: `{"action": ..., "os": {...}, "features": {...}}`.
///
/// Unknown extra keys are tolerated for forward compatibility (Qt kept only
/// the known keys when writing back as well).
#[derive(Debug, Clone, Default, PartialEq, Eq, Serialize, Deserialize)]
pub struct Rule {
    #[serde(default, deserialize_with = "Rule::deserialize_lenient_action", skip_serializing_if = "Option::is_none")]
    action: Option<Action>,
    os: Option<OsRule>,
    /// Mojang feature-flag gate: the rule applies only when every flagged
    /// feature matches the runtime feature set (all entries are `true` in practice).
    #[serde(default, skip_serializing_if = "BTreeMap::is_empty")]
    features: BTreeMap<String, bool>,
}

impl Rule {
    /// Lenient JSON deserializer: unknown action strings become `None` (defer).
    fn deserialize_lenient_action<'de, D: Deserializer<'de>>(d: D) -> Result<Option<Action>, D::Error> {
        let raw = Option::<String>::deserialize(d)?;
        Ok(raw.as_deref().and_then(|raw| match raw {
            "allow" => Some(Action::Allow),
            "disallow" => Some(Action::Disallow),
            _ => None,
        }))
    }
}

/// Evaluates every rule and returns the **last** non-deferring outcome,
/// matching `Library::isActive`'s fold. All-`Defer` (or empty) input yields `Defer`.
pub fn eval_rule_list(rules: &[Rule], ctx: &RuntimeContext, features: &BTreeSet<String>) -> RuleResult {
    match rules.iter().filter_map(|rule| rule.eval(ctx, features)).next_back() {
        Some(true) => RuleResult::Allow,
        Some(false) => RuleResult::Disallow,
        None => RuleResult::Defer,
    }
}

impl Rule {
    /// `Some(decision)` when this rule applies to the context, `None` to defer.
    pub fn eval(&self, ctx: &RuntimeContext, features: &BTreeSet<String>) -> Option<bool> {
        // An "os" object without a name implicitly matches (Qt left m_os unset in that case).
        if let Some(os_name) = self.os.as_ref().and_then(|o| o.name.as_deref())
            && !ctx.classifier_matches(os_name)
        {
            return None;
        }

        if !self.features.is_empty()
            && !self
                .features
                .iter()
                .all(|(f, wanted)| features.contains(f.as_str()) == *wanted)
        {
            return None;
        }

        match self.action {
            Some(Action::Allow) => Some(true),
            Some(Action::Disallow) => Some(false),
            None => None,
        }
    }
}

impl std::fmt::Display for Action {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        match self {
            Action::Allow => f.write_str("allow"),
            Action::Disallow => f.write_str("disallow"),
        }
    }
}

impl std::fmt::Display for RuleResult {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        match self {
            RuleResult::Allow => f.write_str("allow"),
            RuleResult::Disallow => f.write_str("disallow"),
            RuleResult::Defer => f.write_str("defer"),
        }
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use std::collections::BTreeSet;

    fn linux_ctx() -> RuntimeContext {
        RuntimeContext::new("linux", "x86_64")
    }

    fn rule(json: &str) -> Rule {
        serde_json::from_str(json).expect("parse rule")
    }

    #[test]
    fn os_rule_matches_precise_classifier() {
        let r = rule(r#"{"action":"allow","os":{"name":"linux-x86_64"}}"#);
        assert_eq!(r.eval(&linux_ctx(), &BTreeSet::new()), Some(true));
        assert_eq!(r.eval(&RuntimeContext::new("linux", "aarch64"), &BTreeSet::new()), None);
    }

    #[test]
    fn bare_os_rule_matches_on_legacy_arch_only() {
        let r = rule(r#"{"action":"disallow","os":{"name":"linux"}}"#);
        assert_eq!(r.eval(&linux_ctx(), &BTreeSet::new()), Some(false));
        // arm64 is not a "legacy" arch, so the imprecise match must not apply
        assert_eq!(r.eval(&RuntimeContext::new("linux", "aarch64"), &BTreeSet::new()), None);
    }

    #[test]
    fn empty_action_and_missing_os_name_never_decide() {
        // unknown action -> defer
        let r = rule(r#"{"action":"maybe","os":{"name":"linux"}}"#);
        assert_eq!(r.eval(&linux_ctx(), &BTreeSet::new()), None);
        // "os" object present without name -> no OS restriction at all
        let r = rule(r#"{"action":"allow","os":{}}"#);
        assert_eq!(r.eval(&RuntimeContext::new("windows", "x86"), &BTreeSet::new()), Some(true));
    }

    #[test]
    fn rule_without_os_matches_everything() {
        let r = rule(r#"{"action":"disallow"}"#);
        assert_eq!(r.eval(&linux_ctx(), &BTreeSet::new()), Some(false));
    }

    #[test]
    fn feature_gate_requires_every_flag() {
        let r = rule(r#"{"action":"allow","features":{"is_demo_user":true}}"#);
        let off: BTreeSet<String> = BTreeSet::new();
        assert_eq!(r.eval(&linux_ctx(), &off), None);
        let on: BTreeSet<String> = ["is_demo_user".to_owned()].into();
        assert_eq!(r.eval(&linux_ctx(), &on), Some(true));
        // entries explicitly set to false invert the requirement
        let inv = serde_json::from_str::<Rule>(r#"{"action":"allow","features":{"has_custom_resolution":false}}"#).unwrap();
        assert_eq!(inv.eval(&linux_ctx(), &on), Some(true));
        let res: BTreeSet<String> = ["is_demo_user".to_owned(), "has_custom_resolution".to_owned()].into();
        assert_eq!(inv.eval(&linux_ctx(), &res), None);
    }

    #[test]
    fn eval_rule_list_takes_last_decision() {
        let rules: Vec<Rule> = serde_json::from_str(
            r#"[{"action":"disallow","os":{"name":"windows"}},{"action":"allow","os":{"name":"linux-x86_64"}}]"#,
        )
        .unwrap();
        assert_eq!(eval_rule_list(&rules, &linux_ctx(), &BTreeSet::new()), RuleResult::Allow);
        // nothing applies -> defer
        let none: Vec<Rule> = serde_json::from_str(r#"[{"action":"allow","os":{"name":"osx-arm64"}}]"#).unwrap();
        assert_eq!(eval_rule_list(&none, &linux_ctx(), &BTreeSet::new()), RuleResult::Defer);
    }
}
