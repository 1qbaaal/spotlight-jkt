import { projectRef } from "~/contents/project-ref";
import Image from "next/image";
import Link from "next/link";

export default function RefProjectHomePage() {
  return (
    <div>
      {/* Responsive grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full gap-5 py-6">
        {projectRef.slice(0, 4).map((p, i) => (
          <div key={i}>
            <Image
              src={p.imageUrl}
              alt={p.id}
              width={1000}
              height={1000}
              className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] object-cover hover:scale-105 transition-all duration-300"
            />
          </div>
        ))}
      </div>
      {/* Centering the button and adjusting it for responsiveness */}
      <div className="flex justify-center">
        <Link href="/project-reference">
          <button className="text-lg sm:text-xl font-semibold border-2 px-4 sm:px-5 py-2 rounded-lg bg-blue-100">
            View More
          </button>
        </Link>
      </div>
    </div>
  );
}
