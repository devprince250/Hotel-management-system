import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaInfoCircle } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <div 
        className="bg-cover bg-center min-h-screen relative overflow-hidden"
        style={{
          backgroundImage: 'url(https://cf.bstatic.com/xdata/images/hotel/max1024x768/553481795.jpg?k=bd177f6c5936a091bc4ffae97ea5d0c065d3b9e2a0909b984981c9da82f93df0&o=)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark Overlay (adjusted for better contrast) */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-0"></div>

        {/* Main Content */}
        <div className="relative z-10 text-center py-20 px-6">
          <motion.h2 
            className="text-4xl md:text-6xl font-extrabold mb-6 text-white"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, type: 'spring', stiffness: 80 }}
          >
            Welcome to <span className="text-amber-400">HotelManager</span>
          </motion.h2>

          <motion.p 
            className="text-xl max-w-2xl mx-auto mb-10 text-gray-100"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            Elevate your hospitality business with intuitive tools and elegant design.
          </motion.p>

          {/* Action Buttons (updated colors) */}
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, type: 'spring' }}
          >
            <motion.a 
              href="/Signup" 
              className="bg-amber-600 hover:bg-amber-700 text-white border-4 border-white px-8 py-8 rounded-xl transition duration-300 font-bold text-lg flex items-center gap-2"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaArrowRight /> Get Started
            </motion.a>

            <motion.a 
              href="/mybookings" 
              className="bg-transparent hover:bg-white/10 text-white border-4 border-white px-8 py-4 rounded-xl transition duration-300 font-bold text-lg flex items-center gap-2"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaInfoCircle /> Learn More
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Features Section (updated palette) */}
      <div className="bg-gray-50 py-20">
        <div className="text-center mb-12 px-4">
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-4xl font-bold text-gray-700 mb-4"
          >
            Premium Features
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-gray-600 text-lg max-w-3xl mx-auto"
          >
            Designed for luxury hotels and boutique accommodations
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8 max-w-7xl mx-auto">
          {/* Feature 1 */}
          <motion.div 
            className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300 border border-gray-100"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            whileHover={{ y: -10 }}
          >
            <div className="flex justify-center mb-6">
              <div className="bg-amber-100/80 p-4 rounded-full">
                <svg 
                  className="w-12 h-12 text-amber-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v2a2 2 0 002 2h4a2 2 0 002-2v-2m-6 0V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2h4a2 2 0 002-2z" />
                </svg>
              </div>
            </div>
            <h4 className="text-2xl font-semibold text-gray-800 mb-4">Smart Booking</h4>
            <p className="text-gray-600 leading-relaxed">
              Seamless reservations with AI-powered availability forecasting and dynamic pricing.
            </p>
          </motion.div>

          {/* Feature 2 */}
          <motion.div 
            className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300 border border-gray-100"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            whileHover={{ y: -10 }}
          >
            <div className="flex justify-center mb-6">
              <div className="bg-blue-100/80 p-4 rounded-full">
                <svg 
                  className="w-12 h-12 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c1.21 0 2.2-.94 2.2-2.1V5.21a2 2 0 011.66-.99l4.75-.45a2 2 0 011.93 1.45l1.61 5.19a2 2 0 01-1.5 2.41l-2.6 1.04a2 2 0 01-.55 2.4l1.79 1.89a2 2 0 01-2.3 2.33l-2.7-.28a2 2 0 01-2.01 1.65l-1.78 4.94a2 2 0 01-2.56 1.34l-1.79-1.88a2 2 0 01-1.48-2.09l.15-4.29a2 2 0 01-.56-2.41l1.72-1.43a2 2 0 011.79-2.06l4.94-.89a2 2 0 012.34 2.12V8h.01c-.01.56.09 1.04.26 1.51.16.46.39.88.69 1.23z" />
                </svg>
              </div>
            </div>
            <h4 className="text-2xl font-semibold text-gray-800 mb-4">Concierge Support</h4>
            <p className="text-gray-600 leading-relaxed">
              Dedicated 24/7 support with multilingual staff and instant messaging.
            </p>
          </motion.div>

          {/* Feature 3 */}
          <motion.div 
            className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300 border border-gray-100"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            whileHover={{ y: -10 }}
          >
            <div className="flex justify-center mb-6">
              <div className="bg-emerald-100/80 p-4 rounded-full">
                <svg 
                  className="w-12 h-12 text-emerald-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
            </div>
            <h4 className="text-2xl font-semibold text-gray-800 mb-4">Real-Time Analytics</h4>
            <p className="text-gray-600 leading-relaxed">
              Dashboard with occupancy rates, revenue tracking, and guest preferences.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;