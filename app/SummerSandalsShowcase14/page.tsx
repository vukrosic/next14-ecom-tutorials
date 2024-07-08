"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Truck, ShieldCheck, ArrowRight, Star } from 'lucide-react';

interface SandalProduct {
    id: number;
    name: string;
    price: number;
    rating: number;
    imageUrl: string;
    colors: string[];
}

const sandals: SandalProduct[] = [
    {
        id: 1,
        name: 'Beachcomber Bliss',
        price: 79.99,
        rating: 4.7,
        imageUrl: '/sandals1.webp',
        colors: ['#F9A8D4', '#93C5FD', '#FDE68A'],
    },
    {
        id: 2,
        name: 'Island Hopper',
        price: 89.99,
        rating: 4.9,
        imageUrl: '/sandals2.jpg',
        colors: ['#6EE7B7', '#C4B5FD', '#FCA5A5'],
    },
    {
        id: 3,
        name: 'Sunset Stroller',
        price: 69.99,
        rating: 4.5,
        imageUrl: '/sandals3.webp',
        colors: ['#FBBF24', '#A78BFA', '#34D399'],
    },
];

const ColorSwatch: React.FC<{ color: string }> = ({ color }) => (
    <div
        className="w-6 h-6 rounded-full border-2 border-white shadow-md"
        style={{ backgroundColor: color }}
    />
);

const ProductCard: React.FC<{ product: SandalProduct }> = ({ product }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            className="bg-white rounded-xl overflow-hidden shadow-lg"
            whileHover={{ y: -10 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
        >
            <div className="relative">
                <Image
                    src={product.imageUrl}
                    alt={product.name}
                    width={400}
                    height={300}
                    className="w-full h-[300px] object-cover"
                />
                <AnimatePresence>
                    {isHovered && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
                        >
                            <button className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-colors">
                                Quick View
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
            <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <div className="flex items-center mb-4">
                    <span className="text-2xl font-bold text-indigo-600 mr-2">${product.price}</span>
                    <div className="flex items-center">
                        <Star className="w-5 h-5 text-yellow-400 fill-current" />
                        <span className="ml-1 text-gray-600">{product.rating}</span>
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                        {product.colors.map((color, index) => (
                            <ColorSwatch key={index} color={color} />
                        ))}
                    </div>
                    <button className="text-indigo-600 font-semibold flex items-center">
                        Add to Cart <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

const SummerSandalsShowcase: React.FC = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-pink-100 p-8">
            <div className="max-w-6xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-5xl font-extrabold text-center mb-4 text-indigo-900"
                >
                    Summer Soles Collection
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-xl text-center mb-12 text-indigo-700"
                >
                    Elevate your summer style with our exclusive sandal collection
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {sandals.map((sandal) => (
                        <ProductCard key={sandal.id} product={sandal} />
                    ))}
                </div>

                <div className="bg-white rounded-xl shadow-lg p-8">
                    <h2 className="text-3xl font-bold mb-6 text-center text-indigo-900">Why Choose Our Sandals?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="flex flex-col items-center text-center">
                            <Truck className="w-12 h-12 text-indigo-600 mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Free Express Shipping</h3>
                            <p className="text-gray-600">Get your sandals delivered in 2-3 business days, absolutely free!</p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <ShieldCheck className="w-12 h-12 text-indigo-600 mb-4" />
                            <h3 className="text-xl font-semibold mb-2">30-Day Comfort Guarantee</h3>
                            <p className="text-gray-600">Not satisfied? Return within 30 days for a full refund, no questions asked.</p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <Star className="w-12 h-12 text-indigo-600 mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Top-Rated Designs</h3>
                            <p className="text-gray-600">Join thousands of happy customers who love our summer collection.</p>
                        </div>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-12 text-center"
                >
                    <h2 className="text-2xl font-bold text-indigo-900 mb-4">Ready to step into summer?</h2>
                    <button className="bg-indigo-600 text-white px-8 py-3 rounded-full font-bold hover:bg-indigo-700 transition-colors text-lg">
                        Shop Now
                    </button>
                </motion.div>
            </div>
        </div>
    );
};

export default SummerSandalsShowcase;