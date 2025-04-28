import React from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle, FaEnvelope, FaLock } from 'react-icons/fa'; 
import { motion } from 'framer-motion'; // Import framer-motion

const Login = () => {
  return (
    <div className="bg-gradient-to-br from-green-600 to-gray-300 min-h-screen py-20 px-4">
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
            className="text-3xl font-bold text-center text-green-600 mb-6"
          >
            Log In
          </motion.h2>

          {/* Google Login */}
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full flex items-center justify-center gap-2 bg-green-600 text-white py-2 rounded-lg hover:bg-red-800 transition mb-4"
          >
            <FaGoogle className="w-5 h-5" />
            Continue with Google
          </motion.button>

          <div className="flex items-center justify-between mb-4">
            <hr className="border-t border-gray-300 w-full" />
            <span className="text-sm text-gray-500 mx-2">or</span>
            <hr className="border-t border-gray-300 w-full" />
          </div>

          {/* Login Form */}
          <form className="space-y-4">
            {/* Email Input */}
            <div className="relative">
              <label className="block text-sm text-gray-700">Email</label>
              <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2 focus-within:ring-2 focus-within:ring-green-600">
                <FaEnvelope className="text-green-600 w-5 h-5" />
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
              <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2 focus-within:ring-2 focus-within:ring-green-600">
                <FaLock className="text-green-600 w-5 h-5" />
                <input
                  type="password"
                  className="w-full px-4 py-2 border-none focus:outline-none pl-10"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
            >
              Log In
            </motion.button>
          </form>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-center text-sm text-gray-600 mt-4"
          >
            Don't have an account?{' '}
            <Link to="/signup" className="text-green-600 font-medium hover:underline">
              Sign Up
            </Link>
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Login;
