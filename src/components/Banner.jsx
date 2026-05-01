"use client";
import React from 'react';
import Link from 'next/link';
import { FaStar, FaArrowRight, FaAward, FaGlobeAmericas, FaShippingFast, FaShieldAlt } from 'react-icons/fa';
import { IoSunnyOutline, IoTimeOutline } from 'react-icons/io5';

const Banner = () => {
    const webImage = "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=1000&auto=format&fit=crop";

    return (
        <section className="relative bg-white max-w-[1400px] mx-auto dark:bg-zinc-950 overflow-hidden border-b border-gray-100 dark:border-zinc-800/50 min-h-[90vh] flex flex-col justify-center">
            
            {/* --- Background Decorative Gradient --- */}
            <div className="absolute inset-0 opacity-20 dark:opacity-[0.03] pointer-events-none" aria-hidden="true">
                <div className="absolute -top-48 -left-48 w-[50rem] h-[50rem] bg-amber-300 rounded-full blur-[120px]"></div>
                <div className="absolute top-2/3 left-2/3 w-[40rem] h-[40rem] bg-amber-400 rounded-full blur-[100px]"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 z-10 w-full">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-center">
                    
                    {/* --- Left Column: Text & CTA --- */}
                    <div className="md:col-span-6 lg:col-span-6 text-center md:text-left flex flex-col items-center md:items-start order-2 md:order-1">
                        
                        {/* Economic Advantage 1: Flash Sale / Scarcity */}
                        <div className="flex flex-wrap gap-3 mb-6 justify-center md:justify-start">
                            <div className="inline-flex items-center gap-2 bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 px-4 py-1.5 rounded-full border border-amber-100 dark:border-amber-900 transition-transform hover:scale-105">
                                <IoSunnyOutline className="text-lg animate-spin-slow" />
                                <span className="text-[10px] font-bold uppercase tracking-widest">Summer Essentials '24</span>
                            </div>
                            <div className="inline-flex items-center gap-2 bg-rose-50 dark:bg-rose-950/30 text-rose-600 dark:text-rose-400 px-4 py-1.5 rounded-full border border-rose-100 dark:border-rose-900 animate-pulse">
                                <IoTimeOutline className="text-lg" />
                                <span className="text-[10px] font-bold uppercase tracking-widest">Limited Edition: 40% Off</span>
                            </div>
                        </div>

                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tighter text-gray-950 dark:text-white leading-[0.92] mb-8">
                            Investment-Grade <span className="text-amber-500 relative inline-block">
                                Style
                                <svg className="absolute -bottom-3 left-0 w-full h-4 text-amber-300/80 dark:text-amber-600/70" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 25 0, 50 5 T 100 5" stroke="currentColor" strokeWidth="2.5" fill="none" />
                                </svg>
                            </span>.
                        </h1>

                        <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed max-w-xl mx-auto md:mx-0">
                            Skip the fast-fashion cycle. Handcrafted Italian eyewear that maintains its value and protects your vision with lifetime-guaranteed clarity.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start items-center w-full sm:w-auto">
                            <Link href="/shop" className="group flex items-center gap-3 bg-gray-950 dark:bg-white text-white dark:text-gray-950 px-10 py-4 rounded-xl text-lg font-extrabold shadow-2xl hover:bg-amber-600 dark:hover:bg-amber-400 transition-all active:scale-95 w-full sm:w-auto justify-center">
                                Claim Yours Now
                                <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                            </Link>
                            
                            {/* Economic Advantage 2: Social Proof / Volume */}
                            <div className="flex flex-col items-start px-2">
                                <div className="flex -space-x-2 mb-1">
                                    {[1,2,3,4].map(i => (
                                        <div key={i} className="w-8 h-8 rounded-full border-2 border-white dark:border-zinc-950 bg-gray-200 dark:bg-zinc-800 flex items-center justify-center overflow-hidden">
                                            <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="user" />
                                        </div>
                                    ))}
                                    <div className="w-8 h-8 rounded-full border-2 border-white dark:border-zinc-950 bg-amber-500 text-[10px] text-white flex items-center justify-center font-bold">12k+</div>
                                </div>
                                <p className="text-[11px] text-gray-500 dark:text-gray-400 font-medium tracking-tight">Active users this month</p>
                            </div>
                        </div>
                    </div>

                    {/* --- Right Column: Image --- */}
                    <div className="md:col-span-6 lg:col-span-6 relative flex justify-center items-center mt-12 md:mt-0 order-1 md:order-2">
                        <div className="relative group p-3 bg-gray-50/50 dark:bg-zinc-900/50 rounded-[2.5rem] border border-gray-100 dark:border-zinc-800 shadow-inner overflow-hidden max-w-[440px] w-full">
                            <div className="relative overflow-hidden rounded-[2rem] aspect-[4/5] border-4 border-white dark:border-zinc-950 shadow-2xl">
                                <img src={webImage} alt="Premium Shades" className="object-cover w-full h-full transform transition-transform group-hover:scale-110 duration-1000" />
                            </div>
                        </div>

                        {/* Floating Badge: Verification */}
                        <div className="absolute -bottom-6 -left-6 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md p-4 rounded-3xl shadow-2xl border border-gray-100 dark:border-zinc-800 flex items-center gap-3 z-20">
                            <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-950/50 rounded-2xl flex items-center justify-center text-emerald-600">
                                <FaShieldAlt size={22} />
                            </div>
                            <div>
                                <p className="text-lg font-black text-gray-950 dark:text-white leading-none">2-Year</p>
                                <p className="text-[10px] text-gray-500 font-bold uppercase mt-1">Full Warranty</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- Economic Advantage 3: Value Proposition Bar --- */}
            
        </section>
    );
};

export default Banner;