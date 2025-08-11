import React from 'react';
import { FiSearch, FiBell, FiUser, FiSettings, FiLogOut } from 'react-icons/fi';

const UserHeader = ({ user, isCollapsed }) => {
  return (
    <header
      className={`bg-white shadow-sm h-16 fixed top-0 right-0 z-30 border-b border-slate-200 transition-all duration-300 ${
        isCollapsed ? 'left-20' : 'left-64'
      }`}
    >
      <div className="flex items-center justify-between h-full px-6">
        {/* Search Bar */}
        <div className="relative w-full max-w-md">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FiSearch className="text-slate-400" />
          </div>
          <input
            type="text"
            placeholder="Search patients, reports, appointments..."
            className="block w-full pl-10 pr-3 py-2 border border-slate-300 rounded-md bg-slate-50 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          />
        </div>

        {/* User Controls */}
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-full text-slate-600 hover:bg-slate-100 relative">
            <FiBell size={20} />
            <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500"></span>
          </button>

          {/* User Dropdown */}
          <div className="relative group">
            <button className="flex items-center space-x-2 focus:outline-none">
              <div className="h-8 w-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-800">
                {user?.avatar ? (
                  <img src={user.avatar} alt="User" className="rounded-full" />
                ) : (
                  <FiUser size={18} />
                )}
              </div>
              <div className="hidden md:block text-left">
                <p className="text-sm font-medium">{user?.name || 'User'}</p>
                <p className="text-xs text-slate-500">{user?.role || 'Patient'}</p>
              </div>
            </button>

            {/* Dropdown Menu */}
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 hidden group-hover:block border border-slate-200">
              <a href="#" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100">Profile</a>
              <a href="#" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100">Settings</a>
              <div className="border-t border-slate-200"></div>
              <button className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-slate-100 flex items-center">
                <FiLogOut className="mr-2" /> Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default UserHeader;
