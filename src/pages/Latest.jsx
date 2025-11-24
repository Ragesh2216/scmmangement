import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Latest() {
  const [activeTab, setActiveTab] = useState("all");
  const [visibleItems, setVisibleItems] = useState(6);
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Mock function for newsletter subscription
  const subscribeToNewsletter = async (email) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email.includes('@')) {
          resolve({ success: true });
        } else {
          reject(new Error('Invalid email'));
        }
      }, 1500);
    });
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage({ type: '', text: '' });

    try {
      await subscribeToNewsletter(email);
      setMessage({ type: 'success', text: 'Successfully subscribed to supply chain insights!' });
      setEmail('');
    } catch (error) {
      setMessage({ type: 'error', text: 'Subscription failed. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  // Supply Chain Management Latest Updates Data
  const latestUpdates = [
    {
      id: 1,
      title: "AI-Powered Route Optimization",
      category: "logistics",
      description: "Enhanced our logistics platform with machine learning algorithms for real-time route optimization and fuel efficiency.",
      date: "2024-01-15",
      readTime: "4 min read",
      image: "🚚",
      color: "from-blue-500 to-cyan-500",
      tags: ["Logistics", "AI", "Optimization"]
    },
    {
      id: 2,
      title: "Warehouse Automation v3.0",
      category: "warehouse",
      description: "Launched advanced warehouse management system with robotic automation and real-time inventory tracking.",
      date: "2024-01-12",
      readTime: "5 min read",
      image: "🏭",
      color: "from-green-500 to-emerald-500",
      tags: ["Warehouse", "Automation", "Robotics"]
    },
    {
      id: 3,
      title: "Global Supply Chain Analytics",
      category: "analytics",
      description: "New predictive analytics dashboard with real-time risk assessment and demand forecasting capabilities.",
      date: "2024-01-10",
      readTime: "6 min read",
      image: "📊",
      color: "from-purple-500 to-pink-500",
      tags: ["Analytics", "Forecasting", "Risk"]
    },
    {
      id: 4,
      title: "Sustainable Logistics Framework",
      category: "sustainability",
      description: "Comprehensive sustainability framework with carbon footprint tracking and green logistics solutions.",
      date: "2024-01-08",
      readTime: "5 min read",
      image: "🌱",
      color: "from-emerald-500 to-teal-500",
      tags: ["Sustainability", "Green", "Carbon"]
    },
    {
      id: 5,
      title: "Inventory Optimization AI",
      category: "inventory",
      description: "Advanced inventory management with AI-driven stock optimization and automated replenishment systems.",
      date: "2024-01-05",
      readTime: "4 min read",
      image: "📦",
      color: "from-orange-500 to-amber-500",
      tags: ["Inventory", "AI", "Optimization"]
    },
    {
      id: 6,
      title: "Blockchain Supply Chain",
      category: "technology",
      description: "Implemented blockchain technology for enhanced supply chain transparency and secure transaction tracking.",
      date: "2024-01-03",
      readTime: "7 min read",
      image: "⛓️",
      color: "from-indigo-500 to-blue-500",
      tags: ["Blockchain", "Security", "Transparency"]
    },
    {
      id: 7,
      title: "Cold Chain Logistics Upgrade",
      category: "logistics",
      description: "Enhanced cold chain logistics with IoT sensors and real-time temperature monitoring for perishable goods.",
      date: "2024-01-02",
      readTime: "4 min read",
      image: "❄️",
      color: "from-cyan-500 to-blue-500",
      tags: ["Cold Chain", "IoT", "Monitoring"]
    },
    {
      id: 8,
      title: "Last-Mile Delivery Innovation",
      category: "delivery",
      description: "Revolutionary last-mile delivery solutions with drone technology and smart routing algorithms.",
      date: "2023-12-28",
      readTime: "5 min read",
      image: "🚀",
      color: "from-red-500 to-pink-500",
      tags: ["Delivery", "Drones", "Innovation"]
    },
    {
      id: 9,
      title: "Supply Chain Risk Management",
      category: "risk",
      description: "Comprehensive risk management platform with predictive analytics and real-time disruption alerts.",
      date: "2023-12-25",
      readTime: "6 min read",
      image: "🛡️",
      color: "from-yellow-500 to-orange-500",
      tags: ["Risk", "Management", "Analytics"]
    }
  ];

  const categories = [
    { id: "all", name: "All Updates", count: latestUpdates.length },
    { id: "logistics", name: "Logistics", count: latestUpdates.filter(item => item.category === "logistics").length },
    { id: "warehouse", name: "Warehouse", count: latestUpdates.filter(item => item.category === "warehouse").length },
    { id: "analytics", name: "Analytics", count: latestUpdates.filter(item => item.category === "analytics").length },
    { id: "sustainability", name: "Sustainability", count: latestUpdates.filter(item => item.category === "sustainability").length },
    { id: "inventory", name: "Inventory", count: latestUpdates.filter(item => item.category === "inventory").length },
    { id: "technology", name: "Technology", count: latestUpdates.filter(item => item.category === "technology").length },
    { id: "delivery", name: "Delivery", count: latestUpdates.filter(item => item.category === "delivery").length },
    { id: "risk", name: "Risk Management", count: latestUpdates.filter(item => item.category === "risk").length }
  ];

  const filteredUpdates = latestUpdates.filter(item => 
    activeTab === "all" || item.category === activeTab
  ).slice(0, visibleItems);

  const loadMore = () => {
    setVisibleItems(prev => prev + 3);
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 py-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float-slow opacity-20"
            style={{
              width: `${Math.random() * 100 + 30}px`,
              height: `${Math.random() * 100 + 30}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `linear-gradient(45deg, ${
                ['#10B981', '#3B82F6', '#8B5CF6', '#EC4899', '#F59E0B', '#84CC16', '#06B6D4', '#EF4444'][i % 8]
              }, ${
                ['#059669', '#2563EB', '#7C3AED', '#DB2777', '#D97706', '#65A30D', '#0891B2', '#DC2626'][(i + 4) % 8]
              })`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${Math.random() * 20 + 15}s`,
              filter: 'blur(15px)'
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className={`text-center mt-20 mb-12 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Global Supply Chain Insights
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Stay updated with the latest logistics innovations, warehouse technologies, and supply chain optimization strategies from our experts.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            {[
              { number: latestUpdates.length, label: "Industry Updates", color: "from-cyan-500 to-blue-500" },
              { number: categories.length - 1, label: "Categories", color: "from-purple-500 to-pink-500" },
              { number: "99.5%", label: "On-Time Delivery", color: "from-green-500 to-emerald-500" },
              { number: "24/7", label: "Logistics Support", color: "from-orange-500 to-amber-500" }
            ].map((stat, index) => (
              <div 
                key={index}
                className="text-center group cursor-pointer transform hover:scale-105 transition-all duration-500"
              >
                <div className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}>
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex overflow-x-auto hide-scrollbar mb-8 pb-4">
          <div className="flex space-x-2 mx-auto">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setActiveTab(category.id);
                  setVisibleItems(6);
                }}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 whitespace-nowrap ${
                  activeTab === category.id
                    ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg"
                    : "bg-white/10 text-gray-300 backdrop-blur-sm border border-white/20 hover:bg-white/20"
                }`}
              >
                {category.name}
                <span className={`ml-2 px-2 py-1 rounded-full text-xs ${
                  activeTab === category.id ? "bg-white/20" : "bg-black/20"
                }`}>
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Updates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredUpdates.map((update, index) => (
            <div
              key={update.id}
              className="group relative overflow-hidden rounded-2xl backdrop-blur-sm border border-white/20 hover:border-cyan-500/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: 'fadeInUp 0.6s ease-out forwards'
              }}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${update.color} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}></div>
              
              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              <div className="relative z-10 p-6">
                {/* Icon and Category */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${update.color} flex items-center justify-center text-white text-xl shadow-lg`}>
                      {update.image}
                    </div>
                    <div>
                      <span className="inline-block px-3 py-1 text-xs font-semibold text-cyan-300 bg-cyan-500/20 rounded-full capitalize backdrop-blur-sm">
                        {update.category}
                      </span>
                      <p className="text-sm text-gray-400 mt-1">{update.readTime}</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300 line-clamp-2">
                  {update.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed mb-4 line-clamp-3">
                  {update.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {update.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-cyan-500/20 text-cyan-300 text-xs font-medium rounded-full border border-cyan-500/30 backdrop-blur-sm"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Date and Action */}
                <div className="flex items-center justify-between pt-4 border-t border-white/20">
                  <span className="text-sm text-gray-400">
                    {formatDate(update.date)}
                  </span>
                  <Link 
                    to="/404" 
                    className="text-cyan-400 hover:text-cyan-300 font-semibold text-sm flex items-center space-x-1 group-hover:translate-x-1 transition-transform duration-300"
                  >
                    <span>Read More</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleItems < filteredUpdates.length && (
          <div className="text-center mb-12 animate-fadeIn">
            <button
              onClick={loadMore}
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl backdrop-blur-sm"
            >
              Load More Insights
            </button>
          </div>
        )}

        {/* Newsletter Section */}
        <form onSubmit={handleSubscribe} className={`relative overflow-hidden rounded-2xl p-8 text-center text-white mb-12 transition-all duration-700 delay-500 backdrop-blur-sm border border-white/20 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/30 via-blue-600/30 to-purple-600/30"></div>
          
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full animate-pulse-slow opacity-20"
                style={{
                  width: `${100 + i * 50}px`,
                  height: `${100 + i * 50}px`,
                  left: `${20 + i * 20}%`,
                  top: `${30 + i * 10}%`,
                  background: `radial-gradient(circle, cyan, transparent)`,
                  animationDelay: `${i * 2}s`
                }}
              />
            ))}
          </div>

          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Stay Ahead in Supply Chain</h2>
            <p className="text-cyan-100 mb-6 max-w-2xl mx-auto">
              Get the latest logistics innovations, warehouse technologies, and supply chain insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading}
                className="flex-1 px-4 py-3 rounded-xl border border-cyan-300/50 bg-white/10 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white placeholder-cyan-200 disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none backdrop-blur-sm"
              >
                {isLoading ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Subscribing...</span>
                  </div>
                ) : (
                  "Subscribe Now"
                )}
              </button>
            </div>
            {message.text && (
              <p className={`mt-4 text-sm font-medium ${
                message.type === 'success' ? 'text-green-300' : 'text-red-300'
              }`}>
                {message.text}
              </p>
            )}
          </div>
        </form>

        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {[
            {
              title: "Supply Chain Docs",
              description: "Comprehensive logistics guides and API documentation",
              icon: "📚",
              color: "from-green-500 to-emerald-500"
            },
            {
              title: "Logistics Support",
              description: "24/7 supply chain support and operational assistance",
              icon: "🚚",
              color: "from-blue-500 to-cyan-500"
            },
            {
              title: "Industry Community",
              description: "Join our global supply chain professionals network",
              icon: "🌐",
              color: "from-purple-500 to-pink-500"
            }
          ].map((link, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl p-6 backdrop-blur-sm border border-white/20 hover:border-cyan-500/50 transition-all duration-500 transform hover:-translate-y-1 hover:shadow-xl group"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${link.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${link.color} flex items-center justify-center text-white text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {link.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{link.title}</h3>
                <p className="text-gray-300">{link.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes floatSlow {
          0%, 100% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-20px) translateX(10px) rotate(120deg);
          }
          66% {
            transform: translateY(10px) translateX(-10px) rotate(240deg);
          }
        }
        @keyframes pulseSlow {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.05);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
        .animate-float-slow {
          animation: floatSlow 25s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulseSlow 3s ease-in-out infinite;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}

export default Latest;