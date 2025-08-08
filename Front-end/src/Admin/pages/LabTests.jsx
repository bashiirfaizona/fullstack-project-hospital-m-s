import React, { useState } from 'react';
import { 
  FiDroplet, FiPlus, FiSearch, FiFilter, 
  FiEdit2, FiTrash2, FiPrinter, FiDownload,
  FiClock, FiAlertCircle, FiTrendingUp, FiUser
} from 'react-icons/fi';
import { FaFlask, FaMicroscope, FaVial } from 'react-icons/fa';

const LabTests = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showTestModal, setShowTestModal] = useState(false);
  const [selectedTest, setSelectedTest] = useState(null);

  // Sample test data
  const labTests = [
    {
      id: 'LT-2023-001',
      patient: 'Mohamed Ali',
      testType: 'Complete Blood Count (CBC)',
      status: 'completed',
      orderedDate: '2023-06-15',
      completedDate: '2023-06-15',
      doctor: 'Dr. Sarah Johnson',
      priority: 'routine',
      results: 'Within normal limits'
    },
    {
      id: 'LT-2023-002',
      patient: 'Aisha Mohamed',
      testType: 'Lipid Panel',
      status: 'in-progress',
      orderedDate: '2023-06-16',
      completedDate: '',
      doctor: 'Dr. Ahmed Hassan',
      priority: 'urgent',
      results: ''
    },
    {
      id: 'LT-2023-003',
      patient: 'Omar Mahmoud',
      testType: 'Liver Function Test',
      status: 'pending',
      orderedDate: '2023-06-17',
      completedDate: '',
      doctor: 'Dr. Fatima Khalid',
      priority: 'routine',
      results: ''
    },
    {
      id: 'LT-2023-004',
      patient: 'Layla Ibrahim',
      testType: 'COVID-19 PCR',
      status: 'completed',
      orderedDate: '2023-06-18',
      completedDate: '2023-06-18',
      doctor: 'Dr. Omar Mahmoud',
      priority: 'stat',
      results: 'Negative'
    },
    {
      id: 'LT-2023-005',
      patient: 'Karim Mostafa',
      testType: 'Urinalysis',
      status: 'cancelled',
      orderedDate: '2023-06-14',
      completedDate: '',
      doctor: 'Dr. Layla Ibrahim',
      priority: 'routine',
      results: ''
    },
  ];

  const filteredTests = labTests.filter(test => {
    const matchesSearch = test.patient.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         test.testType.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = activeFilter === 'all' || test.status === activeFilter || test.priority === activeFilter;
    return matchesSearch && matchesFilter;
  });

  const statusBadge = (status) => {
    const statusClasses = {
      completed: 'bg-emerald-100 text-emerald-800',
      'in-progress': 'bg-blue-100 text-blue-800',
      pending: 'bg-amber-100 text-amber-800',
      cancelled: 'bg-red-100 text-red-800'
    };
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusClasses[status]}`}>
        {status.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
      </span>
    );
  };

  const priorityBadge = (priority) => {
    const priorityClasses = {
      stat: 'bg-red-100 text-red-800',
      urgent: 'bg-amber-100 text-amber-800',
      routine: 'bg-slate-100 text-slate-800'
    };
    const priorityText = {
      stat: 'STAT',
      urgent: 'Urgent',
      routine: 'Routine'
    };
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${priorityClasses[priority]}`}>
        {priorityText[priority]}
      </span>
    );
  };

  const testIcon = (testType) => {
    if (testType.includes('Blood')) return <FiDroplet className="text-red-500" />;
    if (testType.includes('Urine')) return <FaFlask className="text-amber-500" />;
    if (testType.includes('COVID')) return <FaVial className="text-purple-500" />;
    return <FaMicroscope className="text-blue-500" />;
  };

  return (
    <div className="p-6">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 flex items-center">
            <FaMicroscope className="mr-2 text-emerald-500" />
            Laboratory Tests
          </h1>
          <p className="text-slate-600">Manage and track all laboratory tests and results</p>
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
            className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-md flex items-center"
            onClick={() => {
              setSelectedTest(null);
              setShowTestModal(true);
            }}
          >
            <FiPlus className="mr-2" />
            New Test
          </button>
        </div>
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
              placeholder="Search tests..."
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
              All Tests
            </button>
            <button
              onClick={() => setActiveFilter('completed')}
              className={`px-4 py-2 rounded-md text-sm font-medium ${activeFilter === 'completed' ? 'bg-emerald-500 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
            >
              Completed
            </button>
            <button
              onClick={() => setActiveFilter('in-progress')}
              className={`px-4 py-2 rounded-md text-sm font-medium ${activeFilter === 'in-progress' ? 'bg-emerald-500 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
            >
              In Progress
            </button>
            <button
              onClick={() => setActiveFilter('stat')}
              className={`px-4 py-2 rounded-md text-sm font-medium ${activeFilter === 'stat' ? 'bg-emerald-500 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
            >
              STAT Priority
            </button>
          </div>
        </div>
      </div>

      {/* Tests Table */}
      <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200">
            <thead className="bg-slate-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                  Test ID
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                  Patient
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                  Test Type
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                  Doctor
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                  Priority
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
              {filteredTests.length > 0 ? (
                filteredTests.map((test) => (
                  <tr 
                    key={test.id} 
                    className="hover:bg-slate-50"
                    onClick={() => {
                      setSelectedTest(test);
                      setShowTestModal(true);
                    }}
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-blue-600">{test.id}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center mr-4">
                          <FiUser className="text-slate-400" />
                        </div>
                        <div className="text-sm font-medium text-slate-900">{test.patient}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="mr-3">
                          {testIcon(test.testType)}
                        </div>
                        <div className="text-sm text-slate-900">{test.testType}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-slate-900">{test.doctor}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {priorityBadge(test.priority)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {statusBadge(test.status)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button 
                        className="text-slate-600 hover:text-emerald-600 mr-3"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedTest(test);
                          setShowTestModal(true);
                        }}
                      >
                        <FiEdit2 />
                      </button>
                      <button 
                        className="text-slate-600 hover:text-red-600"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FiTrash2 />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="px-6 py-12 text-center">
                    <div className="flex flex-col items-center justify-center text-slate-400">
                      <FaMicroscope size={48} className="mb-4" />
                      <p className="text-lg">No tests found</p>
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
          <h3 className="text-sm font-medium text-slate-500 mb-2">Tests Today</h3>
          <div className="flex items-center">
            <span className="text-3xl font-bold text-slate-800 mr-2">
              {labTests.filter(test => test.orderedDate === new Date().toISOString().split('T')[0]).length}
            </span>
            <FiTrendingUp className="text-emerald-500" />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
          <h3 className="text-sm font-medium text-slate-500 mb-2">Pending Tests</h3>
          <div className="flex items-center">
            <span className="text-3xl font-bold text-amber-600 mr-2">
              {labTests.filter(test => test.status === 'pending').length}
            </span>
            <FiClock className="text-amber-500" />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
          <h3 className="text-sm font-medium text-slate-500 mb-2">STAT Priority</h3>
          <div className="flex items-center">
            <span className="text-3xl font-bold text-red-600 mr-2">
              {labTests.filter(test => test.priority === 'stat').length}
            </span>
            <FiAlertCircle className="text-red-500" />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
          <h3 className="text-sm font-medium text-slate-500 mb-2">Completed Today</h3>
          <div className="flex items-center">
            <span className="text-3xl font-bold text-emerald-600 mr-2">
              {labTests.filter(test => test.completedDate === new Date().toISOString().split('T')[0]).length}
            </span>
            <FiDroplet className="text-emerald-500" />
          </div>
        </div>
      </div>

      {/* Test Detail Modal */}
      {showTestModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-slate-800">
                  {selectedTest ? 'Test Details' : 'New Lab Test'}
                </h2>
                <button 
                  className="text-slate-400 hover:text-slate-600"
                  onClick={() => {
                    setShowTestModal(false);
                    setSelectedTest(null);
                  }}
                >
                  &times;
                </button>
              </div>

              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Patient</label>
                    <select 
                      className="w-full border border-slate-300 rounded-md p-2 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      defaultValue={selectedTest?.patient || ''}
                    >
                      <option value="">Select Patient</option>
                      <option value="Mohamed Ali">Mohamed Ali</option>
                      <option value="Aisha Mohamed">Aisha Mohamed</option>
                      <option value="Omar Mahmoud">Omar Mahmoud</option>
                      <option value="Layla Ibrahim">Layla Ibrahim</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Ordering Doctor</label>
                    <select 
                      className="w-full border border-slate-300 rounded-md p-2 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      defaultValue={selectedTest?.doctor || ''}
                    >
                      <option value="">Select Doctor</option>
                      <option value="Dr. Sarah Johnson">Dr. Sarah Johnson</option>
                      <option value="Dr. Ahmed Hassan">Dr. Ahmed Hassan</option>
                      <option value="Dr. Fatima Khalid">Dr. Fatima Khalid</option>
                      <option value="Dr. Omar Mahmoud">Dr. Omar Mahmoud</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Test Type</label>
                    <select 
                      className="w-full border border-slate-300 rounded-md p-2 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      defaultValue={selectedTest?.testType || ''}
                    >
                      <option value="">Select Test Type</option>
                      <option value="Complete Blood Count (CBC)">Complete Blood Count (CBC)</option>
                      <option value="Lipid Panel">Lipid Panel</option>
                      <option value="Liver Function Test">Liver Function Test</option>
                      <option value="COVID-19 PCR">COVID-19 PCR</option>
                      <option value="Urinalysis">Urinalysis</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Priority</label>
                    <select 
                      className="w-full border border-slate-300 rounded-md p-2 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      defaultValue={selectedTest?.priority || 'routine'}
                    >
                      <option value="routine">Routine</option>
                      <option value="urgent">Urgent</option>
                      <option value="stat">STAT</option>
                    </select>
                  </div>
                </div>

                {selectedTest?.status === 'completed' && (
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Test Results</label>
                    <textarea 
                      className="w-full border border-slate-300 rounded-md p-3 text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      rows="4"
                      defaultValue={selectedTest?.results}
                      placeholder="Enter test results..."
                    ></textarea>
                  </div>
                )}

                <div className="flex justify-end space-x-3 pt-4 border-t border-slate-200">
                  <button 
                    type="button"
                    className="px-4 py-2 border border-slate-300 text-sm font-medium rounded-md bg-white text-slate-700 hover:bg-slate-50"
                    onClick={() => {
                      setShowTestModal(false);
                      setSelectedTest(null);
                    }}
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit"
                    className="px-4 py-2 bg-emerald-500 text-sm font-medium rounded-md text-white hover:bg-emerald-600"
                  >
                    {selectedTest ? 'Update Test' : 'Create Test'}
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

export default LabTests;