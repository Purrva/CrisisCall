import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="max-w-6xl mx-auto px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Disaster Response Portal</h3>
            <p className="text-gray-400">
              Helping communities coordinate and recover during times of crisis.
            </p>
          </div>
          <div>
            <h4 className="text-md font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/resources" className="text-gray-400 hover:text-white">Find Resources</Link></li>
              <li><Link to="/all-reports" className="text-gray-400 hover:text-white">View All Reports</Link></li>
              <li><Link to="/volunteer" className="text-gray-400 hover:text-white">Become a Volunteer</Link></li>
              <li><Link to="/donate" className="text-gray-400 hover:text-white">Donate Supplies</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-md font-bold mb-4">Information</h4>
            <ul className="space-y-2">
              <li><Link to="/alerts" className="text-gray-400 hover:text-white">Current Alerts</Link></li>
              <li><Link to="/news" className="text-gray-400 hover:text-white">Latest Updates</Link></li>
              <li><Link to="/recovery" className="text-gray-400 hover:text-white">Recovery Status</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-white">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-md font-bold mb-4">Connect</h4>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-linkedin-in"></i></a>
            </div>
            <p className="text-gray-400">
              <i className="fas fa-envelope mr-2"></i> contact@disasterresponse.org
            </p>
            <p className="text-gray-400">
              <i className="fas fa-phone mr-2"></i> 24/7 Hotline: 1-800-555-0123
            </p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Disaster Response Portal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;