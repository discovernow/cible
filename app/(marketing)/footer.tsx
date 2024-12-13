import React from 'react';
import logo from '../../public/logowhite.png';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='bg-[#111827] flex flex-col py-8 px-4 md:pt-16 md:pb-12 items-center gap-16 self-stretch'>
      <Link
        href='/#'
        className='flex items-center gap-[5.217px] md:gap-[6.531px]'
      >
        <Image src={logo} width={191} height={40.1} alt='hero image of world' />
      </Link>

      <div className='flex flex-col justify-center items-center md:flex-row md:items-start gap-4'>
        <div className='rounded-3xl bg-[#1F2937] h-[40px] flex px-6 py-4 justify-center items-center gap-2'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='25'
            viewBox='0 0 24 25'
            fill='none'
          >
            <path
              d='M4 20.9424C3.45 20.9424 2.97933 20.7467 2.588 20.3554C2.19667 19.964 2.00067 19.493 2 18.9424V6.94238C2 6.39238 2.196 5.92172 2.588 5.53038C2.98 5.13905 3.45067 4.94305 4 4.94238H20C20.55 4.94238 21.021 5.13838 21.413 5.53038C21.805 5.92238 22.0007 6.39305 22 6.94238V18.9424C22 19.4924 21.8043 19.9634 21.413 20.3554C21.0217 20.7474 20.5507 20.9431 20 20.9424H4ZM12 13.9424L4 8.94238V18.9424H20V8.94238L12 13.9424ZM12 11.9424L20 6.94238H4L12 11.9424ZM4 8.94238V6.94238V18.9424V8.94238Z'
              fill='#F5F5FF'
            />
          </svg>
          <p className='text-[#F5F5FF] font-inter text-center text-[16px] font-medium leading-6'>
            info@cible.com.ng
          </p>
        </div>

        <div className='rounded-3xl bg-[#1F2937] h-[40px] flex px-6 py-4 justify-center items-center gap-2'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='25'
            viewBox='0 0 24 25'
            fill='none'
          >
            <path
              d='M6.54 5.94238C6.6 6.83238 6.75 7.70238 6.99 8.53238L5.79 9.73238C5.38 8.53238 5.12 7.26238 5.03 5.94238H6.54ZM16.4 17.9624C17.25 18.2024 18.12 18.3524 19 18.4124V19.9024C17.68 19.8124 16.41 19.5524 15.2 19.1524L16.4 17.9624ZM7.5 3.94238H4C3.45 3.94238 3 4.39238 3 4.94238C3 14.3324 10.61 21.9424 20 21.9424C20.55 21.9424 21 21.4924 21 20.9424V17.4524C21 16.9024 20.55 16.4524 20 16.4524C18.76 16.4524 17.55 16.2524 16.43 15.8824C16.3307 15.8464 16.2256 15.8294 16.12 15.8324C15.86 15.8324 15.61 15.9324 15.41 16.1224L13.21 18.3224C10.3754 16.8728 8.06961 14.567 6.62 11.7324L8.82 9.53238C9.1 9.25238 9.18 8.86238 9.07 8.51238C8.69065 7.36044 8.49821 6.15518 8.5 4.94238C8.5 4.39238 8.05 3.94238 7.5 3.94238Z'
              fill='#F5F5FF'
            />
          </svg>
          <p className='text-[#F5F5FF] font-inter text-center text-[16px] font-medium leading-6'>
            +234 706 229 2450
          </p>
        </div>
      </div>

      {/* <div className="flex items-start gap-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
        >
          <path
            d="M5.78329 5.10903C5.78306 5.55106 5.60726 5.97489 5.29454 6.2873C4.98182 6.5997 4.55781 6.77508 4.11578 6.77486C3.67376 6.77464 3.24992 6.59883 2.93752 6.28612C2.62511 5.9734 2.44973 5.54939 2.44995 5.10736C2.45017 4.66533 2.62598 4.2415 2.9387 3.92909C3.25141 3.61669 3.67542 3.44131 4.11745 3.44153C4.55948 3.44175 4.98331 3.61756 5.29572 3.93027C5.60812 4.24299 5.78351 4.667 5.78329 5.10903ZM5.83329 8.00903H2.49995V18.4424H5.83329V8.00903ZM11.1 8.00903H7.78329V18.4424H11.0666V12.9674C11.0666 9.91736 15.0416 9.63403 15.0416 12.9674V18.4424H18.3333V11.834C18.3333 6.69236 12.45 6.88403 11.0666 9.40903L11.1 8.00903Z"
            fill="#F5F5FF"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
        >
          <path
            d="M11.6666 12.1923H13.75L14.5833 8.85901H11.6666V7.19234C11.6666 6.33401 11.6666 5.52568 13.3333 5.52568H14.5833V2.72568C14.3116 2.68984 13.2858 2.60901 12.2025 2.60901C9.93996 2.60901 8.3333 3.98984 8.3333 6.52568V8.85901H5.8333V12.1923H8.3333V19.2757H11.6666V12.1923Z"
            fill="#F5F5FF"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
        >
          <g clip-path="url(#clip0_1_7211)">
            <path
              d="M10 0.942383C7.28625 0.942383 6.945 0.954883 5.87875 1.00238C4.8125 1.05238 4.08625 1.21988 3.45 1.46738C2.78231 1.71779 2.17768 2.11163 1.67875 2.62113C1.16925 3.12006 0.775407 3.72469 0.525 4.39238C0.2775 5.02738 0.10875 5.75488 0.06 6.81738C0.0125 7.88613 0 8.22613 0 10.9436C0 13.6586 0.0125 13.9986 0.06 15.0649C0.11 16.1299 0.2775 16.8561 0.525 17.4924C0.78125 18.1499 1.1225 18.7074 1.67875 19.2636C2.23375 19.8199 2.79125 20.1624 3.44875 20.4174C4.08625 20.6649 4.81125 20.8336 5.87625 20.8824C6.94375 20.9299 7.28375 20.9424 10 20.9424C12.7163 20.9424 13.055 20.9299 14.1225 20.8824C15.1863 20.8324 15.915 20.6649 16.5513 20.4174C17.2185 20.1668 17.8227 19.773 18.3212 19.2636C18.8775 18.7074 19.2188 18.1499 19.475 17.4924C19.7213 16.8561 19.89 16.1299 19.94 15.0649C19.9875 13.9986 20 13.6586 20 10.9424C20 8.22613 19.9875 7.88613 19.94 6.81863C19.89 5.75488 19.7213 5.02738 19.475 4.39238C19.2246 3.72469 18.8308 3.12006 18.3212 2.62113C17.8223 2.11163 17.2177 1.71779 16.55 1.46738C15.9125 1.21988 15.185 1.05113 14.1213 1.00238C13.0538 0.954883 12.715 0.942383 9.9975 0.942383H10ZM9.10375 2.74488H10.0013C12.6713 2.74488 12.9875 2.75363 14.0413 2.80238C15.0162 2.84613 15.5462 3.00988 15.8988 3.14613C16.365 3.32738 16.6987 3.54488 17.0487 3.89488C17.3988 4.24488 17.615 4.57738 17.7963 5.04488C17.9338 5.39613 18.0963 5.92613 18.14 6.90113C18.1887 7.95488 18.1987 8.27113 18.1987 10.9399C18.1987 13.6086 18.1887 13.9261 18.14 14.9799C18.0963 15.9549 17.9325 16.4836 17.7963 16.8361C17.6348 17.2698 17.3791 17.6621 17.0475 17.9849C16.6975 18.3349 16.365 18.5511 15.8975 18.7324C15.5475 18.8699 15.0175 19.0324 14.0413 19.0774C12.9875 19.1249 12.6713 19.1361 10.0013 19.1361C7.33125 19.1361 7.01375 19.1249 5.96 19.0774C4.985 19.0324 4.45625 18.8699 4.10375 18.7324C3.66979 18.5715 3.277 18.3161 2.95375 17.9849C2.62159 17.6619 2.36541 17.2691 2.20375 16.8349C2.0675 16.4836 1.90375 15.9536 1.86 14.9786C1.8125 13.9249 1.8025 13.6086 1.8025 10.9374C1.8025 8.26613 1.8125 7.95238 1.86 6.89863C1.905 5.92363 2.0675 5.39363 2.205 5.04113C2.38625 4.57488 2.60375 4.24113 2.95375 3.89113C3.30375 3.54113 3.63625 3.32488 4.10375 3.14363C4.45625 3.00613 4.985 2.84363 5.96 2.79863C6.8825 2.75613 7.24 2.74363 9.10375 2.74238V2.74488ZM15.3387 4.40488C15.1812 4.40488 15.0251 4.43592 14.8795 4.49623C14.7339 4.55653 14.6017 4.64492 14.4902 4.75635C14.3788 4.86778 14.2904 5.00007 14.2301 5.14566C14.1698 5.29125 14.1388 5.4473 14.1388 5.60488C14.1388 5.76247 14.1698 5.91851 14.2301 6.0641C14.2904 6.20969 14.3788 6.34198 14.4902 6.45341C14.6017 6.56484 14.7339 6.65323 14.8795 6.71354C15.0251 6.77384 15.1812 6.80488 15.3387 6.80488C15.657 6.80488 15.9622 6.67845 16.1873 6.45341C16.4123 6.22837 16.5387 5.92314 16.5387 5.60488C16.5387 5.28662 16.4123 4.9814 16.1873 4.75635C15.9622 4.53131 15.657 4.40488 15.3387 4.40488ZM10.0013 5.80738C9.32009 5.79676 8.64362 5.92174 8.01122 6.17506C7.37883 6.42838 6.80314 6.80497 6.31769 7.28291C5.83223 7.76085 5.4467 8.33059 5.18355 8.95896C4.9204 9.58732 4.78488 10.2618 4.78488 10.943C4.78488 11.6243 4.9204 12.2987 5.18355 12.9271C5.4467 13.5554 5.83223 14.1252 6.31769 14.6031C6.80314 15.081 7.37883 15.4576 8.01122 15.711C8.64362 15.9643 9.32009 16.0893 10.0013 16.0786C11.3494 16.0576 12.6353 15.5073 13.5812 14.5464C14.5272 13.5856 15.0574 12.2913 15.0574 10.943C15.0574 9.59467 14.5272 8.3004 13.5812 7.33957C12.6353 6.37874 11.3494 5.82842 10.0013 5.80738ZM10.0013 7.60863C10.439 7.60863 10.8726 7.69486 11.277 7.8624C11.6815 8.02994 12.049 8.2755 12.3586 8.58507C12.6681 8.89463 12.9137 9.26214 13.0812 9.66661C13.2488 10.0711 13.335 10.5046 13.335 10.9424C13.335 11.3802 13.2488 11.8137 13.0812 12.2182C12.9137 12.6226 12.6681 12.9901 12.3586 13.2997C12.049 13.6093 11.6815 13.8548 11.277 14.0224C10.8726 14.1899 10.439 14.2761 10.0013 14.2761C9.11709 14.2761 8.26913 13.9249 7.64393 13.2997C7.01873 12.6745 6.6675 11.8265 6.6675 10.9424C6.6675 10.0582 7.01873 9.21027 7.64393 8.58507C8.26913 7.95987 9.11709 7.60863 10.0013 7.60863Z"
              fill="#F5F5FF"
            />
          </g>
          <defs>
            <clipPath id="clip0_1_7211">
              <rect
                width="20"
                height="20"
                fill="white"
                transform="translate(0 0.942383)"
              />
            </clipPath>
          </defs>
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
        >
          <path
            d="M18.7167 5.9423C18.075 6.23397 17.3834 6.42563 16.6667 6.5173C17.4 6.07563 17.9667 5.37563 18.2334 4.53397C17.5417 4.95063 16.775 5.2423 15.9667 5.40897C15.3084 4.6923 14.3834 4.27563 13.3334 4.27563C11.375 4.27563 9.77503 5.87563 9.77503 7.85063C9.77503 8.13397 9.80836 8.40897 9.8667 8.6673C6.90003 8.5173 4.25836 7.0923 2.50003 4.93397C2.1917 5.45897 2.0167 6.07563 2.0167 6.72563C2.0167 7.9673 2.6417 9.0673 3.60836 9.6923C3.0167 9.6923 2.4667 9.52564 1.98336 9.27563V9.30063C1.98336 11.034 3.2167 12.484 4.85003 12.809C4.32564 12.9525 3.77511 12.9724 3.2417 12.8673C3.46804 13.5777 3.91131 14.1993 4.50921 14.6447C5.10711 15.0902 5.82957 15.337 6.57503 15.3506C5.31139 16.351 3.74503 16.8917 2.13336 16.884C1.85003 16.884 1.5667 16.8673 1.28336 16.834C2.8667 17.8506 4.75003 18.4423 6.7667 18.4423C13.3334 18.4423 16.9417 12.9923 16.9417 8.2673C16.9417 8.10897 16.9417 7.95897 16.9334 7.80063C17.6334 7.30063 18.2334 6.6673 18.7167 5.9423Z"
            fill="#F5F5FF"
          />
        </svg>
      </div> */}

      <div className=' flex h-[40px] flex-col  justify-between items-center self-stretch'>
        <div className='flex justify-center items-center gap-8 self-stretch'>
          <p className='text-[#F5F5FF] font-inter text-center text-[16px] font-normal leading-6'>
            © 2023.Cible Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
