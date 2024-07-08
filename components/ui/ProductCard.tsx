import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ProductCard = ({ product }) => {
  return (
    <Card className="w-[300px]">
      <CardContent className="p-4">
        <img
          src={product.imageUrl || "/tap1.webp"}
          alt={product.name}
          className="w-full h-[200px] object-cover rounded-md mb-4"
        />
        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-2">${product.price.toFixed(2)}</p>
        <p className="text-sm text-gray-500 mb-4">{product.description}</p>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Add to Cart</Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;