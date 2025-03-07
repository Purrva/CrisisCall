// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import Footer from './Footer.jsx';

// const DisasterReportingPage = () => {
//   const [reportType, setReportType] = useState('missing');
//   const [formData, setFormData] = useState({
//     name: '',
//     contact: '',
//     location: '',
//     description: '',
//     date: '',
//     severity: 'medium',
//     missingPersonName: '',
//     missingPersonAge: '',
//     missingPersonGender: '',
//     lastSeen: '',
//     physicalDescription: '',
//   });

//   // Sample statistics
//   const statistics = {
//     missingPersons: 157,
//     rescued: 432,
//     injured: 289,
//     sheltered: 1245,
//     activeCases: 43
//   };

//   // Sample recent reports
//   const recentReports = [
//     { id: 1, type: 'missing', name: 'Alex Johnson', location: 'Downtown area', date: '03/05/2025', status: 'Active' },
//     { id: 2, type: 'damage', location: 'Riverside Heights', description: 'Building structural damage', date: '03/04/2025', status: 'Under Review' },
//     { id: 3, type: 'missing', name: 'Maria Rodriguez', location: 'East End Mall', date: '03/04/2025', status: 'Found' },
//     { id: 4, type: 'injury', name: 'David Chen', location: 'North Bridge', description: 'Minor injuries', date: '03/03/2025', status: 'Assisted' }
//   ];

//   const handleChange = (e) => {
//      const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Here you would send the data to your backend
//     alert('Report submitted successfully. Authorities have been notified.');
//     // Reset form
//     setFormData({
//       name: '',
//       contact: '',
//       location: '',
//       description: '',
//       date: '',
//       severity: 'medium',
//       missingPersonName: '',
//       missingPersonAge: '',
//       missingPersonGender: '',
//       lastSeen: '',
//       physicalDescription: '',
//     });
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header Section */}
//       <div className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-16 px-4 md:px-0">
//         <div className="max-w-6xl mx-auto">
//           <h1 className="text-4xl font-bold mb-4">Disaster Reporting Portal</h1>
//           <p className="text-xl max-w-3xl mb-8">
//             Report missing persons, structural damages, and emergency needs to help authorities prioritize rescue and aid efforts.
//           </p>
//           <div className="flex flex-wrap gap-3">
//             <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition duration-300 flex items-center">
//               <i className="fas fa-exclamation-triangle mr-2"></i> Emergency Report
//             </button>
//             <Link to="/resources" className="bg-white text-blue-700 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition duration-300 flex items-center">
//               <i className="fas fa-info-circle mr-2"></i> Find Resources
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* Statistics Section */}
//       <div className="py-10 bg-white">
//         <div className="max-w-6xl mx-auto px-4 md:px-0">
//           <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Current Situation</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
//             <div className="bg-blue-50 rounded-lg p-6 text-center shadow-sm">
//               <div className="text-blue-500 text-3xl mb-2">
//                 <i className="fas fa-user-slash"></i>
//               </div>
//               <div className="text-3xl font-bold text-gray-800">{statistics.missingPersons}</div>
//               <div className="text-gray-600">Missing Persons</div>
//             </div>
//             <div className="bg-green-50 rounded-lg p-6 text-center shadow-sm">
//               <div className="text-green-500 text-3xl mb-2">
//                 <i className="fas fa-hands-helping"></i>
//               </div>
//               <div className="text-3xl font-bold text-gray-800">{statistics.rescued}</div>
//               <div className="text-gray-600">People Rescued</div>
//             </div>
//             <div className="bg-red-50 rounded-lg p-6 text-center shadow-sm">
//               <div className="text-red-500 text-3xl mb-2">
//                 <i className="fas fa-first-aid"></i>
//               </div>
//               <div className="text-3xl font-bold text-gray-800">{statistics.injured}</div>
//               <div className="text-gray-600">Injured</div>
//             </div>
//             <div className="bg-purple-50 rounded-lg p-6 text-center shadow-sm">
//               <div className="text-purple-500 text-3xl mb-2">
//                 <i className="fas fa-home"></i>
//               </div>
//               <div className="text-3xl font-bold text-gray-800">{statistics.sheltered}</div>
//               <div className="text-gray-600">In Temporary Shelters</div>
//             </div>
//             <div className="bg-yellow-50 rounded-lg p-6 text-center shadow-sm">
//               <div className="text-yellow-500 text-3xl mb-2">
//                 <i className="fas fa-clock"></i>
//               </div>
//               <div className="text-3xl font-bold text-gray-800">{statistics.activeCases}</div>
//               <div className="text-gray-600">Active Rescue Cases</div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="max-w-6xl mx-auto py-10 px-4 md:px-0">
//         <div className="flex flex-col lg:flex-row gap-10">
//           {/* Report Form */}
//           <div className="lg:w-2/3">
//             <div className="bg-white rounded-xl shadow-md overflow-hidden">
//               <div className="p-6 border-b border-gray-200">
//                 <h2 className="text-2xl font-bold text-gray-800">Submit a Report</h2>
//                 <p className="text-gray-600 mt-1">
//                   Please provide as much information as possible to help authorities respond effectively.
//                 </p>
//               </div>
              
//               {/* Report Type Tabs */}
//               <div className="flex border-b border-gray-200">
//                     <button 
//                         className={`flex-1 py-4 px-6 text-center font-medium ${reportType === 'missing' ? 'bg-blue-50 text-blue-600 border-b-2 border-blue-500' : 'text-gray-500 hover:text-gray-700'}`}
//                         onClick={() => setReportType('missing')}
//                     >
//                         <i className="fas fa-user-slash mr-2"></i> Missing Person
//                     </button>
//                     <button 
//                         className={`flex-1 py-4 px-6 text-center font-medium ${reportType === 'damage' ? 'bg-blue-50 text-blue-600 border-b-2 border-blue-500' : 'text-gray-500 hover:text-gray-700'}`}
//                         onClick={() => setReportType('damage')}
//                     >
//                         <i className="fas fa-house-damage mr-2"></i> Report Damage
//                     </button>
//                     <button 
//                         className={`flex-1 py-4 px-6 text-center font-medium ${reportType === 'needs' ? 'bg-blue-50 text-blue-600 border-b-2 border-blue-500' : 'text-gray-500 hover:text-gray-700'}`}
//                         onClick={() => setReportType('needs')}
//                     >
//                         <i className="fas fa-hands-helping mr-2"></i> Urgent Needs
//                     </button>
//                     </div>

//               {/* Report Form */}
//               <form onSubmit={handleSubmit} className="p-6">
//                 {/* Common Fields */}
//                 <div className="mb-6">
//                   <label className="block text-gray-700 font-medium mb-2">Your Name</label>
//                   <input 
//                     type="text" 
//                     name="name" 
//                     value={formData.name}
//                     onChange={handleChange}
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
//                     placeholder="Enter your full name"
//                     required
//                   />
//                 </div>
                
//                 <div className="mb-6">
//                   <label className="block text-gray-700 font-medium mb-2">Contact Information</label>
//                   <input 
//                     type="text" 
//                     name="contact" 
//                     value={formData.contact}
//                     onChange={handleChange}
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
//                     placeholder="Phone number or email"
//                     required
//                   />
//                 </div>

//                 <div className="mb-6">
//                   <label className="block text-gray-700 font-medium mb-2">Location</label>
//                   <input 
//                     type="text" 
//                     name="location" 
//                     value={formData.location}
//                     onChange={handleChange}
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
//                     placeholder="Address or area description"
//                     required
//                   />
//                 </div>

//                 {/* Missing Person Fields */}
//                 {reportType === 'missing' && (
//                   <>
//                     <div className="mb-6">
//                       <label className="block text-gray-700 font-medium mb-2">Missing Person's Name</label>
//                       <input 
//                         type="text" 
//                         name="missingPersonName" 
//                         value={formData.missingPersonName}
//                         onChange={handleChange}
//                         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
//                         placeholder="Enter full name"
//                         required
//                       />
//                     </div>
                    
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
//                       <div>
//                         <label className="block text-gray-700 font-medium mb-2">Age</label>
//                         <input 
//                           type="number" 
//                           name="missingPersonAge" 
//                           value={formData.missingPersonAge}
//                           onChange={handleChange}
//                           className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
//                           placeholder="Age"
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-gray-700 font-medium mb-2">Gender</label>
//                         <select 
//                           name="missingPersonGender" 
//                           value={formData.missingPersonGender}
//                           onChange={handleChange}
//                           className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
//                         >
//                           <option value="">Select Gender</option>
//                           <option value="male">Male</option>
//                           <option value="female">Female</option>
//                           <option value="other">Other</option>
//                         </select>
//                       </div>
//                     </div>
                    
//                     <div className="mb-6">
//                       <label className="block text-gray-700 font-medium mb-2">Last Seen Date/Time</label>
//                       <input 
//                         type="datetime-local" 
//                         name="lastSeen" 
//                         value={formData.lastSeen}
//                         onChange={handleChange}
//                         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
//                       />
//                     </div>
                    
//                     <div className="mb-6">
//                       <label className="block text-gray-700 font-medium mb-2">Physical Description</label>
//                       <textarea 
//                         name="physicalDescription" 
//                         value={formData.physicalDescription}
//                         onChange={handleChange}
//                         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
//                         rows="4"
//                         placeholder="Height, weight, clothing, distinctive features, etc."
//                       ></textarea>
//                     </div>
//                   </>
//                 )}

//                 {/* Damage Report Fields */}
//                 {reportType === 'damage' && (
//                   <>
//                     <div className="mb-6">
//                       <label className="block text-gray-700 font-medium mb-2">Type of Damage</label>
//                       <select 
//                         name="damageType" 
//                         value={formData.damageType}
//                         onChange={handleChange}
//                         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
//                       >
//                         <option value="">Select Type</option>
//                         <option value="structural">Building/Structural</option>
//                         <option value="road">Road/Bridge</option>
//                         <option value="utility">Utility (Power/Water)</option>
//                         <option value="flooding">Flooding</option>
//                         <option value="fire">Fire</option>
//                         <option value="other">Other</option>
//                       </select>
//                     </div>
                    
//                     <div className="mb-6">
//                       <label className="block text-gray-700 font-medium mb-2">Severity</label>
//                       <div className="flex gap-4">
//                         <label className="flex items-center">
//                           <input 
//                             type="radio" 
//                             name="severity" 
//                             value="low"
//                             checked={formData.severity === "low"}
//                             onChange={handleChange}
//                             className="mr-2"
//                           />
//                           <span className="text-green-600 font-medium">Low</span>
//                         </label>
//                         <label className="flex items-center">
//                           <input 
//                             type="radio" 
//                             name="severity" 
//                             value="medium"
//                             checked={formData.severity === "medium"}
//                             onChange={handleChange}
//                             className="mr-2"
//                           />
//                           <span className="text-yellow-600 font-medium">Medium</span>
//                         </label>
//                         <label className="flex items-center">
//                           <input 
//                             type="radio" 
//                             name="severity" 
//                             value="high"
//                             checked={formData.severity === "high"}
//                             onChange={handleChange}
//                             className="mr-2"
//                           />
//                           <span className="text-red-600 font-medium">High</span>
//                         </label>
//                       </div>
//                     </div>
                    
//                     <div className="mb-6">
//                       <label className="block text-gray-700 font-medium mb-2">Description of Damage</label>
//                       <textarea 
//                         name="description" 
//                         value={formData.description}
//                         onChange={handleChange}
//                         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
//                         rows="4"
//                         placeholder="Please describe the damage in detail"
//                         required
//                       ></textarea>
//                     </div>
                    
//                     <div className="mb-6">
//                       <label className="block text-gray-700 font-medium mb-2">Are people trapped?</label>
//                       <div className="flex gap-4">
//                         <label className="flex items-center">
//                           <input 
//                             type="radio" 
//                             name="peopleTrapped" 
//                             value="yes"
//                             className="mr-2"
//                           />
//                           <span>Yes</span>
//                         </label>
//                         <label className="flex items-center">
//                           <input 
//                             type="radio" 
//                             name="peopleTrapped" 
//                             value="no"
//                             className="mr-2"
//                           />
//                           <span>No</span>
//                         </label>
//                         <label className="flex items-center">
//                           <input 
//                             type="radio" 
//                             name="peopleTrapped" 
//                             value="unknown"
//                             className="mr-2"
//                           />
//                           <span>Unknown</span>
//                         </label>
//                       </div>
//                     </div>
//                   </>
//                 )}

//                 {/* Urgent Needs Fields */}
//                 {reportType === 'needs' && (
//                   <>
//                     <div className="mb-6">
//                       <label className="block text-gray-700 font-medium mb-2">Type of Need</label>
//                       <select 
//                         name="needType" 
//                         value={formData.needType}
//                         onChange={handleChange}
//                         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
//                       >
//                         <option value="">Select Type</option>
//                         <option value="food">Food & Water</option>
//                         <option value="medical">Medical Assistance</option>
//                         <option value="shelter">Shelter</option>
//                         <option value="evacuation">Evacuation</option>
//                         <option value="supplies">Emergency Supplies</option>
//                         <option value="other">Other</option>
//                       </select>
//                     </div>
                    
//                     <div className="mb-6">
//                       <label className="block text-gray-700 font-medium mb-2">Number of People Affected</label>
//                       <input 
//                         type="number" 
//                         name="peopleAffected" 
//                         value={formData.peopleAffected}
//                         onChange={handleChange}
//                         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
//                         placeholder="Approximate number"
//                       />
//                     </div>
                    
//                     <div className="mb-6">
//                       <label className="block text-gray-700 font-medium mb-2">Urgency</label>
//                       <div className="flex gap-4">
//                         <label className="flex items-center">
//                           <input 
//                             type="radio" 
//                             name="urgency" 
//                             value="immediate"
//                             className="mr-2"
//                           />
//                           <span className="text-red-600 font-medium">Immediate (24h)</span>
//                         </label>
//                         <label className="flex items-center">
//                           <input 
//                             type="radio" 
//                             name="urgency" 
//                             value="urgent"
//                             className="mr-2"
//                           />
//                           <span className="text-orange-600 font-medium">Urgent (72h)</span>
//                         </label>
//                         <label className="flex items-center">
//                           <input 
//                             type="radio" 
//                             name="urgency" 
//                             value="soon"
//                             className="mr-2"
//                           />
//                           <span className="text-yellow-600 font-medium">Soon (1 week)</span>
//                         </label>
//                       </div>
//                     </div>
                    
//                     <div className="mb-6">
//                       <label className="block text-gray-700 font-medium mb-2">Detailed Description</label>
//                       <textarea 
//                         name="description" 
//                         value={formData.description}
//                         onChange={handleChange}
//                         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
//                         rows="4"
//                         placeholder="Please describe the needs in detail"
//                         required
//                       ></textarea>
//                     </div>
//                   </>
//                 )}

//                 {/* Photo Upload - Note: In a real app you'd need to handle file uploads */}
//                 <div className="mb-6">
//                   <label className="block text-gray-700 font-medium mb-2">Upload Photos (Optional)</label>
//                   <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
//                     <i className="fas fa-cloud-upload-alt text-gray-400 text-4xl mb-3"></i>
//                     <p className="text-gray-500">Drag & drop photos here or click to browse</p>
//                     <input type="file" className="hidden" />
//                     <button type="button" className="mt-4 inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500">
//                       Browse Files
//                     </button>
//                   </div>
//                 </div>

//                 <div className="flex justify-end">
//                   <button 
//                     type="submit" 
//                     className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300"
//                   >
//                     Submit Report
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
          
//           {/* Recent Reports & Info */}
//           <div className="lg:w-1/3">
//             {/* Recent Reports */}
//             <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
//               <div className="p-6 border-b border-gray-200">
//                 <h3 className="text-xl font-bold text-gray-800">Recent Reports</h3>
//               </div>
//               <div className="p-6">
//                 {recentReports.map(report => (
//                   <div key={report.id} className="mb-4 pb-4 border-b border-gray-100 last:border-0 last:mb-0 last:pb-0">
//                     <div className="flex items-start">
//                       <div className="p-2 rounded-full mr-3">
//                         {report.type === 'missing' ? (
//                           <i className="fas fa-user-slash text-xl text-blue-500"></i>
//                         ) : report.type === 'damage' ? (
//                           <i className="fas fa-home text-xl text-orange-500"></i>
//                         ) : (
//                           <i className="fas fa-first-aid text-xl text-red-500"></i>
//                         )}
//                       </div>
//                       <div>
//                         <div className="flex items-center">
//                           <h4 className="font-medium text-gray-800">
//                             {report.type === 'missing' ? 'Missing: ' + report.name : 
//                              report.type === 'damage' ? 'Damage Report' : 
//                              'Injury: ' + report.name}
//                           </h4>
//                           <span className={`ml-2 px-2 py-1 text-xs rounded-full ${
//                             report.status === 'Active' ? 'bg-red-100 text-red-800' :
//                             report.status === 'Found' ? 'bg-green-100 text-green-800' :
//                             report.status === 'Assisted' ? 'bg-green-100 text-green-800' :
//                             'bg-yellow-100 text-yellow-800'
//                           }`}>
//                             {report.status}
//                           </span>
//                         </div>
//                         <p className="text-sm text-gray-600">{report.location}</p>
//                         {report.description && (
//                           <p className="text-sm text-gray-600">{report.description}</p>
//                         )}
//                         <p className="text-xs text-gray-500 mt-1">{report.date}</p>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//                 <div className="mt-4">
//                   <Link to="/all-reports" className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center">
//                     View all reports <i className="fas fa-arrow-right ml-1"></i>
//                   </Link>
//                 </div>
//               </div>
//             </div>
            
//             {/* Important Information */}
//             <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
//               <div className="p-6 border-b border-gray-200">
//                 <h3 className="text-xl font-bold text-gray-800">Important Information</h3>
//               </div>
//               <div className="p-6">
//                 <div className="mb-4 pb-4 border-b border-gray-100">
//                   <h4 className="font-medium text-gray-800 mb-2">Emergency Contacts</h4>
//                   <p className="text-gray-600 mb-1"><strong>Emergency Response:</strong> 911</p>
//                   <p className="text-gray-600 mb-1"><strong>Disaster Hotline:</strong> 1-800-555-0123</p>
//                   <p className="text-gray-600"><strong>Medical Emergency:</strong> 1-800-555-0199</p>
//                 </div>
//                 <div className="mb-4 pb-4 border-b border-gray-100">
//                   <h4 className="font-medium text-gray-800 mb-2">Evacuation Centers</h4>
//                   <p className="text-gray-600 mb-1">• Central High School - 123 Main St.</p>
//                   <p className="text-gray-600 mb-1">• Community Center - 456 Oak Ave.</p>
//                   <p className="text-gray-600">• North District Church - 789 Pine Rd.</p>
//                 </div>
//                 <div>
//                   <h4 className="font-medium text-gray-800 mb-2">Resources Available</h4>
//                   <div className="grid grid-cols-2 gap-2">
//                     <div className="bg-blue-50 p-3 rounded-lg text-center">
//                       <i className="fas fa-utensils text-blue-500 mb-1"></i>
//                       <p className="text-sm">Food & Water</p>
//                     </div>
//                     <div className="bg-green-50 p-3 rounded-lg text-center">
//                       <i className="fas fa-first-aid text-green-500 mb-1"></i>
//                       <p className="text-sm">Medical Aid</p>
//                     </div>
//                     <div className="bg-purple-50 p-3 rounded-lg text-center">
//                       <i className="fas fa-bed text-purple-500 mb-1"></i>
//                       <p className="text-sm">Shelter</p>
//                     </div>
//                     <div className="bg-orange-50 p-3 rounded-lg text-center">
//                       <i className="fas fa-tshirt text-orange-500 mb-1"></i>
//                       <p className="text-sm">Clothing</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
            
//             {/* Safety Tips */}
//             <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
//               <h3 className="text-lg font-bold text-yellow-800 mb-3">
//                 <i className="fas fa-exclamation-triangle mr-2"></i>
//                 Safety Reminders
//               </h3>
//               <ul className="text-yellow-800 space-y-2">
//                 <li className="flex items-start">
//                   <i className="fas fa-check-circle mt-1 mr-2 text-yellow-600"></i>
//                   <span>Stay away from damaged buildings and power lines</span>
//                 </li>
//                 <li className="flex items-start">
//                   <i className="fas fa-check-circle mt-1 mr-2 text-yellow-600"></i>
//                   <span>Keep emergency supplies and contact information handy</span>
//                 </li>
//                 <li className="flex items-start">
//                   <i className="fas fa-check-circle mt-1 mr-2 text-yellow-600"></i>
//                   <span>Follow official instructions for evacuation</span>
//                 </li>
//                 <li className="flex items-start">
//                   <i className="fas fa-check-circle mt-1 mr-2 text-yellow-600"></i>
//                   <span>Report any suspicious activity or additional hazards</span>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
      
//       {/* Map Section - In a real app, you'd integrate with Google Maps or similar */}
//       <div className="py-10 bg-gray-100">
//         <div className="max-w-6xl mx-auto px-4 md:px-0">
//           <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Affected Areas Map</h2>
//           <div className="bg-white rounded-xl shadow-md p-4 h-96 flex items-center justify-center">
//             <div className="text-center">
//               <i className="fas fa-map-marked-alt text-gray-400 text-5xl mb-4"></i>
//               <p className="text-gray-500 max-w-md mx-auto">
//                 Interactive map showing affected areas, evacuation zones, and resource centers would be displayed here.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
      
//       {/* Volunteer Call to Action */}
//       <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-16 text-white">
//         <div className="max-w-6xl mx-auto px-4 md:px-0 text-center">
//           <h2 className="text-3xl font-bold mb-4">Help Your Community Recover</h2>
//           <p className="text-xl max-w-2xl mx-auto mb-8">
//             Join hundreds of volunteers helping with rescue efforts, cleanup operations, and community support.
//           </p>
//           <div className="flex justify-center">
//             <button className="bg-white text-blue-700 px-8 py-4 rounded-lg font-bold shadow-lg hover:bg-blue-50 transition duration-300">
//               <i className="fas fa-hands-helping mr-2"></i> Register as Volunteer
//             </button>
//           </div>
//         </div>
//       </div>
      
//       {/* Footer */}
//       <Footer />
//     </div>
//   );
// };

// export default DisasterReportingPage;

import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer.jsx';


const DisasterReportingPage = () => {
  // Sample statistics
  const statistics = {
    missingPersons: 157,
    rescued: 432,
    injured: 289,
    sheltered: 1245,
    activeCases: 43
  };

  // Sample recent reports
  const recentReports = [
    { id: 1, type: 'missing', name: 'Alex Johnson', location: 'Downtown area', date: '03/05/2025', status: 'Active' },
    { id: 2, type: 'damage', location: 'Riverside Heights', description: 'Building structural damage', date: '03/04/2025', status: 'Under Review' },
    { id: 3, type: 'missing', name: 'Maria Rodriguez', location: 'East End Mall', date: '03/04/2025', status: 'Found' },
    { id: 4, type: 'injury', name: 'David Chen', location: 'North Bridge', description: 'Minor injuries', date: '03/03/2025', status: 'Assisted' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-16 px-4 md:px-0">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Disaster Reporting Portal</h1>
          <p className="text-xl max-w-3xl mb-8">
            Report missing persons, structural damages, and emergency needs to help authorities prioritize rescue and aid efforts.
          </p>
          <div className="flex flex-wrap gap-3">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition duration-300 flex items-center">
              <i className="fas fa-exclamation-triangle mr-2"></i> Emergency Report
            </button>
            <Link to="/resources" className="bg-white text-blue-700 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition duration-300 flex items-center">
              <i className="fas fa-info-circle mr-2"></i> Find Resources
            </Link>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="py-10 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-0">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Current Situation</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <div className="bg-blue-50 rounded-lg p-6 text-center shadow-sm">
              <div className="text-blue-500 text-3xl mb-2">
                <i className="fas fa-user-slash"></i>
              </div>
              <div className="text-3xl font-bold text-gray-800">{statistics.missingPersons}</div>
              <div className="text-gray-600">Missing Persons</div>
            </div>
            <div className="bg-green-50 rounded-lg p-6 text-center shadow-sm">
              <div className="text-green-500 text-3xl mb-2">
                <i className="fas fa-hands-helping"></i>
              </div>
              <div className="text-3xl font-bold text-gray-800">{statistics.rescued}</div>
              <div className="text-gray-600">People Rescued</div>
            </div>
            <div className="bg-red-50 rounded-lg p-6 text-center shadow-sm">
              <div className="text-red-500 text-3xl mb-2">
                <i className="fas fa-first-aid"></i>
              </div>
              <div className="text-3xl font-bold text-gray-800">{statistics.injured}</div>
              <div className="text-gray-600">Injured</div>
            </div>
            <div className="bg-purple-50 rounded-lg p-6 text-center shadow-sm">
              <div className="text-purple-500 text-3xl mb-2">
                <i className="fas fa-home"></i>
              </div>
              <div className="text-3xl font-bold text-gray-800">{statistics.sheltered}</div>
              <div className="text-gray-600">In Temporary Shelters</div>
            </div>
            <div className="bg-yellow-50 rounded-lg p-6 text-center shadow-sm">
              <div className="text-yellow-500 text-3xl mb-2">
                <i className="fas fa-clock"></i>
              </div>
              <div className="text-3xl font-bold text-gray-800">{statistics.activeCases}</div>
              <div className="text-gray-600">Active Rescue Cases</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto py-10 px-4 md:px-0">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Report Options */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-2xl font-bold text-gray-800">Submit a Report</h2>
                <p className="text-gray-600 mt-1">
                  Please select the type of report you would like to submit.
                </p>
              </div>
              
              <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Missing Person Report Option */}
                <div className="bg-blue-50 rounded-lg p-6 text-center hover:shadow-md transition-all duration-300">
                  <div className="text-blue-500 text-4xl mb-4">
                    <i className="fas fa-user-slash"></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Missing Person</h3>
                  <p className="text-gray-600 mb-4">Report a missing person to help authorities in search efforts.</p>
                  <Link 
                    to="/report-disaster/missing-person" 
                    className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition duration-300"
                  >
                    File Report
                  </Link>
                </div>
                
                {/* Damage Report Option */}
                <div className="bg-orange-50 rounded-lg p-6 text-center hover:shadow-md transition-all duration-300">
                  <div className="text-orange-500 text-4xl mb-4">
                    <i className="fas fa-house-damage"></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Report Damage</h3>
                  <p className="text-gray-600 mb-4">Report structural damage, hazards, or unsafe conditions.</p>
                  <Link 
                    to="/report-disaster/damage-report" 
                    className="inline-block bg-orange-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-orange-700 transition duration-300"
                  >
                    File Report
                  </Link>
                </div>
                
                {/* Urgent Needs Report Option */}
                <div className="bg-green-50 rounded-lg p-6 text-center hover:shadow-md transition-all duration-300">
                  <div className="text-green-500 text-4xl mb-4">
                    <i className="fas fa-hands-helping"></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Urgent Needs</h3>
                  <p className="text-gray-600 mb-4">Request assistance for food, shelter, medical, or evacuation needs.</p>
                  <Link 
                    to="/report-disaster/urgent-report" 
                    className="inline-block bg-green-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-700 transition duration-300"
                  >
                    File Report
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* Recent Reports & Info */}
          <div className="lg:w-1/3">
            {/* Recent Reports */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-xl font-bold text-gray-800">Recent Reports</h3>
              </div>
              <div className="p-6">
                {recentReports.map(report => (
                  <div key={report.id} className="mb-4 pb-4 border-b border-gray-100 last:border-0 last:mb-0 last:pb-0">
                    <div className="flex items-start">
                      <div className="p-2 rounded-full mr-3">
                        {report.type === 'missing' ? (
                          <i className="fas fa-user-slash text-xl text-blue-500"></i>
                        ) : report.type === 'damage' ? (
                          <i className="fas fa-home text-xl text-orange-500"></i>
                        ) : (
                          <i className="fas fa-first-aid text-xl text-red-500"></i>
                        )}
                      </div>
                      <div>
                        <div className="flex items-center">
                          <h4 className="font-medium text-gray-800">
                            {report.type === 'missing' ? 'Missing: ' + report.name : 
                             report.type === 'damage' ? 'Damage Report' : 
                             'Injury: ' + report.name}
                          </h4>
                          <span className={`ml-2 px-2 py-1 text-xs rounded-full ${
                            report.status === 'Active' ? 'bg-red-100 text-red-800' :
                            report.status === 'Found' ? 'bg-green-100 text-green-800' :
                            report.status === 'Assisted' ? 'bg-green-100 text-green-800' :
                            'bg-yellow-100 text-yellow-800'
                          }`}>
                            {report.status}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600">{report.location}</p>
                        {report.description && (
                          <p className="text-sm text-gray-600">{report.description}</p>
                        )}
                        <p className="text-xs text-gray-500 mt-1">{report.date}</p>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="mt-4">
                  <Link to="/all-reports" className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center">
                    View all reports <i className="fas fa-arrow-right ml-1"></i>
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Important Information */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-xl font-bold text-gray-800">Important Information</h3>
              </div>
              <div className="p-6">
                <div className="mb-4 pb-4 border-b border-gray-100">
                  <h4 className="font-medium text-gray-800 mb-2">Emergency Contacts</h4>
                  <p className="text-gray-600 mb-1"><strong>Emergency Response:</strong> 911</p>
                  <p className="text-gray-600 mb-1"><strong>Disaster Hotline:</strong> 1-800-555-0123</p>
                  <p className="text-gray-600"><strong>Medical Emergency:</strong> 1-800-555-0199</p>
                </div>
                <div className="mb-4 pb-4 border-b border-gray-100">
                  <h4 className="font-medium text-gray-800 mb-2">Evacuation Centers</h4>
                  <p className="text-gray-600 mb-1">• Central High School - 123 Main St.</p>
                  <p className="text-gray-600 mb-1">• Community Center - 456 Oak Ave.</p>
                  <p className="text-gray-600">• North District Church - 789 Pine Rd.</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Resources Available</h4>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-blue-50 p-3 rounded-lg text-center">
                      <i className="fas fa-utensils text-blue-500 mb-1"></i>
                      <p className="text-sm">Food & Water</p>
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg text-center">
                      <i className="fas fa-first-aid text-green-500 mb-1"></i>
                      <p className="text-sm">Medical Aid</p>
                    </div>
                    <div className="bg-purple-50 p-3 rounded-lg text-center">
                      <i className="fas fa-bed text-purple-500 mb-1"></i>
                      <p className="text-sm">Shelter</p>
                    </div>
                    <div className="bg-orange-50 p-3 rounded-lg text-center">
                      <i className="fas fa-tshirt text-orange-500 mb-1"></i>
                      <p className="text-sm">Clothing</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Safety Tips */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-yellow-800 mb-3">
                <i className="fas fa-exclamation-triangle mr-2"></i>
                Safety Reminders
              </h3>
              <ul className="text-yellow-800 space-y-2">
                <li className="flex items-start">
                  <i className="fas fa-check-circle mt-1 mr-2 text-yellow-600"></i>
                  <span>Stay away from damaged buildings and power lines</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle mt-1 mr-2 text-yellow-600"></i>
                  <span>Keep emergency supplies and contact information handy</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle mt-1 mr-2 text-yellow-600"></i>
                  <span>Follow official instructions for evacuation</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle mt-1 mr-2 text-yellow-600"></i>
                  <span>Report any suspicious activity or additional hazards</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default DisasterReportingPage;