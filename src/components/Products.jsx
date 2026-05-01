import React from 'react';
import ProductsCard from './ProductsCard';

const Products = async () => {
  // Fetching data from the API
  const res = await fetch('https://aurelia-summer.vercel.app/data.json');
  const products = await res.json();

  // Slicing to get only the first 3 products
  const productsCard = products.slice(0, 3);

  return (
    <div className="container mx-auto px-4 py-10">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-center mb-10 tracking-tight text-gray-900">
        Premium Products
      </h2>
      
      {/* Grid Layout Section - Centering Logic */}
      <div className="flex justify-center"> 
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl">
          {productsCard.map((product) => (
            <ProductsCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;