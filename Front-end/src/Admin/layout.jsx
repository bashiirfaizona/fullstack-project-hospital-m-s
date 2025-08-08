import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  const user = {
    name: 'Admin User',
    role: 'Administrator',
    avatar: ''
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Sidebar and Content Container */}
      <div className="flex flex-1">
        <Sidebar />
        
        {/* Main Content Area */}
        <div className="flex-1 flex flex-col lg:ml-64">
          <Header user={user} />
          
          {/* Scrollable Content */}
          <main className="flex-1 pt-16 pb-4 overflow-y-auto">
            <div className="p-6">
              <Outlet /> {/* This renders the matched route component */}
            </div>
          </main>
          
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;