"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ShoppingCart, Truck, Shield, Clock, Gift } from 'lucide-react';

interface Feature {
    icon: React.ReactNode;
    title: string;
    description: string;
}

interface TimelineEvent {
    year: string;
    title: string;
    description: string;
}

const LuxuryWatchShowcase: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'details' | 'history' | 'shipping'>('details');

    const features: Feature[] = [
        { icon: <Clock size={24} />, title: 'Precision', description: 'Swiss-made automatic movement with 72-hour power reserve' },
        { icon: <Shield size={24} />, title: 'Durability', description: 'Scratch-resistant sapphire crystal and titanium case' },
        { icon: <Gift size={24} />, title: 'Exclusivity', description: 'Limited edition of only 500 pieces worldwide' },
    ];

    const timeline: TimelineEvent[] = [
        { year: '1875', title: 'Founded', description: 'Our watchmaking journey begins in the Swiss Alps' },
        { year: '1920', title: 'Innovation', description: 'Patented the world\'s first water-resistant watch case' },
        { year: '1955', title: 'Icon Born', description: 'The Celestial collection is introduced, becoming an instant classic' },
        { year: '2024', title: 'Future', description: 'Launching the Nebula - our most advanced timepiece yet' },
    ];

    const tabContent = {
        details: (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
            >
                <h3 className="text-2xl font-semibold">Nebula - Where Time Meets Art</h3>
                <p className="text-gray-600">
                    The Nebula is not just a watch; it's a masterpiece of horology. Each piece is meticulously crafted to capture the essence of the cosmos on your wrist.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-gray-50 p-4 rounded-lg">
                            <div className="flex items-center space-x-3 mb-2">
                                <div className="bg-indigo-100 p-2 rounded-full">{feature.icon}</div>
                                <h4 className="font-semibold">{feature.title}</h4>
                            </div>
                            <p className="text-sm text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </motion.div>
        ),
        history: (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
            >
                <h3 className="text-2xl font-semibold">Our Legacy of Excellence</h3>
                <div className="space-y-8">
                    {timeline.map((event, index) => (
                        <div key={index} className="flex items-start space-x-4">
                            <div className="flex-shrink-0 w-24">
                                <span className="text-2xl font-bold text-indigo-600">{event.year}</span>
                            </div>
                            <div>
                                <h4 className="font-semibold">{event.title}</h4>
                                <p className="text-sm text-gray-600">{event.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        ),
        shipping: (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
            >
                <h3 className="text-2xl font-semibold">White Glove Delivery</h3>
                <p className="text-gray-600">
                    Your Nebula deserves a grand entrance. Experience our premium delivery service, ensuring your timepiece arrives in perfect condition.
                </p>
                <ul className="space-y-4">
                    <li className="flex items-center space-x-3">
                        <Truck className="w-6 h-6 text-indigo-600" />
                        <span>Complimentary worldwide shipping on all orders</span>
                    </li>
                    <li className="flex items-center space-x-3">
                        <Shield className="w-6 h-6 text-indigo-600" />
                        <span>Fully insured transportation</span>
                    </li>
                    <li className="flex items-center space-x-3">
                        <Clock className="w-6 h-6 text-indigo-600" />
                        <span>Express delivery within 3-5 business days</span>
                    </li>
                </ul>
            </motion.div>
        ),
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8 font-sans">
            <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="relative">
                        <div className="sticky top-0 h-screen">
                            <Image
                                src="/luxury-watch.png"
                                alt="Nebula Luxury Watch"
                                layout="fill"
                                objectFit="cover"
                                className="absolute inset-0"
                            />
                            <div className="absolute inset-0 bg-black/30" />
                            <div className="absolute bottom-12 left-12 right-12">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2, duration: 0.5 }}
                                    className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-white"
                                >
                                    <h1 className="text-5xl font-bold mb-2">Nebula</h1>
                                    <p className="text-xl mb-6">Where Time Meets the Cosmos</p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-4xl font-light">$52,000</span>
                                        <motion.button
                                            className="bg-white text-black px-8 py-3 rounded-full text-lg font-semibold flex items-center space-x-2 hover:bg-gray-100 transition-colors"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <ShoppingCart size={20} />
                                            <span>Add to Cart</span>
                                        </motion.button>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>

                    <div className="p-12 lg:p-24 overflow-y-auto h-screen">
                        <nav className="flex space-x-1 mb-12">
                            {(['details', 'history', 'shipping'] as const).map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-6 py-3 rounded-full text-sm font-medium transition-colors ${activeTab === tab
                                        ? 'bg-indigo-600 text-white'
                                        : 'text-gray-600 hover:bg-gray-100'
                                        }`}
                                >
                                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                                </button>
                            ))}
                        </nav>

                        <AnimatePresence mode="wait">
                            {tabContent[activeTab]}
                        </AnimatePresence>

                        <motion.div
                            className="mt-12 pt-8 border-t border-gray-200"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                        >
                            <h3 className="text-xl font-semibold mb-4">Why Choose Nebula?</h3>
                            <ul className="space-y-2">
                                <li className="flex items-center space-x-2 text-gray-600">
                                    <ChevronRight size={20} className="text-indigo-600" />
                                    <span>Unparalleled craftsmanship with attention to every detail</span>
                                </li>
                                <li className="flex items-center space-x-2 text-gray-600">
                                    <ChevronRight size={20} className="text-indigo-600" />
                                    <span>Innovative design inspired by celestial bodies</span>
                                </li>
                                <li className="flex items-center space-x-2 text-gray-600">
                                    <ChevronRight size={20} className="text-indigo-600" />
                                    <span>Limited edition ensuring exclusivity</span>
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LuxuryWatchShowcase;