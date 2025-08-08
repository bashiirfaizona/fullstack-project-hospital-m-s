import React, { useState } from 'react';
import { 
  FiPackage, FiPlus, FiSearch, FiFilter, 
  FiAlertTriangle, FiEdit2, FiTrash2, FiTrendingUp, 
  FiPrinter, FiDownload 
} from 'react-icons/fi';
import { FaPills, FaSyringe, FaBandAid } from 'react-icons/fa';

const Inventory = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddItemModal, setShowAddItemModal] = useState(false);

  // Sample inventory data
  const inventoryItems = [
    {
      id: 1,
      name: 'Paracetamol 500mg',
      category: 'Medication',
      quantity: 1250,
      threshold: 200,
      unit: 'tablets',
      lastRestocked: '2023-06-10',
      supplier: 'PharmaMed Inc.',
      icon: <FaPills className="text-blue-500" />
    },
    {
      id: 2,
      name: 'Insulin Syringes',
      category: 'Medical Supplies',
      quantity: 320,
      threshold: 100,
      unit: 'units',
      lastRestocked: '2023-06-12',
      supplier: 'SafeNeedle Corp.',
      icon: <FaSyringe className="text-emerald-500" />
    },
    {
      id: 3,
      name: 'Surgical Masks',
      category: 'PPE',
      quantity: 85,
      threshold: 50,
      unit: 'boxes',
      lastRestocked: '2023-05-28',
      supplier: 'SafeGear Ltd.',
      icon: <FaBandAid className="text-amber-500" />
    },
    {
      id: 4,
      name: 'Ibuprofen 200mg',
      category: 'Medication',
      quantity: 980,
      threshold: 150,
      unit: 'tablets',
      lastRestocked: '2023-06-05',
      supplier: 'PharmaMed Inc.',
      icon: <FaPills className="text-blue-500" />
    },
    {
      id: 5,
      name: 'Bandages (Medium)',
      category: 'Medical Supplies',
      quantity: 42,
      threshold: 30,
      unit: 'boxes',
      lastRestocked: '2023-06-15',
      supplier: 'FirstAid Solutions',
      icon: <FaBandAid className="text-red-500" />
    },
    {
      id: 6,
      name: 'COVID-19 Test Kits',
      category: 'Diagnostic',
      quantity: 150,
      threshold: 75,
      unit: 'kits',
      lastRestocked: '2023-06-08',
      supplier: 'LabTech Diagnostics',
      icon: <FaSyringe className="text-purple-500" />
    },
  ];

  const filteredItems = inventoryItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         item.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = activeFilter === 'all' || item.category === activeFilter;
    return matchesSearch && matchesFilter;
  });

  const lowStockItems = inventoryItems.filter(item => item.quantity <= item.threshold);

  const getStatusColor = (quantity, threshold) => {
    if (quantity <= threshold * 0.3) return 'bg-red-100 text-red-800';
    if (quantity <= threshold) return 'bg-amber-100 text-amber-800';
    return 'bg-emerald-100 text-emerald-800';
  };

  const getStatusText = (quantity, threshold) => {
    if (quantity <= threshold * 0.3) return 'Critical';
    if (quantity <= threshold) return 'Low';
    return 'Adequate';
  };

  return (
    <div className="p-6">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 flex items-center">
            <FiPackage className="mr-2 text-emerald-500" />
            Inventory Management
          </h1>
          <p className="text-slate-600">Track and manage hospital inventory items</p>
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
            onClick={() => setShowAddItemModal(true)}
          >
            <FiPlus className="mr-2" />
            Add Item
          </button>
        </div>
      </div>

      {/* Alerts Section */}
      {lowStockItems.length > 0 && (
        <div className="mb-6 bg-red-50 border border-red-200 rounded-xl p-4">
          <div className="flex items-start">
            <FiAlertTriangle className="text-red-500 mt-1 mr-3 flex-shrink-0" />
            <div>
              <h3 className="font-medium text-red-800">Low Stock Alert</h3>
              <p className="text-sm text-red-700 mt-1">
                {lowStockItems.length} item{lowStockItems.length !== 1 ? 's' : ''} below threshold level. 
                Please restock soon.
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
              placeholder="Search inventory..."
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
              All Items
            </button>
            <button
              onClick={() => setActiveFilter('Medication')}
              className={`px-4 py-2 rounded-md text-sm font-medium ${activeFilter === 'Medication' ? 'bg-emerald-500 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
            >
              Medication
            </button>
            <button
              onClick={() => setActiveFilter('Medical Supplies')}
              className={`px-4 py-2 rounded-md text-sm font-medium ${activeFilter === 'Medical Supplies' ? 'bg-emerald-500 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
            >
              Supplies
            </button>
            <button
              onClick={() => setActiveFilter('PPE')}
              className={`px-4 py-2 rounded-md text-sm font-medium ${activeFilter === 'PPE' ? 'bg-emerald-500 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
            >
              PPE
            </button>
          </div>
        </div>
      </div>

      {/* Inventory Table */}
      <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200">
            <thead className="bg-slate-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                  Item
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
                  Last Restocked
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                  Supplier
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-slate-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-slate-200">
              {filteredItems.length > 0 ? (
                filteredItems.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center mr-4">
                          {item.icon}
                        </div>
                        <div>
                          <div className="text-sm font-medium text-slate-900">{item.name}</div>
                          <div className="text-xs text-slate-500">{item.unit}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-slate-900">{item.category}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-slate-900">{item.quantity.toLocaleString()}</div>
                      <div className="text-xs text-slate-500">Threshold: {item.threshold}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(item.quantity, item.threshold)}`}>
                        {getStatusText(item.quantity, item.threshold)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-slate-900">{item.lastRestocked}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-slate-900 max-w-xs truncate">{item.supplier}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-slate-600 hover:text-emerald-600 mr-3">
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
                      <FiPackage size={48} className="mb-4" />
                      <p className="text-lg">No inventory items found</p>
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
          <h3 className="text-sm font-medium text-slate-500 mb-2">Total Items</h3>
          <p className="text-3xl font-bold text-slate-800">{inventoryItems.length}</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
          <h3 className="text-sm font-medium text-slate-500 mb-2">Low Stock Items</h3>
          <p className="text-3xl font-bold text-amber-600">{lowStockItems.length}</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
          <h3 className="text-sm font-medium text-slate-500 mb-2">Critical Items</h3>
          <p className="text-3xl font-bold text-red-600">
            {inventoryItems.filter(item => item.quantity <= item.threshold * 0.3).length}
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
          <h3 className="text-sm font-medium text-slate-500 mb-2">Recently Restocked</h3>
          <p className="text-3xl font-bold text-emerald-600">
            {inventoryItems.filter(item => {
              const restockDate = new Date(item.lastRestocked);
              const today = new Date();
              const diffTime = Math.abs(today - restockDate);
              const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
              return diffDays <= 7;
            }).length}
          </p>
        </div>
      </div>

      {/* Add Item Modal */}
      {showAddItemModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-slate-800">Add New Inventory Item</h2>
                <button 
                  className="text-slate-400 hover:text-slate-600"
                  onClick={() => setShowAddItemModal(false)}
                >
                  &times;
                </button>
              </div>

              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Item Name</label>
                  <input 
                    type="text" 
                    className="w-full border border-slate-300 rounded-md p-2 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="e.g., Paracetamol 500mg"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Category</label>
                  <select className="w-full border border-slate-300 rounded-md p-2 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500">
                    <option>Medication</option>
                    <option>Medical Supplies</option>
                    <option>PPE</option>
                    <option>Diagnostic</option>
                    <option>Equipment</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Quantity</label>
                    <input 
                      type="number" 
                      className="w-full border border-slate-300 rounded-md p-2 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      placeholder="0"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Unit</label>
                    <input 
                      type="text" 
                      className="w-full border border-slate-300 rounded-md p-2 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      placeholder="e.g., tablets, boxes"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Threshold</label>
                  <input 
                    type="number" 
                    className="w-full border border-slate-300 rounded-md p-2 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="Minimum quantity before alert"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Supplier</label>
                  <input 
                    type="text" 
                    className="w-full border border-slate-300 rounded-md p-2 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="Supplier name"
                  />
                </div>

                <div className="flex justify-end space-x-3 pt-4">
                  <button 
                    type="button"
                    className="px-4 py-2 border border-slate-300 text-sm font-medium rounded-md bg-white text-slate-700 hover:bg-slate-50"
                    onClick={() => setShowAddItemModal(false)}
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit"
                    className="px-4 py-2 bg-emerald-500 text-sm font-medium rounded-md text-white hover:bg-emerald-600"
                  >
                    Add Item
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

export default Inventory;