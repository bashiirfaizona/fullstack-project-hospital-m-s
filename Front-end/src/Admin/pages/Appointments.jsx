import React, { useState } from 'react';
import { FiCalendar, FiClock, FiSearch, FiPlus, FiFilter, FiEdit2, FiTrash2, FiUser, FiAlertCircle } from 'react-icons/fi';

const Appointments = () => {
  const [activeTab, setActiveTab] = useState('upcoming');
  const [searchTerm, setSearchTerm] = useState('');
  
  // Sample appointment data
  const appointments = [
    {
      id: 1,
      patient: 'Mohamed Ali',
      doctor: 'Dr. Sarah Johnson',
      date: '2023-06-15',
      time: '09:30 AM',
      status: 'confirmed',
      department: 'Cardiology'
    },
    {
      id: 2,
      patient: 'Aisha Mohamed',
      doctor: 'Dr. Ahmed Hassan',
      date: '2023-06-16',
      time: '02:15 PM',
      status: 'pending',
      department: 'Pediatrics'
    },
    {
      id: 3,
      patient: 'Omar Mahmoud',
      doctor: 'Dr. Fatima Khalid',
      date: '2023-06-17',
      time: '11:00 AM',
      status: 'completed',
      department: 'Orthopedics'
    },
    {
      id: 4,
      patient: 'Layla Ibrahim',
      doctor: 'Dr. Sarah Johnson',
      date: '2023-06-18',
      time: '04:45 PM',
      status: 'cancelled',
      department: 'Neurology'
    },
  ];

  const filteredAppointments = appointments.filter(appointment => {
    const matchesSearch = appointment.patient.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         appointment.doctor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = activeTab === 'all' || appointment.status === activeTab;
    return matchesSearch && matchesStatus;
  });

  const statusBadge = (status) => {
    const statusClasses = {
      confirmed: 'bg-emerald-100 text-emerald-800',
      pending: 'bg-amber-100 text-amber-800',
      completed: 'bg-blue-100 text-blue-800',
      cancelled: 'bg-red-100 text-red-800'
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
          <h1 className="text-2xl font-bold text-slate-800 flex items-center">
            <FiCalendar className="mr-2 text-emerald-500" />
            Appointments Management
          </h1>
          <p className="text-slate-600">View and manage all patient appointments</p>
        </div>
        <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-md flex items-center mt-4 md:mt-0">
          <FiPlus className="mr-2" />
          New Appointment
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
              placeholder="Search appointments..."
              className="block w-full pl-10 pr-3 py-2 border border-slate-300 rounded-md bg-slate-50 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Filter Buttons */}
          <div className="flex space-x-2 overflow-x-auto w-full md:w-auto">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-md text-sm font-medium ${activeTab === 'all' ? 'bg-emerald-500 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
            >
              All
            </button>
            <button
              onClick={() => setActiveTab('upcoming')}
              className={`px-4 py-2 rounded-md text-sm font-medium ${activeTab === 'upcoming' ? 'bg-emerald-500 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
            >
              Upcoming
            </button>
            <button
              onClick={() => setActiveTab('pending')}
              className={`px-4 py-2 rounded-md text-sm font-medium ${activeTab === 'pending' ? 'bg-emerald-500 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
            >
              Pending
            </button>
            <button
              onClick={() => setActiveTab('completed')}
              className={`px-4 py-2 rounded-md text-sm font-medium ${activeTab === 'completed' ? 'bg-emerald-500 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
            >
              Completed
            </button>
          </div>
        </div>
      </div>

      {/* Appointments Table */}
      <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200">
            <thead className="bg-slate-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                  Patient
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                  Doctor
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                  Department
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                  Date & Time
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-slate-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-slate-200">
              {filteredAppointments.length > 0 ? (
                filteredAppointments.map((appointment) => (
                  <tr key={appointment.id} className="hover:bg-slate-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-800">
                          <FiUser />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-slate-900">{appointment.patient}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-slate-900">{appointment.doctor}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-slate-500">{appointment.department}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-slate-900">{appointment.date}</div>
                      <div className="text-sm text-slate-500 flex items-center">
                        <FiClock className="mr-1" size={14} /> {appointment.time}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {statusBadge(appointment.status)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-emerald-600 hover:text-emerald-900 mr-3">
                        <FiEdit2 />
                      </button>
                      <button className="text-red-600 hover:text-red-900">
                        <FiTrash2 />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="px-6 py-12 text-center">
                    <div className="flex flex-col items-center justify-center text-slate-400">
                      <FiAlertCircle size={48} className="mb-4" />
                      <p className="text-lg">No appointments found</p>
                      <p className="text-sm mt-1">Try adjusting your search or filters</p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-6 px-4">
        <div className="text-sm text-slate-500">
          Showing <span className="font-medium">1</span> to <span className="font-medium">4</span> of <span className="font-medium">4</span> results
        </div>
        <div className="flex space-x-2">
          <button className="px-3 py-1 rounded-md border border-slate-300 text-sm font-medium text-slate-700 bg-white hover:bg-slate-50">
            Previous
          </button>
          <button className="px-3 py-1 rounded-md border border-slate-300 text-sm font-medium text-slate-700 bg-white hover:bg-slate-50">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Appointments;