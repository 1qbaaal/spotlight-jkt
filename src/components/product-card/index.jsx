import Image from "next/image";
import { productPage } from "~/contents/product";
import Link from "next/link";
export default function ProductCard() {
  return (
    <div className="flex gap-4 min-h-screen">
      <div className="grid grid-cols-4 w-full gap-5 py-6">
        {productPage.slice(0, 8).map((p, i) => (
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
              <h2 className="card-title text-center">{p.name}</h2>
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
  );
}
