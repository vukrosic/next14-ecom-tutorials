"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Droplet, Wind, Package } from 'lucide-react';

interface SandalProduct {
    id: number;
    name: string;
    price: number;
    description: string;
    imageUrl: string;
    features: string[];
}

const sandals: SandalProduct[] = [
    {
        id: 1,
        name: 'Sunny Day Strider',
        price: 59.99,
        description: 'Perfect for beach adventures and sunny strolls.',
        imageUrl: '/cargo1.webp',
        features: ['Water-resistant', 'Quick-drying', 'UV protection'],
    },
    {
        id: 2,
        name: 'Tropical Breeze',
        price: 69.99,
        description: 'Embrace the summer vibes with every step.',
        imageUrl: '/cargo2.webp',
        features: ['Breathable design', 'Eco-friendly materials', 'Odor-resistant'],
    },
    {
        id: 3,
        name: 'Coral Reef Explorer',
        price: 79.99,
        description: 'Designed for both land and sea adventures.',
        imageUrl: '/cargo3.jpg',
        features: ['Grippy sole', 'Salt-water resistant', 'Floats in water'],
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
        <div className="flex items-center space-x-2 text-white">
            {iconMap[feature] || <Sun className="w-6 h-6" />}
            <span>{feature}</span>
        </div>
    );
};

const ProductCard: React.FC<{ product: SandalProduct }> = ({ product }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            className="relative overflow-hidden rounded-3xl shadow-xl"
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
                className="w-full h-[300px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{product.name}</h3>
                <p className="text-white/80 mb-4">{product.description}</p>
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
                            <div className="flex justify-between items-center">
                                <span className="text-3xl font-bold text-yellow-400">${product.price}</span>
                                <button className="bg-yellow-400 text-black px-6 py-2 rounded-full font-bold hover:bg-yellow-300 transition-colors">
                                    Add to Cart
                                </button>
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
        <div className="min-h-screen bg-gradient-to-br from-blue-400 via-teal-300 to-yellow-200 p-8">
            <div className="max-w-6xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-6xl font-extrabold text-center mb-4 text-white drop-shadow-lg"
                >
                    Summer Vibes Sandals
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-2xl text-center mb-12 text-white/90"
                >
                    Step into the season with style and comfort
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
                    className="bg-blue-900/40 backdrop-blur-md rounded-3xl p-8 shadow-lg"
                >
                    <h2 className="text-3xl font-bold mb-6 text-center text-white">Why Choose Our Sandals?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="flex items-start space-x-4">
                            <Sun className="w-12 h-12 text-yellow-400 flex-shrink-0" />
                            <div>
                                <h3 className="text-xl font-semibold mb-2 text-white">Summer-Ready Design</h3>
                                <p className="text-white/80">Our sandals are crafted to keep you cool and comfortable all summer long.</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <Package className="w-12 h-12 text-yellow-400 flex-shrink-0" />
                            <div>
                                <h3 className="text-xl font-semibold mb-2 text-white">Free Express Shipping</h3>
                                <p className="text-white/80">Get your perfect summer sandals delivered to your doorstep in no time!</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default SummerSandalsShowcase;