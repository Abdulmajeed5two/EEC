import React from 'react';
import FAQ from './FAQ';

const AboutUs = () => {
  return (
    <div className="bg-gray-100 py-16 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-3xl font-extrabold text-blue-900 sm:text-4xl">ABOUT US</h2>
          <div className="h-1 w-20 bg-blue-900 my-4"></div>
          <p className="text-gray-700 mb-4">
            Tdolor sit amet, consectetur, adipis civelit sed quia non qui dolorem ipsum quia dolor sit amet, consectetur, adipis civelit. Red quia numquam.
          </p>
          <p className="text-gray-700 mb-4">
            Tdolor sit amet, consectetur, adipis civelit sed quia non qui dolorem ipsum quia dolor sit amet, consectetur, adipis civelit. Red quia numquam.
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Our Company Growth</li>
            <li>1000 Employed</li>
            <li>Our Company Growth</li>
            <li>Customer Relationship</li>
          </ul>
          <button className="mt-6 px-4 py-2 bg-blue-900 text-white font-semibold rounded hover:bg-blue-800 transition duration-200">
            ABOUT US
          </button>
        </div>
        <div>
          <h2 className="text-3xl font-extrabold text-blue-900 sm:text-4xl">FREQUENTLY ASK QUESTIONS</h2>
          <div className="h-1 w-20 bg-blue-900 my-4"></div>
          <FAQ />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
