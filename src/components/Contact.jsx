import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaUser,
  FaCommentDots,
} from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error('Please fill out all fields');
      return;
    }

    // Fake success for frontend-only
    toast.success('Message sent successfully!');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="max-w-6xl mx-auto pt-16 pb-20 px-6 md:px-12 bg-white text-gray-900">
      <ToastContainer />

      {/* Title */}
      <motion.h2
        className="text-4xl font-bold text-amber-600 mb-10 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact Us
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-12">

        {/* Google Map */}
        <motion.div
          className="space-y-6 order-2 md:order-1"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15952.539238789204!2d30.0569357!3d-1.9536021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca6b0a6b27f33%3A0x316cb8917e058703!2sKigali!5e0!3m2!1sen!2srw!4v1671900000000"
            className="w-full h-64 border rounded-md"
            allowFullScreen=""
            loading="lazy"
          ></iframe>

          {/* Contact Info */}
          <div className="space-y-4 text-sm text-gray-700">
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-amber-600 text-lg" />
              <span>contact@grandstay.rw</span>
            </div>
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-amber-600 text-lg" />
              <span>+250 788 123 456</span>
            </div>
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-amber-600 text-lg" />
              <span>Kigali, Rwanda</span>
            </div>
            <p className="text-xs text-gray-500 mt-2">Open: Mon - Fri, 8am - 5pm</p>

            {/* Social Links */}
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-amber-600 hover:text-amber-800"><FaFacebookF /></a>
              <a href="#" className="text-amber-600 hover:text-amber-800"><FaTwitter /></a>
              <a href="#" className="text-amber-600 hover:text-amber-800"><FaLinkedinIn /></a>
              <a href="#" className="text-amber-600 hover:text-amber-800"><FaInstagram /></a>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-6 order-1 md:order-2"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Name */}
          <div className="flex items-center border border-gray-300 rounded-lg px-4 py-3">
            <FaUser className="text-amber-600 mr-3" />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full focus:outline-none"
              required
            />
          </div>

          {/* Email */}
          <div className="flex items-center border border-gray-300 rounded-lg px-4 py-3">
            <FaEnvelope className="text-amber-600 mr-3" />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="w-full focus:outline-none"
              required
            />
          </div>

          {/* Message */}
          <div className="flex items-start border border-gray-300 rounded-lg px-4 py-3">
            <FaCommentDots className="text-amber-600 mr-3 mt-1" />
            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              className="w-full focus:outline-none"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-amber-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-amber-700 transition"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
