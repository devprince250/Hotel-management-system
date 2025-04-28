import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="bg-gradient-to-br from-green-600 to-gray-300 min-h-screen py-20 px-4">
      {/* About Header with Animation */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">About Us</h1>
        <p className="text-gray-200 text-lg max-w-xl mx-auto mb-8">
          Discover our journey, values, and what drives us to provide exceptional experiences to our guests.
        </p>
      </motion.section>

      {/* About Content Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-10"
      >
        <h2 className="text-3xl font-bold text-green-600 mb-6">Our Mission</h2>
        <p className="text-gray-600 text-lg mb-6">
          Our mission is to provide luxurious, comfortable, and memorable experiences for every guest that walks through our doors. 
          We strive to exceed expectations in service, amenities, and attention to detail, ensuring every stay is unforgettable.
        </p>

        <h2 className="text-3xl font-bold text-green-600 mb-6">Our Vision</h2>
        <p className="text-gray-600 text-lg mb-6">
          Our vision is to be the leading hospitality provider in the region, offering innovative services and creating a 
          sense of belonging for every guest. We aim to deliver top-tier experiences that cater to both business and leisure travelers.
        </p>

        <h2 className="text-3xl font-bold text-green-600 mb-6">Our Values</h2>
        <ul className="list-disc list-inside text-gray-600 text-lg space-y-4">
          <li><strong>Customer Satisfaction:</strong> Our guests' comfort and happiness are our top priority.</li>
          <li><strong>Innovation:</strong> We constantly improve our services and facilities to meet the ever-evolving needs of our guests.</li>
          <li><strong>Integrity:</strong> We conduct our business with honesty, transparency, and responsibility.</li>
          <li><strong>Sustainability:</strong> We are committed to eco-friendly practices that contribute to a better future for our planet.</li>
        </ul>
      </motion.section>
    </div>
  );
};

export default About;
