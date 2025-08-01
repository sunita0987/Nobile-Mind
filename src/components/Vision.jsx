import React from "react";
import visionImg from "../assets/images/vision.png";
import { POINTS } from "../utils/helper";
import { CheckCheck } from "lucide-react";

const Vision = () => {
  return (
    <section className="bg-gradient-to-r from-purple-100 to-[#ffffff] py-12 px-4 md:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Our <span className="text-purple-600">Vision</span>
          </h2>
          <p className="mt-4 text-[#000000] opacity-80 text-base md:text-lg">
            The future of how we live, work, and learn. We see a world where
            technology is not just a tool but a transformative force for good,
            reshaping every aspect of human existence.
          </p>

          <div className="mt-6 space-y-4">
            {POINTS.map((point, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm border border-purple-400"
              >
                <CheckCheck className="text-purple-600 w-4 h-4" />
                <p className="text-sm md:text-base text-gray-800">{point}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full">
          <img
            src={visionImg}
            alt="Vision"
            className="w-full h-auto rounded-2xl shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Vision;
