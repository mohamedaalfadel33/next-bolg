import React from 'react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Switch } from '@/components/ui/switch';

import { IoIosMenu } from 'react-icons/io';
import NavItems from './NavItems';
import ThemeToggle from './ThemeToggle';
const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <IoIosMenu size={'2em'} />
      </SheetTrigger>
      <SheetContent>
        <NavItems />
        <ThemeToggle />
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
