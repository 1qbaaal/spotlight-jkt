'use client';
import Image from 'next/image';
import { productPage } from '~/contents/product';
import Link from 'next/link';
import { descProduct } from '~/contents/product';

export default function DetailProduct({
  productId,
  name,
  category,
  deskripsi,
  type,
  diameter,
  tinggi,
  imageUrl,
}) {
  return (
    <div className='flex flex-col min-h-screen font-sans'>
      <div className='flex flex-col py-6 px-4 sm:px-8 md:px-12 lg:px-20'>
        <p className='text-2xl sm:text-3xl font-semibold py-2'>{name}</p>
        <hr className='border-2 border-black' />
        <p className='text-lg sm:text-xl font-semibold py-2'>{category}</p>
        <div className='flex sm:flex-col lg:flex-row gap-6'>
          <div className='w-full'>
            <div className='px-4 py-6 flex justify-center'>
              <Image
                src={`${imageUrl}`}
                alt='Product Image'
                width={1000}
                height={1000}
                className='w-full max-w-2xl object-cover'
              />
            </div>
          </div>
          <div className='w-full'>
            <div className='px-4 py-6 flex flex-col'>
              <span className='text-lg sm:text-xl font-semibold'>
                Spesifikasi
              </span>
              <hr className='border border-black' />
              <h1 className='text-base sm:text-lg font-semibold pt-4'>Tipe:</h1>
              <span className='text-base sm:text-xl'>{type}</span>
              <h1 className='text-base sm:text-lg font-semibold pt-4'>
                Dimensi Produk:
              </h1>
              <span>Diameter: {diameter}</span>
              <span>Tinggi: {tinggi}</span>
            </div>
            <div className='px-4 py-6 flex flex-col'>
              <span className='text-lg sm:text-xl font-semibold'>
                Deskripsi
              </span>
              <hr className='border border-black' />
              <span className='text-base sm:text-xl py-4'>{name}</span>
              <div>
                {descProduct.map((d, i) => (
                  <p key={i} className='text-base sm:text-lg'>
                    {d}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='py-6 px-4 sm:px-8 md:px-12 lg:px-20'>
        <h1 className='underline text-xl sm:text-2xl font-semibold'>Fitur</h1>
        <h1 className='text-sm sm:text-base py-4'>
          Harga murah dan kualitas yang jauh lebih baik dari merk kompetitor.
        </h1>
        <ul className='list-disc pl-5 text-sm sm:text-base'>
          <li>Garansi sparepart 1 tahun</li>
        </ul>
      </div>
      <div className='px-4 sm:px-8 md:px-12 lg:px-20'>
        <hr className='border-2 border-black' />
      </div>
      <div className='py-6 px-4 sm:px-8 md:px-12 lg:px-20'>
        <h1 className='text-xl sm:text-2xl text-center font-semibold'>
          Other Product
        </h1>
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 fhd:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 py-6'>
          {productPage.slice(0, 4).map((p, i) => (
            <div key={i} className='card bg-base-100 w-full max-w-sm shadow-xl'>
              <figure className='px-4 pt-4'>
                <Image
                  src={`${p.imageUrl}`}
                  alt='Lamp'
                  className='rounded-xl w-[200px] h-[200px] object-cover'
                  height={250}
                  width={250}
                />
              </figure>
              <div className='card-body items-center text-center'>
                <h2 className='card-title text-base sm:text-lg'>{p.product}</h2>
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
  );
}
