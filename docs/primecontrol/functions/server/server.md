---
sidebar_position: 1
---

# Server

## SetAntilag

Set antilag to the defined vehicle with the specified sound and color.

```lua
exports.flexin_primecontrol:SetAntilag(Network,State,Sound,Color)
```

- Network: `number`
- State: `boolean`
- Sound: `string`
- Color: `string`

## GetNitro

Returns the nitro fuel and color of a vehicle.

```lua
exports.flexin_primecontrol:GetNitro(Network)
```

- Network: `number`

<u>**Example**</u>

```lua
local NitroFuel,Color = exports.flexin_primecontrol:GetNitro(Network)

print(NitroFuel,Color)
--[[
    2000 "red"
]]
```

## SetNitro

Set nitro to the defined vehicle with the specified fuel amount and color.

```lua
exports.flexin_primecontrol:SetNitro(Network,State,Fuel,Color)
```

- Network: `number`
- State: `boolean`
- Fuel: `number`
- Color: `string`

## SetNitroFuel

Set nitro fuel to the defined vehicle.

```lua
exports.flexin_primecontrol:SetNitroFuel(Network,Fuel)
```

- Network: `number`
- Fuel: `number`

## SetNitroColor

Set nitro color to the defined vehicle.

```lua
exports.flexin_primecontrol:SetNitroColor(Network,Color)
```

- Network: `number`
- Color: `string`

## GetVehicleStall

Returns the stall amount of a vehicle.

```lua
exports.flexin_primecontrol:GetVehicleStall(Network)
```

- Network: `number`

<u>**Example**</u>

```lua
local Stall = exports.flexin_primecontrol:GetVehicleStall(Network)

print(Stall)
--[[
    3
]]
```
## SetVehicleStallFix

Set vehicle stall fix.

```lua
exports.flexin_primecontrol:SetVehicleStallFix(Network)
```

- Network: `number`
