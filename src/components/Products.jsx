import React from 'react';
import ProductsCard from './ProductsCard';

const Products = async () => {
  let products = [];

  try {
    // 1. Fetch data with a cache strategy (Next.js specific)
    const res = await fetch('https://aurelia-summer.vercel.app/data.json', {
      next: { revalidate: 3600 } // Revalidate every hour
    });

    if (!res.ok) {
      throw new Error('Failed to fetch products');
    }

    products = await res.json();
  } catch (error) {
    console.error("Fetch error:", error);
    return <p className="text-center py-10">Unable to load products at this time.</p>;
  }

  // 2. Slice the first 3 items safely
  const displayedProducts = products?.slice(0, 3) || [];

  return (
    <section className="container mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-10 tracking-tight text-gray-900">
        Premium Products
      </h2>
      
      {/* 3. Grid Layout - Improved responsiveness */}
      <div className="flex justify-center"> 
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl">
          {displayedProducts.map((product) => (
            <ProductsCard key={product.id || product._id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;