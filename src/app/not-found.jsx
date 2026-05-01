'use client';

import React from 'react';
import Link from 'next/link';
import { ShoppingBag, Home, Palmtree, ArrowRight } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#FDFCF8] flex items-center justify-center p-6 font-sans overflow-hidden relative">
      
      {/* Aesthetic Background Blobs */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-orange-100/50 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-yellow-100/50 rounded-full blur-3xl" />

      <div className="max-w-2xl w-full text-center space-y-10 relative z-10">
        
        {/* Animated Icon Section */}
        <div className="relative inline-flex items-center justify-center">
          <div className="absolute inset-0 bg-orange-200 blur-2xl rounded-full opacity-30 animate-pulse" />
          <div className="relative bg-white border border-orange-100 p-8 rounded-3xl shadow-sm rotate-3 hover:rotate-0 transition-transform duration-500">
            <Palmtree size={80} className="text-orange-500" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
              404
            </span>
          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight">
            Lost in the <span className="text-orange-500">Sunshine?</span>
          </h1>
          <p className="text-slate-500 text-xl max-w-lg mx-auto leading-relaxed">
            Oops! The page you’re looking for has drifted away. It might have moved or simply no longer exists.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-4">
          <Link
            href="/"
            className="group flex items-center gap-2 px-8 py-4 bg-slate-900 text-white font-semibold rounded-2xl hover:bg-orange-600 transition-all duration-300 shadow-xl shadow-slate-200 active:scale-95"
          >
            <Home size={20} className="group-hover:-translate-y-1 transition-transform" />
            Back to Home
          </Link>

          <Link
            href="/shop"
            className="group flex items-center gap-2 px-8 py-4 bg-white border-2 border-slate-100 text-slate-700 font-semibold rounded-2xl hover:border-orange-200 hover:bg-orange-50 transition-all duration-300 active:scale-95"
          >
            <ShoppingBag size={20} />
            Explore Collection
            <ArrowRight size={18} className="ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
          </Link>
        </div>

        {/* Support Footer */}
        <div className="pt-10 border-t border-slate-100">
          <p className="text-slate-400 font-medium">
            Need assistance? <button className="text-orange-500 hover:underline font-semibold">Contact Support</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;