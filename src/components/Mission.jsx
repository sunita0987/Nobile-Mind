import React from "react";
import health from "../assets/images/left1.png";
import education from "../assets/images/left2.png";
import finance from "../assets/images/left3.png";
import marketing from "../assets/images/left4.png";
import circle from "../assets/images/imagelogo.png";

const Mission = () => {
  return (
    <section className="bg-gradient-to-t from-[#ffffff] to-purple-50 py-12 px-4 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">
        <div className="grid grid-cols-2 gap-3">
          <img
            src={health}
            alt="Healthcare"
            className="rounded-xl shadow-lg object-cover w-full h-full"
          />
          <img
            src={education}
            alt="Education"
            className="rounded-xl shadow-lg object-cover w-full h-full"
          />
          <img
            src={finance}
            alt="Finance"
            className="rounded-xl shadow-lg object-cover w-full h-full"
          />
          <img
            src={marketing}
            alt="Marketing"
            className="rounded-xl shadow-lg object-cover w-full h-full"
          />
          <div className="absolute left-3/11 top-[1200px] -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-[#ffffff] rounded-full shadow-lg flex items-center justify-center  z-10">
            <img src={circle} alt="Logo" className="w-10 h-10 object-contain" />
          </div>
        </div>
        <div className="text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-[#000000]">
            Our <span className="text-purple-600">Mission</span>
          </h2>
          <p className="mt-4 text-[#000000] opacity-80 text-sm md:text-base leading-relaxed">
            In our commitment to excellence, we create value across three
            diverse sectors. In Healthcare, we seek to improve patient outcomes
            and make healthcare more accessible. In Education, we aim to
            revolutionize learning experiences, empowering individuals with
            knowledge. In Finance, we strive to enhance financial services,
            making them more inclusive and efficient. In Marketing, we harness
            the power of data and AI to drive innovation and growth.
          </p>
          <button className="mt-6 px-6 py-2 bg-gradient-to-r from-[rgb(168,84,233)] to-[#4F91FC] text-white font-semibold rounded-full shadow transition-all cursor-pointer">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Mission;
