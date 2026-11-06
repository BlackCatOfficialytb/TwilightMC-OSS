use clap::Parser;

use twilight_cli::{Cli, execute};

#[tokio::main]
async fn main() {
    let cli = Cli::parse();
    match execute(cli.command).await {
        Ok(code) => std::process::exit(code),
        Err(error) => {
            eprintln!("twilight: {error}");
            std::process::exit(1);
        }
    }
}
