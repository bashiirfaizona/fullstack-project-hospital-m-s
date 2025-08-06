import React from "react";
import { Link } from "react-scroll";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-slate-800 text-white w-full mt-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between p-8 md:px-8 px-5">
        {/* Brand Info */}
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <Link to="home" spy={true} smooth={true} duration={500} className="flex items-center cursor-pointer">
            <h1 className="text-2xl font-bold text-white">
              <span className="text-emerald-400">Faaz</span>Care Hub
            </h1>
          </Link>
          <p className="text-sm text-gray-300 mt-4">
            Your trusted healthcare partner offering comprehensive medical services with cutting-edge technology and compassionate care.
          </p>
          <div className="flex gap-4 mt-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-emerald-400 transition-colors">
              <FaFacebook size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-emerald-400 transition-colors">
              <FaTwitter size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-emerald-400 transition-colors">
              <FaInstagram size={20} />
            </a>
            <a href="https://www.linkedin.com/in/faiza-bashiir-935194356/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-emerald-400 transition-colors">
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
        
        {/* Quick Links */}
        <div className="mb-6 md:mb-0">
          <h1 className="font-medium text-xl pb-4 text-emerald-400">Quick Links</h1>
          <nav className="flex flex-col gap-3">
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-emerald-400 transition-all cursor-pointer text-gray-300"
            >
              Home
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-emerald-400 transition-all cursor-pointer text-gray-300"
            >
              About Us
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-emerald-400 transition-all cursor-pointer text-gray-300"
            >
              Services
            </Link>
            <Link
              to="doctors"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-emerald-400 transition-all cursor-pointer text-gray-300"
            >
              Doctors
            </Link>
            <Link
              to="facilities"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-emerald-400 transition-all cursor-pointer text-gray-300"
            >
              Facilities
            </Link>
          </nav>
        </div>
        
        {/* Services */}
        <div className="mb-6 md:mb-0">
          <h1 className="font-medium text-xl pb-4 text-emerald-400">Our Services</h1>
          <nav className="flex flex-col gap-3">
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-emerald-400 transition-all cursor-pointer text-gray-300"
            >
              Emergency Care
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-emerald-400 transition-all cursor-pointer text-gray-300"
            >
              Diagnostic Imaging
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-emerald-400 transition-all cursor-pointer text-gray-300"
            >
              Surgical Procedures
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-emerald-400 transition-all cursor-pointer text-gray-300"
            >
              Health Checkups
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-emerald-400 transition-all cursor-pointer text-gray-300"
            >
              Mental Health
            </Link>
          </nav>
        </div>
        
        {/* Contact Info */}
        <div className="w-full md:w-1/4">
          <h1 className="font-medium text-xl pb-4 text-emerald-400">Contact Us</h1>
          <nav className="flex flex-col gap-3 text-gray-300">
            <div className="flex items-start hover:text-emerald-400 transition-all">
              <FaMapMarkerAlt className="mt-1 mr-3 flex-shrink-0" />
              <span>
                FaazCare hub<br />
                Garissa, 70100<br />
                Kenya
              </span>
            </div>
            <div className="flex items-center hover:text-emerald-400 transition-all">
              <FaPhone className="mr-3" />
              <span>0712345678</span>
            </div>
            <div className="flex items-center hover:text-emerald-400 transition-all">
              <FaEnvelope className="mr-3" />
              <span>contact@faazcarehub.com</span>
            </div>
            <div className="pt-2">
              <p className="text-sm">Open 24/7 for emergencies</p>
              <p className="text-sm">Mon-Fri: 8:00 AM - 8:00 PM</p>
              <p className="text-sm">Sat-Sun: 9:00 AM - 5:00 PM</p>
            </div>
          </nav>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="border-t border-gray-700 py-4 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} FaazCare Hub. All rights reserved. | 
        <a href="/privacy" className="hover:text-emerald-400 ml-2">Privacy Policy</a> | 
        <a href="/terms" className="hover:text-emerald-400 ml-2">Terms of Service</a>
      </div>
    </div>
  );
};

export default Footer;