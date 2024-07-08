"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ShoppingBag, Truck, RefreshCcw, Star, Info } from 'lucide-react';

interface SandalProduct {
    id: number;
    name: string;
    price: number;
    designerQuote: string;
    description: string;
    features: string[];
    colors: string[];
    sizes: number[];
    imageUrl: string;
    relatedProducts: number[];
}

const sandals: SandalProduct[] = [
    {
        id: 1,
        name: 'Ethereal Stride',
        price: 299.99,
        designerQuote: "Inspired by the gossamer wings of dragonflies.",
        description: "Ultra-lightweight sandals crafted with innovative materials for a barely-there feel. Perfect for those who appreciate minimalist design and maximum comfort.",
        features: ["Featherlight construction", "Breathable mesh upper", "Cushioned insole", "Flexible outsole"],
        colors: ['#E0F2F1', '#B2DFDB', '#80CBC4'],
        sizes: [36, 37, 38, 39, 40, 41],
        imageUrl: '/sandals1.webp',
        relatedProducts: [2, 3],
    },
    {
        id: 2,
        name: 'Noir Elegance',
        price: 349.99,
        designerQuote: "The embodiment of midnight's allure.",
        description: "Sleek and sophisticated sandals designed for the modern urbanite. These sandals transition seamlessly from day to night, offering both style and comfort.",
        features: ["Premium leather upper", "Memory foam footbed", "Adjustable ankle strap", "Non-slip sole"],
        colors: ['#263238', '#455A64', '#607D8B'],
        sizes: [36, 37, 38, 39, 40, 41, 42],
        imageUrl: '/sandals2.jpg',
        relatedProducts: [1, 3],
    },
    {
        id: 3,
        name: 'Solar Flare',
        price: 329.99,
        designerQuote: "Capturing the essence of a sun-kissed horizon.",
        description: "Vibrant and eye-catching sandals that make a statement. Designed for the bold and adventurous, these sandals are sure to turn heads wherever you go.",
        features: ["Holographic accents", "Contoured footbed", "Adjustable straps", "Durable rubber outsole"],
        colors: ['#FFF3E0', '#FFE0B2', '#FFCC80'],
        sizes: [35, 36, 37, 38, 39, 40, 41],
        imageUrl: '/sandals3.webp',
        relatedProducts: [1, 2],
    },
];

const AvantGardeSandalsGallery: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const [selectedColor, setSelectedColor] = useState(0);
    const [selectedSize, setSelectedSize] = useState<number | null>(null);

    const paginate = (newDirection: number) => {
        setDirection(newDirection);
        setCurrentIndex((prevIndex) =>
            (prevIndex + newDirection + sandals.length) % sandals.length
        );
        setSelectedColor(0);
        setSelectedSize(null);
    };

    const currentSandal = sandals[currentIndex];

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="w-full max-w-6xl mx-auto px-4"
            >
                <h1 className="text-6xl font-extrabold text-center mb-16 text-gray-800">
                    Avant-Garde Footwear
                </h1>

                <div className="relative h-[130vh] w-full overflow-hidden rounded-3xl shadow-2xl">
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.div
                            key={currentIndex}
                            custom={direction}
                            variants={{
                                enter: (direction: number) => {
                                    return {
                                        x: direction > 0 ? 1000 : -1000,
                                        opacity: 0
                                    };
                                },
                                center: {
                                    zIndex: 1,
                                    x: 0,
                                    opacity: 1
                                },
                                exit: (direction: number) => {
                                    return {
                                        zIndex: 0,
                                        x: direction < 0 ? 1000 : -1000,
                                        opacity: 0
                                    };
                                }
                            }}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.2 }
                            }}
                            className="absolute w-full h-full flex items-center justify-center"
                            style={{ backgroundColor: currentSandal.colors[selectedColor] }}
                        >
                            <div className="flex flex-col md:flex-row items-center justify-center w-full h-full">
                                <div className="w-full md:w-1/2 flex justify-center items-center rounded-lg">
                                    <Image
                                        src={currentSandal.imageUrl}
                                        alt={currentSandal.name}
                                        width={1000}
                                        height={1000}
                                        className="object-contain max-h-[100vh] rounded-lg"
                                    />
                                </div>
                                <div className="w-full md:w-1/2 text-center md:text-left p-8">
                                    <h2 className="text-4xl font-bold mb-4">{currentSandal.name}</h2>
                                    <p className="text-xl italic mb-6">"{currentSandal.designerQuote}"</p>
                                    <p className="text-lg mb-6">{currentSandal.description}</p>
                                    <p className="text-3xl font-light mb-8">${currentSandal.price}</p>

                                    <div className="mb-6">
                                        <h3 className="text-xl font-semibold mb-2">Color</h3>
                                        <div className="flex space-x-2">
                                            {currentSandal.colors.map((color, index) => (
                                                <motion.button
                                                    key={color}
                                                    className={`w-8 h-8 rounded-full ${selectedColor === index ? 'ring-2 ring-offset-2 ring-black' : ''}`}
                                                    style={{ backgroundColor: color }}
                                                    onClick={() => setSelectedColor(index)}
                                                    whileHover={{ scale: 1.1 }}
                                                    whileTap={{ scale: 0.9 }}
                                                />
                                            ))}
                                        </div>
                                    </div>

                                    <div className="mb-6">
                                        <h3 className="text-xl font-semibold mb-2">Size</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {currentSandal.sizes.map((size) => (
                                                <motion.button
                                                    key={size}
                                                    className={`px-3 py-1 border ${selectedSize === size ? 'bg-black text-white' : 'bg-white text-black'}`}
                                                    onClick={() => setSelectedSize(size)}
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                >
                                                    {size}
                                                </motion.button>
                                            ))}
                                        </div>
                                    </div>

                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="bg-black text-white px-8 py-3 rounded-full flex items-center justify-center mb-6"
                                    >
                                        <ShoppingBag className="mr-2" />
                                        Add to Bag
                                    </motion.button>

                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Features</h3>
                                        <ul className="list-disc list-inside">
                                            {currentSandal.features.map((feature, index) => (
                                                <li key={index} className="mb-1">{feature}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    <motion.button
                        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/50 rounded-full p-2"
                        onClick={() => paginate(-1)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <ChevronLeft className="w-8 h-8" />
                    </motion.button>

                    <motion.button
                        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/50 rounded-full p-2"
                        onClick={() => paginate(1)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <ChevronRight className="w-8 h-8" />
                    </motion.button>
                </div>

                <div className="mt-16">
                    <h2 className="text-3xl font-bold mb-6">You Might Also Like</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {currentSandal.relatedProducts.map((relatedId) => {
                            const relatedProduct = sandals.find(s => s.id === relatedId);
                            if (!relatedProduct) return null;
                            return (
                                <motion.div
                                    key={relatedId}
                                    className="bg-white p-4 rounded-lg shadow-md"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <Image
                                        src={relatedProduct.imageUrl}
                                        alt={relatedProduct.name}
                                        width={200}
                                        height={200}
                                        className="w-full h-48 object-cover mb-4 rounded"
                                    />
                                    <h3 className="text-lg font-semibold mb-2">{relatedProduct.name}</h3>
                                    <p className="text-gray-600 mb-2">${relatedProduct.price}</p>
                                    <button className="bg-black text-white px-4 py-2 rounded-full text-sm">
                                        View Details
                                    </button>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="bg-white p-6 rounded-lg shadow-lg text-center"
                    >
                        <Truck className="w-12 h-12 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Worldwide Shipping</h3>
                        <p className="text-gray-600">Free shipping on all orders over $500</p>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="bg-white p-6 rounded-lg shadow-lg text-center"
                    >
                        <RefreshCcw className="w-12 h-12 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-2">30-Day Returns</h3>
                        <p className="text-gray-600">Try them on, ensure they're perfect</p>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="bg-white p-6 rounded-lg shadow-lg text-center"
                    >
                        <Star className="w-12 h-12 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Exclusive Collection</h3>
                        <p className="text-gray-600">Limited edition designs</p>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default AvantGardeSandalsGallery;