---
sidebar_position: 1
---

# Vehicle Spawn With Stance

1. Locate the vehicle spawn code in your framework, and add the stance application export, passing the vehicle entity as a parameter:

    ```lua
      if GetResourceState("flexin_stancetuning") == "started" then
        exports.flexin_stancetuning:Apply(vehicle)
      end
    ```

By following these guidelines, the vehicle will spawn with the stance applied.
