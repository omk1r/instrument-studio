import React from 'react';
import ShirtCarousel from './3dShirtView';

const Work = () => {
  return (
    <section
      className="flex flex-row flex-wrap justify-center items-center my-20 w-full"
      id="work"
    >
      <div className="group relative bg-[#1B30AE] mx-2 my-2 rounded-3xl sm:max-w-[48%]">
        <img
          src="https://res.cloudinary.com/dd85jrb4b/image/upload/f_auto,q_auto/v1/instrument-studio/o1lnvnv49vvmc2wryfsg"
          alt="bitcoin"
          className="w-full h-auto"
        />
        <div className="bottom-0 absolute flex flex-col justify-center items-center my-2 p-4 w-full">
          <p className="font-instrument text-[32px] text-white line-clamp-1 tracking-tight transition-all translate-y-full group-hover:translate-y-0 duration-500 ease-in-out">
            The future of Web3 on Bitcoin
          </p>
          <div className="flex flex-row justify-center items-center opacity-0 group-hover:opacity-100 my-1 font-instrument font-medium text-[11px] text-white transition-all translate-y-full group-hover:translate-y-0 duration-500 ease-in-out">
            <span className="bg-black mx-2 px-2 py-1 rounded-3xl">
              Branding
            </span>
            <span className="bg-black mx-2 px-2 py-1 rounded-3xl">Website</span>
            <span className="bg-black mx-2 px-2 py-1 rounded-3xl">App</span>
          </div>
        </div>
      </div>

      <div className="group relative bg-[#87E246] mx-2 my-2 rounded-3xl sm:max-w-[48%]">
        <img
          src="https://res.cloudinary.com/dd85jrb4b/image/upload/f_auto,q_auto/v1/instrument-studio/ukvju2rqfrqzpivodgnh"
          alt="phone"
          className="w-full h-auto"
        />
        <div className="bottom-0 absolute flex flex-col justify-center items-center my-2 p-4 w-full">
          <p className="font-instrument text-[32px] text-black line-clamp-1 tracking-tight transition-all translate-y-full group-hover:translate-y-0 duration-500 ease-in-out">
            Non ordinary app for non ordinary photos
          </p>
          <div className="flex flex-row justify-center items-center opacity-0 group-hover:opacity-100 my-1 font-instrument font-medium text-[11px] text-white transition-all translate-y-full group-hover:translate-y-0 duration-500 ease-in-out">
            <span className="bg-black mx-2 px-2 py-1 rounded-3xl">
              Branding
            </span>
            <span className="bg-black mx-2 px-2 py-1 rounded-3xl">Website</span>
            <span className="bg-black mx-2 px-2 py-1 rounded-3xl">App</span>
          </div>
        </div>
      </div>

      <ShirtCarousel />

      <div className="group relative bg-[#ED732E] mx-2 my-2 rounded-3xl sm:max-w-[48%]">
        <img
          src="https://res.cloudinary.com/dd85jrb4b/image/upload/f_auto,q_auto/v1/instrument-studio/nij1x8y1kyoxonmxrqc8"
          alt="wikipedia"
          className="w-full h-auto"
        />
        <div className="bottom-0 absolute flex flex-col justify-center items-center my-2 p-4 w-full">
          <p className="font-instrument text-[32px] text-white line-clamp-1 tracking-tight transition-all translate-y-full group-hover:translate-y-0 duration-500 ease-in-out">
            Forgotten wikipedia articles
          </p>
          <div className="flex flex-row justify-center items-center opacity-0 group-hover:opacity-100 my-1 font-instrument font-medium text-[11px] text-white transition-all translate-y-full group-hover:translate-y-0 duration-500 ease-in-out">
            <span className="bg-black mx-2 px-2 py-1 rounded-3xl">
              Branding
            </span>
            <span className="bg-black mx-2 px-2 py-1 rounded-3xl">Website</span>
            <span className="bg-black mx-2 px-2 py-1 rounded-3xl">App</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
