import React from "react";
import img from "../assets/img/about.jpg";
import { FaBullseye, FaEye, FaHandsHelping } from "react-icons/fa";

const About = () => {
  return (
    <div className="min-h-screen bg-white pt-0 pb-0"> {/* Removed padding */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-10 flex flex-col lg:flex-row items-center gap-8">
        {/* Left Content */}
        <div className="lg:w-1/2 space-y-6">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
            About <span className="text-emerald-600">FaazCare Hub</span>
          </h1>
          
          <p className="text-gray-600">
            Founded with a vision to transform healthcare delivery, FaazCare Hub has grown from a single clinic to a leading healthcare network.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Mission Card */}
            <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100 hover:shadow-md transition-shadow">
              <div className="bg-emerald-100 p-2 rounded-full w-10 h-10 flex items-center justify-center mb-3">
                <FaBullseye className="text-emerald-600 text-lg" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-1.5">Our Mission</h3>
              <p className="text-gray-600 text-sm">
                To provide accessible, high-quality healthcare through innovative solutions.
              </p>
            </div>

            {/* Vision Card */}
            <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100 hover:shadow-md transition-shadow">
              <div className="bg-emerald-100 p-2 rounded-full w-10 h-10 flex items-center justify-center mb-3">
                <FaEye className="text-emerald-600 text-lg" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-1.5">Our Vision</h3>
              <p className="text-gray-600 text-sm">
                To be the most trusted healthcare provider transforming lives.
              </p>
            </div>

            {/* Values Card */}
            <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100 hover:shadow-md transition-shadow md:col-span-2 lg:col-span-1">
              <div className="bg-emerald-100 p-2 rounded-full w-10 h-10 flex items-center justify-center mb-3">
                <FaHandsHelping className="text-emerald-600 text-lg" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-1.5">Our Values</h3>
              <p className="text-gray-600 text-sm">
                Compassion, Integrity, Innovation, Excellence, and Community.
              </p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2">
          <div className="relative">
            <img 
              src={img} 
              alt="FaazCare Hub medical team"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;