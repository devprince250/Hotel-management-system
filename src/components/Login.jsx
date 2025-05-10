import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle, FaEnvelope, FaKey, FaSignInAlt } from 'react-icons/fa'; 
import { motion } from 'framer-motion'; // Import framer-motion

const Login = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      // Simulate successful form submission
      alert('Login successful!');
    }, 2000); // Simulate 2-second delay for submission
  };

  return (
    <div className="bg-white min-h-screen py-20 px-4 flex items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        className="flex-grow flex items-center justify-center px-4"
      >
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="bg-white shadow-2xl rounded-xl p-8 w-full max-w-md"
        >
          <motion.h2 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-3xl font-bold text-gray-900 text-center mb-6"
          >
            Log In
          </motion.h2>

          {/* Google Login Button */}
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full flex items-center justify-center gap-3 bg-amber-600 text-white py-2 rounded-lg hover:bg-amber-700 transition mb-4"
          >
            <FaGoogle className="w-5 h-5 text-amber-600" />
            <span>Continue with Google</span>
          </motion.button>

          <div className="flex items-center justify-between mb-4">
            <hr className="border-t border-gray-300 w-full" />
            <span className="text-sm text-gray-600 mx-2">or</span>
            <hr className="border-t border-gray-300 w-full" />
          </div>

          {/* Login Form */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Email Input */}
            <div className="relative">
              <label className="block text-sm text-gray-700">Email</label>
              <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2 focus-within:ring-2 focus-within:ring-amber-600">
                <FaEnvelope className="text-amber-600 w-5 h-5" />
                <input
                  type="email"
                  className="w-full px-4 py-2 border-none focus:outline-none pl-10"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="relative">
              <label className="block text-sm text-gray-700">Password</label>
              <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2 focus-within:ring-2 focus-within:ring-amber-600">
                <FaKey className="text-amber-600 w-5 h-5" />
                <input
                  type="password"
                  className="w-full px-4 py-2 border-none focus:outline-none pl-10"
                  placeholder="••••••••"
                />
              </div>
            </div>

            {/* Log In Button with Animation */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={isSubmitting}
              className={`w-full flex items-center justify-center gap-3 ${isSubmitting ? 'bg-gray-500' : 'bg-amber-600'} text-white py-2 rounded-lg transition`}
            >
              {isSubmitting ? (
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ loop: Infinity, duration: 1 }}
                  className="w-5 h-5 animate-spin"
                >
                  <FaSignInAlt />
                </motion.div>
              ) : (
                <FaSignInAlt className="w-5 h-5" />
              )}
              <span>{isSubmitting ? 'Submitting...' : 'Log In'}</span>
            </motion.button>
          </form>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-center text-sm text-gray-600 mt-4"
          >
            Don't have an account?{' '}
            <Link to="/signup" className="text-amber-600 font-medium hover:underline">
              Sign Up
            </Link>
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Login;
