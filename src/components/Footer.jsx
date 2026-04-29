"use client";
import Link from "next/link";
import { 
  FaInstagram, 
  FaFacebookF, 
  FaTwitter, 
  FaArrowRight, 
  FaRegSun,
  FaShieldAlt,
  FaTruck,
  FaUndoAlt 
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-zinc-950 border-t border-gray-100 dark:border-zinc-900 mt-20">
      
      {/* 1. Value Proposition Bar - Width Maintained */}
      <div className="border-b max-w-[1400px] mx-auto border-gray-100 dark:border-zinc-900 bg-amber-50/50 dark:bg-amber-950/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 py-10">
            {/* Delivery Info */}
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <div className="p-3 bg-white dark:bg-zinc-900 rounded-full shadow-sm text-amber-500">
                <FaTruck className="text-xl" />
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-white">Fast Shipping</h4>
                <p className="text-xs text-gray-500 font-medium">Free on orders over $100</p>
              </div>
            </div>

            {/* Return Info */}
            <div className="flex items-center gap-4 justify-center border-y md:border-y-0 md:border-x border-gray-200 dark:border-zinc-800 py-6 md:py-0">
              <div className="p-3 bg-white dark:bg-zinc-900 rounded-full shadow-sm text-amber-500">
                <FaUndoAlt className="text-lg" />
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-white">Easy Returns</h4>
                <p className="text-xs text-gray-500 font-medium">30-day sunshine guarantee</p>
              </div>
            </div>

            {/* Security Info */}
            <div className="flex items-center gap-4 justify-center md:justify-end">
              <div className="p-3 bg-white dark:bg-zinc-900 rounded-full shadow-sm text-amber-500">
                <FaShieldAlt className="text-xl" />
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-white">Secure Payment</h4>
                <p className="text-xs text-gray-500 font-medium">100% protected checkout</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 pt-20 pb-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-16">
          
          {/* Brand Identity */}
          <div className="lg:col-span-4">
            <Link href="/" className="group flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-amber-400 rounded-xl flex items-center justify-center text-white font-bold shadow-lg transform transition-transform group-hover:rotate-6">
                A
              </div>
              <span className="text-2xl font-black tracking-tighter uppercase dark:text-white">
                aurelia<span className="text-amber-500 font-light italic">summer</span>
              </span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-sm">
              Redefining summer elegance since 2024. Inspired by Mediterranean sun and coastal vibes. Join our journey to endless sunshine.
            </p>
            <div className="flex space-x-6">
              <Link href="#" className="text-gray-400 hover:text-amber-500 transition-all transform hover:-translate-y-1"><FaInstagram size={22}/></Link>
              <Link href="#" className="text-gray-400 hover:text-amber-500 transition-all transform hover:-translate-y-1"><FaFacebookF size={20}/></Link>
              <Link href="#" className="text-gray-400 hover:text-amber-500 transition-all transform hover:-translate-y-1"><FaTwitter size={22}/></Link>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-900 dark:text-white mb-8 border-l-2 border-amber-500 pl-3">Shop</h3>
              <ul className="space-y-4 text-[13px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                <li><Link href="/products" className="hover:text-amber-500 transition-colors">All Products</Link></li>
                <li><Link href="/collections" className="hover:text-amber-500 transition-colors">Collections</Link></li>
                <li><Link href="/accessories" className="hover:text-amber-500 transition-colors">Accessories</Link></li>
                <li><Link href="/sale" className="text-amber-600 hover:text-amber-700">Special Offers</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-900 dark:text-white mb-8 border-l-2 border-amber-500 pl-3">Help</h3>
              <ul className="space-y-4 text-[13px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                <li><Link href="/shipping" className="hover:text-amber-500 transition-colors">Shipping</Link></li>
                <li><Link href="/returns" className="hover:text-amber-500 transition-colors">Returns</Link></li>
                <li><Link href="/contact" className="hover:text-amber-500 transition-colors">Support</Link></li>
                <li><Link href="/faq" className="hover:text-amber-500 transition-colors">FAQs</Link></li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-900 dark:text-white mb-8 border-l-2 border-amber-500 pl-3">Stay in the Glow</h3>
            <p className="text-sm text-gray-500 mb-6 font-medium">Early access to drops and summer styling tips.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="w-full bg-transparent border-b-2 border-gray-200 dark:border-zinc-800 pb-3 text-xs font-bold tracking-widest focus:outline-none focus:border-amber-500 transition-all placeholder:text-gray-400 dark:text-white"
              />
              <button className="absolute right-0 bottom-3 text-gray-400 hover:text-amber-500 transition-colors transform hover:translate-x-1">
                <FaArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-10 border-t border-gray-100 dark:border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400">
          <div className="flex items-center gap-2">
            <span>Made for the sun</span>
            <FaRegSun size={14} className="text-amber-400 animate-spin-slow" />
            <span>Aurelia Summer</span>
          </div>
          
          <div className="flex gap-8">
            <Link href="/privacy" className="hover:text-amber-500">Privacy</Link>
            <Link href="/terms" className="hover:text-amber-500">Terms</Link>
            <p>© {new Date().getFullYear()} All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}