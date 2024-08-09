"use client";
import { useState } from "react";
import { categories } from "~/contents/sample";
import { samplePage } from "~/contents/sample";
import { Pagination } from "antd";
import Image from "next/image";
export default function ProductCard() {
  const [page, setPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filterSample =
    selectedCategory === "All"
      ? samplePage
      : samplePage.filter((sample) => sample.category === selectedCategory);

  const pageSize = 5;
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  return (
    <div>
      <div className="flex gap-10 py-10 px-32">
        {/* <div className="flex justify-center py-10 gap-10 bg-red-100">
          {categories.map((c, i) => (
            <div key={i}>
              <button
                className="btn bg-white w-[5vw] border border-gray-800 hover:bg-gray-800 hover:text-white hover:border-black"
                onClick={() => setSelectedCategory(c)}
              >
                {c}
              </button>
            </div>
          ))}
        </div> */}

        <div className="collapse w-[10%] border ">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium flex justify-end">Category</div>
          <div className="collapse-content flex flex-col items-end">
            {categories.map((c, i) => (
              <div key={i}>
                <p
                  className="bg-white w-[5vw] border border-gray-800 hover:bg-gray-800 hover:text-white hover:border-black hover:cursor-pointer"
                  onClick={() => setSelectedCategory(c)}
                >
                  {c}
                </p>
              </div>
            ))}
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum esse laudantium tenetur error doloribus ducimus tempora accusantium maxime distinctio aspernatur consequatur similique aliquam quibusdam, hic est inventore consequuntur porro enim?</p>
        </div>
        
        <div className="flex items-center justify-center bg-blue-100">
          <div className="grid grid-cols-4 gap-5">
            {filterSample.slice(startIndex, endIndex).map((p, i) => (
              <div key={i}>
                <Image
                  src={`${p.imageUrl}`}
                  alt={p.id}
                  height={10000}
                  width={10000}
                  className="object-cover h-80 w-80 rounded-lg"
                  loading="lazy"
                />
              </div>
            ))}
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
