import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle, FaUserAlt, FaLock, FaEnvelope, FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Signup = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Logic yo kohereza form
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Signup successful!");
    }, 2000);
  };

  return (
    <div className="bg-white min-h-screen py-20 px-4">
      <div className="flex-grow flex items-center justify-center px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.8 }}
          className="bg-white shadow-2xl rounded-xl p-8 w-full max-w-md"
        >
          <motion.h2 
            initial={{ y: -20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-center text-gray-900 mb-6"
          >
            Sign Up
          </motion.h2>

          <motion.button 
            whileHover={{ scale: 1.05 }} 
            className="w-full flex items-center justify-center gap-4 bg-amber-600 text-white py-2 rounded-lg hover:bg-amber-700 transition mb-4"
          >
            <FaGoogle className="text-white w-6 h-6" />
            Continue with Google
          </motion.button>

          <div className="flex items-center justify-between mb-4">
            <hr className="border-t border-gray-300 w-full" />
            <span className="text-sm text-gray-600 mx-2">or</span>
            <hr className="border-t border-gray-300 w-full" />
          </div>

          <motion.form 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-4"
            onSubmit={handleSubmit}
          >
            <div className="relative">
              <label className="block text-sm text-gray-700">Full Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600 pl-10"
                placeholder="John Doe"
              />
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                <FaUserAlt className="text-amber-600 w-5 h-5" />
              </span>
            </div>

            <div className="relative">
              <label className="block text-sm text-gray-700">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600 pl-10"
                placeholder="you@example.com"
              />
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                <FaEnvelope className="text-amber-600 w-5 h-5" />
              </span>
            </div>

            <div className="relative">
              <label className="block text-sm text-gray-700">Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600 pl-10"
                placeholder="••••••••"
              />
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                <FaLock className="text-amber-600 w-5 h-5" />
              </span>
            </div>

            <motion.button 
              whileHover={{ scale: 1.05 }}
              className={`w-full bg-amber-600 text-white py-2 h-12 rounded-lg hover:bg-amber-700 transition ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span>Submitting...</span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  <FaCheckCircle className="text-white w-4 h-4" />
                  Sign Up
                </span>
              )}
            </motion.button>
          </motion.form>

          <motion.p 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-center text-sm text-gray-600 mt-4"
          >
            Already have an account?{' '}
            <Link to="/login" className="text-amber-600 font-medium hover:underline">
              Log In
            </Link>
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default Signup;
