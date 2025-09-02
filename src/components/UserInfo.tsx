import {
  Avatar,
  Caption2,
  Menu,
  MenuItem,
  MenuList,
  MenuPopover,
  MenuTrigger,
} from '@fluentui/react-components';
import { CgProfile } from 'react-icons/cg';

import { ImProfile } from 'react-icons/im';
import { PiSignOut } from 'react-icons/pi';

function UserInfo() {
  return (
    <Menu positioning={{ autoSize: true, position: 'below', align: 'end' }}>
      <MenuTrigger disableButtonEnhancement>
        <div className="flex cursor-pointer items-center gap-2">
          <Avatar
            color="brand"
            initials="BH"
            size={24}
            badge={{
              status: 'available',
              'aria-label': 'available',
            }}
          />
          <div className="flex flex-col justify-start">
            Belayet Hossain
            <Caption2>Senior Software Engineer</Caption2>
          </div>
        </div>
      </MenuTrigger>

      <MenuPopover>
        <MenuList>
          <MenuItem icon={<CgProfile className="text-gray-500" />}>Profile </MenuItem>
          <MenuItem icon={<PiSignOut className="text-gray-500" />}>Signout</MenuItem>
        </MenuList>
      </MenuPopover>
    </Menu>
  );
}

export default UserInfo;
