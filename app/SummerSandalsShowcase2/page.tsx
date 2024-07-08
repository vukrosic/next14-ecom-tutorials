"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Truck, Star, ArrowRight, ShoppingCart } from 'lucide-react';

interface SandalProduct {
    id: number;
    name: string;
    price: number;
    description: string;
    imageUrl: string;
    features: string[];
    rating: number;
}

const sandals: SandalProduct[] = [
    {
        id: 1,
        name: 'Coastal Comfort',
        price: 79.99,
        description: 'Experience the perfect blend of style and comfort for your beach adventures.',
        imageUrl: '/sandals1.webp',
        features: ['Waterproof', 'Ergonomic design', 'Reef-friendly materials'],
        rating: 4.8,
    },
    {
        id: 2,
        name: 'Urban Explorer',
        price: 89.99,
        description: 'Versatile sandals designed for city walks and impromptu beach trips alike.',
        imageUrl: '/sandals2.jpg',
        features: ['Shock-absorbing sole', 'Quick-dry straps', 'Antimicrobial footbed'],
        rating: 4.6,
    },
    {
        id: 3,
        name: 'Sunset Stroller',
        price: 69.99,
        description: 'Perfect for romantic walks along the shore as the sun sets.',
        imageUrl: '/sandals3.webp',
        features: ['Soft leather straps', 'Memory foam insole', 'Non-slip outsole'],
        rating: 4.9,
    },
];

const FeatureBadge: React.FC<{ feature: string }> = ({ feature }) => (
    <span className="bg-teal-100 text-teal-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full">
        {feature}
    </span>
);

const ProductCard: React.FC<{ product: SandalProduct }> = ({ product }) => {
    return (
        <motion.div
            className="bg-white rounded-lg overflow-hidden shadow-lg"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
        >
            <div className="relative h-64">
                <Image
                    src={product.imageUrl}
                    alt={product.name}
                    layout="fill"
                    objectFit="cover"
                />
                <div className="absolute top-2 right-2 bg-yellow-400 text-yellow-900 font-bold rounded-full p-2">
                    ${product.price}
                </div>
            </div>
            <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex items-center mb-4">
                    <Star className="w-5 h-5 text-yellow-400 mr-1" />
                    <span className="font-bold">{product.rating}</span>
                </div>
                <div className="mb-4">
                    {product.features.map((feature, index) => (
                        <FeatureBadge key={index} feature={feature} />
                    ))}
                </div>
                <motion.button
                    className="w-full bg-teal-500 text-white py-2 rounded-lg font-semibold flex items-center justify-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Add to Cart
                </motion.button>
            </div>
        </motion.div>
    );
};

const SummerSandalsShowcase: React.FC = () => {
    const [selectedTab, setSelectedTab] = useState<'products' | 'shipping'>('products');

    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-100 to-teal-100 p-8">
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-6xl mx-auto"
            >
                <h1 className="text-5xl font-extrabold text-center mb-4 text-teal-800">
                    Summer Soles Collection
                </h1>
                <p className="text-xl text-center mb-12 text-teal-600">
                    Embrace the warmth with our stylish and comfortable sandals
                </p>

                <div className="flex justify-center mb-8">
                    <motion.button
                        className={`px-6 py-2 rounded-l-full font-semibold ${selectedTab === 'products'
                            ? 'bg-teal-500 text-white'
                            : 'bg-white text-teal-500'
                            }`}
                        onClick={() => setSelectedTab('products')}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Products
                    </motion.button>
                    <motion.button
                        className={`px-6 py-2 rounded-r-full font-semibold ${selectedTab === 'shipping'
                            ? 'bg-teal-500 text-white'
                            : 'bg-white text-teal-500'
                            }`}
                        onClick={() => setSelectedTab('shipping')}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Shipping
                    </motion.button>
                </div>

                <AnimatePresence mode="wait">
                    {selectedTab === 'products' && (
                        <motion.div
                            key="products"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                                {sandals.map((sandal) => (
                                    <ProductCard key={sandal.id} product={sandal} />
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {selectedTab === 'shipping' && (
                        <motion.div
                            key="shipping"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white rounded-lg shadow-lg p-8"
                        >
                            <h2 className="text-3xl font-bold mb-6 text-teal-800">Shipping Information</h2>
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <Truck className="w-8 h-8 text-teal-500 flex-shrink-0" />
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2 text-teal-700">Free Express Shipping</h3>
                                        <p className="text-gray-600">Enjoy free express shipping on all orders over $100. Your summer sandals will be at your doorstep in 2-3 business days!</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <ArrowRight className="w-8 h-8 text-teal-500 flex-shrink-0" />
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2 text-teal-700">Easy Returns</h3>
                                        <p className="text-gray-600">Not satisfied with your purchase? Return your sandals within 30 days for a full refund. We'll even cover the return shipping!</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <Sun className="w-8 h-8 text-teal-500 flex-shrink-0" />
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2 text-teal-700">Summer Guarantee</h3>
                                        <p className="text-gray-600">We're so confident you'll love our sandals that we offer a 100-day summer guarantee. If you're not completely satisfied, we'll make it right!</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-teal-800 text-white rounded-lg p-8 shadow-lg mt-16"
                >
                    <h2 className="text-3xl font-bold mb-6 text-center">Why Choose Our Sandals?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <Sun className="w-16 h-16 mx-auto mb-4 text-yellow-400" />
                            <h3 className="text-xl font-semibold mb-2">Sun-Ready Design</h3>
                            <p className="text-teal-100">Our sandals are engineered to keep your feet cool and comfortable, even on the hottest summer days.</p>
                        </div>
                        <div className="text-center">
                            <Star className="w-16 h-16 mx-auto mb-4 text-yellow-400" />
                            <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
                            <p className="text-teal-100">Crafted with the finest materials and attention to detail, ensuring durability and style that lasts.</p>
                        </div>
                        <div className="text-center">
                            <Truck className="w-16 h-16 mx-auto mb-4 text-yellow-400" />
                            <h3 className="text-xl font-semibold mb-2">Fast & Free Shipping</h3>
                            <p className="text-teal-100">Get your perfect summer sandals delivered to your doorstep quickly and at no extra cost.</p>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default SummerSandalsShowcase;