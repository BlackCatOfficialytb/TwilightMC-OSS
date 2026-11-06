//! `twilight java` — enumerate detected JVM installations.

use twilight_runtime::discover_java;

use crate::error::CliError;

/// Scans all search roots (PATH, `JAVA_HOME`, OS roots, Windows registry)
/// and prints the installations found. Zero installations is a successful
/// no-op for scripting friendliness.
pub async fn run_java() -> Result<i32, CliError> {
    let installations = discover_java().await?;
    if installations.is_empty() {
        println!("no JVM installations detected (set JAVA_HOME or pass --java to launch)");
        return Ok(0);
    }
    println!("{} JVM installation(s) detected:", installations.len());
    for installation in &installations {
        println!(
            "  Java {:>4} [{}] {}",
            installation.version.major,
            installation.version.full,
            installation.executable.display()
        );
    }
    Ok(0)
}
