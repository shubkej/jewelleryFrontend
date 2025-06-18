import { FC } from "react";
import Select from "react-select";
import { Box, FormHelperText } from "@mui/material";
import SelectDropdownStyle from "./SelectDropdownStyle";
import muiVariables from "../../Styles/Mui-variables";

interface SelectProps {
  id?: string | undefined;
  name?: string;
  label?: string;
  placeholder?: string;
  defaultValue?: string;
  isDisabled?: boolean;
  isLoading?: boolean;
  isClearable?: boolean;
  isSearchable?: boolean;
  optionsData: Array<any>;
  className?: any;
  value?: any;
  error?: boolean | undefined | string | undefined | any;
  helperText?: string | undefined | boolean;
  onChange?: (value: any) => void;
  onBlur?: (value: any) => void | any;
  customStyle?: any;
  isMulti?: boolean;
  required?: boolean;
  noOptionsText?: string | undefined;
}

const SelectDropdown: FC<SelectProps> = ({
  id,
  name,
  label,
  className,
  placeholder,
  defaultValue,
  isDisabled,
  isLoading,
  isClearable,
  isSearchable,
  optionsData,
  value,
  onChange,
  onBlur,
  customStyle = {
    ...SelectDropdownStyle.customSelectStyles,
    menuList: (base: any) => ({
      ...base,
      padding: 0,
      fontSize: muiVariables.subHeadingFontSize,
      fontWeight: 400,
      border: `1px solid ${muiVariables.borderColor}`,
      boxShadow: "0px 40px 64px 0px rgba(12, 12, 12, 0.08)",
      // height: fixHeight ? fixHeight : undefined,
    }),
  },
  error,
  required,
  noOptionsText,
  ...props
}) => {
  
  return (
    <Box sx={SelectDropdownStyle.mainBox}>
      {label?.length ? (
        <label style={SelectDropdownStyle.selectLabel}>
          {label}
          {required ? <span style={{ color: "red" }}> *</span> : ""}
        </label>
      ) : null}
      <Select
        id={id}
        className="basic-single"
        classNamePrefix="select"
        defaultValue={defaultValue}
        isDisabled={isDisabled}
        isLoading={isLoading}
        isClearable={isClearable}
        isSearchable={isSearchable}
        name={name}
        options={optionsData}
        onBlur={onBlur}
        styles={customStyle}
        placeholder={placeholder}
        onChange={onChange}
        value={value && Object.keys(value).length === 0 ? "" : value}
        noOptionsMessage={({ inputValue }) =>
          !inputValue ? noOptionsText : "No results found"
        }
        {...props}
      />
      {error && <FormHelperText error>{error}</FormHelperText>}
    </Box>
  );
};

export default SelectDropdown;
