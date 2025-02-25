import React, { useState } from 'react';

const Shirt3DView = () => {
  // Array of image sources
  const shirtImages = [
    'https://res.cloudinary.com/dd85jrb4b/image/upload/f_auto,q_auto/v1/instrument-studio/shirt-images/rcs7bobkdk8mw1mub6zf',
    'https://res.cloudinary.com/dd85jrb4b/image/upload/f_auto,q_auto/v1/instrument-studio/shirt-images/ah5wpbkvwntpfx3qr8bx',
    'https://res.cloudinary.com/dd85jrb4b/image/upload/f_auto,q_auto/v1/instrument-studio/shirt-images/aocvoa8hqewxelnafr2g',
    'https://res.cloudinary.com/dd85jrb4b/image/upload/f_auto,q_auto/v1/instrument-studio/shirt-images/xywarpnhg3g1131qki4s',
    'https://res.cloudinary.com/dd85jrb4b/image/upload/f_auto,q_auto/v1/instrument-studio/shirt-images/tahcfk0970tgixbvor4z',
    'https://res.cloudinary.com/dd85jrb4b/image/upload/f_auto,q_auto/v1/instrument-studio/shirt-images/sdndprqd8ovwbr9kt3ga',
    'https://res.cloudinary.com/dd85jrb4b/image/upload/f_auto,q_auto/v1/instrument-studio/shirt-images/td6muezuntwkl4kvr1cw',
    'https://res.cloudinary.com/dd85jrb4b/image/upload/f_auto,q_auto/v1/instrument-studio/shirt-images/d4jkdmgjoktlh65ne5g9',
    'https://res.cloudinary.com/dd85jrb4b/image/upload/f_auto,q_auto/v1/instrument-studio/shirt-images/ytfd5puwlzgijdyxh6zi',
    'https://res.cloudinary.com/dd85jrb4b/image/upload/f_auto,q_auto/v1/instrument-studio/shirt-images/lujwlmxdbl5zsiws2lmd',
    'https://res.cloudinary.com/dd85jrb4b/image/upload/f_auto,q_auto/v1/instrument-studio/shirt-images/lrptghoiwzpsdvrgq7te',
    'https://res.cloudinary.com/dd85jrb4b/image/upload/f_auto,q_auto/v1/instrument-studio/shirt-images/kfda5ngbolvcapy1up9t',
    'https://res.cloudinary.com/dd85jrb4b/image/upload/f_auto,q_auto/v1/instrument-studio/shirt-images/vltfgmfoign4txwgmmx0',
    'https://res.cloudinary.com/dd85jrb4b/image/upload/f_auto,q_auto/v1/instrument-studio/shirt-images/l9fsfj74z0itin8knl4r',
    'https://res.cloudinary.com/dd85jrb4b/image/upload/f_auto,q_auto/v1/instrument-studio/shirt-images/r0dzo2jtbolvsalkgaqz',
    'https://res.cloudinary.com/dd85jrb4b/image/upload/f_auto,q_auto/v1/instrument-studio/shirt-images/grb5sy4lpmftwvzydzc0',
    'https://res.cloudinary.com/dd85jrb4b/image/upload/f_auto,q_auto/v1/instrument-studio/shirt-images/bob89p0iyu2tnfmbjx2b',
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
    <div className="group relative flex justify-center items-center bg-[#2B2B2B] mx-2 my-2 rounded-3xl w-full sm:max-w-[48%] overflow-hidden">
      {/* Image Container */}
      <div
        className="relative w-full h-full cursor-pointer"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src={shirtImages[currentImage]}
          alt="3D Shirt View"
          className="w-full h-full object-contain transition-opacity duration-100 ease-in-out"
        />
      </div>
      <div className="bottom-0 absolute flex flex-col justify-center items-center my-2 p-4 w-full">
        <p className="font-instrument text-[32px] text-white line-clamp-1 tracking-tight transition-all translate-y-full group-hover:translate-y-0 duration-500 ease-in-out">
          May the 4th be with you
        </p>
        <div className="flex flex-row justify-center items-center opacity-0 group-hover:opacity-100 my-1 font-instrument font-medium text-[11px] text-white transition-all translate-y-full group-hover:translate-y-0 duration-500 ease-in-out">
          <span className="bg-black mx-2 px-2 py-1 rounded-3xl">Branding</span>
          <span className="bg-black mx-2 px-2 py-1 rounded-3xl">Website</span>
          <span className="bg-black mx-2 px-2 py-1 rounded-3xl">App</span>
        </div>
      </div>
    </div>
  );
};

export default Shirt3DView;
