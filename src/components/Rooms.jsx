import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Rooms = () => {
  const rooms = [
    {
      id: 1,
      name: "Deluxe Room",
      description: "Spacious room with luxury amenities and a stunning city view.",
      image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/553481795.jpg?k=bd177f6c5936a091bc4ffae97ea5d0c065d3b9e2a0909b984981c9da82f93df0&o=",
      price: "$150/night"
    },
    {
      id: 2,
      name: "Standard Room",
      description: "Comfortable room with basic amenities for a relaxing stay.",
      image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/553481795.jpg?k=bd177f6c5936a091bc4ffae97ea5d0c065d3b9e2a0909b984981c9da82f93df0&o=",
      price: "$100/night"
    },
    {
      id: 3,
      name: "Suite Room",
      description: "Premium room with a private balcony, hot tub, and top-tier services.",
      image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/553481795.jpg?k=bd177f6c5936a091bc4ffae97ea5d0c065d3b9e2a0909b984981c9da82f93df0&o=",
      price: "$250/night"
    },
    {
      id: 4,
      name: "Family Room",
      description: "Ideal for families, offering extra space and comfort for all members.",
      image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/553481795.jpg?k=bd177f6c5936a091bc4ffae97ea5d0c065d3b9e2a0909b984981c9da82f93df0&o=",
      price: "$180/night"
    },
    {
      id: 5,
      name: "Single Room",
      description: "Perfect for solo travelers looking for cozy accommodations.",
      image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/553481795.jpg?k=bd177f6c5936a091bc4ffae97ea5d0c065d3b9e2a0909b984981c9da82f93df0&o=",
      price: "$80/night"
    },
    {
      id: 6,
      name: "Presidential Suite",
      description: "Experience ultimate luxury with VIP services and panoramic views.",
      image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/553481795.jpg?k=bd177f6c5936a091bc4ffae97ea5d0c065d3b9e2a0909b984981c9da82f93df0&o=",
      price: "$500/night"
    }
  ];

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
          Discover Our Rooms
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-gray-200 text-lg max-w-xl mx-auto mb-8"
        >
          Choose the perfect room and experience comfort and luxury at its finest.
        </motion.p>
      </section>

      {/* Rooms Grid */}
      <section className="grid gap-10 px-6 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {rooms.map((room, index) => (
          <motion.div
            key={room.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
          >
            <img
              src={room.image}
              alt={room.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-green-600 mb-2">{room.name}</h3>
              <p className="text-gray-600 text-sm mb-3">{room.description}</p>
              <p className="text-lg font-bold text-green-600 mb-6">{room.price}</p>
              <Link
                to={`/book-room/${room.id}`}
                className="inline-block bg-green-600 text-white px-5 py-2 rounded-xl hover:bg-green-700 transition"
              >
                Book Now
              </Link>
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  );
};

export default Rooms;
