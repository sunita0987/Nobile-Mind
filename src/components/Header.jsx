// import React from "react";
// import teamImage from "../assets/images/header.png";

// const Header = () => {
//   return (
//     <section className="bg-gradient-to-r from-[#f9f5ff] to-white py-12 px-4 sm:px-6 lg:px-20">
//       <div className="max-w-7xl mx-auto text-center">
//         <h1 className="text-4xl sm:text-5xl md:text-5xl font-bold text-[#000000]">
//           Elevate Your Solutions With <br />
//           <span className="text-[rgb(168,84,233)] to-[#4F91FC]">
//             Noble Mind IT
//           </span>
//         </h1>
//         <p className="mt-4 text-sm sm:text-sm text-gray-600 max-w-2xl mx-auto">
//           At Noble Mind IT, we're dedicated to taking your IT solutions to new
//           heights. In today's ever-evolving technological landscape, having a
//           trusted partner to elevate your IT infrastructure is paramount.
//         </p>

//         <div className="relative mt-10">
//           <div className=" md:block absolute -top-4 -left-4 w-16 h-16 rounded-full border-[10px] border-[#8A4DFF] " />
//           <div className=" md:block absolute -bottom-4 -right-4 w-16 h-16 rounded-full border-[10px] border-[#8A4DFF] " />
//           <img
//             src={teamImage}
//             alt="Team Discussion"
//             className="w-full object-cover h-[300px] md:h-[400px] lg:h-[450px] z-10"
//           />
//           <div className="absolute bottom-15 left-1/2 transform -translate-x-1/2 w-[70%] bg-black/70 backdrop-blur-sm text-[#ffffff] rounded-xl flex flex-col md:flex-row justify-around py-4 px-6 gap-4 md:gap-0">
//             <div className="flex items-center">
//               <p className="text-5xl font-bold">8+</p>
//               <p className="text-sm w-[70px]">Years of Experience</p>
//             </div>
//             <div className="flex items-center">
//               <p className="text-5xl font-bold">50+</p>
//               <p className="text-sm w-[70px]">Successful Projects</p>
//             </div>
//             <div className="flex items-center">
//               <p className="text-5xl font-bold">30+</p>
//               <p className="text-sm w-[70px]">Satisfied Customers</p>
//             </div>
//           </div>
//         </div>

//         <button className="mt-8 px-6 py-3 bg-gradient-to-l from-[rgb(168,84,233)] to-[#4F91FC] text-white font-semibold rounded-full transition-all cursor-pointer">
//           Get Started
//         </button>
//       </div>
//     </section>
//   );
// };

// export default Header;


import React from "react";
import teamImage from "../assets/images/header.png";

const Header = () => {
  return (
    <section className="bg-gradient-to-r from-[#f9f5ff] to-white py-12 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#000000]">
          Elevate Your Solutions With <br />
          <span className="text-[rgb(168,84,233)]">Noble Mind IT</span>
        </h1>
        <p className="mt-4 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
          At Noble Mind IT, we're dedicated to taking your IT solutions to new
          heights. In today's ever-evolving technological landscape, having a
          trusted partner to elevate your IT infrastructure is paramount.
        </p>
        <div className="relative mt-10">
          <div className="hidden md:block absolute -top-4 -left-4 w-16 h-16 rounded-full border-[10px] border-[#8A4DFF] z-10 " />
          <div className="hidden md:block absolute -bottom-4 -right-4 w-16 h-16 rounded-full border-[10px] border-[#8A4DFF] z-10 " />
          <img
            src={teamImage}
            alt="Team Discussion"
            className="w-full object-cover rounded-xl h-[250px] sm:h-[300px] md:h-[400px] lg:h-[450px] z-0"
          />
          <div className="absolute -bottom-10 inset-x-0 mx-auto  mb-15 w-[90%] sm:w-[80%] bg-black/70 backdrop-blur-md text-white rounded-xl flex flex-col sm:flex-row justify-around py-4 px-6 gap-4 sm:gap-0 z-20">
            <div className="flex flex-col items-center">
              <p className="text-4xl font-bold">8+</p>
              <p className="text-sm text-center">Years of Experience</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-4xl font-bold">50+</p>
              <p className="text-sm text-center">Successful Projects</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-4xl font-bold">30+</p>
              <p className="text-sm text-center">Satisfied Customers</p>
            </div>
          </div>
        </div>
        <div className="mt-16">
          <button className="px-6 py-3 bg-gradient-to-l from-[rgb(168,84,233)] to-[#4F91FC] text-white font-semibold rounded-full hover:shadow-lg transition-all">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
