import React, { FunctionComponent } from "react";

export interface Props {
  variant?: "primary" | "default" | "link";
  size?: "large" | "default" | "small";
  label: string;
}

const VARIANT_COLOR = {
  primary: "blue",
  default: "grey",
  link: "purple",
};

const FONT_SIZE = {
  large: "18px",
  default: "14px",
  small: "10px",
};

const Button: FunctionComponent<Props> = ({
  variant,
  size,
  children,
  label,
}) => (
  <button
    style={{
      background: VARIANT_COLOR[variant || "default"],
      fontSize: FONT_SIZE[size || "default"],
    }}
  >
    {label}
    {children}
  </button>
);

export default Button;
