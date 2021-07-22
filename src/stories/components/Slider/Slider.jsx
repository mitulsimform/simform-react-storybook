import React, { useState } from "react";
import "antd/dist/antd.css";
import PropTypes from "prop-types";
import "./slider.css";

/**
 * Primary UI component for user interaction
 */
export const CustomSliderAntd = ({ onChange, defaultValue }) => {
  const [sliderValue, setSliderValue] = useState(defaultValue);
  return (
    <div className="slidecontainer">
      <input
        type="range"
        min="1"
        max="100"
        onChange={(e) => {
          onChange(e);
          setSliderValue(e.target.value);
        }}
        data-testid="sliderId"
        value={sliderValue}
      />
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
  onChange: () => {},
  defaultValue: 1,
};
