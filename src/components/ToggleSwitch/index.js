import React from "react";
import { Label, ToggleSwitchContainer } from "./ToggleSwitchElements";

const ToggleSwitch = ({ checked, setChecked }) => {
  return (
    <ToggleSwitchContainer>
      <strong>Dark Mode</strong>
      <Label htmlFor="toggle" checked={checked}>
        <input
          type="checkbox"
          name="toggle"
          id="toggle"
          checked={checked}
          onChange={() => setChecked((checked) => !checked)}
        />
      </Label>
    </ToggleSwitchContainer>
  );
};

export default ToggleSwitch;
