"use client";
import Image from "next/image";
import DetailProduct from "~/components/detail-product";
import { productPage } from "~/contents/product";

export default function DetailProductPage(params) {
  const data = productPage.filter((p) => p.id == params.params.detailProduct);

  return (
    <div className="min-h-screen flex flex-col">
      <div className="relative">
        <Image
          src="/2.jpg"
          alt="logo"
          width={1000}
          height={1000}
          className="w-full h-[50vh] md:h-[70vh] object-cover"
        />
        <div className="absolute flex flex-col justify-center items-start w-full h-full pl-5 sm:pl-10">
          <p className="text-4xl sm:text-5xl font-bold text-white">Detail Product</p>
        </div>
      </div>

      <div className="py-10 px-5 sm:px-20">
        <DetailProduct
          productId={data[0].id}
          name={data[0].name}
          product={data[0].product}
          category={data[0].category}
          deskripsi={data[0].deskripsi}
          type={data[0].type}
          diameter={data[0].dimensi.diameter}
          tinggi={data[0].dimensi.tinggi}
          imageUrl={data[0].imageUrl}
        />
      </div>
    </div>
  );
}
