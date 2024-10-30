import React from 'react';
import { FaShoppingCart, FaHeart } from 'react-icons/fa';

function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden group">
      <div className="relative">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4 space-y-2">
          <button className="bg-white p-2 rounded-full shadow-md hover:bg-yellow-500 hover:text-white transition-colors">
            <FaHeart className="w-4 h-4" />
          </button>
          <button className="bg-white p-2 rounded-full shadow-md hover:bg-yellow-500 hover:text-white transition-colors">
            <FaShoppingCart className="w-4 h-4" />
          </button>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold mb-2">{product.name}</h3>
        <p className="text-yellow-500 font-semibold mb-4">{product.price}</p>
        <button className="w-full bg-gray-900 text-white py-2 rounded hover:bg-gray-800 transition-colors">
          View Details
        </button>
      </div>
    </div>
  );
}

export default ProductCard;