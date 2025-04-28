import React from 'react';

const features = [
  {
    title: 'Lightning Fast',
    description: 'Enjoy blazing fast performance with our optimized technology stack.',
    icon: '⚡',
  },
  {
    title: 'Secure by Design',
    description: 'Your data is protected with end-to-end encryption and strong access controls.',
    icon: '🔒',
  },
  {
    title: 'Cloud Sync',
    description: 'Access your data anytime, anywhere — always in sync across devices.',
    icon: '☁️',
  },
  {
    title: '24/7 Support',
    description: 'We’re here whenever you need us with real human support.',
    icon: '💬',
  },
  {
    title: 'Customizable UI',
    description: 'Easily personalize your dashboard and preferences.',
    icon: '🎨',
  },
  {
    title: 'Regular Updates',
    description: 'Stay ahead with new features and improvements every month.',
    icon: '🚀',
  },
];

const Features = () => {
  return (
    <div className="bg-white min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-teal-600 mb-4">Powerful Features</h1>
        <p className="text-gray-600 text-lg mb-12">
          Everything you need to grow and manage your digital experience.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-purple-50 p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-teal-700 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
