import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaUser, FaEnvelope, FaPhone, FaBed, FaCalendarAlt
} from 'react-icons/fa';

const Reservations = () => {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    roomType: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Reservation submitted:', form);
  };

  return (
    <div className="bg-white min-h-screen py-20 px-4 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl bg-white border border-gray-200 shadow-2xl rounded-3xl p-10"
      >
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Make a Reservation</h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Full Name */}
          <div className="relative">
            <div className="flex items-center gap-3 border border-gray-300 rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-amber-600">
              <FaUser className="text-amber-600" />
              <input
                type="text"
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                required
                placeholder="Full Name"
                className="w-full border-none focus:outline-none text-gray-900"
              />
            </div>
          </div>

          {/* Email */}
          <div className="relative">
            <div className="flex items-center gap-3 border border-gray-300 rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-amber-600">
              <FaEnvelope className="text-amber-600" />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="Email Address"
                className="w-full border-none focus:outline-none text-gray-900"
              />
            </div>
          </div>

          {/* Phone */}
          <div className="relative">
            <div className="flex items-center gap-3 border border-gray-300 rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-amber-600">
              <FaPhone className="text-amber-600" />
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
                placeholder="Phone Number"
                className="w-full border-none focus:outline-none text-gray-900"
              />
            </div>
          </div>

          {/* Room Type */}
          <div className="relative">
            <div className="flex items-center gap-3 border border-gray-300 rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-amber-600">
              <FaBed className="text-amber-600" />
              <select
                name="roomType"
                value={form.roomType}
                onChange={handleChange}
                required
                className="w-full border-none focus:outline-none bg-transparent text-gray-900"
              >
                <option value="">Select Room Type</option>
                <option value="Standard">Standard</option>
                <option value="Deluxe">Deluxe</option>
                <option value="Suite">Suite</option>
              </select>
            </div>
          </div>

          {/* Check-In */}
          <div className="relative">
            <div className="flex items-center gap-3 border border-gray-300 rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-amber-600">
              <FaCalendarAlt className="text-amber-600" />
              <input
                type="date"
                name="checkIn"
                value={form.checkIn}
                onChange={handleChange}
                required
                className="w-full border-none focus:outline-none text-gray-900"
              />
            </div>
          </div>

          {/* Check-Out */}
          <div className="relative">
            <div className="flex items-center gap-3 border border-gray-300 rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-amber-600">
              <FaCalendarAlt className="text-amber-600" />
              <input
                type="date"
                name="checkOut"
                value={form.checkOut}
                onChange={handleChange}
                required
                className="w-full border-none focus:outline-none text-gray-900"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="w-full bg-amber-600 text-white py-3 rounded-xl font-semibold hover:bg-amber-700 transition"
            >
              Confirm Reservation
            </motion.button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default Reservations;
