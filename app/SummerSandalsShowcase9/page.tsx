"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Truck, Clock, Star } from 'lucide-react';

const sandals = [
    {
        id: 1,
        name: 'Sunset Stroller',
        price: 79.99,
        description: 'Embrace the warmth of summer sunsets with every step.',
        imageUrl: '/cargo1.webp',
        features: ['Memory foam insole', 'Adjustable straps', 'Coral-inspired design'],
    },
    {
        id: 2,
        name: 'Ocean Breeze',
        price: 89.99,
        description: 'Feel the cool ocean breeze between your toes.',
        imageUrl: '/cargo2.webp',
        features: ['Water-resistant', 'Non-slip sole', 'Recycled materials'],
    },
    {
        id: 3,
        name: 'Tropical Paradise',
        price: 99.99,
        description: 'Transport yourself to a tropical paradise with every wear.',
        imageUrl: '/sandals3.webp',
        features: ['Bamboo fabric lining', 'Orthopedic support', 'Tropical print'],
    },
];

const FeatureBadge = ({ feature }) => (
    <span className="inline-block bg-teal-100 text-teal-800 text-xs px-2 py-1 rounded-full mr-2 mb-2">
        {feature}
    </span>
);

const ProductCard = ({ product, onSelect }) => (
    <motion.div
        className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
        whileHover={{ y: -5 }}
    >
        <div className="relative h-64">
            <Image
                src={product.imageUrl}
                alt={product.name}
                layout="fill"
                objectFit="cover"
            />
        </div>
        <div className="p-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">{product.name}</h3>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <div className="mb-4">
                {product.features.map((feature, index) => (
                    <FeatureBadge key={index} feature={feature} />
                ))}
            </div>
            <div className="flex justify-between items-center">
                <span className="text-3xl font-bold text-teal-600">${product.price}</span>
                <button
                    onClick={() => onSelect(product)}
                    className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300"
                >
                    View Details
                </button>
            </div>
        </div>
    </motion.div>
);

const ShippingInfo = () => (
    <div className="bg-teal-50 rounded-lg p-6 mt-12">
        <h2 className="text-2xl font-semibold text-teal-800 mb-4">Shipping Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center">
                <Truck className="w-8 h-8 text-teal-500 mr-3" />
                <div>
                    <h3 className="font-semibold text-teal-700">Free Shipping</h3>
                    <p className="text-teal-600">On orders over $100</p>
                </div>
            </div>
            <div className="flex items-center">
                <Clock className="w-8 h-8 text-teal-500 mr-3" />
                <div>
                    <h3 className="font-semibold text-teal-700">Fast Delivery</h3>
                    <p className="text-teal-600">2-5 business days</p>
                </div>
            </div>
            <div className="flex items-center">
                <Star className="w-8 h-8 text-teal-500 mr-3" />
                <div>
                    <h3 className="font-semibold text-teal-700">Easy Returns</h3>
                    <p className="text-teal-600">30-day return policy</p>
                </div>
            </div>
        </div>
    </div>
);

const ProductModal = ({ product, onClose }) => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
        onClick={onClose}
    >
        <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            className="bg-white rounded-lg p-8 max-w-2xl w-full"
            onClick={(e) => e.stopPropagation()}
        >
            <div className="flex justify-between items-start mb-6">
                <h2 className="text-3xl font-bold text-gray-800">{product.name}</h2>
                <button
                    onClick={onClose}
                    className="text-gray-500 hover:text-gray-700"
                >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative h-64 md:h-auto">
                    <Image
                        src={product.imageUrl}
                        alt={product.name}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                    />
                </div>
                <div>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <div className="mb-4">
                        {product.features.map((feature, index) => (
                            <FeatureBadge key={index} feature={feature} />
                        ))}
                    </div>
                    <p className="text-3xl font-bold text-teal-600 mb-4">${product.price}</p>
                    <button className="w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300">
                        Add to Cart
                    </button>
                </div>
            </div>
        </motion.div>
    </motion.div>
);

const SummerSandalsShowcase = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);

    return (
        <div className="min-h-screen bg-gradient-to-br from-teal-400 to-blue-500 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl font-extrabold text-white mb-4">
                        Summer Bliss Sandals
                    </h1>
                    <p className="text-xl text-white opacity-90">
                        Step into comfort and style this summer
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {sandals.map((sandal) => (
                        <ProductCard
                            key={sandal.id}
                            product={sandal}
                            onSelect={setSelectedProduct}
                        />
                    ))}
                </div>

                <ShippingInfo />

                <AnimatePresence>
                    {selectedProduct && (
                        <ProductModal
                            product={selectedProduct}
                            onClose={() => setSelectedProduct(null)}
                        />
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default SummerSandalsShowcase;