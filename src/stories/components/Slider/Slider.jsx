import React, { useEffect, useState } from "react";
import { Slider, Switch } from "antd";

import "antd/dist/antd.css";
import PropTypes from "prop-types";
import "./slider.css";

/**
 * Primary UI component for user interaction
 */
export const CustomSliderAntd = ({ onChange, defaultValue }) => {
  const [sliderValue, setSliderValue] = useState(defaultValue);
  useEffect(() => {
    setSliderValue(defaultValue);
  }, [defaultValue]);
  return (
    <div className="slidecontainer">
      <Slider
        defaultValue={defaultValue}
        disabled={false}
        onChange={(e) => {
          onChange(e);
          setSliderValue(e);
        }}
        value={sliderValue}
        data-testid="sliderId"
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
