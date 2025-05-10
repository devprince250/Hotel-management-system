import React, { useState } from 'react';
import { useParams } from 'react-router-dom'; // To access the room ID from the URL
import { motion } from 'framer-motion';
import { FaCreditCard, FaCalendarAlt, FaUserAlt } from 'react-icons/fa';

const BookingPage = () => {
  const { id } = useParams(); // Extract the room ID from the URL

  // Room details (this could be fetched from an API or database based on the room ID)
  const roomDetails = {
    1: { name: "Deluxe Room", price: "$150/night", description: "Spacious room with luxury amenities and a stunning city view." },
    2: { name: "Standard Room", price: "$100/night", description: "Comfortable room with basic amenities for a relaxing stay." },
    3: { name: "Suite Room", price: "$250/night", description: "Premium room with a private balcony, hot tub, and top-tier services." },
    4: { name: "Family Room", price: "$180/night", description: "Ideal for families, offering extra space and comfort for all members." },
    5: { name: "Single Room", price: "$80/night", description: "Perfect for solo travelers looking for cozy accommodations." },
    6: { name: "Presidential Suite", price: "$500/night", description: "Experience ultimate luxury with VIP services and panoramic views." }
  };

  const room = roomDetails[id]; // Fetch room details based on the ID

  // State for booking form
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    checkInDate: '',
    checkOutDate: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Booking confirmed!"); // Placeholder for booking confirmation
  };

  return (
    <div className="bg-gradient-to-br from-green-600 to-gray-300 min-h-screen py-20 px-4">
      {/* Title Section */}
      <section className="text-center px-4 mb-16">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold text-white mb-4"
        >
          Booking for {room.name}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-gray-200 text-lg max-w-xl mx-auto mb-8"
        >
          Enjoy your stay with us! Fill out the form below to complete your booking.
        </motion.p>
      </section>

      {/* Room Details */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.7 }}
        className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-xl"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          <h3 className="text-2xl font-semibold text-green-600 mb-4">{room.name}</h3>
          <p className="text-gray-600 mb-4">{room.description}</p>
          <p className="text-lg font-bold text-green-600 mb-6">{room.price}</p>
        </motion.div>

        {/* Booking Form */}
        <motion.form 
          onSubmit={handleSubmit} 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.6, duration: 0.7 }}
          className="space-y-6"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-gray-600 mb-2" htmlFor="fullName">Full Name</label>
              <motion.input
                whileFocus={{ scale: 1.05 }}
                name="fullName"
                id="fullName"
                type="text"
                value={formData.fullName}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-600"
                placeholder="Enter your full name"
                required
              />
            </div>
            <div className="flex-1">
              <label className="block text-gray-600 mb-2" htmlFor="email">Email Address</label>
              <motion.input
                whileFocus={{ scale: 1.05 }}
                name="email"
                id="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-600"
                placeholder="Enter your email address"
                required
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-gray-600 mb-2" htmlFor="phone">Phone Number</label>
              <motion.input
                whileFocus={{ scale: 1.05 }}
                name="phone"
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-600"
                placeholder="Enter your phone number"
                required
              />
            </div>
            <div className="flex-1">
              <label className="block text-gray-600 mb-2" htmlFor="checkInDate">Check-In Date</label>
              <motion.input
                whileFocus={{ scale: 1.05 }}
                name="checkInDate"
                id="checkInDate"
                type="date"
                value={formData.checkInDate}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-600"
                required
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-gray-600 mb-2" htmlFor="checkOutDate">Check-Out Date</label>
              <motion.input
                whileFocus={{ scale: 1.05 }}
                name="checkOutDate"
                id="checkOutDate"
                type="date"
                value={formData.checkOutDate}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-600"
                required
              />
            </div>
          </div>

          <div className="flex justify-center mt-6">
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              className="bg-green-600 text-white px-6 py-3 rounded-xl flex items-center hover:bg-green-700 transition"
            >
              <FaCreditCard className="mr-2 text-lg" />
              Confirm Booking
            </motion.button>
          </div>
        </motion.form>
      </motion.section>
    </div>
  );
};

export default BookingPage;
