'use client';
import Image from 'next/image';
import ProductCard from '~/components/side-product';
import * as React from 'react';
export default function Product() {
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
              src='/6.jpg'
              alt='logo'
              width={1000}
              height={1000}
              loading='lazy'
              className='w-full h-[50vh] sm:h-[70vh] object-cover'
            />
          </div>
          <div className='absolute flex flex-col justify-center items-start w-full h-[70vh] mobile:-top-16 px-5'>
            <p className='text-5xl font-bold text-white'>Product</p>
          </div>
          <ProductCard />
        </>
      )}
    </div>
  );
}
