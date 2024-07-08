"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Droplets, Leaf, Recycle, Heart, Truck } from 'lucide-react';

const sandals = [
    {
        id: 1,
        name: 'EcoStride Breeze',
        price: 79.99,
        description: 'Featherlight comfort with a conscience.',
        imageUrl: '/cargo1.webp',
        features: ['Recycled materials', 'Ultra-lightweight', 'Breathable design'],
        color: 'Seafoam Green',
    },
    {
        id: 2,
        name: 'SoleSurfer Pro',
        price: 94.99,
        description: 'Ride the waves of style and comfort.',
        imageUrl: '/cargo2.webp',
        features: ['Water-resistant', 'Quick-dry technology', 'Ergonomic footbed'],
        color: 'Coral Sunset',
    },
    {
        id: 3,
        name: 'ZenStep Oasis',
        price: 109.99,
        description: 'Your personal paradise, everywhere you go.',
        imageUrl: '/cargo3.jpg',
        features: ['Pressure-point cushioning', 'Antimicrobial', 'Adjustable straps'],
        color: 'Desert Sand',
    },
];

const FeatureIcon = ({ feature }: { feature: string }) => {
    const iconMap = {
        'Recycled materials': <Recycle className="w-5 h-5" />,
        'Ultra-lightweight': <Leaf className="w-5 h-5" />,
        'Breathable design': <Sun className="w-5 h-5" />,
        'Water-resistant': <Droplets className="w-5 h-5" />,
        'Quick-dry technology': <Sun className="w-5 h-5" />,
        'Ergonomic footbed': <Heart className="w-5 h-5" />,
        'Pressure-point cushioning': <Heart className="w-5 h-5" />,
        'Antimicrobial': <Leaf className="w-5 h-5" />,
        'Adjustable straps': <Recycle className="w-5 h-5" />,
    };

    return (
        <div className="flex items-center space-x-2 text-teal-700">
            {iconMap[feature] || <Sun className="w-5 h-5" />}
            <span className="text-sm">{feature}</span>
        </div>
    );
};

const ProductCard = ({ product, isActive, onClick }) => (
    <motion.div
        className={`cursor-pointer ${isActive ? 'bg-teal-50' : 'bg-white'} rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300`}
        onClick={onClick}
        layoutId={`card-container-${product.id}`}
    >
        <motion.div className="relative h-48" layoutId={`card-image-container-${product.id}`}>
            <Image
                src={product.imageUrl}
                alt={product.name}
                layout="fill"
                objectFit="cover"
            />
        </motion.div>
        <motion.div className="p-4" layoutId={`card-content-${product.id}`}>
            <motion.h3 className="text-lg font-semibold text-teal-900" layoutId={`card-title-${product.id}`}>{product.name}</motion.h3>
            <motion.p className="text-teal-600 font-bold" layoutId={`card-price-${product.id}`}>${product.price}</motion.p>
        </motion.div>
    </motion.div>
);

const ExpandedCard = ({ product, onClose }) => (
    <motion.div
        layoutId={`card-container-${product.id}`}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
    >
        <motion.div
            className="bg-white rounded-xl overflow-hidden shadow-2xl max-w-2xl w-full"
            layoutId={`card-content-${product.id}`}
        >
            <motion.div className="relative h-64" layoutId={`card-image-container-${product.id}`}>
                <Image
                    src={product.imageUrl}
                    alt={product.name}
                    layout="fill"
                    objectFit="cover"
                />
            </motion.div>
            <div className="p-6">
                <motion.h2 className="text-2xl font-bold text-teal-900 mb-2" layoutId={`card-title-${product.id}`}>{product.name}</motion.h2>
                <motion.p className="text-xl text-teal-600 font-semibold mb-4" layoutId={`card-price-${product.id}`}>${product.price}</motion.p>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <p className="text-teal-700 font-semibold mb-2">Color: {product.color}</p>
                <div className="mb-4">
                    <h4 className="font-semibold text-teal-900 mb-2">Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                        {product.features.map((feature, index) => (
                            <FeatureIcon key={index} feature={feature} />
                        ))}
                    </div>
                </div>
                <button className="w-full bg-teal-500 text-white py-3 rounded-lg font-bold hover:bg-teal-600 transition-colors">
                    Add to Cart
                </button>
            </div>
            <button
                onClick={onClose}
                className="absolute top-4 right-4 text-teal-900 hover:text-teal-700"
            >
                ✕
            </button>
        </motion.div>
    </motion.div>
);

const ShippingInfo = () => (
    <div className="bg-teal-50 rounded-lg p-6">
        <h3 className="text-xl font-bold mb-4 text-teal-900 flex items-center">
            <Truck className="w-6 h-6 mr-2 text-teal-500" />
            Shipping & Returns
        </h3>
        <ul className="space-y-2 text-teal-700">
            <li>Free carbon-neutral shipping on orders over $150</li>
            <li>Express delivery available for $9.99</li>
            <li>45-day comfort guarantee with free returns</li>
            <li>Virtual try-on available through our mobile app</li>
        </ul>
    </div>
);

const SummerSandalsShowcase = () => {
    const [selectedId, setSelectedId] = useState(null);

    return (
        <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-green-50 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-5xl font-extrabold text-center mb-4 text-teal-900"
                >
                    Eco-Chic Summer Soles
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-xl text-center mb-16 text-teal-700"
                >
                    Where sustainability meets style for your summer adventures
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {sandals.map((sandal) => (
                        <ProductCard
                            key={sandal.id}
                            product={sandal}
                            isActive={selectedId === sandal.id}
                            onClick={() => setSelectedId(sandal.id)}
                        />
                    ))}
                </div>

                <AnimatePresence>
                    {selectedId && (
                        <ExpandedCard
                            key="expanded-card"
                            product={sandals.find(s => s.id === selectedId)}
                            onClose={() => setSelectedId(null)}
                        />
                    )}
                </AnimatePresence>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    <ShippingInfo />
                    <div className="bg-white rounded-lg p-6 shadow-md">
                        <h3 className="text-xl font-bold mb-4 text-teal-900">Our Eco Commitment</h3>
                        <p className="text-teal-700 mb-4">
                            We're dedicated to reducing our environmental footprint. Our sandals are made with recycled and sustainable materials, and we've partnered with global initiatives to offset our carbon emissions.
                        </p>
                        <button className="bg-teal-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-teal-600 transition-colors">
                            Learn More
                        </button>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                >
                    <h2 className="text-3xl font-bold mb-4 text-teal-900">Join the Eco-Chic Revolution</h2>
                    <p className="text-xl text-teal-700 mb-8">Step into a greener future with style and comfort.</p>
                    <button className="bg-teal-500 text-white text-lg font-semibold px-8 py-3 rounded-full hover:bg-teal-600 transition-colors">
                        Shop All Eco-Friendly Styles
                    </button>
                </motion.div>
            </div>
        </div>
    );
};

export default SummerSandalsShowcase;