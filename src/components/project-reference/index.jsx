import Image from "next/image";
import { projectRef } from "~/contents/project-ref";
export default function ProjectReferenceCard() {
  return (
    <div className="">
      <div className="grid grid-cols-4 w-full gap-5 py-6">
        {projectRef.map((p, i) => (
          <div className="relative overflow-hidden hover:scale-105 transition-all duration-300" key={i}>
          <Image
            src={`${p.imageUrl}`}
            alt={p.id}
            width={1000}
            height={1000}
            className="w-[350px] h-[400px]"
          />
          <div className="absolute w-[350px] h-[400px] bg-black/20 flex flex-col justify-center bottom-0 hover:bottom-0 opacity-0 hover:opacity-100 transition-all duration-300">
            <span className="text-lg text-white font-semibold text-center">
              {" "}
              {p.company}
            </span>
            <span className="text-lg text-white font-semibold text-center">
              {" "}
              {p.product}
            </span>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
}
