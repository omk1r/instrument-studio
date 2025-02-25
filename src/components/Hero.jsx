import React from 'react';

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center my-20 font-instrument text-white">
      <h1 className="text-5xl lg:text-9xl text-center">
        <span className="z-10 relative font-instrumentSerif italic">the </span>
        <span className="font-medium uppercase tracking-tight">
          {' '}
          Instrument Design{' '}
        </span>
        <span className="z-10 relative font-instrumentSerif italic">
          studio
        </span>
      </h1>
      <div className="self-end my-5 mr-[19%] max-w-[30%]">
        <p>
          The Instrument's a fresh design studio vibing out of London. We'll
          hook you up with killer branding, turn your design dreams into
          reality, and build a dope websites.
        </p>
        <button className="group relative flex justify-between items-center gap-2 bg-white my-5 px-6 py-4 rounded-[50px] font-medium text-black text-sm transition-all duration-1000">
          <p className="order-1 group-hover:order-2 transition-all duration-1000">
            Work with us
          </p>
          <img
            src="https://res.cloudinary.com/dd85jrb4b/image/upload/f_auto,q_auto/v1/instrument-studio/u0fvjw9krlt6mqiuaxny"
            alt="Arrow"
            className="order-2 group-hover:order-1 transition-all group-hover:animate-slideRight duration-1000"
          />
        </button>
      </div>
      <img
        id="floating-image"
        src="https://res.cloudinary.com/dd85jrb4b/image/upload/f_auto,q_auto/v1/instrument-studio/ymaxeoymsff9j0ner8vy"
        alt="Flying Image"
        className="z-0 absolute animate-flying"
      />
    </section>
  );
};

export default Hero;
