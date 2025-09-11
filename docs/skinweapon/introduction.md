---
sidebar_position: 1
---

# Skin Weapon

Script with a system for selling, managing and applying skins to weapons. All skins purchased and applied are visible to all players, remembering that it will only apply to those who have the skin purchased and equipped, and the application occurs automatically after the player pulls the weapon. The system is not made with an add-on weapon with a skin, but rather as if it were an attach, the skin is applied to the standard GTA weapon itself without any changes to the weapon, only the customization of the skin is added.

Framework: **vRP, QBCore, QBox and ESX.**

## Installation

- Download resource from: https://keymaster.fivem.net/asset-grants.
- Download `ox_lib` dependency from: https://github.com/overextended/ox_lib/releases.
- Add in your server.cfg.

```cfg title="server-data/server.cfg"
ensure ox_lib
ensure flexin_skinweapon
ensure flexin_skinweapon_assets
```

- Config.

```lua title="config.lua"
return {
  Framework = "qb",
  Command = "skinw",
  Groups = false,
  Transfer = true,
  Webhooks = {
    Purchase = "",
    Transfer = ""
  }
}
```

- Check fxmanifest if you are using the vRP Framework.

```lua title="fxmanifest.lua"
fx_version "bodacious"
game "gta5"
lua54 "yes"

name "flexin_skinweapon"
description "Skin Weapon"
author "JesusBGK"
version "2.7.0"

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

ui_page "web/build/index.html"

files {
  "config.lua",
  "locales/*.json",
  "web/**/*",
  "web/**/**/*",
  "modules/**/client.lua",
  "modules/bridge/**/client.lua",
  "data/*.lua",
  "stream/*.ytyp"
}

data_file "DLC_ITYP_REQUEST" "mt_boxpreta.ytyp"

escrow_ignore {
  "modules/**/*.lua",
  "modules/**/**/*.lua",
  "config.lua",
  "data/*.lua"
}
```
