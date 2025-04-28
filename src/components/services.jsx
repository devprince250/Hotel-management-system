import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      id: 1,
      name: "Room Booking",
      description: "Easily book rooms for your stay with real-time availability and booking confirmation.",
      icon: "/images/room-booking-icon.svg",
    },
    {
      id: 2,
      name: "Event Management",
      description: "Host events, conferences, or meetings at our hotel with top-tier facilities and services.",
      icon: "/images/event-management-icon.svg",
    },
    {
      id: 3,
      name: "Spa & Wellness",
      description: "Relax and rejuvenate with our premium spa and wellness services designed for your comfort.",
      icon: "/images/spa-wellness-icon.svg",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-green-600 to-gray-200 min-h-screen py-20 px-4">
      {/* Section Title with Animation */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Our Services</h1>
        <p className="text-gray-200 text-lg max-w-xl mx-auto mb-8">
          Explore the wide range of services we offer to make your stay memorable and comfortable.
        </p>
      </motion.section>

      {/* Services Section */}
      <section className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 * service.id, duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}  // Adding hover effect
            whileTap={{ scale: 0.98 }}    // Adding tap effect
            className="bg-white rounded-lg shadow-lg p-8 hover:shadow-2xl transition"
          >
            <div className="mb-6">
              <motion.img
                src={service.icon}
                alt={service.name}
                className="mx-auto w-16 h-16 mb-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 * service.id, duration: 0.6 }}
              />
              <h3 className="text-2xl font-semibold text-green-600 mb-2">{service.name}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  );
};

export default Services;
