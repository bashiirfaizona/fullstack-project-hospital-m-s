import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FiHome,
  FiUser,
  FiCalendar,
  FiFileText,
  FiDroplet,
  FiCreditCard,
  FiMessageSquare,
  FiSettings
} from "react-icons/fi";

const UserSidebar = ({ isCollapsed, setIsCollapsed }) => {
  const location = useLocation();

  const menuItems = [
    { name: "Dashboard", path: "/user/dashboard", icon: <FiHome /> },
    { name: "My Profile", path: "/user/profile", icon: <FiUser /> },
    { name: "Appointments", path: "/user/appointments", icon: <FiCalendar /> },
    { name: "Medical Records", path: "/user/medical-records", icon: <FiFileText /> },
    { name: "Lab Results", path: "/user/lab-results", icon: <FiDroplet /> },
    { name: "Billing", path: "/user/billing", icon: <FiCreditCard /> },
    { name: "Messages", path: "/user/messages", icon: <FiMessageSquare /> },
    { name: "Settings", path: "/user/settings", icon: <FiSettings /> }
  ];

  return (
    <aside
      className={`bg-slate-800 text-white h-screen fixed z-40 transition-all duration-300 ${
        isCollapsed ? "w-20" : "w-64"
      }`}
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
          {isCollapsed ? "»" : "«"}
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
                    ? "bg-emerald-600 text-white"
                    : "text-slate-300 hover:bg-slate-700 hover:text-white"
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

export default UserSidebar;
