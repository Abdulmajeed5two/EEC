// src/Navbar.js
import React, { useState } from 'react';
import logo from '../header/eec.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faPhoneAlt, faEnvelope, faTimes } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import Slider from '../header/Slider'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div>
      {/* Top Bar */}
      <div className="bg-blue-800 text-white py-2 px-4 md:px-20">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 space-x-0 sm:space-x-4">
            <a href="tel:021-34176660" className="flex items-center space-x-1">
              <FontAwesomeIcon icon={faPhoneAlt} />
              <span>021-34176660</span>
            </a>
            <a href="mailto:info@ExcellenceEngineering.com" className="flex items-center space-x-1">
              <FontAwesomeIcon icon={faEnvelope} />
              <span>info@ExcellenceEngineering.com</span>
            </a>
          </div>
          <div className="hidden sm:block">
            <span>Welcome To Excellence Engineering</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="bg-blue-100 px-4 md:px-20" style={{ height: '100px' }}>
        <div className="container mx-auto h-full flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img src={logo} alt="Logo" className="h-10" />
            <span className="text-lg font-bold text-blue-900">Excellence Engineering</span>
          </div>
          <a href="/quote" className="hidden md:block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Get a Quote</a>
          <button className="block md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} className="text-2xl text-blue-500" />
          </button>
        </div>
      </header>

      {/* Navigation Bar */}
      <nav className={`bg-blue-700 text-white ${menuOpen ? 'block' : 'hidden'} md:block`}>
        <div className="container mx-auto px-4 md:px-7 py-6 flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-5">
          <a href="/" className="hover:text-black-600">HOME</a>
          <a href="/about" className="hover:text-black-600">ABOUT US</a>
          <div className="relative group">
            <a href="/products" className="hover:text-black-600">PRODUCTS</a>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute hidden group-hover:block bg-white text-black mt-1 rounded shadow-lg"
            >
              <a href="/products/product1" className="block px-4 py-2 hover:bg-gray-100">Product 1</a>
              <a href="/products/product2" className="block px-4 py-2 hover:bg-gray-100">Product 2</a>
            </motion.div>
          </div>
          <div className="relative group">
            <a href="/services" className="hover:text-black-600">SERVICES</a>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute hidden group-hover:block bg-white text-black mt-1 rounded shadow-lg"
            >
              <a href="/services/service1" className="block px-4 py-2 hover:bg-gray-100">Service 1</a>
              <a href="/services/service2" className="block px-4 py-2 hover:bg-gray-100">Service 2</a>
            </motion.div>
          </div>
          <a href="/chemicals" className="hover:text-black-600">CHEMICALS</a>
          <a href="/shop" className="hover:text-black-600">SHOP</a>
          <a href="/contact" className="hover:text-black-600">CONTACT US</a>
          <a href="/quote" className="md:hidden bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Get a Quote</a>
        </div>
      </nav>
      <Slider />
    </div>
  );
};

export default Navbar;
