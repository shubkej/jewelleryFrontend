export interface LoginType {
  email: string;
  password: string;
}
export interface SignUpType {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
export interface OtpVerificationType {
  otp: string;
  email: string;
}
export interface ResendOtpType {
  email: string;
}
export interface ForgetPasswordType {
  email: string;
}
export interface ResetPasswordType {
  email: string;
  newPassword: string;
  confirmPassword: string;
}
