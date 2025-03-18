import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WixContextProvider from "@/context/wixContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "E-Commerce Application",
  description: "A complete e-commerce application with Next.js and Wix",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <WixContextProvider>
          <Navbar />
          {children}
          <Footer />
        </WixContextProvider>
      </body>
    </html>
  );
}
