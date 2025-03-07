import React, { useState, useEffect } from "react";
import axios from "axios";

const SevereNeedsList = () => {
    const [locations, setLocations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(15);
    const [searchTerm, setSearchTerm] = useState("");
    const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            setLoading(true);
            const response = await axios.get("http://localhost:8000/severe-needs/");
            setLocations(response.data);
            setError(null);
        } catch (err) {
            setError("Failed to load data. Please try again later.");
            console.error("Error fetching data:", err);
        } finally {
            setLoading(false);
        }
    };

    // Sorting function
    const sortData = (key) => {
        let direction = "asc";
        if (sortConfig.key === key && sortConfig.direction === "asc") {
            direction = "desc";
        }
        setSortConfig({ key, direction });
    };

    // Filter and sort data
    const filteredAndSortedData = React.useMemo(() => {
        let processedData = [...locations];

        // Filter
        if (searchTerm) {
            processedData = processedData.filter((item) =>
                item.Location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.Disaster_Type.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        // Sort
        if (sortConfig.key) {
            processedData.sort((a, b) => {
                if (a[sortConfig.key] < b[sortConfig.key]) {
                    return sortConfig.direction === "asc" ? -1 : 1;
                }
                if (a[sortConfig.key] > b[sortConfig.key]) {
                    return sortConfig.direction === "asc" ? 1 : -1;
                }
                return 0;
            });
        }

        return processedData;
    }, [locations, searchTerm, sortConfig]);

    // Pagination calculations
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredAndSortedData.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredAndSortedData.length / itemsPerPage);

    // Simplified Severity level colors (1-10 scale)
    const getSeverityColor = (value) => {
        const numValue = Number(value);
        if (numValue >= 8) return "bg-red-200 text-red-900";
        if (numValue >= 6) return "bg-red-200 text-red-800";
        if (numValue >= 4) return "bg-orange-200 text-orange-800";
        return "bg-green-200 text-green-800";
    };

    const getSeverityText = (value) => {
        const numValue = Number(value);
        if (numValue >= 8) return "Critical";
        if (numValue >= 6) return "Severe";
        if (numValue >= 4) return "Moderate";
        return "Low";
    };

    // Simplified binary status colors (1 or 0)
    const getValueColor = (value) => {
        const numValue = Number(value);
        return numValue === 1 
            ? "bg-red-200 text-red-900"
            : "bg-green-200 text-green-800";
    };

    const getValueText = (value) => {
        const numValue = Number(value);
        return numValue === 1 ? "High" : "Low";
    };

    return (
        <div className="space-y-4">
            {/* Error Message */}
            {error && (
                <div className="bg-red-50 border-l-4 border-red-400 p-4">
                    <p className="text-sm text-red-700">{error}</p>
                </div>
            )}

            {/* Search Bar */}
            <div className="flex justify-between items-center mb-4">
                <input
                    type="text"
                    placeholder="Search by Location or Disaster Type..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className="overflow-x-auto bg-white rounded-lg shadow">
                {loading ? (
                    <div className="flex justify-center items-center h-64">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                    </div>
                ) : (
                    <>
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead>
                                <tr>
                                    {["Location", "Disaster Type", "Severity Level", "Food Need", "Medical Aid Need", "Rescue Teams Need"].map((header, index) => (
                                        <th
                                            key={index}
                                            onClick={() => sortData(header.replace(/\s/g, '_'))}
                                            className="px-6 py-4 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                                        >
                                            <div className="flex items-center space-x-1">
                                                <span>{header}</span>
                                                {sortConfig.key === header.replace(/\s/g, '_') && (
                                                    <span className="text-gray-400">
                                                        {sortConfig.direction === 'asc' ? '↑' : '↓'}
                                                    </span>
                                                )}
                                            </div>
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {currentItems.map((location, index) => (
                                    <tr 
                                        key={index}
                                        className="hover:bg-gray-50 transition-colors duration-200"
                                    >
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                            {location.Location}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                            {location.Disaster_Type}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                                            <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getSeverityColor(location.Severity_Level)}`}>
                                                {getSeverityText(location.Severity_Level)} ({location.Severity_Level})
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                                            <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getValueColor(location.Food_Need)}`}>
                                                {getValueText(location.Food_Need)}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                                            <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getValueColor(location.Medical_Aid_Need)}`}>
                                                {getValueText(location.Medical_Aid_Need)}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                                            <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getValueColor(location.Rescue_Teams_Need)}`}>
                                                {getValueText(location.Rescue_Teams_Need)}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        {/* Pagination */}
                        <div className="flex justify-center items-center space-x-2 mt-4 pb-4">
                            <button
                                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                                disabled={currentPage === 1}
                                className={`px-4 py-2 rounded-lg ${
                                    currentPage === 1
                                        ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                                        : "bg-blue-600 text-white hover:bg-blue-500"
                                }`}
                            >
                                Previous
                            </button>

                            <span className="text-gray-600">
                                Page {currentPage} of {totalPages}
                            </span>

                            <button
                                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                                disabled={currentPage === totalPages}
                                className={`px-4 py-2 rounded-lg ${
                                    currentPage === totalPages
                                        ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                                        : "bg-blue-600 text-white hover:bg-blue-500"
                                }`}
                            >
                                Next
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default SevereNeedsList;
