import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaComments, FaTimes, FaPaperPlane } from 'react-icons/fa';

function LiveChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add chat functionality here
    setMessage('');
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="bg-white rounded-lg shadow-xl w-80 mb-4"
          >
            <div className="bg-gray-900 text-white p-4 rounded-t-lg flex justify-between items-center">
              <h3 className="font-bold">Live Chat</h3>
              <button onClick={() => setIsOpen(false)}>
                <FaTimes />
              </button>
            </div>
            <div className="h-80 p-4 overflow-y-auto">
              {/* Chat messages would go here */}
            </div>
            <form onSubmit={handleSubmit} className="p-4 border-t">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 border rounded-lg"
                />
                <button
                  type="submit"
                  className="bg-yellow-500 text-white p-2 rounded-lg hover:bg-yellow-400"
                >
                  <FaPaperPlane />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-yellow-500 text-white p-4 rounded-full shadow-lg hover:bg-yellow-400"
      >
        <FaComments className="w-6 h-6" />
      </button>
    </div>
  );
}

export default LiveChat;