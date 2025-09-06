interface CustomInputFieldProps {
  input: any;
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  meta: {
    touched?: boolean;
    error?: string;
  };
}

export default CustomInputFieldProps;
