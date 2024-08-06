export default function Footer() {
  return (
    <footer className="footer footer-center bg-gray-100/70 text-base-content p-4">
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by{" "}
          <span className="font-bold">Spotlight Jakarta</span>
        </p>
      </aside>
    </footer>
  );
}
