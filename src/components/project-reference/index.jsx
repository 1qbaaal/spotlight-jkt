import Image from "next/image";
import { projectRef } from "~/contents/project-ref";

export default function ProjectReferenceCard() {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 py-6">
        {projectRef.map((p, i) => (
          <div
            className="relative overflow-hidden group"
            key={i}
          >
            <Image
              src={`${p.imageUrl}`}
              alt={p.id}
              width={1000}
              height={1000}
              className="w-full h-[300px] sm:h-[350px] md:h-[400px] object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-base sm:text-lg md:text-xl font-semibold text-white">
                {p.company}
              </span>
              <span className="text-base sm:text-lg md:text-xl font-semibold text-white mt-2">
                {p.product}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
