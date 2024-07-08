import React from 'react';
import Image from 'next/image';

interface HeroProps {
    imageUrl: string;
    title: string;
    subtitle: string;
    buttonText: string;
}

const Hero2: React.FC<HeroProps> = ({ imageUrl, title, subtitle, buttonText }) => {
    return (
        <div className="relative h-screen flex items-center">
            <div className="absolute inset-0">
                <Image
                    src={imageUrl}
                    alt="Hero background"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                />
            </div>
            <div className="relative z-10 max-w-3xl mx-auto text-center text-white">
                <h1 className="text-6xl font-extrabold mb-4 leading-tight">{title}</h1>
                <p className="text-2xl mb-8">{subtitle}</p>
                <button className="bg-blue-600 text-white py-3 px-8 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300">
                    {buttonText}
                </button>
            </div>
        </div>
    );
};

export default Hero2;