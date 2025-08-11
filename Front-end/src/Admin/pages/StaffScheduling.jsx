import React, { useState } from 'react';
import { 
  FiCalendar, FiPlus, FiSearch, FiFilter, 
  FiAlertTriangle, FiEdit2, FiTrash2, FiClock,
  FiPrinter, FiDownload, FiUser, FiUsers
} from 'react-icons/fi';
import { FaUserNurse, FaUserMd, FaUserTie } from 'react-icons/fa';

const StaffScheduling = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddScheduleModal, setShowAddScheduleModal] = useState(false);
  const [viewMode, setViewMode] = useState('list'); // 'list' or 'calendar'

  // Sample staff scheduling data
  const schedules = [
    {
      id: 1,
      staffId: 'EMP-1001',
      name: 'Dr. Sarah Johnson',
      role: 'Physician',
      department: 'Cardiology',
      shiftDate: '2023-07-15',
      shiftType: 'Day (8am-4pm)',
      status: 'Confirmed',
      assignedBy: 'Admin',
      icon: <FaUserMd className="text-blue-500" />
    },
    {
      id: 2,
      staffId: 'EMP-1002',
      name: 'Nurse Emily Davis',
      role: 'Registered Nurse',
      department: 'Emergency',
      shiftDate: '2023-07-15',
      shiftType: 'Night (8pm-8am)',
      status: 'Confirmed',
      assignedBy: 'Admin',
      icon: <FaUserNurse className="text-purple-500" />
    },
    {
      id: 3,
      staffId: 'EMP-1003',
      name: 'Robert Wilson',
      role: 'Surgeon',
      department: 'Surgery',
      shiftDate: '2023-07-16',
      shiftType: 'Day (8am-4pm)',
      status: 'Pending',
      assignedBy: 'Dr. Chen',
      icon: <FaUserMd className="text-amber-500" />
    },
    {
      id: 4,
      staffId: 'EMP-1004',
      name: 'Maria Garcia',
      role: 'Nurse Practitioner',
      department: 'Pediatrics',
      shiftDate: '2023-07-16',
      shiftType: 'Evening (4pm-12am)',
      status: 'Confirmed',
      assignedBy: 'Admin',
      icon: <FaUserNurse className="text-emerald-500" />
    },
    {
      id: 5,
      staffId: 'EMP-1005',
      name: 'David Kim',
      role: 'Administrator',
      department: 'Administration',
      shiftDate: '2023-07-15',
      shiftType: 'Day (9am-5pm)',
      status: 'Confirmed',
      assignedBy: 'HR',
      icon: <FaUserTie className="text-red-500" />
    },
    {
      id: 6,
      staffId: 'EMP-1006',
      name: 'Jennifer Lee',
      role: 'Registered Nurse',
      department: 'ICU',
      shiftDate: '2023-07-17',
      shiftType: 'Night (8pm-8am)',
      status: 'Requested',
      assignedBy: 'Self',
      icon: <FaUserNurse className="text-indigo-500" />
    },
  ];

  const filteredSchedules = schedules.filter(schedule => {
    const matchesSearch = schedule.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         schedule.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         schedule.staffId.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = activeFilter === 'all' || schedule.status === activeFilter;
    return matchesSearch && matchesFilter;
  });

  const pendingSchedules = schedules.filter(schedule => schedule.status === 'Pending' || schedule.status === 'Requested');

  const getStatusColor = (status) => {
    switch(status) {
      case 'Confirmed': return 'bg-emerald-100 text-emerald-800';
      case 'Pending': return 'bg-amber-100 text-amber-800';
      case 'Requested': return 'bg-blue-100 text-blue-800';
      case 'Cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-slate-100 text-slate-800';
    }
  };

  const getRoleIcon = (role) => {
    if (role.includes('Nurse')) return <FaUserNurse className="mr-1" />;
    if (role.includes('Physician') || role.includes('Surgeon')) return <FaUserMd className="mr-1" />;
    return <FaUserTie className="mr-1" />;
  };

  return (
    <div className="p-6">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 flex items-center">
            <FiCalendar className="mr-2 text-indigo-500" />
            Staff Scheduling
          </h1>
          <p className="text-slate-600">Manage and track staff shifts and schedules</p>
        </div>
        <div className="flex space-x-2 mt-4 md:mt-0">
          <button 
            className={`px-3 py-2 rounded-md flex items-center border ${viewMode === 'list' ? 'bg-indigo-500 text-white border-indigo-500' : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-50'}`}
            onClick={() => setViewMode('list')}
          >
            <FiUsers className="mr-2" />
            List View
          </button>
          <button 
            className={`px-3 py-2 rounded-md flex items-center border ${viewMode === 'calendar' ? 'bg-indigo-500 text-white border-indigo-500' : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-50'}`}
            onClick={() => setViewMode('calendar')}
          >
            <FiCalendar className="mr-2" />
            Calendar View
          </button>
          <button className="bg-white border border-slate-300 text-slate-700 px-3 py-2 rounded-md flex items-center hover:bg-slate-50">
            <FiPrinter className="mr-2" />
            Print
          </button>
          <button 
            className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-md flex items-center"
            onClick={() => setShowAddScheduleModal(true)}
          >
            <FiPlus className="mr-2" />
            Add Schedule
          </button>
        </div>
      </div>

      {/* Alerts Section */}
      {pendingSchedules.length > 0 && (
        <div className="mb-6 bg-amber-50 border border-amber-200 rounded-xl p-4">
          <div className="flex items-start">
            <FiAlertTriangle className="text-amber-500 mt-1 mr-3 flex-shrink-0" />
            <div>
              <h3 className="font-medium text-amber-800">Pending Schedules</h3>
              <p className="text-sm text-amber-700 mt-1">
                {pendingSchedules.length} schedule{pendingSchedules.length !== 1 ? 's' : ''} require approval.
              </p>
            </div>
          </div>
        </div>
      )}

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
              placeholder="Search schedules..."
              className="block w-full pl-10 pr-3 py-2 border border-slate-300 rounded-md bg-slate-50 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Filter Buttons */}
          <div className="flex space-x-2 overflow-x-auto w-full md:w-auto">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-md text-sm font-medium ${activeFilter === 'all' ? 'bg-indigo-500 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
            >
              All Schedules
            </button>
            <button
              onClick={() => setActiveFilter('Confirmed')}
              className={`px-4 py-2 rounded-md text-sm font-medium ${activeFilter === 'Confirmed' ? 'bg-indigo-500 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
            >
              Confirmed
            </button>
            <button
              onClick={() => setActiveFilter('Pending')}
              className={`px-4 py-2 rounded-md text-sm font-medium ${activeFilter === 'Pending' ? 'bg-indigo-500 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
            >
              Pending
            </button>
            <button
              onClick={() => setActiveFilter('Requested')}
              className={`px-4 py-2 rounded-md text-sm font-medium ${activeFilter === 'Requested' ? 'bg-indigo-500 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
            >
              Requested
            </button>
          </div>
        </div>
      </div>

      {/* View Mode Content */}
      {viewMode === 'list' ? (
        /* List View */
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                    Staff Member
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                    Role & Department
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                    Shift Details
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                    Assigned By
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-slate-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-slate-200">
                {filteredSchedules.length > 0 ? (
                  filteredSchedules.map((schedule) => (
                    <tr key={schedule.id} className="hover:bg-slate-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center mr-4">
                            {schedule.icon}
                          </div>
                          <div>
                            <div className="text-sm font-medium text-slate-900">{schedule.name}</div>
                            <div className="text-xs text-slate-500">ID: {schedule.staffId}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-slate-900 flex items-center">
                          {getRoleIcon(schedule.role)}
                          {schedule.role}
                        </div>
                        <div className="text-xs text-slate-500">{schedule.department}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-slate-900 flex items-center">
                          <FiCalendar className="mr-1 text-slate-400" size={14} />
                          {schedule.shiftDate}
                        </div>
                        <div className="text-xs text-slate-500 flex items-center">
                          <FiClock className="mr-1 text-slate-400" size={12} />
                          {schedule.shiftType}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(schedule.status)}`}>
                          {schedule.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-slate-900">{schedule.assignedBy}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button className="text-slate-600 hover:text-indigo-600 mr-3">
                          <FiEdit2 />
                        </button>
                        <button className="text-slate-600 hover:text-red-600">
                          <FiTrash2 />
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="px-6 py-12 text-center">
                      <div className="flex flex-col items-center justify-center text-slate-400">
                        <FiCalendar size={48} className="mb-4" />
                        <p className="text-lg">No schedules found</p>
                        <p className="text-sm mt-1">Try adjusting your search or filters</p>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        /* Calendar View */
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold text-slate-800">July 2023</h2>
            <div className="flex space-x-2">
              <button className="px-3 py-1 border border-slate-300 rounded-md text-sm bg-white hover:bg-slate-50">
                Today
              </button>
              <button className="px-3 py-1 border border-slate-300 rounded-md text-sm bg-white hover:bg-slate-50">
                &lt;
              </button>
              <button className="px-3 py-1 border border-slate-300 rounded-md text-sm bg-white hover:bg-slate-50">
                &gt;
              </button>
            </div>
          </div>
          
          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-1">
            {/* Calendar Headers */}
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
              <div key={day} className="text-center font-medium text-slate-500 py-2 text-sm">
                {day}
              </div>
            ))}
            
            {/* Calendar Cells */}
            {Array.from({ length: 35 }).map((_, index) => {
              const day = index - 5 + 1; // Adjust for July 2023 starting on Saturday
              const currentDate = day > 0 && day <= 31 ? `2023-07-${day.toString().padStart(2, '0')}` : null;
              const daySchedules = currentDate ? schedules.filter(s => s.shiftDate === currentDate) : [];
              
              return (
                <div 
                  key={index} 
                  className={`min-h-24 border border-slate-200 p-1 ${day < 1 || day > 31 ? 'bg-slate-50' : 'hover:bg-slate-50'}`}
                >
                  {day > 0 && day <= 31 && (
                    <>
                      <div className="text-right text-sm font-medium mb-1">{day}</div>
                      {daySchedules.slice(0, 2).map(schedule => (
                        <div 
                          key={schedule.id} 
                          className="text-xs p-1 mb-1 rounded truncate"
                          style={{ 
                            backgroundColor: schedule.status === 'Confirmed' ? '#e0e7ff' : 
                                           schedule.status === 'Pending' ? '#fef3c7' : 
                                           '#dbeafe',
                            color: schedule.status === 'Confirmed' ? '#4f46e5' : 
                                     schedule.status === 'Pending' ? '#d97706' : 
                                     '#1d4ed8'
                          }}
                        >
                          <div className="truncate">{schedule.name.split(' ')[0]}</div>
                          <div className="truncate text-xs opacity-75">{schedule.shiftType.split(' ')[0]}</div>
                        </div>
                      ))}
                      {daySchedules.length > 2 && (
                        <div className="text-xs text-center text-indigo-600">
                          +{daySchedules.length - 2} more
                        </div>
                      )}
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Stats Section */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
          <h3 className="text-sm font-medium text-slate-500 mb-2">Total Scheduled</h3>
          <p className="text-3xl font-bold text-slate-800">{schedules.length}</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
          <h3 className="text-sm font-medium text-slate-500 mb-2">Physicians</h3>
          <p className="text-3xl font-bold text-blue-600">
            {schedules.filter(s => s.role.includes('Physician') || s.role.includes('Surgeon')).length}
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
          <h3 className="text-sm font-medium text-slate-500 mb-2">Nursing Staff</h3>
          <p className="text-3xl font-bold text-purple-600">
            {schedules.filter(s => s.role.includes('Nurse')).length}
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
          <h3 className="text-sm font-medium text-slate-500 mb-2">Pending Approval</h3>
          <p className="text-3xl font-bold text-amber-600">
            {pendingSchedules.length}
          </p>
        </div>
      </div>

      {/* Add Schedule Modal */}
      {showAddScheduleModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-slate-800">Add New Staff Schedule</h2>
                <button 
                  className="text-slate-400 hover:text-slate-600"
                  onClick={() => setShowAddScheduleModal(false)}
                >
                  &times;
                </button>
              </div>

              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Staff Member</label>
                    <select className="w-full border border-slate-300 rounded-md p-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                      <option>Select staff member...</option>
                      <option>Dr. Sarah Johnson</option>
                      <option>Nurse Emily Davis</option>
                      <option>Dr. Michael Chen</option>
                      <option>Nurse Maria Garcia</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Staff ID</label>
                    <input 
                      type="text" 
                      className="w-full border border-slate-300 rounded-md p-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="EMP-XXXX"
                      readOnly
                      value="EMP-1001"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Shift Date</label>
                    <input 
                      type="date" 
                      className="w-full border border-slate-300 rounded-md p-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Shift Type</label>
                    <select className="w-full border border-slate-300 rounded-md p-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                      <option>Day (8am-4pm)</option>
                      <option>Evening (4pm-12am)</option>
                      <option>Night (8pm-8am)</option>
                      <option>Weekend (12hr)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Department</label>
                    <select className="w-full border border-slate-300 rounded-md p-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                      <option>Emergency</option>
                      <option>Cardiology</option>
                      <option>Surgery</option>
                      <option>Pediatrics</option>
                      <option>ICU</option>
                      <option>Administration</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Status</label>
                    <select className="w-full border border-slate-300 rounded-md p-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                      <option>Confirmed</option>
                      <option>Pending</option>
                      <option>Requested</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Notes</label>
                  <textarea 
                    className="w-full border border-slate-300 rounded-md p-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 min-h-[80px]"
                    placeholder="Additional notes or special instructions..."
                  />
                </div>

                <div className="flex justify-end space-x-3 pt-4">
                  <button 
                    type="button"
                    className="px-4 py-2 border border-slate-300 text-sm font-medium rounded-md bg-white text-slate-700 hover:bg-slate-50"
                    onClick={() => setShowAddScheduleModal(false)}
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit"
                    className="px-4 py-2 bg-indigo-500 text-sm font-medium rounded-md text-white hover:bg-indigo-600"
                  >
                    Save Schedule
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StaffScheduling;