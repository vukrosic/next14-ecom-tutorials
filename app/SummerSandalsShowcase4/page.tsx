"use client";

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { ChevronRight, ChevronLeft, Truck, Ruler, Star, MessageCircle } from 'lucide-react';

interface SandalProduct {
    id: number;
    name: string;
    price: number;
    description: string;
    imageUrl: string;
    rating: number;
    reviews: number;
}

const sandals = [
    {
        id: 1,
        name: 'Coastal Breeze Flip-Flops',
        price: 39.99,
        description: 'Light as a feather, perfect for beach days.',
        imageUrl: '/cargo1.webp',
        rating: 4.5,
        reviews: 128,
    },
    {
        id: 2,
        name: 'Urban Explorer Sandals',
        price: 59.99,
        description: 'Comfort meets style for city adventures.',
        imageUrl: '/cargo2.webp',
        rating: 4.7,
        reviews: 203,
    },
    {
        id: 3,
        name: 'Hiking Hero Sandals',
        price: 79.99,
        description: 'Rugged and durable for outdoor enthusiasts.',
        imageUrl: '/cargo3.jpg',
        rating: 4.8,
        reviews: 175,
    },
];

const SandalCard = ({ sandal }: { sandal: SandalProduct }) => {
    const [rotate, setRotate] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const card = e.currentTarget;
        const box = card.getBoundingClientRect();
        const x = e.clientX - box.left;
        const y = e.clientY - box.top;
        const centerX = box.width / 2;
        const centerY = box.height / 2;
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;

        setRotate({ x: rotateX, y: rotateY });
    };

    const handleMouseLeave = () => setRotate({ x: 0, y: 0 });

    return (
        <motion.div
            className="bg-white rounded-2xl shadow-lg p-6 w-80 flex-shrink-0 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            style={{
                transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
                transition: 'all 0.2s ease-out',
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <Image src={sandal.imageUrl} alt={sandal.name} width={300} height={200} className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-bold mb-2">{sandal.name}</h3>
            <p className="text-gray-600 mb-3">{sandal.description}</p>
            <div className="flex justify-between items-center mb-3">
                <span className="text-2xl font-bold text-teal-600">${sandal.price}</span>
                <div className="flex items-center">
                    <Star className="w-5 h-5 text-yellow-400 mr-1" />
                    <span>{sandal.rating} ({sandal.reviews})</span>
                </div>
            </div>
            <button className="w-full bg-teal-500 text-white py-2 rounded-lg hover:bg-teal-600 transition-colors">
                Add to Cart
            </button>
        </motion.div>
    );
};

const ShippingCalculator = () => {
    const [zipCode, setZipCode] = useState('');
    const [shippingCost, setShippingCost] = useState(null);

    const calculateShipping = () => {
        // Simulated shipping calculation
        const cost = Math.floor(Math.random() * 10) + 5;
        setShippingCost(cost);
    };

    return (
        <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-bold mb-4">Shipping Calculator</h3>
            <div className="flex space-x-2">
                <input
                    type="text"
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                    placeholder="Enter ZIP code"
                    className="flex-grow px-3 py-2 border rounded-md"
                />
                <button
                    onClick={calculateShipping}
                    className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600"
                >
                    Calculate
                </button>
            </div>
            {shippingCost !== null && (
                <p className="mt-3">Estimated shipping cost: ${shippingCost.toFixed(2)}</p>
            )}
        </div>
    );
};

const SummerSandalsShowcase = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef });
    const headerY = useTransform(scrollYProgress, [0, 0.2], ['0%', '-100%']);

    const parallaxy1 = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
    const parallaxy2 = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
    const parallaxy3 = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-100 via-orange-100 to-yellow-100" ref={containerRef}>
            <motion.header
                className="fixed top-0 left-0 right-0 bg-white bg-opacity-80 backdrop-blur-md z-10 p-4"
                style={{ y: headerY }}
            >
                <h1 className="text-4xl font-bold text-center text-teal-600">Summer Soles</h1>
            </motion.header>

            <main className="pt-24 px-8">
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-center mb-8">Discover Your Perfect Summer Companion</h2>
                    <div className="relative overflow-hidden" style={{ height: '500px' }}>
                        <motion.div style={{ y: parallaxy1 }} className="absolute inset-0">
                            <Image src="/cargo1.webp" alt="Beach background" layout="fill" objectFit="cover" />
                        </motion.div>
                        <motion.div style={{ y: parallaxy2 }} className="absolute inset-0">
                            <Image src="/cargo1.webp" alt="Palm trees" layout="fill" objectFit="cover" />
                        </motion.div>
                        <motion.div style={{ y: parallaxy3 }} className="absolute inset-0 flex items-center justify-center">
                            <h3 className="text-5xl font-bold text-white text-center drop-shadow-lg">
                                Step into Summer
                            </h3>
                        </motion.div>
                    </div>
                </section>

                <section className="mb-16">
                    <h2 className="text-3xl font-bold mb-8">Our Collection</h2>
                    <div className="flex space-x-6 overflow-x-auto pb-6">
                        {sandals.map((sandal) => (
                            <SandalCard key={sandal.id} sandal={sandal} />
                        ))}
                    </div>
                </section>

                <section className="mb-16 grid md:grid-cols-2 gap-8">
                    <ShippingCalculator />
                    <div className="bg-white rounded-lg p-6 shadow-md">
                        <h3 className="text-lg font-bold mb-4">Size Guide</h3>
                        <p className="mb-4">Find your perfect fit with our easy-to-use size chart:</p>
                        <Image src="/cargo1.webp" alt="Sandal size chart" width={400} height={200} />
                    </div>
                </section>

                <section className="mb-16">
                    <h2 className="text-3xl font-bold mb-8">What Our Customers Say</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="bg-white rounded-lg p-6 shadow-md">
                                <div className="flex items-center mb-4">
                                    <Star className="w-5 h-5 text-yellow-400 mr-1" />
                                    <Star className="w-5 h-5 text-yellow-400 mr-1" />
                                    <Star className="w-5 h-5 text-yellow-400 mr-1" />
                                    <Star className="w-5 h-5 text-yellow-400 mr-1" />
                                    <Star className="w-5 h-5 text-yellow-400" />
                                </div>
                                <p className="text-gray-600 mb-2">"These sandals are amazing! So comfortable and stylish."</p>
                                <p className="font-bold">- Happy Customer {i}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="mb-16">
                    <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {[
                            { q: "How long does shipping take?", a: "Standard shipping takes 3-5 business days." },
                            { q: "What's your return policy?", a: "We offer free returns within 30 days of purchase." },
                            { q: "Are these sandals waterproof?", a: "Our sandals are water-resistant, perfect for beach use." },
                        ].map((faq, index) => (
                            <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                                <h4 className="font-bold mb-2">{faq.q}</h4>
                                <p className="text-gray-600">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            <footer className="bg-teal-600 text-white py-8 px-8">
                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
                    <div>
                        <h4 className="font-bold text-lg mb-4">About Us</h4>
                        <p>Bringing comfort and style to your summer adventures since 2010.</p>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg mb-4">Contact</h4>
                        <p>Email: info@summersoles.com</p>
                        <p>Phone: (555) 123-4567</p>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg mb-4">Follow Us</h4>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-yellow-300">Facebook</a>
                            <a href="#" className="hover:text-yellow-300">Instagram</a>
                            <a href="#" className="hover:text-yellow-300">Twitter</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default SummerSandalsShowcase;