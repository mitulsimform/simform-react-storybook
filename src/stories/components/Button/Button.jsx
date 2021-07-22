import React from "react";
import PropTypes from "prop-types";

import { Button as AntDButton } from "antd";

import "./button.css";
/**
 * Primary UI component for user interaction
 */
export const Button = ({
  backgroundColor,
  size,
  label,
  disabled,
  typeOfButton,
  ...props
}) => {
  return (
    <>
      <AntDButton
        type="button"
        className={[
          `button-default-${size}`,
          `button-${typeOfButton}`,
          `button`,
        ].join(" ")}
        {...props}
        disabled={disabled}
      >
        {label}
      </AntDButton>
    </>
  );
};

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  disabled: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /**
   * Button contents
   */

  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */

  onClick: PropTypes.func,
  /**
   * Button Type
   */
  typeOfButton: PropTypes.oneOf([
    "action",
    "secondary",
    "tertiary",
    "upgrade",
    "destructive",
    "accent",
  ]),
};

Button.defaultProps = {
  backgroundColor: null,
  size: "medium",
  onClick: undefined,
  disabled: false,
  typeOfButton: "action",
};
