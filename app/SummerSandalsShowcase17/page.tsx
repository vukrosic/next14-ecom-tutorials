"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ShoppingBag, Truck, RefreshCw, Award } from 'lucide-react';

interface SandalProduct {
    id: number;
    name: string;
    price: number;
    description: string;
    imageUrl: string;
    colors: string[];
    features: string[];
}

const sandals: SandalProduct[] = [
    {
        id: 1,
        name: 'NeoWave Glider',
        price: 139.99,
        description: 'Experience the future of beachwear with our adaptive cushioning technology.',
        imageUrl: '/sandals1.webp',
        colors: ['#FF6B6B', '#4ECDC4', '#45B7D1'],
        features: ['Smart temperature regulation', 'Water-repellent nano-coating', 'Anti-microbial footbed'],
    },
    {
        id: 2,
        name: 'EcoFlex Voyager',
        price: 119.99,
        description: 'Sustainably crafted for the eco-conscious adventurer, without compromising on style.',
        imageUrl: '/sandals2.jpg',
        colors: ['#F9ED69', '#F08A5D', '#B83B5E'],
        features: ['100% recycled materials', 'Biodegradable sole', 'Carbon-neutral production'],
    },
    {
        id: 3,
        name: 'ZenStep Oasis',
        price: 159.99,
        description: 'Bring tranquility to every step with our meditation-inspired comfort design.',
        imageUrl: '/sandals3.webp',
        colors: ['#6A0572', '#AB83A1', '#F7EF99'],
        features: ['Pressure point massage insole', 'Aromatherapy-infused straps', 'Sound-absorbing materials'],
    },
];

const ProductShowcase: React.FC<{ product: SandalProduct }> = ({ product }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <motion.div
            layout
            className="bg-white rounded-3xl overflow-hidden shadow-xl"
        >
            <motion.div layout className="relative h-64 sm:h-80">
                <Image
                    src={product.imageUrl}
                    alt={product.name}
                    layout="fill"
                    objectFit="cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <motion.div
                    layout
                    className="absolute bottom-0 left-0 right-0 p-6 text-white"
                >
                    <motion.h3 layout className="text-2xl font-bold mb-2">{product.name}</motion.h3>
                    <motion.p layout className="text-3xl font-light">${product.price}</motion.p>
                </motion.div>
            </motion.div>
            <motion.div layout className="p-6">
                <motion.p layout className="text-gray-600 mb-4">{product.description}</motion.p>
                <motion.div layout className="flex space-x-2 mb-4">
                    {product.colors.map((color, index) => (
                        <div key={index} className="w-8 h-8 rounded-full" style={{ backgroundColor: color }} />
                    ))}
                </motion.div>
                <AnimatePresence>
                    {isExpanded && (
                        <motion.ul
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="text-gray-600 mb-4"
                        >
                            {product.features.map((feature, index) => (
                                <li key={index} className="mb-2">• {feature}</li>
                            ))}
                        </motion.ul>
                    )}
                </AnimatePresence>
                <motion.button
                    layout
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="flex items-center text-indigo-600 font-semibold"
                >
                    {isExpanded ? 'Less info' : 'More info'}
                    <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <ChevronDown className="ml-1 w-5 h-5" />
                    </motion.div>
                </motion.button>
            </motion.div>
            <motion.div
                layout
                className="px-6 pb-6"
            >
                <button className="w-full bg-indigo-600 text-white font-bold py-3 rounded-xl hover:bg-indigo-700 transition-colors duration-300 flex items-center justify-center">
                    Add to Cart <ShoppingBag className="w-5 h-5 ml-2" />
                </button>
            </motion.div>
        </motion.div>
    );
};

const SummerSandalsShowcase: React.FC = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 p-8">
            <div className="max-w-6xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-5xl font-extrabold text-center mb-4 text-indigo-900"
                >
                    Elevate Your Summer
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-xl text-center mb-12 text-indigo-600"
                >
                    Discover our revolutionary sandal collection
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {sandals.map((sandal) => (
                        <ProductShowcase key={sandal.id} product={sandal} />
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-3xl p-8 shadow-xl"
                >
                    <h2 className="text-3xl font-bold mb-6 text-center text-indigo-900">Why Choose Us?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="flex flex-col items-center text-center">
                            <Truck className="w-12 h-12 text-indigo-600 mb-4" />
                            <h3 className="text-xl font-semibold mb-2 text-indigo-900">Free Global Shipping</h3>
                            <p className="text-gray-600">Enjoy free shipping on all orders over $100, anywhere in the world.</p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <RefreshCw className="w-12 h-12 text-indigo-600 mb-4" />
                            <h3 className="text-xl font-semibold mb-2 text-indigo-900">60-Day Returns</h3>
                            <p className="text-gray-600">Not satisfied? Return your sandals within 60 days, no questions asked.</p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <Award className="w-12 h-12 text-indigo-600 mb-4" />
                            <h3 className="text-xl font-semibold mb-2 text-indigo-900">2-Year Warranty</h3>
                            <p className="text-gray-600">Our sandals are built to last. Enjoy peace of mind with our extended warranty.</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mt-16 text-center"
                >
                    <h2 className="text-3xl font-bold text-indigo-900 mb-4">Join the Revolution</h2>
                    <p className="text-xl text-indigo-600 mb-8">Be the first to know about new releases and exclusive offers.</p>
                    <div className="flex max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="flex-grow px-4 py-2 rounded-l-xl border-2 border-indigo-300 focus:outline-none focus:border-indigo-500"
                        />
                        <button className="bg-indigo-600 text-white px-6 py-2 rounded-r-xl hover:bg-indigo-700 transition-colors duration-300">
                            Subscribe
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default SummerSandalsShowcase;