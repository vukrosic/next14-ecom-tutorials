"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, Star, Clock, Recycle, Truck } from 'lucide-react';

interface SandalProduct {
    id: number;
    name: string;
    price: number;
    story: string;
    features: string[];
    imageUrl: string;
    designInspirations: string[];
}

const sandals: SandalProduct[] = [
    {
        id: 1,
        name: 'Nebula Strider',
        price: 129.99,
        story: "Inspired by the cosmos, the Nebula Strider brings the wonder of the night sky to your feet. Each step is like walking among the stars.",
        features: ['Glow-in-the-dark constellation patterns', 'Ultra-soft cosmic foam insole', 'Gravity-defying lightweight design'],
        imageUrl: '/sandals1.webp',
        designInspirations: ['NASA space photographs', 'Bioluminescent organisms', 'Dark sky preserves'],
    },
    {
        id: 2,
        name: 'Zen Garden',
        price: 109.99,
        story: "Bringing tranquility to your summer, the Zen Garden sandals are a peaceful oasis for your feet. Find your center with every step.",
        features: ['Sand-textured footbed', 'Bamboo-derived soft straps', 'Rock garden-inspired tread pattern'],
        imageUrl: '/sandals2.jpg',
        designInspirations: ['Japanese rock gardens', 'Meditation retreats', 'Minimalist art'],
    },
    {
        id: 3,
        name: 'Urban Pulse',
        price: 139.99,
        story: "Capture the energy of the city with Urban Pulse. These sandals are for the summer adventurer who thrives in the urban jungle.",
        features: ['Graffiti-inspired color splashes', 'Shock-absorbing city-proof sole', 'Hidden transit card pocket'],
        imageUrl: '/sandals3.webp',
        designInspirations: ['Street art', 'City skylines', 'Public transportation maps'],
    },
];

const ProductShowcase: React.FC<{ product: SandalProduct }> = ({ product }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        { title: 'The Story', content: product.story },
        { title: 'Features', content: product.features },
        { title: 'Design Inspirations', content: product.designInspirations },
    ];

    return (
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="relative h-80">
                <Image
                    src={product.imageUrl}
                    alt={product.name}
                    layout="fill"
                    objectFit="cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h2 className="text-4xl font-bold text-white mb-2">{product.name}</h2>
                    <p className="text-2xl font-semibold text-yellow-400">${product.price}</p>
                </div>
            </div>
            <div className="p-6">
                <div className="mb-6">
                    <h3 className="text-2xl font-semibold mb-2">{slides[currentSlide].title}</h3>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentSlide}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="h-32"
                        >
                            {Array.isArray(slides[currentSlide].content) ? (
                                <ul className="list-disc list-inside">
                                    {slides[currentSlide].content.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            ) : (
                                <p>{slides[currentSlide].content}</p>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>
                <div className="flex justify-between items-center">
                    <button
                        onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
                        className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        className="px-6 py-2 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition-colors"
                    >
                        Add to Cart
                    </button>
                    <button
                        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
                        className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </div>
    );
};

const ModernSummerSandalsExperience: React.FC = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-100 via-red-100 to-orange-100 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-6xl font-extrabold text-gray-900 mb-4">
                        Summer Stories
                    </h1>
                    <p className="text-xl text-gray-600">Every step tells a tale. What's yours?</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {sandals.map((sandal) => (
                        <ProductShowcase key={sandal.id} product={sandal} />
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-white bg-opacity-90 backdrop-blur-lg rounded-3xl shadow-xl p-8"
                >
                    <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Our Commitments</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="flex flex-col items-center text-center">
                            <Star className="w-12 h-12 text-yellow-500 mb-4" />
                            <h3 className="text-lg font-semibold mb-2">Quality Craftsmanship</h3>
                            <p className="text-gray-600">Meticulously designed for comfort and durability</p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <Clock className="w-12 h-12 text-blue-500 mb-4" />
                            <h3 className="text-lg font-semibold mb-2">Timeless Style</h3>
                            <p className="text-gray-600">Designs that transcend fleeting trends</p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <Recycle className="w-12 h-12 text-green-500 mb-4" />
                            <h3 className="text-lg font-semibold mb-2">Eco-Conscious</h3>
                            <p className="text-gray-600">Sustainable materials and processes</p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <Truck className="w-12 h-12 text-purple-500 mb-4" />
                            <h3 className="text-lg font-semibold mb-2">Free Global Shipping</h3>
                            <p className="text-gray-600">Delivered to your doorstep, wherever you are</p>
                        </div>
                    </div>
                </motion.div>

                <div className="mt-16 text-center">
                    <h2 className="text-3xl font-bold mb-4 text-gray-800">Start Your Summer Story</h2>
                    <p className="text-xl text-gray-600 mb-8">Join our community and share your adventures</p>
                    <button className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition-colors text-lg">
                        Sign Up for Exclusive Offers
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ModernSummerSandalsExperience;