import React from 'react';
import MobileNav from './MobileNav';
import NavItems from './NavItems';
import { Switch } from '@/components/ui/switch';

import { FaYoutube } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  return (
    <div className="flex flex-between mt-4">
      {/* Icons */}
      <div className="md:flex gap-2 hidden">
        <Link href={'/'}>
          <FaFacebook size={'1.8em'} color="blue" />
        </Link>
        <Link href={'/'}>
          <FaYoutube size={'1.8em'} color="red" />
        </Link>
        <Link href={'/'}>
          <FaTiktok size={'1.8em'} />
        </Link>
        <Link href={'/'}>
          <FaInstagram size={'1.8em'} color="red" />
        </Link>
      </div>
      {/* NAME OF THE SITE */}
      <h2 className="font-bold text-xl">Lama.Dev</h2>

      {/* Mobile */}
      <div className="md:hidden">
        <MobileNav />
      </div>
      {/* pc */}
      <div className="hidden md:flex gap-2">
        <ThemeToggle />
        <NavItems />
      </div>
    </div>
  );
};

export default Header;
