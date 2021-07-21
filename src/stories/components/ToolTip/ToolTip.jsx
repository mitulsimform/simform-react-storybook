import React from "react";
import PropTypes from "prop-types";

import { Button as AntDButton, Tooltip } from "antd";

// import "./button.css";
/**
 * Primary UI component for user interaction
 */
export const CustomToolTip = ({ children, title }) => {
  return (
    <>
      <Tooltip title={title}>{children}</Tooltip>
    </>
  );
};

CustomToolTip.propTypes = {
  /**
   * Title to show in toooltip
   */
  title: PropTypes.string.isRequired,
  /**
   * Title to show in toooltip
   */
  children: PropTypes.string.isRequired,
};

CustomToolTip.defaultProps = {
  title: null,
};
