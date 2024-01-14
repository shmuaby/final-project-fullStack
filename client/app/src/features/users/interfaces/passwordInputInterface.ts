import { FieldErrors, UseFormRegister, FieldValues } from "react-hook-form";

export interface PasswordInputInterface {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  passwordValidation: {
    required: string;
    pattern: {
      value: RegExp;
      message: string;
    };
  };
}
