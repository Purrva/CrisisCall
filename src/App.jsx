import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import React, { useState } from 'react';
import LandingPage from './components/Landing.jsx';
import DisasterReportingPage from './components/Reporting.jsx';
import DisasterReliefNewsPage from './components/News.jsx';
import MissingPersonReportPage from './components/Reporting/MissingPersonReporting.jsx';
import DamageReportPage from './components/Reporting/DamageReporting.jsx';
import UrgentNeedsForm from './components/Reporting/UrgentReport.jsx';
import DisasterManagementDashboard from './components/Admin/AdminMain.jsx';
import VolunteerRegistrationPage from './components/Volunteering/Volunteering.jsx';
import VolunteerDashboard from './components/Volunteering/VDashboard.jsx';
import Dashboard from './components/Admin/Dashboard.jsx';
import Reports from './components/Admin/Reports.jsx';
import DisasterDashboard from './components/Admin/DisasterMain.jsx';
import DonationPage from './components/Donation/Donation.jsx';
function App() {

  const[user,setUser]=useState("user");
  return (
    <Router>
      
      <Routes>
  {user === "user" && (
    <>
      <Route path="/" element={<Navbar />}>
        <Route index element={<LandingPage />} />
        <Route path="/report-disaster" element={<DisasterReportingPage />} />
        <Route path="/news" element={<DisasterReliefNewsPage />} />
        <Route path="/report-disaster/missing-person" element={<MissingPersonReportPage />} />
        <Route path="/report-disaster/damage-report" element={<DamageReportPage />} />
        <Route path="/report-disaster/urgent-report" element={<UrgentNeedsForm />} />
        <Route path="/volunteering" element={<VolunteerRegistrationPage/>} />
        <Route path="/volunteering/dashboard" element={<VolunteerDashboard/>} />
        <Route path="/donation" element={<DonationPage/>} />

      </Route>
    </>
  )}

  {user === "admin" && (
    <>
      {/* <Route path="/" element={<DisasterManagementDashboard />} /> */}
      <Route path="/" element={<DisasterDashboard />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/reports" element={<Reports />} />
    </>
  )}
</Routes>


      
    </Router>
  );
}

export default App;
