import React from 'react';
import { Link } from 'react-router-dom';
import { FaRocket, FaShieldAlt, FaSmile } from 'react-icons/fa';
import { motion } from 'framer-motion';

const BookingConfirmationPage = () => {
  return (
    <div className="bg-cover bg-center min-h-screen font-sans text-gray-800"
      style={{
        backgroundImage: 'url(https://cf.bstatic.com/xdata/images/hotel/max1024x768/553481795.jpg?k=bd177f6c5936a091bc4ffae97ea5d0c065d3b9e2a0909b984981c9da82f93df0&o=)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark Overlay for Better Contrast */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 z-0"></div>

      <div className="relative z-10 text-center py-20 px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white">Welcome to hotelmanager</h2>
        <p className="text-lg max-w-2xl mx-auto mb-8 text-white">
        Build, manage and grow your hotel business with ease, elegance, and smart tools.
        </p>

        <div className="flex justify-center gap-4">
          <a href="/" className="bg-teal-600 text-white px-6 py-3 rounded-xl hover:bg-teal-700 transition duration-300">
          Get Started
          </a>
          <a href="/my-bookings" className="border-2 border-white text-white px-6 py-3 rounded-xl hover:bg-white hover:text-teal-600 transition duration-300">
          Learn More
          </a>
        </div>
      </div>
    

      {/* Features Section */}
      <section id="learn-more" className="py-16 bg-white mt-64">
        <div className="max-w-6xl mx-auto text-center px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-green-600 mb-12"
          >
            Why Choose Us?
          </motion.h2>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              transition={{ type: 'spring', stiffness: 200 }}
              className="bg-gray-100 p-8 rounded-2xl shadow-md hover:shadow-lg transition"
            >
              <FaRocket className="text-5xl text-green-600 mx-auto mb-4 animate-bounce" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Fast Performance</h3>
              <p className="text-gray-600 text-sm">
                Optimized tools to keep you running quickly and smoothly.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05 }} 
              transition={{ type: 'spring', stiffness: 200 }}
              className="bg-gray-100 p-8 rounded-2xl shadow-md hover:shadow-lg transition"
            >
              <FaShieldAlt className="text-5xl text-green-600 mx-auto mb-4 animate-bounce" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Secure & Reliable</h3>
              <p className="text-gray-600 text-sm">
                Your data is protected with our enterprise-grade systems.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05 }} 
              transition={{ type: 'spring', stiffness: 200 }}
              className="bg-gray-100 p-8 rounded-2xl shadow-md hover:shadow-lg transition"
            >
              <FaSmile className="text-5xl text-green-600 mx-auto mb-4 animate-bounce" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">User Friendly</h3>
              <p className="text-gray-600 text-sm">
                Designed with simplicity and clarity for all users.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 text-center bg-green-600 text-white">
        <motion.h2 
          initial={{ opacity: 0, y: 10 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.7 }}
          className="text-3xl font-bold mb-4"
        >
          Ready to get started?
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          transition={{ delay: 0.2 }}
          className="mb-6"
        >
          Join thousands of users managing hotels with HotelManager.
        </motion.p>
        <Link to="/signup">
          <motion.button 
            whileHover={{ scale: 1.1 }} 
            className="bg-white text-green-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Sign Up Free
          </motion.button>
        </Link>
      </section>
    </div>
  );
};

export default BookingConfirmationPage;
