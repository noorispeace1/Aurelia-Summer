import Image from 'next/image';
import React from 'react';

const ProductsCard = ({ product }) => {
  return (
    <div className="border rounded-lg shadow-lg p-4 max-w-sm bg-white hover:shadow-xl transition-shadow duration-300">
 
      <div className="relative w-full h-64 overflow-hidden rounded-md">
        <Image
          src={product.image_url}
          alt={product.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Product Details Section */}
      <div className="mt-4">
        <h2 className="text-xl font-bold text-gray-800 uppercase tracking-tight">
          {product.name}
        </h2>
        <p className="text-sm text-gray-500 italic mb-2">{product.brand}</p>
        
        <p className="text-gray-600 text-sm line-clamp-2 mb-4">
          {product.description}
        </p>

        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-blue-600">
            ${product.price}
          </span>
          <div className="flex items-center bg-yellow-100 px-2 py-1 rounded text-yellow-700 font-medium">
            ⭐ {product.rating}
          </div>
        </div>

        <button className="w-full mt-4 bg-black text-white py-2 rounded-md hover:bg-gray-800 transition-colors">
          View Details
        </button>
      </div>
    </div>
  );
};

export default ProductsCard;