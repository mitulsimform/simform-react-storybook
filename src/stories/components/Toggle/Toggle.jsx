import React, { useState } from "react";
import { Switch } from "antd";
import PropTypes from "prop-types";
import "./toggle.css";

/**
 * Primary UI component for user interaction
 */
export const Toggle = ({
  onChange,
  backgroundColor,
  defaultValue,
  checked,
}) => {
  const [switchValue, setSwitchValue] = useState(defaultValue);
  return (
    <>
      <Switch
        defaultChecked
        onClick={(e) => {
          setSwitchValue(e);
          onChange(e);
        }}
        style={
          backgroundColor && {
            backgroundColor: switchValue ? backgroundColor : null,
          }
        }
        checked={checked || defaultValue}
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
  defaultValue: PropTypes.bool,
  /**
   * Checked props value
   */
  checked: PropTypes.bool,
};

Toggle.defaultProps = {
  onChange: () => {},
  defaultValue: true,
};
