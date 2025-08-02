import React from "react";
import health from "../assets/images/left1.png";
import education from "../assets/images/left2.png";
import finance from "../assets/images/left3.png";
import marketing from "../assets/images/left4.png";
import circle from "../assets/images/imagelogo.png";

const Mission = () => {
  return (
    <section className="bg-gradient-to-t from-white to-purple-50 py-12 px-4 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="relative grid grid-cols-2 gap-4">
          <img
            src={health}
            alt="Healthcare"
            className="rounded-xl shadow-lg w-full h-auto object-cover aspect-[1/1]"
          />
          <img
            src={education}
            alt="Education"
            className="rounded-xl shadow-lg w-full h-auto object-cover aspect-[1/1]"
          />
          <img
            src={finance}
            alt="Finance"
            className="rounded-xl shadow-lg w-full h-auto object-cover aspect-[1/1]"
          />
          <img
            src={marketing}
            alt="Marketing"
            className="rounded-xl shadow-lg w-full h-auto object-cover aspect-[1/1]"
          />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full shadow-xl flex items-center justify-center z-10">
            <img
              src={circle}
              alt="Logo"
              className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
            />
          </div>
        </div>
        <div className="text-center lg:text-left mt-10 lg:mt-0">
          <h2 className="text-3xl sm:text-4xl font-bold text-black">
            Our <span className="text-purple-600">Mission</span>
          </h2>
          <p className="mt-4 text-black text-opacity-80 text-sm sm:text-base leading-relaxed">
            In our commitment to excellence, we create value across three
            diverse sectors. In Healthcare, we seek to improve patient outcomes
            and make healthcare more accessible. In Education, we aim to
            revolutionize learning experiences, empowering individuals with
            knowledge. In Finance, we strive to enhance financial services,
            making them more inclusive and efficient. In Marketing, we harness
            the power of data and AI to drive innovation and growth.
          </p>
          <button className="mt-6 px-6 py-2 bg-gradient-to-r from-[rgb(168,84,233)] to-[#4F91FC] text-white font-semibold rounded-full shadow-md hover:shadow-lg transition-all">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Mission;
