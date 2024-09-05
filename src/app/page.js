import Image from "next/image";
import Carousel from "~/components/carousel";
import RefProjectHomePage from "~/components/ref-project";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div className="relative">
        <Image
          src="/3.jpg"
          alt="Spotlight Jakarta"
          width={10000}
          height={10000}
          className="w-full h-[50vh] sm:h-[70vh] object-cover"
        />
        <div className="absolute flex flex-col justify-center items-start w-full h-full pl-5 sm:pl-10">
          <p className="text-4xl sm:text-5xl font-semibold text-white">
            Spotlight Jakarta
          </p>
          <p className="text-lg sm:text-xl text-white pt-6">
            Illuminate Your Home with Elegance
          </p>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="w-full py-6 px-5 sm:px-10 md:px-20 flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 flex flex-col justify-center px-5 sm:px-10">
          <h1 className="text-center md:text-end font-semibold text-2xl sm:text-3xl">
            Kami Menawarkan Anda
          </h1>
          <h1 className="text-center md:text-end font-semibold text-2xl sm:text-3xl">
            Apa yang orang lain tidak
          </h1>
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center px-5 sm:px-10">
          <h1 className="text-start font-bold text-base">
            Kami Menyediakan beragam lampu sesuai kebutuhan Anda
          </h1>
          <p className="text-justify text-base mt-4">
            Pilih Spotlight Jakarta untuk menghadirkan keindahan dan keunikan
            dalam setiap sudut ruangan Anda. Produk kami dirancang dengan
            kombinasi sempurna antara estetika dan kualitas, memastikan bahwa
            setiap lampu hias tidak hanya memberikan pencahayaan optimal, tetapi
            juga menjadi elemen dekoratif yang memperkaya suasana. Dengan
            Spotlight Jakarta, Anda mendapatkan produk unggulan yang dibuat
            dengan detail dan keahlian terbaik, yang akan memberikan nuansa
            eksklusif dan elegan pada rumah Anda.
          </p>
        </div>
      </div>

      {/* Product Section */}
      <div className="flex flex-col py-6 px-5 sm:px-10 md:px-20">
        <h1 className="text-center font-semibold text-2xl sm:text-3xl py-4">
          Our Product
        </h1>
        <hr className="border-2 border-gray-300" />
        <Carousel />
      </div>

      {/* Contact Us Section */}
      <div className="py-6 px-5 sm:px-10 md:px-20 border bg-gray-300 flex flex-col justify-center items-center">
        <h1 className="text-center font-semibold text-2xl sm:text-3xl py-4">
          Pertanyaan dan Konsultasi, silahkan hubungi kami
        </h1>
        <div className="flex justify-center">
          <Link href="/contact-us">
            <button className="text-lg sm:text-xl font-semibold border-2 px-4 sm:px-5 py-2 rounded-lg bg-blue-100 text-center">
              Hubungi Kami
            </button>
          </Link>
        </div>
      </div>

      {/* Project Reference Section */}
      <div className="py-6 px-5 sm:px-10 md:px-20">
        <h1 className="text-center font-semibold text-2xl sm:text-3xl py-4">
          Project Reference
        </h1>
        <hr className="border-2 border-gray-300" />
        <RefProjectHomePage />
      </div>
    </div>
  );
}
