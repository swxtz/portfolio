'use client';

import { FileDown } from 'lucide-react';
import { useState } from 'react';

export function CvButton() {
  const [isHover, setIsHover] = useState(false);

  return (
    <a
      href="#"
      className="flex flex-row items-center border-2 rounded-full border-emerald-700 w-fit px-4 py-3 gap-1 mt-4 hover:border-emerald-600 transition-colors duration-300"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {!isHover ? (
        <FileDown
          color="rgb(4, 120, 87)"
          className="transition-colors duration-300"
        />
      ) : (
        <FileDown
          color="rgb(5, 150, 105)"
          className="transition-colors duration-300"
        />
      )}

      <span className="underline">curriculum</span>
    </a>
  );
}
