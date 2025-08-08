import React, { useState } from 'react';
import { FiDollarSign, FiSearch, FiPlus, FiDownload, FiPrinter, FiEdit2, FiEye, FiFilter } from 'react-icons/fi';
import { FaRegCreditCard, FaMoneyBillWave, FaHospital } from 'react-icons/fa';

const Billing = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Sample billing data
  const bills = [
    {
      id: 'INV-2023-001',
      patient: 'Mohamed Ali',
      date: '2023-06-15',
      dueDate: '2023-06-30',
      amount: 1250.00,
      paid: 750.00,
      status: 'partial',
      paymentMethod: 'credit',
      services: ['Consultation', 'Lab Test', 'Medication']
    },
    {
      id: 'INV-2023-002',
      patient: 'Aisha Mohamed',
      date: '2023-06-16',
      dueDate: '2023-06-30',
      amount: 850.50,
      paid: 850.50,
      status: 'paid',
      paymentMethod: 'insurance',
      services: ['X-Ray', 'Physiotherapy']
    },
    {
      id: 'INV-2023-003',
      patient: 'Omar Mahmoud',
      date: '2023-06-17',
      dueDate: '2023-06-30',
      amount: 3200.00,
      paid: 0.00,
      status: 'unpaid',
      paymentMethod: null,
      services: ['Surgery', 'Hospital Stay', 'Medication']
    },
    {
      id: 'INV-2023-004',
      patient: 'Layla Ibrahim',
      date: '2023-06-18',
      dueDate: '2023-07-05',
      amount: 450.00,
      paid: 450.00,
      status: 'paid',
      paymentMethod: 'cash',
      services: ['Consultation', 'Lab Test']
    },
  ];

  const filteredBills = bills.filter(bill => {
    const matchesSearch = bill.patient.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         bill.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = activeTab === 'all' || bill.status === activeTab;
    return matchesSearch && matchesStatus;
  });

  const statusBadge = (status) => {
    const statusClasses = {
      paid: 'bg-emerald-100 text-emerald-800',
      unpaid: 'bg-red-100 text-red-800',
      partial: 'bg-amber-100 text-amber-800',
      cancelled: 'bg-slate-100 text-slate-800'
    };
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusClasses[status]}`}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  const paymentMethodIcon = (method) => {
    switch(method) {
      case 'credit':
        return <FaRegCreditCard className="text-blue-500" />;
      case 'cash':
        return <FaMoneyBillWave className="text-green-500" />;
      case 'insurance':
        return <FaHospital className="text-purple-500" />;
      default:
        return <FiDollarSign className="text-slate-400" />;
    }
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  return (
    <div className="p-6">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 flex items-center">
            <FiDollarSign className="mr-2 text-emerald-500" />
            Billing Management
          </h1>
          <p className="text-slate-600">View and manage patient invoices and payments</p>
        </div>
        <div className="flex space-x-2 mt-4 md:mt-0">
          <button className="bg-white border border-slate-300 text-slate-700 px-3 py-2 rounded-md flex items-center hover:bg-slate-50">
            <FiDownload className="mr-2" />
            Export
          </button>
          <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-md flex items-center">
            <FiPlus className="mr-2" />
            New Invoice
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-4">
          <h3 className="text-sm font-medium text-slate-500">Total Revenue</h3>
          <p className="text-2xl font-bold text-slate-800 mt-1">
            {formatCurrency(bills.reduce((sum, bill) => sum + bill.amount, 0))}
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-4">
          <h3 className="text-sm font-medium text-slate-500">Amount Paid</h3>
          <p className="text-2xl font-bold text-emerald-600 mt-1">
            {formatCurrency(bills.reduce((sum, bill) => sum + bill.paid, 0))}
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-4">
          <h3 className="text-sm font-medium text-slate-500">Outstanding</h3>
          <p className="text-2xl font-bold text-red-600 mt-1">
            {formatCurrency(bills.reduce((sum, bill) => sum + (bill.amount - bill.paid), 0))}
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-4">
          <h3 className="text-sm font-medium text-slate-500">Total Invoices</h3>
          <p className="text-2xl font-bold text-blue-600 mt-1">{bills.length}</p>
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
              placeholder="Search invoices..."
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
              onClick={() => setActiveTab('paid')}
              className={`px-4 py-2 rounded-md text-sm font-medium ${activeTab === 'paid' ? 'bg-emerald-500 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
            >
              Paid
            </button>
            <button
              onClick={() => setActiveTab('unpaid')}
              className={`px-4 py-2 rounded-md text-sm font-medium ${activeTab === 'unpaid' ? 'bg-emerald-500 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
            >
              Unpaid
            </button>
            <button
              onClick={() => setActiveTab('partial')}
              className={`px-4 py-2 rounded-md text-sm font-medium ${activeTab === 'partial' ? 'bg-emerald-500 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
            >
              Partial
            </button>
          </div>
        </div>
      </div>

      {/* Billing Table */}
      <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200">
            <thead className="bg-slate-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                  Invoice
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                  Patient
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                  Date/Due Date
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                  Services
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                  Amount
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
              {filteredBills.length > 0 ? (
                filteredBills.map((bill) => (
                  <tr key={bill.id} className="hover:bg-slate-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-blue-600">{bill.id}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-slate-900">{bill.patient}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-slate-900">{bill.date}</div>
                      <div className={`text-xs ${new Date(bill.dueDate) < new Date() && bill.status !== 'paid' ? 'text-red-500' : 'text-slate-500'}`}>
                        Due: {bill.dueDate}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-slate-900 max-w-xs truncate">
                        {bill.services.join(', ')}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-slate-900">{formatCurrency(bill.amount)}</div>
                      {bill.status === 'partial' && (
                        <div className="text-xs text-slate-500">Paid: {formatCurrency(bill.paid)}</div>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        {statusBadge(bill.status)}
                        {bill.paymentMethod && (
                          <span className="ml-2">{paymentMethodIcon(bill.paymentMethod)}</span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-slate-600 hover:text-emerald-600 mr-3">
                        <FiEye />
                      </button>
                      <button className="text-slate-600 hover:text-blue-600 mr-3">
                        <FiPrinter />
                      </button>
                      <button className="text-slate-600 hover:text-slate-900">
                        <FiEdit2 />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="px-6 py-12 text-center">
                    <div className="flex flex-col items-center justify-center text-slate-400">
                      <FiAlertCircle size={48} className="mb-4" />
                      <p className="text-lg">No invoices found</p>
                      <p className="text-sm mt-1">Try adjusting your search or filters</p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Payment Summary and Actions */}
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border border-slate-200 p-4">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Payment Summary</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-sm font-medium text-slate-500 mb-2">Payment Methods</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <FaRegCreditCard className="text-blue-500 mr-2" />
                    <span className="text-sm">Credit Card</span>
                  </div>
                  <span className="text-sm font-medium">$1,250.00</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <FaMoneyBillWave className="text-green-500 mr-2" />
                    <span className="text-sm">Cash</span>
                  </div>
                  <span className="text-sm font-medium">$450.00</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <FaHospital className="text-purple-500 mr-2" />
                    <span className="text-sm">Insurance</span>
                  </div>
                  <span className="text-sm font-medium">$850.50</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-medium text-slate-500 mb-2">Quick Actions</h4>
              <div className="space-y-2">
                <button className="w-full bg-blue-50 hover:bg-blue-100 text-blue-700 px-4 py-2 rounded-md text-sm font-medium flex items-center justify-center">
                  <FiDownload className="mr-2" /> Export Financial Report
                </button>
                <button className="w-full bg-emerald-50 hover:bg-emerald-100 text-emerald-700 px-4 py-2 rounded-md text-sm font-medium flex items-center justify-center">
                  <FiPlus className="mr-2" /> Record Payment
                </button>
                <button className="w-full bg-slate-50 hover:bg-slate-100 text-slate-700 px-4 py-2 rounded-md text-sm font-medium flex items-center justify-center">
                  <FiFilter className="mr-2" /> View Outstanding
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-4">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Recent Payments</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium">INV-2023-002</p>
                <p className="text-xs text-slate-500">Aisha Mohamed</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-emerald-600">$850.50</p>
                <p className="text-xs text-slate-500">Jun 16, 2023</p>
              </div>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium">INV-2023-004</p>
                <p className="text-xs text-slate-500">Layla Ibrahim</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-emerald-600">$450.00</p>
                <p className="text-xs text-slate-500">Jun 18, 2023</p>
              </div>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium">INV-2023-001</p>
                <p className="text-xs text-slate-500">Mohamed Ali</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-emerald-600">$750.00</p>
                <p className="text-xs text-slate-500">Jun 15, 2023</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billing;