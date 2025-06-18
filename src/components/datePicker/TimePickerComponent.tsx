import ScheduleIcon from "@mui/icons-material/Schedule";
import { Box } from "@mui/material";
import { DesktopTimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePickerProps } from "@mui/x-date-pickers/TimePicker";
import { Dayjs } from "dayjs";
import * as React from "react";
import DatePickerComponentStyle from "./DatePickerComponentStyle";

interface TimePickerComponentProps extends TimePickerProps<Dayjs> {
  labelText: string;
  onClick?: () => void;
}

const TimePickerComponent: React.FC<TimePickerComponentProps> = (props) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={"en-us"}>
      <Box
        {...DatePickerComponentStyle.mainBox}
        className={props.disabled ? "not-allowed-cursor" : undefined}
      >
        <label
          style={{
            ...DatePickerComponentStyle.dateTitle,
            cursor: props.disabled ? "not-allowed" : "default",
          }}
        >
          {props.labelText}
        </label>
        <DesktopTimePicker
          ampm={false}
          sx={DatePickerComponentStyle.datePickerSx}
          format={"HH:mm"}
          timeSteps={{ minutes: 1 }}
          closeOnSelect={false}
          slots={{
            openPickerIcon: ScheduleIcon,
            ...props.slots,
          }}
          slotProps={{
            ...props.slotProps,
            textField: {
              ...props.slotProps?.textField,
              placeholder: "",
            },
            field: {
              readOnly: false,
              ...props.slotProps?.field,
            },
          }}
          {...props}
        />
      </Box>
    </LocalizationProvider>
  );
};

export default TimePickerComponent;
