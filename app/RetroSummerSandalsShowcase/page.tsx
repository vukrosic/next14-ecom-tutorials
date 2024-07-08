"use client";

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { Sun, Truck, Music, Camera, Map, Phone, Star, Calendar, Ruler, Award } from 'lucide-react';

interface SandalProduct {
    id: number;
    name: string;
    price: number;
    description: string;
    imageUrl: string;
    neonColor: string;
    sizes: number[];
    reviews: { rating: number; comment: string; author: string }[];
}

const sandals: SandalProduct[] = [
    {
        id: 1,
        name: 'Neon Nights',
        price: 89.99,
        description: 'Light up the beach with every step. Perfect for midnight strolls and sunset parties.',
        imageUrl: '/cargo1.webp',
        neonColor: '#ff00ff',
        sizes: [6, 7, 8, 9, 10],
        reviews: [
            { rating: 5, comment: "These sandals are so rad! They're comfy and look amazing!", author: "TotallyRad80sGirl" },
            { rating: 4, comment: "Great for beach parties, but a bit loud for everyday wear.", author: "NeonLover" },
        ],
    },
    {
        id: 2,
        name: 'Retro Wave',
        price: 79.99,
        description: 'Ride the nostalgic wave of comfort. Ideal for boardwalk adventures and arcade hopping.',
        imageUrl: '/cargo2.webp',
        neonColor: '#00ffff',
        sizes: [5, 6, 7, 8, 9, 10],
        reviews: [
            { rating: 5, comment: "These sandals are like walking on a cloud from the 80s!", author: "VaporwaveVicki" },
            { rating: 3, comment: "Cool design, but they run a bit small.", author: "SynthwaveSam" },
        ],
    },
    {
        id: 3,
        name: 'Synthwave Strider',
        price: 99.99,
        description: 'Step into the future of comfort. Designed for all-day wear at summer festivals.',
        imageUrl: '/cargo3.jpg',
        neonColor: '#ffff00',
        sizes: [7, 8, 9, 10, 11],
        reviews: [
            { rating: 5, comment: "These sandals are the perfect blend of retro and modern!", author: "FuturePunk" },
            { rating: 4, comment: "Super comfortable, but the neon might be too bright for some.", author: "GlowInTheDarkGuy" },
        ],
    },
];

const featuredCollections = [
    { name: "Miami Vice Vibes", imageUrl: "/luxury-watch.png" },
    { name: "Sunset Boulevard Stroll", imageUrl: "/tap1.webp" },
    { name: "Neon Nights", imageUrl: "/summer-polo.webp" },
];

const summerPlaylists = [
    { name: "80s Beach Party", songs: ["Take On Me", "Girls Just Want to Have Fun", "Walking on Sunshine"] },
    { name: "Synthwave Summer", songs: ["Midnight City", "Sunset", "The Night"] },
    { name: "Retro Workout Mix", songs: ["Physical", "Push It", "I Wanna Dance with Somebody"] },
];

const CircularMenu: React.FC<{ setActiveSection: (section: string) => void }> = ({ setActiveSection }) => {
    return (
        <div className="fixed bottom-10 right-10 w-20 h-20">
            <motion.div
                className="absolute inset-0 bg-gray-800 rounded-full"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
            />
            {['showcase', 'tryOn', 'shipping', 'contact'].map((item, index) => (
                <motion.button
                    key={item}
                    className="absolute w-12 h-12 rounded-full flex items-center justify-center text-neon-pink"
                    style={{
                        top: `${50 - 40 * Math.cos((index * Math.PI) / 2)}%`,
                        left: `${50 + 40 * Math.sin((index * Math.PI) / 2)}%`,
                    }}
                    onClick={() => setActiveSection(item)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    {item === 'showcase' && <Sun />}
                    {item === 'tryOn' && <Camera />}
                    {item === 'shipping' && <Truck />}
                    {item === 'contact' && <Phone />}
                </motion.button>
            ))}
        </div>
    );
};

const MusicPlayer: React.FC = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentPlaylist, setCurrentPlaylist] = useState(summerPlaylists[0]);
    const [currentSongIndex, setCurrentSongIndex] = useState(0);

    const togglePlay = () => {
        setIsPlaying(!isPlaying);
    };

    const nextSong = () => {
        setCurrentSongIndex((prevIndex) => (prevIndex + 1) % currentPlaylist.songs.length);
    };

    return (
        <motion.div
            className="fixed top-5 right-5 bg-gray-800 rounded-full p-3 flex items-center space-x-2"
            whileHover={{ scale: 1.1 }}
        >
            <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={togglePlay}
            >
                <Music className={`w-8 h-8 ${isPlaying ? 'text-neon-green' : 'text-neon-pink'}`} />
            </motion.button>
            <div className="text-neon-blue text-sm">
                <p>{currentPlaylist.name}</p>
                <p>{currentPlaylist.songs[currentSongIndex]}</p>
            </div>
            <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={nextSong}
            >
                <Sun className="w-6 h-6 text-neon-yellow" />
            </motion.button>
        </motion.div>
    );
};

const ProductShowcase: React.FC = () => {
    const [selectedProduct, setSelectedProduct] = useState<SandalProduct | null>(null);
    const constraintsRef = useRef(null);

    return (
        <div className="relative">
            <motion.div
                ref={constraintsRef}
                className="overflow-hidden"
                style={{ height: '70vh' }}
            >
                <motion.div
                    drag="x"
                    dragConstraints={constraintsRef}
                    className="flex space-x-8 p-8"
                >
                    {sandals.map((sandal) => (
                        <motion.div
                            key={sandal.id}
                            className="flex-shrink-0 w-80 h-full bg-gray-800 rounded-lg overflow-hidden cursor-pointer"
                            whileHover={{ scale: 1.05 }}
                            onClick={() => setSelectedProduct(sandal)}
                        >
                            <Image
                                src={sandal.imageUrl}
                                alt={sandal.name}
                                width={320}
                                height={240}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-2xl font-bold mb-2" style={{ color: sandal.neonColor }}>
                                    {sandal.name}
                                </h3>
                                <p className="text-gray-300 mb-4">{sandal.description}</p>
                                <div className="flex justify-between items-center">
                                    <span className="text-3xl font-bold text-neon-green">${sandal.price}</span>
                                    <motion.button
                                        className="bg-neon-pink text-gray-300 px-4 py-2 rounded-full font-bold"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        Quick View
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
            <AnimatePresence>
                {selectedProduct && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
                        onClick={() => setSelectedProduct(null)}
                    >
                        <motion.div
                            className="bg-gray-800 p-8 rounded-lg max-w-2xl w-full"
                            onClick={(e) => e.stopPropagation()}
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.9 }}
                        >
                            <h2 className="text-3xl font-bold mb-4" style={{ color: selectedProduct.neonColor }}>
                                {selectedProduct.name}
                            </h2>
                            <Image
                                src={selectedProduct.imageUrl}
                                alt={selectedProduct.name}
                                width={400}
                                height={300}
                                className="w-full h-64 object-cover mb-4 rounded-lg"
                            />
                            <p className="text-gray-300 mb-4">{selectedProduct.description}</p>
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-3xl font-bold text-neon-green">${selectedProduct.price}</span>
                                <div className="flex space-x-2">
                                    {selectedProduct.sizes.map((size) => (
                                        <button
                                            key={size}
                                            className="bg-gray-700 text-white px-3 py-1 rounded-full hover:bg-neon-blue"
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <motion.button
                                className="w-full bg-neon-pink text-gray-300 py-3 rounded-full font-bold text-lg"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Add to Cart
                            </motion.button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FeaturedCollection: React.FC = () => {
    return (
        <div className="py-16">
            <h2 className="text-4xl font-bold mb-8 text-center text-neon-blue">Featured Collections</h2>
            <div className="flex space-x-8 overflow-x-auto pb-8">
                {featuredCollections.map((collection, index) => (
                    <motion.div
                        key={collection.name}
                        className="flex-shrink-0 w-64 h-96 relative rounded-lg overflow-hidden"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                    >
                        <Image
                            src={collection.imageUrl}
                            alt={collection.name}
                            layout="fill"
                            objectFit="cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                            <h3 className="text-2xl font-bold text-white">{collection.name}</h3>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

const ReviewStars: React.FC<{ rating: number }> = ({ rating }) => {
    return (
        <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
                <motion.div
                    key={star}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: star * 0.1 }}
                >
                    <Star
                        className={`w-5 h-5 ${star <= rating ? 'text-neon-yellow' : 'text-gray-600'
                            }`}
                        fill={star <= rating ? '#ffff00' : 'none'}
                    />
                </motion.div>
            ))}
        </div>
    );
};

const CustomerReviews: React.FC = () => {
    return (
        <div className="py-16">
            <h2 className="text-4xl font-bold mb-8 text-center text-neon-pink">Customer Reviews</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {sandals.flatMap((sandal) =>
                    sandal.reviews.map((review, index) => (
                        <motion.div
                            key={`${sandal.id}-${index}`}
                            className="bg-gray-800 p-6 rounded-lg"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-xl font-bold" style={{ color: sandal.neonColor }}>
                                    {sandal.name}
                                </h3>
                                <ReviewStars rating={review.rating} />

                            </div>
                            <p className="text-gray-300 mb-4">{review.comment}</p>
                            <p className="text-neon-blue font-semibold">- {review.author}</p>
                        </motion.div>
                    ))
                )}
            </div>
        </div>
    );
};



const TryOnExperience: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center h-full">
            <motion.div
                className="w-64 h-64 bg-gray-700 rounded-lg mb-8 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <Camera className="w-32 h-32 text-neon-blue" />
            </motion.div>
            <motion.button
                className="bg-neon-green text-gray-900 px-6 py-3 rounded-full font-bold text-lg"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                Try On AR Experience
            </motion.button>
        </div>
    );
};

const ShippingInfo: React.FC = () => {
    return (
        <div className="p-8">
            <h2 className="text-4xl font-bold mb-8 text-neon-blue">Sandal Travel Itinerary</h2>
            <motion.div
                className="space-y-8"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="flex items-start space-x-4">
                    <Map className="w-12 h-12 text-neon-pink flex-shrink-0" />
                    <div>
                        <h3 className="text-2xl font-semibold mb-2 text-neon-green">Departure</h3>
                        <p className="text-gray-300">Your sandals begin their journey from our retro warehouse within 24 hours of your order.</p>
                    </div>
                </div>
                <div className="flex items-start space-x-4">
                    <Truck className="w-12 h-12 text-neon-yellow flex-shrink-0" />
                    <div>
                        <h3 className="text-2xl font-semibold mb-2 text-neon-green">En Route</h3>
                        <p className="text-gray-300">Our neon-powered delivery vans ensure your sandals travel in style, reaching you in 2-3 business days.</p>
                    </div>
                </div>
                <div className="flex items-start space-x-4">
                    <Sun className="w-12 h-12 text-neon-orange flex-shrink-0" />
                    <div>
                        <h3 className="text-2xl font-semibold mb-2 text-neon-green">Arrival</h3>
                        <p className="text-gray-300">Your new sandals arrive at your door, ready to light up your summer adventures!</p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

const ContactForm: React.FC = () => {
    return (
        <div className="p-8">
            <h2 className="text-4xl font-bold mb-8 text-neon-pink">Get in Touch</h2>
            <form className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-neon-blue mb-2">Name</label>
                    <input type="text" id="name" className="w-full bg-gray-700 text-white rounded-md p-2" />
                </div>
                <div>
                    <label htmlFor="email" className="block text-neon-blue mb-2">Email</label>
                    <input type="email" id="email" className="w-full bg-gray-700 text-white rounded-md p-2" />
                </div>
                <div>
                    <label htmlFor="message" className="block text-neon-blue mb-2">Message</label>
                    <textarea id="message" rows={4} className="w-full bg-gray-700 text-white rounded-md p-2"></textarea>
                </div>
                <motion.button
                    type="submit"
                    className="bg-neon-green text-gray-900 px-6 py-3 rounded-full font-bold text-lg"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    Send Message
                </motion.button>
            </form>
        </div>
    );
};

const RetroSummerSandalsShowcase: React.FC = () => {
    const [activeSection, setActiveSection] = useState('showcase');

    return (
        <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
            <MusicPlayer />
            <motion.h1
                className="text-6xl font-extrabold text-center py-8"
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ type: 'spring', stiffness: 100 }}
            >
                <span className="text-neon-pink">Retro</span>{' '}
                <span className="text-neon-blue">Summer</span>{' '}
                <span className="text-neon-yellow">Sandals</span>
            </motion.h1>

            <AnimatePresence mode="wait">
                {activeSection === 'showcase' && (
                    <motion.div
                        key="showcase"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <ProductShowcase />
                    </motion.div>
                )}
                {activeSection === 'tryOn' && (
                    <motion.div
                        key="tryOn"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <TryOnExperience />
                    </motion.div>
                )}
                {activeSection === 'shipping' && (
                    <motion.div
                        key="shipping"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <ShippingInfo />
                    </motion.div>
                )}
                {activeSection === 'contact' && (
                    <motion.div
                        key="contact"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <ContactForm />
                    </motion.div>
                )}
            </AnimatePresence>
            <FeaturedCollection />
            <CustomerReviews />
            <CircularMenu setActiveSection={setActiveSection} />
        </div>
    );
};

export default RetroSummerSandalsShowcase;