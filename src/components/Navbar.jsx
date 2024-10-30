import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGem, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <FaGem className="h-8 w-8 text-yellow-500" />
            <span className="ml-2 text-xl font-bold">SaltMarket</span>
          </Link>

          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="hover:text-yellow-500">Home</Link>
            <Link to="/collections" className="hover:text-yellow-500">Collections</Link>
            <Link to="/gallery" className="hover:text-yellow-500">Gallery</Link>
            <Link to="/about" className="hover:text-yellow-500">About</Link>
            <Link to="/contact" className="hover:text-yellow-500">Contact</Link>
            <Link to="/blog" className="hover:text-yellow-500">Blog</Link>
            <button className="ml-4 p-2 hover:bg-yellow-500 rounded">
              <FaShoppingCart className="h-5 w-5" />
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="/" className="block hover:text-yellow-500 py-2">Home</Link>
              <Link to="/collections" className="block hover:text-yellow-500 py-2">Collections</Link>
              <Link to="/gallery" className="block hover:text-yellow-500 py-2">Gallery</Link>
              <Link to="/about" className="block hover:text-yellow-500 py-2">About</Link>
              <Link to="/contact" className="block hover:text-yellow-500 py-2">Contact</Link>
              <Link to="/blog" className="block hover:text-yellow-500 py-2">Blog</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;