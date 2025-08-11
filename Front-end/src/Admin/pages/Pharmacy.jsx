import React, { useState } from 'react';
import { 
  FiPackage, FiPlus, FiSearch, FiFilter, 
  FiAlertTriangle, FiEdit2, FiTrash2, FiTrendingUp, 
  FiPrinter, FiDownload, FiShoppingCart, FiClock
} from 'react-icons/fi';
import { FaPills, FaSyringe, FaBandAid, FaPrescriptionBottleAlt } from 'react-icons/fa';

const Pharmacy = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddMedModal, setShowAddMedModal] = useState(false);
  const [showPrescriptionModal, setShowPrescriptionModal] = useState(false);

  // Sample pharmacy data
  const medicines = [
    {
      id: 1,
      name: 'Paracetamol 500mg',
      category: 'Analgesic',
      quantity: 1250,
      threshold: 200,
      unit: 'tablets',
      price: 0.25,
      supplier: 'PharmaMed Inc.',
      lastRestocked: '2023-06-10',
      status: 'in-stock'
    },
    {
      id: 2,
      name: 'Amoxicillin 250mg',
      category: 'Antibiotic',
      quantity: 320,
      threshold: 100,
      unit: 'capsules',
      price: 1.20,
      supplier: 'SafeNeedle Corp.',
      lastRestocked: '2023-06-12',
      status: 'in-stock'
    },
    {
      id: 3,
      name: 'Ibuprofen 200mg',
      category: 'NSAID',
      quantity: 85,
      threshold: 50,
      unit: 'tablets',
      price: 0.35,
      supplier: 'MediCare Ltd.',
      lastRestocked: '2023-05-28',
      status: 'low-stock'
    },
    {
      id: 4,
      name: 'Insulin Syringes',
      category: 'Medical Supplies',
      quantity: 42,
      threshold: 30,
      unit: 'units',
      price: 0.75,
      supplier: 'FirstAid Solutions',
      lastRestocked: '2023-06-15',
      status: 'in-stock'
    },
    {
      id: 5,
      name: 'Lisinopril 10mg',
      category: 'Antihypertensive',
      quantity: 150,
      threshold: 75,
      unit: 'tablets',
      price: 0.80,
      supplier: 'CardioPharm',
      lastRestocked: '2023-06-08',
      status: 'in-stock'
    },
    {
      id: 6,
      name: 'Atorvastatin 20mg',
      category: 'Antilipidemic',
      quantity: 12,
      threshold: 25,
      unit: 'tablets',
      price: 1.50,
      supplier: 'PharmaMed Inc.',
      lastRestocked: '2023-05-15',
      status: 'out-of-stock'
    },
  ];

  const prescriptions = [
    {
      id: 101,
      patient: 'John Smith',
      doctor: 'Dr. Sarah Johnson',
      date: '2023-06-15',
      status: 'pending',
      items: [
        { medicine: 'Paracetamol 500mg', quantity: 30, dosage: '1 tablet every 6 hours' },
        { medicine: 'Amoxicillin 250mg', quantity: 20, dosage: '1 capsule twice daily' }
      ]
    },
    {
      id: 102,
      patient: 'Maria Garcia',
      doctor: 'Dr. Michael Chen',
      date: '2023-06-16',
      status: 'filled',
      items: [
        { medicine: 'Ibuprofen 200mg', quantity: 20, dosage: '1 tablet every 8 hours' }
      ]
    }
  ];

  const filteredMedicines = medicines.filter(medicine => {
    const matchesSearch = medicine.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         medicine.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = activeFilter === 'all' || medicine.status === activeFilter || medicine.category === activeFilter;
    return matchesSearch && matchesFilter;
  });

  const lowStockItems = medicines.filter(medicine => medicine.status === 'low-stock');
  const outOfStockItems = medicines.filter(medicine => medicine.status === 'out-of-stock');

  const getStatusColor = (status) => {
    switch(status) {
      case 'in-stock': return 'bg-emerald-100 text-emerald-800';
      case 'low-stock': return 'bg-amber-100 text-amber-800';
      case 'out-of-stock': return 'bg-red-100 text-red-800';
      default: return 'bg-slate-100 text-slate-800';
    }
  };

  const getStatusText = (status) => {
    switch(status) {
      case 'in-stock': return 'In Stock';
      case 'low-stock': return 'Low Stock';
      case 'out-of-stock': return 'Out of Stock';
      default: return status;
    }
  };

  const getCategoryIcon = (category) => {
    if (category === 'Analgesic' || category === 'NSAID') return <FaPills className="text-blue-500" />;
    if (category === 'Antibiotic') return <FaPrescriptionBottleAlt className="text-purple-500" />;
    if (category === 'Medical Supplies') return <FaSyringe className="text-amber-500" />;
    return <FaBandAid className="text-emerald-500" />;
  };

  return (
    <div className="p-6">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 flex items-center">
            <FaPrescriptionBottleAlt className="mr-2 text-blue-500" />
            Pharmacy Management
          </h1>
          <p className="text-slate-600">Manage medications, inventory, and prescriptions</p>
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
            onClick={() => setShowAddMedModal(true)}
          >
            <FiPlus className="mr-2" />
            Add Medication
          </button>
          <button 
            className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-md flex items-center"
            onClick={() => setShowPrescriptionModal(true)}
          >
            <FaPrescriptionBottleAlt className="mr-2" />
            New Prescription
          </button>
        </div>
      </div>

      {/* Alerts Section */}
      {(lowStockItems.length > 0 || outOfStockItems.length > 0) && (
        <div className="mb-6">
          {outOfStockItems.length > 0 && (
            <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-3">
              <div className="flex items-start">
                <FiAlertTriangle className="text-red-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-red-800">Out of Stock Alert</h3>
                  <p className="text-sm text-red-700 mt-1">
                    {outOfStockItems.length} medication{outOfStockItems.length !== 1 ? 's' : ''} out of stock. Please restock immediately.
                  </p>
                </div>
              </div>
            </div>
          )}
          {lowStockItems.length > 0 && (
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
              <div className="flex items-start">
                <FiAlertTriangle className="text-amber-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-amber-800">Low Stock Alert</h3>
                  <p className="text-sm text-amber-700 mt-1">
                    {lowStockItems.length} medication{lowStockItems.length !== 1 ? 's' : ''} below threshold level. Consider restocking.
                  </p>
                </div>
              </div>
            </div>
          )}
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
              placeholder="Search medications..."
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
              All Items
            </button>
            <button
              onClick={() => setActiveFilter('in-stock')}
              className={`px-4 py-2 rounded-md text-sm font-medium ${activeFilter === 'in-stock' ? 'bg-blue-500 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
            >
              In Stock
            </button>
            <button
              onClick={() => setActiveFilter('low-stock')}
              className={`px-4 py-2 rounded-md text-sm font-medium ${activeFilter === 'low-stock' ? 'bg-blue-500 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
            >
              Low Stock
            </button>
            <button
              onClick={() => setActiveFilter('out-of-stock')}
              className={`px-4 py-2 rounded-md text-sm font-medium ${activeFilter === 'out-of-stock' ? 'bg-blue-500 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
            >
              Out of Stock
            </button>
          </div>
        </div>
      </div>

      {/* Pharmacy Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Medicines Table */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                    Medication
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                    Quantity
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-slate-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-slate-200">
                {filteredMedicines.length > 0 ? (
                  filteredMedicines.map((medicine) => (
                    <tr key={medicine.id} className="hover:bg-slate-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center mr-4">
                            {getCategoryIcon(medicine.category)}
                          </div>
                          <div>
                            <div className="text-sm font-medium text-slate-900">{medicine.name}</div>
                            <div className="text-xs text-slate-500">{medicine.supplier}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-slate-900">{medicine.category}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-slate-900">{medicine.quantity.toLocaleString()}</div>
                        <div className="text-xs text-slate-500">{medicine.unit}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(medicine.status)}`}>
                          {getStatusText(medicine.status)}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-slate-900">${medicine.price.toFixed(2)}</div>
                        <div className="text-xs text-slate-500">per {medicine.unit.slice(0, -1)}</div>
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
                    <td colSpan="6" className="px-6 py-12 text-center">
                      <div className="flex flex-col items-center justify-center text-slate-400">
                        <FiPackage size={48} className="mb-4" />
                        <p className="text-lg">No medications found</p>
                        <p className="text-sm mt-1">Try adjusting your search or filters</p>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Prescriptions Panel */}
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-4 border-b border-slate-200 flex justify-between items-center">
            <h3 className="font-medium text-slate-800">Recent Prescriptions</h3>
            <button 
              className="text-blue-500 text-sm font-medium"
              onClick={() => setShowPrescriptionModal(true)}
            >
              View All
            </button>
          </div>
          <div className="divide-y divide-slate-200">
            {prescriptions.map((prescription) => (
              <div key={prescription.id} className="p-4 hover:bg-slate-50">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium text-slate-900">{prescription.patient}</p>
                    <p className="text-xs text-slate-500">Prescribed by {prescription.doctor}</p>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    prescription.status === 'filled' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                  }`}>
                    {prescription.status.charAt(0).toUpperCase() + prescription.status.slice(1)}
                  </span>
                </div>
                <div className="mt-2">
                  <p className="text-xs text-slate-500 mb-1">Medications:</p>
                  <ul className="text-xs text-slate-700 space-y-1">
                    {prescription.items.map((item, index) => (
                      <li key={index} className="flex justify-between">
                        <span>{item.medicine} ({item.quantity})</span>
                        <button className="text-blue-500 hover:text-blue-700">
                          Dispense
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-2 flex justify-between items-center">
                  <p className="text-xs text-slate-500">{prescription.date}</p>
                  <button className="text-xs text-blue-500 hover:text-blue-700">
                    View Details
                  </button>
                </div>
              </div>
            ))}
            {prescriptions.length === 0 && (
              <div className="p-8 text-center text-slate-400">
                <FaPrescriptionBottleAlt size={32} className="mx-auto mb-3" />
                <p>No recent prescriptions</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
          <h3 className="text-sm font-medium text-slate-500 mb-2">Total Medications</h3>
          <p className="text-3xl font-bold text-slate-800">{medicines.length}</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
          <h3 className="text-sm font-medium text-slate-500 mb-2">Low Stock Items</h3>
          <p className="text-3xl font-bold text-amber-600">{lowStockItems.length}</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
          <h3 className="text-sm font-medium text-slate-500 mb-2">Out of Stock</h3>
          <p className="text-3xl font-bold text-red-600">{outOfStockItems.length}</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
          <h3 className="text-sm font-medium text-slate-500 mb-2">Pending Prescriptions</h3>
          <p className="text-3xl font-bold text-blue-600">
            {prescriptions.filter(p => p.status === 'pending').length}
          </p>
        </div>
      </div>

      {/* Add Medication Modal */}
      {showAddMedModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-slate-800">Add New Medication</h2>
                <button 
                  className="text-slate-400 hover:text-slate-600"
                  onClick={() => setShowAddMedModal(false)}
                >
                  &times;
                </button>
              </div>

              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Medication Name</label>
                  <input 
                    type="text" 
                    className="w-full border border-slate-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="e.g., Paracetamol 500mg"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Category</label>
                    <select className="w-full border border-slate-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                      <option>Analgesic</option>
                      <option>Antibiotic</option>
                      <option>Antihypertensive</option>
                      <option>Antilipidemic</option>
                      <option>Medical Supplies</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Unit</label>
                    <select className="w-full border border-slate-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                      <option>tablets</option>
                      <option>capsules</option>
                      <option>units</option>
                      <option>vials</option>
                      <option>boxes</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Quantity</label>
                    <input 
                      type="number" 
                      className="w-full border border-slate-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="0"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Threshold</label>
                    <input 
                      type="number" 
                      className="w-full border border-slate-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Minimum quantity before alert"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Price</label>
                    <input 
                      type="number" 
                      step="0.01"
                      className="w-full border border-slate-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="0.00"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Supplier</label>
                    <input 
                      type="text" 
                      className="w-full border border-slate-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Supplier name"
                    />
                  </div>
                </div>

                <div className="flex justify-end space-x-3 pt-4">
                  <button 
                    type="button"
                    className="px-4 py-2 border border-slate-300 text-sm font-medium rounded-md bg-white text-slate-700 hover:bg-slate-50"
                    onClick={() => setShowAddMedModal(false)}
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-sm font-medium rounded-md text-white hover:bg-blue-600"
                  >
                    Add Medication
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Prescription Modal */}
      {showPrescriptionModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-slate-800">New Prescription</h2>
                <button 
                  className="text-slate-400 hover:text-slate-600"
                  onClick={() => setShowPrescriptionModal(false)}
                >
                  &times;
                </button>
              </div>

              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Patient</label>
                    <select className="w-full border border-slate-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                      <option>Select patient...</option>
                      <option>John Smith</option>
                      <option>Maria Garcia</option>
                      <option>David Kim</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Prescribing Doctor</label>
                    <input 
                      type="text" 
                      className="w-full border border-slate-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      value="Dr. Sarah Johnson"
                      readOnly
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Medications</label>
                  <div className="space-y-3">
                    <div className="grid grid-cols-12 gap-2 items-end">
                      <div className="col-span-5">
                        <select className="w-full border border-slate-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                          <option>Select medication...</option>
                          {medicines.map(med => (
                            <option key={med.id}>{med.name}</option>
                          ))}
                        </select>
                      </div>
                      <div className="col-span-2">
                        <input 
                          type="number" 
                          className="w-full border border-slate-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Qty"
                        />
                      </div>
                      <div className="col-span-4">
                        <input 
                          type="text" 
                          className="w-full border border-slate-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Dosage instructions"
                        />
                      </div>
                      <div className="col-span-1">
                        <button className="w-full p-2 bg-red-100 text-red-600 rounded-md hover:bg-red-200">
                          &times;
                        </button>
                      </div>
                    </div>
                    <button 
                      type="button"
                      className="text-blue-500 text-sm font-medium flex items-center"
                    >
                      <FiPlus className="mr-1" /> Add another medication
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Notes</label>
                  <textarea 
                    className="w-full border border-slate-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 min-h-[80px]"
                    placeholder="Additional instructions..."
                  />
                </div>

                <div className="flex justify-end space-x-3 pt-4 border-t border-slate-200">
                  <button 
                    type="button"
                    className="px-4 py-2 border border-slate-300 text-sm font-medium rounded-md bg-white text-slate-700 hover:bg-slate-50"
                    onClick={() => setShowPrescriptionModal(false)}
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-sm font-medium rounded-md text-white hover:bg-blue-600"
                  >
                    Save Prescription
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

export default Pharmacy;