import React from 'react';
import ShirtCarousel from './3dShirtView';

const Work = () => {
  return (
    <section
      className="w-full flex flex-wrap flex-row justify-center items-center my-20 gap-6"
      id="work"
    >
      <div className="bg-[#1B30AE] rounded-3xl max-w-[48%] relative group">
        <img
          src="https://res.cloudinary.com/dd85jrb4b/image/upload/f_auto,q_auto/v1/instrument-studio/o1lnvnv49vvmc2wryfsg"
          alt="bitcoin"
          className="w-full h-auto"
        />
        <div className="absolute bottom-0 w-full flex flex-col items-center justify-center p-4 my-2">
          <p className="font-instrument text-[32px] tracking-tight text-white translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out">
            The future of Web3 on Bitcoin
          </p>
          <div className="flex flex-row items-center justify-center opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out font-instrument text-white text-[11px] font-medium my-1">
            <span className="bg-black rounded-3xl px-2 py-1 mx-2">
              Branding
            </span>
            <span className="bg-black rounded-3xl px-2 py-1 mx-2">Website</span>
            <span className="bg-black rounded-3xl px-2 py-1 mx-2">App</span>
          </div>
        </div>
      </div>

      <div className="bg-[#87E246] rounded-3xl max-w-[48%] relative group">
        <img
          src="https://res.cloudinary.com/dd85jrb4b/image/upload/f_auto,q_auto/v1/instrument-studio/ukvju2rqfrqzpivodgnh"
          alt="phone"
          className="w-full h-auto"
        />
        <div className="absolute bottom-0 w-full flex flex-col items-center justify-center p-4 my-2">
          <p className="font-instrument text-[32px] tracking-tight text-black translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out line-clamp-1">
            Non ordinary app for non ordinary photos
          </p>
          <div className="flex flex-row items-center justify-center opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out font-instrument text-white text-[11px] font-medium my-1">
            <span className="bg-black rounded-3xl px-2 py-1 mx-2">
              Branding
            </span>
            <span className="bg-black rounded-3xl px-2 py-1 mx-2">Website</span>
            <span className="bg-black rounded-3xl px-2 py-1 mx-2">App</span>
          </div>
        </div>
      </div>

      <ShirtCarousel />

      <div className="bg-[#ED732E] rounded-3xl max-w-[48%] relative group">
        <img
          src="https://res.cloudinary.com/dd85jrb4b/image/upload/f_auto,q_auto/v1/instrument-studio/nij1x8y1kyoxonmxrqc8"
          alt="wikipedia"
          className="w-full h-auto"
        />
        <div className="absolute bottom-0 w-full flex flex-col items-center justify-center p-4 my-2">
          <p className="font-instrument text-[32px] tracking-tight text-white translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out line-clamp-1">
            Forgotten wikipedia articles
          </p>
          <div className="flex flex-row items-center justify-center opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out font-instrument text-white text-[11px] font-medium my-1">
            <span className="bg-black rounded-3xl px-2 py-1 mx-2">
              Branding
            </span>
            <span className="bg-black rounded-3xl px-2 py-1 mx-2">Website</span>
            <span className="bg-black rounded-3xl px-2 py-1 mx-2">App</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
