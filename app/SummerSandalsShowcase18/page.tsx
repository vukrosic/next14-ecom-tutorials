"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Droplet, Wind, Truck, CreditCard, RotateCcw } from 'lucide-react';

interface SandalFeature {
    icon: React.ReactNode;
    title: string;
    description: string;
}

interface SandalSize {
    size: string;
    available: boolean;
}

const SummerSandalShowcase: React.FC = () => {
    const [selectedColor, setSelectedColor] = useState<string>('Coral');
    const [selectedSize, setSelectedSize] = useState<string>('');

    const features: SandalFeature[] = [
        { icon: <Sun className="w-8 h-8 text-yellow-400" />, title: 'UV Protection', description: 'Safeguards your feet from harmful sun rays' },
        { icon: <Droplet className="w-8 h-8 text-blue-400" />, title: 'Water Resistant', description: 'Perfect for beach and pool adventures' },
        { icon: <Wind className="w-8 h-8 text-teal-400" />, title: 'Breathable Design', description: 'Keeps your feet cool and fresh all day' },
    ];

    const colors: string[] = ['Coral', 'Aqua', 'Sunshine'];
    const sizes: SandalSize[] = [
        { size: '6', available: true },
        { size: '7', available: true },
        { size: '8', available: false },
        { size: '9', available: true },
        { size: '10', available: true },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-100 to-blue-100 p-8 font-sans">
            <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <motion.div
                        className="p-8 flex items-center justify-center bg-gray-100"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Image
                            src="/sandals1.webp"
                            alt="Summer Bliss Sandal"
                            width={400}
                            height={400}
                            className="rounded-2xl shadow-lg"
                        />
                    </motion.div>

                    <div className="p-8">
                        <motion.h1
                            className="text-4xl font-bold mb-4 text-gray-800"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            Summer Bliss Sandal
                        </motion.h1>
                        <motion.p
                            className="text-xl text-gray-600 mb-6"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            Step into paradise with our ultra-comfortable and stylish Summer Bliss Sandal.
                        </motion.p>

                        <motion.div
                            className="mb-6"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <h2 className="text-2xl font-semibold mb-3 text-gray-800">Colors</h2>
                            <div className="flex space-x-4">
                                {colors.map((color) => (
                                    <button
                                        key={color}
                                        onClick={() => setSelectedColor(color)}
                                        className={`w-10 h-10 rounded-full border-2 ${selectedColor === color ? 'border-blue-500' : 'border-gray-300'
                                            }`}
                                        style={{ backgroundColor: color.toLowerCase() }}
                                    />
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            className="mb-6"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                        >
                            <h2 className="text-2xl font-semibold mb-3 text-gray-800">Size</h2>
                            <div className="flex flex-wrap gap-3">
                                {sizes.map((sizeObj) => (
                                    <button
                                        key={sizeObj.size}
                                        onClick={() => setSelectedSize(sizeObj.size)}
                                        disabled={!sizeObj.available}
                                        className={`px-4 py-2 rounded-lg ${selectedSize === sizeObj.size
                                            ? 'bg-blue-500 text-white'
                                            : sizeObj.available
                                                ? 'bg-gray-200 text-gray-800'
                                                : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                            }`}
                                    >
                                        {sizeObj.size}
                                    </button>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            className="mb-8"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                        >
                            <h2 className="text-3xl font-bold text-gray-800 mb-4">$79.99</h2>
                            <button className="w-full bg-blue-500 text-white py-3 rounded-lg text-xl font-semibold hover:bg-blue-600 transition-colors">
                                Add to Cart
                            </button>
                        </motion.div>

                        <motion.div
                            className="border-t border-gray-200 pt-6"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.7 }}
                        >
                            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Shipping & Returns</h2>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex items-center">
                                    <Truck className="w-6 h-6 text-blue-500 mr-2" />
                                    <span className="text-gray-600">Free shipping over $100</span>
                                </div>
                                <div className="flex items-center">
                                    <CreditCard className="w-6 h-6 text-blue-500 mr-2" />
                                    <span className="text-gray-600">Secure payment</span>
                                </div>
                                <div className="flex items-center">
                                    <RotateCcw className="w-6 h-6 text-blue-500 mr-2" />
                                    <span className="text-gray-600">30-day returns</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                <motion.div
                    className="bg-gray-100 p-8"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                >
                    <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                className="bg-white p-6 rounded-xl shadow-md"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.2 }}
                            >
                                <div className="flex items-center mb-4">
                                    {feature.icon}
                                    <h3 className="text-xl font-semibold ml-3 text-gray-800">{feature.title}</h3>
                                </div>
                                <p className="text-gray-600">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default SummerSandalShowcase;