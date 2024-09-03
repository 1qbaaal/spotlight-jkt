import { projectRef } from "~/contents/project-ref";
import Image from "next/image";
import Link from "next/link";
export default function RefProjectHomePage() {
  return (
    <div>
      <div className="grid grid-cols-4 w-full gap-5 py-6">
        {projectRef.slice(0, 4).map((p, i) => (
          <div key={i}>
            <Image
              src={p.imageUrl}
              alt={p.id}
              width={1000}
              height={1000}
              className="w-[350px] h-[400px] hover:scale-105 transition-all duration-300"
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <Link href="/project-reference">
          <button className="text-xl font-semibold border-2 px-5 py-2 rounded-lg bg-blue-100">
            View More
          </button>
        </Link>
      </div>
    </div>
  );
}
