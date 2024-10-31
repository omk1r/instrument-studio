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
          className="w-full h-full object-contain transition-opacity duration-100 ease-in-out"
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
