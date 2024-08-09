import Image from "next/image";
import ProjectReferenceCard from "~/components/project-reference";
import { client } from "~/contents/client";
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
        <p className="text-5xl font-bold text-white">Project Reference</p>
      </div>
      <div className="">
        <div className="py-10 px-10">
          <span className="text-2xl font-semibold">
            {" "}
            Our Project Reference:{" "}
          </span>
          <hr className="border-2 border-black" />
        </div>
        <div className="flex justify-center px-10">
          <ProjectReferenceCard />
        </div>
        <div className="py-10 px-10">
          <hr className="border-2 border-black" />
          <span className="text-2xl font-semibold"> Our Client:</span>
          <div className="px-96">
            <marquee className="">
              <div className="flex gap-10">
                {client.map((c, i) => (
                  <Image
                    src={`${c.imageUrl}`}
                    alt={c.id}
                    width={1000}
                    height={1000}
                    className="w-[150px] h-[150px]"
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
