"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Truck, RefreshCcw, Heart, ShoppingCart } from 'lucide-react';

interface SandalProduct {
    id: number;
    name: string;
    price: number;
    description: string;
    imageUrl: string;
    color: string;
    sizes: number[];
}

const sandals: SandalProduct[] = [
    {
        id: 1,
        name: 'Coastal Cruiser',
        price: 79.99,
        description: 'Embrace the waves with our ultra-comfortable beach sandals.',
        imageUrl: '/sandals1.webp',
        color: 'Aqua Blue',
        sizes: [6, 7, 8, 9, 10, 11],
    },
    {
        id: 2,
        name: 'Sunset Stroller',
        price: 89.99,
        description: 'Perfect for romantic walks along the shore at dusk.',
        imageUrl: '/sandals2.jpg',
        color: 'Coral Pink',
        sizes: [5, 6, 7, 8, 9, 10],
    },
    {
        id: 3,
        name: 'Island Hopper',
        price: 99.99,
        description: 'Versatile sandals for all your tropical adventures.',
        imageUrl: '/sandals3.webp',
        color: 'Palm Green',
        sizes: [7, 8, 9, 10, 11, 12],
    },
];

const ProductCard: React.FC<{ product: SandalProduct }> = ({ product }) => {
    const [selectedSize, setSelectedSize] = useState<number | null>(null);

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105"
        >
            <div className="relative h-64">
                <Image
                    src={product.imageUrl}
                    alt={product.name}
                    layout="fill"
                    objectFit="cover"
                />
                <div className="absolute top-2 right-2 bg-white rounded-full p-2">
                    <Heart className="w-6 h-6 text-pink-500" />
                </div>
            </div>
            <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex justify-between items-center mb-4">
                    <span className="text-3xl font-bold text-teal-600">${product.price}</span>
                    <span className="text-sm text-gray-500">Color: {product.color}</span>
                </div>
                <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-2">Select Size:</h4>
                    <div className="flex flex-wrap gap-2">
                        {product.sizes.map((size) => (
                            <button
                                key={size}
                                onClick={() => setSelectedSize(size)}
                                className={`px-3 py-1 rounded-full text-sm ${selectedSize === size
                                    ? 'bg-teal-500 text-white'
                                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                    }`}
                            >
                                {size}
                            </button>
                        ))}
                    </div>
                </div>
                <button className="w-full bg-teal-500 text-white py-2 rounded-lg font-semibold hover:bg-teal-600 transition-colors flex items-center justify-center">
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Add to Cart
                </button>
            </div>
        </motion.div>
    );
};

const BeachParadiseSandalsShowcase: React.FC = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-yellow-100 to-blue-200 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl font-extrabold text-teal-800 mb-4">Beach Paradise Sandals</h1>
                    <p className="text-xl text-gray-600">Step into summer with style and comfort</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {sandals.map((sandal) => (
                        <ProductCard key={sandal.id} product={sandal} />
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-white rounded-lg shadow-lg p-8"
                >
                    <h2 className="text-3xl font-bold mb-6 text-center text-teal-800">Why Choose Beach Paradise?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="flex flex-col items-center text-center">
                            <Truck className="w-12 h-12 text-teal-500 mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Free Express Shipping</h3>
                            <p className="text-gray-600">Get your sandals delivered in 2-3 business days, absolutely free!</p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <RefreshCcw className="w-12 h-12 text-teal-500 mb-4" />
                            <h3 className="text-xl font-semibold mb-2">30-Day Returns</h3>
                            <p className="text-gray-600">Not happy? Return your sandals within 30 days for a full refund.</p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <Heart className="w-12 h-12 text-teal-500 mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Comfort Guarantee</h3>
                            <p className="text-gray-600">We're confident you'll love our sandals or your money back!</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default BeachParadiseSandalsShowcase;