import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaShoppingCart } from 'react-icons/fa';

const Rooms = () => {
  const rooms = [
    {
      id: 1,
      name: "Deluxe Room",
      description: "Spacious room with luxury amenities and a stunning city view.",
      image: "https://a0.muscache.com/im/pictures/miso/Hosting-628818713607845254/original/2d5de93d-cfec-456e-8da3-124a15be0628.jpeg?im_w=960",
      price: "$150/night"
    },
    {
      id: 2,
      name: "Standard Room",
      description: "Comfortable room with basic amenities for a relaxing stay.",
      image: "https://a0.muscache.com/im/pictures/miso/Hosting-628818713607845254/original/3f3a5cfb-a109-4d2f-9906-c8ef4e72e414.jpeg?im_w=720",
      price: "$100/night"
    },
    {
      id: 3,
      name: "Suite Room",
      description: "Premium room with a private balcony, hot tub, and top-tier services.",
      image: "https://www.shutterstock.com/shutterstock/photos/2532171663/display_1500/stock-photo-a-modern-and-cozy-hotel-room-featuring-a-large-bed-with-crisp-white-linens-soft-pillows-and-a-2532171663.jpg",
      price: "$250/night"
    },
    {
      id: 4,
      name: "Family Room",
      description: "Ideal for families, offering extra space and comfort for all members.",
      image: "https://www.shutterstock.com/shutterstock/photos/2595537199/display_1500/stock-photo-cheap-hotel-room-with-double-bed-2595537199.jpg",
      price: "$180/night"
    },
    {
      id: 5,
      name: "Single Room",
      description: "Perfect for solo travelers looking for cozy accommodations.",
      image: "https://a0.muscache.com/im/pictures/miso/Hosting-628818713607845254/original/2d5de93d-cfec-456e-8da3-124a15be0628.jpeg?im_w=960",
      price: "$80/night"
    },
    {
      id: 6,
      name: "Presidential Suite",
      description: "Experience ultimate luxury with VIP services and panoramic views.",
      image: "https://a0.muscache.com/im/pictures/miso/Hosting-628818713607845254/original/3f3a5cfb-a109-4d2f-9906-c8ef4e72e414.jpeg?im_w=720",
      price: "$500/night"
    }
  ];

  return (
    <div className="bg-white min-h-screen py-20 px-4">
      {/* Title Section */}
      <section className="text-center px-4 mb-16">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
        >
          Discover Our Rooms
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-gray-700 text-lg max-w-xl mx-auto mb-8"
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
            className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
          >
            <img
              src={room.image}
              alt={room.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">{room.name}</h3>
              <p className="text-gray-600 text-sm mb-3">{room.description}</p>
              <p className="text-lg font-bold text-amber-600 mb-6">{room.price}</p>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <Link
                  to={`/Reservations`}
                  className="inline-flex items-center bg-amber-600 text-white px-5 py-2 rounded-xl hover:bg-amber-700 transition"
                >
                  <FaShoppingCart className="mr-2 text-lg" />
                  Book Now
                </Link>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  );
};

export default Rooms;
