# TwilightMC launcher — English (US), canonical source and fallback.
# Keep icon glyphs out of this file: render them from LauncherIcon/Twemoji.


## Common

common-cancel = Cancel
common-save = Save
common-close = Close
common-open = Open
common-reset = Reset
common-restore = Restore
common-delete = Delete
common-clear = Clear
common-copy = Copy
common-rename = Rename
common-back = Back
common-next = Next
common-add = Add
common-retry = Retry
common-refresh = Refresh
common-loading = Loading…
common-unknown = unknown
common-none = none
common-on = on
common-off = off
common-active = Active
common-default = default
common-custom = custom
common-ok = OK
backend-unavailable = Tauri backend unavailable in this preview.
app-document-title = TwilightMC (pre-release UI)

## Alerts and toasts

alert-title = Alert
alert-cancel = Cancel
alert-ok = OK
toast-dismiss = Click to dismiss
toast-region-label = Notifications
toast-logs-copied = Logs copied to clipboard.
toast-copy-failed = Copy failed: { $error }
toast-launch-failed = Launch failed: { $error }
toast-renamed = Renamed to { $name }.
toast-rename-failed = Rename failed: { $error }
toast-exported-twpack = Exported { $name } as .twpack.
toast-export-failed = Export failed: { $error }
toast-shortcut-created = Shortcut created: { $path }
toast-shortcut-failed = Shortcut failed: { $error }

## Application shell

app-name = TwilightMC
app-channel = pre-release UI
app-version = TwilightMC Bolide (alpha-v{ $version })
nav-instances = Instances
nav-servers = Servers & P2P
nav-downloads = Downloads
nav-settings = Settings
nav-accounts = Accounts
nav-add-instance = Add Instance
nav-manage-accounts = Manage accounts
nav-manage-signin = manage & sign in
nav-expand-sidebar = Expand sidebar
nav-collapse-sidebar = Collapse sidebar
nav-back-instances-title = Back to the instance library
mode-launcher = Launcher
mode-client = Client
status-ready = Ready
status-launching = Running { $name }…
status-launching-server = Running { $name } → { $server }…
status-launching-world = Running { $name } → world "{ $world }"…
status-launch-failed = Launch failed
status-modpack-installed = Modpack installed.
status-instance-trash = Instance moved to trash.
status-instance-deleted = Instance deleted.
status-moved-group = Moved { $name } to { $group }.
status-ungrouped = { $name } is ungrouped.
status-copied = Copied { $name }.
status-copy-failed = Copy failed: { $error }
status-renamed = Renamed { $name } to { $newName }.
status-exported = Exported to { $path }.
status-packing = Packing with 7z…
status-shortcut-created = Shortcut created: { $path }
status-instance-created = Instance { $name } created.
status-twpack-imported = .twpack imported.
status-file-picker-unavailable = File picker unavailable in this build.
status-java-saved = Java settings saved.
status-folders-updated = Folders updated.
status-staging-cleaned = Staging cleaned.
page-instances-title = Instances
page-instances-subtitle = Your library — open the wizard or drop a pack.
page-servers-title = Servers & P2P
page-servers-subtitle = Create and run local servers with the Minekube Connect tunnel.
page-downloads-title = Downloads
page-downloads-subtitle = Direct downloads land in a later milestone.
header-back-instances = Back to Instances
action-add-instance = Add Instance
action-instance-folder = Instance Folder
action-install-mrpack = Install .mrpack
action-install-mrpack-title = Install a Modrinth .mrpack into a new instance
action-settings = Settings
filter-instances = Filter instances…
console-title = Console Drawer (Real-time logs)
console-running = running
console-clear = Clear
console-copy = Copy
console-kill = Kill
console-hide = Hide
console-collapse = Collapse console
console-expand = Expand console
console-collapse-short = Collapse
console-kill-title = Kill the game process
console-empty = Game output appears here once you launch.
console-kill-requested = kill requested
console-exit-code = launcher reports exit code { $code }

## Instance grid and card

grid-aria = Instances
grid-no-match = No instances match "{ $query }".
grid-empty-title = No instances yet
grid-empty-body = Create one from a version list, or drop a .mrpack / .twpack into the wizard.
grid-add = Add Instance
instance-never-played = Never played
instance-menu = Menu
instance-play = Play
instance-edit = Edit Instance
instance-open-folder = Open Folder
instance-view-logs = View Logs
instance-delete = Delete
instance-meta-never = Minecraft { $version }
instance-meta-played = Minecraft { $version }, last played on { $date }, total played for { $duration }
instance-mods-count =
    { $count } { $count ->
        [one] mod
       *[other] mods
    } installed
instance-name = Instance name

## Instance context panel

ctx-aria = Selected instance details
ctx-close-title = Close panel (Esc)
ctx-close-aria = Clear selection and close the instance panel
ctx-change-icon-title = Change instance icon
ctx-change-icon-aria = Change the icon for this instance
ctx-rename-title = Rename instance
ctx-rename-aria = Rename instance
ctx-group = Group
ctx-launch-title = Launch { $name }
ctx-launch-running = A game is already running
ctx-kill-title = Stop the running game
ctx-change-group-title = Move this instance to another group
ctx-group-none = No group
ctx-new-group = New group…
ctx-add-group = Add
ctx-folder-title = Opens the instance folder
ctx-folder-unknown = Storage unknown
ctx-export-zip-title = Export this instance as a .zip
ctx-export-twpack-title = Export this instance as a compressed .twpack (7z)
ctx-copy-title = Clone this instance
ctx-shortcut-title = Create a desktop shortcut that launches this instance
action-launch = Launch
action-kill = Kill
action-edit = Edit
action-change-group = Change Group
action-folder = Folder
action-export = Export
action-export-twpack = Export .twpack
action-copy = Copy
action-delete = Delete
action-shortcut = Create Shortcut
action-rename = Rename

## Durations (Fluent plural selectors)

duration-hours =
    { $hours ->
        [one] { $hours } hour
       *[other] { $hours } hours
    }
duration-minutes =
    { $minutes ->
        [one] { $minutes } minute
       *[other] { $minutes } minutes
    }
duration-seconds =
    { $seconds ->
        [one] { $seconds } second
       *[other] { $seconds } seconds
    }

## Client mode

client-no-account = No account selected
client-no-account-body = Pick or create an account to see your character here.
client-open-accounts = Open account manager
client-skin-title = Swap the skin PNG
client-cape-title = Swap the cape PNG
client-reset-title = Back to the default look
client-skin = Skin…
client-cape = Cape…
client-reset = Reset
client-quick-launch = Quick launch
client-no-instances = No instances yet
client-console-title = Open the console drawer
client-console = Console
client-launch = LAUNCH GAME
client-game-running = GAME RUNNING…
client-no-instance = no instance selected
client-my-servers = My servers
client-servers-note = only you decide what lives here
client-join = Join
client-join-title = Join { $address } with { $instance }
client-remove-pin = Remove from my servers
client-no-pins = No pinned servers yet — add one below.
client-pin-name = Name
client-pin-address = host.or.ip[:port]
client-pin = Pin
client-pin-invalid = Address must be a hostname (optionally host:port).

## Accounts

accounts-overview = Overview
accounts-add = Add Account
accounts-saved = Saved Accounts
accounts-sections-aria = Accounts sections
accounts-overview-title = Account overview
accounts-overview-desc = The character launches use, with the hat/jacket outer layer included.
accounts-preview-title = Preview { $name }
accounts-active-badge = ACTIVE
accounts-uuid = Profile UUID
accounts-skin-source = Skin source
accounts-cape = Cape
accounts-renewable = Renewable token
accounts-skin-default = default (Steve/Alex)
accounts-skin-custom = custom skin
accounts-cape-custom = custom cape
accounts-none = none
accounts-token-yes = yes — silent refresh available
accounts-token-no = no
accounts-empty-title = No accounts yet
accounts-empty-body = Add an offline profile, sign in with Ely.by or Microsoft, or point at any custom Yggdrasil server — everything lives in the Add Account section.
accounts-add-one = Add an account
accounts-add-title = Add account
accounts-add-desc = Offline profiles, Ely.by (browser or device code), Microsoft and custom Yggdrasil servers.
accounts-saved-title = Saved accounts
accounts-saved-desc = Set the active profile, renew tokens silently, edit skins — or remove accounts.
account-type-offline = Offline
account-type-microsoft = Microsoft
account-type-elyby = Ely.by
account-type-yggdrasil = Yggdrasil
account-skin-cape-title = Skin & cape
account-refresh-title = Silently renew this account's token
account-refreshing = Refreshing…
account-refresh = Refresh token
account-set-active = Set active
account-remove = Remove
accounts-remove-confirm-title = Remove { $name }?
accounts-remove-confirm = This account and its saved skin data will be removed from the launcher. You can add it again later.
accounts-removed = Account removed
account-no-accounts = No accounts yet — add one above.
account-skin-label = Skin:
account-cape-label = Cape:
account-editor-save = Save
account-editor-clear = Clear
choose-skin = Choose a skin PNG
choose-cape = Choose a cape PNG
filter-png-textures = PNG textures

## Sign in

signin-tab-offline = Offline
signin-tab-elyby = Ely.by
signin-tab-microsoft = Microsoft
signin-tab-custom = Custom
signin-offline-placeholder = Offline username (3-16 letters, digits, _)
signin-offline-uuid = JVM UUID v3 preview:
signin-offline-note = No password, no validation — the game runs as this username with a deterministic offline UUID.
signin-add = Add
signin-ms = Sign in with Microsoft
signin-ms-note = A device code opens the sign-in at microsoft.com/link — no password ever enters the launcher.
signin-requesting = Requesting a device code…
signin-enter-code = Enter this code at
signin-device-code = Device code
signin-copied = Copied
signin-copy-code = Copy code
signin-restart = Restart
signin-waiting = Waiting for you to finish signing in…
signin-signed-in = Signed in - account saved.
signin-ely-done = Signed in - the Ely.by account is saved and active.
signin-another = Sign in another account
signin-ely-title = Sign in with Ely.by
signin-ely-browser = Sign in with browser (recommended)
signin-ely-waiting = Waiting for the browser…
signin-ely-browser-note = Opens account.ely.by in your browser and returns automatically — no password ever enters the launcher.
signin-ely-device = Use a device code instead
signin-ely-open = Open page
signin-ely-classic = Classic login (fallback) — username & password
signin-ely-classic-note = Your skin, cape and UUID come straight from Ely.by. Launches inject the SHA-256 verified authlib-injector agent aimed at authserver.ely.by — no URL to configure.
signin-username-email = Ely.by username or email
signin-password = Password
signin-signing-in = Signing in…
signin-sign-in = Sign in
signin-custom-url = Server URL (authlib-injector)
signin-custom-username = Username (3-16 letters, digits, _)
signin-skin-png = Skin PNG:
signin-cape-png = Cape PNG:
signin-add-custom = Add custom account
signin-custom-note = The launcher auto-fetches the SHA-256 verified authlib-injector agent into <shared>/libraries/ on the next launch of this account.

## Settings

settings-sections-aria = Settings sections
settings-back-title = Back to the instance library
settings-appearance = Appearance
settings-java = Java & Memory
settings-horizon = Horizon Engine
settings-storage = Folders
settings-api = API Keys
settings-accessibility = Accessibility
settings-about = About & Updates
settings-accounts-title = Open the dedicated Accounts page
settings-appearance-title = Appearance
settings-appearance-desc = Theme mode and the accent that recolors the entire launcher.
settings-theme = Theme
settings-theme-ground-title = { $name }: { $ground }
settings-dark-ground = Dark ground
settings-light-ground = Light ground
settings-accent = Accent color
settings-icon-pack = Icon pack
settings-icon-pack-desc = The glyph set used across the launcher. Fluent (Auto) follows the theme.
pack-hint-fluent-auto = Freesm Fluent · follows the theme
pack-hint-fluent = Freesm Fluent · light ink
pack-hint-fluent_dark = Freesm Fluent · white ink
pack-hint-breeze_dark = Prism · KDE Breeze dark
pack-hint-breeze_light = Prism · KDE Breeze light
pack-hint-pe_colored = Prism · full-color PE
pack-hint-twemoji = Emoji glyphs · the classic look
theme-preset-twilight-dark = Twilight Dark
theme-preset-twilight-light = Twilight Light
theme-preset-catppuccin-latte = Catppuccin Latte
theme-preset-catppuccin-frappe = Catppuccin Frappé
theme-preset-catppuccin-macchiato = Catppuccin Macchiato
theme-preset-catppuccin-mocha = Catppuccin Mocha
theme-preset-nord = Nord
theme-preset-tokyo-night = Tokyo Night
theme-preset-gruvbox-dark = Gruvbox Dark
theme-preset-gruvbox-light = Gruvbox Light
theme-preset-high-contrast = High Contrast
icon-pack-fluent-auto = Fluent (Auto)
icon-pack-fluent = Fluent Light
icon-pack-fluent_dark = Fluent Dark
icon-pack-breeze_dark = Breeze Dark
icon-pack-breeze_light = Breeze Light
icon-pack-pe_colored = Prism PE Colored
icon-pack-twemoji = Twemoji
settings-custom-theme = Create a custom theme
settings-custom-theme-desc = Build your own palette; it lives in this browser and joins the grid above.
settings-theme-name = Theme name
settings-ground-type = Ground type
settings-dark = Dark
settings-light = Light
settings-token-bg1 = Canvas
settings-token-bg2 = Surface
settings-token-bg3 = Subtle
settings-token-border1 = Border
settings-token-fg1 = Text
settings-token-fg2 = Muted text
settings-token-accent1 = Accent
settings-token-accent2 = Star accent
settings-token-color-label = { $label } color
settings-token-hex-label = { $label } hex
settings-clone-theme = Clone active theme
settings-save-theme = Save theme
settings-import-export = Import / export
settings-theme-json = Paste an exported theme JSON here
settings-export-draft = Export draft
settings-import-json = Import from JSON
settings-clone-title = Copy the active theme's colors into the builder
settings-export-title = Writes the builder draft into the field
settings-import-title = Saves the JSON in the field as a custom theme and applies it
settings-custom-loaded = Loaded the active theme’s tokens — tweak and save.
settings-theme-saved = Saved “{ $name }”.
settings-theme-deleted = Theme deleted.
settings-theme-exported = Theme JSON written below — copy it to share.
settings-theme-expected = Expected a theme object.
settings-theme-imported = Imported “{ $name }”.
settings-theme-import-failed = Import failed: { $error }
settings-delete-theme = Delete { $name }
settings-language = Language
settings-language-desc = Choose the launcher language. Changes apply immediately.
language-en-US = English (US)
language-vi-VN = Tiếng Việt (In progress)
settings-language-translations-title = Help translate TwilightMC
settings-language-fluent-desc = All strings are Project Fluent .ftl files in locales/<lang>/main.ftl. Translations are community-driven on Crowdin — missing languages fall back to English.
settings-crowdin = Translate on Crowdin
settings-java-title = Java & Memory
settings-java-desc = Which JVM runs the game and how much memory it gets.
settings-java-runtime = Java runtime
settings-java-auto = Auto-discovery (recommended)
settings-java-option = Java { $major } — { $home }
settings-java-custom-option = Custom — { $path }
settings-java-probing = Probing system roots…
settings-java-none = No runtimes detected.
settings-java-rescan = Rescan JREs
settings-java-browse = Browse / Add Custom Java…
settings-java-checking = Checking…
settings-java-apply = Apply
settings-java-active = Active runtime:
settings-java-auto-lower = auto-discovery
settings-java-not-applied = (selection not applied yet)
settings-java-added = Added Java { $major } ({ $version })
settings-java-applied = Applied. Launches will use this runtime.
settings-java-reverted = Reverted to auto-discovery.
settings-java-active-badge = active
settings-memory-title = Memory allocation
settings-memory-hint = 0 = launcher default. Recommended: 2048–4096.
settings-save-java = Save Java settings
settings-gc-preset = Garbage Collector Preset
settings-gc-default = Default (JVM default)
settings-gc-auto = Auto (smart)
settings-gc-zgc = Generational ZGC
settings-gc-shenandoah = Shenandoah GC
settings-gc-aikar = Aikar's G1GC
settings-gc-custom = Custom
settings-gc-extra = Extra JVM arguments
settings-gc-preview = Live JVM flags preview
settings-gc-badge-15plus = Java 15+
settings-gc-badge-21to23 = Java 21-23
settings-gc-badge-8to25 = Java 8-25
settings-gc-badge-8u20 = Java 8u20+
settings-choose-java = Select a Java executable
filter-java = Java
settings-horizon-title = Horizon Engine
settings-horizon-desc = The native Rust engine. Instances created with the Horizon loader run vanilla worlds without a JVM; the launcher downloads and verifies Mojang's assets into the shared store before every launch. The binary is never bundled — point the launcher at your own build.
settings-horizon-store = assets/objects/… + horizon-assets.json
settings-horizon-binary = Horizon binary
settings-horizon-placeholder = C:\Horizon\horizon.exe (empty = not configured)
settings-horizon-browse = Browse…
settings-horizon-save = Save
settings-horizon-configured = Configured
settings-horizon-not-configured = Not configured
settings-horizon-missing = (file not found)
settings-horizon-saved = Saved. Horizon instances will launch with this binary.
settings-horizon-cleared = Cleared. Horizon instances cannot launch until a binary is set.
settings-horizon-contract = Launch contract:
settings-horizon-contract-note = Horizon output streams into the console drawer; stopping the engine uses the same process-tree kill as Java instances.
settings-choose-horizon = Select the Horizon engine binary
filter-executable = Executable
settings-folders-title = Folders
settings-folders-desc = Where instances, libraries, mods and downloads live. Blank inputs keep the default under the app data folder.
settings-app-data = App data folder
settings-open-app-data = Open the app data folder in the file explorer
settings-folder-default = (default)
settings-folder-custom = (custom)
settings-folder-reset-title = Back to the default app-data subdirectory
settings-folder-pick = Pick a directory
settings-folder-open = Open this folder in the file explorer
settings-staging = Staging: { $path }
settings-purge = Purge staging
settings-purge-title = Purges the staging area
settings-purge-running = Unavailable while a game is running
settings-folder-instances = Instances
settings-folder-instances-hint = Instance library; adopts an existing Prism or FreesmLauncher store when present
settings-folder-shared = Shared Libraries & Assets
settings-folder-shared-hint = The artifact library launches draw from
settings-folder-versions = Versions
settings-folder-versions-hint = Version metadata & jars
settings-folder-mods = Mods
settings-folder-mods-hint = Central mods folder / cache
settings-folder-icons = Icons
settings-folder-icons-hint = Custom instance icons
settings-folder-java = Java Runtimes
settings-folder-java-hint = Auto-downloaded Java
settings-folder-skins = Skins
settings-folder-skins-hint = Local skins & free capes store
settings-folder-downloads = Downloads
settings-folder-downloads-hint = Downloads & temporary staging
settings-folder-servers = Servers
settings-folder-servers-hint = Server manager root (one folder per server)
settings-api-title = API Keys
settings-api-desc = Optional keys for third-party APIs. The launcher works fully without them — every default flow is keyless.
settings-cf-key = CurseForge API key
settings-cf-configured = (configured)
settings-cf-not-set = (not set)
settings-cf-desc = Used by the in-app CurseForge mod browser and to auto-download mods from imported CurseForge packs. Your key is yours — paste it here, it is saved locally and never bundled with the launcher.
settings-cf-get-key = Get your CurseForge API key at console.curseforge.com
settings-cf-placeholder-saved = •••••••••••• (saved — paste a new key to replace)
settings-cf-placeholder = Paste your CurseForge API key
settings-cf-save-title = Save the CurseForge API key (blank clears it)
settings-cf-saved = Saved. Imported CurseForge packs will resolve their mod downloads.
settings-cf-cleared = Cleared. The zero-key flow (Modrinth core mods + manual import) stays active.
settings-a11y-title = Accessibility
settings-a11y-desc = Assistive profiles that adapt suggestions, installs and pre-launch setup for screen-reader and caption users.
settings-blind-title = Blind Mode
settings-blind-desc = Screen reader & audio navigation. Suggests Minecraft Access and spatial-audio mods on Fabric; Fabric is strongly recommended over Vanilla or Horizon.
settings-blind-aria = Blind Mode (screen reader and audio navigation): suggests Minecraft Access on Fabric and recommends Fabric over Vanilla or Horizon
settings-blind-toggle = Toggle Blind Mode
settings-deaf-title = Deaf Mode
settings-deaf-desc = Closed captions & visual sound cues. Enforces showSubtitles:true in options.txt before every launch and suggests visual-sound Fabric mods.
settings-deaf-aria = Deaf Mode (closed captions and visual sound cues): enforces showSubtitles true in options.txt before launch and suggests visual-sound Fabric mods
settings-deaf-toggle = Toggle Deaf Mode
settings-a11y-status = Blind Mode is { $blind }. Deaf Mode is { $deaf }.
settings-about-title = About & Updates
settings-about-desc = Build info and project links.
settings-about-version = TwilightMC Bolide (alpha-v{ $version })
settings-about-channel = pre-release UI · Bolide channel (alpha builds, may crash and rewrite formats)
settings-github = GitHub repository
settings-releases = Releases (stable builds)
settings-report = Report an issue
settings-kofi = Support on Ko-fi
settings-about-footer = An open-source Minecraft launcher. Vanilla, Fabric and Quilt today; more loaders land in later milestones.

## Edit instance

edit-sections-aria = Instance sections
edit-back = Back to Instances
edit-components = Version Components
edit-mods = Mods
edit-screenshots = Screenshots
edit-logs = Logs
edit-settings = Settings
edit-components-title = Version Components
edit-components-desc = The version stack this instance launches with.
edit-components-mc = Minecraft { $version }
edit-components-loader = Loader: { $loader }
edit-components-last = Last played: { $date }
edit-components-never = never
edit-components-future = Version component switching (up/downgrade with progression) lands in a later milestone.
edit-mods-desc = Every .jar in this instance's mods folder; toggling renames it in place.
edit-mods-installed = Installed ({ $count })
edit-filter-mods = Filter installed mods…
edit-get-more-mods-title = Browse and install mods straight from Modrinth
edit-get-more-mods = Get More Mods
edit-enable = Enable
edit-disable = Disable
edit-delete-mod = Delete { $name }
edit-mods-loading = Loading mods…
edit-mods-empty = No mods installed — use Add Mod to pick .jar files, or Get More Mods.
edit-add-mod = Add Mod
edit-open-mods = Open Mods Folder
edit-open-mods-title = Opens the instance mods folder
edit-worlds = Worlds
edit-worlds-title = Worlds
edit-worlds-desc = Singleplayer worlds in minecraft/saves. Backups are zip archives in the instance backups folder.
worlds-installed = Worlds ({ $count })
worlds-launch = Play
worlds-launch-title = Launches the game straight into { $name }
worlds-backup = Backup
worlds-backup-title = Zips { $name } into the backups folder
worlds-backup-done = Backed up { $name } → { $path }
worlds-loading = Loading worlds…
worlds-empty = No worlds yet — create one in game and it shows up here.
worlds-backups = Backups ({ $count })
worlds-backups-empty = No backups yet — use Backup to zip a world.
worlds-open-backups = Open Backups Folder
worlds-open-backups-title = Opens the instance backups folder
worlds-restore-title = Restores the world inside { $name } back into the saves folder
worlds-restore-confirm-title = Restore this backup?
worlds-restore-confirm = Restoring the world inside { $name } replaces the current world folder of the same name. The game should not be running.
worlds-restore-done = Restored the world from { $name }.
edit-resourcepacks = Resource Packs
edit-resourcepacks-title = Resource Packs
edit-resourcepacks-desc = Pack archives in minecraft/resourcepacks, newest first.
edit-shaderpacks = Shader Packs
edit-shaderpacks-title = Shader Packs
edit-shaderpacks-desc = Shader archives in minecraft/shaderpacks, newest first.
packs-installed = Installed ({ $count })
packs-loading = Loading packs…
packs-empty = No packs yet — download one from Modrinth or import a .zip.
packs-browse-packs = Browse Resource Packs on Modrinth
packs-browse-shaders = Browse Shader Packs on Modrinth
packs-browse-title = Searches Modrinth for packs compatible with this build
packs-add = Import .zip…
packs-add-title = Pick pack archives to import
packs-open-packs = Open Resource Packs Folder
packs-open-packs-title = Opens the resourcepacks folder
packs-open-shaders = Open Shader Packs Folder
packs-open-shaders-title = Opens the shaderpacks folder
packs-download = Download
packs-download-title = Downloads the selected pack into the packs folder
packs-downloaded = Downloaded { $name }.
packs-delete-confirm-title = Delete this pack?
packs-delete-confirm = Removes { $name } from the packs folder for good.
screenshots-copy-image = Copy Image
screenshots-copy-path = Copy Path
screenshots-copied-image = Image copied to the clipboard.
screenshots-copied-path = Path copied to the clipboard.
screenshots-open-folder = Open Folder
screenshots-copy-image-error = Screenshot is not loaded yet.
screenshots-preview-unavailable = Preview unavailable
logs-copy-log = Copy Log
logs-copied-log = Log copied to the clipboard.
logs-empty-content = (empty log file)
logs-select-hint = Select a log or crash report to view its contents.
screenshots-delete-confirm-title = Delete this screenshot?
screenshots-delete-confirm = Removes { $name } from the screenshots folder for good.
screenshots-deleted = Screenshot deleted.
edit-screenshots-title = Screenshots
edit-screenshots-desc = Every PNG in minecraft/screenshots, newest first.
edit-screenshots-loading = Loading screenshots…
edit-screenshots-empty = No screenshots yet — press F2 in game to capture one.
edit-open-screenshots = Open Screenshots Folder
edit-open-screenshots-title = Opens the screenshots folder
edit-logs-title = Logs
edit-logs-desc = Log files in minecraft/logs, newest first. Live game output renders in the console drawer.
edit-logs-loading = Loading logs…
edit-logs-empty = No log files yet — logs appear after the first launch.
edit-open-log-title = Opens this log file
edit-open-console = Open console
edit-open-logs = Open Logs Folder
edit-open-logs-title = Opens the logs folder
edit-open-crash-reports = Crash Reports
edit-open-crash-reports-title = Opens the crash-reports folder
edit-settings-title = Instance Settings
edit-settings-desc = On-disk layout of this instance.
edit-name = Instance name
edit-name-desc = The display name across the grid and context panel; the folder id stays put.
edit-game-folder = Game folder: { $path }
edit-mods-folder = Mods folder: { $path }
edit-icon-title = Instance icon
edit-icon-desc = Pick a bundled launcher icon, a Twemoji, or a custom image.
edit-change-icon = Change icon…
edit-export-title = Export
edit-export-desc = A .zip keeps every file verbatim. A .twpack is a 7z pack of mods, configs, resource and shader packs — logs, crash reports and natives are skipped.
edit-export-zip = Export .zip
edit-export-twpack = Export .twpack
edit-cleanroom-title = Warning (Advanced Users)
edit-cleanroom-body = CleanroomMC runs 1.12.2 on modern Java (21+). Do NOT use it unless you understand how it works — it is prone to crashes and only a limited subset of Forge mods support it.
edit-future = Renaming, loader switching and per-instance java overrides land in a later milestone; use the context panel for groups and copies.
edit-assist-missing =
    { $mods } { $count ->
        [one] is
       *[other] are
    } not installed yet — recommended for your accessibility profile. Required dependencies (e.g. Fabric API) install automatically.
edit-assist-install = Install Recommended Accessibility Mods
edit-assist-installing = Installing…
edit-assist-installed = Accessibility mods installed.

## New instance wizard

wizard-type-releases = Releases
wizard-type-snapshots = Snapshots
wizard-type-betas = Betas
wizard-type-alphas = Alphas
wizard-type-experiments = Experiments
wizard-loader-none = None
wizard-choose-icon = Choose an instance icon
wizard-change = Change
wizard-icon = Icon
wizard-instance-name-version = Instance name ({ $version })
wizard-instance-name = Instance name
wizard-group = Group
wizard-no-group = No group
wizard-loading-versions = Loading version list…
wizard-retry = Retry
wizard-type-release = Release
wizard-type-snapshot = Snapshot
wizard-type-beta = Beta
wizard-type-alpha = Alpha
wizard-type-experiment = Experiment
wizard-version = Version
wizard-released = Released
wizard-type = Type
wizard-latest = latest
wizard-no-versions = No versions match this filter.
wizard-search = Search versions…
wizard-shown = { $count } shown
wizard-types = Types
wizard-mod-loader = Mod loader
wizard-unsupported = This mod loader is not supported yet.
wizard-no-loader = No mod loader is selected.
wizard-horizon-note = Native Rust engine: launches vanilla worlds without Java, using the verified asset store. Set the Horizon binary path in Settings > Horizon Engine before the first launch.
wizard-cleanroom-title = Warning (Advanced Users)
wizard-cleanroom-body = CleanroomMC runs 1.12.2 on modern Java (21+). Do NOT use it unless you understand how it works — it is prone to crashes and only a limited subset of Forge mods support it.
wizard-cleanroom-version = Cleanroom only runs Minecraft 1.12.2 — select that version to continue.
wizard-legacy-warning = Legacy Fabric targets Minecraft { $version } and older; newer versions should use regular Fabric.
wizard-legacy-recommended = Minecraft { $version } predates modern Fabric — Legacy Fabric is the recommended loader for it.
wizard-blind-notice = Blind Mode Notice: Vanilla Minecraft's built-in Narrator lacks 3D world navigation and block inspection. We strongly recommend selecting Fabric or Quilt with Minecraft Access.
wizard-a11y-mods = Accessibility mods
wizard-a11y-installed = Installed right after the instance is created.
wizard-a11y-qfapi = Dependencies resolve through QFAPI.
wizard-loader-version = Loader version
wizard-loading-builds = Loading builds…
wizard-build-placeholder = version (empty = latest stable)
wizard-build-unavailable = Build list unavailable — type a version.
wizard-latest-stable = Latest stable
wizard-unstable = (unstable)
wizard-help = Help
wizard-help-title = Opens the project README
wizard-selected = Selected Minecraft { $version }
wizard-pick = Pick a version to continue
wizard-create-title = Create the instance
wizard-creating = Creating…
wizard-warning-icon = Instance created, but the icon could not be applied: { $error }
wizard-warning-group = Instance created, but the group could not be set: { $error }
wizard-warning-group-append = The group could not be set: { $error }
wizard-warning-mod = Instance created, but { $mod } could not be installed: { $error }
wizard-warning-mod-append = { $mod } could not be installed: { $error }
wizard-platforms-aria = Instance sources
wizard-custom = Custom
wizard-import = Import
wizard-import-title = Import an instance archive
wizard-import-filter = Instance archives
wizard-import-note = Inspect a Prism/MultiMC or CurseForge .zip, or a .mrpack / .twpack, then choose the instance name and group.
wizard-import-url = Archive path or URL
wizard-import-inspect = Inspect
wizard-import-inspecting = Inspecting…
wizard-import-browse = Browse…
wizard-import-source-required = Choose an archive or paste a URL first.
wizard-import-preview-hint = Inspect an archive to preview its format, Minecraft version and mod loader.
wizard-import-format-prism = Prism / MultiMC
wizard-import-format-curseforge = CurseForge
wizard-import-format-modrinth = Modrinth
wizard-import-format-twpack = TwilightPack
wizard-import-loader-none = Vanilla
wizard-import-loader-fabric = Fabric
wizard-import-loader-quilt = Quilt
wizard-import-loader-forge = Forge
wizard-import-loader-neoforge = NeoForge
wizard-import-loader-legacyfabric = Legacy Fabric
wizard-import-loader-cleanroom = Cleanroom
wizard-import-loader-horizon = Horizon
wizard-import-entries = { $count } files
wizard-import-overrides = { $count } overrides
wizard-import-missing-title = Mods that need a manual download
wizard-import-missing-hint = No CurseForge API key is configured, or the author blocks third-party downloads. Open each project in your browser and place the jars in the instance's mods folder.
wizard-import-open-mod = Open project { $id }
wizard-import-required = required
wizard-import-success = Imported “{ $name }”.
wizard-import-missing-status = { $count } mod(s) still need a manual download.
wizard-import-finish = Finish
wizard-import-install = Import instance
wizard-import-installing = Importing…
wizard-coming-soon = Coming soon
wizard-soon = Soon
wizard-refresh = Refresh
wizard-refresh-versions-title = Reload the Minecraft version list
wizard-refresh-loaders-title = Reload the mod loader builds
wizard-loader-none-label = None
wizard-loader-neoforge = NeoForge
wizard-loader-horizon = Horizon (Rust)
wizard-unsupported-short = unsupported
assist-minecraft-access-hint = Core: screen reader & 3D spatial navigation
assist-sound-physics-hint = Optional: spatial acoustics & directional echoes
assist-echosight-hint = Directional sound radar & priority subtitles
assist-subtitles-hint = In-world directional subtitle markers
assist-visible-sound-hint = In-world block/entity sound highlights
assist-soundsight-hint = Visual threat ring & enhanced subtitles

## Modrinth browser

modrinth-title = Browse & Download Mods
modrinth-subtitle = Modrinth · { $instance } · MC { $version }{ $loader }
modrinth-categories = Categories
modrinth-sort = Sort
modrinth-sort-relevance = Relevance
modrinth-sort-downloads = Most downloaded
modrinth-sort-updated = Recently updated
modrinth-sort-newest = Newest
modrinth-search = Search Modrinth mods…
browser-search-modrinth-mod = Search Modrinth mods…
browser-search-modrinth-resourcepack = Search Modrinth resource packs…
browser-search-modrinth-shader = Search Modrinth shaders…
browser-search-curseforge-mod = Search CurseForge mods…
browser-search-curseforge-resourcepack = Search CurseForge resource packs…
browser-search-curseforge-shader = Search CurseForge shaders…
modrinth-searching = Searching Modrinth…
modrinth-type-to-search = Type to search.
modrinth-no-results = No mods for MC { $version }{ $loader } match “{ $query }”.
modrinth-installed = installed
modrinth-queued = queued
modrinth-by = by { $author } · { $downloads } downloads
modrinth-by-author = by { $author }
modrinth-download-count = { $downloads } downloads
modrinth-unknown-author = unknown
modrinth-select = Select a mod to inspect it.
modrinth-version = Version
modrinth-loading-versions = Loading versions…
modrinth-latest = Latest ({ $version })
modrinth-latest-compatible = Latest compatible
modrinth-no-mods = No mods selected
modrinth-selected =
    { $count } { $count ->
        [one] mod
       *[other] mods
    } selected
modrinth-clear = Clear
modrinth-review = Review and Confirm…
modrinth-review-title = Stages every queued mod plus its required dependencies for confirmation
modrinth-filters = Filters
modrinth-selected-version = Selected version
modrinth-select-for-download = Select for download
modrinth-remove-from-queue = Remove from Queue
curseforge-key-required = CurseForge search needs your personal API key.
curseforge-key-hint = Add it in Settings → API Keys, or install mods manually: download the .jar in your browser, then use Add in the Mods tab.
curseforge-install = Install
curseforge-installed = Installed { $name }.
curseforge-imported = Imported { $name } into the mods folder.
curseforge-blocked = Blocked download
curseforge-fallback-title = Manual download required
curseforge-fallback-desc = { $name } is blocked for direct distribution, so the launcher cannot download it. Open it in your browser to download, then import the downloaded .jar.
curseforge-open-browser = Open in Browser
curseforge-import-jar = Import Downloaded .jar…
modrinth-category-optimization = Optimization
modrinth-category-utility = Utility
modrinth-category-library = Library
modrinth-category-worldgen = World generation
modrinth-category-accessibility = Accessibility
modrinth-category-technology = Technology
modrinth-category-adventure = Adventure
modrinth-category-decoration = Decoration
modrinth-category-mobs = Mobs
modrinth-category-equipment = Equipment
modrinth-category-food = Food
modrinth-category-storage = Storage
modrinth-category-transportation = Transportation
modrinth-category-game-mechanics = Game mechanics

## Mod download review

review-title = Confirm download
review-desc = You're about to download the following mods — only rows with a check will be downloaded.
review-resolving = Resolving mods and their dependencies…
review-mod = Mod
review-version = Version
review-file = File
review-source = Source
review-size = Size
review-required-by = required by { $mods }
review-already-installed = already installed
review-selection = your selection
review-empty = The queue is empty.
review-downloading =
    Downloading { $count } { $count ->
        [one] file
       *[other] files
    }…
review-will-download = { $selected } of { $total } rows will download
review-back = Back
review-confirm = Confirm & Download
review-confirm-button = Downloading…
review-confirm-title = Downloads every checked file (SHA-1 verified) into this instance's mods folder
review-downloaded =
    Downloaded { $count } { $count ->
        [one] mod file
       *[other] mod files
    }.
review-download-failed = Download failed: { $error }

## Pack install modals

install-title = Install Modpack
install-reading = Reading pack…
install-instance-name = Instance name
install-busy = Installing…
install-confirm = Install Modpack
install-title-attr = Stages the pack's downloads and overrides into a new instance
install-files = { $count } files
install-downloaded-title = { $downloads } downloaded, { $overrides } overrides extracted
install-vanilla = Vanilla
install-latest-stable = (latest stable)
twpack-title = Import .twpack
twpack-reading = Reading pack…
twpack-desc = The pack ships mods, configs, resource packs and shader packs — never logs, crash reports or natives. Every archive path is validated before extraction.
twpack-import-busy = Importing…
twpack-import = Import .twpack
twpack-import-title = Validates every archive path, then extracts into a new instance
twpack-entries = { $count } entries

## Icon picker

icons-title = Instance icon
icons-close = Close
icons-close-aria = Close icon picker
icons-sources-aria = Icon sources
icons-tab-prism = Prism / Freesm
icons-tab-legacy = Classic (Freesm 32×32)
icons-tab-twemoji = Twemoji
icons-tab-custom = Custom image…
icons-choose-aria = Choose an instance icon
icons-custom-desc = Pick a PNG, JPG, SVG, WEBP or ICO from disk. The file is copied into the instance directory, so the instance stays self-contained.
icons-copying = Copying…
icons-choose-file = Choose file…

## Accent picker

accent-builtin = built-in
accent-preset-title = { $name } accent
accent-preset-aria = { $name } accent color
accent-custom = Custom accent color
accent-hex = Accent hex value
accent-invalid = invalid hex
accent-live = live preview

## 3D skin viewer

skin-3d-unavailable = 3D preview unavailable
skin-outer-toggle = Toggle the hat/jacket outer layer
skin-outer = Outer layer: { $state }

## Servers

servers-title = Servers & P2P
servers-new = New Server
servers-scanning = Scanning servers…
servers-empty-title = No local servers yet
servers-empty-body = Create one with the wizard — Vanilla, Paper, Purpur, Fabric or the Rust-native PumpkinMC.
server-state-running = Running
server-state-starting = Starting
server-state-stopping = Stopping
server-state-stopped = Stopped
server-connect = Minekube Connect
server-tunnel-active = Tunnel active
server-waiting-endpoint = Waiting for endpoint…
server-offline = Offline
server-copy-share = Copy Share Link
server-start-tunnel = Start to activate the tunnel
server-reinstall-connect = (Re)install Connect plugin
server-offline-notice = Offline Server Notice: With online-mode=false, anyone can connect using any username or spoof administrator UUIDs.
server-install-authme = Install AuthMeReloaded (Recommended for Offline Servers)
server-graceful-stop = Graceful Stop
server-start = Start
server-restart = Restart
server-open-folder = Open Folder
server-edit-properties = Edit Properties
server-delete = Delete
server-no-output = No output yet — start the server.
server-console-running = console command…
server-console-stopped = start the server first
server-props-aria = Edit server properties
server-props-title = server.properties — { $id }
server-props-saved = Properties saved — restart the server to apply.
server-action-failed = Server action failed
server-save-failed = Save failed
server-authme-installed = AuthMeReloaded installed into plugins/.
server-connect-installed = Minekube Connect plugin installed into plugins/.
server-share-copied = Share address copied — send it to your friends!
server-share-copy-failed = Copy failed — select the address manually.
server-delete-title = Delete server?
server-delete-message = This removes the server directory and every file inside it.
server-created = Server { $name } created.
server-orphaned-badge = Orphaned (Running)
server-kill-orphaned = Kill Orphaned Process
server-connect-status-disabled = Disabled
server-connect-instructions = Friends join over the internet via the share address while the server runs — no port forwarding. The address looks like yourname.connect.minekube.net.
server-connect-enable = Enable Connect
server-connect-disable = Disable Connect
server-connect-install = Install Plugin
server-connect-remove = Remove Connect
server-connect-enabled-toast = Minekube Connect enabled — the plugin installs on the next server start.
server-connect-disabled-toast = Minekube Connect disabled.
server-connect-removed = Minekube Connect plugin removed.
# server control panel
servers-manage = Manage
server-tab-console = Console
server-tab-files = Files
server-tab-properties = Properties
server-tab-startup = Startup
server-tab-backups = Backups
server-tab-network = Network
server-metric-cpu = CPU
server-metric-memory = Memory
server-metric-disk = Disk
server-metric-uptime = Uptime
server-metric-state = State
server-metric-disk-hint = Total size of the server folder.
server-address-label = Server Address
server-address-copied = Server address copied.
server-copy-address = Copy server address
server-props-native-hint = Native servers keep their port in Pumpkin.toml — only server-port is applied here.
server-startup-preview = Startup command
server-startup-memory-min = Min memory (MiB)
server-startup-memory-max = Max memory (MiB)
server-startup-port = Port
server-startup-jvm-flags = Custom JVM flags
server-startup-jvm-hint = Space-separated; inserted before the memory flags.
server-startup-java = Java runtime
server-startup-java-hint = Blank picks the best auto-detected runtime for the server version.
server-startup-eula = Auto-accept the EULA
server-startup-eula-hint = Writes eula=true on start; off keeps acceptance pending until you edit eula.txt.
server-startup-running-block = Stop the server before editing its startup.
server-startup-saved = Startup saved — applied on the next start.
server-files-name = Name
server-files-size = Size
server-files-modified = Modified
server-files-new-folder = New Folder
server-files-folder-name = Folder name
server-files-folder-created = Folder created.
server-files-upload = Upload Files
server-files-uploaded = { $count } file(s) uploaded.
server-files-archive = Archive Selected
server-files-archived = Archived to { $name }
server-files-delete-selected = Delete Selected
server-files-delete-confirm = Delete { $count } selected entries?
server-files-deleted = { $count } item(s) deleted.
server-files-not-editable = Only text configs can be edited here — use Open Folder for other files.
server-files-empty = This folder is empty.
server-files-editor-title = Text editor
server-files-unsaved = Unsaved changes
server-files-discard = Discard
server-files-saved = File saved.
server-backups-desc = Backups zip the world and identity configs into the server's backups folder.
server-backups-create = Create Backup
server-backups-created = Created
server-backups-created-toast = Backup created.
server-backups-empty = No backups yet.
server-backups-restore = Restore backup?
server-backups-restore-confirm = Restore { $name } over the current server files?
server-backups-restored = Backup restored — restart the server to apply.
server-backups-delete-confirm = Delete { $name }?
server-network-connect-desc = Minekube Connect gives this server a public share address. Enable it in the creation wizard.

## New server wizard

newserver-title = New Server
newserver-aria = New server
newserver-step1 = Pick the server software.
newserver-checking = Checking available versions…
newserver-cpu = Host CPU target: { $target } — native builds are matched to it ({ $label }).
newserver-step2 = Pick the version for { $software }.
newserver-fetching = Fetching versions…
newserver-step3 = Name, port and memory.
newserver-name = Server name
newserver-name-placeholder = My Server
newserver-port = Port
newserver-memory = Memory: { $min }-{ $max } MiB
newserver-max-below-min = Max memory is below min — the flag is skipped.
newserver-step4 = Who can reach the server?
newserver-local = Local Only
newserver-local-desc = LAN and localhost — no tunnel.
newserver-connect = Enable Minekube Connect Tunnel
newserver-connect-desc = Friends join over the internet without port forwarding (connect.minekube.com).
newserver-offline = Offline Mode (online-mode=false)
newserver-offline-desc = Allows cracked / third-party clients. TwilightMC recommends AuthMeReloaded for these servers.
newserver-offline-warning = Offline Server Notice: With online-mode=false, anyone can connect using any username or spoof administrator UUIDs. You can 1-click install AuthMeReloaded from the server card afterwards.
newserver-create = Create Server
newserver-creating = Creating…
newserver-next-networking = Next: Networking
newserver-next = Next
newserver-back = Back
software-paper-note = High-performance Bukkit server
software-purpur-note = Paper fork, maximum configurability
software-vanilla-note = Official Mojang server
software-fabric-note = Lightweight mod loader
software-pumpkin-note = Multithreaded native server
software-velocity-note = Modern proxy (no world)
software-forge-note = Mod loader — auto-installer
software-neoforge-note = Mod loader, auto-installer
software-steel-note = Native server, auto-download

## BareBones gate

barebones-title = BareBones Template required
barebones-aria = BareBones Template required
barebones-message = CleanroomMC requires the BareBones Template (Cleanroom) mods (Fugue, MixinBooter, ConfigAnytime, Scalar Legacy) to boot 1.12.2 safely.
barebones-install = Install core mods from Modrinth — no key needed
barebones-install-note = Fugue, MixinBooter, ConfigAnytime for 1.12.2 (forge)
barebones-import = Import Downloaded .zip…
barebones-import-note = CurseForge pack zip (manifest.json + overrides/)
barebones-open = Open BareBones Template on CurseForge
barebones-open-note = Download the zip there, then import it above
barebones-scalar = Scalar Legacy is CurseForge-only: the 1-click install covers the other three and the gate passes without it.
barebones-close = Close
barebones-launch = Launch 1.12.2
barebones-installed =
    Installed { $count } { $count ->
        [one] core mod
       *[other] core mods
    }: Fugue, MixinBooter, ConfigAnytime.
barebones-scalar-note = Scalar Legacy is CurseForge-only and was skipped — the gate is satisfied without it. Import the full BareBones zip if you want it too.
barebones-imported =
    Imported { $name } { $version }: { $count } { $count ->
        [one] override file
       *[other] override files
    }.
barebones-skipped =
    { $count } { $count ->
        [one] listed mod file was
       *[other] listed mod files were
    } not downloaded — add a CurseForge API key in Settings > API Keys to fetch them automatically.
barebones-import-filter = CurseForge modpack
barebones-import-title = Import a CurseForge modpack zip

## Install prompts

install-modpack-title = Install Modpack
install-modpack-drop = Drop an .mrpack or .twpack here
install-modpack-or-paste = or paste its path / URL below
install-modpack-placeholder = C:\downloads\pack.mrpack  |  https://modrinth.com/…
install-modpack-installing = Installing…
install-modpack-install = Install .mrpack
delete-title = Delete instance
delete-body = Delete { $name } and all of its game files?
delete-move-trash = Move to Trash
delete-move-trash-title = Moves the folder into .twilight-trash next to the instances root
delete-permanently = Delete Permanently
delete-permanently-title = Removes this instance directory permanently
prompt-rename-title = Rename instance
prompt-rename-message = Choose a new display name for { $name }.
prompt-rename-placeholder = Instance name
prompt-rename-confirm = Rename
dialog-export-instance = Export instance
dialog-export-twpack = Export instance as .twpack
dialog-export-zip = Export instance as .zip
filter-zip-archive = Zip archive
filter-twilight-pack = Twilight pack
filter-images = Images
filter-mods = Mods
edit-add-mods-title = Add mods
