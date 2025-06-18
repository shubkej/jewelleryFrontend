import { ChangeEvent, FC } from "react";
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  FilledInput,
  Input,
  InputBaseProps,
} from "@mui/material";
import InputFieldComponentStyle from "./InputFieldComponentStyle";

interface InputProps {
  value?: string;
  type?: 'text' | 'number' | 'password' | 'file' | 'email' | 'date';
  label?: string;
  placeHolder?: string;
  autoComplete?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
  inputProps?: any;
  id?: string;
  name?: string;
  disabled?: boolean;
  InputProps?: Partial<InputBaseProps>;
  inputRef?: React.Ref<any>;
  sx?: any;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  readOnly?: boolean;
  required?: boolean;
  endAdornment?: React.ReactNode;
  onPaste?: (e: React.ClipboardEvent<HTMLInputElement>) => void;
  onCopy?: (e: React.ClipboardEvent<HTMLInputElement>) => void;
  variant?: 'outlined' | 'filled' | 'standard'; // <-- added here
}

const InputFieldComponent: FC<InputProps> = ({
  value,
  label = "",
  placeHolder,
  onChange = () => console.warn("No onChange handler assigned"),
  id,
  name,
  error,
  inputProps,
  onBlur,
  type = "text",
  readOnly,
  required,
  onPaste,
  onCopy,
  InputProps,
  inputRef,
  sx,
  endAdornment,
  autoComplete,
  disabled,
  variant = "outlined", 
  ...props
}) => {
  const inputId = id || `input-${name || label}`;

  const InputComponent =
    variant === "filled" ? FilledInput : variant === "standard" ? Input : OutlinedInput;

  return (
    <FormControl
      variant={variant}
      error={error}
      fullWidth
      sx={{ ...InputFieldComponentStyle.mainBox, ...sx }}
    >
      {label && (
        <InputLabel htmlFor={inputId}>
          {label}
          {required && <span style={{ color: 'red' }}> *</span>}
        </InputLabel>
      )}

      <InputComponent
        id={inputId}
        type={type}
        value={value}
        onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e)}
        label={variant === 'outlined' ? label : undefined}
        name={name}
        onBlur={onBlur}
        onPaste={onPaste}
        onCopy={onCopy}
        inputRef={inputRef}
        readOnly={readOnly}
        disabled={disabled}
        endAdornment={endAdornment}
        autoComplete={autoComplete}
        inputProps={{
          ...inputProps,
          readOnly,
        }}
        {...InputProps}
        {...props}
      />
    </FormControl>
  );
};

export default InputFieldComponent;
