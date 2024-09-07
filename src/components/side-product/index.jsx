'use client';
import { useState } from 'react';
import { categories } from '~/contents/product';
import { productPage } from '~/contents/product';
import { Pagination } from 'antd';
import Image from 'next/image';
import Link from 'next/link';

export default function ProductCard() {
  const [page, setPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filterSample =
    selectedCategory === 'All'
      ? productPage
      : productPage.filter((sample) => sample.category === selectedCategory);

  const pageSize = 12;
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  const onHandleRefresh = () => {
    location.reload();
  };

  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-5 w-full gap-5 px-5 sm:px-10 py-6 min-h-screen'>
        <div className='flex flex-col md:border-r-4 mobile:w-[85vw] sm:w-[85vw] md:w-[30vw] xl:w-[20vw] lg:w-[25vw] mobile:border-none'>
          <span className='text-lg font-semibold mobile:text-center mobile:text-xl sm:text-center md:text-left'>
            CATEGORY
          </span>
          <div className='flex mobile:justify-center sm:justify-center md:justify-start'>
            <span
              onClick={onHandleRefresh}
              className='hover:cursor-pointer text-sm md:text-base font-medium pt-2 mobile:py-2 hover:text-red-500 mobile:text-center'
            >
              All Category
            </span>
          </div>
          <div tabIndex={0} className='collapse collapse-arrow mobile:w-[85vw]'>
            <div className='collapse-title text-sm md:text-base font-medium'>
              <span className='hover:cursor-pointer'>Lampu Hias</span>
            </div>
            <div className='collapse-content'>
              {categories.map((c, i) => (
                <div key={i}>
                  {c?.subCategory?.map((sub, i) => (
                    <p
                      className='w-full md:w-[25vw] lg:w-[15vw] text-xs md:text-xs xxl:text-sm hover:cursor-pointer pr-5 sm:pr-10 py-2 pl-4 hover:text-red-600'
                      key={i}
                      onClick={() => setSelectedCategory(sub.name)}
                    >
                      {sub.name}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className='col-span-4'>
          <div className='flex items-center justify-center'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 xl:grid-cols-3 fhd:grid-cols-4 gap-5 md:pl-20 xl:pl-10'>
              {filterSample.slice(startIndex, endIndex).map((p, i) => (
                <div
                  className='card bg-base-100 w-full sm:w-64 md:w-72 shadow-xl'
                  key={i}
                >
                  <figure className='px-10 pt-10'>
                    <Image
                      src={`${p.imageUrl}`}
                      alt={p.id}
                      height={1000}
                      width={1000}
                      className='w-[200px] sm:w-[250px] h-[200px] sm:h-[250px] rounded-lg object-cover'
                      loading='lazy'
                    />
                  </figure>
                  <div className='card-body items-center text-center'>
                    <h2 className='card-title text-sm sm:text-base'>
                      {p.name}
                    </h2>
                    <div className='card-actions'>
                      <Link href={`/product/${p.id}`}>
                        <button className='border-2 bg-slate-200 px-4 py-2 rounded-lg shadow-lg hover:bg-black hover:text-white'>
                          View Product
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className='flex items-center justify-center py-10'>
        <Pagination
          defaultCurrent={1}
          total={filterSample.length}
          pageSize={pageSize}
          current={page}
          onChange={(page) => setPage(page)}
        />
      </div>
    </div>
  );
}
