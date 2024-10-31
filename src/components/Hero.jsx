import React from 'react';

const Hero = () => {
  return (
    <section className=" text-white flex flex-col items-center relative my-20 font-instrument">
      <h1 className="text-9xl text-center">
        <span className="font-instrumentSerif italic z-10 relative">the</span>
        <span className=" uppercase font-medium tracking-tight">
          {' '}
          Instrument Design{' '}
        </span>
        <span className="font-instrumentSerif italic z-10 relative">
          studio
        </span>
      </h1>
      <div className=" my-5 self-end mr-[19%]  max-w-[30%] ">
        <p>
          The Instrument's a fresh design studio vibing out of London. We'll
          hook you up with killer branding, turn your design dreams into
          reality, and build a dope websites.
        </p>
        <button className="group relative my-5 bg-white font-medium text-sm px-6 py-4 text-black rounded-[50px] flex items-center justify-between gap-2 transition-all duration-1000">
          <p className="order-1 group-hover:order-2 transition-all duration-1000">
            Work with us
          </p>
          <img
            src="https://res.cloudinary.com/dd85jrb4b/image/upload/f_auto,q_auto/v1/instrument-studio/u0fvjw9krlt6mqiuaxny"
            alt="Arrow"
            className="order-2 group-hover:order-1 group-hover:animate-slideRight transition-all duration-1000"
          />
        </button>
      </div>
      <img
        id="floating-image"
        src="https://res.cloudinary.com/dd85jrb4b/image/upload/f_auto,q_auto/v1/instrument-studio/ymaxeoymsff9j0ner8vy"
        alt="Flying Image"
        className="animate-flying absolute z-0"
      />
    </section>
  );
};

export default Hero;
