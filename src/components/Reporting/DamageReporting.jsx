import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer.jsx';

const DamageReportPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    location: '',
    damageType: '',
    severity: 'medium',
    description: '',
    peopleTrapped: 'unknown',
    structuralAssessment: '',
    safetyHazards: '',
    utilities: []
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    const { name, value, checked } = e.target;
    if (checked) {
      setFormData(prev => ({ ...prev, [name]: [...prev[name], value] }));
    } else {
      setFormData(prev => ({ ...prev, [name]: prev[name].filter(item => item !== value) }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would send the data to your backend
    alert('Damage report submitted successfully. Authorities have been notified.');
    // Reset form
    setFormData({
      name: '',
      contact: '',
      location: '',
      damageType: '',
      severity: 'medium',
      description: '',
      peopleTrapped: 'unknown',
      structuralAssessment: '',
      safetyHazards: '',
      utilities: []
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
          <h1 className="text-3xl font-bold mb-4">Report Structural Damage</h1>
          <p className="text-xl max-w-3xl">
            Please provide detailed information about the damage to help authorities assess and prioritize response efforts.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto py-10 px-4 md:px-0">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800 flex items-center">
              <i className="fas fa-house-damage text-orange-500 mr-3"></i> Damage Report
            </h2>
            <p className="text-gray-600 mt-1">
              This information will be shared with emergency responders and structural assessment teams.
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
            
            {/* Damage Details */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">Damage Details</h3>
              
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">Location of Damage</label>
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
                <label className="block text-gray-700 font-medium mb-2">Type of Damage</label>
                <select 
                  name="damageType" 
                  value={formData.damageType}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  required
                >
                  <option value="">Select Type</option>
                  <option value="structural">Building/Structural</option>
                  <option value="road">Road/Bridge</option>
                  <option value="utility">Utility (Power/Water)</option>
                  <option value="flooding">Flooding</option>
                  <option value="fire">Fire</option>
                  <option value="landslide">Landslide</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">Severity</label>
                <div className="flex flex-wrap gap-4">
                  <label className="flex items-center">
                    <input 
                      type="radio" 
                      name="severity" 
                      value="low"
                      checked={formData.severity === "low"}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <span className="text-green-600 font-medium">Low (Minor damage)</span>
                  </label>
                  <label className="flex items-center">
                    <input 
                      type="radio" 
                      name="severity" 
                      value="medium"
                      checked={formData.severity === "medium"}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <span className="text-yellow-600 font-medium">Medium (Moderate damage)</span>
                  </label>
                  <label className="flex items-center">
                    <input 
                      type="radio" 
                      name="severity" 
                      value="high"
                      checked={formData.severity === "high"}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <span className="text-red-600 font-medium">High (Severe damage)</span>
                  </label>
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">Description of Damage</label>
                <textarea 
                  name="description" 
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  rows="4"
                  placeholder="Please describe the damage in detail"
                  required
                ></textarea>
              </div>
              
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">Are people trapped?</label>
                <div className="flex gap-4">
                  <label className="flex items-center">
                    <input 
                      type="radio" 
                      name="peopleTrapped" 
                      value="yes"
                      checked={formData.peopleTrapped === "yes"}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <span className="text-red-600 font-medium">Yes</span>
                  </label>
                  <label className="flex items-center">
                    <input 
                      type="radio" 
                      name="peopleTrapped" 
                      value="no"
                      checked={formData.peopleTrapped === "no"}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <span>No</span>
                  </label>
                  <label className="flex items-center">
                    <input 
                      type="radio" 
                      name="peopleTrapped" 
                      value="unknown"
                      checked={formData.peopleTrapped === "unknown"}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <span>Unknown</span>
                  </label>
                </div>
              </div>
            </div>
            
            {/* Photo Upload - Note: In a real app you'd need to handle file uploads */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">Photo Upload</h3>
              
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <i className="fas fa-cloud-upload-alt text-gray-400 text-4xl mb-3"></i>
                <p className="text-gray-500">Upload photos of the damage to help assessment teams</p>
                <p className="text-sm text-gray-400 mt-1 mb-4">Accepted formats: JPG, PNG - Max size: 5MB</p>
                <input type="file" className="hidden" multiple />
                <button type="button" className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  Choose Files
                </button>
              </div>
            </div>
            
            {/* Additional Information */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">Additional Information</h3>
              
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">Structural Assessment</label>
                <textarea 
                  name="structuralAssessment" 
                  value={formData.structuralAssessment}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  rows="2"
                  placeholder="Any observations about structural integrity (e.g., leaning walls, cracked foundation)"
                ></textarea>
              </div>
              
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">Safety Hazards</label>
                <textarea 
                  name="safetyHazards" 
                  value={formData.safetyHazards}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  rows="2"
                  placeholder="Any immediate safety concerns (e.g., gas leaks, exposed wires)"
                ></textarea>
              </div>
              
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">Affected Utilities</label>
                <div className="grid grid-cols-2 gap-2">
                  <label className="flex items-center">
                    <input 
                      type="checkbox" 
                      name="utilities" 
                      value="electricity"
                      onChange={handleCheckboxChange}
                      className="mr-2"
                    />
                    <span>Electricity</span>
                  </label>
                  <label className="flex items-center">
                    <input 
                      type="checkbox" 
                      name="utilities" 
                      value="water"
                      onChange={handleCheckboxChange}
                      className="mr-2"
                    />
                    <span>Water</span>
                  </label>
                  <label className="flex items-center">
                    <input 
                      type="checkbox" 
                      name="utilities" 
                      value="gas"
                      onChange={handleCheckboxChange}
                      className="mr-2"
                    />
                    <span>Gas</span>
                  </label>
                  <label className="flex items-center">
                    <input 
                      type="checkbox" 
                      name="utilities" 
                      value="sewage"
                      onChange={handleCheckboxChange}
                      className="mr-2"
                    />
                    <span>Sewage</span>
                  </label>
                  <label className="flex items-center">
                    <input 
                      type="checkbox" 
                      name="utilities" 
                      value="internet"
                      onChange={handleCheckboxChange}
                      className="mr-2"
                    />
                    <span>Internet/Phone</span>
                  </label>
                  <label className="flex items-center">
                    <input 
                      type="checkbox" 
                      name="utilities" 
                      value="transportation"
                      onChange={handleCheckboxChange}
                      className="mr-2"
                    />
                    <span>Transportation</span>
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
                <Link to="/" className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2  focus:ring-blue-500">
                  Cancel
                </Link>
                <button 
                  type="submit" 
                  className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Submit 
                </button>
              </div>
            </div>
          </form>
        </div>
        
        <div className="mt-8 bg-yellow-50 border border-yellow-100 rounded-lg p-4">
          <div className="flex items-start">
            <i className="fas fa-exclamation-triangle text-yellow-500 mr-3 mt-1"></i>
            <div>
              <h4 className="font-medium text-yellow-800">Important Note</h4>
              <p className="text-yellow-700 text-sm">
                If you're reporting an emergency situation with immediate danger to life, 
                please also call emergency services at 911 immediately.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default DamageReportPage;