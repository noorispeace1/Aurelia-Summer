import React from 'react';
import ProductsCard from './ProductsCard';

const Products = async () => {
  // Fetching data from the API
  const res = await fetch('https://aurelia-summer.vercel.app/data.json');
  const products = await res.json();

  // Slicing to get only the first 4 products
  const productsCard = products.slice(0, 4);

  return (
    <div className="container mx-auto px-4 py-10">
      {/* Heading (Optional) */}
      <h2 className="text-3xl font-bold text-center mb-8">Our Exclusive Collection</h2>
      
      {/* Grid Layout Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {productsCard.map((product) => (
          <ProductsCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;