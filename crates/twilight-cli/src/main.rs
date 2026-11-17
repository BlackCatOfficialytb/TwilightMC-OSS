use clap::Parser;

use twilight_cli::{Cli, execute};

#[tokio::main]
async fn main() {
    let cli = Cli::parse();
    match execute(cli.command).await {
        Ok(code) => std::process::exit(code),
        Err(error) => {
            eprintln!("twilight: {error}");
            // the top-level variants are deliberately terse; walk the source
            // chain so the console shows which step actually failed
            let mut source = std::error::Error::source(&error);
            while let Some(cause) = source {
                eprintln!("  caused by: {cause}");
                source = cause.source();
            }
            std::process::exit(1);
        }
    }
}
