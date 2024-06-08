import React from 'react';

const MapContactSection = () => {
  return (
    <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Map iframe */}
        <div className="w-full h-96 lg:h-auto">
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.056096854264!2d-122.41941548468138!3d37.77492927975998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808581553bfecec9%3A0x71e740d2a18e7ff1!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1626378539838!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            title="Company Location"
          ></iframe>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col justify-center space-y-4">
          <h2 className="text-3xl font-bold text-gray-800">
            If You Need Any Industrial Solution ... We Are Available For You
          </h2>
          <button className="self-start bg-blue-900 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default MapContactSection;
