"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Droplets, Wind, Zap, ShoppingBag, ArrowRight } from 'lucide-react';

interface SandalFeature {
    icon: React.ReactNode;
    label: string;
}

interface SandalProduct {
    id: number;
    name: string;
    price: number;
    tagline: string;
    imageUrl: string;
    features: SandalFeature[];
}

const sandals: SandalProduct[] = [
    {
        id: 1,
        name: 'AeroGlide Flux',
        price: 129.99,
        tagline: 'Ultralight comfort meets cutting-edge design',
        imageUrl: '/sandals1.webp',
        features: [
            { icon: <Sun className="w-5 h-5" />, label: 'UV-resistant straps' },
            { icon: <Droplets className="w-5 h-5" />, label: 'Water-repellent coating' },
            { icon: <Wind className="w-5 h-5" />, label: 'Breathable footbed' },
        ],
    },
    {
        id: 2,
        name: 'TerraFlex Explorer',
        price: 149.99,
        tagline: 'Conquer any terrain with adaptive grip',
        imageUrl: '/sandals2.jpg',
        features: [
            { icon: <Zap className="w-5 h-5" />, label: 'Shock-absorbing sole' },
            { icon: <Wind className="w-5 h-5" />, label: 'Quick-dry materials' },
            { icon: <Sun className="w-5 h-5" />, label: 'Heat-resistant outsole' },
        ],
    },
    {
        id: 3,
        name: 'AquaVista Pro',
        price: 109.99,
        tagline: 'Seamless transition from beach to street',
        imageUrl: '/sandals3.webp',
        features: [
            { icon: <Droplets className="w-5 h-5" />, label: 'Sand-resistant design' },
            { icon: <Zap className="w-5 h-5" />, label: 'Enhanced arch support' },
            { icon: <Wind className="w-5 h-5" />, label: 'Odor-neutralizing footbed' },
        ],
    },
];

const FeatureTag: React.FC<{ feature: SandalFeature }> = ({ feature }) => (
    <div className="flex items-center bg-white bg-opacity-20 rounded-full px-3 py-1">
        {feature.icon}
        <span className="ml-2 text-sm">{feature.label}</span>
    </div>
);

const ProductCard: React.FC<{ product: SandalProduct; isActive: boolean }> = ({ product, isActive }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isActive ? 1 : 0.6, scale: isActive ? 1 : 0.9 }}
            transition={{ duration: 0.5 }}
            className={`bg-gradient-to-br from-purple-600 to-indigo-600 rounded-3xl overflow-hidden shadow-2xl ${isActive ? 'ring-4 ring-yellow-400' : ''
                }`}
        >
            <div className="relative h-64">
                <Image
                    src={product.imageUrl}
                    alt={product.name}
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            <div className="p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                <p className="text-lg font-semibold mb-4">${product.price}</p>
                <p className="text-sm mb-4">{product.tagline}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {product.features.map((feature, index) => (
                        <FeatureTag key={index} feature={feature} />
                    ))}
                </div>
                <button className="w-full bg-yellow-400 text-purple-900 font-bold py-2 rounded-full hover:bg-yellow-300 transition-colors duration-300 flex items-center justify-center">
                    Add to Cart <ShoppingBag className="w-5 h-5 ml-2" />
                </button>
            </div>
        </motion.div>
    );
};

const SummerSandalsShowcase: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="min-h-screen bg-gradient-to-br from-fuchsia-500 via-purple-600 to-indigo-700 p-8">
            <div className="max-w-6xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-6xl font-extrabold text-center mb-4 text-white"
                >
                    Summer Sandals Revolution
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-2xl text-center mb-12 text-yellow-300"
                >
                    Redefining comfort, style, and innovation
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {sandals.map((sandal, index) => (
                        <ProductCard key={sandal.id} product={sandal} isActive={index === activeIndex} />
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-8 shadow-xl text-white"
                >
                    <h2 className="text-3xl font-bold mb-6 text-center">Why Choose Our Sandals?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="flex items-start space-x-4">
                            <div className="bg-yellow-400 rounded-full p-3">
                                <Zap className="w-6 h-6 text-purple-900" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Innovative Technology</h3>
                                <p className="text-white text-opacity-80">Our sandals incorporate cutting-edge materials and design for unparalleled comfort and performance.</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="bg-yellow-400 rounded-full p-3">
                                <Droplets className="w-6 h-6 text-purple-900" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Eco-Friendly Production</h3>
                                <p className="text-white text-opacity-80">We use sustainable materials and processes to minimize our environmental impact.</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mt-16 text-center"
                >
                    <h2 className="text-3xl font-bold text-white mb-4">Ready to elevate your summer style?</h2>
                    <button className="bg-yellow-400 text-purple-900 px-8 py-3 rounded-full font-bold hover:bg-yellow-300 transition-colors duration-300 text-lg flex items-center mx-auto">
                        Shop Now <ArrowRight className="w-5 h-5 ml-2" />
                    </button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-16 text-center text-white"
                >
                    <p className="text-lg mb-2">Free express shipping on all orders over $100</p>
                    <p className="text-sm text-white text-opacity-80">30-day money-back guarantee | Worldwide delivery</p>
                </motion.div>
            </div>
        </div>
    );
};

export default SummerSandalsShowcase;