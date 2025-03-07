import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer.jsx';

const MissingPersonReportPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    location: '',
    missingPersonName: '',
    missingPersonAge: '',
    missingPersonGender: '',
    lastSeen: '',
    physicalDescription: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would send the data to your backend
    alert('Missing person report submitted successfully. Authorities have been notified.');
    // Reset form
    setFormData({
      name: '',
      contact: '',
      location: '',
      missingPersonName: '',
      missingPersonAge: '',
      missingPersonGender: '',
      lastSeen: '',
      physicalDescription: '',
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-12 px-4 md:px-0">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-6">
            <Link to="/" className="text-white hover:text-blue-200 transition duration-300">
              <i className="fas fa-arrow-left mr-2"></i> Back to main page
            </Link>
          </div>
          <h1 className="text-3xl font-bold mb-4">Report a Missing Person</h1>
          <p className="text-xl max-w-3xl">
            Please provide as much detail as possible to help authorities locate the missing person quickly.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto py-10 px-4 md:px-0">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800 flex items-center">
              <i className="fas fa-user-slash text-blue-500 mr-3"></i> Missing Person Report
            </h2>
            <p className="text-gray-600 mt-1">
              This information will be shared with local authorities and emergency responders.
            </p>
          </div>
          
          {/* Report Form */}
          <form onSubmit={handleSubmit} className="p-6">
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">Your Information</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Your Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Contact Information</label>
                  <input 
                    type="text" 
                    name="contact" 
                    value={formData.contact}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Phone number or email"
                    required
                  />
                </div>
              </div>
            </div>
            
            {/* Missing Person Details */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">Missing Person Details</h3>
              
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">Missing Person's Name</label>
                <input 
                  type="text" 
                  name="missingPersonName" 
                  value={formData.missingPersonName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter full name"
                  required
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Age</label>
                  <input 
                    type="number" 
                    name="missingPersonAge" 
                    value={formData.missingPersonAge}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Age"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Gender</label>
                  <select 
                    name="missingPersonGender" 
                    value={formData.missingPersonGender}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
                
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">Location Last Seen</label>
                <input 
                  type="text" 
                  name="location" 
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Address or area description"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">Last Seen Date/Time</label>
                <input 
                  type="datetime-local" 
                  name="lastSeen" 
                  value={formData.lastSeen}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">Physical Description</label>
                <textarea 
                  name="physicalDescription" 
                  value={formData.physicalDescription}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  rows="4"
                  placeholder="Height, weight, clothing, distinctive features, etc."
                ></textarea>
              </div>
            </div>
            
            {/* Photo Upload - Note: In a real app you'd need to handle file uploads */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">Photo Upload</h3>
              
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <i className="fas fa-cloud-upload-alt text-gray-400 text-4xl mb-3"></i>
                <p className="text-gray-500">Upload a recent photo of the missing person</p>
                <p className="text-sm text-gray-400 mt-1 mb-4">Accepted formats: JPG, PNG - Max size: 5MB</p>
                <input type="file" className="hidden" />
                <button type="button" className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  Choose File
                </button>
              </div>
            </div>
            
            {/* Additional Information */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">Additional Information</h3>
              
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">Medical Conditions (if any)</label>
                <textarea 
                  name="medicalConditions" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  rows="2"
                  placeholder="Any medical conditions, medications, or special needs"
                ></textarea>
              </div>
              
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">Possible Locations</label>
                <textarea 
                  name="possibleLocations" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  rows="2"
                  placeholder="Any places the person might go to"
                ></textarea>
              </div>
              
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">Police Report Filed?</label>
                <div className="flex gap-4">
                  <label className="flex items-center">
                    <input 
                      type="radio" 
                      name="policeReport" 
                      value="yes"
                      className="mr-2"
                    />
                    <span>Yes</span>
                  </label>
                  <label className="flex items-center">
                    <input 
                      type="radio" 
                      name="policeReport" 
                      value="no"
                      className="mr-2"
                    />
                    <span>No</span>
                  </label>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-center md:justify-between border-t border-gray-200 pt-6">
              <div className="mb-4 md:mb-0">
                <p className="text-sm text-gray-500">
                  By submitting this form, you confirm that all provided information is accurate to the best of your knowledge.
                </p>
              </div>
              <div className="flex gap-3">
                <Link to="/" className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-offset-2 transition duration-300">
                  Cancel
                </Link>
                <button 
                  type="submit" 
                  className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300"
                >
                  Submit 
                </button>
              </div>
            </div>
          </form>
        </div>
        
        {/* Important Information Box */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6">
          <h3 className="text-lg font-bold text-blue-800 mb-3 flex items-center">
            <i className="fas fa-info-circle mr-2"></i>
            Important Information
          </h3>
          <p className="text-blue-800 mb-3">
            When someone is missing during a disaster:
          </p>
          <ul className="text-blue-800 space-y-2">
            <li className="flex items-start">
              <i className="fas fa-check-circle mt-1 mr-2 text-blue-600"></i>
              <span>Your report will be instantly shared with emergency responders and local authorities</span>
            </li>
            <li className="flex items-start">
              <i className="fas fa-check-circle mt-1 mr-2 text-blue-600"></i>
              <span>Also file an official missing person report with local police</span>
            </li>
            <li className="flex items-start">
              <i className="fas fa-check-circle mt-1 mr-2 text-blue-600"></i>
              <span>Call the disaster hotline at 1-800-555-0123 for status updates</span>
            </li>
            <li className="flex items-start">
              <i className="fas fa-check-circle mt-1 mr-2 text-blue-600"></i>
              <span>Check evacuation centers and hospitals in person if possible</span>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MissingPersonReportPage;