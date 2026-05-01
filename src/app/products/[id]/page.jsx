import Image from 'next/image';
import React from 'react';

const ProductsDetailsPage = async ({ params }) => {
  const { id } = await params;
  
  // Fetch data
  const res = await fetch('https://aurelia-summer.vercel.app/data.json');
  const products = await res.json();

  // Find product (using == to handle string vs number comparison)
  const product = products.find((p) => p.id == id);

  if (!product) {
    return <div className="text-center py-20 text-xl font-semibold">Product not found!</div>;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-white p-6 rounded-2xl shadow-sm border">
        
        {/* Left Side: Product Image */}
        <div className="relative h-[400px] md:h-[500px] w-full overflow-hidden rounded-xl bg-gray-50">
          <Image
            src={product.image_url}
            alt={product.name}
            fill
            className="object-contain p-4 hover:scale-105 transition-transform duration-500"
            priority
          />
        </div>

        {/* Right Side: Product Content */}
        <div className="space-y-6">
          <div>
            <span className="text-blue-600 font-semibold tracking-widest uppercase text-sm">
              {product.category}
            </span>
            <h1 className="text-4xl font-extrabold text-gray-900 mt-2">
              {product.name}
            </h1>
            <p className="text-lg text-gray-500 mt-1">{product.brand}</p>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-3xl font-bold text-gray-900">
              ${product.price.toFixed(2)}
            </span>
            <div className="flex items-center bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-bold">
              ⭐ {product.rating}
            </div>
          </div>

          <p className="text-gray-600 leading-relaxed border-t border-b py-6">
            {product.description}
          </p>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className={`h-3 w-3 rounded-full ${product.stock > 0 ? 'bg-green-500' : 'bg-red-500'}`}></span>
              <span className="text-sm font-medium text-gray-700">
                {product.stock > 0 ? `${product.stock} items left in stock` : 'Out of Stock'}
              </span>
            </div>

            <button className="w-full md:w-max px-12 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 active:scale-95 transition-all shadow-lg shadow-blue-200">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetailsPage;