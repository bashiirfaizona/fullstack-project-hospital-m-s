import React from "react";
import Button from "../layouts/Button";
import hospitalImage from "../assets/img/blog3.jpg";

const Home = () => {
  return (
    <div id="home" className="relative min-h-screen pt-16"> {/* Reduced top padding */}
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={hospitalImage}
          alt="Modern hospital facility with professional medical staff"
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-slate-900/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 py-12 flex flex-col lg:flex-row items-center"> {/* Reduced py-16 to py-12 */}
        {/* Left Content */}
        <div className="lg:w-1/2 space-y-6"> {/* Reduced space-y-8 to space-y-6 */}
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-white">
            Exceptional Healthcare <br />
            <span className="text-emerald-300">When You Need It Most</span>
          </h1>
          
          <p className="text-lg text-white/90"> {/* Slightly transparent text */}
            At FaazCare Hub, we've redefined hospital management by combining compassionate care with cutting-edge technology.
          </p>

          <div className="flex flex-col sm:flex-row gap-3"> {/* Reduced gap-4 to gap-3 */}
            <Button title="Explore Services" />
            <button className="px-5 py-2.5 bg-transparent border-2 border-white text-white rounded-lg hover:bg-emerald-600 hover:text-slate-800 transition-colors">
              Emergency Contacts
            </button>
          </div>
        </div>

        {/* Right Side - Emergency Info Card */}
        <div className="lg:w-1/2 mt-12 lg:mt-0 lg:pl-10"> {/* Reduced lg:pl-12 to lg:pl-10 */}
          <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-xl p-6 max-w-sm mx-auto lg:mx-0"> {/* Reduced size and padding */}
            <div className="flex items-start">
              <div className="bg-emerald-100 p-2.5 rounded-full mr-3"> {/* Reduced size */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-800 mb-1.5">Immediate Assistance</h2> {/* Reduced text size */}
                <p className="text-slate-600 text-sm mb-3"> {/* Smaller text */}
                  Our emergency department operates 24/7 with specialized teams.
                </p>
                <div className="space-y-1">
                  <p className="font-medium text-slate-800 text-sm">Emergency:</p> {/* Smaller text */}
                  <p className="text-xl font-bold text-emerald-600">0712345678</p> {/* Reduced text size */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;