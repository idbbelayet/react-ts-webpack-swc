import React from 'react';
import { Icons } from './Icons';

function ToggleLanguage() {
  return (
    <button className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full">
      <Icons.Language className="w-full text-gray-500 dark:text-white" size={20} />
    </button>
  );
}

export default ToggleLanguage;
