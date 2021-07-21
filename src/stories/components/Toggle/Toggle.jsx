import React, { useState } from "react";
import { Switch } from "antd";
import PropTypes from "prop-types";
import "./toggle.css";

/**
 * Primary UI component for user interaction
 */
export const Toggle = ({ onChange, backgroundColor, onClick }) => {
  return (
    <>
      <Switch
        defaultChecked
        onChange={onChange}
        style={backgroundColor && { backgroundColor }}
        onClick={onClick}
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
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Toggle.defaultProps = {
  onChange: undefined,
  onClick: undefined,
};
