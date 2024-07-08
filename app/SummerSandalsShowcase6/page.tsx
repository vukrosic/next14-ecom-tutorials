"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Droplets, Leaf, Truck } from 'lucide-react';

const sandals = [
    {
        id: 1,
        name: 'SunKiss Slides',
        price: 49.99,
        description: 'Effortless style meets supreme comfort.',
        imageUrl: '/cargo1.webp',
        features: ['UV-resistant', 'Antimicrobial', 'Eco-friendly'],
    },
    {
        id: 2,
        name: 'AquaFlex Flippers',
        price: 64.99,
        description: 'From beach to boardwalk in a splash.',
        imageUrl: '/cargo2.webp',
        features: ['Quick-dry', 'Non-slip sole', 'Salt-water resistant'],
    },
    {
        id: 3,
        name: 'TerraTrek Sandals',
        price: 89.99,
        description: 'Adventure-ready comfort for any terrain.',
        imageUrl: '/sandals3.webp',
        features: ['All-terrain grip', 'Shock-absorbing', 'Adjustable fit'],
    },
];

const FeatureIcon = ({ feature }) => {
    const iconMap = {
        'UV-resistant': <Sun className="w-6 h-6" />,
        'Antimicrobial': <Droplets className="w-6 h-6" />,
        'Eco-friendly': <Leaf className="w-6 h-6" />,
        'Quick-dry': <Droplets className="w-6 h-6" />,
        'Non-slip sole': <Leaf className="w-6 h-6" />,
        'Salt-water resistant': <Droplets className="w-6 h-6" />,
        'All-terrain grip': <Leaf className="w-6 h-6" />,
        'Shock-absorbing': <Leaf className="w-6 h-6" />,
        'Adjustable fit': <Sun className="w-6 h-6" />,
    };

    return (
        <div className="flex items-center space-x-2 text-orange-700">
            {iconMap[feature] || <Sun className="w-6 h-6" />}
            <span className="text-sm">{feature}</span>
        </div>
    );
};

const ProductCard = ({ product }) => {
    return (
        <motion.div
            className="bg-white rounded-3xl overflow-hidden shadow-lg"
            whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
            transition={{ type: "spring", stiffness: 300 }}
        >
            <div className="relative">
                <Image
                    src={product.imageUrl}
                    alt={product.name}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    ${product.price}
                </div>
            </div>
            <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-orange-900">{product.name}</h3>
                <p className="text-orange-700 mb-4">{product.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {product.features.map((feature, index) => (
                        <FeatureIcon key={index} feature={feature} />
                    ))}
                </div>
                <button className="w-full bg-orange-500 text-white py-3 rounded-xl font-bold hover:bg-orange-600 transition-colors">
                    Add to Cart
                </button>
            </div>
        </motion.div>
    );
};

const ShippingInfo = () => (
    <div className="bg-orange-100 rounded-3xl p-8 text-orange-900">
        <h3 className="text-2xl font-bold mb-4 flex items-center">
            <Truck className="w-8 h-8 mr-2 text-orange-500" />
            Shipping Information
        </h3>
        <ul className="space-y-2">
            <li>Free standard shipping on orders over $75</li>
            <li>Express shipping available for $12.99</li>
            <li>International shipping to select countries</li>
            <li>30-day hassle-free returns</li>
        </ul>
    </div>
);

const SummerSandalsShowcase = () => {
    const [currentProduct, setCurrentProduct] = useState(0);

    const nextProduct = () => {
        setCurrentProduct((prev) => (prev + 1) % sandals.length);
    };

    const prevProduct = () => {
        setCurrentProduct((prev) => (prev - 1 + sandals.length) % sandals.length);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-100 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-6xl font-extrabold text-center mb-4 text-orange-900"
                >
                    Summer Soles
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-2xl text-center mb-16 text-orange-700"
                >
                    Embrace the heat with cool comfort
                </motion.p>

                <div className="mb-16">
                    <div className="relative">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentProduct}
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -100 }}
                                transition={{ duration: 0.5 }}
                            >
                                <ProductCard product={sandals[currentProduct]} />
                            </motion.div>
                        </AnimatePresence>
                        <button
                            onClick={prevProduct}
                            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
                        >
                            ←
                        </button>
                        <button
                            onClick={nextProduct}
                            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
                        >
                            →
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    <ShippingInfo />
                    <div className="bg-orange-500 rounded-3xl p-8 text-white">
                        <h3 className="text-2xl font-bold mb-4">Why Choose Summer Soles?</h3>
                        <ul className="space-y-2">
                            <li>Handcrafted with premium, sustainable materials</li>
                            <li>Designed for all-day comfort and support</li>
                            <li>Perfect for beach, city, and everything in between</li>
                            <li>1-year warranty on all products</li>
                        </ul>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                >
                    <h2 className="text-3xl font-bold mb-4 text-orange-900">Ready to step into summer?</h2>
                    <p className="text-xl text-orange-700 mb-8">Join our community of happy feet!</p>
                    <button className="bg-orange-500 text-white text-lg font-semibold px-8 py-3 rounded-full hover:bg-orange-600 transition-colors">
                        Explore All Styles
                    </button>
                </motion.div>
            </div>
        </div>
    );
};

export default SummerSandalsShowcase;