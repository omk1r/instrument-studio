import React from 'react';

const Contact = () => {
  return (
    <section
      className="relative flex flex-col items-center overflow-hidden"
      id="contact"
    >
      <div className="top-0 left-[50%] z-40 absolute translate-x-[-50%]">
        <img
          src="https://res.cloudinary.com/dd85jrb4b/image/upload/f_auto,q_auto/v1/instrument-studio/sdieuj0wmeqfkcgiu9yv"
          alt="mailbox"
        />
      </div>
      <div className="bg-custom-gradient mt-80 py-10 overflow-hidden text-white whitespace-nowrap">
        {' '}
        <div className="inline-block py-5 text-7xl lg:text-9xl animate-slideText">
          <div className="inline-block mr-8 align-middle">
            <img
              src="https://res.cloudinary.com/dd85jrb4b/image/upload/f_auto,q_auto/v1/instrument-studio/ydrkmapo7td5lwlaaj4r"
              alt="no image"
            />
          </div>
          <span className="mr-8 font-instrumentSerif italic">hello</span>
          <span className="mr-8 font-instrument font-medium tracking-tight">
            at
          </span>
          <span className="mr-8 font-instrumentSerif italic">instrument</span>
          <span className="mr-8 font-instrument font-medium tracking-tight">
            dot
          </span>
          <span className="mr-8 font-instrumentSerif italic">com</span>
        </div>{' '}
      </div>
      <button className="group relative flex justify-between items-center gap-2 bg-white my-5 px-6 py-4 rounded-[50px] font-medium text-black text-sm transition-all duration-1000">
        <p className="order-1 group-hover:order-2 transition-all duration-1000">
          Get in touch
        </p>
        <img
          src="https://res.cloudinary.com/dd85jrb4b/image/upload/f_auto,q_auto/v1/instrument-studio/u0fvjw9krlt6mqiuaxny"
          alt="Arrow"
          className="order-2 group-hover:order-1 transition-all group-hover:animate-slideRight duration-1000"
        />
      </button>
      <footer className="flex flex-row items-center gap-2 sm:gap-8 my-20 text-[#616161] text-sm md:text-base">
        <span>About</span>
        <span>Careers</span>
        <span>Privacy Policy</span>
        <span>Instagram</span>
        <span>LinkedIn</span>
        <span>Dribble</span>
      </footer>
    </section>
  );
};

export default Contact;
