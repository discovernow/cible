import React from 'react';
import BulbImage from '../../public/bulb.png';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export default function Services() {
  return (
    <div className='flex px-6 py-16 xl:px-[120px] xl:py-[80px] flex-col justify-center items-center gap-[48px] xl:gap-[72px] self-stretch'>
      <div className='flex flex-col items-center gap-4 xl:gap-20'>
        <p className='text-[#111827] text-center font-nunito_sans text-[24px] xl:text-[48px] font-bold xl:font-semibold leading-[38.4px] tracking-[-0.48px] xl:tracking-[-1.44px]'>
          Our Services
        </p>
        <div className='flex flex-col items-center xl:gap-[-256px]'>
          <div className='flex flex-col xl:flex-row items-start gap-8 xl:gap-16'>
            <Image
              src={BulbImage}
              width={343}
              height={466}
              alt='image of construction site'
              className='flex flex-col items-start gap-5 justify-center w-full'
            />

            <div className='flex flex-col items-start gap-8 self-stretch flex-auto'>
              <div className='flex flex-col items-center gap-5 self-stretch'>
                <div className='flex flex-col items-center gap-1 xl:gap-2 self-stretch'>
                  <p className='text-[#111827] font-nunito_sans text-[18px] xl:text-[24px] font-bold leading-[28.8px] xl:leading-[30px] tracking-[-0.54px] xl:tracking-[-0.72px] self-stretch'>
                    Structural Engineering
                  </p>
                  <p className='text-[#4B5563] font-nunito_sans text-[16px] font-normal leading-[24px] self-stretch h-[96px]'>
                    We provide innovative and sustainable structural engineering
                    solutions, ensuring that all projects meet safety standards
                    and optimize material use.
                  </p>
                </div>
              </div>

              <div className='flex flex-col items-center gap-5 self-stretch'>
                <div className='flex flex-col items-center gap-1 xl:gap-2 self-stretch'>
                  <p className='text-[#111827] font-nunito_sans text-[18px] xl:text-[24px] font-bold leading-[28.8px] xl:leading-[30px] tracking-[-0.54px] xl:tracking-[-0.72px] self-stretch'>
                    Site Development
                  </p>
                  <p className='text-[#4B5563] font-nunito_sans text-[16px] font-normal leading-[24px] self-stretch h-[96px]'>
                    We offer comprehensive site development services, including
                    grading, stormwater management, and utility design, ensuring
                    a smooth construction process.
                  </p>
                </div>
              </div>

              <div className='flex flex-col items-center gap-5 self-stretch'>
                <div className='flex flex-col items-center gap-1 xl:gap-2 self-stretch'>
                  <p className='text-[#111827] font-nunito_sans text-[18px] xl:text-[24px] font-bold leading-[28.8px] xl:leading-[30px] tracking-[-0.54px] xl:tracking-[-0.72px] self-stretch'>
                    Project Management
                  </p>
                  <p className='text-[#4B5563] font-nunito_sans text-[16px] font-normal leading-[24px] self-stretch h-[96px]'>
                    Our project management team ensures all projects are
                    completed on time and within budget, managing resources
                    efficiently and effectively.
                  </p>
                </div>
              </div>
            </div>

            <div className='flex flex-col items-start gap-8 self-stretch flex-auto'>
              <div className='flex flex-col items-center gap-5 self-stretch'>
                <div className='flex flex-col items-center gap-1 xl:gap-2 self-stretch'>
                  <p className='text-[#111827] font-nunito_sans text-[18px] xl:text-[24px] font-bold leading-[28.8px] xl:leading-[30px] tracking-[-0.54px] xl:tracking-[-0.72px] self-stretch'>
                    Geotechnical Engineering
                  </p>
                  <p className='text-[#4B5563] font-nunito_sans text-[16px] font-normal leading-[24px] self-stretch h-[96px]'>
                    We offer geotechnical engineering services to evaluate soil
                    conditions, ensuring a strong foundation for your projects.
                  </p>
                </div>
              </div>

              <div className='flex flex-col items-center gap-5 self-stretch'>
                <div className='flex flex-col items-center gap-1 xl:gap-2 self-stretch'>
                  <p className='text-[#111827] font-nunito_sans text-[18px] xl:text-[24px] font-bold leading-[28.8px] xl:leading-[30px] tracking-[-0.54px] xl:tracking-[-0.72px] self-stretch'>
                    Environmental Engineering
                  </p>
                  <p className='text-[#4B5563] font-nunito_sans text-[16px] font-normal leading-[24px] self-stretch h-[96px]'>
                    We conduct environmental assessments and provide sustainable
                    solutions to minimize environmental impact while ensuring
                    compliance with regulations.
                  </p>
                </div>
              </div>

              <div className='flex flex-col items-center gap-5 self-stretch'>
                <div className='flex flex-col items-center gap-1 xl:gap-2 self-stretch'>
                  <p className='text-[#111827] font-nunito_sans text-[18px] xl:text-[24px] font-bold leading-[28.8px] xl:leading-[30px] tracking-[-0.54px] xl:tracking-[-0.72px] self-stretch'>
                    Transportation Engineering
                  </p>
                  <p className='text-[#4B5563] font-nunito_sans text-[16px] font-normal leading-[24px] self-stretch h-[96px]'>
                    Our transportation engineering services focus on planning,
                    design, and optimization of transportation systems for
                    efficient mobility.
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
