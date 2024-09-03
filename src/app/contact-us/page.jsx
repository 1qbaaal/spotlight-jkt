"use client";
import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";
import Link from "next/link";
import { FaSquarePhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import dynamic from "next/dynamic";

// const Store = dynamic(() => import("../../components/store"), {
//   ssr: false,
// });

export default function ContactUs() {
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
          <p className="text-5xl font-bold text-white">Contact Us</p>
        </div>
      </div>
      <div className="flex flex-cols-2 w-full h-[100vh]">
        <div className="w-1/2 px-10 py-10 flex flex-col gap-5">
          <span className="text-xl font-bold text-purple-500">
            Ada yang ingin ditanyakan?
          </span>
          <p>
            Tertarik dengan kami? ingin mengetahui lebih lanjut? Yuk, kontak
            kami dibawah ini atau kunjungi kami pada alamat yang tertera.
          </p>
          <div className="flex">
            <FaMapMarkerAlt className="text-black-500 mr-5 h-[80px] w-[40px] pt-4" />
            <Link href="https://maps.app.goo.gl/wqrC6M75AUsmcqLi8">
              <div className="border p-2 shadow rounded">
                <h1 className="text-xl font-bold">Office:</h1>
                <p>
                  JL. Meruya Ilir Raya 44 RT/RW 002/008, Srengseng, Kembangan,
                  West Jakarta City, Jakarta 11630.
                </p>
              </div>
            </Link>
          </div>
          <div className="flex">
            <FaSquarePhone className="text-black-500 mr-5 h-[80px] w-[40px] pt-6" />
            <div className="">
              <h1 className="text-xl font-bold">No. Telp:</h1>
              <div className="pt-2">
                <p>+62 21 5866080</p>
                <p>+6287780000687</p>
                <p>+6281294403156</p>
              </div>
            </div>
          </div>
          <div className="flex">
            <MdEmail className="text-black-500 mr-5 h-[80px] w-[40px]" />
            <div className="pt-4">
              <h1 className="text-xl font-bold">Email:</h1>
              <p>spotligth.jakarta@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="w-1/2">
          {/* <Store /> */}
        </div>
      </div>
    </div>
  );
}
