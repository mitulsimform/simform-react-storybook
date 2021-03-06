import React, { useEffect, useState } from "react";
import { Switch } from "antd";
import PropTypes from "prop-types";
import "./toggle.css";

/**
 * Primary UI component for user interaction
 */
export const Toggle = ({ onChange, backgroundColor, defaultValue }) => {
  const [switchValue, setSwitchValue] = useState(defaultValue);
  useEffect(() => {
    setSwitchValue(defaultValue);
  }, [defaultValue]);
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
  defaultValue: PropTypes.bool,
};

Toggle.defaultProps = {
  onChange: () => {},
  defaultValue: "true",
};
