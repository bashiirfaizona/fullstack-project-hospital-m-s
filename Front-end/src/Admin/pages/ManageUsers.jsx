import React, { useState } from 'react';
import { 
  FiUser, FiPlus, FiSearch, FiFilter, 
  FiEdit2, FiTrash2, FiMail, FiPhone, 
  FiLock, FiCalendar, FiActivity 
} from 'react-icons/fi';
import { FaUserMd, FaUserNurse, FaUserShield, FaUserInjured } from 'react-icons/fa';

const ManageUsers = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showUserModal, setShowUserModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  // Sample user data
  const users = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      email: 's.johnson@hospital.com',
      phone: '+1 555-123-4567',
      role: 'doctor',
      department: 'Cardiology',
      status: 'active',
      lastActive: '2023-06-15',
      joinDate: '2020-03-12'
    },
    {
      id: 2,
      name: 'Nurse Aisha Mohamed',
      email: 'a.mohamed@hospital.com',
      phone: '+1 555-234-5678',
      role: 'nurse',
      department: 'Pediatrics',
      status: 'active',
      lastActive: '2023-06-16',
      joinDate: '2021-05-18'
    },
    {
      id: 3,
      name: 'Admin Ahmed Hassan',
      email: 'a.hassan@hospital.com',
      phone: '+1 555-345-6789',
      role: 'admin',
      department: 'Administration',
      status: 'active',
      lastActive: '2023-06-17',
      joinDate: '2019-11-05'
    },
    {
      id: 4,
      name: 'Patient Omar Mahmoud',
      email: 'omar.m@example.com',
      phone: '+1 555-456-7890',
      role: 'patient',
      department: '',
      status: 'inactive',
      lastActive: '2023-05-28',
      joinDate: '2023-04-15'
    },
    {
      id: 5,
      name: 'Dr. Fatima Khalid',
      email: 'f.khalid@hospital.com',
      phone: '+1 555-567-8901',
      role: 'doctor',
      department: 'Orthopedics',
      status: 'on-leave',
      lastActive: '2023-06-01',
      joinDate: '2020-08-22'
    },
    {
      id: 6,
      name: 'Receptionist Layla Ibrahim',
      email: 'l.ibrahim@hospital.com',
      phone: '+1 555-678-9012',
      role: 'staff',
      department: 'Reception',
      status: 'active',
      lastActive: '2023-06-17',
      joinDate: '2022-02-10'
    },
  ];

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = activeFilter === 'all' || user.role === activeFilter || user.status === activeFilter;
    return matchesSearch && matchesFilter;
  });

  const roleBadge = (role) => {
    const roleClasses = {
      doctor: 'bg-blue-100 text-blue-800',
      nurse: 'bg-purple-100 text-purple-800',
      admin: 'bg-red-100 text-red-800',
      patient: 'bg-green-100 text-green-800',
      staff: 'bg-amber-100 text-amber-800'
    };
    const roleIcons = {
      doctor: <FaUserMd className="mr-1" />,
      nurse: <FaUserNurse className="mr-1" />,
      admin: <FaUserShield className="mr-1" />,
      patient: <FaUserInjured className="mr-1" />,
      staff: <FiUser className="mr-1" />
    };
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium flex items-center ${roleClasses[role]}`}>
        {roleIcons[role]}
        {role.charAt(0).toUpperCase() + role.slice(1)}
      </span>
    );
  };

  const statusBadge = (status) => {
    const statusClasses = {
      active: 'bg-emerald-100 text-emerald-800',
      inactive: 'bg-slate-100 text-slate-800',
      'on-leave': 'bg-amber-100 text-amber-800',
      suspended: 'bg-red-100 text-red-800'
    };
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusClasses[status]}`}>
        {status.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
      </span>
    );
  };

  const getRoleIcon = (role) => {
    switch(role) {
      case 'doctor':
        return <FaUserMd className="text-blue-500" />;
      case 'nurse':
        return <FaUserNurse className="text-purple-500" />;
      case 'admin':
        return <FaUserShield className="text-red-500" />;
      case 'patient':
        return <FaUserInjured className="text-green-500" />;
      default:
        return <FiUser className="text-amber-500" />;
    }
  };

  return (
    <div className="p-6">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">User Management</h1>
          <p className="text-slate-600">Manage all system users and their permissions</p>
        </div>
        <button 
          className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-md flex items-center mt-4 md:mt-0"
          onClick={() => {
            setSelectedUser(null);
            setShowUserModal(true);
          }}
        >
          <FiPlus className="mr-2" />
          Add User
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
              placeholder="Search users..."
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
              All Users
            </button>
            <button
              onClick={() => setActiveFilter('doctor')}
              className={`px-4 py-2 rounded-md text-sm font-medium ${activeFilter === 'doctor' ? 'bg-emerald-500 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
            >
              Doctors
            </button>
            <button
              onClick={() => setActiveFilter('nurse')}
              className={`px-4 py-2 rounded-md text-sm font-medium ${activeFilter === 'nurse' ? 'bg-emerald-500 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
            >
              Nurses
            </button>
            <button
              onClick={() => setActiveFilter('admin')}
              className={`px-4 py-2 rounded-md text-sm font-medium ${activeFilter === 'admin' ? 'bg-emerald-500 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
            >
              Admins
            </button>
          </div>
        </div>
      </div>

      {/* Users Table */}
      <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200">
            <thead className="bg-slate-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                  User
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                  Contact
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                  Role
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                  Department
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                  Last Active
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-slate-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-slate-200">
              {filteredUsers.length > 0 ? (
                filteredUsers.map((user) => (
                  <tr key={user.id} className="hover:bg-slate-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center mr-4">
                          {getRoleIcon(user.role)}
                        </div>
                        <div>
                          <div className="text-sm font-medium text-slate-900">{user.name}</div>
                          <div className="text-xs text-slate-500">Joined: {user.joinDate}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-slate-900 flex items-center">
                        <FiMail className="mr-2" />
                        {user.email}
                      </div>
                      <div className="text-xs text-slate-500 flex items-center">
                        <FiPhone className="mr-2" />
                        {user.phone}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {roleBadge(user.role)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-slate-900">{user.department || '-'}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {statusBadge(user.status)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-slate-900">{user.lastActive}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button 
                        className="text-slate-600 hover:text-emerald-600 mr-3"
                        onClick={() => {
                          setSelectedUser(user);
                          setShowUserModal(true);
                        }}
                      >
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
                  <td colSpan="7" className="px-6 py-12 text-center">
                    <div className="flex flex-col items-center justify-center text-slate-400">
                      <FiUser size={48} className="mb-4" />
                      <p className="text-lg">No users found</p>
                      <p className="text-sm mt-1">Try adjusting your search or filters</p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Stats Section */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
          <h3 className="text-sm font-medium text-slate-500 mb-2">Total Users</h3>
          <p className="text-3xl font-bold text-slate-800">{users.length}</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
          <h3 className="text-sm font-medium text-slate-500 mb-2">Active Today</h3>
          <p className="text-3xl font-bold text-emerald-600">
            {users.filter(user => user.lastActive === new Date().toISOString().split('T')[0]).length}
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
          <h3 className="text-sm font-medium text-slate-500 mb-2">Medical Staff</h3>
          <p className="text-3xl font-bold text-blue-600">
            {users.filter(user => user.role === 'doctor' || user.role === 'nurse').length}
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
          <h3 className="text-sm font-medium text-slate-500 mb-2">Active Patients</h3>
          <p className="text-3xl font-bold text-green-600">
            {users.filter(user => user.role === 'patient' && user.status === 'active').length}
          </p>
        </div>
      </div>

      {/* User Modal */}
      {showUserModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-slate-800">
                  {selectedUser ? 'Edit User' : 'Add New User'}
                </h2>
                <button 
                  className="text-slate-400 hover:text-slate-600"
                  onClick={() => {
                    setShowUserModal(false);
                    setSelectedUser(null);
                  }}
                >
                  &times;
                </button>
              </div>

              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full border border-slate-300 rounded-md p-2 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      defaultValue={selectedUser?.name || ''}
                      placeholder="Enter full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                    <input 
                      type="email" 
                      className="w-full border border-slate-300 rounded-md p-2 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      defaultValue={selectedUser?.email || ''}
                      placeholder="Enter email address"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                    <input 
                      type="tel" 
                      className="w-full border border-slate-300 rounded-md p-2 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      defaultValue={selectedUser?.phone || ''}
                      placeholder="Enter phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Role</label>
                    <select 
                      className="w-full border border-slate-300 rounded-md p-2 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      defaultValue={selectedUser?.role || ''}
                    >
                      <option value="">Select Role</option>
                      <option value="doctor">Doctor</option>
                      <option value="nurse">Nurse</option>
                      <option value="admin">Administrator</option>
                      <option value="staff">Staff</option>
                      <option value="patient">Patient</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Department</label>
                    <select 
                      className="w-full border border-slate-300 rounded-md p-2 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      defaultValue={selectedUser?.department || ''}
                    >
                      <option value="">Select Department</option>
                      <option value="Cardiology">Cardiology</option>
                      <option value="Pediatrics">Pediatrics</option>
                      <option value="Orthopedics">Orthopedics</option>
                      <option value="Neurology">Neurology</option>
                      <option value="Emergency">Emergency</option>
                      <option value="Administration">Administration</option>
                      <option value="Reception">Reception</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Status</label>
                    <select 
                      className="w-full border border-slate-300 rounded-md p-2 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      defaultValue={selectedUser?.status || 'active'}
                    >
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                      <option value="on-leave">On Leave</option>
                      <option value="suspended">Suspended</option>
                    </select>
                  </div>
                </div>

                {!selectedUser && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
                      <div className="relative">
                        <input 
                          type="password" 
                          className="w-full border border-slate-300 rounded-md p-2 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                          placeholder="Create password"
                        />
                        <FiLock className="absolute right-3 top-3 text-slate-400" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Confirm Password</label>
                      <div className="relative">
                        <input 
                          type="password" 
                          className="w-full border border-slate-300 rounded-md p-2 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                          placeholder="Confirm password"
                        />
                        <FiLock className="absolute right-3 top-3 text-slate-400" />
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex justify-end space-x-3 pt-4 border-t border-slate-200">
                  <button 
                    type="button"
                    className="px-4 py-2 border border-slate-300 text-sm font-medium rounded-md bg-white text-slate-700 hover:bg-slate-50"
                    onClick={() => {
                      setShowUserModal(false);
                      setSelectedUser(null);
                    }}
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit"
                    className="px-4 py-2 bg-emerald-500 text-sm font-medium rounded-md text-white hover:bg-emerald-600"
                  >
                    {selectedUser ? 'Update User' : 'Create User'}
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

export default ManageUsers;