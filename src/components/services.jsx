import React from 'react';
import { motion } from 'framer-motion';
import { FaBed, FaCalendarAlt, FaSpa } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      id: 1,
      name: "Room Booking",
      description: "Easily book rooms for your stay with real-time availability and booking confirmation.",
      icon: <FaBed className="text-amber-600 w-14 h-14" />,
    },
    {
      id: 2,
      name: "Event Management",
      description: "Host events, conferences, or meetings at our hotel with top-tier facilities and services.",
      icon: <FaCalendarAlt className="text-amber-600 w-14 h-14" />,
    },
    {
      id: 3,
      name: "Spa & Wellness",
      description: "Relax and rejuvenate with our premium spa and wellness services designed for your comfort.",
      icon: <FaSpa className="text-amber-600 w-14 h-14" />,
    },
  ];

  return (
    <div className="bg-white min-h-screen py-20 px-4">
      {/* Title Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Our Services</h1>
        <p className="text-gray-600 text-lg max-w-xl mx-auto mb-8">
          Explore the wide range of services we offer to make your stay memorable and comfortable.
        </p>
      </motion.section>

      {/* Services Grid */}
      <section className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 * service.id, duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition duration-300 border border-gray-100"
          >
            <motion.div
              initial={{ rotate: 0 }}
              whileHover={{ rotate: 10 }}
              className="mb-6 flex justify-center"
            >
              {service.icon}
            </motion.div>
            <h3 className="text-2xl font-semibold text-amber-600 mb-2 text-center">
              {service.name}
            </h3>
            <p className="text-gray-600 text-sm text-center">{service.description}</p>
          </motion.div>
        ))}
      </section>
    </div>
  );
};

export default Services;
