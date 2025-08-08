import React from 'react';
import { 
  FiUsers, FiCalendar, FiDollarSign, FiActivity, 
  FiClock, FiAlertTriangle, FiTrendingUp, FiPieChart 
} from 'react-icons/fi';
import { FaBed, FaProcedures, FaUserNurse } from 'react-icons/fa';

const Dashboard = () => {
  // Sample data
  const stats = [
    { title: "Total Patients", value: "1,248", icon: <FiUsers className="text-blue-500" />, change: "+12%", trend: "up" },
    { title: "Today's Appointments", value: "42", icon: <FiCalendar className="text-emerald-500" />, change: "+3%", trend: "up" },
    { title: "Available Beds", value: "28", icon: <FaBed className="text-amber-500" />, change: "5%", trend: "down" },
    { title: "Monthly Revenue", value: "$86,450", icon: <FiDollarSign className="text-purple-500" />, change: "+18%", trend: "up" }
  ];

  const activities = [
    { time: "10:30 AM", patient: "Mohamed Ali", action: "Checked in", department: "Cardiology" },
    { time: "09:15 AM", patient: "Aisha Mohamed", action: "Lab Test Completed", department: "Pathology" },
    { time: "08:45 AM", patient: "Omar Mahmoud", action: "Discharged", department: "Orthopedics" },
    { time: "Yesterday", patient: "Layla Ibrahim", action: "Scheduled Surgery", department: "Neurology" }
  ];

  const doctors = [
    { name: "Dr. Sarah Johnson", specialty: "Cardiology", availability: "Available", appointments: 8 },
    { name: "Dr. Ahmed Hassan", specialty: "Pediatrics", availability: "In Surgery", appointments: 3 },
    { name: "Dr. Fatima Khalid", specialty: "Orthopedics", availability: "Available", appointments: 5 }
  ];

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-800">Hospital Dashboard</h1>
        <p className="text-slate-600">Welcome back! Here's what's happening today.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="flex justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">{stat.title}</p>
                <p className="text-2xl font-bold text-slate-800 mt-1">{stat.value}</p>
              </div>
              <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center">
                {stat.icon}
              </div>
            </div>
            <div className={`mt-3 text-sm flex items-center ${stat.trend === 'up' ? 'text-emerald-600' : 'text-red-600'}`}>
              {stat.trend === 'up' ? <FiTrendingUp className="mr-1" /> : <FiActivity className="mr-1" />}
              {stat.change} from yesterday
            </div>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activities */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-6 border-b border-slate-200">
            <h2 className="text-lg font-semibold text-slate-800 flex items-center">
              <FiActivity className="mr-2 text-emerald-500" />
              Recent Activities
            </h2>
          </div>
          <div className="divide-y divide-slate-200">
            {activities.map((activity, index) => (
              <div key={index} className="p-4 hover:bg-slate-50 transition-colors">
                <div className="flex items-start">
                  <div className="bg-emerald-100 p-2 rounded-lg mr-4">
                    <FiClock className="text-emerald-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <p className="font-medium text-slate-800">{activity.patient}</p>
                      <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">
                        {activity.department}
                      </span>
                    </div>
                    <p className="text-sm text-slate-600 mt-1">{activity.action}</p>
                  </div>
                  <span className="text-xs text-slate-500">{activity.time}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 border-t border-slate-200 text-center">
            <button className="text-emerald-600 hover:text-emerald-800 text-sm font-medium">
              View All Activities
            </button>
          </div>
        </div>

        {/* Doctor Availability */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-6 border-b border-slate-200">
            <h2 className="text-lg font-semibold text-slate-800 flex items-center">
              <FaUserNurse className="mr-2 text-blue-500" />
              Doctor Availability
            </h2>
          </div>
          <div className="divide-y divide-slate-200">
            {doctors.map((doctor, index) => (
              <div key={index} className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium text-slate-800">{doctor.name}</p>
                    <p className="text-sm text-slate-600">{doctor.specialty}</p>
                  </div>
                  <div className="text-right">
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      doctor.availability === 'Available' 
                        ? 'bg-emerald-100 text-emerald-800' 
                        : 'bg-amber-100 text-amber-800'
                    }`}>
                      {doctor.availability}
                    </span>
                    <p className="text-xs text-slate-500 mt-1">{doctor.appointments} appointments</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 border-t border-slate-200 text-center">
            <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
              View All Doctors
            </button>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        {/* Department Distribution */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-slate-800 flex items-center">
              <FiPieChart className="mr-2 text-purple-500" />
              Department Distribution
            </h2>
            <select className="text-sm border border-slate-300 rounded-md px-3 py-1 bg-slate-50">
              <option>This Month</option>
              <option>Last Month</option>
              <option>This Year</option>
            </select>
          </div>
          <div className="h-64 flex items-center justify-center bg-slate-50 rounded-lg">
            <p className="text-slate-400">Pie Chart Visualization</p>
          </div>
        </div>

        {/* Patient Admissions Trend */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-slate-800 flex items-center">
              <FiTrendingUp className="mr-2 text-emerald-500" />
              Patient Admissions Trend
            </h2>
            <select className="text-sm border border-slate-300 rounded-md px-3 py-1 bg-slate-50">
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
              <option>Last 12 Months</option>
            </select>
          </div>
          <div className="h-64 flex items-center justify-center bg-slate-50 rounded-lg">
            <p className="text-slate-400">Line Chart Visualization</p>
          </div>
        </div>
      </div>

      {/* Alerts */}
      <div className="mt-6 bg-amber-50 border border-amber-200 rounded-xl p-4">
        <div className="flex items-start">
          <FiAlertTriangle className="text-amber-500 mt-1 mr-3 flex-shrink-0" />
          <div>
            <h3 className="font-medium text-amber-800">System Maintenance</h3>
            <p className="text-sm text-amber-700 mt-1">
              Planned maintenance scheduled for tomorrow from 2:00 AM to 4:00 AM. 
              The system will be unavailable during this period.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;