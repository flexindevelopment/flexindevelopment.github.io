---
sidebar_position: 1
---

# Remapping

Script to remap any vehicle, adjusting its stability, curve, grip and traction, leaving the vehicle in the best possible configuration.

Framework: **vRP, QBCore, QBox and ESX.**

## Installation

- Download resource from: https://keymaster.fivem.net/asset-grants.
- Download `ox_lib` dependency from: https://github.com/overextended/ox_lib/releases.
- Add in your server.cfg.

```cfg title="server-data/server.cfg"
ensure ox_lib
ensure flexin_remapping
```

- Config.

```lua title="config.lua"
return {
  debug = false,
  framework = "qb",
  command = "remap",
  groups = {
    ["mechanic"] = 0,
  },
  item = "fueltech",
  needItem = false,
    
  remapping = {
    rotation = {
      min = 0,
      max = 2
    },
    steering = {
      min = 30,
      max = 80
    },
    curvedgrip = {
      min = 1,
      max = 3
    },
    speedgrip = {
      min = 1,
      max = 3
    },
    slidetraction = {
      min = 18,
      max = 40
    },
    slowtraction = {
      min = 0,
      max = 1
    }
  },
	
  activeAntilag = false,
  antilagConfig = {
    turbo = {
      RPMSpoolStart = 0.2,
      RPMSpoolEnd = 0.5,
      minBoost = -0.8,
      maxBoost = 10.0,
      spoolRate = 0.999999999,
      unspoolRate = 0.97,
      falloffRPM = 0.0,
      falloffBoost = 0.0
    },

    boostByGear = {
      enabled = false
    },

    antiLag = {
      minRPM = 0.65,
      soundEffects = true,
      visualEffects = true,
      periodMs = 150,
      randomMs = 250,
      loudOffThrottle = true,
      loudOffThrottleIntervalMs = 500
    }
  },

  inverseEnabled = false,
  inverseLevel = 1,
    
  driftSmoke = false,
  smokeSize = 0.2,
  smokeDensity = 10,

  blacklist = {
    ["police"] = true,
    ["police2"] = true,
    ["police3"] = true
  },

  locations = {
    ["bennys"] = {
      pos = vec3(-211.84, -1323.96, 30.27),
      heading = 179.54,
      groups = {
        ["mechanic"] = 0,
      }
    },
  },

  handlingBackup = {
    "fMass",
    "fInitialDragCoeff",
    "fPercentSubmerged",
    "vecCentreOfMassOffset",
    "vecInertiaMultiplier",
    "fDriveBiasFront",
    "nInitialDriveGears",
    "fInitialDriveForce",
    "fDriveInertia",
    "fClutchChangeRateScaleUpShift",
    "fClutchChangeRateScaleDownShift",
    "fInitialDriveMaxFlatVel",
    "fBrakeForce",
    "fBrakeBiasFront",
    "fHandBrakeForce",
    "fSteeringLock",
    "fTractionCurveMax",
    "fTractionCurveMin",
    "fTractionCurveLateral",
    "fTractionSpringDeltaMax",
    "fLowSpeedTractionLossMult",
    "fCamberStiffnesss",
    "fTractionBiasFront",
    "fTractionLossMult",
    "fSuspensionForce",
    "fSuspensionCompDamp",
    "fSuspensionReboundDamp",
    "fSuspensionUpperLimit",
    "fSuspensionLowerLimit",
    "fSuspensionRaise",
    "fSuspensionBiasFront",
    "fAntiRollBarForce",
    "fAntiRollBarBiasFront",
    "fRollCentreHeightFront",
    "fRollCentreHeightRear",
    "fCollisionDamageMult",
    "fWeaponDamageMult",
    "fDeformationDamageMult",
    "fEngineDamageMult",
    "fPetrolTankVolume",
    "fOilVolume",
    "fSeatOffsetDistX",
    "fSeatOffsetDistY",
    "fSeatOffsetDistZ",
    "nMonetaryValue",
    "fWeaponDamageScaledToVehHealthMult",
    "fPopUpLightRotation",
    "fDownforceModifier",
    "fRocketBoostCapacity",
    "fBoostMaxSpeed"
  }
}
```

- Check fxmanifest if you are using the vRP Framework.

```lua title="fxmanifest.lua"
fx_version "bodacious"
game "gta5"
lua54 "yes"

name "flexin_remapping"
description "Remapping"
author "JesusBGK"
version "2.3.0"

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
  "data/presets.lua",
  "locales/*.json",
  "web/index.html",
  "web/scripts/*.js",
  "web/styles/*.css",
  "modules/**/client.lua",
  "dlcturbosounds_sounds.dat54.rel",
  "dlc_turbosounds/turbosounds.awc"
}

data_file "AUDIO_WAVEPACK" "dlc_turbosounds"
data_file "AUDIO_SOUNDDATA" "dlcturbosounds_sounds.dat"

escrow_ignore {
  "modules/**/*.lua",
  "modules/**/**/*.lua",
  "config.lua",
  "data/presets.lua"
}
```
