import Image from "next/image";
import ProductCard from "~/components/side-product";
export default function Product() {
  return (
    <div className="min-h-screen flex flex-col">
      <div>
        <Image
          src="/6.jpg"
          alt="logo"
          width={1000}
          height={1000}
          className="w-full h-[70vh] object-cover"
        />
      </div>
      <div className="absolute flex flex-col justify-center items-start w-full h-[70vh] pl-10">
        <p className="text-5xl font-bold text-white">Product</p>
      </div>
      <ProductCard />
    </div>
  );
}
