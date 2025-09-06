import { Button, Dropdown, Label, Option, Radio, Textarea } from '@fluentui/react-components';
import { DatePicker } from '@fluentui/react-datepicker-compat';
import { Field, reduxForm } from 'redux-form';
import EmployeeInfo from '../models/employeeInfo';
import React from 'react';
import TextField from '../components/controls/TextField';
import CheckboxField from '../components/controls/CheckboxField';

const sleep = (ms: any) => new Promise((resolve) => setTimeout(resolve, ms));

const ReduxForm = (props: any) => {
  const [result, setResult] = React.useState<any>({});
  const { handleSubmit, pristine, reset, submitting } = props;

  async function showResults(values: EmployeeInfo) {
    await sleep(500); // simulate server latency
    setResult(values);
  }

  return (
    <div className="flex flex-col items-start justify-start p-6">
      <div className="mb-5 text-2xl">Redux Form with Fluent UI</div>
      <form onSubmit={handleSubmit(showResults)}>
        <div className="flex flex-col gap-4">
          <Field
            name="fullName"
            component={TextField}
            type="text"
            placeholder="Full Name"
            label="Full Name"
            required
          />

          <Field name="email" component={TextField} type="text" placeholder="Email" label="Email" />

          <div>
            <Label>Sex</Label>
            <div>
              <Label>
                <Field name="sex" component={Radio} type="radio" value="male" label="Male" />
              </Label>
              <Label>
                <Field name="sex" component={Radio} type="radio" value="female" label="Female" />
              </Label>
            </div>
          </div>

          <Field name="age" component={TextField} type="number" placeholder="Asge" label="Age" />

          <div>
            <Label>Favorite Color</Label>
            <div>
              <Field
                name="favoriteColor"
                id="favoriteColor"
                component={Dropdown}
                multiselect={false}
                clearable
                placeholder="Select"
              >
                <Option value="1">Action 1</Option>
                <Option value="2">Action 2 </Option>
                <Option value="3">Action 3</Option>
              </Field>
            </div>
          </div>
          <div>
            <Label>Skills</Label>
            <div>
              <Field
                name="skills"
                id="skills"
                component={Dropdown}
                multiselect={true}
                clearable
                placeholder="Select"
              >
                <Option value="1">.Net Core</Option>
                <Option value="2">React js </Option>
                <Option value="3">Next js</Option>
                <Option value="4">Angular js</Option>
              </Field>
            </div>
          </div>
          <Field
            name="isActive"
            id="isActive"
            component={CheckboxField}
            label="Is Active"
            type="checkbox"
          />

          <div>
            <Label htmlFor="joiningDate">Joining Date</Label>
            <div>
              <Field
                name="joiningDate"
                id="joiningDate"
                component={DatePicker}
                placeholder="Joining Date"
                maxDate={new Date()}
                isMonthPickerVisible={false}
              />
            </div>
          </div>

          <div>
            <Label>Notes</Label>
            <div>
              <Field name="notes" id="notes" component={Textarea} />
            </div>
          </div>
          <div className="flex space-x-2">
            <Button type="submit" disabled={pristine || submitting} appearance="primary">
              Submit
            </Button>
            <Button
              type="button"
              //disabled={pristine || submitting}
              onClick={reset}
              appearance="secondary"
            >
              Clear Values
            </Button>
          </div>
        </div>
      </form>
      <div className="mt-5">{`You submitted:\n\n${result && JSON.stringify(result, null, 2)}`}</div>
    </div>
  );
};

export default reduxForm({
  form: 'employeeForm', // a unique identifier for this form
})(ReduxForm);
