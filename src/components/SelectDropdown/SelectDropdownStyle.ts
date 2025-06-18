import React from "react";
import { BoxProps } from "@mui/material";
import muiVariables from "../../Styles/Mui-variables";

const SelectDropdownStyle = {
  mainBox: {
    display: "flex",
    flexDirection: "column",
    m: 0,
    width: "100%",
  } as BoxProps,
  selectLabel: {
    margin: "0px 0px 8px 0px",
    fontWeight: "600",
    fontSize: muiVariables.subHeadingFontSize,
    lineHeight: "17.07px",
    color: `${muiVariables.subTextColor}`,
  } as React.CSSProperties,
  customSelectStyles: {
    control: (base: any, state: { isFocused: any }) => ({
      ...base,
      minHeight: "42px",
      // height: "38px",
      fontSize: muiVariables.subHeadingFontSize,
      fontWeight: 400,
      // match with the menu
      borderRadius: 6,
      // Overwrites the different states of border
      border: "1px solid #D8D8D8",
      cursor: "pointer",
      // Removes weird border around container
      boxShadow: state.isFocused ? null : null,
      "&:hover": {
        // Overwrites the different states of border
        borderColor: state.isFocused ? `${muiVariables.progressFillColor}` : "",
      },
    }),
    menu: (base: any) => ({
      ...base,
      // override border radius to match the box
      borderRadius: 0,
      // kill the gap
      marginTop: 0,
      fontSize: muiVariables.subHeadingFontSize,
      fontWeight: 400,
    }),
    menuList: (base: any) => ({
      ...base,
      // kill the white space on first and last option
      padding: 0,
      fontSize: muiVariables.subHeadingFontSize,
      fontWeight: 400,
    }),
    placeholder: (base: any) => ({
      ...base,
      fontSize: muiVariables.subHeadingFontSize,
      fontWeight: 400,
    }),
    indicatorSeparator: (base: any) => ({
      ...base,
      display: "none",
    }),
    dropdownIndicator: (base: any) => ({
      ...base,
      color: `${muiVariables.mainTextColor} !important`,
    }),
  },
};

export default SelectDropdownStyle;
