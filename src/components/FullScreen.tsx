import React from 'react';
import { Icons } from './Icons';

function FullScreen() {
  return (
    <button className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full">
      <Icons.FullScreen className="w-full text-gray-500 dark:text-white" size={20} />
    </button>
  );
}

export default FullScreen;
