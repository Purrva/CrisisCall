// LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  // Sample disaster news items
  const newsItems = [
    {
      id: 1,
      title: 'Earthquake Relief Efforts Underway in Coastal Regions',
      date: 'March 2, 2025',
      summary: 'Rescue teams have been deployed to assist with recovery efforts after a 6.5 magnitude earthquake.'
    },
    {
      id: 2,
      title: 'Flood Warning Issued for Northern Districts',
      date: 'March 4, 2025',
      summary: 'Authorities advise residents to prepare emergency kits and evacuation plans as water levels rise.'
    },
    {
      id: 3,
      title: 'Volunteers Needed for Hurricane Cleanup',
      date: 'March 5, 2025',
      summary: 'Local organizations are seeking volunteers to help with debris removal and supply distribution.'
    }
  ];

  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40" 
          style={{ backgroundImage: "url('/images/disaster-relief.jpg')" }}
        ></div>
        <div className="relative container mx-auto px-4 py-32 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Disaster Relief & Recovery System</h1>
          <h2 className="text-2xl md:text-3xl font-light mb-6">Helping communities rebuild, recover, and reconnect</h2>
          <p className="text-lg max-w-3xl mx-auto mb-8">A comprehensive platform for disaster management, relief coordination, and community support.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/report" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md font-medium transition duration-300">
              <i className="fas fa-exclamation-circle mr-2"></i> Report an Incident
            </Link>
            <Link to="/donate" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md font-medium transition duration-300">
              <i className="fas fa-hand-holding-heart mr-2"></i> Donate Now
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 relative">
            Our Services
            <span className="block w-16 h-1 bg-blue-500 mx-auto mt-4"></span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-2">
              <div className="text-blue-500 text-4xl mb-4">
                <i className="fas fa-hand-holding-heart"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">Donation Portal</h3>
              <p className="text-gray-600">Contribute funds, food, and essential items to those affected by disasters.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-2">
              <div className="text-blue-500 text-4xl mb-4">
                <i className="fas fa-user-friends"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">Volunteer Network</h3>
              <p className="text-gray-600">Join our network of volunteers to assist in rescue and recovery operations.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-2">
              <div className="text-blue-500 text-4xl mb-4">
                <i className="fas fa-exclamation-circle"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">Incident Reporting</h3>
              <p className="text-gray-600">Report damages, locate missing persons, and request emergency assistance.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-2">
              <div className="text-blue-500 text-4xl mb-4">
                <i className="fas fa-robot"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">AI Prediction</h3>
              <p className="text-gray-600">Advanced AI systems to predict disasters and plan efficient resource allocation.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-2">
              <div className="text-blue-500 text-4xl mb-4">
                <i className="fas fa-bell"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">Real-time Alerts</h3>
              <p className="text-gray-600">Receive critical notifications and updates during emergency situations.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-2">
              <div className="text-blue-500 text-4xl mb-4">
                <i className="fas fa-user-md"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">Medical Assistance</h3>
              <p className="text-gray-600">Access remote healthcare consultations and emergency medical resources.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-blue-500 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-4">
              <h2 className="text-4xl font-bold mb-2">500+</h2>
              <p className="text-lg">Volunteers Mobilized</p>
            </div>
            <div className="p-4">
              <h2 className="text-4xl font-bold mb-2">$2.5M</h2>
              <p className="text-lg">Disaster Relief Funds</p>
            </div>
            <div className="p-4">
              <h2 className="text-4xl font-bold mb-2">120</h2>
              <p className="text-lg">Communities Assisted</p>
            </div>
            <div className="p-4">
              <h2 className="text-4xl font-bold mb-2">10,000+</h2>
              <p className="text-lg">People Helped</p>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 relative">
            Latest Updates
            <span className="block w-16 h-1 bg-blue-500 mx-auto mt-4"></span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-10">
            {newsItems.map(item => (
              <div key={item.id} className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
                <div className="p-6">
                  <span className="text-sm text-gray-500 block mb-2">{item.date}</span>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.summary}</p>
                </div>
                <Link to={"/news/${item.id}"} className="block bg-gray-100 text-blue-500 font-medium p-4 hover:bg-gray-200 transition duration-300">
                  Read More <i className="fas fa-arrow-right ml-2"></i>
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/news" className="inline-block border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-medium px-6 py-3 rounded-md transition duration-300">
              View All News <i className="fas fa-arrow-right ml-2"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-20 bg-gray-900 text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30" 
          style={{ backgroundImage: "url('/images/volunteers.jpg')" }}
        ></div>
        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Mission to Help Those in Need</h2>
            <p className="text-lg mb-8">Whether you donate, volunteer, or spread awareness, your contribution matters.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/donate" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md font-medium transition duration-300">
                Donate Now
              </Link>
              <Link to="/volunteer" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md font-medium transition duration-300">
                Become a Volunteer
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;  