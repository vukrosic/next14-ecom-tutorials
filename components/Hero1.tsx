import React from 'react';
import Image from 'next/image';

interface HeroProps {
    imageUrl: string;
    title: string;
    subtitle: string;
    buttonText: string;
}

const Hero1: React.FC<HeroProps> = ({ imageUrl, title, subtitle, buttonText }) => {
    return (
        <div className="relative h-screen">
            <Image
                src={imageUrl}
                alt="Hero background"
                layout="fill"
                objectFit="cover"
                quality={100}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
                <h1 className="text-5xl font-bold mb-4">{title}</h1>
                <p className="text-xl mb-8">{subtitle}</p>
                <button className="bg-white text-black py-2 px-6 rounded-full hover:bg-gray-200 transition duration-300">
                    {buttonText}
                </button>
            </div>
        </div>
    );
};

export default Hero1;