import React, { useState } from 'react';
import { 
  FiMessageSquare, FiStar, FiFilter, FiSearch, 
  FiAlertTriangle, FiCheckCircle, FiClock, FiUser 
} from 'react-icons/fi';
import { FaRegSmile, FaRegFrown, FaRegMeh } from 'react-icons/fa';

const Feedback = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFeedback, setSelectedFeedback] = useState(null);

  // Sample feedback data
  const feedbacks = [
    {
      id: 1,
      patient: 'Mohamed Ali',
      date: '2023-06-15',
      rating: 5,
      type: 'compliment',
      department: 'Cardiology',
      message: 'Excellent care from Dr. Sarah and her team. The nursing staff was very attentive to my needs throughout my recovery.',
      status: 'published'
    },
    {
      id: 2,
      patient: 'Aisha Mohamed',
      date: '2023-06-14',
      rating: 2,
      type: 'complaint',
      department: 'Emergency',
      message: 'Long waiting times in the emergency department. The staff seemed overwhelmed and communication was poor.',
      status: 'pending'
    },
    {
      id: 3,
      patient: 'Omar Mahmoud',
      date: '2023-06-13',
      rating: 4,
      type: 'suggestion',
      department: 'Pediatrics',
      message: 'The pediatric ward could use more toys and activities for children. Otherwise, great experience with Dr. Ahmed.',
      status: 'published'
    },
    {
      id: 4,
      patient: 'Layla Ibrahim',
      date: '2023-06-12',
      rating: 1,
      type: 'complaint',
      department: 'Billing',
      message: 'Incorrect charges on my bill and very difficult to get clarification from the billing department.',
      status: 'resolved'
    },
    {
      id: 5,
      patient: 'Karim Mostafa',
      date: '2023-06-10',
      rating: 5,
      type: 'compliment',
      department: 'Neurology',
      message: 'Outstanding neurological care. The team explained everything clearly and made me feel comfortable.',
      status: 'published'
    },
  ];

  const filteredFeedbacks = feedbacks.filter(feedback => {
    const matchesSearch = feedback.patient.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         feedback.department.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = activeFilter === 'all' || feedback.status === activeFilter || feedback.type === activeFilter;
    return matchesSearch && matchesFilter;
  });

  const renderRatingStars = (rating) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <FiStar 
            key={i} 
            className={`${i < rating ? 'text-amber-400 fill-amber-400' : 'text-slate-300'}`} 
          />
        ))}
      </div>
    );
  };

  const getFeedbackIcon = (type) => {
    switch(type) {
      case 'compliment':
        return <FaRegSmile className="text-emerald-500" />;
      case 'complaint':
        return <FaRegFrown className="text-red-500" />;
      case 'suggestion':
        return <FaRegMeh className="text-amber-500" />;
      default:
        return <FiMessageSquare className="text-blue-500" />;
    }
  };

  const statusBadge = (status) => {
    const statusClasses = {
      published: 'bg-blue-100 text-blue-800',
      pending: 'bg-amber-100 text-amber-800',
      resolved: 'bg-emerald-100 text-emerald-800'
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
            <FiMessageSquare className="mr-2 text-emerald-500" />
            Patient Feedback
          </h1>
          <p className="text-slate-600">Manage and respond to patient feedback and reviews</p>
        </div>
        <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-md flex items-center mt-4 md:mt-0">
          Generate Report
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
              placeholder="Search feedback..."
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
              All Feedback
            </button>
            <button
              onClick={() => setActiveFilter('compliment')}
              className={`px-4 py-2 rounded-md text-sm font-medium ${activeFilter === 'compliment' ? 'bg-emerald-500 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
            >
              Compliments
            </button>
            <button
              onClick={() => setActiveFilter('complaint')}
              className={`px-4 py-2 rounded-md text-sm font-medium ${activeFilter === 'complaint' ? 'bg-emerald-500 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
            >
              Complaints
            </button>
            <button
              onClick={() => setActiveFilter('pending')}
              className={`px-4 py-2 rounded-md text-sm font-medium ${activeFilter === 'pending' ? 'bg-emerald-500 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
            >
              Pending
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Feedback List */}
        <div className={`${selectedFeedback ? 'lg:col-span-2' : 'lg:col-span-3'}`}>
          <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-slate-200">
                <thead className="bg-slate-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                      Patient
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                      Type/Rating
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                      Department
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-slate-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-slate-200">
                  {filteredFeedbacks.length > 0 ? (
                    filteredFeedbacks.map((feedback) => (
                      <tr 
                        key={feedback.id} 
                        className={`hover:bg-slate-50 cursor-pointer ${selectedFeedback?.id === feedback.id ? 'bg-slate-100' : ''}`}
                        onClick={() => setSelectedFeedback(feedback)}
                      >
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center">
                              <FiUser className="text-slate-400" />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-slate-900">{feedback.patient}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="mr-2">
                              {getFeedbackIcon(feedback.type)}
                            </div>
                            {feedback.rating && renderRatingStars(feedback.rating)}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-slate-900">{feedback.department}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {statusBadge(feedback.status)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-slate-500">{feedback.date}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button 
                            className="text-emerald-600 hover:text-emerald-900 mr-3"
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedFeedback(feedback);
                            }}
                          >
                            View
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="6" className="px-6 py-12 text-center">
                        <div className="flex flex-col items-center justify-center text-slate-400">
                          <FiAlertCircle size={48} className="mb-4" />
                          <p className="text-lg">No feedback found</p>
                          <p className="text-sm mt-1">Try adjusting your search or filters</p>
                        </div>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Feedback Detail View */}
        {selectedFeedback && (
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 sticky top-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-lg font-bold text-slate-800">Feedback Details</h2>
                <button 
                  className="text-slate-400 hover:text-slate-600"
                  onClick={() => setSelectedFeedback(null)}
                >
                  &times;
                </button>
              </div>

              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-slate-100 flex items-center justify-center mr-4">
                    <FiUser className="text-slate-400" size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-800">{selectedFeedback.patient}</h3>
                    <p className="text-sm text-slate-500">{selectedFeedback.date}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    {getFeedbackIcon(selectedFeedback.type)}
                    <span className="ml-2 text-sm capitalize">{selectedFeedback.type}</span>
                  </div>
                  {selectedFeedback.rating && renderRatingStars(selectedFeedback.rating)}
                </div>

                <div>
                  <h4 className="text-sm font-medium text-slate-500 mb-1">Department</h4>
                  <p className="text-sm text-slate-800">{selectedFeedback.department}</p>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-slate-500 mb-1">Status</h4>
                  {statusBadge(selectedFeedback.status)}
                </div>

                <div>
                  <h4 className="text-sm font-medium text-slate-500 mb-1">Message</h4>
                  <p className="text-sm text-slate-800 bg-slate-50 p-3 rounded-md">
                    {selectedFeedback.message}
                  </p>
                </div>

                {selectedFeedback.status === 'pending' && (
                  <div className="pt-4 border-t border-slate-200">
                    <h4 className="text-sm font-medium text-slate-500 mb-2">Response</h4>
                    <textarea 
                      className="w-full border border-slate-300 rounded-md p-3 text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      rows="4"
                      placeholder="Type your response here..."
                    ></textarea>
                    <div className="flex justify-end space-x-3 mt-3">
                      <button className="px-4 py-2 border border-slate-300 text-sm font-medium rounded-md bg-white text-slate-700 hover:bg-slate-50">
                        Mark as Resolved
                      </button>
                      <button className="px-4 py-2 bg-emerald-500 text-sm font-medium rounded-md text-white hover:bg-emerald-600">
                        Submit Response
                      </button>
                    </div>
                  </div>
                )}

                {selectedFeedback.status === 'resolved' && (
                  <div className="pt-4 border-t border-slate-200">
                    <h4 className="text-sm font-medium text-slate-500 mb-2">Admin Response</h4>
                    <div className="bg-emerald-50 p-3 rounded-md">
                      <p className="text-sm text-slate-800">Thank you for your feedback. We've addressed your concerns with the billing department and issued a corrected invoice. Please contact us if you have any further questions.</p>
                      <p className="text-xs text-slate-500 mt-2">Responded on 2023-06-13 by Admin User</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Stats Section */}
      {!selectedFeedback && (
        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
            <h3 className="text-sm font-medium text-slate-500 mb-2">Total Feedback</h3>
            <p className="text-3xl font-bold text-slate-800">{feedbacks.length}</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
            <h3 className="text-sm font-medium text-slate-500 mb-2">Average Rating</h3>
            <div className="flex items-center">
              <span className="text-3xl font-bold text-amber-500 mr-2">
                {(
                  feedbacks.reduce((sum, feedback) => sum + (feedback.rating || 0), 0) / 
                  feedbacks.filter(f => f.rating).length
                ).toFixed(1)}
              </span>
              {renderRatingStars(
                Math.round(
                  feedbacks.reduce((sum, feedback) => sum + (feedback.rating || 0), 0) / 
                  feedbacks.filter(f => f.rating).length
                )
              )}
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
            <h3 className="text-sm font-medium text-slate-500 mb-2">Compliments</h3>
            <p className="text-3xl font-bold text-emerald-600">
              {feedbacks.filter(f => f.type === 'compliment').length}
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
            <h3 className="text-sm font-medium text-slate-500 mb-2">Pending Response</h3>
            <p className="text-3xl font-bold text-amber-600">
              {feedbacks.filter(f => f.status === 'pending').length}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Feedback;