import { Field, Input } from '@fluentui/react-components';
import CustomInputFieldProps from '../../models/CustomInputFieldProps';

const TextField = ({
  input,
  label,
  type,
  placeholder,
  required,
  meta: { touched, error },
}: CustomInputFieldProps) => (
  <div className="input-row">
    <Field label={label}>
      <Input {...input} type={type} placeholder={placeholder} required={required} />
    </Field>
    {touched && error && <span className="error">{error}</span>}
  </div>
);

export default TextField;
