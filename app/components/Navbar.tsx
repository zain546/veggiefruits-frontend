'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { Avatar, Box, Button, DropdownMenu, Heading } from '@radix-ui/themes';
import {
  cart_icon,
  logo_icon,
  menu_icon,
  profile_icon,
  search_icon,
} from '@/public/assets/assets';
import { useAppContext  } from '../context/ContextProvider';

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const { user, setUser, router, setShowUserLogin  } = useAppContext ();
  const logout = async ()=>{
    setUser('');
    router.push('/');
  }

  return (
    <nav className="relative flex items-center justify-between border-b border-neutral-700 px-6 py-4 transition-all md:px-16 lg:px-24 xl:px-32">
      {/* Logo */}
      <Link href="/" className="cursor-pointer" onClick={() => setOpen(false)} aria-label="Go to homepage">
        <Heading className="flex items-center">
          <Image
            src={logo_icon}
            alt="Logo"
            width={60}
            height={60}
            className="h-10"
          />
          VeggieFruits
        </Heading>
      </Link>

      {/* Desktop Menu */}
      <div className="hidden sm:flex items-center gap-8">
        <Link href="#">Home</Link>
        <Link href="/products">All products</Link>
        <Link href="/contact">Contact</Link>

        {/* Search Input */}
        <div className="hidden lg:flex items-center text-sm gap-2 px-3 rounded-full border border-gray-400">
          <input
            className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500"
            type="text"
            placeholder="Search products"
          />
          <Image src={search_icon} alt="Search Icon" width={20} height={20} />
        </div>

        {/* Cart Icon */}
        <Link href="/cart" className="relative cursor-pointer" aria-label="Cart">
          <Image src={cart_icon} alt="Search Icon" width={20} height={20} />
          <span className="absolute -top-2 -right-3 text-xs text-black bg-primary w-[18px] h-[18px] rounded-full flex items-center justify-center">
            3
          </span>
        </Link>

    {/* Login/Profile Button */}
    {!user ? (
      <Button radius='full' onClick={() => setShowUserLogin(true)}>Login</Button>
    ) : (
      <Box>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <Avatar
              src={profile_icon.src}
              fallback="?"
              alt='profileIcon'
              size="3"
              radius="full"
              className="cursor-pointer"
              // optional: This is when your avatar does not load then you can set this line.
              referrerPolicy="no-referrer"
            />
          </DropdownMenu.Trigger>
          <DropdownMenu.Content>
            <DropdownMenu.Label>
              <span>{user}</span>
            </DropdownMenu.Label>
            <DropdownMenu.Item>
              <Link href='/my-orders'>My orders</Link>
            </DropdownMenu.Item>
            <DropdownMenu.Item onClick={logout}>
              <span>Logout</span>
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </Box>
    )}
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setOpen(prev => !prev)}
        aria-label="Toggle menu"
        className="sm:hidden"
      >
        <Image src={menu_icon} alt="Search Icon" width={20} height={20} />
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-[60px] left-0 w-full bg-[var(--color-neutral-900)] shadow-md py-4 flex flex-col items-start gap-2 px-5 text-sm md:hidden">
          <Link href="/" className="block">
            Home
          </Link>
          <Link
            href="/products"
            className="block"
            onClick={() => setOpen(false)}
          >
            All products
          </Link>
          {user && (
            <Link
              href="/orders"
              className="block"
              onClick={() => setOpen(false)}
            >
              My orders
            </Link>
          )}
          <Link
            href="/contact"
            className="block"
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>
          {!user ? (
              <Button radius='full' onClick={() => setShowUserLogin(true)}>Login</Button>
          ) : (
            <Button radius='full' onClick={() => logout()}>Logout</Button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
