import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-center items-center m-10 sticky top-10 z-50">
      <div className="text-white flex justify-center items-center bg-[#1C1C1C] opacity-80 px-4 py-3 rounded-3xl font-instrument font-medium text-sm">
        <a href="#work" className="mx-4 ">
          Work
        </a>
        <a href="#about" className="mx-4">
          About
        </a>
        <a href="#contact" className="mx-4">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
