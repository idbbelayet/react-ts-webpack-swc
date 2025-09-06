import { Outlet } from 'react-router-dom';
import AppBar from '../components/AppBar';
import { NavBar } from '../components/NavBar';

function MainLayout() {
  return (
    <>
      <AppBar />
      <div className="flex">
        <NavBar />
        <Outlet />
      </div>
    </>
  );
}

export default MainLayout;
