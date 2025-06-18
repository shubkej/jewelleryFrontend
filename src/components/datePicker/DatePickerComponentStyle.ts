import { BoxProps, SxProps } from "@mui/material";
import React from "react";
import muiVariables from "../../Styles/Mui-variables/index";

const DatePickerComponentStyle = {
  mainBox: {
    sx: {
      display: "flex",
      flexDirection: "column",
      m: 0,
      width: "100%",
    },
  } as BoxProps,
  dateTitle: {
    marginBottom: "8px",
    fontWeight: "600",
    fontSize: muiVariables.subHeadingFontSize,
    lineHeight: "17.07px",
    color: `${muiVariables.subTextColor}`,
  } as React.CSSProperties,
  datePickerSx: {
    // bgcolor: `${muiVariables.avatarBgColor}`,
    ".MuiSvgIcon-root": {
      fill: `${muiVariables.dateFillColor}`,
      height: "24px",
      width: "24px",
      border: "1.5px",
    },
    ".MuiOutlinedInput-input": {
      padding: "8px 14px",
    },
    ".MuiOutlinedInput-root.Mui-disabled": {
      cursor: "not-allowed",
    },
    height: "38px",
    borderRadius: "6px",
    "& fieldset": {
      border: "1px solid #D8D8D8",
    },
  } as SxProps,
};

export default DatePickerComponentStyle;
