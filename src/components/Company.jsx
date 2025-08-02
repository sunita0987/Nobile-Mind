import React from "react";
import layer from "../assets/images/layer.png";
import cata from "../assets/images/cata.png";
import quotient from "../assets/images/quotinet.png";
import circooles from "../assets/images/circle.png";
import sisy from "../assets/images/sisy.png";
import catalog from "../assets/images/catalog.png";

const Company = () => {
  return (
    <section className="bg-gradient-to-r from-[#EFEFEF] to-[#f5f3ff] py-16 px-4 sm:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#000000] leading-snug">
            Join 4,000+ <br /> Companies
            <span className="text-[#6941C6]">
              Already <br /> Growing
            </span>
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-6 sm:gap-8 justify-items-center">
          <div className="flex items-center space-x-2">
            <img src={layer} alt="Layers" className="w-6 h-6" />
            <span className="text-[#000000]">Layers</span>
          </div>
          <div className="flex items-center space-x-2">
            <img src={cata} alt="Catalog" className="w-6 h-6" />
            <span className="text-[#000000]">Catalog</span>
          </div>
          <div className="flex items-center space-x-2">
            <img src={quotient} alt="Quotient" className="w-6 h-6" />
            <span className="text-[#000000] font-semibold">Quotient</span>
          </div>
          <div className="flex items-center space-x-2">
            <img src={circooles} alt="Circooles" className="w-6 h-6" />
            <span className="text-[#000000] font-semibold">Circooles</span>
          </div>
          <div className="flex items-center space-x-2">
            <img src={sisy} alt="Sisyphus" className="w-6 h-6" />
            <span className="text-[#000000]">Sisyphus</span>
          </div>
          <div className="flex items-center space-x-2">
            <img src={catalog} alt="Catalog" className="w-6 h-6" />
            <span className="text-[#000000]">Catalog</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Company;
