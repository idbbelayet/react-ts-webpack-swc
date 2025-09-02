// Font Awesome
import { FaBeer, FaUser, FaSignOutAlt, FaReact } from 'react-icons/fa';

// Material Design
import {
  MdHome,
  MdDashboard,
  MdSettings,
  MdOutlineLightMode,
  MdFullscreen,
  MdTranslate,
} from 'react-icons/md';

// Ant Design
import {
  AiFillGithub,
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineSearch,
  AiOutlineUser,
} from 'react-icons/ai';
import { SiSwc, SiTailwindcss, SiTypescript, SiWebpack, SiFluentbit } from 'react-icons/si';
// Bootstrap
import { BsBell, BsFillHeartFill } from 'react-icons/bs';

import { PiMoonStarsLight } from 'react-icons/pi';

// Type helper
export type IconProps = {
  className?: string;
  size?: number | string;
  color?: string;
};

// Centralized object
export const Icons = {
  Beer: (props: IconProps) => <FaBeer {...props} />,
  User: (props: IconProps) => <FaUser {...props} />,
  Logout: (props: IconProps) => <FaSignOutAlt {...props} />,
  Home: (props: IconProps) => <MdHome {...props} />,
  Dashboard: (props: IconProps) => <MdDashboard {...props} />,
  Settings: (props: IconProps) => <MdSettings {...props} />,
  Github: (props: IconProps) => <AiFillGithub {...props} />,
  Search: (props: IconProps) => <AiOutlineSearch {...props} />,
  Bell: (props: IconProps) => <BsBell {...props} />,
  Heart: (props: IconProps) => <BsFillHeartFill {...props} />,
  LightMode: (props: IconProps) => <MdOutlineLightMode {...props} />,
  DarkMode: (props: IconProps) => <PiMoonStarsLight {...props} />,
  FullScreen: (props: IconProps) => <MdFullscreen {...props} />,
  Language: (props: IconProps) => <MdTranslate {...props} />,
  AiUser: (props: IconProps) => <AiOutlineUser {...props} />,
  Webpack: (props: IconProps) => <SiWebpack {...props} />,
  react: (props: IconProps) => <FaReact {...props} />,
  typescript: (props: IconProps) => <SiTypescript {...props} />,
  swc: (props: IconProps) => <SiSwc {...props} />,
  tailwind: (props: IconProps) => <SiTailwindcss {...props} />,
  FluentUi: (props: IconProps) => <SiFluentbit {...props} />,
  Add: (props: IconProps) => <AiOutlinePlus {...props} />,
  Minus: (props: IconProps) => <AiOutlineMinus {...props} />,
};
