import React from 'react';
import { Link } from 'react-router-dom';
import { FaShippingFast, FaLock, FaHeadset } from 'react-icons/fa';
import { motion } from 'framer-motion';
import ProductSlider from '../components/ProductSlider';
import TestimonialCard from '../components/TestimonialCard';

function Home() {
  const featuredGems = [
    {
      id: 1,
      name: "Natural Ruby",
      price: "$1,999",
      image: "https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?w=500&auto=format"
    },
    {
      id: 2,
      name: "Blue Sapphire",
      price: "$2,499",
      image: "https://images.unsplash.com/photo-1615655096345-61a54750068d?w=500&auto=format"
    },
    {
      id: 3,
      name: "Emerald",
      price: "$1,799",
      image: "https://images.unsplash.com/photo-1551122087-f99a4ade46ce?w=500&auto=format"
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      rating: 5,
      comment: "Exceptional quality and service! The sapphire I purchased exceeded my expectations.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format"
    },
    {
      id: 2,
      name: "Michael Chen",
      rating: 5,
      comment: "The team's expertise helped me find the perfect engagement ring. Highly recommended!",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format"
    },
    {
      id: 3,
      name: "Emily Davis",
      rating: 5,
      comment: "Beautiful selection of gemstones and excellent customer service.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&auto=format"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[600px]">
        <div className="absolute inset-0 bg-black/50" />
        <div 
          className="h-full bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format')" }}
        >
          <div className="relative h-full flex items-center justify-center text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white px-4"
            >
              <h1 className="text-5xl font-bold mb-4">Discover Rare & Authentic Gemstones</h1>
              <p className="text-xl mb-8">Your trusted source for premium quality stones</p>
              <Link 
                to="/collections" 
                className="bg-yellow-500 text-gray-900 px-8 py-3 rounded-full font-bold hover:bg-yellow-400 transition"
              >
                Explore Collection
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Gemstones</h2>
        <ProductSlider products={featuredGems} />
      </div>

      {/* Features */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <FaShippingFast className="w-12 h-12 mx-auto text-yellow-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Free Shipping</h3>
              <p className="text-gray-600">On all orders over $500</p>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <FaLock className="w-12 h-12 mx-auto text-yellow-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Secure Payment</h3>
              <p className="text-gray-600">100% secure payment</p>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <FaHeadset className="w-12 h-12 mx-auto text-yellow-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
              <p className="text-gray-600">Dedicated support</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(testimonial => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;