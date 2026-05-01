"use client";
import React from 'react';
import { Button } from '@heroui/react';
import { ShoppingBag, Flame, ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const BannerCard = () => {
    return (
        <div className="relative w-full min-h-[600px] flex items-center justify-center overflow-hidden bg-white px-6 py-12">
            
            {/* Background Aesthetic Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-orange-100/50 blur-[100px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-100/50 blur-[100px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                
                {/* Content Side */}
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-100 text-orange-600">
                        <Flame size={18} fill="currentColor" />
                        <span className="text-sm font-bold tracking-wide uppercase">Hot Deals 🔥</span>
                    </div>

                    <div className="space-y-4">
                        <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-zinc-900 leading-[0.9]">
                            SUMMER <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-rose-500">
                                SALE.
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl font-bold text-zinc-900">
                            Up to <span className="text-4xl text-rose-600">50%</span> OFF
                        </p>
                        <p className="max-w-md text-zinc-500 leading-relaxed">
                            Upgrade your summer wardrobe with our boutique collection. Premium quality eyewear, skincare, and seasonal essentials.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <Button 
                            size="lg"
                            className="bg-zinc-900 text-white font-bold px-8 h-14 rounded-2xl shadow-xl shadow-zinc-200 hover:scale-105 transition-transform"
                            endContent={<ShoppingBag size={20} />}
                        >
                            Shop Now
                        </Button>
                        <Button 
                            variant="light"
                            size="lg"
                            className="font-bold px-8 h-14 rounded-2xl border border-zinc-200 hover:bg-zinc-50"
                        >
                            View Collections
                        </Button>
                    </div>
                </motion.div>

                {/* Visual Side (Card/Slider Placeholder) */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                >
                    <div className="relative aspect-square md:aspect-video lg:aspect-square bg-gradient-to-br from-zinc-100 to-zinc-50 rounded-[40px] border border-white shadow-2xl overflow-hidden flex items-center justify-center group">
                        
                        {/* Featured Badge */}
                        <div className="absolute top-8 left-8 z-20 bg-white/80 backdrop-blur-md p-4 rounded-2xl border border-white shadow-lg">
                            <Sparkles className="text-orange-500 mb-1" size={20} />
                            <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest">New Arrival</p>
                            <p className="text-lg font-black text-zinc-900 leading-none">Aurelia Eyewear</p>
                        </div>

                        {/* Image Placeholder - Replace 'src' with your actual product image */}
                      <Image
    src="https://i.ibb.co.com/GjbBTCC/glass2.jpg" 
    alt="Summer Sale"
    fill
    priority
    sizes="(max-width: 768px) 100vw, 50vw"
    className="object-cover group-hover:scale-110 transition-transform duration-700"
/>

                        {/* Floating Offer Card */}
                        <div className="absolute bottom-8 right-8 z-20 bg-zinc-900 p-6 rounded-3xl text-white shadow-2xl flex items-center gap-4 border border-zinc-700">
                            <div className="text-center">
                                <p className="text-xs uppercase font-bold text-zinc-400">Ends in</p>
                                <p className="text-xl font-black">24H : 59M</p>
                            </div>
                            <div className="h-10 w-[1px] bg-zinc-700" />
                            <ArrowRight className="text-orange-500" />
                        </div>
                    </div>
                </motion.div>

            </div>
        </div>
    );
};

export default BannerCard;