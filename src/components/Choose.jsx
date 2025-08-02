import React from "react";
import { FEATURE_DATA } from "../utils/helper";
import worker from "../assets/images/choose.png";
import { CheckCheck } from "lucide-react";

const Choose = () => {
  return (
    <section className="max-w-[1320px] mx-auto px-4 py-16">
      <div className="text-center mb-10 flex ml-20">
        <h2 className="text-3xl sm:text-4xl font-bold">
          Why <span className="text-purple-600">Choose</span> Us
        </h2>
        <p className="mt-4 text-[#000000] opacity-80 w-[700px] mx-auto text-regular text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          id nisi euismod, porttitor quam sit amet, efficitur lectus. Mauris
          eget pulvinar ante. Fusce posuere, mi in pretium consequat, sem augue
          eleifend lorem, ut blandit libero neque vitae ex. Aenean interdum a
          arcu aliquam imperdiet.
        </p>
      </div>
      <div className="mb-10">
        <img
          src={worker}
          alt="Worker Image"
          className="rounded-xl w-full object-cover"
        />
      </div>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
        {FEATURE_DATA.map((item, index) => (
          <div
            key={index}
            className="bg-[#ffffff] border border-[#0000003D] rounded-xl p-5 shadow-sm hover:shadow-md transition"
          >
            <div className="flex items-center gap-5">
              <CheckCheck className="text-purple-600 w-6 h-6  rounded-xl bg-purple-200" />
              <h3 className="text-lg font-semibold text-[#000000] mb-1">
                {item.title}
              </h3>
            </div>
            <p className="text-[#000000] opacity-80 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Choose;
