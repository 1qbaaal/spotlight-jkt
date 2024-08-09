"use client";
import { useState } from "react";
import { samplePage } from "~/contents/sample";
import { Pagination } from "antd";
import Image from "next/image";

export default function Product() {
  const [page, setPage] = useState(1);
  const pageSize = 5;
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  return (
    <div className="min-h-screen">
      <div className="flex items-center justify-center pt-10">
        <div className="grid grid-cols-4 gap-5">
          {samplePage.slice(startIndex, endIndex).map((p, i) => (
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
      <div className="flex items-center justify-center py-10">
        <Pagination
          defaultCurrent={1}
          total={samplePage.length}
          pageSize={pageSize}
          current={page}
          onChange={(page) => setPage(page)}
        />
      </div>
    </div>
  );
}
