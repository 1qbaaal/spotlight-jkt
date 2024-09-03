"use client";
import Image from "next/image";
import DetailProduct from "~/components/detail-product";
import { productPage } from "~/contents/product";
export default function DetailProductPage(params) {
  const data = productPage.filter((p) => p.id == params.params.detailProduct);
  return (
    <div className="min-h-screen flex flex-col">
      <div>
        <Image
          src="/2.jpg"
          alt="logo"
          width={1000}
          height={1000}
          className="w-full h-[70vh] object-cover"
        />
      </div>
      <div className="absolute flex flex-col justify-center items-start w-full h-[70vh] pl-10">
        <div className="">
          <p className="text-5xl font-bold text-white">Detail Product</p>
        </div>
      </div>
      <div>
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
