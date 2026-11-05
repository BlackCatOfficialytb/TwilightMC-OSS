//! Modern (1.12.5+) `arguments` blocks: `game`/`jvm` lists whose entries are
//! plain strings or rule-gated values.

use std::collections::BTreeSet;

use serde::{Deserialize, Serialize};

use crate::RuntimeContext;
use crate::rule::{Rule, RuleResult, eval_rule_list};

#[derive(Debug, Clone, Default, PartialEq, Serialize, Deserialize)]
pub struct Arguments {
    #[serde(default, skip_serializing_if = "Vec::is_empty")]
    pub game: Vec<ArgItem>,
    #[serde(default, skip_serializing_if = "Vec::is_empty")]
    pub jvm: Vec<ArgItem>,
}

#[derive(Debug, Clone, PartialEq, Serialize, Deserialize)]
#[serde(untagged)]
pub enum ArgItem {
    /// An unconditional argument word, e.g. `--fullscreen`.
    Plain(String),
    /// `{"rules": [...], "value": ...}`.
    Conditional { rules: Vec<Rule>, value: ArgValue },
}

#[derive(Debug, Clone, PartialEq, Serialize, Deserialize)]
#[serde(untagged)]
pub enum ArgValue {
    Single(String),
    Many(Vec<String>),
}

impl ArgValue {
    fn into_words(self) -> Vec<String> {
        match self {
            ArgValue::Single(s) => vec![s],
            ArgValue::Many(v) => v,
        }
    }
}

/// Resolves a rule-gated argument list for the given context + active features,
/// matching `evaluateRules` semantics (last non-deferring rule wins).
pub fn resolve_arg_items(
    items: &[ArgItem],
    ctx: &RuntimeContext,
    features: &BTreeSet<String>,
) -> Vec<String> {
    let mut out = Vec::new();
    for item in items {
        let keep = match item {
            ArgItem::Plain(_) => true,
            ArgItem::Conditional { rules, .. } => {
                eval_rule_list(rules, ctx, features) == RuleResult::Allow
            }
        };
        if keep {
            match item {
                ArgItem::Plain(word) => out.push(word.clone()),
                ArgItem::Conditional { value, .. } => out.extend(value.clone().into_words()),
            }
        }
    }
    out
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::RuntimeContext;

    fn ctx() -> RuntimeContext {
        RuntimeContext::new("linux", "x86_64")
    }

    fn features(on: &[&str]) -> BTreeSet<String> {
        on.iter().map(|s| s.to_string()).collect()
    }

    #[test]
    fn mixes_plain_and_conditional_arguments() {
        let args: Arguments = serde_json::from_str(
            r#"{
            "game": ["--main", "--fullscreen", { "rules": [{ "action": "allow", "features": { "has_quick_play": true } }], "value": ["--quickPlay", "${quickPlayPath}"] }],
            "jvm": ["-Xms512m", "-Xss1M", { "rules": [{ "action": "allow", "features": { "is_demo_user": true } }], "value": "--demo" }]
        }"#,
        )
        .unwrap();

        let none = features(&[]);
        assert_eq!(
            resolve_arg_items(&args.game, &ctx(), &none),
            vec!["--main".to_string(), "--fullscreen".to_string()]
        );
        assert_eq!(
            resolve_arg_items(&args.jvm, &ctx(), &none),
            vec!["-Xms512m", "-Xss1M"]
        );

        let demo = features(&["is_demo_user"]);
        assert_eq!(
            resolve_arg_items(&args.jvm, &ctx(), &demo),
            vec!["-Xms512m", "-Xss1M", "--demo"]
        );
    }

    #[test]
    fn disallow_rules_gate_values() {
        let items: Vec<ArgItem> = serde_json::from_str(
            r#"[
            { "rules": [{ "action": "allow", "os": { "name": "linux-x86_64" } }], "value": "--native" },
            { "rules": [{ "action": "disallow", "os": { "name": "linux-x86_64" } }], "value": "--notme" }
        ]"#,
        )
        .unwrap();
        assert_eq!(
            resolve_arg_items(&items, &ctx(), &features(&[])),
            vec!["--native"]
        );
    }

    #[test]
    fn untagged_item_shapes() {
        let p: ArgItem = serde_json::from_str("\"--plain\"").unwrap();
        assert!(matches!(p, ArgItem::Plain(_)));
        let bad: Result<ArgItem, _> = serde_json::from_str("123");
        assert!(bad.is_err());
    }
}
