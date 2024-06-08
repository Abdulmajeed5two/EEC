import React from 'react';
import logo from '../header/eec.png'; // Adjust the path to your logo file

const Footer = () => {
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-start space-y-8 lg:space-y-0 lg:space-x-8">
          {/* Company Logo and Paragraph */}
          <div className="flex flex-col items-center lg:items-start">
            <img src={logo} alt="Excellence Engineering" className="h-16 mb-4" />
            <p className="text-sm text-white-400">
              Excellence Engineering is committed to providing the best industrial solutions for your business.
              We are available to assist you with any challenges you face.
            </p>
          </div>

          {/* Our Solutions Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">Our Solutions</h3>
            <ul className="space-y-2 text-white-400">
              <li>Mechanical Engineering</li>
              <li>Agricultural Processing</li>
              <li>Oils and Lubricants</li>
              <li>Power and Energy</li>
              <li>Chemical Research</li>
              <li>Material Engineering</li>
            </ul>
          </div>

          {/* Get in Touch Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">Get in Touch</h3>
            <p className="text-sm text-white-400 mb-4">
              If you need any industrial solution, we are available for you. Contact us today!
            </p>
            <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-900 transition duration-300">
              Get Quote
            </button>
          </div>
        </div>

        <hr className="my-8 border-white-700" />

        {/* Copyright and Back to Top */}
        <div className="flex flex-col lg:flex-row justify-between items-center text-center lg:text-left">
          <p className="text-sm text-white-400">&copy; 2024 Excellence Engineering. All Rights Reserved.</p>
          <button
            onClick={handleBackToTop}
            className="bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-800 transition duration-300 mt-4 lg:mt-0"
          >
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
