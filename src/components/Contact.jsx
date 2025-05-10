import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaUser, FaCommentDots } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    if (!formData.message) newErrors.message = 'Message cannot be empty';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 2000);
  };

  return (
    <div className="relative bg-white min-h-screen py-20 px-4 flex flex-col justify-center items-center overflow-hidden">
      {/* Floating Text */}
      <motion.div
        className="absolute top-10 left-5 text-amber-600 text-3xl font-bold opacity-20 rotate-[-10deg]"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 0.2 }}
        transition={{ duration: 1 }}
      >
        Connect With Us
      </motion.div>
      <motion.div
        className="absolute bottom-10 right-5 text-amber-600 text-3xl font-bold opacity-20 rotate-[10deg]"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 0.2 }}
        transition={{ duration: 1 }}
      >
        We're Here to Help!
      </motion.div>

      {/* Contact Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-lg bg-white shadow-2xl rounded-2xl p-6 z-10"
      >
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center text-amber-600 mb-2"
        >
          Contact Us
        </motion.h2>

        <p className="text-center text-gray-600 mb-6 text-sm">
          We'd love to hear from you. Fill out the form and we’ll get back shortly.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm text-gray-700 mb-1">Name</label>
            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-3 focus-within:ring-2 focus-within:ring-amber-600">
              <FaUser className="text-amber-600" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="ml-3 w-full outline-none bg-transparent text-sm"
              />
            </div>
            {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm text-gray-700 mb-1">Email</label>
            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-3 focus-within:ring-2 focus-within:ring-amber-600">
              <FaEnvelope className="text-amber-600" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="ml-3 w-full outline-none bg-transparent text-sm"
              />
            </div>
            {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm text-gray-700 mb-1">Phone</label>
            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-3 focus-within:ring-2 focus-within:ring-amber-600">
              <FaPhone className="text-amber-600" />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+250 78 000 000"
                className="ml-3 w-full outline-none bg-transparent text-sm"
              />
            </div>
            {errors.phone && <p className="text-red-500 text-xs">{errors.phone}</p>}
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm text-gray-700 mb-1">Message</label>
            <div className="flex items-start border border-gray-300 rounded-lg px-3 py-3 focus-within:ring-2 focus-within:ring-amber-600">
              <FaCommentDots className="text-amber-600 mt-1" />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                rows="4"
                className="ml-3 w-full outline-none bg-transparent text-sm resize-none"
              ></textarea>
            </div>
            {errors.message && <p className="text-red-500 text-xs">{errors.message}</p>}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full ${
              isLoading ? 'bg-gray-400' : 'bg-amber-600 hover:bg-amber-700'
            } text-white font-semibold py-2 rounded-lg transition`}
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;
