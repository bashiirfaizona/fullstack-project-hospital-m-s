import React, { useState } from 'react';
import { 
  FiFileText, FiPlus, FiSearch, FiFilter, 
  FiAlertCircle, FiEdit2, FiTrash2, FiUser, 
  FiPrinter, FiDownload, FiCalendar, FiClock 
} from 'react-icons/fi';
import { FaStethoscope, FaPills, FaProcedures, FaAllergies } from 'react-icons/fa';

const MedicalRecords = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddRecordModal, setShowAddRecordModal] = useState(false);

  // Sample medical records data
  const medicalRecords = [
    {
      id: 1,
      patientId: 'PT-1001',
      name: 'John Smith',
      age: 42,
      gender: 'Male',
      visitDate: '2023-06-15',
      diagnosis: 'Hypertension',
      treatment: 'Lisinopril 10mg daily',
      status: 'Active',
      physician: 'Dr. Sarah Johnson',
      icon: <FiUser className="text-blue-500" />
    },
    {
      id: 2,
      patientId: 'PT-1002',
      name: 'Emily Davis',
      age: 35,
      gender: 'Female',
      visitDate: '2023-06-14',
      diagnosis: 'Type 2 Diabetes',
      treatment: 'Metformin 500mg BID',
      status: 'Active',
      physician: 'Dr. Michael Chen',
      icon: <FiUser className="text-purple-500" />
    },
    {
      id: 3,
      patientId: 'PT-1003',
      name: 'Robert Wilson',
      age: 68,
      gender: 'Male',
      visitDate: '2023-06-10',
      diagnosis: 'COPD',
      treatment: 'Albuterol inhaler PRN',
      status: 'Chronic',
      physician: 'Dr. Lisa Rodriguez',
      icon: <FiUser className="text-amber-500" />
    },
    {
      id: 4,
      patientId: 'PT-1004',
      name: 'Maria Garcia',
      age: 29,
      gender: 'Female',
      visitDate: '2023-06-12',
      diagnosis: 'Pneumonia',
      treatment: 'Azithromycin 500mg daily x5 days',
      status: 'Resolved',
      physician: 'Dr. James Wilson',
      icon: <FiUser className="text-emerald-500" />
    },
    {
      id: 5,
      patientId: 'PT-1005',
      name: 'David Kim',
      age: 55,
      gender: 'Male',
      visitDate: '2023-06-08',
      diagnosis: 'Hyperlipidemia',
      treatment: 'Atorvastatin 20mg nightly',
      status: 'Active',
      physician: 'Dr. Sarah Johnson',
      icon: <FiUser className="text-red-500" />
    },
    {
      id: 6,
      patientId: 'PT-1006',
      name: 'Jennifer Lee',
      age: 47,
      gender: 'Female',
      visitDate: '2023-06-05',
      diagnosis: 'Migraine',
      treatment: 'Sumatriptan 50mg PRN',
      status: 'Chronic',
      physician: 'Dr. Michael Chen',
      icon: <FiUser className="text-indigo-500" />
    },
  ];

  const filteredRecords = medicalRecords.filter(record => {
    const matchesSearch = record.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         record.diagnosis.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         record.patientId.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = activeFilter === 'all' || record.status === activeFilter;
    return matchesSearch && matchesFilter;
  });

  const criticalRecords = medicalRecords.filter(record => record.status === 'Critical');

  const getStatusColor = (status) => {
    switch(status) {
      case 'Active': return 'bg-blue-100 text-blue-800';
      case 'Chronic': return 'bg-amber-100 text-amber-800';
      case 'Resolved': return 'bg-emerald-100 text-emerald-800';
      case 'Critical': return 'bg-red-100 text-red-800';
      default: return 'bg-slate-100 text-slate-800';
    }
  };

  return (
    <div className="p-6">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 flex items-center">
            <FiFileText className="mr-2 text-slate-800" />
            Medical Records
          </h1>
          <p className="text-slate-600">Manage and access patient medical records</p>
        </div>
        <div className="flex space-x-2 mt-4 md:mt-0">
          <button className="bg-white border border-slate-300 text-slate-700 px-3 py-2 rounded-md flex items-center hover:bg-slate-50">
            <FiPrinter className="mr-2" />
            Print
          </button>
          <button className="bg-white border border-slate-300 text-slate-700 px-3 py-2 rounded-md flex items-center hover:bg-slate-50">
            <FiDownload className="mr-2" />
            Export
          </button>
          <button 
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md flex items-center"
            onClick={() => setShowAddRecordModal(true)}
          >
            <FiPlus className="mr-2" />
            New Record
          </button>
        </div>
      </div>

      {/* Alerts Section */}
      {criticalRecords.length > 0 && (
        <div className="mb-6 bg-red-50 border border-red-200 rounded-xl p-4">
          <div className="flex items-start">
            <FiAlertCircle className="text-red-500 mt-1 mr-3 flex-shrink-0" />
            <div>
              <h3 className="font-medium text-red-800">Critical Patient Alert</h3>
              <p className="text-sm text-red-700 mt-1">
                {criticalRecords.length} patient{criticalRecords.length !== 1 ? 's' : ''} with critical conditions requiring immediate attention.
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
              placeholder="Search records..."
              className="block w-full pl-10 pr-3 py-2 border border-slate-300 rounded-md bg-slate-50 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Filter Buttons */}
          <div className="flex space-x-2 overflow-x-auto w-full md:w-auto">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-md text-sm font-medium ${activeFilter === 'all' ? 'bg-blue-500 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
            >
              All Records
            </button>
            <button
              onClick={() => setActiveFilter('Active')}
              className={`px-4 py-2 rounded-md text-sm font-medium ${activeFilter === 'Active' ? 'bg-blue-500 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
            >
              Active
            </button>
            <button
              onClick={() => setActiveFilter('Chronic')}
              className={`px-4 py-2 rounded-md text-sm font-medium ${activeFilter === 'Chronic' ? 'bg-blue-500 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
            >
              Chronic
            </button>
            <button
              onClick={() => setActiveFilter('Resolved')}
              className={`px-4 py-2 rounded-md text-sm font-medium ${activeFilter === 'Resolved' ? 'bg-blue-500 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
            >
              Resolved
            </button>
            <button
              onClick={() => setActiveFilter('Critical')}
              className={`px-4 py-2 rounded-md text-sm font-medium ${activeFilter === 'Critical' ? 'bg-blue-500 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
            >
              Critical
            </button>
          </div>
        </div>
      </div>

      {/* Records Table */}
      <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200">
            <thead className="bg-slate-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                  Patient
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                  Diagnosis
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                  Treatment
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                  Last Visit
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                  Physician
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-slate-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-slate-200">
              {filteredRecords.length > 0 ? (
                filteredRecords.map((record) => (
                  <tr key={record.id} className="hover:bg-slate-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center mr-4">
                          {record.icon}
                        </div>
                        <div>
                          <div className="text-sm font-medium text-slate-900">{record.name}</div>
                          <div className="text-xs text-slate-500 flex items-center">
                            <span className="mr-2">ID: {record.patientId}</span>
                            <span>{record.age}y • {record.gender}</span>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-slate-900">{record.diagnosis}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-slate-900 max-w-xs truncate">{record.treatment}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(record.status)}`}>
                        {record.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-slate-900 flex items-center">
                        <FiCalendar className="mr-1 text-slate-400" size={14} />
                        {record.visitDate}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-slate-900 max-w-xs truncate">{record.physician}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-slate-600 hover:text-blue-600 mr-3">
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
                      <FiFileText size={48} className="mb-4" />
                      <p className="text-lg">No medical records found</p>
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
          <h3 className="text-sm font-medium text-slate-500 mb-2">Total Records</h3>
          <p className="text-3xl font-bold text-slate-800">{medicalRecords.length}</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
          <h3 className="text-sm font-medium text-slate-500 mb-2">Active Cases</h3>
          <p className="text-3xl font-bold text-blue-600">
            {medicalRecords.filter(record => record.status === 'Active').length}
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
          <h3 className="text-sm font-medium text-slate-500 mb-2">Chronic Conditions</h3>
          <p className="text-3xl font-bold text-amber-600">
            {medicalRecords.filter(record => record.status === 'Chronic').length}
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
          <h3 className="text-sm font-medium text-slate-500 mb-2">Critical Patients</h3>
          <p className="text-3xl font-bold text-red-600">
            {medicalRecords.filter(record => record.status === 'Critical').length}
          </p>
        </div>
      </div>

      {/* Add Record Modal */}
      {showAddRecordModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-slate-800">Create New Medical Record</h2>
                <button 
                  className="text-slate-400 hover:text-slate-600"
                  onClick={() => setShowAddRecordModal(false)}
                >
                  &times;
                </button>
              </div>

              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Patient Name</label>
                    <input 
                      type="text" 
                      className="w-full border border-slate-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Patient ID</label>
                    <input 
                      type="text" 
                      className="w-full border border-slate-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="PT-XXXX"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Age</label>
                    <input 
                      type="number" 
                      className="w-full border border-slate-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Years"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Gender</label>
                    <select className="w-full border border-slate-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                      <option>Male</option>
                      <option>Female</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Visit Date</label>
                    <input 
                      type="date" 
                      className="w-full border border-slate-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Diagnosis</label>
                  <input 
                    type="text" 
                    className="w-full border border-slate-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Primary diagnosis"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Treatment Plan</label>
                  <textarea 
                    className="w-full border border-slate-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 min-h-[100px]"
                    placeholder="Medications, procedures, etc."
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Status</label>
                    <select className="w-full border border-slate-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                      <option>Active</option>
                      <option>Chronic</option>
                      <option>Resolved</option>
                      <option>Critical</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Attending Physician</label>
                    <input 
                      type="text" 
                      className="w-full border border-slate-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Dr. Name"
                    />
                  </div>
                </div>

                <div className="flex justify-end space-x-3 pt-4">
                  <button 
                    type="button"
                    className="px-4 py-2 border border-slate-300 text-sm font-medium rounded-md bg-white text-slate-700 hover:bg-slate-50"
                    onClick={() => setShowAddRecordModal(false)}
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-sm font-medium rounded-md text-white hover:bg-blue-600"
                  >
                    Create Record
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

export default MedicalRecords;