import React, { useState } from 'react';

const Shirt3DView = () => {
  // Array of image sources
  const shirtImages = [
    './images/shirt1.png',
    './images/shirt2.png',
    './images/shirt3.png',
    './images/shirt4.png',
    './images/shirt5.png',
    './images/shirt6.png',
    './images/shirt7.png',
    './images/shirt8.png',
    './images/shirt9.png',
    './images/shirt10.png',
    './images/shirt11.png',
    './images/shirt12.png',
    './images/shirt13.png',
    './images/shirt14.png',
    './images/shirt15.png',
    './images/shirt16.png',
    './images/shirt17.png',
  ];

  // Track the current image index
  const [currentImage, setCurrentImage] = useState(0);

  // Handle mouse move to change image
  const handleMouseMove = (e) => {
    const containerWidth = e.target.offsetWidth;
    const mouseX = e.nativeEvent.offsetX;
    // Calculate the percentage of mouse movement within the container
    const percentage = mouseX / containerWidth;
    // Ensure the index stays within the valid range
    const imageIndex = Math.min(
      Math.max(Math.floor(percentage * shirtImages.length), 0),
      shirtImages.length - 1
    );
    setCurrentImage(imageIndex);
  };

  // Handle mouse leave to reset the image
  const handleMouseLeave = () => {
    setCurrentImage(0);
  };

  return (
    <div className="w-full overflow-hidden flex justify-center items-center bg-[#2B2B2B] rounded-3xl max-w-[48%] relative group">
      {/* Image Container */}
      <div
        className="w-full h-full relative cursor-pointer"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src={shirtImages[currentImage]}
          alt="3D Shirt View"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="absolute bottom-0 w-full flex flex-col items-center justify-center p-4 my-2">
        <p className="font-instrument text-[32px] tracking-tight text-white translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out line-clamp-1">
          May the 4th be with you
        </p>
        <div className="flex flex-row items-center justify-center opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out font-instrument text-white text-[11px] font-medium my-1">
          <span className="bg-black rounded-3xl px-2 py-1 mx-2">Branding</span>
          <span className="bg-black rounded-3xl px-2 py-1 mx-2">Website</span>
          <span className="bg-black rounded-3xl px-2 py-1 mx-2">App</span>
        </div>
      </div>
    </div>
  );
};

export default Shirt3DView;
