---
sidebar_position: 1
---

# Stance Tuning

Script to create a stance configuration that makes it possible to change the spacing and camber of the rear and front wheels and suspension height, leaving the vehicle with the best visual stance possible.

Framework: **vRP, QBCore, QBox and ESX.**

## Installation

- Download resource from: https://keymaster.fivem.net/asset-grants.
- Download `ox_lib` dependency from: https://github.com/overextended/ox_lib/releases.
- Add in your server.cfg.

```cfg title="server-data/server.cfg"
ensure ox_lib
ensure flexin_stancetuning
```

- Config.

```lua title="config.lua"
return {
  debug = false,
  framework = "qb",
  command = "stance",
  groups = {
    ["mechanic"] = 0,
  },
  item = "suspension",
  needItem = false,

  blacklist = {
    ["police"] = true,
    ["police2"] = true,
    ["police3"] = true
  },

  locations = {
    ["stanceandreas"] = {
      pos = vec3(770.53, 1300.55, 359.67),
      heading = 0.13,
      groups = {
        ["mechanic"] = 0,
      }
    },
    -- ["bennys"] = {
      -- pos = vec3(-211.84, -1323.96, 30.27),
      -- heading = 179.54
    -- },
  }
}
```

- Check fxmanifest if you are using the vRP Framework.

```lua title="fxmanifest.lua"
fx_version "bodacious"
game "gta5"
lua54 "yes"

name "flexin_stancetuning"
description "Stance Tuning"
author "JesusBGK"
version "3.1.0"

dependencies {
  "ox_lib"
}

shared_scripts {
  "@ox_lib/init.lua",
  -- "@vrp/lib/Utils.lua" -- uncomment this line if you are using vRP
}

ox_libs {
  "locale",
  "table",
  "math"
}

server_scripts {
  "@oxmysql/lib/MySQL.lua",
  "server.lua"
}

client_script "client.lua"

ui_page "web/index.html"

files {
  "config.lua",
  "locales/*.json",
  "web/index.html",
  "web/scripts/*.js",
  "web/styles/*.css",
  "modules/**/client.lua"
}

escrow_ignore {
  "modules/**/*.lua",
  "modules/**/**/*.lua",
  "config.lua"
}
```

- Check **[guides](guides/introduction.md)**.
