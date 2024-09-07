'use client';
import Link from 'next/link';
import { IoMdArrowDropdown } from 'react-icons/io';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='navbar flex justify-between items-center bg-gray-100/50 text-base text-black font-bold px-5 py-3'>
      {/* Logo Section */}
      <div className='text-xl hover:underline'>
        <Link href='/'>Spotlight Jakarta</Link>
      </div>

      {/* Links Section */}
      <div className='hidden lg:flex gap-10'>
        <Link href='/'>
          <span className='hover:underline'>Home</span>
        </Link>
        <Link href='/about-us'>
          <span className='hover:underline'>About Us</span>
        </Link>
        <Link href='/product'>
          <span className='hover:underline'>Product</span>
        </Link>
        <Link href='/project-reference'>
          <span className='hover:underline'>Project Reference</span>
        </Link>
        <Link href='/contact-us'>
          <span className='hover:underline'>Contact Us</span>
        </Link>
      </div>

      {/* Language Dropdown */}
      <div className='hidden lg:block'>
        <div className='dropdown'>
          <div
            tabIndex={0}
            role='button'
            className='btn m-1 bg-black text-white flex items-center'
          >
            Language
            <IoMdArrowDropdown size={20} />
          </div>
          <ul
            tabIndex={0}
            className='dropdown-content menu bg-base-100 rounded-box z-[1] w-40'
          >
            <li>
              <a>Indonesia</a>
            </li>
            <li>
              <a>English</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className='lg:hidden'>
        <button
          className='text-xl focus:outline-none'
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='absolute top-16 left-0 w-full bg-gray-100 flex flex-col items-center gap-5 py-5'>
          <Link href='/' onClick={() => setIsOpen(false)}>
            <span className='hover:underline'>Home</span>
          </Link>
          <Link href='/about-us' onClick={() => setIsOpen(false)}>
            <span className='hover:underline'>About Us</span>
          </Link>
          <Link href='/product' onClick={() => setIsOpen(false)}>
            <span className='hover:underline'>Product</span>
          </Link>
          <Link href='/project-reference' onClick={() => setIsOpen(false)}>
            <span className='hover:underline'>Project Reference</span>
          </Link>
          <Link href='/contact-us' onClick={() => setIsOpen(false)}>
            <span className='hover:underline'>Contact Us</span>
          </Link>

          {/* Language Dropdown in Mobile */}
          <div className='dropdown'>
            <div
              tabIndex={0}
              role='button'
              className='btn m-1 bg-black text-white'
            >
              Language
              <IoMdArrowDropdown size={20} />
            </div>
            <ul
              tabIndex={0}
              className='dropdown-content menu bg-base-100 rounded-box z-[1] w-40'
            >
              <li>
                <a>Indonesia</a>
              </li>
              <li>
                <a>English</a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
