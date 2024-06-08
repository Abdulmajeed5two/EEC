// src/components/Mission.js
import React from 'react';

const Mission = () => {
  return (
    <div className="bg-white py-16 px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          A high level Quality Control in compliance with National and International regulations and standards
        </h2>
        <p className="mt-4 text-lg text-gray-500">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
          Consectetur adipiscing elit.
        </p>
      </div>
      <div className="mt-12 flex justify-center space-x-8">
        <div className="text-center">
          <img
            src="../src/assets/ser-icon4.png"
            alt="Vision"
            className="mx-auto h-16 w-16"
          />
          <h3 className="mt-4 text-xl font-semibold text-gray-900">VISION</h3>
        </div>
        <div className="text-center">
          <img
            src="../src/assets/ser-icon5.png"
            alt="Values"
            className="mx-auto h-16 w-16"
          />
          <h3 className="mt-4 text-xl font-semibold text-gray-900">VALUES</h3>
        </div>
        <div className="text-center">
          <img
            src="../src/assets/ser-icon6.png" 
            alt="Mission"
            className="mx-auto h-16 w-16"
          />
          <h3 className="mt-4 text-xl font-semibold text-gray-900">MISSION</h3>
        </div>
      </div>
    </div>
  );
};

export default Mission;
