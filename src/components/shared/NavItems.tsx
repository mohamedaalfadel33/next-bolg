import Link from 'next/link';
import React from 'react';
import AuthLinks from './AuthLinks';

const NavItems = () => {
  return (
    <div className="grid gap-6  font-bold  md:flex">
      <Link href={'/'}>Home</Link>
      <Link href={'/'}>About</Link>
      <Link href={'/'}>Content</Link>
      <AuthLinks />
    </div>
  );
};

export default NavItems;
