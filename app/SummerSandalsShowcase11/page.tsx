"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Umbrella, Palmtree, MapPin, Gift, Calendar } from 'lucide-react';

interface SandalProduct {
    id: number;
    name: string;
    price: number;
    description: string;
    imageUrl: string;
    vacationSpot: string;
    limitedEdition: boolean;
}

const sandals: SandalProduct[] = [
    {
        id: 1,
        name: 'Bali Breeze',
        price: 79.99,
        description: 'Feel the tropical vibes with every step. Perfect for beach parties and sunset strolls.',
        imageUrl: '/sandals1.webp',
        vacationSpot: 'Bali, Indonesia',
        limitedEdition: true,
    },
    {
        id: 2,
        name: 'Santorini Sunshine',
        price: 89.99,
        description: 'Inspired by the white-washed buildings and blue domes of Greece. Ideal for exploring cobblestone streets.',
        imageUrl: '/sandals2.jpg',
        vacationSpot: 'Santorini, Greece',
        limitedEdition: false,
    },
    {
        id: 3,
        name: 'Maui Magic',
        price: 99.99,
        description: 'Capture the essence of Hawaiian paradise. Great for both beach adventures and luau nights.',
        imageUrl: '/sandals3.webp',
        vacationSpot: 'Maui, Hawaii',
        limitedEdition: true,
    },
];

const ProductCard: React.FC<{ product: SandalProduct }> = ({ product }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <motion.div
            className="relative w-full h-[500px] cursor-pointer"
            onClick={() => setIsFlipped(!isFlipped)}
            whileHover={{ scale: 1.05 }}
        >
            <AnimatePresence>
                {!isFlipped ? (
                    <motion.div
                        key="front"
                        className="absolute inset-0 bg-gradient-to-br from-yellow-300 to-orange-500 rounded-3xl shadow-xl overflow-hidden"
                        initial={{ rotateY: 0 }}
                        animate={{ rotateY: 0 }}
                        exit={{ rotateY: -90 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="p-6 h-full flex flex-col justify-between">
                            <div>
                                <h3 className="text-3xl font-bold text-white mb-2">{product.name}</h3>
                                <p className="text-white text-opacity-80 mb-4">{product.description}</p>
                            </div>
                            <div className="relative h-64 mb-4">
                                <Image
                                    src={product.imageUrl}
                                    alt={product.name}
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-xl"
                                />
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-2xl font-bold text-white">${product.price}</span>
                                <button className="bg-white text-orange-500 px-4 py-2 rounded-full font-bold hover:bg-orange-100 transition-colors">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        key="back"
                        className="absolute inset-0 bg-gradient-to-br from-blue-300 to-purple-500 rounded-3xl shadow-xl overflow-hidden"
                        initial={{ rotateY: 90 }}
                        animate={{ rotateY: 0 }}
                        exit={{ rotateY: 90 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="p-6 h-full flex flex-col justify-between">
                            <div>
                                <h3 className="text-3xl font-bold text-white mb-4">Vacation Inspiration</h3>
                                <div className="flex items-center mb-2">
                                    <MapPin className="w-6 h-6 text-white mr-2" />
                                    <p className="text-white text-xl">{product.vacationSpot}</p>
                                </div>
                                {product.limitedEdition && (
                                    <div className="flex items-center">
                                        <Gift className="w-6 h-6 text-white mr-2" />
                                        <p className="text-white">Limited Edition</p>
                                    </div>
                                )}
                            </div>
                            <div>
                                <p className="text-white text-opacity-80 mb-4">
                                    Immerse yourself in the spirit of {product.vacationSpot} with every step.
                                    These sandals are designed to bring the vacation vibes wherever you go!
                                </p>
                                <button className="w-full bg-white text-purple-500 py-3 rounded-full font-bold hover:bg-purple-100 transition-colors">
                                    Book Your {product.vacationSpot} Adventure
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

const VibrantSummerSandalsShowcase: React.FC = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-200 via-yellow-200 to-blue-200 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-4">
                        Vacation Vibes Collection
                    </h1>
                    <p className="text-2xl text-gray-700">Step into your dream destination</p>
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
                    className="bg-white bg-opacity-80 backdrop-blur-lg rounded-3xl shadow-xl p-8"
                >
                    <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Summer Perks</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="flex flex-col items-center text-center">
                            <Sun className="w-12 h-12 text-yellow-500 mb-4" />
                            <h3 className="text-xl font-semibold mb-2">90-Day Sunshine Guarantee</h3>
                            <p className="text-gray-600">If it rains on your vacation, we'll extend your return period!</p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <Umbrella className="w-12 h-12 text-blue-500 mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Free Beach Kit</h3>
                            <p className="text-gray-600">Get a complimentary beach towel and sunscreen with every purchase</p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <Palmtree className="w-12 h-12 text-green-500 mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Vacation Sweepstakes</h3>
                            <p className="text-gray-600">Every pair purchased enters you to win a tropical getaway!</p>
                        </div>
                    </div>
                </motion.div>

                <div className="mt-16 bg-gradient-to-r from-orange-400 to-pink-500 rounded-3xl shadow-xl p-8 text-white">
                    <h2 className="text-3xl font-bold mb-6 text-center">Shipping & Returns</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="flex items-start">
                            <Calendar className="w-8 h-8 mr-4 flex-shrink-0" />
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Express Delivery</h3>
                                <p>Free 2-day shipping on all orders. Get your vacation started ASAP!</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <Gift className="w-8 h-8 mr-4 flex-shrink-0" />
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Worry-Free Returns</h3>
                                <p>Changed your mind? Return unworn items within 90 days, no questions asked.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VibrantSummerSandalsShowcase;