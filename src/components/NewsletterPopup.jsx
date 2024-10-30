import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';

function NewsletterPopup() {
  const [isOpen, setIsOpen] = useState(true);
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Thank you for subscribing!');
    setIsOpen(false);
  };

  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50"
    >
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-xl p-8 max-w-md"
          >
            <Dialog.Title className="text-2xl font-bold mb-4">
              Join Our Newsletter
            </Dialog.Title>
            <Dialog.Description className="text-gray-600 mb-6">
              Subscribe to receive updates about new collections and special offers!
            </Dialog.Description>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-lg"
                required
              />
              <div className="flex gap-4">
                <button
                  type="submit"
                  className="flex-1 bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-400"
                >
                  Subscribe
                </button>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="flex-1 bg-gray-200 text-gray-800 py-2 rounded-lg hover:bg-gray-300"
                >
                  Maybe Later
                </button>
              </div>
            </form>
          </motion.div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}

export default NewsletterPopup;