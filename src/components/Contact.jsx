import React from 'react';

const Contact = () => {
  return (
    <section
      className="flex flex-col items-center relative overflow-hidden"
      id="contact"
    >
      <div className=" absolute top-0 left-[50%] translate-x-[-50%] z-40">
        <img
          src="https://res.cloudinary.com/dd85jrb4b/image/upload/f_auto,q_auto/v1/instrument-studio/sdieuj0wmeqfkcgiu9yv"
          alt="mailbox"
        />
      </div>
      <div className="overflow-hidden whitespace-nowrap  bg-custom-gradient text-white py-10 mt-80">
        {' '}
        <div className="inline-block animate-slideText py-5 text-9xl ">
          <div className="inline-block align-middle mr-8">
            <img
              src="https://res.cloudinary.com/dd85jrb4b/image/upload/f_auto,q_auto/v1/instrument-studio/ydrkmapo7td5lwlaaj4r"
              alt="no image"
            />
          </div>
          <span className="italic font-instrumentSerif mr-8">hello</span>
          <span className="font-instrument font-medium mr-8 tracking-tight">
            at
          </span>
          <span className="italic font-instrumentSerif mr-8">instrument</span>
          <span className="font-instrument font-medium mr-8 tracking-tight">
            dot
          </span>
          <span className="italic font-instrumentSerif mr-8">com</span>
        </div>{' '}
      </div>
      <button className="group relative my-5 bg-white font-medium text-sm px-6 py-4 text-black rounded-[50px] flex items-center justify-between gap-2 transition-all duration-1000">
        <p className="order-1 group-hover:order-2 transition-all duration-1000">
          Get in touch
        </p>
        <img
          src="https://res.cloudinary.com/dd85jrb4b/image/upload/f_auto,q_auto/v1/instrument-studio/u0fvjw9krlt6mqiuaxny"
          alt="Arrow"
          className="order-2 group-hover:order-1 group-hover:animate-slideRight transition-all duration-1000"
        />
      </button>
      <footer className="text-[#616161] my-20 flex flex-row gap-8 items-center">
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
