"use client";
import React from 'react';
import { Card, Button } from '@heroui/react';
import { Droplets, Sun, Wind, ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const SummerEssentials = () => {
    const tips = [
        {
            title: "Hydration First",
            desc: "Drink at least 3L of water and use hyaluronic acid for skin.",
            icon: <Droplets className="text-white" />,
            color: "from-blue-400 to-cyan-500",
            shadow: "shadow-blue-200",
            iconBg: "bg-blue-500/20"
        },
        {
            title: "SPF Protection",
            desc: "Apply SPF 50+ every 2 hours to prevent UV damage.",
            icon: <Sun className="text-white" />,
            color: "from-orange-400 to-rose-500",
            shadow: "shadow-orange-200",
            iconBg: "bg-orange-500/20"
        },
        {
            title: "Light Fabrics",
            desc: "Wear breathable linen or cotton to stay cool all day.",
            icon: <Wind className="text-white" />,
            color: "from-emerald-400 to-teal-500",
            shadow: "shadow-emerald-200",
            iconBg: "bg-emerald-500/20"
        }
    ];

    const brands = [
        { name: "Aurelia", category: "Eyewear", logo: "AU", color: "bg-amber-100 text-amber-700 border-amber-200" },
        { name: "Lumina", category: "Skincare", logo: "LM", color: "bg-rose-100 text-rose-700 border-rose-200" },
        { name: "Solstice", category: "Apparel", logo: "SL", color: "bg-indigo-100 text-indigo-700 border-indigo-200" },
        { name: "Vera", category: "Beauty", logo: "VR", color: "bg-teal-100 text-teal-700 border-teal-200" }
    ];

    return (
        <div className="relative  max-w-[1400px] mx-auto bg-gradient-to-b from-orange-50/50 via-white to-blue-50/50 py-24 overflow-hidden">
            
            {/* dynamic Background Blobs */}
            <div className="absolute top-0 -left-20 w-96 h-96 bg-yellow-200/40 blur-[120px] rounded-full animate-pulse" />
            <div className="absolute bottom-0 -right-20 w-[500px] h-[500px] bg-blue-200/30 blur-[150px] rounded-full" />

            <div className="max-w-7xl mx-auto px-6 space-y-32">
                
                {/* --- Summer Care Tips Section --- */}
                <section>
                    <div className="text-center mb-16 space-y-4">
                        <motion.div 
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500 text-white text-xs font-black uppercase tracking-[0.2em]"
                        >
                            <Sparkles size={14} /> Summer Essentials
                        </motion.div>
                        <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-none">
                            Keep Your <span className="text-orange-500">Glow.</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {tips.map((tip, index) => (
                            <motion.div 
                                key={index}
                                initial={{ y: 30, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                                className={`relative p-10 rounded-[45px] bg-gradient-to-br ${tip.color} ${tip.shadow} shadow-2xl overflow-hidden group`}
                            >
                                {/* Decorative Circles in Card */}
                                <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-700" />
                                
                                <div className="relative z-10">
                                    <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-3xl flex items-center justify-center mb-8 border border-white/30 shadow-lg">
                                        {tip.icon}
                                    </div>
                                    <h3 className="text-3xl font-black text-white mb-4 tracking-tight">{tip.title}</h3>
                                    <p className="text-white/90 leading-relaxed font-medium text-lg">
                                        {tip.desc}
                                    </p>
                                    <Button className="mt-8 bg-white/20 hover:bg-white text-white hover:text-slate-900 font-bold border border-white/30 rounded-2xl backdrop-blur-sm transition-all">
                                        Read More
                                    </Button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* --- Featured Brands Section --- */}
                <section>
                    <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-4">
                        <div className="text-center md:text-left">
                            <h2 className="text-4xl font-black text-slate-900 tracking-tight">Summer Partners</h2>
                            <p className="text-slate-500 font-semibold uppercase tracking-widest text-sm mt-1">Premium Brand Collaborations</p>
                        </div>
                        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-200 to-transparent mx-8 hidden md:block" />
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        {brands.map((brand, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 2 : -2 }}
                                className="cursor-pointer"
                            >
                                <div className={`h-56 ${brand.color} border-2 rounded-[40px] flex flex-col items-center justify-center p-6 transition-all shadow-xl shadow-transparent hover:shadow-current/10`}>
                                    <div className="w-20 h-20 rounded-[28px] bg-white shadow-xl flex items-center justify-center text-3xl font-black mb-4 tracking-tighter">
                                        {brand.logo}
                                    </div>
                                    <h4 className="font-black text-xl">{brand.name}</h4>
                                    <p className="text-xs font-bold opacity-70 uppercase tracking-widest mt-1">{brand.category}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Quality Assurance Footer */}
                    <motion.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="mt-20 flex flex-wrap justify-center gap-10 opacity-50"
                    >
                        <div className="flex items-center gap-2 font-black text-xs uppercase tracking-tighter">
                            <ShieldCheck size={20} className="text-orange-500" /> Premium Quality
                        </div>
                        <div className="flex items-center gap-2 font-black text-xs uppercase tracking-tighter">
                            <Sparkles size={20} className="text-blue-500" /> Summer 2026 Ready
                        </div>
                        <div className="flex items-center gap-2 font-black text-xs uppercase tracking-tighter hover:text-orange-500 cursor-pointer transition-colors">
                            View All <ArrowRight size={18} />
                        </div>
                    </motion.div>
                </section>
            </div>
        </div>
    );
};

export default SummerEssentials;