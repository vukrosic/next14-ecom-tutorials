"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Truck, RefreshCcw, Sparkles } from 'lucide-react';

interface SandalProduct {
    id: number;
    name: string;
    price: number;
    description: string;
    imageUrl: string;
    sustainabilityScore: number;
}

const sandals: SandalProduct[] = [
    {
        id: 1,
        name: 'EcoStride Breeze',
        price: 89.99,
        description: 'Crafted from recycled ocean plastics, these sandals offer unparalleled comfort and environmental consciousness.',
        imageUrl: '/sandals1.webp',
        sustainabilityScore: 9.2,
    },
    {
        id: 2,
        name: 'SolarFlex Wanderer',
        price: 99.99,
        description: 'Featuring built-in solar panels, these tech-savvy sandals can charge your devices on the go.',
        imageUrl: '/sandals2.jpg',
        sustainabilityScore: 8.7,
    },
    {
        id: 3,
        name: 'AquaGlide Pro',
        price: 79.99,
        description: 'Designed for water sports enthusiasts, these sandals offer superior grip and quick-drying capabilities.',
        imageUrl: '/sandals3.webp',
        sustainabilityScore: 8.5,
    },
];

const ProductCard: React.FC<{ product: SandalProduct }> = ({ product }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="bg-white rounded-3xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300"
        >
            <div className="relative h-80">
                <Image
                    src={product.imageUrl}
                    alt={product.name}
                    layout="fill"
                    objectFit="cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{product.name}</h3>
                    <p className="text-lg font-semibold text-yellow-400">${product.price}</p>
                </div>
            </div>
            <div className="p-6">
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <Sparkles className="w-5 h-5 text-green-500 mr-2" />
                        <span className="text-sm font-semibold text-green-500">
                            Sustainability Score: {product.sustainabilityScore}/10
                        </span>
                    </div>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors duration-300">
                        Add to Cart
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

const SummerSandalsShowcase: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextProduct = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % sandals.length);
    };

    const prevProduct = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + sandals.length) % sandals.length);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-cyan-500 to-blue-500 p-8">
            <div className="max-w-6xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-6xl font-extrabold text-center mb-4 text-white"
                >
                    Innovative Summer Footwear
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-2xl text-center mb-12 text-white opacity-90"
                >
                    Step into the future of sustainable and tech-enhanced sandals
                </motion.p>

                <div className="relative mb-16">
                    <AnimatePresence mode="wait">
                        <ProductCard key={sandals[currentIndex].id} product={sandals[currentIndex]} />
                    </AnimatePresence>
                    <button
                        onClick={prevProduct}
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 bg-white rounded-full p-2 shadow-lg"
                    >
                        <ChevronLeft className="w-8 h-8 text-blue-500" />
                    </button>
                    <button
                        onClick={nextProduct}
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 bg-white rounded-full p-2 shadow-lg"
                    >
                        <ChevronRight className="w-8 h-8 text-blue-500" />
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-white rounded-2xl p-6 shadow-lg"
                    >
                        <Truck className="w-12 h-12 text-blue-500 mb-4" />
                        <h3 className="text-xl font-bold mb-2">Carbon-Neutral Shipping</h3>
                        <p className="text-gray-600">We offset 100% of our shipping emissions to ensure your order arrives guilt-free.</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="bg-white rounded-2xl p-6 shadow-lg"
                    >
                        <RefreshCcw className="w-12 h-12 text-blue-500 mb-4" />
                        <h3 className="text-xl font-bold mb-2">Lifetime Warranty</h3>
                        <p className="text-gray-600">Our sandals are built to last. If they don't, we'll replace them for free.</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="bg-white rounded-2xl p-6 shadow-lg"
                    >
                        <Sparkles className="w-12 h-12 text-blue-500 mb-4" />
                        <h3 className="text-xl font-bold mb-2">Eco-Friendly Materials</h3>
                        <p className="text-gray-600">We use recycled and sustainable materials to minimize our environmental impact.</p>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-3xl p-8 shadow-xl text-center"
                >
                    <h2 className="text-3xl font-bold mb-4 text-blue-800">Join the Sustainable Footwear Revolution</h2>
                    <p className="text-xl text-gray-600 mb-6">
                        Be the first to know about our latest innovations and exclusive offers.
                    </p>
                    <div className="flex max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-grow px-4 py-2 rounded-l-full border-2 border-blue-300 focus:outline-none focus:border-blue-500"
                        />
                        <button className="bg-blue-500 text-white px-6 py-2 rounded-r-full hover:bg-blue-600 transition-colors duration-300">
                            Subscribe
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default SummerSandalsShowcase;