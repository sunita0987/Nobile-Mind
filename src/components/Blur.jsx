import React from "react";
import Blue from "../assets/images/cta.png";

const Blur = () => {
  return (
    <section className="px-10 py-16 sm:px-10 lg:px-10">
      <div className="max-w-4xl mx-auto rounded-2xl text-[#ffffff] text-center p-10 relative overflow-hidden">
        <div
          className="bg-cover bg-no-repeat bg-center absolute inset-0  w-full h-full"
          style={{
            backgroundImage: `url(${Blue})`,
          }}
        ></div>
        <div className="relative z-10">
          <h2 className="text-3xl sm:text-3xl md:text-4xl font-bold mb-4">
            So, What You've Been Waiting For?
          </h2>
          <p className="text-md md:text-base max-w-3xl mx-auto mb-8 opacity-90">
            Ipsum integer faucibus eu morbi integer. Tempus in volutpat libero
            mauris neque dolor pellentesque sagittis. Scelerisque tempor auctor
            euismod rhoncus non elit molestie sed. Orci quam at varius eget.
          </p>
          <button className="bg-white text-purple-600 font-medium px-6 py-2 rounded-full hover:bg-purple-100 transition cursor-pointer">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blur;
