//! JVM flags unlocked by App Developer Mode. These are deliberately isolated
//! from the normal launch path so a plain profile can never inherit a debugger
//! or mixin export switch by accident.

/// Debug toggles for one launch, copied from persisted Developer settings.
#[derive(Debug, Clone, Copy, PartialEq, Eq, Default)]
pub struct DevDebugOptions {
    pub jdwp_enabled: bool,
    pub jdwp_port: u16,
    pub mixin_debug: bool,
}

/// The exact JDWP agent string the JVM expects. `0` asks the JVM to choose a
/// free port (the launcher reports the chosen port in its own diagnostics).
pub fn jdwp_arg(port: u16) -> String {
    format!("-agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=*:{port}")
}

/// Developer JVM flags in a stable order: JDWP first so it appears in the
/// console diagnostics before the game's own arguments, then Mixin debug.
pub fn dev_jvm_args(options: DevDebugOptions) -> Vec<String> {
    let mut args = Vec::new();
    if options.jdwp_enabled {
        args.push(jdwp_arg(options.jdwp_port));
    }
    if options.mixin_debug {
        args.push("-Dmixin.debug.export=true".to_owned());
        args.push("-Dmixin.debug.verbose=true".to_owned());
    }
    args
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn developer_flags_are_added_only_when_requested() {
        let enabled = dev_jvm_args(DevDebugOptions {
            jdwp_enabled: true,
            jdwp_port: 5005,
            mixin_debug: true,
        });
        assert_eq!(
            enabled,
            [
                "-agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=*:5005",
                "-Dmixin.debug.export=true",
                "-Dmixin.debug.verbose=true",
            ]
        );
        assert!(dev_jvm_args(DevDebugOptions::default()).is_empty());
    }

    #[test]
    fn each_debug_flag_is_independent_and_the_port_is_honoured() {
        let jdwp = dev_jvm_args(DevDebugOptions {
            jdwp_enabled: true,
            jdwp_port: 9009,
            mixin_debug: false,
        });
        assert_eq!(jdwp.len(), 1);
        assert!(jdwp[0].ends_with("address=*:9009"));
        let mixin = dev_jvm_args(DevDebugOptions {
            jdwp_enabled: false,
            jdwp_port: 5005,
            mixin_debug: true,
        });
        assert_eq!(
            mixin,
            ["-Dmixin.debug.export=true", "-Dmixin.debug.verbose=true"]
        );
        assert_eq!(
            jdwp_arg(0),
            "-agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=*:0"
        );
    }
}
