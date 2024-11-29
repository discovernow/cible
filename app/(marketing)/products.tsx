import { Button } from '@/components/ui/button';
import Image from 'next/image';
import PeopleImage from '../../public/people.png';
import BusinessImage from '../../public/business.png';
import BrandImage from '../../public/brand.png';
import SoftwareImage from '../../public/software.png';
import UiImage from '../../public/ui.png';
import DigitalImage from '../../public/digital.png';
import SeoImage from '../../public/seo.png';
import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export default function Products() {
  return (
    <div className='flex py-[40px] px-[16px] xl:px-[120px] xl:py-[80px] md:justify-center md:items-center xl:justify-center xl:items-center flex-col items-start gap-[49px] xl:gap-[72px] self-stretch'>
      <div className='flex justify-center items-center w-full'>
        <Image
          layout='responsive'
          src={PeopleImage}
          width={100}
          height={100}
          alt='civil engineering projects'
        />
      </div>

      <div className='flex flex-col items-center gap-6 xl:gap-[56px] self-stretch'>
        <p className='text-[#4B4EFC] text-center font-nunito_sans text-[32px] xl:text-[48px] font-bold tracking-[-0.96px] xl:tracking-[-2.88px] self-stretch'>
          Empowering Communities &nbsp;
          <span className='text-[#111827] tracking-[-1.92px] xl:tracking-[-2.88px]'>
            through sustainable infrastructure solutions
          </span>
        </p>

        <div className='flex flex-col items-start gap-8 xl:gap-20'>
          <div className='flex flex-col md:flex-row items-start gap-8 xl:gap-10'>
            <div className='flex items-start flex-col gap-6 self-stretch'>
              <div className='flex flex-col items-center gap-4 self-stretch xl:items-start'>
                <Image
                  src={BusinessImage}
                  width={24}
                  height={24}
                  alt='Business Strategy'
                />
                <div className='flex flex-col items-start xl:w-[280px] gap-2 self-stretch'>
                  <p className='text-[#1F2937] text-center md:text-start font-nunito_sans text-[20px] font-bold leading-[30px] tracking-[-0.6px] self-stretch'>
                    Infrastructure Planning
                  </p>
                  <p className='text-[#4B5563] text-center md:text-start font-nunito_sans text-[16px] font-normal leading-[24px] self-stretch'>
                    Providing comprehensive infrastructure planning services to
                    ensure sustainable and efficient community development.
                  </p>
                </div>
              </div>
            </div>

            <div className='flex items-start flex-col gap-6 self-stretch'>
              <div className='flex flex-col items-center gap-4 self-stretch xl:items-start'>
                <Image
                  src={BrandImage}
                  width={24}
                  height={24}
                  alt='Brand Identity Design'
                />
                <div className='flex flex-col items-start xl:w-[280px] gap-2 self-stretch'>
                  <p className='text-[#1F2937] text-center md:text-start font-nunito_sans text-[20px] font-bold leading-[30px] tracking-[-0.6px] self-stretch'>
                    Bridge and Road Design
                  </p>
                  <p className='text-[#4B5563] text-center md:text-start font-nunito_sans text-[16px] font-normal leading-[24px] self-stretch'>
                    Innovative design solutions for bridges and roads that
                    improve connectivity and ensure long-lasting quality.
                  </p>
                </div>
              </div>
            </div>

            <div className='flex items-start flex-col gap-6 self-stretch'>
              <div className='flex flex-col items-center gap-4 self-stretch xl:items-start'>
                <Image
                  src={SoftwareImage}
                  width={24}
                  height={24}
                  alt='Software Design and Development'
                />
                <div className='flex flex-col items-start xl:w-[280px] gap-2 self-stretch'>
                  <p className='text-[#1F2937] text-center md:text-start font-nunito_sans text-[20px] font-bold leading-[30px] tracking-[-0.6px] self-stretch'>
                    Water Resource Management
                  </p>
                  <p className='text-[#4B5563] text-center md:text-start font-nunito_sans text-[16px] font-normal leading-[24px] self-stretch'>
                    Designing effective water supply and stormwater management
                    systems for sustainable community growth.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className='flex flex-col md:flex-row items-start gap-8 xl:gap-10'>
            <div className='flex items-start flex-col gap-6 self-stretch'>
              <div className='flex flex-col items-center gap-4 self-stretch xl:items-start'>
                <Image
                  src={UiImage}
                  width={24}
                  height={24}
                  alt='UI/UX Design'
                />
                <div className='flex flex-col items-start xl:w-[280px] gap-2 self-stretch'>
                  <p className='text-[#1F2937] text-center md:text-start font-nunito_sans text-[20px] font-bold leading-[30px] tracking-[-0.6px] self-stretch'>
                    Urban Development Planning
                  </p>
                  <p className='text-[#4B5563] text-center md:text-start font-nunito_sans text-[16px] font-normal leading-[24px] self-stretch'>
                    Comprehensive planning services to create livable, resilient
                    urban environments that meet community needs.
                  </p>
                </div>
              </div>
            </div>

            <div className='flex items-start flex-col gap-6 self-stretch'>
              <div className='flex flex-col items-center gap-4 self-stretch xl:items-start'>
                <Image
                  src={DigitalImage}
                  width={24}
                  height={24}
                  alt='Digital Marketing'
                />
                <div className='flex flex-col items-start xl:w-[280px] gap-2 self-stretch'>
                  <p className='text-[#1F2937] text-center md:text-start font-nunito_sans text-[20px] font-bold leading-[30px] tracking-[-0.6px] self-stretch'>
                    Environmental Consulting
                  </p>
                  <p className='text-[#4B5563] text-center md:text-start font-nunito_sans text-[16px] font-normal leading-[24px] self-stretch'>
                    Assisting clients in navigating environmental regulations
                    and implementing eco-friendly solutions.
                  </p>
                </div>
              </div>
            </div>

            <div className='flex items-start flex-col gap-6 self-stretch'>
              <div className='flex flex-col items-center gap-4 self-stretch xl:items-start'>
                <Image src={SeoImage} width={24} height={24} alt='SEO' />
                <div className='flex flex-col items-start xl:w-[280px] gap-2 self-stretch'>
                  <p className='text-[#1F2937] text-center md:text-start font-nunito_sans text-[20px] font-bold leading-[30px] tracking-[-0.6px] self-stretch'>
                    Construction Management
                  </p>
                  <p className='text-[#4B5563] text-center md:text-start font-nunito_sans text-[16px] font-normal leading-[24px] self-stretch'>
                    Ensuring that construction projects are completed on
                    schedule, within budget, and with the highest quality
                    standards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Button className='items-center h-[56px] w-[343px] xl:w-[204px] py-3 pl-5 gap-2'>
        <Link className='flex' href='/contact'>
          <p className='text-[#FFF] font-nunito_sans text-[16px] font-bold'>
            Get in Touch
          </p>
          <ArrowUpRight />{' '}
        </Link>
      </Button>
    </div>
  );
}
