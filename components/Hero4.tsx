import React from 'react';
import Image from 'next/image';

interface HeroProps {
    imageUrl: string;
    title: string;
    subtitle: string;
    buttonText: string;
}

const Hero4: React.FC<HeroProps> = ({ imageUrl, title, subtitle, buttonText }) => {
    return (
        <div className="relative h-screen flex items-center justify-center">
            <div className="absolute inset-0">
                <Image
                    src={imageUrl}
                    alt="Hero background"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-75"></div>
            </div>
            <div className="relative z-10 text-center text-white max-w-4xl">
                <h1 className="text-7xl font-black mb-6 leading-tight">{title}</h1>
                <p className="text-2xl mb-10 font-light">{subtitle}</p>
                <button className="bg-white text-purple-600 py-3 px-10 rounded-full text-xl font-bold hover:bg-gray-100 transition duration-300 transform hover:scale-105">
                    {buttonText}
                </button>
            </div>
        </div>
    );
};

export default Hero4;