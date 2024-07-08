import React from 'react';
import Image from 'next/image';

interface HeroProps {
    imageUrl: string;
    title: string;
    subtitle: string;
    buttonText: string;
}

const Hero3: React.FC<HeroProps> = ({ imageUrl, title, subtitle, buttonText }) => {
    return (
        <div className="relative h-screen flex items-center justify-end">
            <div className="absolute inset-0">
                <Image
                    src={imageUrl}
                    alt="Hero background"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                />
            </div>
            <div className="relative z-10 max-w-lg mr-12 bg-white bg-opacity-90 p-8 rounded-lg shadow-xl">
                <h1 className="text-4xl font-bold mb-4 text-gray-800">{title}</h1>
                <p className="text-xl mb-6 text-gray-600">{subtitle}</p>
                <button className="bg-green-500 text-white py-2 px-6 rounded hover:bg-green-600 transition duration-300">
                    {buttonText}
                </button>
            </div>
        </div>
    );
};

export default Hero3;