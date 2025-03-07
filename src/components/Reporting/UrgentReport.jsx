import React, { useState } from 'react';

const UrgentNeedsForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    location: '',
    numberOfPeople: '',
    needType: '',
    urgencyLevel: '',
    description: '',
    medicalNeeds: '',
    mobilityIssues: '',
    specialDietaryNeeds: [],
    safetyThreats: '',
    additionalInfo: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    
    if (checked) {
      setFormData({
        ...formData,
        specialDietaryNeeds: [...formData.specialDietaryNeeds, value]
      });
    } else {
      setFormData({
        ...formData,
        specialDietaryNeeds: formData.specialDietaryNeeds.filter(item => item !== value)
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Urgent Needs Request Submitted:", formData);
    setFormData({
        name: '',
        contact: '',
        location: '',
        numberOfPeople: '',
        needType: '',
        urgencyLevel: '',
        description: '',
        medicalNeeds: '',
        mobilityIssues: '',
        specialDietaryNeeds: [],
        safetyThreats: '',
        additionalInfo: ''
      });
    alert("Your urgent needs request has been submitted. Emergency teams will be notified immediately.");

    // In a real application, you would send this data to your backend/API
  };

  return (
    <form onSubmit={handleSubmit} className="p-6">
      <div className="mb-8 bg-red-50 border-l-4 border-red-500 p-4">
        <h2 className="text-2xl font-bold text-red-700 mb-2">Urgent Needs Request</h2>
        <p className="text-red-600">Use this form to request immediate assistance for food, shelter, medical needs, or evacuation.</p>
      </div>
      
      {/* Contact Information */}
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
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
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
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
              placeholder="Phone number or email"
              required
            />
          </div>
        </div>
      </div>
      
      {/* Location and People */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">Location & People</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Current Location</label>
            <input 
              type="text" 
              name="location" 
              value={formData.location}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
              placeholder="Address or area description"
              required
            />
          </div>
          
          <div>
            <label className="block text-gray-700 font-medium mb-2">Number of People Needing Assistance</label>
            <input 
              type="number" 
              name="numberOfPeople" 
              value={formData.numberOfPeople}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
              placeholder="How many people need help"
              min="1"
              required
            />
          </div>
        </div>
      </div>
      
      {/* Urgent Need Details */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">Urgent Need Details</h3>
        
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">Type of Urgent Need</label>
          <select 
            name="needType" 
            value={formData.needType}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
            required
          >
            <option value="">Select Type of Need</option>
            <option value="food">Food & Water</option>
            <option value="shelter">Emergency Shelter</option>
            <option value="medical">Medical Assistance</option>
            <option value="evacuation">Evacuation</option>
            <option value="multiple">Multiple Needs</option>
          </select>
        </div>
        
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">Urgency Level</label>
          <div className="flex flex-wrap gap-4">
            <label className="flex items-center">
              <input 
                type="radio" 
                name="urgencyLevel" 
                value="immediate"
                checked={formData.urgencyLevel === "immediate"}
                onChange={handleChange}
                className="mr-2"
              />
              <span className="text-red-600 font-bold">Immediate (Life-threatening)</span>
            </label>
            <label className="flex items-center">
              <input 
                type="radio" 
                name="urgencyLevel" 
                value="urgent"
                checked={formData.urgencyLevel === "urgent"}
                onChange={handleChange}
                className="mr-2"
              />
              <span className="text-orange-600 font-medium">Urgent (Within hours)</span>
            </label>
            <label className="flex items-center">
              <input 
                type="radio" 
                name="urgencyLevel" 
                value="soon"
                checked={formData.urgencyLevel === "soon"}
                onChange={handleChange}
                className="mr-2"
              />
              <span className="text-yellow-600">Soon (Within 24 hours)</span>
            </label>
          </div>
        </div>
        
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">Description of Needs</label>
          <textarea 
            name="description" 
            value={formData.description}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
            rows="4"
            placeholder="Please describe your specific needs in detail"
            required
          ></textarea>
        </div>
      </div>
      
      {/* Medical Information */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">Medical Information</h3>
        
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">Specific Medical Needs</label>
          <textarea 
            name="medicalNeeds" 
            value={formData.medicalNeeds}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
            rows="3"
            placeholder="List any medical conditions, medications, or specific medical assistance needed"
          ></textarea>
        </div>
        
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">Mobility Issues</label>
          <textarea 
            name="mobilityIssues" 
            value={formData.mobilityIssues}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
            rows="2"
            placeholder="Describe any mobility issues or special transportation needs"
          ></textarea>
        </div>
      </div>
      
      {/* Additional Information */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">Additional Information</h3>
        
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">Special Dietary Needs</label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            <label className="flex items-center">
              <input 
                type="checkbox" 
                name="specialDietaryNeeds" 
                value="diabetic"
                onChange={handleCheckboxChange}
                className="mr-2"
              />
              <span>Diabetic</span>
            </label>
            <label className="flex items-center">
              <input 
                type="checkbox" 
                name="specialDietaryNeeds" 
                value="glutenFree"
                onChange={handleCheckboxChange}
                className="mr-2"
              />
              <span>Gluten Free</span>
            </label>
            <label className="flex items-center">
              <input 
                type="checkbox" 
                name="specialDietaryNeeds" 
                value="vegetarian"
                onChange={handleCheckboxChange}
                className="mr-2"
              />
              <span>Vegetarian</span>
            </label>
            <label className="flex items-center">
              <input 
                type="checkbox" 
                name="specialDietaryNeeds" 
                value="vegan"
                onChange={handleCheckboxChange}
                className="mr-2"
              />
              <span>Vegan</span>
            </label>
            <label className="flex items-center">
              <input 
                type="checkbox" 
                name="specialDietaryNeeds" 
                value="allergies"
                onChange={handleCheckboxChange}
                className="mr-2"
              />
              <span>Food Allergies</span>
            </label>
            <label className="flex items-center">
              <input 
                type="checkbox" 
                name="specialDietaryNeeds" 
                value="infantFormula"
                onChange={handleCheckboxChange}
                className="mr-2"
              />
              <span>Infant Formula</span>
            </label>
          </div>
        </div>
        
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">Immediate Safety Threats</label>
          <textarea 
            name="safetyThreats" 
            value={formData.safetyThreats}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
            rows="2"
            placeholder="Describe any immediate threats to safety (flooding, structural damage, etc.)"
          ></textarea>
        </div>
        
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">Additional Information</label>
          <textarea 
            name="additionalInfo" 
            value={formData.additionalInfo}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
            rows="3"
            placeholder="Any other details that may help emergency responders assist you"
          ></textarea>
        </div>
      </div>
      
      {/* Submit Button */}
      <div className="flex justify-center">
        <button 
          type="submit" 
          className="px-6 py-3 bg-red-600 text-white font-bold rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
        >
          SUBMIT URGENT REQUEST
        </button>
      </div>
    </form>
  );
};

export default UrgentNeedsForm;