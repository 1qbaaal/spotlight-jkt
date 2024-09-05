"use client";
import { useState } from "react";
import { categories } from "~/contents/product";
import { productPage } from "~/contents/product";
import { Pagination } from "antd";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard() {
  const [page, setPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filterSample =
    selectedCategory === "All"
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
      <div className="grid grid-cols-1 md:grid-cols-5 w-full gap-5 px-5 sm:px-10 md:px-20 py-6 min-h-screen">
        <div className="flex flex-col border-r-4 mobile:border-none">
          <span className="text-lg md:text-xl font-semibold py-8">CATEGORY</span>
          <span
            onClick={onHandleRefresh}
            className="hover:cursor-pointer text-sm md:text-base font-medium pt-2 pl-4"
          >
            All Category
          </span>
          <div tabIndex={0} className="collapse collapse-arrow">
            <div className="collapse-title text-sm md:text-base font-medium">
              <span className="hover:cursor-pointer">Lampu Hias</span>
            </div>
            <div className="collapse-content">
              {categories.map((c, i) => (
                <div key={i}>
                  {c?.subCategory?.map((sub, i) => (
                    <p
                      className="w-full md:w-[15vw] text-xs md:text-sm hover:cursor-pointer pr-5 sm:pr-10 py-2 pl-4"
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

        <div className="col-span-4">
          <div className="flex items-center justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filterSample.slice(startIndex, endIndex).map((p, i) => (
                <div className="card bg-base-100 w-full sm:w-72 shadow-xl" key={i}>
                  <figure className="px-10 pt-10">
                    <Image
                      src={`${p.imageUrl}`}
                      alt={p.id}
                      height={1000}
                      width={1000}
                      className="w-[200px] sm:w-[250px] h-[200px] sm:h-[250px] rounded-lg object-cover"
                      loading="lazy"
                    />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title text-sm sm:text-base">{p.name}</h2>
                    <div className="card-actions">
                      <Link href={`/product/${p.id}`}>
                        <button className="border-2 bg-slate-200 px-4 py-2 rounded-lg shadow-lg hover:bg-black hover:text-white">
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
      <div className="flex items-center justify-center py-10">
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
