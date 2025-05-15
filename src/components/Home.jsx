import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaInfoCircle } from 'react-icons/fa';

const Home = () => {
  return (
    <main className="font-sans text-gray-800">
      {/* Hero Section */}
      <section
        className="bg-cover bg-center min-h-screen relative flex items-center justify-center text-center px-6 md:px-12"
        style={{
          backgroundImage:
            'url(https://cf.bstatic.com/xdata/images/hotel/max1024x768/553481795.jpg?k=bd177f6c5936a091bc4ffae97ea5d0c065d3b9e2a0909b984981c9da82f93df0&o=)',
        }}
        aria-label="Hotel welcoming hero section"
      >
        {/* Dark overlay with softer opacity for better background visibility */}
        <div className="absolute inset-0 bg-black/50 z-0" />

        <div className="relative z-10 max-w-3xl md:max-w-4xl px-4">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, type: 'spring', stiffness: 80 }}
          >
            Welcome to{' '}
            <span className="text-amber-400 underline decoration-amber-300 decoration-4">
              HotelManager
            </span>
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl text-gray-100 mb-12 px-2 md:px-0"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          >
            Elevate your hospitality business with intuitive tools and elegant design.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <a
              href="/signup"
              className="bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-4 focus:ring-amber-400 border border-white text-white font-bold px-8 py-4 rounded-xl flex items-center gap-3 text-lg shadow-lg transition-transform transform hover:-translate-y-1 active:scale-95 "
              aria-label="Get started with signing up"
            >
              <FaArrowRight /> Get Started
            </a>
            <a
              href="/mybookings"
              className="bg-white/20 hover:bg-white/30 focus:outline-none focus:ring-4 focus:ring-white/70 text-white font-bold px-8 py-4 rounded-xl flex items-center gap-3 text-lg border border-white transition-transform transform hover:-translate-y-1 active:scale-95"
              aria-label="Learn more about HotelManager"
            >
              <FaInfoCircle /> Learn More
            </a>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-20 px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.h2
            className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Premium Features
          </motion.h2>
          <motion.p
            className="text-gray-600 text-lg max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            Designed for luxury hotels and boutique accommodations to streamline operations and boost guest satisfaction.
          </motion.p>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {/* Feature Card */}
          {[
            {
              title: 'Smart Booking',
              description:
                'Seamless reservations with AI-powered availability forecasting and dynamic pricing.',
              iconColor: 'text-amber-600',
              bg: 'bg-amber-100/80',
              svg: (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 17v2a2 2 0 002 2h4a2 2 0 002-2v-2m-6 0V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2h4a2 2 0 002-2z"
                />
              ),
            },
            {
              title: 'Concierge Support',
              description:
                'Dedicated 24/7 support with multilingual staff and instant messaging.',
              iconColor: 'text-blue-600',
              bg: 'bg-blue-100/80',
              svg: (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8c1.21 0 2.2-.94 2.2-2.1V5.21a2 2 0 011.66-.99l4.75-.45a2 2 0 011.93 1.45l1.61 5.19a2 2 0 01-1.5 2.41l-2.6 1.04a2 2 0 01-.55 2.4l1.79 1.89a2 2 0 01-2.3 2.33l-2.7-.28a2 2 0 01-2.01 1.65l-1.78 4.94a2 2 0 01-2.56 1.34l-1.79-1.88a2 2 0 01-1.48-2.09l.15-4.29a2 2 0 01-.56-2.41l1.72-1.43a2 2 0 011.79-2.06l4.94-.89a2 2 0 012.34 2.12V8h.01c-.01.56.09 1.04.26 1.51.16.46.39.88.69 1.23z"
                />
              ),
            },
            {
              title: 'Real-Time Analytics',
              description:
                'Dashboard with occupancy rates, revenue tracking, and guest preferences.',
              iconColor: 'text-emerald-600',
              bg: 'bg-emerald-100/80',
              svg: (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              ),
            },
          ].map((feature, idx) => (
            <motion.div
              key={idx}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition border border-gray-200"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + idx * 0.2, duration: 0.8 }}
              whileHover={{ y: -6 }}
              role="region"
              aria-label={feature.title}
            >
              <div className={`flex justify-center mb-6 ${feature.bg} p-4 rounded-full`}>
                <svg
                  className={`w-12 h-12 ${feature.iconColor}`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  {feature.svg}
                </svg>
              </div>
              <h4 className="text-2xl font-semibold text-gray-800 mb-4">{feature.title}</h4>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action below Features */}
        <motion.div
          className="mt-16 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <a
            href="/signup"
            className="bg-amber-600 hover:bg-amber-700 text-white font-bold px-10 py-4 rounded-xl shadow-lg transition-transform transform hover:-translate-y-1 active:scale-95"
            aria-label="Start your free trial"
          >
            Start Your Free Trial
          </a>
        </motion.div>
      </section>
    </main>
  );
};

export default Home;
