import Image from "next/image";
import ProjectReferenceCard from "~/components/project-reference";
import { client } from "~/contents/client";

export default function ProjectReference() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <div className="relative">
        <Image
          src="/4.jpg"
          alt="Project Reference"
          layout="responsive"
          width={1000}
          height={700}
          className="w-full h-[70vh] object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-start p-10 bg-gradient-to-t from-black via-transparent to-transparent">
          <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Project Reference
          </p>
        </div>
      </div>
      <div className="flex flex-col flex-1">
        <div className="py-10 px-4 sm:px-8 md:px-12 lg:px-20">
          <span className="text-xl sm:text-2xl font-semibold">
            Our Project Reference:
          </span>
          <hr className="border-2 border-black my-4" />
        </div>
        <div className="flex justify-center px-4 sm:px-8 md:px-12 lg:px-20">
          <ProjectReferenceCard />
        </div>
        <div className="py-10 px-4 sm:px-8 md:px-12 lg:px-20">
          <hr className="border-2 border-black my-4" />
          <span className="text-xl sm:text-2xl font-semibold">Our Client:</span>
          <div className="overflow-x-auto">
            <marquee>
              <div className="flex gap-4 sm:gap-6 lg:gap-10">
                {client.map((c, i) => (
                  <Image
                    src={`${c.imageUrl}`}
                    alt={c.id}
                    width={150}
                    height={150}
                    className="w-[150px] h-[150px] object-contain"
                    key={i}
                  />
                ))}
              </div>
            </marquee>
          </div>
        </div>
      </div>
    </div>
  );
}
