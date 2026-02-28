import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tag, Clock, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const banners = [
    {
        id: 1,
        title: "FLAT 20% OFF",
        subtitle: "On your first custom stitching order",
        badge: "LIMITED OFFER",
        color: "bg-gradient-to-br from-[#1e3932] to-[#2d5246]",
        image: "https://cdn-icons-png.flaticon.com/128/9284/9284227.png"
    },
    {
        id: 2,
        title: "EXPRESS DELIVERY",
        subtitle: "Get your outfit stitched in 24 hours",
        badge: "PREMIUM SERVICE",
        color: "bg-gradient-to-br from-[#1e3e5a] to-[#2d5a8c]",
        image: "https://cdn-icons-png.flaticon.com/128/9420/9420653.png"
    },
    {
        id: 3,
        title: "REFER & EARN",
        subtitle: "Invite friends and get ₹200 credits",
        badge: "REWARDS",
        color: "bg-gradient-to-br from-[#5a1e3e] to-[#8c2d5a]",
        image: "https://cdn-icons-png.flaticon.com/128/9502/9502690.png"
    }
];

const PromoBanner = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % banners.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const next = () => setCurrentIndex((prev) => (prev + 1) % banners.length);
    const prev = () => setCurrentIndex((prev) => (prev - 1 + banners.length) % banners.length);

    return (
        <div className="px-4 py-3 relative group">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className={`relative overflow-hidden rounded-3xl ${banners[currentIndex].color} text-white p-6 shadow-xl h-42 flex items-center`}
                >
                    {/* Background Decoration */}
                    <div className="absolute top-[-20px] right-[-20px] w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>

                    <div className="relative z-10 flex-1 flex flex-col gap-2">
                        <div className="bg-white/20 w-fit px-2 py-1 rounded-md text-[10px] font-bold tracking-wider backdrop-blur-sm flex items-center gap-1">
                            <Tag size={10} /> {banners[currentIndex].badge}
                        </div>
                        <div>
                            <h2 className="text-2xl font-black leading-tight tracking-tight uppercase">
                                {banners[currentIndex].title}
                            </h2>
                            <p className="text-xs text-white/80 mt-1 font-medium">{banners[currentIndex].subtitle}</p>
                        </div>
                        <div className="flex items-center gap-4 mt-3">
                            <button className="bg-white text-[#1e3932] px-5 py-2 rounded-full text-[11px] font-black shadow-lg hover:shadow-white/10 active:scale-95 transition-all flex items-center gap-2 uppercase">
                                Book Now <ArrowRight size={12} />
                            </button>
                        </div>
                    </div>

                    <div className="relative z-10 w-24 h-24 flex items-center justify-center">
                        <motion.img
                            initial={{ scale: 0.5, rotate: -10 }}
                            animate={{ scale: 1, rotate: 0 }}
                            src={banners[currentIndex].image}
                            alt="Banner Icon"
                            className="w-full h-full object-contain drop-shadow-2xl"
                        />
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
                {banners.map((_, i) => (
                    <div
                        key={i}
                        className={`h-1 rounded-full transition-all duration-300 ${i === currentIndex ? 'w-4 bg-white' : 'w-1 bg-white/30'}`}
                    />
                ))}
            </div>

            {/* Navigation Arrows (Visible on Hover in Desktop) */}
            <button
                onClick={prev}
                className="absolute left-6 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
            >
                <ChevronLeft size={16} className="text-white" />
            </button>
            <button
                onClick={next}
                className="absolute right-6 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
            >
                <ChevronRight size={16} className="text-white" />
            </button>
        </div>
    );
};

export default PromoBanner;
