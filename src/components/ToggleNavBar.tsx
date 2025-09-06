import { Hamburger, Tooltip } from '@fluentui/react-components';
import React from 'react';
import { useDispatch } from 'react-redux';
import { TOGGLE_NAVBAR } from '../store/navBarTypes';
import { MdMenuOpen, MdOutlineMenu } from 'react-icons/md';

function ToggleNavBar() {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = React.useState(true);

  const toggleNavBar = () => {
    dispatch({ type: TOGGLE_NAVBAR });
    setIsOpen(!isOpen);
  };

  React.useEffect(() => {
    const saveMode = localStorage.getItem('navbar');
    if (saveMode !== 'undefined' && saveMode !== null) {
      if (saveMode === 'open') {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    }
  }, []);

  return (
    <>
      <button
        onClick={toggleNavBar}
        className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full hover:bg-gray-100 hover:dark:bg-gray-700"
      >
        {isOpen == true ? <MdMenuOpen size={20} /> : <MdOutlineMenu size={20} />}
      </button>
    </>
  );
}

export default ToggleNavBar;
