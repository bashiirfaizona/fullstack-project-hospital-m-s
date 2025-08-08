import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  FiHome, FiUsers, FiCalendar, FiDollarSign, FiPackage, 
  FiFileText, FiLayers, FiGrid, FiClock, FiFile, 
  FiTruck, FiDroplet, FiShoppingCart, FiMessageSquare 
} from 'react-icons/fi';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: 'Dashboard', path: '/admin/dashboard', icon: <FiHome /> },
    { name: 'Manage Users', path: '/admin/manage-users', icon: <FiUsers /> },
    { name: 'Appointments', path: '/admin/appointments', icon: <FiCalendar /> },
    { name: 'Billing', path: '/admin/billing', icon: <FiDollarSign /> },
    { name: 'Inventory', path: '/admin/inventory', icon: <FiPackage /> },
    { name: 'Reports', path: '/admin/reports', icon: <FiFileText /> },
    { name: 'Departments', path: '/admin/departments', icon: <FiLayers /> },
    { name: 'Beds & Rooms', path: '/admin/beds-rooms', icon: <FiGrid /> },
    { name: 'Staff Scheduling', path: '/admin/staff-scheduling', icon: <FiClock /> },
    { name: 'Medical Records', path: '/admin/medical-records', icon: <FiFile /> },
    { name: 'Lab Tests', path: '/admin/lab-tests', icon: <FiDroplet /> },
    { name: 'Pharmacy', path: '/admin/pharmacy', icon: <FiShoppingCart /> },
    { name: 'Feedback', path: '/admin/feedback', icon: <FiMessageSquare /> },
  ];

  return (
    <aside 
      className={`bg-slate-800 text-white h-screen fixed z-40 transition-all duration-300 ${isCollapsed ? 'w-20' : 'w-64'}`}
    >
      {/* Sidebar Header */}
      <div className="p-4 flex items-center justify-between border-b border-slate-700 h-16">
        {!isCollapsed && (
          <h1 className="text-xl font-bold">
            <span className="text-emerald-400">Faaz</span>Care
          </h1>
        )}
        <button 
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="text-slate-400 hover:text-white p-1 rounded-md"
        >
          {isCollapsed ? '»' : '«'}
        </button>
      </div>

      {/* Navigation Menu */}
      <nav className="p-2 overflow-y-auto h-[calc(100vh-64px)]">
        <ul className="space-y-1">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className={`flex items-center p-3 rounded-md transition-colors ${
                  location.pathname === item.path
                    ? 'bg-emerald-600 text-white'
                    : 'text-slate-300 hover:bg-slate-700 hover:text-white'
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                {!isCollapsed && <span className="ml-3">{item.name}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;