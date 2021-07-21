import React, { useState } from "react";
import "antd/dist/antd.css";
import PropTypes from "prop-types";
import "./slider.css";

/**
 * Primary UI component for user interaction
 */
export const CustomSliderAntd = ({ onChange }) => {
  return (
    <div class="slidecontainer">
      <input type="range" min="1" max="100" onChange={onChange} />
    </div>
  );
};

CustomSliderAntd.propTypes = {
  /**
   * Change slider
   */
  onChange: PropTypes.func,
};

CustomSliderAntd.defaultProps = {
  onChange: undefined,
};
