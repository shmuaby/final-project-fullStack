import { FieldErrors, UseFormRegister, FieldValues } from "react-hook-form";

export interface EmailInputInterface {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  emailValidation: {
    required: string;
    pattern: {
      value: RegExp;
      message: string;
    };
  };
}
