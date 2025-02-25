import React from 'react';

const About = () => {
  return (
    <section
      className="flex flex-col items-center mt-24 overflow-hidden font-instrument text-white"
      id="about"
    >
      <div className="flex flex-col items-center my-5">
        <span className="font-bold">SINCE 2017</span>
        <span className="font-instrumentSerif text-lg leading-[90%] tracking-tight">
          We are award winning design studio
        </span>
      </div>
      <div className="my-14 text-center">
        <h1 className="mx-20 font-bold md:text-[170px] text-6xl uppercase leading-[90%] tracking-tight">
          From London, UK.
        </h1>
      </div>
      <div className="my-10 md:px-20 w-full font-instrumentSerif md:text-[64px] text-4xl text-center leading-[100%]">
        We hold the conviction that excellent design transcends mere appearance
        — it serves as a vital medium for communication and engagement.
      </div>
      <div className="flex flex-row mx-4 my-20">
        <div className="z-30 flex flex-col -mr-8 transition-all hover:-translate-y-5 duration-500 ease-in-out">
          <img
            src="https://res.cloudinary.com/dd85jrb4b/image/upload/f_auto,q_auto/v1/instrument-studio/employees/ka5tntydnbxd72wq0mbh"
            alt="Employee 2"
          />
          <div
            className="flex flex-col items-center gap-2 rotate-12"
            style={{ transform: 'rotateX(30deg) rotateY(30deg)' }}
          >
            <span className="font-bold text-sm uppercase leading-[90%] tracking-tight">
              Zara Kennedy
            </span>
            <span className="font-instrumentSerif text-lg leading-[90%] tracking-tight">
              Founder
            </span>
          </div>
        </div>

        <div className="z-20 flex flex-col -mr-8 transition-all hover:-translate-y-5 duration-500 ease-in-out">
          <img
            src="https://res.cloudinary.com/dd85jrb4b/image/upload/f_auto,q_auto/v1/instrument-studio/employees/mrhf7zfjmz7q2lkv6s4d"
            alt="Employee 1"
          />
          <div
            className="flex flex-col items-center gap-2 rotate-12"
            style={{ transform: 'rotateX(30deg) rotateY(30deg)' }}
          >
            <span className="font-bold text-sm uppercase leading-[90%] tracking-tight">
              Riley howells
            </span>
            <span className="font-instrumentSerif text-lg leading-[90%] tracking-tight">
              Developer
            </span>
          </div>
        </div>

        <div className="z-10 flex flex-col transition-all hover:-translate-y-5 duration-500 ease-in-out">
          <img
            src="https://res.cloudinary.com/dd85jrb4b/image/upload/f_auto,q_auto/v1/instrument-studio/employees/erfqm8s3dol3xkw7zaos"
            alt="Employee 3"
          />
          <div
            className="flex flex-col items-center gap-2 rotate-12"
            style={{ transform: 'rotateX(30deg) rotateY(30deg)' }}
          >
            <span className="font-bold text-sm uppercase leading-[90%] tracking-tight">
              Lily Thompson
            </span>
            <span className="font-instrumentSerif text-lg leading-[90%] tracking-tight">
              Art Director
            </span>
          </div>
        </div>
      </div>
      <div className="my-20 overflow-hidden whitespace-nowrap">
        {' '}
        <div className="inline-block py-5 animate-slideText">
          {' '}
          <span className="mx-20 font-medium text-8xl tracking-tight">
            Meta
          </span>{' '}
          <span className="mx-20 font-medium text-8xl tracking-tight">
            Samsung
          </span>{' '}
          <span className="mx-20 font-medium text-8xl tracking-tight">
            Intel Corporation
          </span>{' '}
          <span className="mx-20 font-medium text-8xl tracking-tight">
            Oracle
          </span>{' '}
          <span className="mx-20 font-medium text-8xl tracking-tight">
            Adobe
          </span>{' '}
          <span className="mx-20 font-medium text-8xl tracking-tight">
            Figma
          </span>{' '}
        </div>{' '}
      </div>
      <div className="left-[15%] relative my-10">
        <h4 className="font-instrumentSerif text-4xl sm:text-6xl leading-[100%]">
          Our Capabilites
        </h4>
        <div className="flex flex-row gap-14 my-10 sm:text-2xl tracking-tight">
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
