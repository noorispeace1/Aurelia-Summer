import Image from 'next/image';
import React from 'react';

const Products = async () => {

  const res = await fetch('https://aurelia-summer.vercel.app/data.json');
  const products = await res.json();
  

  const displayedProducts = products.slice(0, 4);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Premium Collection with
      </h1>

   
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {displayedProducts.map((product) => (
          <div 
            key={product.id} 
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 border border-gray-100"
          >

            <div className="h-48 overflow-hidden">
              <Image
                src={product.image_url} 
                width={512}
                height={512}
                alt={product.name} 
                className="w-full h-full object-cover"
              />
            </div>

            {/* প্রোডাক্ট ডিটেইলস */}
            <div className="p-4">
              <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                {product.category}
              </span>
              <h2 className="text-lg font-bold text-gray-900 mt-1 truncate">
                {product.name}
              </h2>
              <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                {product.description}
              </p>
              
              <div className="mt-4 flex items-center justify-between">
                <span className="text-xl font-bold text-gray-900">
                  ${product.price}
                </span>
                <div className="flex items-center text-yellow-500 text-sm">
                  ★ <span className="ml-1 text-gray-600 font-medium">{product.rating}</span>
                </div>
              </div>

              <button className="w-full mt-4 bg-black text-white py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;