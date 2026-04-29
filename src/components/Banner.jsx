"use client";
import React from 'react';
import Link from 'next/link';
import { FaStar, FaArrowRight, FaAward } from 'react-icons/fa';
import { IoSunnyOutline } from 'react-icons/io5';
import { Image } from 'lucide-react';

const Banner = () => {

    const webImage = "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=1000&auto=format&fit=crop";

    return (
        <section className="relative bg-white max-w-[1400px] mx-auto dark:bg-zinc-950 overflow-hidden border-b border-gray-100 dark:border-zinc-800/50 min-h-[85vh] flex items-center">
            
            {/* --- Background Decorative Gradient Elements --- */}
            <div className="absolute inset-0 opacity-20 dark:opacity-[0.03] pointer-events-none" aria-hidden="true">
                <div className="absolute -top-48 -left-48 w-[50rem] h-[50rem] bg-amber-300 rounded-full blur-[120px]"></div>
                <div className="absolute top-2/3 left-2/3 w-[40rem] h-[40rem] bg-amber-400 rounded-full blur-[100px]"></div>
                <div className="absolute top-10 right-10 w-32 h-32 bg-sky-200 rounded-full blur-[60px] opacity-60"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 z-10 w-full">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-center">
                    
                    {/* --- Left Column: Text & CTA --- */}
                    <div className="md:col-span-6 lg:col-span-6 text-center md:text-left flex flex-col items-center md:items-start order-2 md:order-1">
                        
                        <div className="inline-flex items-center gap-2.5 bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 px-5 py-2 rounded-full shadow-inner border border-amber-100 dark:border-amber-900 mb-8 transition-transform hover:scale-105 cursor-default">
                            <IoSunnyOutline className="text-xl animate-spin-slow" />
                            <span className="text-xs font-bold uppercase tracking-widest">Summer Essentials '24 Collection</span>
                        </div>

                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tighter text-gray-950 dark:text-white leading-[0.92] mb-8">
                            Define Your <span className="text-amber-500 relative inline-block">
                                Shine
                                <svg className="absolute -bottom-3 left-0 w-full h-4 text-amber-300/80 dark:text-amber-600/70" viewBox="0 0 100 10" preserveAspectRatio="none" aria-hidden="true">
                                    <path d="M0 5 Q 25 0, 50 5 T 100 5" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
                                </svg>
                            </span>.
                            <br /> Premium Shades.
                        </h1>

                        <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed max-w-xl mx-auto md:mx-0">
                            Discover the Aurelia-Summer collection. Handcrafted sunglasses designed to blend timeless elegance with modern coastal style. Perfect clarity, effortless cool.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start items-center w-full sm:w-auto">
                            <Link href="/shop/sunglasses" className="group flex items-center gap-3 bg-gray-950 dark:bg-white text-white dark:text-gray-950 px-10 py-4 rounded-xl text-lg font-extrabold shadow-2xl shadow-gray-950/10 dark:shadow-white/5 hover:bg-amber-500 dark:hover:bg-amber-400 transition-all active:scale-95 w-full sm:w-auto justify-center ring-2 ring-gray-950/5 dark:ring-white/10 hover:ring-amber-500 dark:hover:ring-amber-400">
                                Shop The Collection
                                <FaArrowRight className="group-hover:translate-x-2 transition-transform text-xl" />
                            </Link>
                            <Link href="/about" className="text-base font-semibold text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors py-3 px-4">
                                Our Story
                            </Link>
                        </div>
                    </div>

                  
                    <div className="md:col-span-6 lg:col-span-6 relative flex justify-center items-center mt-12 md:mt-0 order-1 md:order-2">
                        
                        <div className="relative group p-3 bg-gray-50/50 dark:bg-zinc-900/50 rounded-[2.5rem] border border-gray-100 dark:border-zinc-800 shadow-inner overflow-hidden max-w-[480px] w-full">
                            
                            <div className="absolute -inset-10 bg-amber-100 dark:bg-amber-950/30 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" aria-hidden="true"></div>
                            
                            <div className="relative overflow-hidden rounded-[2rem] aspect-[4/5] border-4 border-white dark:border-zinc-950 shadow-2xl">
                                <img
                                    src={webImage}
                                    height={300}
                                    alt="Premium Sunglasses" 
                                    className="object-cover w-full h-full transform transition-transform group-hover:scale-[1.05] duration-1000"
                                />
                            </div>
                        </div>

                        {/* --- Floating Badges --- */}
                        <div className="absolute -bottom-10 -left-6 md:-bottom-8 md:-left-8 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md p-5 rounded-3xl shadow-2xl border border-gray-100 dark:border-zinc-800 flex items-center gap-4 z-20 transition-transform hover:-translate-y-2 cursor-default">
                            <div className="w-14 h-14 bg-amber-100 dark:bg-amber-950 rounded-2xl flex items-center justify-center text-amber-500 border border-amber-200 dark:border-amber-900">
                                <FaStar size={28} />
                            </div>
                            <div>
                                <p className="text-4xl font-black tracking-tight text-gray-950 dark:text-white">4.9<span className="text-lg text-gray-400 font-medium">/5</span></p>
                                <p className="text-sm text-gray-500 dark:text-gray-400 font-semibold mt-0.5">Verified Quality</p>
                            </div>
                        </div>

                        <div className="absolute -top-10 -right-6 lg:-top-12 lg:-right-10 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-gray-100 dark:border-zinc-800 flex items-center gap-3.5 z-20 transition-transform hover:translate-y-2 hidden sm:flex">
                            <div className="p-2.5 bg-sky-50 dark:bg-sky-950/50 rounded-xl text-sky-600 dark:text-sky-400 border border-sky-100 dark:border-sky-900">
                                <FaAward className="text-2xl" />
                            </div>
                            <div>
                                <p className="text-sm font-bold text-gray-950 dark:text-white">Italian Design</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400 font-medium mt-0.5">Handmade Craft</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* --- Wave Divider --- */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180 opacity-50 dark:opacity-[0.1] pointer-events-none" aria-hidden="true">
                <svg className="relative block w-full h-20 text-gray-50 dark:text-zinc-900" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C41.8,7.38,84.1,19.33,126.6,26.68,173.1,34.75,221.82,38.31,231.39,41.44,251,46,274,53.4,321.39,56.44Z" fill="currentColor"></path>
                </svg>
            </div>
        </section>
    );
};

export default Banner;