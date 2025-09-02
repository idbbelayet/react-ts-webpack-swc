import { PivotItem, Pivot, Toggle, Checkbox, TextField, Stack } from '@fluentui/react';
function FluentForm() {
  return (
    <div className="flex flex-col items-center justify-center p-6 text-gray-600 dark:bg-gray-800 dark:text-gray-100">
      <div>Fluent Form</div>

      <form noValidate autoComplete="off">
        <Stack tokens={{ childrenGap: 8, maxWidth: 300 }}>
          <TextField label="Standard" />
          <TextField label="Disabled" disabled defaultValue="I am disabled" />
          <TextField label="Read-only" readOnly defaultValue="I am read-only" />
          <TextField label="Required " required />
          <TextField ariaLabel="Required without visible label" required />
          <TextField label="With error message" errorMessage="Error message" />
          <Toggle label="Enabled" />
          <Checkbox label="Checkbox" />
        </Stack>
      </form>
    </div>
  );
}

export default FluentForm;
