import React from 'react';
import { motion } from 'framer-motion';
import { FaBullseye, FaEye, FaBalanceScale } from 'react-icons/fa';

const About = () => {
  const cards = [
    {
      title: 'Our Mission',
      text: "To provide luxurious, comfortable, and memorable experiences for every guest through unmatched service, detail, and hospitality.",
      icon: <FaBullseye />,
    },
    {
      title: 'Our Vision',
      text: "To become the region’s top hospitality brand, creating a warm and innovative environment for all guests, both business and leisure.",
      icon: <FaEye />,
    },
    {
      title: 'Our Values',
      text: "Customer Satisfaction, Innovation, Integrity, and Sustainability guide everything we do.",
      icon: <FaBalanceScale />,
    },
  ];

  return (
    <div className="bg-white min-h-screen py-20 px-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4">About Us</h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Learn more about our mission, vision, and values — the foundation of everything we do for our guests.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            className="bg-white rounded-xl shadow-xl p-8 text-center hover:shadow-2xl transition duration-300 border border-gray-100"
          >
            {/* Dancing Icon */}
            <motion.div
              animate={{
                y: [0, -5, 0],
                rotate: [0, 5, -5, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
              className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center bg-amber-600 shadow-md text-white text-4xl"
            >
              {card.icon}
            </motion.div>

            <h2 className="text-2xl font-bold text-amber-600 mb-4">{card.title}</h2>
            <p className="text-gray-600 text-md">{card.text}</p>

            {card.title === 'Our Values' && (
              <ul className="mt-4 text-left list-disc list-inside text-gray-600 space-y-2 text-sm">
                <li><strong>Customer Satisfaction:</strong> Guests first, always.</li>
                <li><strong>Innovation:</strong> Constantly evolving our services.</li>
                <li><strong>Integrity:</strong> We do what’s right.</li>
                <li><strong>Sustainability:</strong> Committed to the planet.</li>
              </ul>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default About;
