---
name: twilight-debug
description: Debug live TwilightMC desktop app via its localhost HTTP/HTTPS debug protocol and MCP-over-HTTPS endpoint. Use when diagnosing UI, IPC, launch, download, crash, or settings issues in a running TwilightMC dev instance.
---

# TwilightMC Debug Protocol Skill

## When to use

Use this skill when TwilightMC is running in **Developer Mode** and the user has enabled the debug HTTP/HTTPS endpoint and/or MCP endpoint in **Settings → Developer → Debug protocol**. It gives live, redacted diagnostics: health/state, trace events, logs, redacted instances, and redacted config.

Do **not** use it for normal source-only analysis when the app is not running. Do not expose or persist debug API keys in repo files, commit messages, or logs.

## Preconditions / safety

- Endpoints bind to `127.0.0.1` only (loopback). Never tunnel them publicly.
- Respect user-granted scopes. `401` means missing/invalid API key; `403` means scope not granted; `-32003` is MCP scope denial.
- API key is configured in app settings; pass it via env var:

```bash
export TWILIGHT_DEBUG_KEY="twdbg_..."
```

- Default ports: HTTP/HTTPS `28445`, MCP `28446` (user-configurable).
- TLS is enabled by default. The app generates a local self-signed cert at `<app-data>/debug-tls/cert.pem`. Show/copy path from Settings.

## HTTPS (default)

Use cert verification when possible:

```bash
curl --cacert "<CERT_PEM_PATH>" \
  -H "Authorization: Bearer $TWILIGHT_DEBUG_KEY" \
  "https://127.0.0.1:28445/health"
```

Loopback self-signed fallback (only if cert path unavailable):

```bash
curl -k -H "Authorization: Bearer $TWILIGHT_DEBUG_KEY" "https://127.0.0.1:28445/health"
```

## Plain HTTP fallback (only when user disabled TLS)

```bash
curl -H "Authorization: Bearer $TWILIGHT_DEBUG_KEY" "http://127.0.0.1:28445/health"
```

Only use when the user explicitly enabled plain HTTP mode; warn that loopback traffic is unencrypted.

## Endpoints and scopes

All endpoints are read-only JSON. Required scope in parentheses.

| Endpoint | Scope | Purpose |
|---|---|---|
| `GET /health` | `read_state` | Liveness/service check |
| `GET /state` | `read_state` | Dev mode, endpoint config, cert path, granted scopes |
| `GET /events?since=<seq>&kind=<kind>&limit=<n>` | `read_events` | Incremental trace events |
| `GET /logs?tail=<n>` | `read_logs` | Recent trace events/tail |
| `GET /instances` | `read_instances` | Redacted instance metadata |
| `GET /config` | `read_config` | Redacted settings.json |

Auth headers accepted: `Authorization: Bearer <key>` or `X-Twilight-Debug-Key: <key>`.

## MCP over HTTPS

MCP endpoint is **HTTPS-only** at `https://127.0.0.1:<mcp_port>/mcp`. It supports JSON-RPC 2.0 methods used by MCP clients:

- `initialize`, `notifications/initialized`
- `tools/list`, `tools/call`
- `resources/list`, `resources/read`
- `server/discover` (modern header/body compatible)

Tools (scope-gated): `twilight_health`, `twilight_state`, `twilight_events`, `twilight_logs`, `twilight_instances`, `twilight_config`.

Example initialize:

```bash
curl --cacert "<CERT_PEM_PATH>" \
  -H "Authorization: Bearer $TWILIGHT_DEBUG_KEY" \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc":"2.0","id":1,"method":"initialize","params":{"protocolVersion":"2025-11-25","capabilities":{},"clientInfo":{"name":"debug-agent","version":"1.0"}}}' \
  "https://127.0.0.1:28446/mcp"
```

## Bug-hunting workflow

1. **Check health/state**: confirm effective endpoints, TLS, cert path, granted scopes.
2. **Pull baseline events**: `GET /events?since=0&limit=200`.
3. **Reproduce issue** in app (launch, download, crash, UI action).
4. **Poll incrementally**: `GET /events?since=<last_seq>`; inspect `ipc_ok`, `ipc_err`, `ui_error`, `launch_event`, `download`.
5. **Correlate with code**: map `source`/`summary` to Rust commands in `crates/twilight-ui/src/` and frontend callers in `crates/twilight-ui/ui/src/`.
6. **Fix minimally**; rerun quality gates and reproduce.
7. **Export trace** from Settings if needed for local evidence; keep redacted.

## Troubleshooting

- **401 Unauthorized**: missing/wrong key, or key required but not configured.
- **403 Forbidden / -32003**: scope not granted in Settings.
- **Connection refused**: endpoint disabled, dev mode off, wrong port, or app not running.
- **TLS cert error**: use app cert path via `--cacert`; fallback `-k` only on loopback for local debugging.
- **No events**: debug capture endpoint not enabled, or reproduction not performed after enabling.
