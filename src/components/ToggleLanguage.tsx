import { Menu, MenuItem, MenuList, MenuPopover, MenuTrigger } from '@fluentui/react-components';
import { Icons } from './Icons';

function ToggleLanguage() {
  return (
    <Menu positioning={{ autoSize: true, position: 'below', align: 'end' }}>
      <MenuTrigger disableButtonEnhancement>
        <div className="flex cursor-pointer items-center justify-center gap-1">
          <Icons.Language /> <span>EN</span>
        </div>
      </MenuTrigger>

      <MenuPopover>
        <MenuList>
          <MenuItem>English </MenuItem>
          <MenuItem>French</MenuItem>
          <MenuItem>Spanish</MenuItem>
        </MenuList>
      </MenuPopover>
    </Menu>
  );
}

export default ToggleLanguage;
