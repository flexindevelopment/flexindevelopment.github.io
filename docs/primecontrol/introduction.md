---
sidebar_position: 1
---

# Prime Control

Prime Control is an advanced modular vehicle system for FiveM, designed to provide complete control and extreme customization over physics, performance, and visual/audio effects. Perfect for servers seeking realism, competition, or arcade fun, with all settings adaptable to different gameplay styles.

Framework: **vRP, QBCore, QBox and ESX.**

## Installation

- Download resource from https://keymaster.fivem.net/asset-grants.
- Download `ox_lib` dependency from: https://github.com/overextended/ox_lib/releases.
- Add in your server.cfg.

```cfg title="server-data/server.cfg"
ensure ox_lib
ensure flexin_primecontrol
```

- Config.

```lua title="config.lua"
return {
  debug = false,
  framework = "qb", -- (qb, esx, creative_network, creative_v5, vrpex)
  groups = { -- permission to open handling editor/speed test put false to leave no permission check (ace permission "admin" already allowed)
    -- ["mechanic"] = 0,
  },

  -- dev commands
  devCommands = false,

  -- handling editor
  handlingEditor = {
    decimalPlaces = 3,
    keepInput = false,
    commandOpen = "handling",
    keyOpen = "F9" -- Input Parameter from https://docs.fivem.net/docs/game-references/input-mapper-parameter-ids/keyboard/
  },

  -- speed test
  speedTest = {
    commandOpen = "speedtest",
    keyOpen = "F10", -- Input Parameter from https://docs.fivem.net/docs/game-references/input-mapper-parameter-ids/keyboard/
    commandReset = "resetspeedtest",
    keyReset = "F11", -- Input Parameter from https://docs.fivem.net/docs/game-references/input-mapper-parameter-ids/keyboard/
    commandSpeedUnit = "speedunit"
  },

  -- anti bump
  antiBump = {
    enable = true,
    blacklist = {
      ["faction2"] = true
    }
  },

  -- remove bush effects
  removeBushEffects = {
    enable = true,
    blacklist = {
      ["faction2"] = true
    }
  },

  -- manual
  manual = {
    enable = true,
    allVehicles = false,
    selectedVehicles = {
      ["club"] = true
    }
  },

  -- antilag
  antilag = {
    enable = true,
    command = true,
    explosionSpeed = 400, -- I recommend to leave this value at 350. Up to you tho, I cant tell you what to do..
    RPM = 0.74,
    defaultSoundEffect = "default2", -- (sultan2, default, superv8, vacca, eurosz, toysupmk4, murcisp, subej22, default2, default3, antilagold)
    soundVolume = "high", -- (high, low)
    method = "native", -- (native, particle) -- "native" uses the default color of the "veh_xs_vehicle_mods" particle, which does not support multicolor. "particle" supports all available colors.
    particleSize = 1.0,
    lightTrail = true
  },

  -- nitro
  nitro = {
    enable = true,
    command = true,
    keyNitro = "LCONTROL", -- Input Parameter from https://docs.fivem.net/docs/game-references/input-mapper-parameter-ids/keyboard/
    keyPurge = "LSHIFT", -- Input Parameter from https://docs.fivem.net/docs/game-references/input-mapper-parameter-ids/keyboard/
    power = 2.0,
    particleSize = 1.0
  },

  -- launch control
  launchControl = true,

  -- traction control
  tractionControl = true,

  -- remove weight passenger
  removeWeightPassenger = true,

  -- vehicle stall
  vehicleStall = {
    enable = true,
    amount = 4, -- Number of stalls for the vehicle to completely break down
    health = 10, -- Health difference needed to stall (LastHealth - CurrentHealth)
    speed = 60, -- Speed difference needed to stall (LastSpeed - CurrentSpeed)
    baseParticleSize = 0.2 -- Base size of the particle effect
  },

  -- disable air control
  disableAirControl = true,

  -- prop remover
  propRemover = {
    enable = true,
    delay = 10,
    props = {
      -- props remover list
    }
  }
}
```

- Check fxmanifest if you are using the vRP Framework.

```lua title="fxmanifest.lua"
fx_version "bodacious"
game "gta5"
lua54 "yes"

name "flexin_primecontrol"
description "Prime Control"
author "JesusBGK"
version "1.0.3"

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
  "server/*.lua"
}

client_scripts {
  "client/*.lua"
}

ui_page "web/index.html"

files {
  "config.lua",
  "locales/*.json",
  "web/index.html",
  "web/assets/index.css",
  "web/assets/index.js",
  "modules/**/client.lua",
  "audio/*.dat151.rel",
  "audio/*.dat54.rel",
  "audio/*.dat10.rel",
  "audio/**/*.awc"
}

data_file "AUDIO_WAVEPACK" "audio/dlc_primecontrol"
data_file "AUDIO_SOUNDDATA" "audio/dlcprimecontrol_sounds.dat"

data_file "AUDIO_WAVEPACK" "audio/dlc_vehicle_dumpvalve"
data_file "AUDIO_SOUNDDATA" "audio/vehicle_dumpvalve.dat"

escrow_ignore {
  "modules/**/*.lua",
  "modules/**/**/*.lua",
  "config.lua"
}
```

- Check **[guides](guides/introduction.md)**.
