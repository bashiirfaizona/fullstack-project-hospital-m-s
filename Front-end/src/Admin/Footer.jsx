import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-3 px-6 border-t border-slate-700">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto">
        <div className="mb-2 md:mb-0">
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} <span className="text-emerald-400 font-medium">FaazCare</span> Hub. All rights reserved.
          </p>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="text-sm text-slate-400 hover:text-emerald-400">Privacy</a>
          <a href="#" className="text-sm text-slate-400 hover:text-emerald-400">Terms</a>
          <a href="#" className="text-sm text-slate-400 hover:text-emerald-400">Help</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;