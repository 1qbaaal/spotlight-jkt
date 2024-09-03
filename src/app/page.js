import Image from "next/image";
import Carousel from "~/components/carousel";
import ProjectReference from "./project-reference/page";
import ProjectReferenceCard from "~/components/project-reference";
import RefProjectHomePage from "~/components/ref-project";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div>
        <Image
          src="/3.jpg"
          alt="Spotlight Jakarta"
          width={10000}
          height={10000}
          className="w-full h-[70vh]"
        />
      </div>
      <div className="absolute flex flex-col justify-center items-start w-full h-[70vh] pl-10">
        <div className="">
          <p className="text-5xl font-semibold text-white">Spotlight Jakarta</p>
          <p className="text-xl text-white text-center pt-6">
            Illuminate Your Home with Elegance
          </p>
        </div>
      </div>
      <div className="w-full h-[40vh] py-6 px-20 flex flex-col-2">
        <div className="w-1/2 flex flex-col justify-center px-10">
          <h1 className="text-end font-semibold text-3xl">
            Kami Menawarkan Anda{" "}
          </h1>
          <h1 className="text-end font-semibold text-3xl">
            Apa yang orang lain tidak
          </h1>
        </div>
        <div className="w-1/2 flex flex-col justify-center px-10">
          <h1 className="text-start font-bold text-base">
            {" "}
            Kami Menyediakan beragam lampu sesuai kebutuhan Anda{" "}
          </h1>
          <h1 className="text-justify text-base">
            Pilih Spotlight Jakarta untuk menghadirkan keindahan dan keunikan
            dalam setiap sudut ruangan Anda. Produk kami dirancang dengan
            kombinasi sempurna antara estetika dan kualitas, memastikan bahwa
            setiap lampu hias tidak hanya memberikan pencahayaan optimal, tetapi
            juga menjadi elemen dekoratif yang memperkaya suasana. Dengan
            Spotlight Jakarta, Anda mendapatkan produk unggulan yang dibuat
            dengan detail dan keahlian terbaik, yang akan memberikan nuansa
            eksklusif dan elegan pada rumah Anda
          </h1>
        </div>
      </div>
      <div className="flex flex-col py-6 px-20">
        <h1 className="text-center font-semibold text-3xl py-4">
          {" "}
          Our Product
        </h1>
        <hr className="border-2 border-gray" />
        <Carousel />
      </div>
      <div className="py-6 px-20 border bg-gray-300 h-[30vh] flex flex-col justify-center items-center">
        <h1 className="text-center font-semibold text-3xl py-4">
          {" "}
          Pertanyaan dan Konsultasi, silahkan hubungi kami
        </h1>
        <div className="flex justify-center">
          <Link href="/contact-us">
            <button className="text-xl font-semibold border-2 px-5 py-2 rounded-lg bg-blue-100 text-center">
              Hubungi Kami
            </button>
          </Link>
        </div>
      </div>
      <div className="py-6 px-20">
        <h1 className="text-center font-semibold text-3xl py-4">
          {" "}
          Project Reference
        </h1>
        <hr className="border-2 border-gray" />
        <RefProjectHomePage />
      </div>
    </div>
  );
}
