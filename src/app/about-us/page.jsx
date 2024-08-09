"use client";
import Image from "next/image";
import { aboutUs } from "~/contents/about-us";
export default function AboutUs() {
  return (
    <div className="min-h-screen flex flex-col">
      <div>
        <Image
          src="/1.jpg"
          alt="logo"
          width={1000}
          height={1000}
          className="w-full h-[70vh] object-cover"
        />
      </div>
      <div className="absolute flex flex-col justify-center items-start w-full h-[70vh] pl-10">
        <p className="text-5xl font-bold text-white">About Us</p>
      </div>
      <div className="flex flex-col py-10 px-52 gap-4 text-justify">
        {aboutUs.map((a, i) => (
          <p key={i}>{a.paragraph}</p>
        ))}
      </div>
    </div>
  );
}
