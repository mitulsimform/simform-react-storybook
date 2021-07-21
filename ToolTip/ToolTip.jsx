import React from "react";
import { Tooltip as AntdToolTip, Button } from "antd";
// import PropTypes from "prop-types";
import "./tooltip.css";

/**
 * Primary UI component for user interaction
 */
export const CustomTooltip = ({}) => {
  return (
    <AntdToolTip placement="topLeft" title="Prompt Text">
      <Button>Align edge / 边缘对齐</Button>
    </AntdToolTip>
  );
};

CustomTooltip.propTypes = {
  /**
   * Change slider
   */
  onChange: PropTypes.func,
};

CustomTooltip.defaultProps = {
  onChange: undefined,
};
