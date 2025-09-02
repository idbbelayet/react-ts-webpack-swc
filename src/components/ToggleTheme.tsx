import React from 'react';
import { Icons } from '../components/Icons';
const ToggleTheme = () => {
  const [isDark, setIsDark] = React.useState<boolean | null>(null);
  const toggleTheme = () => {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };
  React.useEffect(() => {
    if (
      localStorage.getItem('theme') === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    }
  }, []);

  return (
    <button
      onClick={toggleTheme}
      className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700"
    >
      {isDark == true ? (
        <Icons.LightMode className="w-full text-amber-600 dark:text-white" size={20} />
      ) : (
        <Icons.DarkMode className="w-full text-gray-800 dark:text-white" size={20} />
      )}
    </button>
  );
};
export default ToggleTheme;
