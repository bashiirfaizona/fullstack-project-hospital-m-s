import React from "react";

const UserFooter = ({ isCollapsed }) => {
  return (
    <footer
      className={`bg-slate-800 shadow-inner h-14 flex items-center justify-center text-white text-sm transition-all duration-300 ${
        isCollapsed ? "ml-20" : "ml-64"
      }`}
    >
      © {new Date().getFullYear()} FaazCare. All rights reserved.
    </footer>
  );
};

export default UserFooter;
