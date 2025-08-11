import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import UserSidebar from "./UserSidebar";
import UserHeader from "./UserHeader";
import UserFooter from "./UserFooter";

const UserLayout = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="flex">
      {/* Sidebar */}
      <UserSidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />

      {/* Page Content Area */}
      <div className="flex flex-col flex-1 min-h-screen bg-gray-100">
        <UserHeader isCollapsed={isCollapsed} />

        <main
          className={`flex-1 p-6 transition-all duration-300 ${
            isCollapsed ? "ml-20" : "ml-64"
          }`}
        >
          <Outlet />
        </main>

        <UserFooter isCollapsed={isCollapsed} />
      </div>
    </div>
  );
};

export default UserLayout;
