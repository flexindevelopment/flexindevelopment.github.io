---
sidebar_position: 1
---

# Anti Bump

Removes speed gains in bump and break boosts, without any consumption 0.0 resmon.

Framework: **Standalone**

## Installation

- Download resource from https://keymaster.fivem.net/asset-grants.
- Add in your server.cfg.

```cfg title="server-data/server.cfg"
ensure flexin_antibump
```

- Config.

```lua title="config.lua"
config = {}

config.debug = false

config.blacklist = {
  ["faction2"] = true
}
```

- Check **[guides](guides/introduction.md)**.
