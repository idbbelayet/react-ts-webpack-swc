import { NavLink } from 'react-router-dom';
import ToggleTheme from './ToggleTheme';
import Settings from './Settings';
import Notification from './Notification';
import FullScreen from './FullScreen';
import ToggleLanguage from './ToggleLanguage';
import UserInfo from './UserInfo';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="flex gap-4">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/icons">Icons</NavLink>
        <NavLink to="/form">Fluent Form</NavLink>
      </div>
      <div className="flex gap-3">
        <ToggleTheme />
        <Settings />
        <Notification />
        <FullScreen />
        <ToggleLanguage />
        <UserInfo />
      </div>
    </nav>
  );
}

export default Navbar;
