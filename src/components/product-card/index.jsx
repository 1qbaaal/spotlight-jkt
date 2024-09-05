import Image from "next/image";
import { productPage } from "~/contents/product";
import Link from "next/link";

export default function ProductCard() {
  return (
    <div className="flex justify-center min-h-screen px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-6 w-full max-w-screen-xl">
        {productPage.slice(0, 8).map((p, i) => (
          <div key={i} className="card bg-base-100 w-full shadow-xl">
            <figure className="px-6 pt-6">
              <Image
                src={`${p.imageUrl}`}
                alt="Lamp"
                className="rounded-xl w-[200px] h-[200px] object-cover"
                height={1000}
                width={1000}
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-center text-lg font-semibold">
                {p.name}
              </h2>
              <div className="card-actions mt-4">
                <Link href={`/product/${p.id}`}>
                  <button className="border-2 bg-slate-200 px-4 py-2 rounded-lg shadow-lg hover:bg-black hover:text-white transition duration-300 ease-in-out">
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
