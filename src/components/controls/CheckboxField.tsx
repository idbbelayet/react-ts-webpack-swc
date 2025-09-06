import { Checkbox, Field } from '@fluentui/react-components';
import CustomInputFieldProps from '../../models/CustomInputFieldProps';

const CheckboxField = ({
  input,
  label,
  type,
  placeholder,
  required,
  meta: { touched, error },
}: CustomInputFieldProps) => (
  <div className="input-row">
    <Field label={label}>
      <Checkbox {...input} type={type} placeholder={placeholder} required={required} />
    </Field>
    {touched && error && <span className="error">{error}</span>}
  </div>
);

export default CheckboxField;
