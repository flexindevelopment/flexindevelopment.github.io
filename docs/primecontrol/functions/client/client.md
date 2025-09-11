---
sidebar_position: 1
---

# Client

## Apply

Apply the anti-bump fix manually to the provided vehicle (the script already applies antibump automatically).

```lua
exports.flexin_primecontrol:Apply(Vehicle)
```

- Vehicle: `number`

## RemoveBushEffects

Apply the remove bush effects manually to the provided vehicle (the script already applies remove bush effects automatically if active in config).

```lua
exports.flexin_primecontrol:RemoveBushEffects(Vehicle)
```

- Vehicle: `number`

## ApplyManual

Apply the manual manually to the provided vehicle (the script already applies manual automatically if active in config).

```lua
exports.flexin_primecontrol:ApplyManual(Vehicle)
```

- Vehicle: `number`

## ToggleAntilag

Activate/Deactivate the antilag after it has been installed.

```lua
exports.flexin_primecontrol:ToggleAntilag(Vehicle)
```

- Vehicle: `number`

## HasAntilag

Check if the vehicle has antilag installed.

```lua
exports.flexin_primecontrol:HasAntilag(Vehicle)
```

- Vehicle: `number`

## StatusAntilag

Check if the antilag is activated.

```lua
exports.flexin_primecontrol:StatusAntilag(Vehicle)
```

- Vehicle: `number`

## ToggleLaunchControl

Activate the launch control.

```lua
exports.flexin_primecontrol:ToggleLaunchControl(Vehicle)
```

- Vehicle: `number`

## HasLaunchControl

Check if the vehicle can perform launch control.

```lua
exports.flexin_primecontrol:HasLaunchControl(Vehicle)
```

- Vehicle: `number`

## StatusLaunchControl

Check if the launch control is activated.

```lua
exports.flexin_primecontrol:StatusLaunchControl(Vehicle)
```

- Vehicle: `number`

## ToggleTractionControl

Activate/Deactivate the traction control.

```lua
exports.flexin_primecontrol:ToggleTractionControl(Vehicle)
```

- Vehicle: `number`

## StatusTractionControl

Check if the traction control is activated.

```lua
exports.flexin_primecontrol:StatusTractionControl(Vehicle)
```

- Vehicle: `number`

## GetNitroFuel

Get nitro fuel

```lua
exports.flexin_primecontrol:GetNitroFuel()
```

Return:
 - NitroFuel: `number`

## GetNitroFlame

Get nitro flame

```lua
exports.flexin_primecontrol:GetNitroFlame()
```

Return:
 - NitroFlame: `boolean`
