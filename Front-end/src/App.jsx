import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* ---------------- Public Components ---------------- */
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Doctors from "./components/Doctors";
import Blogs from "./components/Blogs";
import Facilities from "./components/Facilities";
import Footer from "./components/Footer";
import SignUp from "./components/SignUp";
import Login from "./components/Login";

/* ---------------- Admin Layout & Pages ---------------- */
import Layout from "./Admin/layout";
import Dashboard from "./Admin/pages/Dashboard";
import ManageUsers from "./Admin/pages/ManageUsers";
import Appointments from "./Admin/pages/Appointments";
import Billing from "./Admin/pages/Billing";
import Inventory from "./Admin/pages/Inventory";
import Reports from "./Admin/pages/Reports";
import Departments from "./Admin/pages/Departments";
import BedsAndRooms from "./Admin/pages/BedsRooms";
import StaffScheduling from "./Admin/pages/StaffScheduling";
import MedicalRecords from "./Admin/pages/MedicalRecords";
import LabTests from "./Admin/pages/LabTests";
import Pharmacy from "./Admin/pages/Pharmacy";
import Feedback from "./Admin/pages/Feedback";

/* ---------------- User Layout & Pages ---------------- */
import UserLayout from "./Users/layout/UserLayout";
import DashboardHome from "./Users/pages/DashboardHome";
import MyProfile from "./Users/pages/MyProfile";
import MyAppointments from "./Users/pages/MyAppointments";
import MyMedicalRecords from "./Users/pages/MyMedicalRecords";
import MyLabResults from "./Users/pages/MyLabResults";
import MyBilling from "./Users/pages/MyBilling";
import Messages from "./Users/pages/Messages";
import Settings from "./Users/pages/Settings";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* ---------------- Public Routes ---------------- */}
        <Route
          path="/*"
          element={
            <>
              <Navbar />
              <Routes>
                <Route
                  path="/"
                  element={
                    <main>
                      <div id="home">
                        <Home />
                      </div>
                      <div id="about">
                        <About />
                      </div>
                      <div id="services">
                        <Services />
                      </div>
                      <div id="doctors">
                        <Doctors />
                      </div>
                      <div id="facilities">
                        <Facilities />
                      </div>
                      <div id="blog">
                        <Blogs />
                      </div>
                    </main>
                  }
                />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<Login />} />
              </Routes>
              <Footer />
            </>
          }
        />

        {/* ---------------- Admin Dashboard ---------------- */}
        <Route path="/admin/*" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="manage-users" element={<ManageUsers />} />
          <Route path="appointments" element={<Appointments />} />
          <Route path="billing" element={<Billing />} />
          <Route path="inventory" element={<Inventory />} />
          <Route path="reports" element={<Reports />} />
          <Route path="departments" element={<Departments />} />
          <Route path="beds-rooms" element={<BedsAndRooms />} />
          <Route path="staff-scheduling" element={<StaffScheduling />} />
          <Route path="medical-records" element={<MedicalRecords />} />
          <Route path="lab-tests" element={<LabTests />} />
          <Route path="pharmacy" element={<Pharmacy />} />
          <Route path="feedback" element={<Feedback />} />
        </Route>

        {/* ---------------- User Dashboard ---------------- */}
        <Route path="/user/*" element={<UserLayout />}>
          <Route path="dashboard" element={<DashboardHome />} />
          <Route path="profile" element={<MyProfile />} />
          <Route path="appointments" element={<MyAppointments />} />
          <Route path="medical-records" element={<MyMedicalRecords />} />
          <Route path="lab-results" element={<MyLabResults />} />
          <Route path="billing" element={<MyBilling />} />
          <Route path="messages" element={<Messages />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        {/* ---------------- 404 Page ---------------- */}
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </Router>
  );
};

export default App;
