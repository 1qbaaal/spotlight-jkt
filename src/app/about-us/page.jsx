'use client';
import * as React from 'react';
import Image from 'next/image';
import { aboutUs } from '~/contents/about-us';

export default function AboutUs() {
  const [loading, isLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      isLoading(false);
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <div className='min-h-screen flex flex-col'>
      {loading ? (
        <div className='flex items-center justify-center h-screen bg-white'>
          <span className='loading loading-spinner loading-lg bg-black'></span>
        </div>
      ) : (
        <>
          <div>
            <Image
              src='/1.jpg'
              alt='logo'
              width={1000}
              height={1000}
              loading='lazy'
              className='w-full h-[50vh] sm:h-[60vh] md:h-[70vh] object-cover'
            />
          </div>
          <div className='absolute flex flex-col justify-center items-start w-full h-[50vh] sm:h-[60vh] md:h-[70vh] pl-5 sm:pl-10'>
            <p className='text-4xl sm:text-5xl font-bold text-white'>
              About Us
            </p>
          </div>
          <div className='flex flex-col py-10 px-5 sm:px-10 md:px-20 lg:px-52 gap-4 text-justify'>
            {aboutUs.map((a, i) => (
              <p key={i} className='text-sm sm:text-base md:text-lg'>
                {a.paragraph}
              </p>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
