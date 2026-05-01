import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Eco from "@/components/Eco";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Aurelia Summer | Premium Products for Every Season",
  description: "Discover premium products designed for every season.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      {/* flex-col and min-h-screen ensures the footer can be pushed to the bottom */}
      <body className="min-h-screen flex flex-col bg-white text-slate-900"> 
        <Navbar />
        
        {/* flex-grow pushes the content above the footer */}
        <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </main>

        <Eco />
        <Footer />
      </body>
    </html>
  );
}
