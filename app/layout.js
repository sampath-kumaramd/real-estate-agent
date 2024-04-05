import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Real state agent",
  description: "Created by sampath kumara for real state agent",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Navigation/>
      <body className={inter.className}>{children}</body>
      <Footer/>
    </html>
  );
}
