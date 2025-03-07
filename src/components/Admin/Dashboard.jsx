import React from "react";
import { Link } from "react-router-dom";
import SevereNeedsList from "../SevereNeedsList";

const Dashboard = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            <header className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-6 px-8 shadow-lg">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <h1 className="text-3xl font-bold tracking-tight">
                        Disaster Management Dashboard
                    </h1>
                    <nav className="space-x-6">
                        <Link 
                            to="/" 
                            className="hover:bg-blue-500 px-4 py-2 rounded-lg transition-all duration-200"
                        >
                            Overview
                        </Link>
                        <Link 
                            to="/reports" 
                            className="hover:bg-blue-500 px-4 py-2 rounded-lg transition-all duration-200"
                        >
                            Reports
                        </Link>
                        <Link 
                            to="/help"
                            className="bg-red-500 hover:bg-red-400 px-4 py-2 rounded-lg transition-all duration-200"
                        >
                            Help
                        </Link>
                    </nav>
                </div>
            </header>

            <main className="max-w-7xl mx-auto p-8">
                <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-semibold text-gray-800">
                            Critical Needs Overview
                        </h2>
                        <button 
                            onClick={() => window.location.reload()} 
                            className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg transition-all duration-200"
                        >
                            Refresh Data
                        </button>
                    </div>
                    <SevereNeedsList />
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
