import React, { useState } from 'react';
import { 
  FiPlus, FiSearch, FiFilter, FiUsers, FiActivity, 
  FiEdit2, FiTrash2, FiInfo, FiAlertCircle 
} from 'react-icons/fi';
import { FaClinicMedical, FaProcedures, FaUserMd } from 'react-icons/fa';

const Departments = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  // Sample department data
  const departments = [
    {
      id: 1,
      name: 'Cardiology',
      head: 'Dr. Sarah Johnson',
      staffCount: 12,
      bedsAvailable: 8,
      status: 'active',
      icon: <FaClinicMedical className="text-red-500" />
    },
    {
      id: 2,
      name: 'Pediatrics',
      head: 'Dr. Ahmed Hassan',
      staffCount: 8,
      bedsAvailable: 5,
      status: 'active',
      icon: <FaProcedures className="text-blue-500" />
    },
    {
      id: 3,
      name: 'Orthopedics',
      head: 'Dr. Fatima Khalid',
      staffCount: 10,
      bedsAvailable: 6,
      status: 'active',
      icon: <FaUserMd className="text-green-500" />
    },
    {
      id: 4,
      name: 'Neurology',
      head: 'Dr. Omar Mahmoud',
      staffCount: 7,
      bedsAvailable: 4,
      status: 'under maintenance',
      icon: <FaClinicMedical className="text-purple-500" />
    },
    {
      id: 5,
      name: 'Maternity',
      head: 'Dr. Layla Ibrahim',
      staffCount: 9,
      bedsAvailable: 7,
      status: 'active',
      icon: <FaProcedures className="text-pink-500" />
    },
    {
      id: 6,
      name: 'Emergency',
      head: 'Dr. Karim Mostafa',
      staffCount: 15,
      bedsAvailable: 12,
      status: 'active',
      icon: <FaUserMd className="text-amber-500" />
    }
  ];

  const filteredDepartments = departments.filter(dept => {
    const matchesSearch = dept.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         dept.head.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = activeFilter === 'all' || dept.status === activeFilter;
    return matchesSearch && matchesFilter;
  });

  const statusBadge = (status) => {
    const statusClasses = {
      active: 'bg-emerald-100 text-emerald-800',
      'under maintenance': 'bg-amber-100 text-amber-800',
      inactive: 'bg-red-100 text-red-800'
    };
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusClasses[status]}`}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  return (
    <div className="p-6">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Department Management</h1>
          <p className="text-slate-600">Manage all hospital departments and their resources</p>
        </div>
        <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-md flex items-center mt-4 md:mt-0">
          <FiPlus className="mr-2" />
          Add Department
        </button>
      </div>

      {/* Controls Section */}
      <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-4 mb-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
          {/* Search Bar */}
          <div className="relative w-full md:w-64">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiSearch className="text-slate-400" />
            </div>
            <input
              type="text"
              placeholder="Search departments..."
              className="block w-full pl-10 pr-3 py-2 border border-slate-300 rounded-md bg-slate-50 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Filter Buttons */}
          <div className="flex space-x-2 overflow-x-auto w-full md:w-auto">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-md text-sm font-medium ${activeFilter === 'all' ? 'bg-emerald-500 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
            >
              All Departments
            </button>
            <button
              onClick={() => setActiveFilter('active')}
              className={`px-4 py-2 rounded-md text-sm font-medium ${activeFilter === 'active' ? 'bg-emerald-500 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
            >
              Active
            </button>
            <button
              onClick={() => setActiveFilter('under maintenance')}
              className={`px-4 py-2 rounded-md text-sm font-medium ${activeFilter === 'under maintenance' ? 'bg-emerald-500 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
            >
              Maintenance
            </button>
          </div>
        </div>
      </div>

      {/* Department Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDepartments.length > 0 ? (
          filteredDepartments.map((dept) => (
            <div key={dept.id} className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-4 border-b border-slate-200 flex items-center">
                <div className="h-12 w-12 rounded-full bg-slate-100 flex items-center justify-center mr-4">
                  {dept.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-800">{dept.name}</h3>
                  <p className="text-sm text-slate-600">Head: {dept.head}</p>
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center text-sm text-slate-600">
                    <FiUsers className="mr-2" />
                    {dept.staffCount} staff members
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <FaProcedures className="mr-2" />
                    {dept.bedsAvailable} beds available
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  {statusBadge(dept.status)}
                  <div className="flex space-x-2">
                    <button className="text-slate-400 hover:text-blue-500 p-2">
                      <FiInfo />
                    </button>
                    <button className="text-slate-400 hover:text-emerald-500 p-2">
                      <FiEdit2 />
                    </button>
                    <button className="text-slate-400 hover:text-red-500 p-2">
                      <FiTrash2 />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full py-12 text-center">
            <div className="flex flex-col items-center justify-center text-slate-400">
              <FiAlertCircle size={48} className="mb-4" />
              <p className="text-lg">No departments found</p>
              <p className="text-sm mt-1">Try adjusting your search or filters</p>
            </div>
          </div>
        )}
      </div>

      {/* Stats Section */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
          <h3 className="text-sm font-medium text-slate-500 mb-2">Total Departments</h3>
          <p className="text-3xl font-bold text-slate-800">{departments.length}</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
          <h3 className="text-sm font-medium text-slate-500 mb-2">Active Departments</h3>
          <p className="text-3xl font-bold text-emerald-600">
            {departments.filter(d => d.status === 'active').length}
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
          <h3 className="text-sm font-medium text-slate-500 mb-2">Total Medical Staff</h3>
          <p className="text-3xl font-bold text-blue-600">
            {departments.reduce((sum, dept) => sum + dept.staffCount, 0)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Departments;