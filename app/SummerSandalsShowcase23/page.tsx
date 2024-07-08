"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ShoppingBag, Ruler, Recycle, Truck } from 'lucide-react';

interface Size {
    name: string;
    inStock: boolean;
}

interface Color {
    name: string;
    hex: string;
}

const CargoPantsShowcase: React.FC = () => {
    const [selectedSize, setSelectedSize] = useState<string | null>(null);
    const [selectedColor, setSelectedColor] = useState<string>('Olive Green');
    const [isDetailsOpen, setIsDetailsOpen] = useState<boolean>(false);

    const sizes: Size[] = [
        { name: 'S', inStock: true },
        { name: 'M', inStock: true },
        { name: 'L', inStock: false },
        { name: 'XL', inStock: true },
        { name: 'XXL', inStock: true },
    ];

    const colors: Color[] = [
        { name: 'Olive Green', hex: '#556B2F' },
        { name: 'Khaki', hex: '#C3B091' },
        { name: 'Black', hex: '#000000' },
        { name: 'Navy Blue', hex: '#000080' },
    ];

    const features = [
        { icon: <Ruler size={20} />, text: 'Regular fit with tapered leg' },
        { icon: <Recycle size={20} />, text: 'Made from 100% organic cotton' },
        { icon: <Truck size={20} />, text: 'Free shipping on orders over $100' },
    ];

    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-7xl mx-auto">
                <div className="bg-white shadow-xl rounded-lg overflow-hidden">
                    <div className="md:flex">
                        {/* Image Section */}
                        <div className="md:w-1/2">
                            <div className="relative h-96 md:h-full">
                                <Image
                                    src="/CargoPantsProductPage.webp"
                                    alt="Cargo Pants"
                                    layout="fill"
                                    objectFit="cover"
                                    className="absolute inset-0"
                                />
                            </div>
                        </div>

                        {/* Content Section */}
                        <div className="md:w-1/2 p-8">
                            <h1 className="text-3xl font-bold text-gray-900 mb-2">Urban Explorer Cargo Pants</h1>
                            <p className="text-gray-500 mb-4">Versatile style meets functional design</p>

                            <div className="flex items-baseline mb-6">
                                <span className="text-2xl font-semibold text-gray-900">$89.99</span>
                                <span className="ml-2 text-sm text-gray-500 line-through">$119.99</span>
                            </div>

                            {/* Color Selection */}
                            <div className="mb-6">
                                <h2 className="text-sm font-medium text-gray-900 mb-2">Color</h2>
                                <div className="flex space-x-2">
                                    {colors.map((color) => (
                                        <button
                                            key={color.name}
                                            onClick={() => setSelectedColor(color.name)}
                                            className={`w-8 h-8 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 ${selectedColor === color.name ? 'ring-2 ring-gray-900' : ''
                                                }`}
                                            style={{ backgroundColor: color.hex }}
                                            aria-label={color.name}
                                        />
                                    ))}
                                </div>
                                <p className="mt-2 text-sm text-gray-500">{selectedColor}</p>
                            </div>

                            {/* Size Selection */}
                            <div className="mb-6">
                                <h2 className="text-sm font-medium text-gray-900 mb-2">Size</h2>
                                <div className="grid grid-cols-5 gap-2">
                                    {sizes.map((size) => (
                                        <button
                                            key={size.name}
                                            onClick={() => setSelectedSize(size.name)}
                                            className={`py-2 text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 ${selectedSize === size.name
                                                ? 'bg-gray-900 text-white'
                                                : 'bg-gray-200 text-gray-900'
                                                } ${!size.inStock ? 'opacity-50 cursor-not-allowed' : ''}`}
                                            disabled={!size.inStock}
                                        >
                                            {size.name}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Add to Cart Button */}
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full bg-gray-900 text-white py-3 px-4 rounded-md flex items-center justify-center space-x-2 hover:bg-gray-800 transition duration-300"
                            >
                                <ShoppingBag size={20} />
                                <span>Add to Cart</span>
                            </motion.button>

                            {/* Features */}
                            <div className="mt-8">
                                <h2 className="text-sm font-medium text-gray-900 mb-4">Features</h2>
                                <ul className="space-y-2">
                                    {features.map((feature, index) => (
                                        <li key={index} className="flex items-center space-x-3 text-sm text-gray-500">
                                            {feature.icon}
                                            <span>{feature.text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Product Details */}
                            <div className="mt-8 border-t pt-8">
                                <button
                                    onClick={() => setIsDetailsOpen(!isDetailsOpen)}
                                    className="flex items-center justify-between w-full text-left focus:outline-none"
                                >
                                    <span className="text-sm font-medium text-gray-900">Product Details</span>
                                    <ChevronDown
                                        size={20}
                                        className={`transform transition-transform duration-300 ${isDetailsOpen ? 'rotate-180' : ''
                                            }`}
                                    />
                                </button>
                                <AnimatePresence>
                                    {isDetailsOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="mt-4 text-sm text-gray-500"
                                        >
                                            <p>
                                                Our Urban Explorer Cargo Pants are designed for the modern adventurer. Crafted from
                                                durable, organic cotton, these pants feature multiple pockets for all your essentials.
                                                The tapered leg provides a contemporary silhouette, making them perfect for both outdoor
                                                activities and casual city wear.
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CargoPantsShowcase;