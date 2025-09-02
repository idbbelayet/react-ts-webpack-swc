import {
  Avatar,
  Button,
  Caption2,
  Checkbox,
  Dropdown,
  Field,
  Input,
  Option,
  Radio,
  RadioGroup,
  Switch,
} from '@fluentui/react-components';
import { SearchRegular } from '@fluentui/react-icons';
function FluentForm() {
  return (
    <div className="flex flex-col items-center justify-start p-6">
      <div>Fluent Form</div>

      <form noValidate autoComplete="off">
        <div className="flex flex-col gap-4">
          <Field label="Standard">
            <Input />
          </Field>

          <Field label="Enabled">
            <Switch />
          </Field>

          <Field label="Checkbox">
            <Checkbox />
          </Field>

          <Field label="color">
            <Dropdown aria-labelledby="color" placeholder="Select" inlinePopup>
              <Option value="Action 1">Action 1</Option>
              <Option value="Action 2">Action 2 </Option>
              <Option value="Action 3">Action 3</Option>
            </Dropdown>
          </Field>

          <Field label="Radio Group">
            <RadioGroup>
              <Radio defaultChecked={true} label="Option 1" />
              <Radio label="Option 2" />
            </RadioGroup>
          </Field>

          <Field label="Find">
            <Input
              placeholder="Search"
              contentAfter={
                <Button
                  aria-label="Find"
                  appearance="transparent"
                  icon={<SearchRegular />}
                  size="small"
                />
              }
            />
          </Field>

          <div className="flex items-center gap-2">
            <Avatar
              color="brand"
              initials="CE"
              badge={{
                status: 'available',
                'aria-label': 'available',
              }}
            />
            <div className="flex flex-col justify-start">
              Cameron Evans
              <Caption2>Senior Researcher at Contoso</Caption2>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default FluentForm;
