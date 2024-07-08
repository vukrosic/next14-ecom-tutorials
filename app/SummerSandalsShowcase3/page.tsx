"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Droplet, Wind, Package, Truck, Shield } from 'lucide-react';

interface SandalProduct {
    id: number;
    name: string;
    price: number;
    description: string;
    imageUrl: string;
    features: string[];
    shippingInfo: string;
    warranty: string;
}

const sandals: SandalProduct[] = [
    {
        id: 1,
        name: 'Sunny Day Strider',
        price: 59.99,
        description: 'Perfect for beach adventures and sunny strolls.',
        imageUrl: '/cargo1.webp',
        features: ['Water-resistant', 'Quick-drying', 'UV protection'],
        shippingInfo: 'Free express shipping within 2-3 business days.',
        warranty: '1-year warranty for any manufacturing defects.',
    },
    {
        id: 2,
        name: 'Tropical Breeze',
        price: 69.99,
        description: 'Embrace the summer vibes with every step.',
        imageUrl: '/cargo2.webp',
        features: ['Breathable design', 'Eco-friendly materials', 'Odor-resistant'],
        shippingInfo: 'Standard shipping within 5-7 business days.',
        warranty: '6-month warranty for any manufacturing defects.',
    },
    {
        id: 3,
        name: 'Coral Reef Explorer',
        price: 79.99,
        description: 'Designed for both land and sea adventures.',
        imageUrl: '/cargo3.jpg',
        features: ['Grippy sole', 'Salt-water resistant', 'Floats in water'],
        shippingInfo: 'Next-day delivery available.',
        warranty: '2-year warranty for any manufacturing defects.',
    },
];

const FeatureIcon: React.FC<{ feature: string }> = ({ feature }) => {
    const iconMap: { [key: string]: React.ReactNode } = {
        'Water-resistant': <Droplet className="w-6 h-6" />,
        'Quick-drying': <Wind className="w-6 h-6" />,
        'UV protection': <Sun className="w-6 h-6" />,
        'Breathable design': <Wind className="w-6 h-6" />,
        'Eco-friendly materials': <Droplet className="w-6 h-6" />,
        'Odor-resistant': <Wind className="w-6 h-6" />,
        'Grippy sole': <Droplet className="w-6 h-6" />,
        'Salt-water resistant': <Droplet className="w-6 h-6" />,
        'Floats in water': <Wind className="w-6 h-6" />,
    };

    return (
        <div className="flex items-center space-x-2 text-gray-900">
            {iconMap[feature] || <Sun className="w-6 h-6" />}
            <span>{feature}</span>
        </div>
    );
};

const ProductCard: React.FC<{ product: SandalProduct }> = ({ product }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            className="relative overflow-hidden rounded-xl shadow-lg bg-white"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
        >
            <Image
                src={product.imageUrl}
                alt={product.name}
                width={400}
                height={300}
                className="w-full h-[300px] object-cover rounded-t-xl"
            />
            <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-700 mb-4">{product.description}</p>
                <AnimatePresence>
                    {isHovered && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.2 }}
                        >
                            <div className="flex flex-wrap gap-2 mb-4">
                                {product.features.map((feature, index) => (
                                    <FeatureIcon key={index} feature={feature} />
                                ))}
                            </div>
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-2xl font-bold text-teal-600">${product.price}</span>
                                <button className="bg-teal-600 text-white px-4 py-2 rounded-full font-bold hover:bg-teal-500 transition-colors">
                                    Add to Cart
                                </button>
                            </div>
                            <div className="text-sm text-gray-600">
                                <div className="flex items-center space-x-2">
                                    <Truck className="w-5 h-5 text-teal-600" />
                                    <span>{product.shippingInfo}</span>
                                </div>
                                <div className="flex items-center space-x-2 mt-2">
                                    <Shield className="w-5 h-5 text-teal-600" />
                                    <span>{product.warranty}</span>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
};

const SummerSandalsShowcase: React.FC = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-300 p-8">
            <div className="max-w-6xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-5xl font-extrabold text-center mb-6 text-gray-900 drop-shadow-lg"
                >
                    Discover Our Summer Sandals Collection
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-xl text-center mb-12 text-gray-800"
                >
                    Walk in style and comfort this summer with our exclusive range of sandals.
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {sandals.map((sandal) => (
                        <ProductCard key={sandal.id} product={sandal} />
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-xl p-8 shadow-lg"
                >
                    <h2 className="text-2xl font-bold mb-6 text-center text-gray-900">Why Choose Our Sandals?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="flex items-start space-x-4">
                            <Sun className="w-12 h-12 text-teal-600 flex-shrink-0" />
                            <div>
                                <h3 className="text-xl font-semibold mb-2 text-gray-900">Summer-Ready Design</h3>
                                <p className="text-gray-700">Our sandals are crafted to keep you cool and comfortable all summer long.</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <Package className="w-12 h-12 text-teal-600 flex-shrink-0" />
                            <div>
                                <h3 className="text-xl font-semibold mb-2 text-gray-900">Free Express Shipping</h3>
                                <p className="text-gray-700">Get your perfect summer sandals delivered to your doorstep in no time!</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <Truck className="w-12 h-12 text-teal-600 flex-shrink-0" />
                            <div>
                                <h3 className="text-xl font-semibold mb-2 text-gray-900">Fast and Reliable Delivery</h3>
                                <p className="text-gray-700">We offer multiple shipping options to ensure timely delivery.</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <Shield className="w-12 h-12 text-teal-600 flex-shrink-0" />
                            <div>
                                <h3 className="text-xl font-semibold mb-2 text-gray-900">Warranty and Support</h3>
                                <p className="text-gray-700">All our sandals come with a warranty for your peace of mind.</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default SummerSandalsShowcase;
