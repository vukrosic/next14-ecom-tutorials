"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Shield, Gem, Truck, Award, ChevronDown, ChevronUp } from 'lucide-react';

interface WatchFeature {
    icon: React.ReactNode;
    title: string;
    description: string;
}

interface AccordionItem {
    title: string;
    content: string;
}

const LuxuryWatchShowcase: React.FC = () => {
    const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
    const [selectedMaterial, setSelectedMaterial] = useState<string>('Gold');

    const features: WatchFeature[] = [
        { icon: <Clock className="w-6 h-6 text-yellow-500" />, title: 'Swiss Movement', description: 'Precision engineering for accurate timekeeping' },
        { icon: <Shield className="w-6 h-6 text-yellow-500" />, title: 'Sapphire Crystal', description: 'Scratch-resistant and clear view' },
        { icon: <Gem className="w-6 h-6 text-yellow-500" />, title: 'Genuine Leather', description: 'Premium strap for comfort and style' },
    ];

    const accordionItems: AccordionItem[] = [
        { title: 'Product Details', content: 'The Chronos Elegance features a 41mm case diameter, water resistance up to 100 meters, and a power reserve of 48 hours. The dial showcases hand-applied indices and a date window at 3 o\'clock.' },
        { title: 'Shipping Information', content: 'We offer free worldwide shipping on all orders. Your watch will be carefully packaged in a luxury box and shipped with full insurance. Delivery typically takes 3-5 business days.' },
        { title: 'Warranty', content: 'Each Chronos Elegance comes with a 5-year international warranty. This covers manufacturing defects and ensures your timepiece remains in perfect condition for years to come.' },
    ];

    const materials = ['Gold', 'Silver', 'Rose Gold'];

    return (
        <div className="min-h-screen bg-gray-100 p-8 font-serif">
            <motion.div
                className="max-w-6xl mx-auto bg-white rounded-none shadow-2xl overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="bg-black p-8 flex items-center justify-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                        >
                            <Image
                                src="/luxury-watch.png"
                                alt="Chronos Elegance Watch"
                                width={500}
                                height={500}
                                className="rounded-lg shadow-2xl"
                            />
                        </motion.div>
                    </div>

                    <div className="p-12 space-y-8">
                        <div>
                            <motion.h1
                                className="text-4xl font-bold text-gray-900 mb-2"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.5 }}
                            >
                                Chronos Elegance
                            </motion.h1>
                            <motion.p
                                className="text-xl text-gray-600"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.5 }}
                            >
                                Timeless sophistication on your wrist
                            </motion.p>
                        </div>

                        <motion.div
                            className="space-y-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                        >
                            <h2 className="text-2xl font-semibold text-gray-900">Select Material</h2>
                            <div className="flex space-x-4">
                                {materials.map((material) => (
                                    <motion.button
                                        key={material}
                                        onClick={() => setSelectedMaterial(material)}
                                        className={`px-6 py-3 rounded-full text-sm font-semibold ${selectedMaterial === material
                                            ? 'bg-yellow-500 text-white'
                                            : 'bg-gray-200 text-gray-800'
                                            }`}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        {material}
                                    </motion.button>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            className="space-y-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.5 }}
                        >
                            <h2 className="text-2xl font-semibold text-gray-900">Price</h2>
                            <p className="text-3xl font-bold text-yellow-500">$12,999</p>
                        </motion.div>

                        <motion.button
                            className="w-full bg-yellow-500 text-white py-4 rounded-none text-xl font-semibold hover:bg-yellow-600 transition-colors"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7, duration: 0.5 }}
                        >
                            Add to Cart
                        </motion.button>

                        <motion.div
                            className="space-y-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.5 }}
                        >
                            <h2 className="text-2xl font-semibold text-gray-900">Key Features</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {features.map((feature, index) => (
                                    <div key={index} className="flex flex-col items-center text-center p-4 bg-gray-100 rounded-lg">
                                        <div className="mb-2">{feature.icon}</div>
                                        <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                                        <p className="text-sm text-gray-600">{feature.description}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            className="space-y-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.9, duration: 0.5 }}
                        >
                            {accordionItems.map((item, index) => (
                                <div key={index} className="border-b border-gray-200">
                                    <button
                                        className="flex justify-between items-center w-full py-4 text-left"
                                        onClick={() => setActiveAccordion(activeAccordion === index ? null : index)}
                                    >
                                        <span className="text-lg font-semibold text-gray-900">{item.title}</span>
                                        {activeAccordion === index ? (
                                            <ChevronUp className="w-5 h-5 text-gray-500" />
                                        ) : (
                                            <ChevronDown className="w-5 h-5 text-gray-500" />
                                        )}
                                    </button>
                                    <AnimatePresence>
                                        {activeAccordion === index && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="overflow-hidden"
                                            >
                                                <p className="py-4 text-gray-600">{item.content}</p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default LuxuryWatchShowcase;