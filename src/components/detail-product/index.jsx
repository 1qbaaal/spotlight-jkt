"use client";
import Image from "next/image";
import { productPage } from "~/contents/product";
import Link from "next/link";
import { descProduct} from "~/contents/product";
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
    <div className="flex flex-col min-h-screen font-sans">
      <div className="flex flex-col py-6 px-20">
        <p className="text-3xl font-semibold py-2">{name}</p>
        <hr className="border-2 border-black" />
        <p className="text-xl font-semibold py-2">{category}</p>
        <div className="flex flex-cols-2">
          <div className="w-1/2">
            <div className="px-10 py-6 flex justify-center">
              <Image
                src={`${imageUrl}`}
                alt="logo"
                width={1000}
                height={1000}
                className="w-[500px] h-[500px]"
              />
            </div>
          </div>
          <div className="w-1/2 grid grid-rows-2">
            <div className="px-10 py-6 flex flex-col">
              {" "}
              <span className="text-xl font-semibold">Spesifikasi</span>
              <hr className="border border-black" />
              <h1 className="text-lg font-semibold pt-4"> Tipe: </h1>
              <span className="text-xl font-base">{type}</span>
              <h1 className="text-lg font-semibold pt-4"> Dimensi Produk: </h1>
              <span>Diameter: {diameter}</span>
              <span>Tinggi: {tinggi}</span>
            </div>
            <div className="px-10 py-6 flex flex-col">
              <span className="text-xl font-semibold">Deskripsi</span>
              <hr className="border border-black" />
              <span className="text-xl font-base py-4">{name}</span>
              <span>
                {descProduct.map((d, i) => (
                  <p key={i}>{d}</p>
                ))}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="py-10 px-20">
        <h1 className="underline text-2xl font-semibold"> Fitur</h1>
        <h1 className="text-base py-4">
          Harga murah dan kualitas yang jauh lebih baik dari merk kompetitor.
        </h1>
        <li>Garansi sparepart 1 tahun</li>
      </div>
      <div className="px-20">
        <hr className="border-2 border-black" />
      </div>
      <div className="py-6 px-20">
        <h1 className="text-2xl text-center font-semibold"> Other Product</h1>
        <div className="grid grid-cols-4 w-full gap-5 py-6">
          {productPage.slice(0, 4).map((p, i) => (
            <div className="card bg-base-100 w-80 shadow-xl">
              <figure className="px-10 pt-10">
                <Image
                  src={`${p.imageUrl}`}
                  alt="Lamp"
                  className="rounded-xl w-[250px] h-[250px]"
                  height={1000}
                  width={1000}
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-center">{p.product}</h2>
                <div className="card-actions">
                  <Link href={`/product/${p.id}`}>
                    <button className="border-2 bg-slate-200 px-5 py-2 rounded-lg shadow-lg hover:bg-black hover:text-white">
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
