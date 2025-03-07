// DonationPage.js
import React, { useState } from 'react';

const DonationPage = () => {
  const [donationType, setDonationType] = useState('money');
  const [amount, setAmount] = useState('');
  const [itemCategory, setItemCategory] = useState('');
  const [itemDescription, setItemDescription] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [anonymous, setAnonymous] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create data object to log
    const donationData = {
      donationType,
      ...(donationType === 'money' ? { amount } : { itemCategory, itemDescription }),
      name: anonymous ? 'Anonymous' : name,
      email,
      phone,
      anonymous,
      timestamp: new Date().toISOString()
    };
    
    // Console log the data
    console.log('Donation submitted:', donationData);
    
    // Here you would integrate with a payment gateway or donation API
    alert('Thank you for your donation! We appreciate your support.');
    
    // Reset form
    setAmount('');
    setItemCategory('');
    setItemDescription('');
    setName('');
    setEmail('');
    setPhone('');
    setAnonymous(false);
  };

  // Sample donation categories for items
  const itemCategories = [
    { id: 'food', name: 'Food & Water', icon: 'utensils' },
    { id: 'clothing', name: 'Clothing & Blankets', icon: 'tshirt' },
    { id: 'medical', name: 'Medical Supplies', icon: 'medkit' },
    { id: 'hygiene', name: 'Hygiene Products', icon: 'soap' },
    { id: 'shelter', name: 'Shelter Materials', icon: 'home' },
    { id: 'baby', name: 'Baby Supplies', icon: 'baby' },
    { id: 'other', name: 'Other Items', icon: 'box' }
  ];

  // Recent donations (would come from API in real implementation)
  const recentDonations = [
    { id: 1, name: 'John D.', type: 'money', amount: '$250', date: '03/05/2025' },
    { id: 2, name: 'Anonymous', type: 'item', item: 'Medical Supplies', date: '03/04/2025' },
    { id: 3, name: 'Sarah M.', type: 'money', amount: '$500', date: '03/04/2025' },
    { id: 4, name: 'David R.', type: 'item', item: 'Food Packages (50)', date: '03/03/2025' },
    { id: 5, name: 'Anonymous', type: 'money', amount: '$100', date: '03/03/2025' }
  ];

  // Donation impact statistics
  const impactStats = [
    { id: 'meals', value: '15,000+', label: 'Meals Provided', icon: 'utensils' },
    { id: 'families', value: '850+', label: 'Families Sheltered', icon: 'home' },
    { id: 'medical', value: '3,200+', label: 'Medical Kits Distributed', icon: 'medkit' },
    { id: 'children', value: '5,000+', label: 'Children Assisted', icon: 'child' }
  ];

  // Most needed items
  const mostNeededItems = [
    { id: 1, name: 'Canned Food', category: 'food', urgency: 'High' },
    { id: 2, name: 'Blankets', category: 'clothing', urgency: 'High' },
    { id: 3, name: 'First Aid Kits', category: 'medical', urgency: 'Critical' },
    { id: 4, name: 'Bottled Water', category: 'food', urgency: 'Critical' },
    { id: 5, name: 'Diapers', category: 'baby', urgency: 'Medium' },
    { id: 6, name: 'Soap & Sanitizer', category: 'hygiene', urgency: 'Medium' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Make a Difference Today</h1>
          <p className="text-xl max-w-3xl mx-auto">Your contribution provides essential resources to communities affected by disasters</p>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 relative">
            Your Donation's Impact
            <span className="block w-16 h-1 bg-blue-500 mx-auto mt-4"></span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {impactStats.map(stat => (
              <div key={stat.id} className="p-6 bg-gray-50 rounded-lg shadow-md">
                <div className="text-blue-500 text-4xl mb-4">
                <i className={`fas fa-${stat.icon}`}></i>
                </div>
                <h3 className="text-2xl font-bold mb-2">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Form Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Donation Form */}
            <div className="lg:w-2/3 bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold mb-6">Support Our Relief Efforts</h2>
              
              {/* Donation Type Tabs */}
              <div className="flex mb-8 border-b">
                <button 
                  className={`py-3 px-6 font-medium ${donationType === 'money' 
                    ? 'text-blue-500 border-b-2 border-blue-500' 
                    : 'text-gray-500 hover:text-gray-700'}`}
                  onClick={() => setDonationType('money')}
                >
                  <i className="fas fa-dollar-sign mr-2"></i> Monetary Donation
                </button>
                <button 
                  className={`py-3 px-6 font-medium ${donationType === 'items' 
                    ? 'text-blue-500 border-b-2 border-blue-500' 
                    : 'text-gray-500 hover:text-gray-700'}`}
                  onClick={() => setDonationType('items')}
                >
                  <i className="fas fa-box-open mr-2"></i> Donate Items
                </button>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {donationType === 'money' ? (
                  <div>
                    <label className="block text-gray-700 font-medium mb-3">Select Amount</label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                      <button 
                        type="button" 
                        className={`py-3 px-4 rounded-md border-2 ${
                          amount === '25' 
                            ? 'bg-blue-500 text-white border-blue-500' 
                            : 'border-gray-300 hover:border-blue-500 text-gray-700'
                        }`}
                        onClick={() => setAmount('25')}
                      >$25</button>
                      <button 
                        type="button" 
                        className={`py-3 px-4 rounded-md border-2 ${
                          amount === '50' 
                            ? 'bg-blue-500 text-white border-blue-500' 
                            : 'border-gray-300 hover:border-blue-500 text-gray-700'
                        }`}
                        onClick={() => setAmount('50')}
                      >$50</button>
                      <button 
                        type="button" 
                        className={`py-3 px-4 rounded-md border-2 ${
                          amount === '100' 
                            ? 'bg-blue-500 text-white border-blue-500' 
                            : 'border-gray-300 hover:border-blue-500 text-gray-700'
                        }`}
                        onClick={() => setAmount('100')}
                      >$100</button>
                      <button 
                        type="button" 
                        className={`py-3 px-4 rounded-md border-2 ${
                          amount === '250' 
                            ? 'bg-blue-500 text-white border-blue-500' 
                            : 'border-gray-300 hover:border-blue-500 text-gray-700'
                        }`}
                        onClick={() => setAmount('250')}
                      >$250</button>
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Or Enter Custom Amount</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <span className="text-gray-500">$</span>
                        </div>
                        <input 
                          type="number" 
                          min="1" 
                          value={amount} 
                          onChange={(e) => setAmount(e.target.value)}
                          placeholder="Enter amount"
                          className="pl-8 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div>
                    <label className="block text-gray-700 font-medium mb-3">Item Category</label>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-4">
                      {itemCategories.map(category => (
                        <button 
                          key={category.id}
                          type="button" 
                          className={`flex flex-col items-center p-4 rounded-md border-2 ${
                            itemCategory === category.id 
                              ? 'bg-blue-500 text-white border-blue-500' 
                              : 'border-gray-300 hover:border-blue-500 text-gray-700'
                          }`}
                          onClick={() => setItemCategory(category.id)}
                        >
<i className={`fas fa-${category.icon} text-xl mb-2`}></i>
<span className="text-sm">{category.name}</span>
                        </button>
                      ))}
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Item Description</label>
                      <textarea 
                        value={itemDescription}
                        onChange={(e) => setItemDescription(e.target.value)}
                        placeholder="Please describe the items you wish to donate (quantity, condition, etc.)"
                        rows="4"
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      ></textarea>
                    </div>
                  </div>
                )}

                <div className="space-y-4">
                  <label className="block text-gray-700 font-medium mb-1">Your Information</label>
                  <input 
                    type="text" 
                    placeholder="Full Name" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required={!anonymous}
                    disabled={anonymous}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input 
                    type="tel" 
                    placeholder="Phone Number" 
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="flex items-center">
                  <input 
                    id="anonymous"
                    type="checkbox" 
                    checked={anonymous}
                    onChange={() => setAnonymous(!anonymous)}
                    className="h-4 w-4 text-blue-500 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="anonymous" className="ml-2 block text-gray-700">
                    Make my donation anonymous
                  </label>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-4 rounded-md transition duration-300"
                >
                  {donationType === 'money' ? 'Complete Donation' : 'Submit Donation Offer'}
                </button>
              </form>
            </div>

            {/* Recent Donations */}
            <div className="lg:w-1/3">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-6">Recent Donations</h3>
                <div className="space-y-4">
                {recentDonations.map(donation => (
                    <div key={donation.id} className="flex items-center p-4 border-b border-gray-100">
                        <div className={`flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center ${
                        donation.type === 'money' ? 'bg-green-100 text-green-500' : 'bg-blue-100 text-blue-500'
                        }`}>
                        <i className={`fas fa-${donation.type === 'money' ? 'dollar-sign' : 'box'}`}></i>
                        </div>
                        <div className="ml-4">
                        <h4 className="text-gray-800 font-medium">{donation.name}</h4>
                        <p className="text-gray-600 text-sm">
                            {donation.type === 'money' 
                            ? `Donated $${donation.amount}` 
                            : `Donated ${donation.item}`}
                        </p>
                        <span className="text-gray-400 text-xs">{donation.date}</span>
                        </div>
                    </div>
                    ))}

                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 mt-6">
                <h3 className="text-xl font-bold mb-4">Items Most Needed</h3>
                <ul className="space-y-3">
                {mostNeededItems.map(item => (
                    <li key={item.id} className="flex items-center justify-between">
                        <div className="flex items-center">
                        <i className={`fas fa-${itemCategories.find(cat => cat.id === item.category)?.icon || 'box'} text-blue-500 mr-3`}></i>
                        <span>{item.name}</span>
                        </div>
                        <span className={`px-2 py-1 text-xs rounded-full ${
                        item.urgency === 'Critical' 
                            ? 'bg-red-100 text-red-700' 
                            : item.urgency === 'High'
                            ? 'bg-orange-100 text-orange-700'
                            : 'bg-yellow-100 text-yellow-700'
                        }`}>
                        {item.urgency}
                        </span>
                    </li>
                    ))}

                </ul>
                <div className="mt-6">
                  <button 
                    onClick={() => {
                      setDonationType('items');
                      window.scrollTo({
                        top: document.querySelector('form').offsetTop - 100,
                        behavior: 'smooth'
                      });
                    }}
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-4 rounded-md transition duration-300"
                  >
                    Donate These Items
                  </button>
                </div>
              </div>
              
              {/* FAQ Section */}
              <div className="bg-white rounded-lg shadow-md p-6 mt-6">
                <h3 className="text-xl font-bold mb-4">Donation FAQs</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Where do my donations go?</h4>
                    <p className="text-gray-600 text-sm">100% of your donations directly support disaster relief operations in affected communities.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Is my donation tax-deductible?</h4>
                    <p className="text-gray-600 text-sm">Yes, all donations are tax-deductible. You will receive a receipt for your records.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Can I make a recurring donation?</h4>
                    <p className="text-gray-600 text-sm">Yes, select the recurring option during checkout to set up monthly donations.</p>
                  </div>
                </div>
                <a href="#" className="block text-blue-500 hover:text-blue-700 font-medium mt-4">
                  View all FAQs <i className="fas fa-arrow-right ml-1"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 relative">
            Stories of Impact
            <span className="block w-16 h-1 bg-blue-500 mx-auto mt-4"></span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-500">
                  <i className="fas fa-quote-left text-xl"></i>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold">Maria C.</h4>
                  <p className="text-sm text-gray-600">Flood Survivor</p>
                </div>
              </div>
              <p className="text-gray-700">"The relief supplies we received helped my family get through the most difficult period after the flood. We are forever grateful for the support."</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-500">
                  <i className="fas fa-quote-left text-xl"></i>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold">Dr. James L.</h4>
                  <p className="text-sm text-gray-600">Field Medic</p>
                </div>
              </div>
              <p className="text-gray-700">"The medical supplies donated allowed us to treat hundreds of patients in the aftermath of the earthquake. Each donation directly saved lives."</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-500">
                  <i className="fas fa-quote-left text-xl"></i>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold">Robert T.</h4>
                  <p className="text-sm text-gray-600">Community Leader</p>
                </div>
              </div>
              <p className="text-gray-700">"Our community was able to rebuild faster because of the generous donations we received. The support gave us hope when we needed it the most."</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4">About Us</h4>
              <p className="text-gray-300">We are dedicated to providing immediate relief and long-term support to communities affected by natural disasters.</p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">Home</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Our Mission</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Current Relief Efforts</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Volunteer</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-300">
                <li><i className="fas fa-map-marker-alt mr-2"></i> 123 Relief Street, City, State</li>
                <li><i className="fas fa-phone mr-2"></i> (555) 123-4567</li>
                <li><i className="fas fa-envelope mr-2"></i> info@relieforg.org</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Connect With Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="h-10 w-10 rounded-full bg-gray-700 flex items-center justify-center text-white hover:bg-blue-600 transition duration-300">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="h-10 w-10 rounded-full bg-gray-700 flex items-center justify-center text-white hover:bg-blue-400 transition duration-300">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="h-10 w-10 rounded-full bg-gray-700 flex items-center justify-center text-white hover:bg-red-600 transition duration-300">
                  <i className="fab fa-youtube"></i>
                </a>
                <a href="#" className="h-10 w-10 rounded-full bg-gray-700 flex items-center justify-center text-white hover:bg-pink-600 transition duration-300">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
              <div className="mt-6">
                <h5 className="font-medium mb-2">Subscribe to our newsletter</h5>
                <div className="flex">
                  <input 
                    type="email" 
                    placeholder="Your email" 
                    className="p-2 rounded-l-md flex-grow focus:outline-none text-gray-800"
                  />
                  <button className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-r-md">
                    <i className="fas fa-paper-plane"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
            <p>© 2025 Relief Organization. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DonationPage;