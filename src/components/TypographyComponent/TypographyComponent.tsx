import { SxProps, Typography } from "@mui/material";
import React, { ReactNode } from "react";
import { TypographyProps as MuiTypographyProps } from "@mui/material";
import TypographyComponentStyles from "./TypographyComponentStyles";

export interface TypographyProps {
  text: string | ReactNode;
  variant?: MuiTypographyProps["variant"];
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "textPrimary"
    | "textSecondary"
    | "inherit";
  sx?: SxProps | object;
  onClick?: () => void;
  className?: string;
}

const TypographyComponent: React.FC<TypographyProps> = ({ sx, ...props }) => {
  const overloadCss = {
    ...TypographyComponentStyles.textSx,
    ...sx,
  };
  return (
    <Typography
      variant={props?.variant ?? "body1"}
      color={props?.color ?? "textPrimary"}
      sx={overloadCss}
      {...props}
    >
      {props.text}
    </Typography>
  );
};

export default TypographyComponent;
