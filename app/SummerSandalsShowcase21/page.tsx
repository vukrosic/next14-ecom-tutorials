"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Shield, Truck, Zap, Droplets, Award } from 'lucide-react';

interface WatchFeature {
    icon: React.ReactNode;
    title: string;
    description: string;
}

interface ColorOption {
    name: string;
    class: string;
}

const AvantGardeWatchShowcase: React.FC = () => {
    const [activeSection, setActiveSection] = useState<string>('overview');
    const [selectedColor, setSelectedColor] = useState<string>('Midnight Black');

    const features: WatchFeature[] = [
        { icon: <Clock className="w-8 h-8" />, title: 'Precision Movement', description: 'Swiss-made automatic movement with 72-hour power reserve' },
        { icon: <Shield className="w-8 h-8" />, title: 'Durability', description: 'Scratch-resistant sapphire crystal and 316L stainless steel case' },
        { icon: <Zap className="w-8 h-8" />, title: 'Luminescence', description: 'Super-LumiNova® hands and markers for excellent nighttime visibility' },
        { icon: <Droplets className="w-8 h-8" />, title: 'Water Resistance', description: 'Water-resistant up to 300 meters (1000 feet)' },
    ];

    const colorOptions: ColorOption[] = [
        { name: 'Midnight Black', class: 'bg-gray-900' },
        { name: 'Ocean Blue', class: 'bg-blue-600' },
        { name: 'Forest Green', class: 'bg-green-700' },
    ];

    const sectionContent = {
        overview: (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-3xl font-bold mb-4">Chronomaster Avant-Garde</h2>
                <p className="text-lg mb-6">
                    Experience timekeeping redefined with the Chronomaster Avant-Garde. This masterpiece of horology combines cutting-edge technology with timeless elegance, pushing the boundaries of watchmaking into the future.
                </p>
                <div className="grid grid-cols-2 gap-6">
                    {features.map((feature, index) => (
                        <div key={index} className="flex items-start space-x-3">
                            <div className="bg-purple-100 p-2 rounded-full">{feature.icon}</div>
                            <div>
                                <h3 className="font-semibold">{feature.title}</h3>
                                <p className="text-sm text-gray-600">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        ),
        customize: (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-3xl font-bold mb-4">Customize Your Timepiece</h2>
                <p className="text-lg mb-6">
                    Make the Chronomaster Avant-Garde truly yours by selecting from our curated color options. Each hue has been carefully chosen to complement the watch's avant-garde design.
                </p>
                <div className="flex space-x-4 mb-6">
                    {colorOptions.map((color) => (
                        <button
                            key={color.name}
                            onClick={() => setSelectedColor(color.name)}
                            className={`w-16 h-16 rounded-full border-4 ${selectedColor === color.name ? 'border-purple-500' : 'border-transparent'
                                } ${color.class} transition-all duration-300 transform hover:scale-110`}
                            aria-label={color.name}
                        />
                    ))}
                </div>
                <p className="font-semibold">Selected: {selectedColor}</p>
            </motion.div>
        ),
        shipping: (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-3xl font-bold mb-4">White Glove Delivery</h2>
                <p className="text-lg mb-6">
                    Your Chronomaster Avant-Garde deserves a grand entrance. Experience our premium delivery service, ensuring your timepiece arrives in perfect condition.
                </p>
                <ul className="space-y-4">
                    <li className="flex items-center space-x-3">
                        <Truck className="w-6 h-6 text-purple-500" />
                        <span>Complimentary worldwide shipping on all orders</span>
                    </li>
                    <li className="flex items-center space-x-3">
                        <Shield className="w-6 h-6 text-purple-500" />
                        <span>Fully insured transportation</span>
                    </li>
                    <li className="flex items-center space-x-3">
                        <Award className="w-6 h-6 text-purple-500" />
                        <span>Signature required upon delivery</span>
                    </li>
                </ul>
            </motion.div>
        ),
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-100 p-8 font-sans">
            <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="relative h-[600px] lg:h-auto">
                        <Image
                            src="/luxury-watch.png"
                            alt="Chronomaster Avant-Garde Watch"
                            layout="fill"
                            objectFit="cover"
                            className="absolute inset-0"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                        <div className="absolute bottom-8 left-8 right-8">
                            <motion.div
                                className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-white"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                            >
                                <h1 className="text-4xl font-bold mb-2">Chronomaster Avant-Garde</h1>
                                <p className="text-xl mb-4">Redefining luxury timekeeping</p>
                                <div className="flex items-center justify-between">
                                    <span className="text-3xl font-bold">$24,999</span>
                                    <motion.button
                                        className="bg-purple-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-purple-700 transition-colors"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        Add to Cart
                                    </motion.button>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    <div className="p-12">
                        <div className="flex space-x-4 mb-8">
                            {['overview', 'customize', 'shipping'].map((section) => (
                                <motion.button
                                    key={section}
                                    onClick={() => setActiveSection(section)}
                                    className={`px-6 py-3 rounded-full text-lg font-semibold ${activeSection === section
                                        ? 'bg-purple-600 text-white'
                                        : 'bg-gray-200 text-gray-800'
                                        }`}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {section.charAt(0).toUpperCase() + section.slice(1)}
                                </motion.button>
                            ))}
                        </div>

                        <AnimatePresence mode="wait">
                            {sectionContent[activeSection as keyof typeof sectionContent]}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AvantGardeWatchShowcase;