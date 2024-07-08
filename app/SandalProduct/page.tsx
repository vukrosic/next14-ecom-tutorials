"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Truck, Leaf, Info } from 'lucide-react';

interface SandalProduct {
    id: number;
    name: string;
    price: number;
    description: string;
    imageUrl: string;
    material: string;
    sustainability: string;
}

const sandals: SandalProduct[] = [
    {
        id: 1,
        name: 'EcoStride Sandal',
        price: 79.99,
        description: 'Minimalist design meets maximum comfort.',
        imageUrl: '/cargo1.webp',
        material: 'Recycled ocean plastic and natural rubber',
        sustainability: 'Carbon-neutral manufacturing process',
    },
    {
        id: 2,
        name: 'Urban Glide Sandal',
        price: 89.99,
        description: 'Sleek urban style for the modern explorer.',
        imageUrl: '/cargo2.webp',
        material: 'Vegan leather and recycled foam',
        sustainability: 'Water-based adhesives and eco-friendly dyes',
    },
    {
        id: 3,
        name: 'Zen Comfort Sandal',
        price: 69.99,
        description: 'Embrace serenity with every step.',
        imageUrl: '/cargo3.jpg',
        material: 'Organic cotton and cork',
        sustainability: '100% biodegradable packaging',
    },
];

const ProductCard: React.FC<{ product: SandalProduct }> = ({ product }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300"
        >
            <div className="relative h-64">
                <Image
                    src={product.imageUrl}
                    alt={product.name}
                    layout="fill"
                    objectFit="cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white text-xl font-bold">{product.name}</h3>
                    <p className="text-white/80">{product.description}</p>
                </div>
            </div>
            <div className="p-4">
                <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl font-bold text-indigo-600">${product.price}</span>
                    <button className="bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition-colors">
                        Add to Cart
                    </button>
                </div>
                <div className="space-y-2">
                    <div className="flex items-center">
                        <Info className="w-5 h-5 mr-2 text-gray-500" />
                        <span className="text-sm text-gray-600">{product.material}</span>
                    </div>
                    <div className="flex items-center">
                        <Leaf className="w-5 h-5 mr-2 text-green-500" />
                        <span className="text-sm text-gray-600">{product.sustainability}</span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const SandalsShowcase: React.FC = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100">
            <div className="container mx-auto px-4 py-16">
                <h1 className="text-5xl font-extrabold text-center mb-4 text-indigo-900">Eco-Luxe Sandals</h1>
                <p className="text-xl text-center mb-12 text-indigo-700">Step into sustainability without compromising style</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {sandals.map((sandal) => (
                        <ProductCard key={sandal.id} product={sandal} />
                    ))}
                </div>

                <div className="bg-white rounded-lg shadow-lg p-8">
                    <h2 className="text-3xl font-bold mb-6 text-center text-indigo-900">Our Commitment</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <Truck className="w-12 h-12 mx-auto mb-4 text-indigo-600" />
                            <h3 className="text-xl font-semibold mb-2">Carbon-Neutral Shipping</h3>
                            <p className="text-gray-600">We offset 100% of our shipping emissions to reduce our environmental impact.</p>
                        </div>
                        <div className="text-center">
                            <Leaf className="w-12 h-12 mx-auto mb-4 text-green-600" />
                            <h3 className="text-xl font-semibold mb-2">Sustainable Materials</h3>
                            <p className="text-gray-600">Our sandals are crafted from recycled and eco-friendly materials.</p>
                        </div>
                        <div className="text-center">
                            <Info className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                            <h3 className="text-xl font-semibold mb-2">Transparent Production</h3>
                            <p className="text-gray-600">We provide full visibility into our ethical manufacturing processes.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SandalsShowcase;