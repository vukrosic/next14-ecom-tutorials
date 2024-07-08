"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Leaf, Recycle, Droplets, Star, Truck, Clock } from 'lucide-react';

interface SandalFeature {
    icon: React.ReactNode;
    title: string;
    description: string;
}

interface SandalSize {
    size: string;
    available: boolean;
}

const EcoSandalShowcase: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'description' | 'shipping' | 'reviews'>('description');
    const [selectedSize, setSelectedSize] = useState<string>('');

    const features: SandalFeature[] = [
        { icon: <Leaf className="w-6 h-6 text-green-500" />, title: 'Eco-Friendly', description: 'Made from recycled ocean plastics' },
        { icon: <Recycle className="w-6 h-6 text-blue-500" />, title: 'Recyclable', description: 'Fully recyclable at the end of its life' },
        { icon: <Droplets className="w-6 h-6 text-cyan-500" />, title: 'Water-Resistant', description: 'Perfect for beach and water activities' },
    ];

    const sizes: SandalSize[] = [
        { size: 'S', available: true },
        { size: 'M', available: true },
        { size: 'L', available: false },
        { size: 'XL', available: true },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-8 font-sans">
            <motion.div
                className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="relative h-96 md:h-full">
                        <Image
                            src="/sandals1.webp"
                            alt="EcoStep Sandal"
                            layout="fill"
                            objectFit="cover"
                            className="absolute inset-0"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        <div className="absolute bottom-6 left-6 right-6">
                            <motion.div
                                className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.5 }}
                            >
                                <h1 className="text-3xl font-bold text-gray-800 mb-2">EcoStep Sandal</h1>
                                <p className="text-xl font-semibold text-green-600">$89.99</p>
                            </motion.div>
                        </div>
                    </div>

                    <div className="p-8">
                        <div className="mb-6">
                            <h2 className="text-xl font-semibold mb-3 text-gray-800">Select Size</h2>
                            <div className="flex space-x-4">
                                {sizes.map((sizeObj) => (
                                    <motion.button
                                        key={sizeObj.size}
                                        onClick={() => setSelectedSize(sizeObj.size)}
                                        disabled={!sizeObj.available}
                                        className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-semibold ${selectedSize === sizeObj.size
                                            ? 'bg-green-500 text-white'
                                            : sizeObj.available
                                                ? 'bg-gray-200 text-gray-800'
                                                : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                            }`}
                                        whileHover={sizeObj.available ? { scale: 1.05 } : {}}
                                        whileTap={sizeObj.available ? { scale: 0.95 } : {}}
                                    >
                                        {sizeObj.size}
                                    </motion.button>
                                ))}
                            </div>
                        </div>

                        <motion.button
                            className="w-full bg-green-500 text-white py-4 rounded-xl text-xl font-semibold hover:bg-green-600 transition-colors mb-8"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Add to Cart
                        </motion.button>

                        <div className="mb-8">
                            <div className="flex space-x-4 mb-4">
                                {(['description', 'shipping', 'reviews'] as const).map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`px-4 py-2 rounded-lg ${activeTab === tab
                                            ? 'bg-green-500 text-white'
                                            : 'bg-gray-200 text-gray-800'
                                            }`}
                                    >
                                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                                    </button>
                                ))}
                            </div>

                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeTab}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {activeTab === 'description' && (
                                        <p className="text-gray-600">
                                            Step into eco-friendly comfort with our EcoStep Sandal. Made from recycled ocean plastics,
                                            these sandals offer both style and sustainability. Perfect for beach days, casual outings,
                                            or just lounging around, the EcoStep Sandal provides all-day comfort while helping to protect our planet.
                                        </p>
                                    )}
                                    {activeTab === 'shipping' && (
                                        <div className="space-y-4">
                                            <div className="flex items-center">
                                                <Truck className="w-6 h-6 text-green-500 mr-3" />
                                                <span className="text-gray-600">Free shipping on orders over $100</span>
                                            </div>
                                            <div className="flex items-center">
                                                <Clock className="w-6 h-6 text-green-500 mr-3" />
                                                <span className="text-gray-600">Delivery within 3-5 business days</span>
                                            </div>
                                        </div>
                                    )}
                                    {activeTab === 'reviews' && (
                                        <div className="space-y-2">
                                            <div className="flex items-center">
                                                <Star className="w-6 h-6 text-yellow-400" />
                                                <Star className="w-6 h-6 text-yellow-400" />
                                                <Star className="w-6 h-6 text-yellow-400" />
                                                <Star className="w-6 h-6 text-yellow-400" />
                                                <Star className="w-6 h-6 text-gray-300" />
                                                <span className="ml-2 text-gray-600">(24 reviews)</span>
                                            </div>
                                            <p className="text-gray-600 italic">"Comfortable and eco-friendly. Love them!" - Sarah T.</p>
                                        </div>
                                    )}
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold mb-4 text-gray-800">Features</h2>
                            <div className="space-y-4">
                                {features.map((feature, index) => (
                                    <motion.div
                                        key={index}
                                        className="flex items-center bg-gray-100 p-4 rounded-xl"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1, duration: 0.3 }}
                                    >
                                        <div className="bg-white p-2 rounded-full mr-4">
                                            {feature.icon}
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-800">{feature.title}</h3>
                                            <p className="text-sm text-gray-600">{feature.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default EcoSandalShowcase;