---
sidebar_position: 1
---

# Handling

1. **Never use the `fDownForceModifier` variable in `handling.meta` files**. If your vehicles have this line, remove it immediately. This also applies to native game vehicles.

2. **Configure the `SubHandlingData` correctly**. Ensure that the vehicle type is set to `"CCarHandlingData"`. The easiest way to do this is by copying and pasting the following template:

    ```xml
    <SubHandlingData>
      <Item type="CCarHandlingData">
      </Item>
      <Item type="NULL" />
      <Item type="NULL" />
    </SubHandlingData>
    ```

3. **If the vehicle has variables such as `fBackEndPopUpCarImpulseMult`, `fBackEndPopUpBuildingImpulseMult`, and `fBackEndPopUpMaxDeltaSpeed`**, maintain the structure below, adjusting the values as needed:

    ```xml
    <SubHandlingData>
      <Item type="CCarHandlingData">
        <fBackEndPopUpCarImpulseMult value="0.000000" />
        <fBackEndPopUpBuildingImpulseMult value="0.000000" />
        <fBackEndPopUpMaxDeltaSpeed value="0.000000" />
      </Item>
      <Item type="NULL" />
      <Item type="NULL" />
    </SubHandlingData>
    ```

4. **Remove the `FLAG_DROP_SUSPENSION_WHEN_STOPPED` flag in `vehicles.meta`**. This flag is responsible for making the vehicle's suspension drop when it comes to a stop, which can cause unwanted bouncing behavior. To prevent this, locate the `<flags>` section in the `vehicles.meta` file and remove the following flag:

    ```xml
    <flags>FLAG_DROP_SUSPENSION_WHEN_STOPPED</flags>
    ```

By following these guidelines, you will avoid unwanted issues in vehicle behavior.
