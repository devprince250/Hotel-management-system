import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa'; // For booking status icons

const MyBookings = () => {
  // Sample booking data
  const bookings = [
    {
      id: 1,
      room: "Deluxe Room",
      date: "2025-05-10",
      price: "$150/night",
      status: "Confirmed"
    },
    {
      id: 2,
      room: "Standard Room",
      date: "2025-06-01",
      price: "$100/night",
      status: "Pending"
    },
    {
      id: 3,
      room: "Suite Room",
      date: "2025-07-15",
      price: "$250/night",
      status: "Cancelled"
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-20 px-6">
      <motion.div 
        className="max-w-7xl mx-auto text-center mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-3xl md:text-4xl font-semibold text-gray-800"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 80 }}
        >
          My Bookings
        </motion.h1>
        <motion.p
          className="text-lg text-gray-600 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Here you can manage and view your upcoming and past bookings.
        </motion.p>
      </motion.div>

      <motion.div 
        className="max-w-7xl mx-auto bg-white p-6 rounded-lg shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <table className="min-w-full table-auto">
          <thead className="bg-green-600 text-white">
            <tr>
              <th className="py-3 px-6 text-left">Room</th>
              <th className="py-3 px-6 text-left">Booking Date</th>
              <th className="py-3 px-6 text-left">Price</th>
              <th className="py-3 px-6 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <motion.tr
                key={booking.id}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="border-b"
              >
                <td className="py-4 px-6">{booking.room}</td>
                <td className="py-4 px-6">{booking.date}</td>
                <td className="py-4 px-6">{booking.price}</td>
                <td className="py-4 px-6">
                  <span className={`inline-flex items-center ${booking.status === "Confirmed" ? 'text-green-500' : booking.status === "Pending" ? 'text-yellow-500' : 'text-red-500'}`}>
                    {booking.status === "Confirmed" && <FaCheckCircle className="mr-2" />}
                    {booking.status === "Pending" && <FaTimesCircle className="mr-2" />}
                    {booking.status === "Cancelled" && <FaTimesCircle className="mr-2" />}
                    {booking.status}
                  </span>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </div>
  );
};

export default MyBookings;
