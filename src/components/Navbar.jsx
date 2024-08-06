import Link from "next/link";
import { IoMdArrowDropdown } from "react-icons/io";
export default function Navbar() {
  return (
    <div className="navbar flex justify-between bg-gray-100/50 text-base text-black font-bold px-10">
      <div className="text-xl hover:underline">
        <Link href="/">Spotlight Jakarta</Link>
      </div>
      <div className="gap-10">
        <Link href="/">
          <span className="hover:underline">Home</span>
        </Link>
        <Link href="/about-us">
          <span className="hover:underline">About Us</span>
        </Link>
        <Link href="/product">
          <span className="hover:underline">Our Product</span>
        </Link>
        <Link href="/project-reference">
          <span className="hover:underline">Project Reference</span>
        </Link>
        <Link href="/contact-us">
          <span className="hover:underline">Contact Us</span>
        </Link>
      </div>
      <div>
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 bg-black text-white"
          >
            Languange
            <IoMdArrowDropdown size={20} />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-40"
          >
            <li>
              <a>Indonesia</a>
            </li>
            <li>
              <a>English</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
