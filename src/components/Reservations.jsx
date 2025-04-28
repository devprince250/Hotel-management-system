import React, { useState } from 'react';
import { motion } from 'framer-motion';

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
    // Optional: Send to backend or show toast
  };

  return (
    <div className="bg-gradient-to-br from-green-600 to-gray-200 min-h-screen py-20 px-4 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-4xl bg-white border border-gray-100 shadow-xl rounded-3xl p-10"
      >
        <h2 className="text-4xl font-bold text-green-600 text-center mb-10 tracking-tight">Make a Reservation</h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Full Name */}
          <div className="relative">
            <input
              type="text"
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              required
              className="peer w-full border border-gray-300 px-4 pt-5 pb-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-600"
              placeholder=" "
            />
            <label className="absolute left-4 top-2 text-sm text-gray-600 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-green-600">
              Full Name
            </label>
          </div>

          {/* Email */}
          <div className="relative">
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="peer w-full border border-gray-300 px-4 pt-5 pb-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-600"
              placeholder=" "
            />
            <label className="absolute left-4 top-2 text-sm text-gray-600 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-green-600">
              Email Address
            </label>
          </div>

          {/* Phone */}
          <div className="relative">
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              className="peer w-full border border-gray-300 px-4 pt-5 pb-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-600"
              placeholder=" "
            />
            <label className="absolute left-4 top-2 text-sm text-gray-600 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-green-600">
              Phone Number
            </label>
          </div>

          {/* Room Type */}
          <div className="relative">
            <select
              name="roomType"
              value={form.roomType}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-600"
            >
              <option value="">Select Room Type</option>
              <option value="Standard">Standard</option>
              <option value="Deluxe">Deluxe</option>
              <option value="Suite">Suite</option>
            </select>
          </div>

          {/* Check-in */}
          <div className="relative">
            <input
              type="date"
              name="checkIn"
              value={form.checkIn}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          {/* Check-out */}
          <div className="relative">
            <input
              type="date"
              name="checkOut"
              value={form.checkOut}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          {/* Submit button */}
          <div className="md:col-span-2">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-400 transition"
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
