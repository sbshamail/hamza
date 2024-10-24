'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
const Navbar = () => {
  const pathname = usePathname();
  const navbutton = (title: string, link: string, color: string) => (
    <Link href={link}>
      <button
        className={`px-2 rounded bg-${color}-900 text-white ${
          pathname === link ? 'opacity-100' : 'opacity-90 text-white/80'
        }  hover:opacity-100 `}
      >
        {title}
      </button>
    </Link>
  );
  return (
    <div>
      <nav className="flex items-center justify-between  text-xs bg-gray-800 p-2 mb-2">
        <div className="flex space-x-2">
          {navbutton('PRPC', '/', 'green')}
          {navbutton('U-PVC', '/upvc', 'blue')}
        </div>
        <h1 className="font-semibold text-white  tracking-tight">
          Hamza Electric & Hardware Rate List
        </h1>
      </nav>
    </div>
  );
};

export default Navbar;
