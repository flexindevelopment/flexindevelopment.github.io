---
sidebar_position: 1
---

# Animations

The most complete animation menu, with diverse functionalities and many animations, everything in the script is customizable, such as categories, animations, binds and nui color.

Framework: **vRP, QBCore, QBox and ESX.**

## Installation

- Download resource from: https://keymaster.fivem.net/asset-grants.
- Download `ox_lib` dependency from: https://github.com/overextended/ox_lib/releases.
- Add in your server.cfg.

```cfg title="server-data/server.cfg"
ensure ox_lib
ensure flexin_animations
```

- Config.

```lua title="config.lua"
return {
  Debug = false,
  Framework = "qb",
  Standalone = true,
  LineUp = false,

  OpenMenuCommand = "flexin_animations_open",

  OpenMenuDefaultKey = "F3",

  CancelAnimationCommandToogle = false,

  CancelAnimationCommand = "flexin_animations_cancel",

  CancelAnimationDefaultKey = "F6",

  NUIColor = "#26C9FF",
  BlurBackground = true,

  DisableInCar = false,

  Pointing = false,
  DefaultPointingKey = "B",

  SaveWalkStyle = true,
  SaveFaceExpressionStyle = true,

  Crouch = false,
  CrouchControl = 36,
  DefaultCrouchKey = "LCONTROL",

  HandsUp = false,
  HandsUpDefaultKey = "X",

  QuickAnims = true,
  QuickAnimsAmount = 9,
  QuickAnimKey1 = "NUMPAD1",
  QuickAnimKey2 = "NUMPAD2",
  QuickAnimKey3 = "NUMPAD3",
  QuickAnimKey4 = "NUMPAD4",
  QuickAnimKey5 = "NUMPAD5",
  QuickAnimKey6 = "NUMPAD6",
  QuickAnimKey7 = "NUMPAD7",
  QuickAnimKey8 = "NUMPAD8",
  QuickAnimKey9 = "NUMPAD9",

  BlockPlacement = {
    ["style"] = true,
    ["synced"] = true,
    ["face"] = true
  },

  Categories = {
    {
      id = 2,
      name = "main",
      title = "Principal",
      icon = "nui://flexin_animations/web/build/assets/main.svg"
    },
    {
      id = 3,
      name = "stand",
      title = "De pé",
      icon = "nui://flexin_animations/web/build/assets/stand.svg"
    },
    {
      id = 4,
      name = "party",
      title = "Festa",
      icon = "nui://flexin_animations/web/build/assets/party.svg"
    },
    {
      id = 5,
      name = "help",
      title = "Ajuda",
      icon = "nui://flexin_animations/web/build/assets/help.svg"
    },
    {
      id = 6,
      name = "sport",
      title = "Esporte",
      icon = "nui://flexin_animations/web/build/assets/sport.svg"
    },
    {
      id = 7,
      name = "other",
      title = "Outras",
      icon = "nui://flexin_animations/web/build/assets/other.svg"
    },
    {
      id = 8,
      name = "prop",
      title = "Props",
      icon = "nui://flexin_animations/web/build/assets/prop.svg"
    },
    {
      id = 9,
      name = "face",
      title = "Face",
      icon = "nui://flexin_animations/web/build/assets/face.svg"
    },
    {
      id = 10,
      name = "style",
      title = "Andar",
      icon = "nui://flexin_animations/web/build/assets/style.svg"
    },
    {
      id = 11,
      name = "synced",
      title = "Shared",
      icon = "nui://flexin_animations/web/build/assets/synced.svg"
    }
  }
}
```

- Check fxmanifest if you are using the vRP Framework.

```lua title="fxmanifest.lua"
fx_version "bodacious"
game "gta5"
lua54 "yes"

name "flexin_animations"
description "Animation Menu"
author "JesusBGK"
version "1.1.0"

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
  "web/build/index.html",
  "web/build/assets/*.svg",
  "web/build/assets/*.js",
  "web/build/assets/*.webp",
  "modules/**/client.lua",
  "modules/bridge/**/client.lua"
}

escrow_ignore {
  "modules/**/*.lua",
  "modules/**/**/*.lua",
  "config.lua"
}
```
