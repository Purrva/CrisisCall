import React, { useState } from 'react';
import { Search, MapPin, Calendar, Clock, Award, Bell } from 'lucide-react';

const VolunteerDashboard = () => {
  // Sample data for active disasters
  const [disasters, setDisasters] = useState([
    {
      id: 1,
      type: 'Flood',
      location: 'River Valley, Springfield',
      date: '2025-03-01',
      status: 'Ongoing',
      urgency: 'High',
      volunteers: {
        needed: 250,
        registered: 168
      },
      skills: ['Transportation', 'Medical', 'Search & Rescue'],
      isApplied: false
    },
    {
      id: 2,
      type: 'Wildfire',
      location: 'Northern Forest, Oakridge',
      date: '2025-02-28',
      status: 'Ongoing',
      urgency: 'Critical',
      volunteers: {
        needed: 450,
        registered: 302
      },
      skills: ['Firefighting', 'Medical', 'Logistics'],
      isApplied: true
    },
    {
      id: 3,
      type: 'Earthquake',
      location: 'Downtown, Metropolis',
      date: '2025-02-25',
      status: 'Recovery',
      urgency: 'Medium',
      volunteers: {
        needed: 500,
        registered: 487
      },
      skills: ['Construction', 'Medical', 'Food Service'],
      isApplied: false
    }
  ]);

  // Sample data for past contributions
  const pastContributions = [
    {
      id: 101,
      disaster: 'Hurricane Relief',
      location: 'Coastal City',
      dates: 'Jan 15 - Jan 28, 2025',
      hoursServed: 42,
      role: 'Emergency Transport Driver',
      impact: 'Helped evacuate 78 residents from flood zones',
      status: 'Completed'
    },
    {
      id: 102,
      disaster: 'Winter Storm',
      location: 'Mountain Region',
      dates: 'Dec 10 - Dec 18, 2024',
      hoursServed: 36,
      role: 'Shelter Assistant',
      impact: 'Provided care for 120+ displaced families',
      status: 'Completed'
    }
  ];

  // Sample government requests
  const governmentRequests = [
    {
      id: 201,
      title: 'Urgent: Medical Volunteers Needed',
      location: 'East District Hospital',
      dates: 'Mar 10 - Mar 17, 2025',
      skills: ['Medical', 'First Aid'],
      status: 'Pending',
      deadline: 'Mar 09, 2025',
      description: 'Medical personnel needed to assist with overflow patients from recent disaster.'
    }
  ];

  // Volunteer stats
  const volunteerStats = {
    totalHours: 122,
    disastersHelped: 4,
    impactedLives: '200+',
    skillsUtilized: 3
  };

  // Function to toggle apply status
  const handleApplyToggle = (id) => {
    setDisasters(disasters.map(disaster => 
      disaster.id === id 
        ? { ...disaster, isApplied: !disaster.isApplied } 
        : disaster
    ));
  };

  // Function to handle government request response
  const [respondedRequests, setRespondedRequests] = useState([]);
  
  const handleRequestResponse = (id, accepted) => {
    setRespondedRequests([...respondedRequests, id]);
    console.log(`Request ${id} ${accepted ? 'accepted' : 'declined'}`);
};

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-blue-700 text-white">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold">Disaster Response Volunteer Portal</h1>
              <p className="text-blue-100">Welcome back, Volunteer</p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 relative">
                <Bell size={24} />
                <span className="absolute top-0 right-0 bg-red-500 text-xs w-5 h-5 flex items-center justify-center rounded-full">2</span>
              </button>
              <div className="bg-blue-800 p-2 rounded-full">
                <span className="font-bold">VS</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left column - 2/3 width */}
          <div className="w-full md:w-2/3 space-y-6">
            {/* Active disasters section */}
            <section className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-800">Active Disasters</h2>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Search disasters..." 
                    className="pl-10 pr-4 py-2 border rounded-lg text-sm w-64"
                  />
                  <Search className="absolute left-3 top-2.5 text-gray-400" size={16} />
                </div>
              </div>

              <div className="space-y-4">
                {disasters.map(disaster => (
                  <div key={disaster.id} className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-200">
                    <div className="flex flex-col sm:flex-row">
                      {/* Left side - Disaster info */}
                      <div className="p-4 flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                              disaster.urgency === 'Critical' ? 'bg-red-100 text-red-800' :
                              disaster.urgency === 'High' ? 'bg-orange-100 text-orange-800' : 
                              'bg-yellow-100 text-yellow-800'
                            }`}>
                              {disaster.urgency}
                            </span>
                            <h3 className="text-lg font-bold mt-2">{disaster.type} Response</h3>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            disaster.status === 'Ongoing' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                          }`}>
                            {disaster.status}
                          </span>
                        </div>
                        
                        <div className="mt-2 space-y-1">
                          <div className="flex items-center text-gray-600">
                            <MapPin size={16} className="mr-2" />
                            <span>{disaster.location}</span>
                          </div>
                          <div className="flex items-center text-gray-600">
                            <Calendar size={16} className="mr-2" />
                            <span>Started: {new Date(disaster.date).toLocaleDateString()}</span>
                          </div>
                        </div>
                        
                        <div className="mt-3">
                          <p className="text-sm text-gray-600">Skills needed:</p>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {disaster.skills.map(skill => (
                              <span key={skill} className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      {/* Right side - Volunteer status and action */}
                      <div className="bg-gray-50 p-4 flex flex-col justify-between sm:w-48">
                        <div>
                          <div className="text-center mb-3">
                            <span className="text-sm text-gray-600">Volunteers</span>
                            <div className="font-bold text-lg">{disaster.volunteers.registered} / {disaster.volunteers.needed}</div>
                            <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                              <div 
                                className="bg-blue-600 h-2 rounded-full" 
                                style={{ width: `${(disaster.volunteers.registered / disaster.volunteers.needed) * 100}%` }}
                                ></div>
                            </div>
                          </div>
                        </div>
                        
                        <button
                          onClick={() => handleApplyToggle(disaster.id)}
                          className={`w-full py-2 rounded-lg font-medium ${
                            disaster.isApplied 
                              ? 'bg-gray-200 text-gray-800 hover:bg-gray-300' 
                              : 'bg-blue-600 text-white hover:bg-blue-700'
                          } transition duration-200`}
                        >
                          {disaster.isApplied ? 'Withdraw' : 'Volunteer'}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
            
            {/* Government requests section */}
            <section className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Government Requests</h2>
              
              {governmentRequests.length > 0 ? (
                <div className="space-y-4">
                  {governmentRequests.map(request => (
                    <div key={request.id} className={`border-l-4 border-yellow-500 rounded-lg p-4 bg-yellow-50 ${
                      respondedRequests.includes(request.id) ? 'opacity-60' : ''
                    }`}>
                      <div className="flex flex-col md:flex-row justify-between">
                        <div>
                          <h3 className="font-bold text-lg">{request.title}</h3>
                          <p className="text-gray-700 mt-1">{request.description}</p>
                          
                          <div className="mt-3 space-y-1">
                            <div className="flex items-center text-gray-600">
                              <MapPin size={16} className="mr-2" />
                              <span>{request.location}</span>
                            </div>
                            <div className="flex items-center text-gray-600">
                              <Calendar size={16} className="mr-2" />
                              <span>{request.dates}</span>
                            </div>
                            <div className="flex items-center text-gray-600">
                              <Clock size={16} className="mr-2" />
                              <span>Respond by: {request.deadline}</span>
                            </div>
                          </div>
                          
                          <div className="mt-3 flex flex-wrap gap-1">
                            {request.skills.map(skill => (
                              <span key={skill} className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        {!respondedRequests.includes(request.id) && (
                          <div className="mt-4 md:mt-0 flex space-x-2">
                            <button 
                              onClick={() => handleRequestResponse(request.id, true)}
                              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-200"
                            >
                              Accept
                            </button>
                            <button 
                              onClick={() => handleRequestResponse(request.id, false)}
                              className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 transition duration-200"
                            >
                              Decline
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-gray-500">
                  <p>No active government requests at this time.</p>
                </div>
              )}
            </section>
          </div>
          
          {/* Right column - 1/3 width */}
          <div className="w-full md:w-1/3 space-y-6">
            {/* Volunteer stats card */}
            <section className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Your Impact</h2>
              
              <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 p-3 rounded-lg text-center">
                  <span className="block text-2xl font-bold text-blue-700">{volunteerStats.disastersHelped}</span>
                  <span className="text-sm text-gray-600">Disasters Helped</span>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg text-center">
                  <span className="block text-2xl font-bold text-blue-700">{volunteerStats.impactedLives}</span>
                  <span className="text-sm text-gray-600">Lives Impacted</span>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg text-center">
                  <span className="block text-2xl font-bold text-blue-700">{volunteerStats.skillsUtilized}</span>
                  <span className="text-sm text-gray-600">Skills Utilized</span>
                </div>
              </div>
            </section>
            
            {/* Past contributions card */}
            <section className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Past Contributions</h2>
              
              <div className="space-y-4">
                {pastContributions.map(contribution => (
                  <div key={contribution.id} className="border-b pb-4 last:border-b-0">
                    <div className="flex justify-between items-start">
                      <h3 className="font-bold">{contribution.disaster}</h3>
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                        {contribution.status}
                      </span>
                    </div>
                    
                    <div className="mt-2 space-y-1 text-sm text-gray-600">
                      <div className="flex items-center">
                        <MapPin size={14} className="mr-2" />
                        <span>{contribution.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar size={14} className="mr-2" />
                        <span>{contribution.dates}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock size={14} className="mr-2" />
                        <span>{contribution.hoursServed} hours served</span>
                      </div>
                    </div>
                    
                    <div className="mt-3">
                      <p className="text-sm font-medium">Role: {contribution.role}</p>
                      <p className="text-sm text-gray-700 mt-1">{contribution.impact}</p>
                    </div>
                    
                    <div className="mt-3">
                      <button className="text-blue-600 text-sm hover:text-blue-800">
                        View Certificate
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 text-center">
                <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                  View All Contributions
                </button>
              </div>
            </section>
            
            {/* Achievements card */}
            <section className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Achievements</h2>
              
              <div className="space-y-3">
                <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                  <Award className="text-blue-600 mr-3" size={24} />
                  <div>
                    <span className="block font-medium">First Responder</span>
                    <span className="text-sm text-gray-600">Responded to 3+ disasters</span>
                  </div>
                </div>
                
                <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                  <Award className="text-blue-600 mr-3" size={24} />
                  <div>
                    <span className="block font-medium">Community Hero</span>
                    <span className="text-sm text-gray-600">100+ volunteer hours</span>
                  </div>
                </div>
                
                <div className="flex items-center p-3 bg-gray-100 rounded-lg opacity-60">
                  <Award className="text-gray-500 mr-3" size={24} />
                  <div>
                    <span className="block font-medium text-gray-700">Lifesaver</span>
                    <span className="text-sm text-gray-600">Help 500+ people (375 remaining)</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 text-center">
                <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                  View All Achievements
                </button>
              </div>
            </section>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-bold">Disaster Response Volunteer Portal</h3>
              <p className="text-gray-400 text-sm">Making a difference, one disaster at a time</p>
            </div>
            
            <div className="flex space-x-6">
              <a href="#" className="text-gray-300 hover:text-white">About</a>
              <a href="#" className="text-gray-300 hover:text-white">Contact</a>
              <a href="#" className="text-gray-300 hover:text-white">Privacy Policy</a>
              <a href="#" className="text-gray-300 hover:text-white">Terms of Service</a>
            </div>
          </div>
          
          <div className="mt-6 text-center text-gray-400 text-sm">
            © 2025 Disaster Response Network. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default VolunteerDashboard;

// To handle the data after submission
const handleSubmission = (data) => {
  console.log('Submission data:', data);
  // Reset the form or state here
  setDisasters([...initialDisasters]);
  setRespondedRequests([]);
};