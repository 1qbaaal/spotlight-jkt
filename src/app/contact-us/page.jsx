"use client";
import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";
import Link from "next/link";
import { FaSquarePhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
// import dynamic from "next/dynamic";

// const Store = dynamic(() => import("../../components/store"), {
//   ssr: false,
// });

export default function ContactUs() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="relative">
        <Image
          src="/2.jpg"
          alt="Contact Us Background"
          layout="responsive"
          width={1000}
          height={700}
          className="w-full h-[70vh] object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-start pl-4 sm:pl-8 lg:pl-10">
          <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">Contact Us</p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row w-full h-full py-6 px-4 sm:px-8 lg:px-10">
        <div className="lg:w-1/2 flex flex-col gap-6">
          <span className="text-lg sm:text-xl md:text-2xl font-bold text-purple-500">
            Ada yang ingin ditanyakan?
          </span>
          <p className="text-base sm:text-lg md:text-xl">
            Tertarik dengan kami? ingin mengetahui lebih lanjut? Yuk, kontak kami dibawah ini atau kunjungi kami pada alamat yang tertera.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-black-500 text-3xl" />
              <Link href="https://maps.app.goo.gl/wqrC6M75AUsmcqLi8">
                <div className="border p-4 shadow rounded flex-1">
                  <h1 className="text-lg sm:text-xl font-bold">Office:</h1>
                  <p className="text-base sm:text-lg">
                    JL. Meruya Ilir Raya 44 RT/RW 002/008, Srengseng, Kembangan, West Jakarta City, Jakarta 11630.
                  </p>
                </div>
              </Link>
            </div>
            <div className="flex items-start gap-4">
              <FaSquarePhone className="text-black-500 text-3xl" />
              <div>
                <h1 className="text-lg sm:text-xl font-bold">No. Telp:</h1>
                <div className="text-base sm:text-lg">
                  <p>+62 21 5866080</p>
                  <p>+6287780000687</p>
                  <p>+6281294403156</p>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MdEmail className="text-black-500 text-3xl" />
              <div>
                <h1 className="text-lg sm:text-xl font-bold">Email:</h1>
                <p className="text-base sm:text-lg">spotligth.jakarta@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2">
          {/* <Store /> */}
        </div>
      </div>
    </div>
  );
}
