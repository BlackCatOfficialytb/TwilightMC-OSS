# Twemoji assets

Twitter Twemoji SVGs (CC-BY 4.0), from `jdecked/twemoji` v15.1.0
(https://github.com/jdecked/twemoji — the maintained fork of
twitter/twemoji). Files are named by their lowercase hex Unicode
codepoints, exactly as upstream names them (`2699.svg` = ⚙, `1f4c2.svg` =
📂, …).

Only the glyphs the TwilightMC interface actually uses are vendored here;
`src/lib/twemoji.js` (`TWEMOJI_ASSETS`) maps emoji to these files and
falls back to the raw character for anything missing. `ICON_PICKER_TWEMOJI`
lists the curated gaming/Minecraft subset offered by the instance icon picker.
Attribution is kept in the repository root `CREDITS.md` for as long as any of
these ship.
