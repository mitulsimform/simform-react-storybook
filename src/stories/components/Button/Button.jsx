import React from "react";
import PropTypes from "prop-types";
import "./button.css";
import { Button as AntDButton } from "antd";
import styled from "styled-components";

/**
 * Primary UI component for user interaction
 */
const CustomButton = styled(AntDButton)``;
export const Button = ({
  backgroundColor,
  size,
  label,
  disabled,
  ...props
}) => {
  return (
    <CustomButton
      type="button"
      className={[`button-default-${size}`, `button`].join(" ")}
      style={backgroundColor && { backgroundColor }}
      {...props}
      disabled={disabled}
    >
      {label}
    </CustomButton>
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
};

Button.defaultProps = {
  backgroundColor: null,
  size: "medium",
  onClick: undefined,
  disabled: false,
};
