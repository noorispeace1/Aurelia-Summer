import ProductsCard from '@/components/ProductsCard';
import React from 'react';

const page = async() => {
    const res = await fetch('https://aurelia-summer.vercel.app/data.json');
  const products = await res.json();

    return (
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductsCard key={product.id} product={product} />
              ))}
            </div>
    );
};

export default page;