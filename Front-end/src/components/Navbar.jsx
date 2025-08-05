import React, { useState } from "react";
import { Link } from "react-scroll";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Contact from "../layouts/models/Contact";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleChange = () => setMenu(!menu);
  const closeMenu = () => setMenu(false);
  const openForm = () => {
    setShowForm(true);
    setMenu(false);
  };
  const closeForm = () => setShowForm(false);

  return (
    <div className="fixed w-full z-50 text-white bg-slate-800 shadow-lg">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center p-4 lg:px-8 px-4">
          {/* Logo */}
          <Link to="home" spy={true} smooth={true} duration={500} className="flex items-center">
            <h1 className="text-2xl font-bold text-white">
              <span className="text-emerald-400">Faaz</span>Care Hub
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className="text-white hover:text-emerald-400 transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className="text-white hover:text-emerald-400 transition-colors font-medium"
            >
              About
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className="text-white hover:text-emerald-400 transition-colors font-medium"
            >
              Services
            </Link>
            <Link
              to="doctors"
              spy={true}
              smooth={true}
              duration={500}
              className="text-white hover:text-emerald-400 transition-colors font-medium"
            >
              Doctors
            </Link>
            <Link
              to="facilities"
              spy={true}
              smooth={true}
              duration={500}
              className="text-white hover:text-emerald-400 transition-colors font-medium"
            >
              Facilities
            </Link>
            <Link
              to="blog"
              spy={true}
              smooth={true}
              duration={500}
              className="text-white hover:text-emerald-400 transition-colors font-medium"
            >
              Blog
            </Link>
            <button
              onClick={openForm}
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-md transition-colors font-medium"
            >
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            {menu ? (
              <AiOutlineClose size={24} onClick={handleChange} className="text-white" />
            ) : (
              <AiOutlineMenu size={24} onClick={handleChange} className="text-white" />
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${menu ? "translate-x-0" : "-translate-x-full"} 
          lg:hidden absolute top-16 left-0 right-0 bg-slate-800 text-white 
          text-center py-6 space-y-6 text-lg font-medium transition-transform duration-300 shadow-lg`}
        >
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className="block hover:text-emerald-400 transition-colors"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className="block hover:text-emerald-400 transition-colors"
            onClick={closeMenu}
          >
            About
          </Link>
          <Link
            to="services"
            spy={true}
            smooth={true}
            duration={500}
            className="block hover:text-emerald-400 transition-colors"
            onClick={closeMenu}
          >
            Services
          </Link>
          <Link
            to="doctors"
            spy={true}
            smooth={true}
            duration={500}
            className="block hover:text-emerald-400 transition-colors"
            onClick={closeMenu}
          >
            Doctors
          </Link>
          <Link
            to="facilities"
            spy={true}
            smooth={true}
            duration={500}
            className="block hover:text-emerald-400 transition-colors"
            onClick={closeMenu}
          >
            Facilities
          </Link>
          <Link
            to="blog"
            spy={true}
            smooth={true}
            duration={500}
            className="block hover:text-emerald-400 transition-colors"
            onClick={closeMenu}
          >
            Blog
          </Link>
          <button
            onClick={openForm}
            className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-md transition-colors mx-auto block"
          >
            Contact
          </button>
        </div>
      </div>

      {showForm && <Contact closeForm={closeForm} />}
    </div>
  );
};

export default Navbar;