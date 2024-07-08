import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, ShoppingCart } from 'lucide-react';

interface Review {
    id: number;
    author: string;
    rating: number;
    comment: string;
}

interface SandalProduct {
    id: number;
    name: string;
    price: number;
    description: string;
    imageUrl: string;
    reviews: Review[];
}

const sandals: SandalProduct[] = [
    {
        id: 1,
        name: 'Summer Breeze Cargo',
        price: 49.99,
        description: 'Comfortable and stylish sandals perfect for beach days.',
        imageUrl: '/cargo1.webp',
        reviews: [
            { id: 1, author: 'Alice', rating: 5, comment: 'Love these sandals! So comfortable.' },
            { id: 2, author: 'Bob', rating: 4, comment: 'Great for summer, but a bit pricey.' },
        ],
    },
    {
        id: 2,
        name: 'Urban Walker Cargo',
        price: 59.99,
        description: 'Durable sandals designed for city exploration.',
        imageUrl: '/cargo2.webp',
        reviews: [
            { id: 3, author: 'Charlie', rating: 5, comment: 'Perfect for long walks in the city.' },
            { id: 4, author: 'Diana', rating: 3, comment: 'Good quality, but not very comfortable.' },
        ],
    },
    {
        id: 3,
        name: 'Elegant Evening Cargo',
        price: 79.99,
        description: 'Sophisticated sandals for special occasions.',
        imageUrl: '/cargo3.jpg',
        reviews: [
            { id: 5, author: 'Eve', rating: 5, comment: 'Absolutely stunning! Got many compliments.' },
            { id: 6, author: 'Frank', rating: 4, comment: 'Beautiful design, slightly uncomfortable after long wear.' },
        ],
    },
];

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
    return (
        <div className="flex">
            {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} />
            ))}
        </div>
    );
};

const ProductCard: React.FC<{ product: SandalProduct }> = ({ product }) => {
    return (
        <Card className="w-full max-w-sm bg-white shadow-lg rounded-lg overflow-hidden">
            <CardHeader className="p-4 bg-teal-600">
                <CardTitle className="text-xl font-bold text-white">{product.name}</CardTitle>
            </CardHeader>
            <CardContent className="p-4">
                <Image
                    src={product.imageUrl}
                    alt={product.name}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover mb-4 rounded"
                />
                <p className="text-gray-600 mb-2">{product.description}</p>
                <p className="text-2xl font-bold text-teal-600 mb-2">${product.price.toFixed(2)}</p>
                <div className="mb-4">
                    <h4 className="font-semibold mb-2">Reviews:</h4>
                    {product.reviews.map((review) => (
                        <div key={review.id} className="mb-2">
                            <div className="flex items-center">
                                <StarRating rating={review.rating} />
                                <span className="ml-2 font-semibold">{review.author}</span>
                            </div>
                            <p className="text-sm text-gray-600">{review.comment}</p>
                        </div>
                    ))}
                </div>
            </CardContent>
            <CardFooter className="bg-gray-100 p-4">
                <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
                </Button>
            </CardFooter>
        </Card>
    );
};

const SandalsPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-teal-100 to-teal-200 py-12">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold mb-8 text-center text-teal-800">Luxury Sandals Collection</h1>
                <p className="text-xl text-center text-teal-600 mb-12">Discover comfort and style in every step</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {sandals.map((sandal) => (
                        <ProductCard key={sandal.id} product={sandal} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SandalsPage;