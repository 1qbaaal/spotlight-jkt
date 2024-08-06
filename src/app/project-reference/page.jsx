import Image from "next/image";
import ProjectReferenceCard from "~/components/project-reference";
export default function ProjectReference() {
  return (
    <div className="min-h-screen flex flex-col">
      <div>
        <Image
          src="/4.jpg"
          alt="logo"
          width={1000}
          height={1000}
          className="w-full h-[70vh] object-cover"
        />
      </div>
      <div className="absolute flex flex-col justify-center items-start w-full h-[70vh] pl-10">
        <div className="">
          <p className="text-5xl font-bold text-white">Project Reference</p>
        </div>
      </div>
      <div className="py-10 px-10">
        <span className="text-2xl font-semibold"> Our Project Reference: </span>
        <hr className="border-2 border-black" />
        <div className="">
          <ProjectReferenceCard />
        </div>
        <hr className="border-2 border-black" />
        <div className="py-10 px-10">
          <span className="text-2xl font-semibold"> Our Client:</span>
          <div className="px-96">
            <marquee className="">
              <div className="flex gap-10">
                <Image
                  src="/metland.png"
                  alt="logo"
                  width={1000}
                  height={1000}
                  className="w-[150px] h-[150px]"
                />
                <Image
                  src="/ace.png"
                  alt="logo"
                  width={1000}
                  height={1000}
                  className="w-[150px] h-[150px]"
                />
                <Image
                  src="/okabe.png"
                  alt="logo"
                  width={1000}
                  height={1000}
                  className="w-[150px] h-[150px]"
                />
                <Image
                  src="/alsut.jpg"
                  alt="logo"
                  width={1000}
                  height={1000}
                  className="w-[150px] h-[150px]"
                />
              </div>
            </marquee>
          </div>
        </div>
      </div>
    </div>
  );
}
