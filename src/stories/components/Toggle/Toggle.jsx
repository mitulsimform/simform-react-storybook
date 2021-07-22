import React, { useState } from "react";
import { Switch } from "antd";
import PropTypes from "prop-types";
import "./toggle.css";

/**
 * Primary UI component for user interaction
 */
export const Toggle = ({ onChange, backgroundColor, defaultValue }) => {
  const [switchValue, setSwitchValue] = useState(defaultValue);
  return (
    <>
      <Switch
        defaultChecked
        onClick={(e) => {
          debugger;
          setSwitchValue(e);
          onChange(e);
        }}
        style={backgroundColor && { backgroundColor }}
        checked={switchValue}
      />
    </>
  );
};

Toggle.propTypes = {
  /**
   * Optional click handler
   */
  onChange: PropTypes.func,
  /**
   * Optional default value
   */
  defaultValue: PropTypes.string,
};

Toggle.defaultProps = {
  onChange: () => {},
  defaultValue: "true",
};
