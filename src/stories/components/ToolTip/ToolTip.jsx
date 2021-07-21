import React from "react";
import PropTypes from "prop-types";

import { Button as AntDButton, Tooltip } from "antd";

// import "./button.css";
/**
 * Primary UI component for user interaction
 */
export const CustomToolTip = ({ children, title, toolTipPlaceMent }) => {
  return (
    <>
      <Tooltip title={title} placement={toolTipPlaceMent}>
        {children}
      </Tooltip>
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

  toolTipPlaceMent: PropTypes.oneOf([
    "top",
    "left",
    "right",
    "bottom",
    "topLeft",
    "topRight",
    "bottomLeft",
    "bottomRight",
    "leftTop",
    "leftBottom",
    "rightTop",
    "rightBottom",
  ]),
};

CustomToolTip.defaultProps = {
  title: null,
  children: "",
  toolTipPlaceMent: "top",
};
