import React, { useState } from 'react';

const DisasterDashboard = () => {
  // Initial disaster data with added relief status
  const [disasters, setDisasters] = useState([
    { id: 1, name: 'Hurricane Alpha', location: 'Miami, FL', severity: 'high', description: 'Category 4 hurricane with winds up to 150 mph', date: '2025-02-15', reliefComplete: false },
    { id: 2, name: 'Flood', location: 'New Orleans, LA', severity: 'medium', description: 'Flooding affecting downtown area, 3 feet of water', date: '2025-02-20', reliefComplete: true },
    { id: 3, name: 'Wildfire', location: 'San Diego, CA', severity: 'high', description: 'Rapidly spreading wildfire, 5000 acres burned', date: '2025-02-25', reliefComplete: false },
    { id: 4, name: 'Earthquake', location: 'Seattle, WA', severity: 'low', description: 'Magnitude 3.2 earthquake, minimal damage reported', date: '2025-03-01', reliefComplete: true }
  ]);

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    severity: 'medium',
    description: '',
    date: '',
    reliefComplete: false
  });

  // Get card background color based on severity and relief status
  const getCardColor = (severity, reliefComplete) => {
    if (reliefComplete) {
      return 'bg-green-100 border-green-300';
    }
    
    switch (severity) {
      case 'low':
        return 'bg-yellow-100 border-yellow-300';
      case 'medium':
        return 'bg-orange-100 border-orange-300';
      case 'high':
        return 'bg-red-100 border-red-300';
      case 'critical':
        return 'bg-red-200 border-red-500';
      default:
        return 'bg-gray-100 border-gray-300';
    }
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create new disaster entry
    const newDisaster = {
      id: disasters.length + 1,
      ...formData
    };
    
    // Add to disasters list
    setDisasters([...disasters, newDisaster]);
    
    // Reset form
    setFormData({
      name: '',
      location: '',
      severity: 'medium',
      description: '',
      date: '',
      reliefComplete: false
    });
  };

  // Toggle relief status
  const toggleReliefStatus = (id) => {
    setDisasters(disasters.map(disaster => 
      disaster.id === id 
        ? { ...disaster, reliefComplete: !disaster.reliefComplete } 
        : disaster
    ));
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Disaster Management Dashboard</h1>
      
      {/* Disaster cards */}
      <div className="mb-10">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Current Disasters</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {disasters.map((disaster) => (
            <div 
              key={disaster.id} 
              className={`p-4 rounded-lg border ${getCardColor(disaster.severity, disaster.reliefComplete)} shadow-sm h-full flex flex-col`}
            >
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-semibold">{disaster.name}</h3>
                <div className="flex space-x-2">
                  {!disaster.reliefComplete && (
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      disaster.severity === 'high' || disaster.severity === 'critical' 
                        ? 'bg-red-500 text-white' 
                        : disaster.severity === 'medium' 
                          ? 'bg-orange-500 text-white' 
                          : 'bg-yellow-500 text-white'
                    }`}>
                      {disaster.severity.toUpperCase()}
                    </span>
                  )}
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    disaster.reliefComplete 
                      ? 'bg-green-500 text-white' 
                      : 'bg-gray-500 text-white'
                  }`}>
                    {disaster.reliefComplete ? 'RELIEF COMPLETE' : 'ONGOING'}
                  </span>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-1"><span className="font-medium">Location:</span> {disaster.location}</p>
              <p className="text-sm text-gray-600 mt-1"><span className="font-medium">Date:</span> {disaster.date}</p>
              <p className="text-sm text-gray-700 mt-2 flex-grow">{disaster.description}</p>
              <div className="mt-4 pt-2 border-t border-gray-200">
                <button
                  onClick={() => toggleReliefStatus(disaster.id)}
                  className={`px-3 py-1 text-sm rounded 
                    ${disaster.reliefComplete 
                      ? 'bg-gray-200 hover:bg-gray-300 text-gray-700' 
                      : 'bg-green-500 hover:bg-green-600 text-white'}`}
                >
                  {disaster.reliefComplete ? 'Mark as Ongoing' : 'Mark Relief Complete'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Add new disaster form */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Add New Disaster</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Disaster Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              rows="3"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            ></textarea>
          </div>
          
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Add Disaster
          </button>
        </form>
      </div>
    </div>
  );
};

export default DisasterDashboard;
