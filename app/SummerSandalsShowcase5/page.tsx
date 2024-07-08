"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Truck, Star, RefreshCcw, Shield } from 'lucide-react';

const sandals = [
    {
        id: 1,
        name: 'Ocean Breeze Flip-Flops',
        price: 39.99,
        description: 'Lightweight and breezy, perfect for beach days.',
        imageUrl: '/cargo1.webp',
        color: 'Aqua Blue',
        material: 'Recycled Ocean Plastic',
    },
    {
        id: 2,
        name: 'Sunset Stroll Sandals',
        price: 54.99,
        description: 'Comfortable enough for long walks on the beach.',
        imageUrl: '/cargo2.webp',
        color: 'Coral Pink',
        material: 'Vegan Leather',
    },
    {
        id: 3,
        name: 'Adventure Trail Hikers',
        price: 79.99,
        description: 'Durable sandals for the outdoor enthusiast.',
        imageUrl: '/sandals3.webp',
        color: 'Forest Green',
        material: 'Waterproof Nubuck',
    },
];

const FeatureCard = ({ icon, title, description }) => (
    <motion.div
        className="bg-white p-6 rounded-lg shadow-md"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
    >
        <div className="text-emerald-500 mb-4">{icon}</div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </motion.div>
);

const ProductCard = ({ product }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <motion.div
            className="bg-white rounded-xl overflow-hidden shadow-lg"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
        >
            <AnimatePresence>
                {!isFlipped ? (
                    <motion.div
                        key="front"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <Image
                            src={product.imageUrl}
                            alt={product.name}
                            width={400}
                            height={300}
                            className="w-full h-64 object-cover"
                        />
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                            <p className="text-gray-600 mb-4">{product.description}</p>
                            <div className="flex justify-between items-center">
                                <span className="text-2xl font-bold text-emerald-500">${product.price}</span>
                                <button
                                    onClick={() => setIsFlipped(true)}
                                    className="bg-emerald-500 text-white px-4 py-2 rounded-full hover:bg-emerald-600 transition-colors"
                                >
                                    View Details
                                </button>
                            </div>
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        key="back"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="p-6 h-full flex flex-col justify-between"
                    >
                        <div>
                            <h3 className="text-xl font-semibold mb-4">{product.name}</h3>
                            <p className="text-gray-600 mb-2"><strong>Color:</strong> {product.color}</p>
                            <p className="text-gray-600 mb-2"><strong>Material:</strong> {product.material}</p>
                            <p className="text-gray-600 mb-4">{product.description}</p>
                        </div>
                        <button
                            onClick={() => setIsFlipped(false)}
                            className="bg-emerald-500 text-white px-4 py-2 rounded-full hover:bg-emerald-600 transition-colors self-end"
                        >
                            Back to Image
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

const SummerSandalsShowcase = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-5xl font-extrabold text-center mb-4 text-emerald-800"
                >
                    Step into Summer
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-xl text-center mb-16 text-emerald-600"
                >
                    Discover comfort, style, and sustainability in every step
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {sandals.map((sandal) => (
                        <ProductCard key={sandal.id} product={sandal} />
                    ))}
                </div>

                <div className="bg-emerald-800 text-white py-16 px-4 rounded-3xl mb-16">
                    <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Our Sandals?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <FeatureCard
                            icon={<Truck size={32} />}
                            title="Free Express Shipping"
                            description="Get your sandals delivered in 2-3 business days, absolutely free!"
                        />
                        <FeatureCard
                            icon={<Star size={32} />}
                            title="Premium Quality"
                            description="Handcrafted with the finest materials for lasting comfort and style."
                        />
                        <FeatureCard
                            icon={<RefreshCcw size={32} />}
                            title="30-Day Returns"
                            description="Not happy? Return within 30 days for a full refund, no questions asked."
                        />
                        <FeatureCard
                            icon={<Shield size={32} />}
                            title="1-Year Warranty"
                            description="Our sandals are built to last, backed by our comprehensive warranty."
                        />
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                >
                    <h2 className="text-3xl font-bold mb-4 text-emerald-800">Ready to Experience Summer Comfort?</h2>
                    <p className="text-xl text-emerald-600 mb-8">Join thousands of happy customers and find your perfect pair today!</p>
                    <button className="bg-emerald-500 text-white text-lg font-semibold px-8 py-3 rounded-full hover:bg-emerald-600 transition-colors">
                        Shop All Sandals
                    </button>
                </motion.div>
            </div>
        </div>
    );
};

export default SummerSandalsShowcase;