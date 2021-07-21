import React from "react";
import { Tooltip, Button } from "antd";
// import PropTypes from "prop-types";
// import "./tooltip.css";

/**
 * Primary UI component for user interaction
 */
export const CustomToolTip = ({}) => {
  return (
    <Tooltip placement="topLeft" title="Prompt Text">
      <Button>Align edge / 边缘对齐</Button>
    </Tooltip>
  );
};

CustomToolTip.propTypes = {
  /**
   * Optional click handler
   */
  onChange: PropTypes.func,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

CustomToolTip.defaultProps = {
  onChange: undefined,
  onClick: undefined,
};
