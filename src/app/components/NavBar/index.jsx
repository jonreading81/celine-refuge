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

const navbarItems = [
  { ref: '/', label: 'Home' },
  { ref: '/about', label: 'About' },
  { ref: '/news', label: 'News' },
  { ref: '/contact', label: 'Contact' },
];

const StyledNavLink = ({ isActive, className, ...linkProps }) => (
  <Link
    className={`${className ?? ''} ${
      isActive ? 'text-purple-site' : 'hover:text-purple-site'
    }`}
    {...linkProps}
  />
);

export function NavbarDefault() {
  const [openNav, setOpenNav] = React.useState(false);
  const pathname = usePathname();
  const [linkRef, setLinkRef] = useState(pathname);

  React.useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 text-blue-site">
      {navbarItems.map(({ ref, label }) => (
        <Typography
          key={ref}
          as="li"
          variant="small"
          className="flex items-center gap-x-2 py-2 font-medium max-md:border-b-2 "
        >
          <StyledNavLink
            isActive={ref === linkRef}
            href={ref}
            onClick={() => {
              setLinkRef(ref);
              setOpenNav(false);
            }}
          >
            {label}
          </StyledNavLink>
        </Typography>
      ))}
    </ul>
  );

  return (
    <Navbar
      shadow={false}
      fullWidth={true}
      className="mx-auto max-w-screen-xl p-4 text-color-blue-site-900"
    >
      <div className=" flex items-center justify-between">
        <h2 className="flex-1 self-center">
          <a href="/" className="flex flex-col sm:flex-row gap-2 sm:gap-6">
            <Logo />
          </a>
        </h2>
        <div className="hidden lg:block">{navList}</div>

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
