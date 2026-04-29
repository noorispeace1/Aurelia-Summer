"use client";
import Link from "next/link";
import { User, ShoppingBag, Home } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="bg-white dark:bg-zinc-950 border-b border-gray-100 dark:border-zinc-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Brand Logo */}
          <div className="flex items-center">
            <Link href="/" className="group flex items-center gap-2">
              <div className="w-9 h-9 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold shadow-sm transition-transform group-hover:rotate-12">
                A
              </div>
              <span className="text-xl font-bold tracking-tighter text-gray-900 dark:text-white uppercase">
                aurelia<span className="text-amber-500 font-light">-summer</span>
              </span>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="flex items-center gap-1.5 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-amber-500 transition-colors"
            >
              <Home size={16} /> Home
            </Link>
            <Link 
              href="/products" 
              className="flex items-center gap-1.5 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-amber-500 transition-colors"
            >
              <ShoppingBag size={16} /> Products
            </Link>
            <Link 
              href="/profile" 
              className="flex items-center gap-1.5 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-amber-500 transition-colors"
            >
              <User size={16} /> My Profile
            </Link>
          </div>

          {/* Action Buttons: Sign In & Register */}
          <div className="flex items-center gap-3">
            <Link 
              href="/signin" 
              className="hidden sm:block px-4 py-2 text-sm font-bold text-gray-700 dark:text-gray-200 hover:text-amber-500 dark:hover:text-amber-400 transition-colors"
            >
              Sign In
            </Link>
            
            <Link 
              href="/register" 
              className="bg-gray-900 dark:bg-white dark:text-black text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-amber-500 dark:hover:bg-amber-400 transition-all shadow-md active:scale-95 border border-transparent"
            >
              Register
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
}