import React from 'react';
import logo from '../header/eec.png';

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="flex items-center space-x-4">
        <div className="animate-spin-slow h-24 w-24">
          <img src={logo} alt="Logo" className="h-full w-full object-contain" />
        </div>
        <div className="text-xl font-bold text-black animate-color-change">
          Excellence Engineering Company
        </div>
      </div>
    </div>
  );
};

export default Loader;
