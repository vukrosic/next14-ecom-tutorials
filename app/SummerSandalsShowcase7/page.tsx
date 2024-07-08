"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Waves, Leaf, ShoppingBag, Truck, RotateCcw } from 'lucide-react';

const sandals = [
    {
        id: 1,
        name: 'Coastal Cruiser',
        price: 59.99,
        description: 'Breezy comfort for seaside strolls.',
        imageUrl: '/cargo1.webp',
        color: 'Ocean Blue',
        material: 'Recycled Ocean Plastic',
    },
    {
        id: 2,
        name: 'Urban Oasis',
        price: 74.99,
        description: 'Stylish relief for city heat.',
        imageUrl: '/cargo2.webp',
        color: 'Desert Sand',
        material: 'Sustainable Cork',
    },
    {
        id: 3,
        name: 'Trail Blazer',
        price: 89.99,
        description: 'Rugged comfort for outdoor adventures.',
        imageUrl: '/sandals3.webp',
        color: 'Forest Green',
        material: 'Eco-friendly Rubber',
    },
];

const IconButton = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
    <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex flex-col items-center justify-center bg-purple-100 p-4 rounded-full text-purple-600 transition-colors hover:bg-purple-200"
    >
        {icon}
        <span className="text-xs mt-2">{label}</span>
    </motion.button>
);

const ProductCard = ({ product, isSelected, onClick }) => (
    <motion.div
        className={`cursor-pointer ${isSelected ? 'border-4 border-purple-500' : 'border border-gray-200'} rounded-2xl overflow-hidden shadow-lg`}
        whileHover={{ y: -5 }}
        onClick={onClick}
    >
        <Image
            src={product.imageUrl}
            alt={product.name}
            width={400}
            height={300}
            className="w-full h-48 object-cover"
        />
        <div className="p-4">
            <h3 className="text-lg font-semibold text-purple-900">{product.name}</h3>
            <p className="text-purple-600 font-bold">${product.price}</p>
        </div>
    </motion.div>
);

const ProductDetails = ({ product }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="bg-white p-6 rounded-2xl shadow-lg"
    >
        <h2 className="text-3xl font-bold text-purple-900 mb-4">{product.name}</h2>
        <p className="text-xl text-purple-600 font-semibold mb-4">${product.price}</p>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <div className="mb-4">
            <p><span className="font-semibold">Color:</span> {product.color}</p>
            <p><span className="font-semibold">Material:</span> {product.material}</p>
        </div>
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-purple-500 text-white py-3 rounded-xl font-bold hover:bg-purple-600 transition-colors"
        >
            Add to Cart
        </motion.button>
    </motion.div>
);

const ShippingInfo = () => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="bg-purple-100 rounded-2xl p-6 text-purple-900"
    >
        <h3 className="text-xl font-bold mb-4 flex items-center">
            <Truck className="w-6 h-6 mr-2 text-purple-500" />
            Shipping & Returns
        </h3>
        <ul className="space-y-2 text-sm">
            <li>Free shipping on orders over $100</li>
            <li>Express delivery available</li>
            <li>30-day no-questions-asked returns</li>
            <li>Free size exchanges</li>
        </ul>
    </motion.div>
);

const SummerSandalsShowcase = () => {
    const [selectedProduct, setSelectedProduct] = useState(sandals[0]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-5xl font-extrabold text-center mb-4 text-purple-900"
                >
                    Summer Stride Collection
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-xl text-center mb-16 text-purple-600"
                >
                    Step into the season with style and sustainability
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {sandals.map((sandal) => (
                        <ProductCard
                            key={sandal.id}
                            product={sandal}
                            isSelected={selectedProduct.id === sandal.id}
                            onClick={() => setSelectedProduct(sandal)}
                        />
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    <div className="md:col-span-2">
                        <AnimatePresence mode="wait">
                            <ProductDetails key={selectedProduct.id} product={selectedProduct} />
                        </AnimatePresence>
                    </div>
                    <div>
                        <ShippingInfo />
                    </div>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg">
                    <h2 className="text-2xl font-bold mb-6 text-purple-900 text-center">Why Choose Our Sandals?</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        <IconButton icon={<Sun className="w-8 h-8" />} label="UV Protection" />
                        <IconButton icon={<Waves className="w-8 h-8" />} label="Water Resistant" />
                        <IconButton icon={<Leaf className="w-8 h-8" />} label="Eco-Friendly" />
                        <IconButton icon={<ShoppingBag className="w-8 h-8" />} label="Stylish Design" />
                        <IconButton icon={<Truck className="w-8 h-8" />} label="Fast Shipping" />
                        <IconButton icon={<RotateCcw className="w-8 h-8" />} label="Easy Returns" />
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mt-16"
                >
                    <h2 className="text-3xl font-bold mb-4 text-purple-900">Ready to elevate your summer style?</h2>
                    <p className="text-xl text-purple-600 mb-8">Join thousands of happy customers walking in comfort and style.</p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-purple-500 text-white text-lg font-semibold px-8 py-3 rounded-full hover:bg-purple-600 transition-colors"
                    >
                        Shop All Sandals
                    </motion.button>
                </motion.div>
            </div>
        </div>
    );
};

export default SummerSandalsShowcase;