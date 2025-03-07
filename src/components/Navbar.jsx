import React from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    <nav className="bg-blue-500 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-white font-bold text-xl">
                <i className="fas fa-hands-helping mr-2"></i>
                DisasterRelief
              </span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="flex items-center">
            <div className="flex space-x-4">
              <Link to="/" className="text-white hover:bg-blue-600 px-3 py-2 rounded-md font-medium">
                Home
              </Link>
              <Link to="/report-disaster" className="text-white hover:bg-blue-600 px-3 py-2 rounded-md font-medium">
                Reporting 
              </Link>
              <Link to="/donation" className="text-white hover:bg-blue-600 px-3 py-2 rounded-md font-medium">
                Donate
              </Link>
              <Link to="/volunteering" className="text-white hover:bg-blue-600 px-3 py-2 rounded-md font-medium">
                Volunteer
              </Link>
              <Link to="/medical" className="text-white hover:bg-blue-600 px-3 py-2 rounded-md font-medium">
                Medical Help
              </Link>
              <Link to="/ai-tools" className="text-white hover:bg-blue-600 px-3 py-2 rounded-md font-medium">
                AI Tools
              </Link>
              <Link to="/news" className="text-white hover:bg-blue-600 px-3 py-2 rounded-md font-medium">
                News
              </Link>
            </div>
            <button className="ml-4 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md font-medium transition duration-300 transform hover:scale-105">
              <i className="fas fa-exclamation-triangle mr-2"></i> Emergency Help
            </button>
          </div>
        </div>
      </div>
    </nav>

    <Outlet/>
    </>
  );
};

export default Navbar;
