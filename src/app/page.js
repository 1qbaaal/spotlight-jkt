import Image from "next/image";

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
      <div></div>
    </div>
  );
}
