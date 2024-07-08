"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Leaf, Waves, ArrowRight } from 'lucide-react';

interface SandalProduct {
    id: number;
    name: string;
    price: number;
    tagline: string;
    features: string[];
    imageUrl: string;
    accentColor: string;
}

const sandals: SandalProduct[] = [
    {
        id: 1,
        name: 'ZenStep Oasis',
        price: 89.99,
        tagline: 'Walk on clouds, feel the earth',
        features: ['Bio-based foam', 'Antimicrobial footbed', 'Recycled straps'],
        imageUrl: '/sandals1.webp',
        accentColor: '#8DB600',
    },
    {
        id: 2,
        name: 'AquaGlide Pro',
        price: 99.99,
        tagline: 'From beach to street, in style',
        features: ['Water-repellent', 'Quick-dry technology', 'Coral-safe materials'],
        imageUrl: '/sandals2.jpg',
        accentColor: '#4682B4',
    },
    {
        id: 3,
        name: 'SolAce Wanderer',
        price: 109.99,
        tagline: 'Adventure awaits at every step',
        features: ['Solar-powered LED accents', 'Terrain-adaptive sole', 'Vegan leather'],
        imageUrl: '/sandals3.webp',
        accentColor: '#FF7F50',
    },
];

const ProductCard: React.FC<{ product: SandalProduct; isSelected: boolean; onClick: () => void }> = ({ product, isSelected, onClick }) => {
    return (
        <motion.div
            layout
            onClick={onClick}
            className={`cursor-pointer p-4 rounded-3xl transition-all duration-300 ${isSelected ? 'bg-white shadow-2xl' : 'bg-gray-100 hover:bg-gray-200'
                }`}
            style={{
                height: isSelected ? '400px' : '200px',
                overflow: 'hidden'
            }}
        >
            <motion.div layout className="flex flex-col h-full">
                <motion.div layout className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold">{product.name}</h3>
                    <span className="text-xl font-semibold" style={{ color: product.accentColor }}>${product.price}</span>
                </motion.div>
                <motion.div layout className="relative flex-grow">
                    <Image
                        src={product.imageUrl}
                        alt={product.name}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-2xl"
                    />
                </motion.div>
                <AnimatePresence>
                    {isSelected && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mt-4"
                        >
                            <p className="text-gray-600 mb-2">{product.tagline}</p>
                            <ul className="list-disc list-inside text-sm text-gray-500 mb-4">
                                {product.features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                            <button
                                className="w-full py-2 rounded-full text-white font-semibold flex items-center justify-center"
                                style={{ backgroundColor: product.accentColor }}
                            >
                                Add to Cart <ArrowRight className="ml-2 w-4 h-4" />
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </motion.div>
    );
};

const MinimalSummerSandalsShowcase: React.FC = () => {
    const [selectedProduct, setSelectedProduct] = useState<number | null>(null);

    return (
        <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-blue-50 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-6xl font-extrabold text-gray-800 mb-4">Summer Essentials</h1>
                    <p className="text-xl text-gray-600">Elevate your summer style with our eco-conscious sandals</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {sandals.map((sandal) => (
                        <ProductCard
                            key={sandal.id}
                            product={sandal}
                            isSelected={selectedProduct === sandal.id}
                            onClick={() => setSelectedProduct(selectedProduct === sandal.id ? null : sandal.id)}
                        />
                    ))}
                </div>

                <div className="bg-white rounded-3xl shadow-xl p-8 mb-16">
                    <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Why Choose Us?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="flex flex-col items-center text-center">
                            <Sparkles className="w-12 h-12 text-yellow-500 mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Innovative Design</h3>
                            <p className="text-gray-600">Blending style with cutting-edge eco-technology</p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <Leaf className="w-12 h-12 text-green-500 mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Eco-Friendly</h3>
                            <p className="text-gray-600">Sustainable materials for a better planet</p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <Waves className="w-12 h-12 text-blue-500 mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Beach to Street</h3>
                            <p className="text-gray-600">Versatile designs for any summer occasion</p>
                        </div>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-gray-100 rounded-3xl p-8"
                >
                    <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Shipping & Returns</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-600">
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Fast & Free Delivery</h3>
                            <p>Enjoy free shipping on all orders over $50. Most orders arrive within 3-5 business days.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Hassle-Free Returns</h3>
                            <p>Not happy? Return unworn items within 30 days for a full refund. We'll even cover the return shipping!</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default MinimalSummerSandalsShowcase;