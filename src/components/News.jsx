import React, { useState } from 'react';

const DisasterReliefNewsPage = () => {
  // Sample data for news articles
  const newsArticles = [
    {
      id: 1,
      title: "Cyclone Nilam Approaching Tamil Nadu Coast",
      date: "October 27, 2024",
      category: "Emergency",
      excerpt: "IMD has issued a red alert for coastal Tamil Nadu as Cyclone Nilam is expected to make landfall near Chennai within 24 hours. Wind speeds may reach 120-130 km/h. NDRF teams have been deployed in vulnerable areas.",
      hasImage: true
    },
    {
      id: 2,
      title: "Flash Floods in Uttarakhand: 3 Districts Affected",
      date: "October 25, 2024",
      category: "Ongoing",
      excerpt: "Heavy rainfall has triggered flash floods in Chamoli, Rudraprayag, and Uttarkashi districts. Over 1,500 people have been evacuated to relief camps. Army and SDRF conducting rescue operations in affected areas."
    },
    {
      id: 3,
      title: "Maharashtra Drought: Water Crisis Intensifies in Marathwada",
      date: "October 23, 2024",
      category: "Ongoing",
      excerpt: "Marathwada region continues to face severe water shortage as reservoirs reach critical levels. State government has deployed water tankers to 732 villages. Agriculture sector reports losses estimated at ₹4,200 crores."
    },
    {
      id: 4,
      title: "Assam Flood Update: Brahmaputra River Above Danger Mark",
      date: "October 22, 2024",
      category: "Alert",
      excerpt: "The Brahmaputra and five other rivers are flowing above danger levels in Assam. Over 3.4 lakh people across 12 districts have been affected. Relief camps established in Dhemaji, Lakhimpur, and Majuli districts."
    }
  ];

  // Sample data for blog articles
  const blogArticles = [
    {
      id: 1,
      title: "Preparing for the Monsoon Season: Essential Tips",
      date: "October 20, 2024",
      author: "Dr. Rajesh Kumar, Disaster Management Expert",
      excerpt: "The annual monsoon brings relief from summer heat but also increases flood risks across India. Learn how to prepare your family and home with these expert-recommended safety measures..."
    },
    {
      id: 2,
      title: "How AI is Revolutionizing Disaster Prediction in India",
      date: "October 18, 2024",
      author: "Priya Sharma, Technology Analyst",
      excerpt: "Recent advancements in artificial intelligence are helping meteorological departments predict disasters with greater accuracy. The IMD's new AI models have improved cyclone path predictions by 27%..."
    },
    {
      id: 3,
      title: "Building Earthquake-Resistant Homes: Lessons from Gujarat",
      date: "October 15, 2024",
      author: "Arun Patel, Civil Engineer",
      excerpt: "Twenty years after the devastating Bhuj earthquake, Gujarat has emerged as a model for earthquake-resistant construction. This article explores the building techniques and policies that have transformed the region's resilience..."
    }
  ];

  // Sample data for active alerts
  const activeAlerts = [
    { id: 1, severity: "red", region: "Tamil Nadu, Andhra Pradesh", type: "Cyclone Warning" },
    { id: 2, severity: "orange", region: "Uttarakhand, Himachal Pradesh", type: "Heavy Rainfall" },
    { id: 3, severity: "yellow", region: "Assam Region", type: "Earthquake Aftershocks" },
    { id: 4, severity: "blue", region: "Mumbai Metropolitan Area", type: "Urban Flooding" },
    { id: 5, severity: "orange", region: "Rajasthan, Gujarat Border", type: "Heat Wave" },
    { id: 6, severity: "yellow", region: "Kashmir Valley", type: "Landslide Risk" }
  ];

  // Sample disaster statistics
  const disasterStats = [
    { label: "Affected Population", value: "217,843" },
    { label: "Evacuated", value: "43,219" },
    { label: "Relief Camps", value: "312" },
    { label: "NDRF Teams Deployed", value: "76" },
    { label: "Rescue Operations", value: "124" },
    { label: "Relief Funds Released", value: "₹1,250 Cr" }
  ];

  // State for switching between news and blogs tab on mobile
  const [activeTab, setActiveTab] = useState('news');

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Header Section */}
      <header className="bg-blue-700 text-white shadow-md">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="logo">
              <h1 className="text-2xl font-bold">DisasterRelief India</h1>
            </div>
            <nav className="hidden md:block">
              <ul className="flex space-x-6">
                <li><a href="#" className="hover:text-blue-200">Home</a></li>
                <li><a href="#" className="hover:text-blue-200">News</a></li>
                <li><a href="#" className="hover:text-blue-200">Blogs</a></li>
                <li><a href="#" className="hover:text-blue-200">Resources</a></li>
                <li><a href="#" className="hover:text-blue-200">Login</a></li>
              </ul>
            </nav>
            <button className="md:hidden text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Emergency Alert Banner */}
      <div className="bg-red-600 text-white py-2 px-4 text-center font-bold">
        <p>ALERT: Cyclone Alert for Tamil Nadu & Andhra Pradesh Coast - Evacuation in progress</p>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 pb-2 border-b-2 border-blue-600">Latest News & Updates</h1>
        
        {/* Mobile Tabs */}
        <div className="flex mb-4 md:hidden">
          <button 
            className={`flex-1 py-2 ${activeTab === 'news' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            onClick={() => setActiveTab('news')}
          >
            News
          </button>
          <button 
            className={`flex-1 py-2 ${activeTab === 'blogs' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            onClick={() => setActiveTab('blogs')}
          >
            Blogs
          </button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Area - News and Blogs */}
          <div className={`lg:col-span-2 ${activeTab !== 'news' && activeTab !== 'blogs' ? '' : activeTab === 'news' ? '' : 'hidden md:block'}`}>
            {/* Latest News Section */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-700">Breaking News</h2>
              
              {newsArticles.map(article => (
                <div key={article.id} className="bg-white rounded-lg shadow-md p-6 mb-6">
                  <h3 className="text-xl font-bold text-blue-800 mb-2">{article.title}</h3>
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span className="mr-3">{article.date}</span>
                    <span className={`text-xs px-2 py-1 rounded ${
                      article.category === 'Emergency' ? 'bg-red-100 text-red-800' : 
                      article.category === 'Ongoing' ? 'bg-orange-100 text-orange-800' : 
                      'bg-yellow-100 text-yellow-800'
                    }`}>{article.category}</span>
                  </div>
                  <p className="mb-4">{article.excerpt}</p>
                  {article.hasImage && (
                    <div className="mb-4">
                      <img src="/api/placeholder/600/300" alt={article.title} className="w-full h-48 object-cover rounded" />
                    </div>
                  )}
                  <a href="#" className="text-blue-600 hover:underline font-medium">Read more →</a>
                </div>
              ))}
            </section>
          </div>
          
          {/* Blog Section */}
          <div className={`lg:col-span-2 ${activeTab !== 'news' && activeTab !== 'blogs' ? '' : activeTab === 'blogs' ? '' : 'hidden md:block'}`}>
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-blue-700">Featured Blogs</h2>
              
              {blogArticles.map(blog => (
                <div key={blog.id} className="bg-white rounded-lg shadow-md p-6 mb-6">
                  <h3 className="text-xl font-bold text-blue-800 mb-2">{blog.title}</h3>
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span className="mr-3">{blog.date}</span>
                    <span className="mr-3">By {blog.author}</span>
                  </div>
                  <p className="mb-4">{blog.excerpt}</p>
                  <a href="#" className="text-blue-600 hover:underline font-medium">Continue reading →</a>
                </div>
              ))}
            </section>
          </div>
            
          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Current Alerts */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4 text-blue-700">Active Alerts</h2>
              <ul className="space-y-3">
                {activeAlerts.map(alert => (
                  <li key={alert.id} className="flex items-center">
                    <span className={`w-3 h-3 rounded-full mr-2 ${
                      alert.severity === 'red' ? 'bg-red-500' : 
                      alert.severity === 'orange' ? 'bg-orange-500' : 
                      alert.severity === 'yellow' ? 'bg-yellow-500' : 
                      'bg-blue-500'
                    }`}></span>
                    <span>{alert.type}: {alert.region}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Resources Section */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4 text-blue-700">Emergency Resources</h2>
              <ul className="space-y-3">
                <li className="p-2 bg-gray-50 rounded">
                  <a href="#" className="flex items-center text-blue-700 hover:underline">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                    </svg>
                    Emergency Contact Numbers
                  </a>
                </li>
                <li className="p-2 bg-gray-50 rounded">
                  <a href="#" className="flex items-center text-blue-700 hover:underline">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                    </svg>
                    Evacuation Centers Map
                  </a>
                </li>
                <li className="p-2 bg-gray-50 rounded">
                  <a href="#" className="flex items-center text-blue-700 hover:underline">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                    </svg>
                    Disaster Preparedness Guide
                  </a>
                </li>
                <li className="p-2 bg-gray-50 rounded">
                  <a href="#" className="flex items-center text-blue-700 hover:underline">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path>
                    </svg>
                    Report an Emergency
                  </a>
                </li>
                <li className="p-2 bg-gray-50 rounded">
                  <a href="#" className="flex items-center text-blue-700 hover:underline">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path>
                    </svg>
                    SMS Alerts Registration
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Statistics */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4 text-blue-700">Disaster Impact: 2024</h2>
              <div className="space-y-4">
                {disasterStats.map((stat, index) => (
                  <div key={index}>
                    <h3 className="text-sm font-medium text-gray-500">{stat.label}</h3>
                    <p className="text-2xl font-bold">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-blue-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">DisasterRelief India</h3>
              <p className="text-blue-200">Providing timely information and assistance during disasters across India.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-blue-200 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white">Contact</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
              <p className="text-blue-200 mb-2">Emergency Helpline: 1078</p>
              <p className="text-blue-200">Email: info@disasterrelief-india.org</p>
            </div>
          </div>
          <div className="mt-8 pt-4 border-t border-blue-700 text-center text-blue-200">
            <p>&copy; 2024 DisasterRelief India. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DisasterReliefNewsPage;