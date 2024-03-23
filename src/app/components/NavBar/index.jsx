'use client';
import React from 'react';
import { useCallback, useState } from 'react';
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
} from '@material-tailwind/react';
import { Logo } from '@app/components/Logo/Logo';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { PrismicNextLink } from '@prismicio/next';
import { LanguageSelector } from '@app/components/LanguageSelector';

function NavbarDefault({ navItems }) {
  const [openNav, setOpenNav] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className=" font-secondary-bold text-blue-site text-lg mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 ">
      {navItems.map(({ title, link }) => (
        <li
          key={link.url}
          className="flex items-center gap-x-2 py-2 border-b-2 lg:border-none"
        >
          <PrismicNextLink
            field={link}
            className={`w-full ${
              link.url === pathname
                ? 'text-purple-site'
                : 'hover:text-purple-site'
            }`}
            onClick={() => {
              setOpenNav(false);
            }}
          >
            {title}
          </PrismicNextLink>
        </li>
      ))}
    </ul>
  );

  return (
    <Navbar
      shadow={false}
      fullWidth={true}
      className="p-0 text-color-blue-site-900 mb-4 lg:m-0"
    >
      <div className="flex items-center justify-between">
        <div className="flex-1 self-center">
          <Logo />
        </div>
        <div className="hidden lg:flex items-center ">
          {navList}
          <div className="ml-6 w-[160px]">
            <LanguageSelector />
          </div>
        </div>

        <IconButton
          variant="text"
          className="scale-125 ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden text-blue-site"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
          <span className="sr-only">Toggle Navigation</span>
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <div className="my-4">{navList}</div>
      </Collapse>
    </Navbar>
  );
}

export default NavbarDefault;
