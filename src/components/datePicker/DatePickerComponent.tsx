import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePickerProps as DatePickerCompProps } from "@mui/x-date-pickers/DatePicker";
import { Box } from "@mui/material";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import DatePickerComponentStyle from "./DatePickerComponentStyle";
import { DesktopDatePicker } from "@mui/x-date-pickers";

interface DatePickerProps extends DatePickerCompProps<any> {
  labelText: string;
  value?: string;
  onChange: (value: any) => void;
  onClick?: () => void;
  minDate?: any;
  maxDate?: any;
}

const DatePickerComponent: React.FC<DatePickerProps> = (props) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={"en-gb"}>
      <Box {...DatePickerComponentStyle.mainBox}>
        <label style={DatePickerComponentStyle.dateTitle}>
          {props.labelText}
        </label>
        <DesktopDatePicker
          slots={{
            openPickerIcon: CalendarTodayOutlinedIcon,
          }}
          sx={DatePickerComponentStyle.datePickerSx}
          format={"DD/MM/YYYY"}
          {...props}
          slotProps={{
            ...props.slotProps,
            textField: {
              ...props.slotProps?.textField,
              placeholder: "",
            },
            field: {
              readOnly: true,
              ...props.slotProps?.field,
            },
          }}
        />
      </Box>
    </LocalizationProvider>
  );
};

export default DatePickerComponent;
