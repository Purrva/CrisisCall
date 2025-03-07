import React, { useState } from 'react';
import { BellRing, Users, UserCheck, UserX, ShieldAlert, Stethoscope, DollarSign, TrendingUp, Map, ChevronRight, Menu, X } from 'lucide-react';

// ========== LAYOUT COMPONENTS ==========
const SidebarLink = ({ icon, title, active, onClick }) => {
  return (
    <button 
      onClick={onClick}
      className={`flex items-center w-full px-4 py-3 text-left ${active ? 'bg-blue-900 border-l-4 border-white' : 'hover:bg-blue-700'}`}

    >
      <span className="mr-3">{icon}</span>
      <span>{title}</span>
      {active && <ChevronRight size={16} className="ml-auto" />}
    </button>
  );
};

const Sidebar = ({ sidebarOpen, setSidebarOpen, activePage, setActivePage }) => {
  return (
    <>
      {/* Mobile sidebar toggle */}
      <div className="lg:hidden fixed top-0 left-0 z-50 p-4">
        <button 
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 rounded-md bg-white shadow"
        >
          {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Sidebar */}
      <div className={"${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 fixed lg:static inset-y-0 left-0 z-40 w-64 transition-transform duration-300 ease-in-out transform bg-blue-800 text-white"}>
        <div className="p-4 border-b border-blue-700">
          <h1 className="text-xl font-bold">Disaster Management</h1>
          <p className="text-blue-300 text-sm">Government Portal</p>
        </div>
        
        <nav className="mt-4">
          <SidebarLink 
            icon={<TrendingUp size={18} />} 
            title="Overview" 
            active={activePage === 'overview'} 
            onClick={() => setActivePage('overview')}
          />
          <SidebarLink 
            icon={<UserX size={18} />} 
            title="Missing Persons" 
            active={activePage === 'missing'} 
            onClick={() => setActivePage('missing')}
          />
          <SidebarLink 
            icon={<Stethoscope size={18} />} 
            title="Injured Persons" 
            active={activePage === 'injured'} 
            onClick={() => setActivePage('injured')}
          />
          <SidebarLink 
            icon={<Users size={18} />} 
            title="Personnel & Deployment" 
            active={activePage === 'personnel'} 
            onClick={() => setActivePage('personnel')}
          />
          <SidebarLink 
            icon={<BellRing size={18} />} 
            title="Medical Assistance" 
            active={activePage === 'medical'} 
            onClick={() => setActivePage('medical')}
          />
          <SidebarLink 
            icon={<DollarSign size={18} />} 
            title="Funds Management" 
            active={activePage === 'funds'} 
            onClick={() => setActivePage('funds')}
          />
          <SidebarLink 
            icon={<Map size={18} />} 
            title="Area Mapping" 
            active={activePage === 'mapping'} 
            onClick={() => setActivePage('mapping')}
          />
        </nav>
      </div>
    </>
  );
};

const Header = () => {
  return (
    <header className="bg-white shadow p-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-800">Disaster Response: Cyclone Relief</h2>
        <div className="flex items-center space-x-2">
          <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium">
            ALERT LEVEL: High
          </span>
          <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
            Status: Active
          </span>
        </div>
      </div>
    </header>
  );
};

// ========== SHARED COMPONENTS ==========
const StatCard = ({ title, value, icon, color, subtitle }) => {
  return (
    <div className={"bg-white p-4 rounded-lg shadow border-l-4 border-${color}-500"}>
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm text-gray-500">{title}</p>
          <p className="text-2xl font-bold mt-1">{value}</p>
          {subtitle && <p className="text-xs text-gray-500 mt-1">{subtitle}</p>}
        </div>
        <div className={"bg-${color}-100 p-2 rounded"}>
          {icon}
        </div>
      </div>
    </div>
  );
};

const ProgressBar = ({ label, value, max, color = "blue" }) => {
    const percentage = (value / max) * 100;
  
    return (
      <div className="mb-3">
        <div className="flex justify-between mb-1">
          <span>{label}</span>
          <span>{value}/{max} ({percentage.toFixed(0)}%)</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div 
            className={`bg-${color}-600 h-2.5 rounded-full`} 
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>
    );
  };
  

const MapPlaceholder = ({ height = "h-64", label = "Interactive Map Placeholder" }) => {
  return (
    <div className={"${height} bg-gray-100 rounded flex items-center justify-center"}>
      <p className="text-gray-500">{label}</p>
    </div>
  );
};

const Card = ({ title, children, actionButton }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium">{title}</h3>
        {actionButton}
      </div>
      {children}
    </div>
  );
};

// ========== PAGE COMPONENTS ==========
const OverviewPage = ({ data }) => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard 
          title="Missing Persons" 
          value={data.missing} 
          icon={<UserX className="text-red-500" />}
          color="red"
        />
        <StatCard 
          title="Injured Persons" 
          value={data.injured} 
          icon={<Stethoscope className="text-orange-500" />}
          color="orange"
        />
        <StatCard 
          title="Volunteers" 
          value={data.volunteers} 
          icon={<UserCheck className="text-green-500" />}
          color="green"
        />
        <StatCard 
          title="Soldiers Deployed" 
          value={data.soldiers} 
          icon={<ShieldAlert className="text-blue-500" />}
          color="blue"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="col-span-2">
          <Card title="Affected Areas Overview">
            <MapPlaceholder />
          </Card>
        </div>
        
        <MedicalAssistanceCard data={data.medicalAssistance} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <FundsAllocationCard funds={data.funds} />
        <QuickActionsCard />
      </div>
    </div>
  );
};

// ========== SUB-COMPONENTS ==========
const MedicalAssistanceCard = ({ data }) => {
    const total = data.provided + data.pending;
    const providedPercentage = total > 0 ? (data.provided / total) * 100 : 0; // Prevent division by zero
  
    return (
      <Card title="Medical Assistance">
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Provided</span>
            <span className="font-medium">{data.provided}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div 
              className="bg-green-600 h-2.5 rounded-full" 
              style={{ width: `${providedPercentage}%` }}
            ></div>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Pending</span>
            <span className="font-medium">{data.pending}</span>
          </div>
        </div>
      </Card>
    );
  };
  

  const FundsAllocationCard = ({ funds }) => {
    const utilizedPercentage = funds.total > 0 ? (funds.utilized / funds.total) * 100 : 0; // Prevent division by zero
  
    return (
      <Card title="Funds Allocation">
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Total Funds</span>
            <span className="font-medium">${(funds.total / 1000000).toFixed(2)}M</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Utilized</span>
            <span className="font-medium">${(funds.utilized / 1000000).toFixed(2)}M</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div 
              className="bg-blue-600 h-2.5 rounded-full" 
              style={{ width: `${utilizedPercentage}%` }}
            ></div>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Remaining</span>
            <span className="font-medium">${(funds.remaining / 1000000).toFixed(2)}M</span>
          </div>
        </div>
      </Card>
    );
  };
  

const QuickActionsCard = () => {
  return (
    <Card title="Quick Actions">
      <div className="grid grid-cols-2 gap-2">
        <button className="p-3 bg-blue-100 text-blue-700 rounded-lg text-sm font-medium hover:bg-blue-200 transition">
          Request Additional Resources
        </button>
        <button className="p-3 bg-green-100 text-green-700 rounded-lg text-sm font-medium hover:bg-green-200 transition">
          Update Situation Report
        </button>
        <button className="p-3 bg-purple-100 text-purple-700 rounded-lg text-sm font-medium hover:bg-purple-200 transition">
          Alert Rescue Teams
        </button>
        <button className="p-3 bg-yellow-100 text-yellow-700 rounded-lg text-sm font-medium hover:bg-yellow-200 transition">
          Send Public Alert
        </button>
      </div>
    </Card>
  );
};

// ========== MISSING PERSONS PAGE COMPONENTS ==========
const MissingPersonsSearchBar = () => {
  return (
    <div className="flex justify-between items-center space-x-4 bg-white p-4 rounded-lg shadow">
      <input 
        type="text" 
        placeholder="Search by name, ID, or location..."
        className="flex-1 p-2 border border-gray-300 rounded-md"
      />
      <select className="p-2 border border-gray-300 rounded-md">
        <option>All Statuses</option>
        <option>Active</option>
        <option>Found</option>
        <option>Deceased</option>
      </select>
      <button className="px-4 py-2 bg-blue-100 text-blue-700 rounded-md hover:bg-blue-200">
        Filter
      </button>
    </div>
  );
};

const MissingPersonsTable = ({ persons }) => {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Age/Gender</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Seen</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reported By</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {persons.map((person) => (
            <tr key={person.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{person.id}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.name}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.age} / {person.gender}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.lastSeen}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.reportedBy} ({person.contact})</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                  ${person.status === 'Active' ? 'bg-red-100 text-red-800' : 
                    person.status === 'Found' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                  {person.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <button className="text-blue-600 hover:text-blue-900 mr-3">Details</button>
                <button className="text-blue-600 hover:text-blue-900">Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const Pagination = ({ totalItems, itemsPerPage = 5 }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  
  return (
    <div className="flex justify-between items-center">
      <div className="text-sm text-gray-700">
        Showing <span className="font-medium">1</span> to <span className="font-medium">{Math.min(itemsPerPage, totalItems)}</span> of <span className="font-medium">{totalItems}</span> results
      </div>
      <div className="flex space-x-2">
        <button className="px-3 py-1 border border-gray-300 rounded-md">Previous</button>
        <button className="px-3 py-1 bg-blue-600 text-white rounded-md">1</button>
        {totalPages > 1 && <button className="px-3 py-1 border border-gray-300 rounded-md">2</button>}
        {totalPages > 2 && <button className="px-3 py-1 border border-gray-300 rounded-md">3</button>}
        {totalPages > 3 && <button className="px-3 py-1 border border-gray-300 rounded-md">Next</button>}
      </div>
    </div>
  );
};

const MissingPersonsPage = () => {
  const missingPersons = [
    { id: 'MP001', name: 'John Doe', age: 32, gender: 'Male', lastSeen: 'Central District', reportedBy: 'Jane Doe', contact: '555-0123', status: 'Active' },
    { id: 'MP002', name: 'Sarah Smith', age: 28, gender: 'Female', lastSeen: 'Riverside Area', reportedBy: 'Michael Smith', contact: '555-0124', status: 'Active' },
    { id: 'MP003', name: 'David Johnson', age: 45, gender: 'Male', lastSeen: 'North Market', reportedBy: 'Lisa Johnson', contact: '555-0125', status: 'Found' },
    { id: 'MP004', name: 'Emily Wilson', age: 22, gender: 'Female', lastSeen: 'University Campus', reportedBy: 'Robert Wilson', contact: '555-0126', status: 'Active' },
    { id: 'MP005', name: 'James Brown', age: 57, gender: 'Male', lastSeen: 'Industrial Zone', reportedBy: 'Patricia Brown', contact: '555-0127', status: 'Active' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Missing Persons Registry</h2>
        <div className="flex space-x-2">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Add New Report
          </button>
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300">
            Export Data
          </button>
        </div>
      </div>

      <MissingPersonsSearchBar />
      <MissingPersonsTable persons={missingPersons} />
      <Pagination totalItems={127} />
    </div>
  );
};

// ========== INJURED PERSONS PAGE COMPONENTS ==========
const InjuredPersonsStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <div className="bg-white p-4 rounded-lg shadow flex flex-col items-center">
        <div className="text-red-500 text-2xl font-bold">78</div>
        <div className="text-gray-500">Critical</div>
      </div>
      <div className="bg-white p-4 rounded-lg shadow flex flex-col items-center">
        <div className="text-orange-500 text-2xl font-bold">124</div>
        <div className="text-gray-500">Moderate</div>
      </div>
      <div className="bg-white p-4 rounded-lg shadow flex flex-col items-center">
        <div className="text-yellow-500 text-2xl font-bold">140</div>
        <div className="text-gray-500">Minor</div>
      </div>
      <div className="bg-white p-4 rounded-lg shadow flex flex-col items-center">
        <div className="text-green-500 text-2xl font-bold">86</div>
        <div className="text-gray-500">Recovered</div>
      </div>
    </div>
  );
};

const FacilityOccupancyCard = () => {
  const facilities = [
    { name: 'Central Hospital', current: 147, total: 160, percentage: 92, status: 'red' },
    { name: 'East Medical Center', current: 78, total: 100, percentage: 78, status: 'orange' },
    { name: 'West Emergency Clinic', current: 59, total: 70, percentage: 85, status: 'orange' },
    { name: 'South Field Hospital', current: 58, total: 95, percentage: 62, status: 'yellow' }
  ];

  return (
    <Card title="Facility Occupancy">
      <div className="space-y-4">
        {facilities.map((facility, index) => (
          <div key={index}>
            <div className="flex justify-between mb-1">
              <span>{facility.name}</span>
              <span>{facility.percentage}% ({facility.current}/{facility.total})</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className={"bg-${facility.status}-500 h-2.5 rounded-full} style={{ width: ${facility.percentage}% "}></div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

const MedicalResourcesCard = () => {
  const resources = [
    { name: 'IV Fluids', status: 'Critical', amount: '230 units', timeframe: 'Needed immediately', color: 'red' },
    { name: 'Antibiotics', status: 'Moderate', amount: '450 units', timeframe: 'Needed within 48 hours', color: 'orange' },
    { name: 'Bandages', status: 'Low', amount: '1,200 units', timeframe: 'Needed within 72 hours', color: 'yellow' },
    { name: 'Pain Medication', status: 'Moderate', amount: '520 units', timeframe: 'Needed within 48 hours', color: 'orange' }
  ];

  return (
    <Card 
      title="Required Medical Resources" 
      actionButton={
        <button className="px-3 py-1 bg-blue-100 text-blue-700 rounded-md text-sm">Request Supplies</button>
      }
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {resources.map((resource, index) => (
            <>
          <div key={index} className="border border-gray-200 rounded-md p-3">
            <div className="flex justify-between">
              <span className="text-gray-500">{resource.name}</span>
              <span className={"text-${resource.color}-500 font-medium"}>{resource.status}</span>
            </div>
            <div className="text-xl font-bold mt-1">{resource.amount}</div>
            <div className="text-sm text-gray-500">{resource.timeframe}</div>
          </div>
            </>
        ))}
      </div>
    </Card>
  );
};

const InjuredPersonsPage = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Injured Persons Registry</h2>
        <div className="flex space-x-2">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Add New Patient
          </button>
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300">
            Export Data
          </button>
        </div>
      </div>

      <InjuredPersonsStats />
      <FacilityOccupancyCard />
      <MedicalResourcesCard />
    </div>
  );
};

// ========== PERSONNEL PAGE COMPONENTS ==========
const PersonnelDistributionCard = () => {
    const districts = [
      { name: 'Central District', percentage: 35, personnel: 267 },
      { name: 'Eastern Zone', percentage: 25, personnel: 191 },
      { name: 'Western Area', percentage: 20, personnel: 152 },
      { name: 'Southern Region', percentage: 15, personnel: 115 },
      { name: 'Northern District', percentage: 5, personnel: 38 }
    ];
  
    return (
      <Card title="Personnel Distribution">
        <div className="space-y-4">
          {districts.map((district, index) => (
            <div key={index}>
              <div className="flex justify-between mb-1">
                <span>{district.name}</span>
                <span>{district.percentage}% ({district.personnel} personnel)</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className="bg-blue-600 h-2.5 rounded-full" 
                  style={{ width: `${district.percentage}%` }} 
                ></div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    );
  };
  
const RescueOperationsTable = () => {
  const operations = [
    { id: 'OP-2145', location: 'Central Market Area', personnel: 35, status: 'Active', started: '2023-09-10 08:45' },
    { id: 'OP-2146', location: 'Riverside Community', personnel: 28, status: 'Active', started: '2023-09-10 09:30' },
    { id: 'OP-2147', location: 'Eastern District', personnel: 42, status: 'Pending', started: '2023-09-10 10:15' }
  ];

  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Operation ID</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Personnel</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Started</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {operations.map((op) => (
          <tr key={op.id}>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{op.id}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{op.location}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{op.personnel}</td>
            <td className="px-6 py-4 whitespace-nowrap">
              <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                ${op.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                {op.status}
              </span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{op.started}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              <button className="text-blue-600 hover:text-blue-900 mr-3">Details</button>
              <button className="text-blue-600 hover:text-blue-900">Update</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const PersonnelPage = () => {
  const summaryData = {
    volunteers: 508,
    soldiers: 215,
    medicalStaff: 137,
    rescueTeams: 42
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Personnel & Deployment</h2>
        <div className="flex space-x-2">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Deploy Units
          </button>
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300">
            Request Reinforcements
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard 
          title="Volunteers" 
          value={summaryData.volunteers} 
          icon={<UserCheck className="text-green-500" />}
          color="green"
          subtitle="Active in field"
        />
        <StatCard 
          title="Soldiers" 
          value={summaryData.soldiers} 
          icon={<ShieldAlert className="text-blue-500" />}
          color="blue"
          subtitle="Military deployment"
        />
        <StatCard 
          title="Medical Staff" 
          value={summaryData.medicalStaff} 
          icon={<Stethoscope className="text-purple-500" />}
          color="purple"
          subtitle="Doctors & nurses"
        />
        <StatCard 
          title="Rescue Teams" 
          value={summaryData.rescueTeams} 
          icon={<Users className="text-orange-500" />}
          color="orange"
          subtitle="Search & rescue units"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card title="Active Rescue Operations">
          <RescueOperationsTable />
        </Card>
        <PersonnelDistributionCard />
      </div>

      <Card 
        title="Personnel Deployment Map" 
        actionButton={
          <button className="px-3 py-1 bg-blue-100 text-blue-700 rounded-md text-sm">View Full Map</button>
        }
      >
        <MapPlaceholder height="h-96" label="Interactive Personnel Deployment Map" />
      </Card>
    </div>
  );
};

// ========== MAIN APP COMPONENT ==========
const DisasterManagementDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activePage, setActivePage] = useState('overview');

  // Sample data
  const dashboardData = {
    missing: 127,
    injured: 342,
    volunteers: 508,
    soldiers: 215,
    medicalAssistance: {
      provided: 156,
      pending: 45
    },
    funds: {
      total: 5000000,
      utilized: 1750000,
      remaining: 3250000
    }
  };

  // Render active page component
  const renderActivePage = () => {
    switch(activePage) {
      case 'missing':
        return <MissingPersonsPage />;
      case 'injured':
        return <InjuredPersonsPage />;
      case 'personnel':
        return <PersonnelPage />;
      case 'overview':
      default:
        return <OverviewPage data={dashboardData} />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar 
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        activePage={activePage}
        setActivePage={setActivePage}
      />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        
        <main className="flex-1 overflow-y-auto p-4">
          {renderActivePage()}
        </main>
      </div>
    </div>
  );
};

export default DisasterManagementDashboard;