import React from "react";
import { BoxProps, SxProps } from "@mui/material";
import muiVariables from "../../Styles/Mui-variables";

const InputFieldComponentStyle = {
  mainBox: {
    display: "flex",
    flexDirection: "column",
    m: 0,
    width: "100%",
  } as BoxProps,
  inputLabel: {
    marginBottom: "8px",
    fontWeight: "600",
    fontSize: muiVariables.subHeadingFontSize,
    lineHeight: "17.07px",
    color: `${muiVariables.subTextColor}`,
    textAlign: "start",
  } as React.CSSProperties,
  inputTextFiledSx: {
    border: "0",
    "& fieldset": { border: "none" },
    "&.Mui-focused fieldset": {
      border: "2px solid red",
    },
    "& .MuiInputBase-root.MuiOutlinedInput-root": {
      padding: "0px !important",
    },
    ".MuiFormHelperText-root": {
      margin: "3px !important",
      textAlign: "start",
    },
    fontWeight: 400,
    fontSize: muiVariables.subHeadingFontSize,
  } as SxProps,
  inputPropsStyle: {
    border: "1px solid #D8D8D8",
    color: "black",
    borderRadius: "6px",
    fontWeight: 400,
    padding: "8.5px 14px",
  } as React.CSSProperties,
};

export default InputFieldComponentStyle;
