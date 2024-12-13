'use client';
import Image from 'next/image';
import Logo from '../../public/logo.png';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function getMenuClasses() {
    let menuClasses = [];
    if (isOpen) {
      menuClasses = [
        'flex',
        'absolute',
        'top-[80px]',
        'bg-[#FFF]',
        'w-full',
        'h-full',
        'items-center',
        'p-4',
        'left-0',
        'gap-10',
        'flex-col',
      ];
    } else {
      menuClasses = [
        'hidden',
        'md:block',
        'space-x-8',
        'text-xl',
        'items-center',
        'gap-[48px]',
      ];
    }
    return menuClasses.join(' ');
  }

  return (
    <div className='bg-[#FFF] flex justify-between w-full px-6 py-8 pt-[31.814px] pb-[31.73px] md:pt-[35px] md:pb-[20px]  xl:pt-[40px] xl:pb-[24px] xl:px-[120px] self-stretch items-center'>
      <Link
        href='/#'
        className='flex items-center gap-[5.217px] xl:gap-[6.531px]'
      >
        <Image src={Logo} width={191} height={40.1} alt='Cible logo' />
      </Link>

      <div className={getMenuClasses()}>
        <Link
          href='/#'
          className='text-[#333] font-inter text-[14px] font-normal leading-[21px] hover:opacity-100 hover:text-[#444CE7]'
        >
          Home
        </Link>

        {/* <Link
            href="/about"
            className="text-[#333] font-inter text-[14px] font-normal leading-[21px] hover:opacity-100 hover:text-[#444CE7]"
          >
            About Us
          </Link>  */}

        <Link
          href='/contact'
          className='text-[#333] font-inter text-[14px] font-normal leading-[21px] hover:opacity-100 hover:text-[#444CE7]'
        >
          Contact Us
        </Link>

        <Button className='items-center h-[48px] py-3 pl-5 gap-2 md:hidden'>
          <Link className='flex' href='/contact'>
            <p className='text-[#FFF] font-nunito_sans text-[16px] font-bold'>
              Book a call
            </p>
            <ArrowUpRight />{' '}
          </Link>
        </Button>
      </div>

      <Button
        className='items-center h-[48px] py-3 pl-5 gap-2 hidden md:block'
        aria-label='main'
      >
        <Link className='flex gap-2' href='/contact'>
          <p className='text-[#FFF] font-nunito_sans text-[16px] font-bold flex'>
            Book a call
          </p>
          <ArrowUpRight />{' '}
        </Link>
      </Button>

      <div className='md:hidden flex items-center'>
        <button
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            stroke='currentColor'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
          >
            {isOpen ? (
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M6 18L18 6M6 6l12 12'
              />
            ) : (
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16m-7 6h7'
              />
            )}
          </svg>
        </button>
      </div>
    </div>
  );
}
