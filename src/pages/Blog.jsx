import React from 'react';
import { FaCalendar, FaUser, FaComment } from 'react-icons/fa';

function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "Understanding Diamond Clarity and Cut",
      excerpt: "Learn about the key factors that determine a diamond's quality and value...",
      image: "https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=500&auto=format",
      date: "Dec 15, 2023",
      author: "Emma Stone",
      comments: 12
    },
    {
      id: 2,
      title: "The History of Sapphires in Royal Jewelry",
      excerpt: "Explore the fascinating history of sapphires in royal collections...",
      image: "https://images.unsplash.com/photo-1615655096345-61a54750068d?w=500&auto=format",
      date: "Dec 10, 2023",
      author: "James Crystal",
      comments: 8
    },
    {
      id: 3,
      title: "Caring for Your Precious Gemstones",
      excerpt: "Essential tips for maintaining the beauty and value of your gemstones...",
      image: "https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?w=500&auto=format",
      date: "Dec 5, 2023",
      author: "Ruby Williams",
      comments: 15
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-6">Our Blog</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover the latest insights, trends, and stories from the world of gemstones 
          and jewelry through our expert articles and guides.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map(post => (
          <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold mb-4">
                {post.title}
              </h2>
              <p className="text-gray-600 mb-4">
                {post.excerpt}
              </p>
              <div className="flex items-center text-sm text-gray-500 space-x-4">
                <div className="flex items-center">
                  <FaCalendar className="mr-2" />
                  {post.date}
                </div>
                <div className="flex items-center">
                  <FaUser className="mr-2" />
                  {post.author}
                </div>
                <div className="flex items-center">
                  <FaComment className="mr-2" />
                  {post.comments}
                </div>
              </div>
              <button className="mt-6 text-yellow-500 font-semibold hover:text-yellow-600">
                Read More →
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Newsletter Section */}
      <div className="mt-16 bg-gray-900 text-white rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
        <p className="text-gray-300 mb-6">
          Stay updated with our latest articles, news, and special offers.
        </p>
        <form className="max-w-md mx-auto flex gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 rounded-lg text-gray-900"
          />
          <button
            type="submit"
            className="bg-yellow-500 px-6 py-2 rounded-lg hover:bg-yellow-400 transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}

export default Blog;