import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { FaFilter } from 'react-icons/fa';

function Collections() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const products = [
    {
      id: 1,
      name: "Natural Ruby 3000ct",
      price: "$2,999",
      image: "https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?w=500&auto=format",
      category: "ruby"
    },
    {
      id: 2,
      name: "Blue Sapphire Crystal",
      price: "$1,899",
      image: "https://images.unsplash.com/photo-1615655096345-61a54750068d?w=500&auto=format",
      category: "sapphire"
    },
    {
      id: 3,
      name: "Premium Emerald Cut",
      price: "$3,499",
      image: "https://images.unsplash.com/photo-1551122087-f99a4ade46ce?w=500&auto=format",
      category: "emerald"
    },
    {
      id: 4,
      name: "Natural Diamond",
      price: "$5,999",
      image: "https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=500&auto=format",
      category: "diamond"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Gems' },
    { id: 'ruby', name: 'Rubies' },
    { id: 'sapphire', name: 'Sapphires' },
    { id: 'emerald', name: 'Emeralds' },
    { id: 'diamond', name: 'Diamonds' }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters Sidebar */}
        <div className="w-full md:w-64 bg-white p-6 rounded-lg shadow-md h-fit">
          <div className="flex items-center gap-2 mb-6">
            <FaFilter className="text-yellow-500" />
            <h2 className="text-xl font-bold">Filters</h2>
          </div>
          
          <div className="space-y-4">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`w-full text-left px-4 py-2 rounded ${
                  selectedCategory === category.id 
                    ? 'bg-yellow-500 text-white' 
                    : 'hover:bg-gray-100'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="mt-8">
            <h3 className="font-semibold mb-4">Price Range</h3>
            <input 
              type="range" 
              min="0" 
              max="10000" 
              className="w-full accent-yellow-500"
            />
            <div className="flex justify-between mt-2">
              <span>$0</span>
              <span>$10,000</span>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collections;