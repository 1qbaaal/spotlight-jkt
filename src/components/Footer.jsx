export default function Footer() {
  return (
    <footer className="footer footer-center bg-gray-100/70 text-base-content py-4 px-6 sm:px-8 md:px-12 lg:px-20">
      <aside className="text-center">
        <p className="text-sm sm:text-base">
          Copyright © {new Date().getFullYear()} - All rights reserved by{" "}
          <span className="font-bold">Spotlight Jakarta</span>
        </p>
      </aside>
    </footer>
  );
}
