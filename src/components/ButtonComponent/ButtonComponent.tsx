import { Button, SxProps } from "@mui/material";
import { FC, ReactNode } from "react";
import ButtonComponentStyle from "./ButtonComponentStyle";

export interface ButtonProps {
  text: string | ReactNode;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  sx?: SxProps | object;
  color?: "primary" | "secondary" | "success" | "error";
  onClick?: () => void;
  variant?: "outlined" | "contained" | "text";
  className?: string;
}

const ButtonComponent: FC<ButtonProps> = ({ sx, ...props }) => {
  const overloadCss = {
    ...ButtonComponentStyle.buttonSx,
    ...sx,
  };
  return (
    <Button
      disableRipple
      disableTouchRipple
      variant={props?.variant ?? "contained"}
      sx={overloadCss}
      type={props?.type}
      {...props}
    >
      {props.text}
    </Button>
  );
};
export default ButtonComponent;
