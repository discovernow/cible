import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';
import HeroImage from '../../public/hero.png';
import Image from 'next/image';
import TickImage from '../../public/tick.png';
import React from 'react';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className='flex flex-col px-6 pb-[80px] xl:pb-[200px] items-center gap-[48px] xl:pt-[87px] xl:gap-[87px] self-stretch'>
      <div className='flex flex-col px-6 md:flex-row items-start gap-[48px] xl:gap-[108px] justify-between xl:items-center'>
        <div className='flex xl:w-[573px] flex-col items-start gap-8 self-stretch'>
          <div className='flex flex-col items-start gap-6 self-stretch'>
            <p className='text-[#000] font-raleway text-[48px] xl:text-[64px] font-semibold leading-[57.6px] xl:leading-[76.8px]'>
              Your Partner for Sustainable Infrastructure Solutions.
            </p>

            <div className='flex items-start content-start gap-5 self-stretch flex-wrap'>
              <div className='flex items-end gap-4 xl:self-stretch flex-auto flex-wrap'>
                <div className='flex items-center gap-2'>
                  <Image src={TickImage} width={16} height={16} alt='tick' />
                  <p className='text-[#1F2937] font-inter text-[14px] font-semibold leading-[30px]'>
                    Infrastructure Planning
                  </p>
                </div>
                <div className='flex items-center gap-2'>
                  <Image src={TickImage} width={16} height={16} alt='tick' />
                  <p className='text-[#1F2937] font-inter text-[14px] font-semibold leading-[30px]'>
                    Bridge and Road Design
                  </p>
                </div>
                <div className='flex items-center gap-2'>
                  <Image src={TickImage} width={16} height={16} alt='tick' />
                  <p className='text-[#1F2937] font-inter text-[14px] font-semibold leading-[30px]'>
                    Water Resource Management
                  </p>
                </div>
                <div className='flex items-center gap-2'>
                  <Image src={TickImage} width={16} height={16} alt='tick' />
                  <p className='text-[#1F2937] font-inter text-[14px] font-semibold leading-[30px]'>
                    Urban Development Planning
                  </p>
                </div>
              </div>
            </div>

            <p className='text-[#4B5563] font-inter text-[16px] font-normal leading-[25.6px]'>
              Our team of experts specializes in providing sustainable
              infrastructure solutions, including infrastructure planning,
              bridge and road design, water resource management, and urban
              development planning. We are passionate about building resilient
              communities and ensuring sustainable growth for future
              generations.
            </p>
          </div>

          <Button className='items-center h-[56px] w-[343px] xl:w-[204px] py-3 pl-5 gap-2'>
            <Link className='flex' href='/services'>
              <p className='text-[#FFF] font-nunito_sans text-[16px] xl:text-[20px] font-bold'>
                Our Services
              </p>
              <ArrowUpRight />{' '}
            </Link>
          </Button>
        </div>

        <Image
          className='hidden md:block'
          src={HeroImage}
          width={343}
          height={903}
          alt='hero image of infrastructure projects'
        />
      </div>
    </div>
  );
}
