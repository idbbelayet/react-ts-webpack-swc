import { NavLink } from 'react-router-dom';
import ToggleTheme from './ToggleTheme';
import Settings from './Settings';
import Notification from './Notification';
import FullScreen from './FullScreen';
import ToggleLanguage from './ToggleLanguage';
import UserInfo from './UserInfo';
import ToggleNavBar from './ToggleNavBar';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

import darkLogo from '../images/branding-rgb.png';
import lightLogo from '../images/branding-white.png';

function AppBar() {
  const mode = useSelector((state: RootState) => state.theme.mode);
  return (
    <nav className="navbar">
      <div className="flex items-center space-x-3">
        {mode == 'light' ? (
          <img src={darkLogo} alt="Logo1" className="max-h-12 max-w-[195px]" />
        ) : (
          <img src={lightLogo} alt="Logo2" className="max-h-12 max-w-[195px]" />
        )}
        <ToggleNavBar />
      </div>
      <div className="flex gap-4">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/icons">Icons</NavLink>
        <NavLink to="/form">Fluent Form</NavLink>
        <NavLink to="/reduxform">Redux Form</NavLink>
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

export default AppBar;
