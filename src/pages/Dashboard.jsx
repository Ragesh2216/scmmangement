import { useState, useEffect, useRef } from 'react';
import { 
  BarChart, Bar, LineChart, Line, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer 
} from 'recharts';

// Fixed Animated Number Component
const AnimatedNumber = ({ value, duration = 2000, className = "" }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    
    let numericValue;
    let prefix = '';
    let suffix = '';

    if (typeof value === 'string') {
      const numericMatch = value.match(/([^0-9]*)([0-9]+)([^0-9]*)/);
      if (numericMatch) {
        prefix = numericMatch[1] || '';
        numericValue = parseInt(numericMatch[2]);
        suffix = numericMatch[3] || '';
      } else {
        numericValue = 0;
      }
    } else {
      numericValue = value;
    }

    const increment = numericValue / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= numericValue) {
        setCount(numericValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, value, duration]);

  const displayValue = typeof value === 'string' 
    ? `${prefix}${count}${suffix}`
    : count;

  return (
    <span ref={ref} className={className}>
      {displayValue}
    </span>
  );
};

const SimpleAnimatedNumber = ({ value, duration = 2000, className = "" }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const end = typeof value === 'string' ? parseInt(value.replace(/[^0-9]/g, '')) || 0 : value;
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, value, duration]);

  return (
    <span ref={ref} className={className}>
      {typeof value === 'string' ? value.replace(/[0-9]+/, count) : count}
    </span>
  );
};

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Vibrant gradient backgrounds for each section
  const gradientBackgrounds = [
    'bg-gradient-to-br from-purple-500 via-pink-500 to-red-500',
    'bg-gradient-to-br from-blue-500 via-cyan-500 to-green-500',
    'bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-500',
    'bg-gradient-to-br from-green-500 via-emerald-500 to-teal-500',
    'bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500',
    'bg-gradient-to-br from-red-500 via-orange-500 to-amber-500',
    'bg-gradient-to-br from-teal-500 via-cyan-500 to-blue-500',
    'bg-gradient-to-br from-pink-500 via-rose-500 to-red-500'
  ];

  // Sample data for charts - Updated for SCM
  const performanceData = [
    { month: 'Jan', onTimeDelivery: 95.2, costSavings: 125000, shipments: 245 },
    { month: 'Feb', onTimeDelivery: 96.8, costSavings: 145000, shipments: 278 },
    { month: 'Mar', onTimeDelivery: 97.5, costSavings: 165000, shipments: 312 },
    { month: 'Apr', onTimeDelivery: 96.2, costSavings: 158000, shipments: 298 },
    { month: 'May', onTimeDelivery: 98.1, costSavings: 172000, shipments: 325 },
    { month: 'Jun', onTimeDelivery: 99.2, costSavings: 189000, shipments: 356 }
  ];

  const serviceDistribution = [
    { name: 'Logistics', value: 35 },
    { name: 'Warehouse', value: 25 },
    { name: 'Inventory', value: 20 },
    { name: 'Procurement', value: 12 },
    { name: 'Analytics', value: 8 }
  ];

  const shipmentStatus = [
    { status: 'Delivered', count: 342, color: '#10B981' },
    { status: 'In Transit', count: 128, color: '#3B82F6' },
    { status: 'Pending', count: 45, color: '#F59E0B' },
    { status: 'Delayed', count: 18, color: '#EF4444' }
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

  const quickStats = [
    { 
      title: 'Total Cost Savings', 
      value: '$954K', 
      change: '+12.5%', 
      trend: 'up', 
      icon: '💰',
      gradient: 'from-purple-500 to-pink-500'
    },
    { 
      title: 'On-Time Delivery Rate', 
      value: '98.2%', 
      change: '+2.1%', 
      trend: 'up', 
      icon: '⏱️',
      gradient: 'from-blue-500 to-cyan-500'
    },
    { 
      title: 'Active Shipments', 
      value: '185', 
      change: '+8.2%', 
      trend: 'up', 
      icon: '🚚',
      gradient: 'from-orange-500 to-amber-500'
    },
    { 
      title: 'Warehouse Utilization', 
      value: '82%', 
      change: '+3.2%', 
      trend: 'up', 
      icon: '🏭',
      gradient: 'from-green-500 to-emerald-500'
    }
  ];

  const recentActivities = [
    { 
      id: 1, 
      activity: 'International Shipment', 
      client: 'GlobalTech', 
      status: 'Delivered', 
      time: '2h ago', 
      icon: '🌎',
      gradient: 'from-indigo-500 to-purple-500'
    },
    { 
      id: 2, 
      activity: 'Warehouse Optimization', 
      client: 'RetailChain', 
      status: 'In Progress', 
      time: '5h ago', 
      icon: '📦',
      gradient: 'from-teal-500 to-cyan-500'
    },
    { 
      id: 3, 
      activity: 'Inventory Audit', 
      client: 'Manufacturing Corp', 
      status: 'Completed', 
      time: '1d ago', 
      icon: '📊',
      gradient: 'from-green-500 to-emerald-500'
    },
    { 
      id: 4, 
      activity: 'Route Planning', 
      client: 'Distribution Co', 
      status: 'Completed', 
      time: '1d ago', 
      icon: '🗺️',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  const teamMembers = [
    { 
      name: 'John Smith', 
      role: 'Logistics Manager', 
      shipments: 42, 
      rate: 96, 
      status: 'Active', 
      avatar: 'JS', 
      gradient: 'from-blue-500 to-cyan-500'
    },
    { 
      name: 'Sarah Johnson', 
      role: 'Warehouse Supervisor', 
      shipments: 38, 
      rate: 94, 
      status: 'Active', 
      avatar: 'SJ', 
      gradient: 'from-purple-500 to-pink-500'
    },
    { 
      name: 'Mike Chen', 
      role: 'Transport Coordinator', 
      shipments: 55, 
      rate: 98, 
      status: 'Active', 
      avatar: 'MC', 
      gradient: 'from-green-500 to-emerald-500'
    },
    { 
      name: 'Emily Davis', 
      role: 'Inventory Analyst', 
      shipments: 28, 
      rate: 92, 
      status: 'Away', 
      avatar: 'ED', 
      gradient: 'from-orange-500 to-amber-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float-slow opacity-20"
            style={{
              width: `${Math.random() * 120 + 30}px`,
              height: `${Math.random() * 120 + 30}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `linear-gradient(45deg, ${
                ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD', '#98D8C8', '#F7DC6F'][i % 8]
              }, ${
                ['#FFE66D', '#FF8E53', '#4ECDC4', '#45B7D1', '#96CEB4', '#DDA0DD', '#98D8C8', '#F7DC6F'][(i + 4) % 8]
              })`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${Math.random() * 25 + 15}s`,
              filter: 'blur(20px)'
            }}
          />
        ))}
      </div>

      {/* Header */}
      <header className="bg-black/30 backdrop-blur-xl shadow-2xl border-b border-white/10 relative z-10">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-4 space-y-3 sm:space-y-0">
            <div className="w-full sm:w-auto">
              <h1 className="text-xl sm:text-2xl mt-20 font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent animate-pulse">
                Supply Chain Dashboard
              </h1>
              <p className="text-blue-200 text-sm sm:text-base animate-pulse-slow">Welcome back, Logistics Manager 👋</p>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-4 sm:py-6 relative z-10">
        {/* Quick Stats with Animated Numbers */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6">
          {quickStats.map((stat, index) => (
            <div 
              key={index}
              className="relative overflow-hidden rounded-2xl shadow-2xl p-4 sm:p-6 border border-white/20 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Animated Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-90 group-hover:opacity-100 transition-all duration-500`}></div>
              
              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-xl drop-shadow-lg">{stat.icon}</span>
                      <p className="text-xs sm:text-sm font-semibold text-white/90 truncate">{stat.title}</p>
                    </div>
                    <p className="text-lg sm:text-2xl font-bold text-white mt-1 sm:mt-2 truncate drop-shadow-lg">
                      <SimpleAnimatedNumber value={stat.value} duration={1500} />
                    </p>
                  </div>
                  <div className={`p-2 sm:p-3 rounded-full flex-shrink-0 ml-2 transition-all duration-300 group-hover:scale-110 backdrop-blur-sm ${
                    stat.trend === 'up' ? 'bg-green-500/30' : 'bg-red-500/30'
                  }`}>
                    <svg className={`w-4 h-4 sm:w-6 sm:h-6 text-white drop-shadow-lg ${
                      stat.trend === 'up' ? 'animate-bounce' : 'animate-pulse'
                    }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d={stat.trend === 'up' ? "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" : "M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"} />
                    </svg>
                  </div>
                </div>
                <p className={`text-xs mt-1 sm:mt-2 truncate flex items-center space-x-1 text-white/80 ${
                  stat.trend === 'up' ? 'animate-pulse-slow' : ''
                }`}>
                  <span>{stat.change}</span>
                  <span>from last month</span>
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-6">
          {/* Performance Chart */}
          <div className="relative overflow-hidden rounded-2xl shadow-2xl p-4 sm:p-6 border border-white/20 hover:shadow-2xl transition-all duration-500 animate-fade-in-up">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-cyan-600/20 backdrop-blur-sm"></div>
            <div className="relative z-10">
              <h3 className="text-base sm:text-lg font-semibold text-white mb-4 flex items-center drop-shadow-lg">
                <span className="mr-2 text-2xl">📈</span>
                Performance Metrics
              </h3>
              <div className="h-64 sm:h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={performanceData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                    <XAxis dataKey="month" fontSize={12} stroke="rgba(255,255,255,0.7)" />
                    <YAxis fontSize={12} stroke="rgba(255,255,255,0.7)" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255,255,255,0.2)',
                        borderRadius: '12px',
                        color: 'white'
                      }}
                    />
                    <Legend wrapperStyle={{ color: 'white' }} />
                    <Line 
                      type="monotone" 
                      dataKey="onTimeDelivery" 
                      stroke="url(#deliveryGradient)" 
                      strokeWidth={3}
                      dot={{ fill: '#10B981', strokeWidth: 2, r: 4 }}
                      activeDot={{ r: 6, fill: '#10B981' }}
                      name="On-Time Delivery %"
                    />
                    <Line 
                      type="monotone" 
                      dataKey="shipments" 
                      stroke="url(#shipmentsGradient)" 
                      strokeWidth={3}
                      dot={{ fill: '#3B82F6', strokeWidth: 2, r: 4 }}
                      activeDot={{ r: 6, fill: '#3B82F6' }}
                      name="Shipments"
                    />
                    <defs>
                      <linearGradient id="deliveryGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#10B981" stopOpacity={1}/>
                        <stop offset="100%" stopColor="#10B981" stopOpacity={0.3}/>
                      </linearGradient>
                      <linearGradient id="shipmentsGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#3B82F6" stopOpacity={1}/>
                        <stop offset="100%" stopColor="#3B82F6" stopOpacity={0.3}/>
                      </linearGradient>
                    </defs>
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Service Distribution */}
          <div className="relative overflow-hidden rounded-2xl shadow-2xl p-4 sm:p-6 border border-white/20 hover:shadow-2xl transition-all duration-500 animate-fade-in-up">
            <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 via-emerald-600/20 to-teal-600/20 backdrop-blur-sm"></div>
            <div className="relative z-10">
              <h3 className="text-base sm:text-lg font-semibold text-white mb-4 flex items-center drop-shadow-lg">
                <span className="mr-2 text-2xl">🎯</span>
                Service Distribution
              </h3>
              <div className="h-64 sm:h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={serviceDistribution}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                      outerRadius={80}
                      fill="#99e918ff"
                      dataKey="value"
                      animationBegin={0}
                      animationDuration={1500}
                    >
                      {serviceDistribution.map((entry, index) => (
                        <Cell 
                          key={`cell-${index}`} 
                          fill={COLORS[index % COLORS.length]}
                          stroke="white"
                          strokeWidth={2}
                        />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'rgba(255, 255, 255, 1)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255,255,255,0.2)',
                        borderRadius: '12px',
                        color: 'white'
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>

        {/* Shipment Status & Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {/* Shipment Status */}
          <div className="relative overflow-hidden rounded-2xl shadow-2xl p-4 sm:p-6 border border-white/20 hover:shadow-2xl transition-all duration-500 animate-fade-in-up">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 via-amber-600/20 to-yellow-600/20 backdrop-blur-sm"></div>
            <div className="relative z-10">
              <h3 className="text-base sm:text-lg font-semibold text-white mb-4 flex items-center drop-shadow-lg">
                <span className="mr-2 text-2xl">📊</span>
                Shipment Status
              </h3>
              <div className="space-y-4">
                {shipmentStatus.map((shipment, index) => (
                  <div 
                    key={index} 
                    className="flex items-center justify-between p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-[1.02] group"
                  >
                    <div className="flex items-center min-w-0 flex-1">
                      <div 
                        className="w-3 h-3 rounded-full mr-3 flex-shrink-0 animate-pulse shadow-lg"
                        style={{ backgroundColor: shipment.color }}
                      ></div>
                      <span className="text-sm font-medium text-white truncate group-hover:text-cyan-200 transition-colors">
                        {shipment.status}
                      </span>
                    </div>
                    <div className="flex items-center space-x-4 ml-2">
                      <span className="text-sm font-semibold text-white whitespace-nowrap drop-shadow-lg">
                        <SimpleAnimatedNumber value={shipment.count} duration={1000} />
                      </span>
                      <div className="w-24 bg-white/20 rounded-full h-2 overflow-hidden backdrop-blur-sm">
                        <div 
                          className="h-2 rounded-full transition-all duration-1000 ease-out shadow-lg"
                          style={{ 
                            width: `${(shipment.count / 533) * 100}%`,
                            backgroundColor: shipment.color
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="relative overflow-hidden rounded-2xl shadow-2xl p-4 sm:p-6 border border-white/20 hover:shadow-2xl transition-all duration-500 animate-fade-in-up">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-purple-600/20 to-pink-600/20 backdrop-blur-sm"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base sm:text-lg font-semibold text-white flex items-center drop-shadow-lg">
                  <span className="mr-2 text-2xl">🔔</span>
                  Recent Logistics Activity
                </h3>
                
              </div>
              <div className="space-y-3">
                {recentActivities.map((activity, index) => (
                  <div 
                    key={activity.id} 
                    className="relative overflow-hidden flex items-center justify-between p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-[1.02] group animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${activity.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                    <div className="flex items-center min-w-0 flex-1 pr-2 relative z-10">
                      <span className="text-lg mr-3 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg">
                        {activity.icon}
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="font-medium text-white text-sm sm:text-base truncate group-hover:text-cyan-200 transition-colors">
                          {activity.activity}
                        </p>
                        <p className="text-white/70 text-xs sm:text-sm truncate">{activity.client}</p>
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0 relative z-10">
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium transition-all duration-300 group-hover:scale-105 backdrop-blur-sm ${
                        activity.status === 'Delivered' 
                          ? 'bg-green-500/30 text-green-200'
                          : activity.status === 'In Progress'
                          ? 'bg-blue-500/30 text-blue-200'
                          : 'bg-yellow-500/30 text-yellow-200'
                      }`}>
                        {activity.status}
                      </span>
                      <p className="text-white/60 text-xs mt-1 whitespace-nowrap group-hover:text-white/80">
                        {activity.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Team Performance */}
        <div className="relative overflow-hidden rounded-2xl shadow-2xl p-4 sm:p-6 mt-6 border border-white/20 hover:shadow-2xl transition-all duration-500 animate-fade-in-up">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/20 via-blue-600/20 to-indigo-600/20 backdrop-blur-sm"></div>
          <div className="relative z-10">
            <h3 className="text-base sm:text-lg font-semibold text-white mb-4 flex items-center drop-shadow-lg">
              <span className="mr-2 text-2xl">👥</span>
              Logistics Team Performance
            </h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-white/20 text-sm">
                <thead>
                  <tr>
                    <th className="px-3 py-2 sm:px-4 sm:py-3 text-left text-xs font-medium text-cyan-300 uppercase tracking-wider">Team Member</th>
                    <th className="px-3 py-2 sm:px-4 sm:py-3 text-left text-xs font-medium text-cyan-300 uppercase tracking-wider">Role</th>
                    <th className="px-3 py-2 sm:px-4 sm:py-3 text-left text-xs font-medium text-cyan-300 uppercase tracking-wider">Shipments</th>
                    <th className="px-3 py-2 sm:px-4 sm:py-3 text-left text-xs font-medium text-cyan-300 uppercase tracking-wider">Success Rate</th>
                    <th className="px-3 py-2 sm:px-4 sm:py-3 text-left text-xs font-medium text-cyan-300 uppercase tracking-wider">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/20">
                  {teamMembers.map((member, index) => (
                    <tr 
                      key={index}
                      className="hover:bg-white/10 transition-all duration-300 transform hover:scale-[1.01] animate-fade-in-up group"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <td className="px-3 py-2 sm:px-4 sm:py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className={`w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r ${member.gradient} rounded-full flex items-center justify-center text-white font-semibold text-xs sm:text-sm mr-2 sm:mr-3 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                            {member.avatar}
                          </div>
                          <div className="min-w-0">
                            <div className="text-sm font-medium text-white truncate group-hover:text-cyan-200 transition-colors">
                              {member.name}
                            </div>
                            <div className="text-white/60 text-xs truncate">{member.name.toLowerCase().replace(' ', '.')}@logistics.com</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-3 py-2 sm:px-4 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-white/80 truncate">
                        {member.role}
                      </td>
                      <td className="px-3 py-2 sm:px-4 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-white font-semibold">
                        <SimpleAnimatedNumber value={member.shipments} duration={1200} />
                      </td>
                      <td className="px-3 py-2 sm:px-4 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-white font-semibold">
                        <SimpleAnimatedNumber value={`${member.rate}%`} duration={1200} />
                      </td>
                      <td className="px-3 py-2 sm:px-4 sm:py-4 whitespace-nowrap">
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium transition-all duration-300 hover:scale-105 backdrop-blur-sm ${
                          member.status === 'Active' 
                            ? 'bg-green-500/30 text-green-200 animate-pulse-slow'
                            : 'bg-yellow-500/30 text-yellow-200'
                        }`}>
                          {member.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Additional SCM Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mt-6">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl p-4 sm:p-6 border border-white/20 hover:shadow-2xl transition-all duration-500 animate-fade-in-up">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 via-green-600/20 to-lime-600/20 backdrop-blur-sm"></div>
            <div className="relative z-10">
              <h4 className="text-sm font-semibold text-white mb-3 flex items-center drop-shadow-lg">
                <span className="mr-2 text-xl">📦</span>
                Inventory Health
              </h4>
              <div className="space-y-3">
                {[
                  { label: 'Stock Turnover', value: '8.2x', color: 'text-green-300' },
                  { label: 'Carrying Cost', value: '18.5%', color: 'text-blue-300' },
                  { label: 'Stockout Rate', value: '1.2%', color: 'text-red-300' }
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center group hover:scale-105 transition-transform duration-300">
                    <span className="text-sm text-white/80">{item.label}</span>
                    <span className={`text-sm font-semibold ${item.color} animate-pulse`}>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl shadow-2xl p-4 sm:p-6 border border-white/20 hover:shadow-2xl transition-all duration-500 animate-fade-in-up">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-600/20 via-orange-600/20 to-red-600/20 backdrop-blur-sm"></div>
            <div className="relative z-10">
              <h4 className="text-sm font-semibold text-white mb-3 flex items-center drop-shadow-lg">
                <span className="mr-2 text-xl">🚛</span>
                Transportation Metrics
              </h4>
              <div className="space-y-3">
                {[
                  { label: 'Fuel Efficiency', value: '+5.8%', color: 'text-green-300' },
                  { label: 'Route Optimization', value: '92.4%', color: 'text-cyan-300' },
                  { label: 'Carbon Footprint', value: '-12.3%', color: 'text-emerald-300' }
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center group hover:scale-105 transition-transform duration-300">
                    <span className="text-sm text-white/80">{item.label}</span>
                    <span className={`text-sm font-semibold ${item.color} animate-pulse`}>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl shadow-2xl p-4 sm:p-6 border border-white/20 hover:shadow-2xl transition-all duration-500 animate-fade-in-up">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-600/20 via-rose-600/20 to-red-600/20 backdrop-blur-sm"></div>
            <div className="relative z-10">
              <h4 className="text-sm font-semibold text-white mb-3 flex items-center drop-shadow-lg">
                <span className="mr-2 text-xl">⚡</span>
                Real-time Alerts
              </h4>
              <div className="space-y-2">
                {[
                  { text: '3 shipments approaching deadline', color: 'text-yellow-300', pulse: true },
                  { text: 'All warehouses operational', color: 'text-green-300', pulse: false },
                  { text: 'New optimization available', color: 'text-blue-300', pulse: false }
                ].map((alert, index) => (
                  <div key={index} className="flex items-center space-x-2 text-sm group hover:scale-105 transition-transform duration-300">
                    <span className={`w-2 h-2 rounded-full ${alert.pulse ? 'animate-ping' : ''}`} 
                          style={{ backgroundColor: alert.color.replace('text-', '').replace('-300', '-500') }}></span>
                    <span className={alert.color}>{alert.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced CSS Animations */}
      <style jsx global>{`
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

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .animate-float-slow {
          animation: floatSlow 25s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulseSlow 3s ease-in-out infinite;
        }

        .animate-ping {
          animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }

        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  );
};

export default Dashboard;