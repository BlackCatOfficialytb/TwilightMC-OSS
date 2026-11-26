//! Launch pipeline for TwilightMC: argument templates, classpath building and
//! async process spawns. Clean-room port of Prism's
//! `MinecraftInstance::processMinecraftArgs` / `getJvmArguments` mechanics.

mod args;
mod classpath;
mod dev;
mod diagnostics;
mod error;
mod gate;
mod gc;
mod natives;
mod process;
mod security;

pub use args::{
    GameOptions, ProfileVars, QuickPlay, Vars, game_arguments, inject_account_vars, jvm_arguments,
    replace_tokens_in,
};
pub use classpath::{active_paths, classpath_string, profile_classpath, separator};
pub use dev::{DevDebugOptions, dev_jvm_args, jdwp_arg};
pub use diagnostics::{
    DiagnosticInfo, Hardware, SERVICE_HOSTS, VERSION_LABEL, auth_mode_name, collect_hardware,
    header_lines, mask_access_token, render, resolve_service_hosts,
};
pub use error::LaunchError;
pub use gate::{
    BAREBONES_CURSEFORGE_URL, BAREBONES_MARKER_FILE, CLEANROOM_GATE_MESSAGE,
    CLEANROOM_REQUIRED_MODS, check_cleanroom_gate,
};
pub use gc::{GcPreset, GcSettings, aikar_g1_flags, append_gc_flags, resolve_gc_flags};
pub use natives::{
    clean_natives_dir, extract_natives, extract_natives_with_7z, extract_natives_with_fallback,
    find_seven_zip, sevenzip_arguments,
};
pub use process::{LaunchEvent, LaunchPlan, build_command, command_line, run};
pub use security::{
    MINECRAFT2SHELL_ADVISORY, Minecraft2ShellAssessment, Minecraft2ShellExposure,
    assess_minecraft2shell, is_lwjgl_freetype_artifact, requires_resource_pack_font_confirmation,
};
