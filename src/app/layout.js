import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Spotligt Jakarta",
  description: "Everything you need in one place",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="sticky top-0 z-50">
          <Navbar />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
