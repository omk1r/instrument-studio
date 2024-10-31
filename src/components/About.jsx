import React from 'react';

const About = () => {
  return (
    <section
      className="mt-24 flex flex-col items-center text-white font-instrument overflow-hidden"
      id="about"
    >
      <div className="flex flex-col items-center my-5">
        <span className="font-bold">SINCE 2017</span>
        <span className="text-lg font-instrumentSerif tracking-tight leading-[90%]">
          We are award winning design studio
        </span>
      </div>
      <div className="text-center my-14">
        <h1 className="text-[170px] font-bold leading-[90%] tracking-tight uppercase mx-20">
          From London, UK.
        </h1>
      </div>
      <div className="text-[64px] font-instrumentSerif leading-[100%] w-full text-center px-20 my-10">
        We hold the conviction that excellent design transcends mere appearance
        — it serves as a vital medium for communication and engagement.
      </div>
      <div className="flex flex-row my-20">
        <div className="flex flex-col -mr-8 z-30 hover:-translate-y-5 transition-all duration-500 ease-in-out">
          <img
            src="https://res.cloudinary.com/dd85jrb4b/image/upload/f_auto,q_auto/v1/instrument-studio/employees/ka5tntydnbxd72wq0mbh"
            alt="Employee 2"
          />
          <div
            className="flex flex-col items-center gap-2 rotate-12"
            style={{ transform: 'rotateX(30deg) rotateY(30deg)' }}
          >
            <span className="font-bold text-sm tracking-tight leading-[90%] uppercase">
              Zara Kennedy
            </span>
            <span className="font-instrumentSerif text-lg tracking-tight leading-[90%]">
              Founder
            </span>
          </div>
        </div>

        <div className="flex flex-col -mr-8 z-20 hover:-translate-y-5 transition-all duration-500 ease-in-out">
          <img
            src="https://res.cloudinary.com/dd85jrb4b/image/upload/f_auto,q_auto/v1/instrument-studio/employees/mrhf7zfjmz7q2lkv6s4d"
            alt="Employee 1"
          />
          <div
            className="flex flex-col items-center gap-2 rotate-12"
            style={{ transform: 'rotateX(30deg) rotateY(30deg)' }}
          >
            <span className="font-bold text-sm tracking-tight leading-[90%] uppercase">
              Riley howells
            </span>
            <span className="font-instrumentSerif text-lg tracking-tight leading-[90%]">
              Developer
            </span>
          </div>
        </div>

        <div className="flex flex-col z-10 hover:-translate-y-5 transition-all duration-500 ease-in-out">
          <img
            src="https://res.cloudinary.com/dd85jrb4b/image/upload/f_auto,q_auto/v1/instrument-studio/employees/erfqm8s3dol3xkw7zaos"
            alt="Employee 3"
          />
          <div
            className="flex flex-col items-center gap-2 rotate-12"
            style={{ transform: 'rotateX(30deg) rotateY(30deg)' }}
          >
            <span className="font-bold text-sm tracking-tight leading-[90%] uppercase">
              Lily Thompson
            </span>
            <span className="font-instrumentSerif text-lg tracking-tight leading-[90%]">
              Art Director
            </span>
          </div>
        </div>
      </div>
      <div className="overflow-hidden whitespace-nowrap my-20">
        {' '}
        <div className="inline-block animate-slideText py-5">
          {' '}
          <span className="text-8xl font-medium tracking-tight mx-20">
            Meta
          </span>{' '}
          <span className="text-8xl font-medium tracking-tight mx-20">
            Samsung
          </span>{' '}
          <span className="text-8xl font-medium tracking-tight mx-20">
            Intel Corporation
          </span>{' '}
          <span className="text-8xl font-medium tracking-tight mx-20">
            Oracle
          </span>{' '}
          <span className="text-8xl font-medium tracking-tight mx-20">
            Adobe
          </span>{' '}
          <span className="text-8xl font-medium tracking-tight mx-20">
            Figma
          </span>{' '}
        </div>{' '}
      </div>
      <div className="my-10 relative left-[15%]">
        <h4 className="font-instrumentSerif text-6xl leading-[100%]">
          Our Capabilites
        </h4>
        <div className="flex flex-row gap-14 my-10 text-2xl tracking-tight">
          <ul>
            <li>Web Design</li>
            <li>Product Design</li>
            <li>Product Design</li>
            <li>UI & UX Design</li>
            <li>Art direction</li>
          </ul>
          <ul>
            <li>Visual Design</li>
            <li>Ecommerce</li>
            <li>Back-end</li>
            <li>Front-end</li>
            <li>Responsive</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
