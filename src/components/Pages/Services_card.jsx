import React from 'react';

const services = [
  {
    image: '../src/assets/4.jpg',
    title: 'MECHANICAL ENGINEERING',
  },
  {
    image: '../src/assets/4.jpg',
    title: 'AGRICULTURAL PROCESSING',
  },
  {
    image: '../src/assets/2.jpg',
    title: 'OILS AND LUBRICANTS',
  },
  {
    image: '../src/assets/3.jpg',
    title: 'POWER AND ENERGY',
  },
  {
    image: '../src/assets/4.jpg',
    title: 'CHEMICAL RESEARCH',
  },
  {
    image: '../src/assets/1.jpg',
    title: 'MATERIAL ENGINEERING',
  },
];

const Services = () => {
  return (
    <div className="bg-gray-100 py-16 px-8">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-extrabold text-blue-900 sm:text-4xl">OUR SERVICES</h2>
        <div className="h-1 w-20 bg-blue-900 mx-auto mt-4"></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div key={index} className="relative group">
            <img src={service.image} alt={service.title} className="object-cover w-full h-64 shadow-lg" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-white text-xl font-semibold mb-4">{service.title}</h3>
              <button className="bg-white text-blue-900 px-4 py-2 rounded shadow hover:bg-blue-900 hover:text-white transition-colors duration-300">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
