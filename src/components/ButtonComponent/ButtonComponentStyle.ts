import { SxProps } from "@mui/material";
import muiVariables from "../../Styles/Mui-variables";

const ButtonComponentStyle = {
  buttonSx: {
    textTransform: "none !important",
    bgColor: `${muiVariables.primaryBtnColor}`,
    height: "42px",
    borderRadius: "6px",
    fontSize: muiVariables.mainHeadingFontSize,
    fontWeight: 500,
    boxShadow: "none",
    padding: "11px 40px 11px 40px",
  } as SxProps,
};

export default ButtonComponentStyle;
