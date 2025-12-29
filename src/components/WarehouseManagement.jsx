import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Timeline,
  Analytics,
  Dashboard,
  Speed,
  CheckCircle,
  TrendingUp,
  Storage,
  LocationOn,
  LocalShipping,
  Inventory,
  ShoppingCart,
  Factory,
  Store,
  Public,
  Sync,
  Security,
  TrendingDown,
  AutoGraph,
  ShowChart,
  Cloud,
  DataUsage,
  Timeline as TimelineIcon,
  RocketLaunch,
  GroupWork,
  Devices,
  IntegrationInstructions,
} from "@mui/icons-material";

const WarehouseManagement = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const { scrollYProgress } = useScroll();
  
  // Enhanced parallax effects
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, 100]);
  const featuresOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
  const statsScale = useTransform(scrollYProgress, [0.2, 0.4], [0.8, 1]);
  const processX = useTransform(scrollYProgress, [0.4, 0.6], [-50, 0]);
  const benefitsY = useTransform(scrollYProgress, [0.5, 0.7], [50, 0]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const supplyChainFeatures = [
    {
      icon: <Timeline className="text-2xl min-[320px]:text-2xl sm:text-3xl lg:text-4xl" />,
      title: "End-to-End Visibility",
      description: "Real-time tracking across suppliers, manufacturers, warehouses, and customers",
      color: "from-indigo-500 to-purple-600",
      bgColor: "bg-gradient-to-br from-indigo-50 to-purple-50",
      delay: 0,
      metric: "99.8% Accuracy"
    },
    {
      icon: <Analytics className="text-2xl min-[320px]:text-2xl sm:text-3xl lg:text-4xl" />,
      title: "Predictive Analytics",
      description: "AI-powered demand forecasting and risk prediction across supply networks",
      color: "from-teal-500 to-emerald-600",
      bgColor: "bg-gradient-to-br from-teal-50 to-emerald-50",
      delay: 100,
      metric: "30% Better Forecast"
    },
    {
      icon: <Sync className="text-2xl min-[320px]:text-2xl sm:text-3xl lg:text-4xl" />,
      title: "Digital Twin",
      description: "Virtual replica of your supply chain for simulation and optimization",
      color: "from-blue-500 to-cyan-600",
      bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
      delay: 200,
      metric: "40% Faster Decisions"
    },
    {
      icon: <Security className="text-2xl min-[320px]:text-2xl sm:text-3xl lg:text-4xl" />,
      title: "Risk Management",
      description: "Blockchain-enabled traceability and disruption prediction",
      color: "from-amber-500 to-orange-600",
      bgColor: "bg-gradient-to-br from-amber-50 to-orange-50",
      delay: 300,
      metric: "70% Risk Reduction"
    }
  ];

  const supplyChainStats = [
    { 
      number: "45%", 
      label: "Inventory Reduction", 
      icon: <Inventory />, 
      color: "from-indigo-500 to-purple-600",
      description: "Optimized stock levels"
    },
    { 
      number: "60%", 
      label: "Faster Delivery", 
      icon: <LocalShipping />, 
      color: "from-teal-500 to-emerald-600",
      description: "Improved lead times"
    },
    { 
      number: "30%", 
      label: "Cost Savings", 
      icon: <TrendingDown />, 
      color: "from-blue-500 to-cyan-600",
      description: "Operational efficiency"
    },
    { 
      number: "99.9%", 
      label: "Order Accuracy", 
      icon: <CheckCircle />, 
      color: "from-amber-500 to-orange-600",
      description: "Reduced errors"
    }
  ];

  const supplyChainProcess = [
    {
      step: "01",
      title: "Supplier Management",
      description: "Automated supplier onboarding, performance tracking, and risk assessment",
      icon: <Factory />,
      color: "from-indigo-500 to-purple-600",
      metrics: ["500+ Suppliers", "Real-time Monitoring"]
    },
    {
      step: "02",
      title: "Demand Planning",
      description: "AI-driven demand forecasting with market intelligence integration",
      icon: <Analytics />,
      color: "from-teal-500 to-emerald-600",
      metrics: ["95% Accuracy", "30-day Forecast"]
    },
    {
      step: "03",
      title: "Production Scheduling",
      description: "Optimized production planning with capacity and constraint analysis",
      icon: <TimelineIcon />,
      color: "from-blue-500 to-cyan-600",
      metrics: ["40% Efficiency", "Auto-scheduling"]
    },
    {
      step: "04",
      title: "Logistics Optimization",
      description: "Intelligent route planning and multi-modal transportation management",
      icon: <LocalShipping />,
      color: "from-amber-500 to-orange-600",
      metrics: ["25% Cost Save", "Real-time Tracking"]
    },
    {
      step: "05",
      title: "Customer Fulfillment",
      description: "Omni-channel order management and last-mile delivery optimization",
      icon: <Store />,
      color: "from-rose-500 to-pink-600",
      metrics: ["Same-day Delivery", "99% SLA"]
    }
  ];

  const benefitsData = [
    {
      title: "Resilient Supply Chain",
      description: "Build agile supply networks that adapt to disruptions with real-time risk assessment",
      improvement: "85%",
      icon: <Security />,
      color: "from-indigo-500 to-purple-600",
      bgColor: "bg-gradient-to-br from-indigo-50 to-purple-50",
      benefits: ["Risk Mitigation", "Quick Recovery", "Adaptive Networks"]
    },
    {
      title: "Sustainable Operations",
      description: "Reduce carbon footprint with optimized logistics and circular supply chain models",
      improvement: "40%",
      icon: <Public />,
      color: "from-teal-500 to-emerald-600",
      bgColor: "bg-gradient-to-br from-teal-50 to-emerald-50",
      benefits: ["Carbon Reduction", "Waste Minimization", "Ethical Sourcing"]
    },
    {
      title: "Cost Optimization",
      description: "AI-powered optimization reduces operational costs while improving service levels",
      improvement: "35%",
      icon: <TrendingDown />,
      color: "from-blue-500 to-cyan-600",
      bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
      benefits: ["Lower Inventory", "Efficient Logistics", "Reduced Waste"]
    }
  ];

  const technologyFeatures = [
    {
      title: "IoT Integration",
      description: "Real-time sensor data from shipments, warehouses, and production lines",
      efficiency: "Real-time Data",
      icon: <Devices />,
      color: "from-indigo-500 to-purple-600"
    },
    {
      title: "Blockchain Traceability",
      description: "End-to-end product traceability with immutable records",
      efficiency: "Complete Transparency",
      icon: <IntegrationInstructions />,
      color: "from-teal-500 to-emerald-600"
    },
    {
      title: "AI Optimization",
      description: "Machine learning algorithms for demand forecasting and route optimization",
      efficiency: "Smart Decisions",
      icon: <AutoGraph />,
      color: "from-blue-500 to-cyan-600"
    },
    {
      title: "Cloud Platform",
      description: "Scalable cloud infrastructure for global supply chain orchestration",
      efficiency: "Global Scale",
      icon: <Cloud />,
      color: "from-amber-500 to-orange-600"
    }
  ];

  // Supply chain nodes visualization
  const supplyChainNodes = [
    { name: "Suppliers", icon: "🏭", count: 250, status: "Active", color: "bg-indigo-500" },
    { name: "Manufacturers", icon: "🏗️", count: 45, status: "Operating", color: "bg-teal-500" },
    { name: "Distribution", icon: "🚚", count: 120, status: "In Transit", color: "bg-blue-500" },
    { name: "Warehouses", icon: "📦", count: 18, status: "Stocked", color: "bg-amber-500" },
    { name: "Retailers", icon: "🏪", count: 850, status: "Serving", color: "bg-purple-500" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-indigo-50 pt-16 overflow-hidden">
      {/* Hero Section with Animated Supply Chain Visualization */}
      <motion.section 
        style={{ y: heroY }}
        className="relative overflow-hidden bg-gradient-to-r from-indigo-900 via-purple-800 to-blue-900 text-white py-8 min-[320px]:py-10 sm:py-12 md:py-16 lg:py-20"
      >
        {/* Animated Network Lines */}
        <div className="absolute inset-0">
          <svg className="absolute inset-0 w-full h-full opacity-20">
            <motion.path
              d="M10,100 C100,50 200,150 300,100"
              stroke="url(#gradient1)"
              strokeWidth="2"
              fill="transparent"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            <motion.path
              d="M50,200 C150,250 250,180 350,200"
              stroke="url(#gradient2)"
              strokeWidth="2"
              fill="transparent"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
            />
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#818cf8" />
                <stop offset="100%" stopColor="#06b6d4" />
              </linearGradient>
              <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#06b6d4" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        
        {/* Floating Supply Chain Icons */}
        <div className="absolute inset-0">
          {['🏭', '🚚', '📦', '🏪', '🌐', '📊', '⚡', '🔗'].map((icon, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -40, 0],
                x: [0, Math.sin(i) * 20, 0],
                rotate: [0, 360, 0],
                scale: [1, 1.3, 1]
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "easeInOut"
              }}
              className="absolute text-3xl min-[320px]:text-4xl opacity-30"
              style={{
                left: `${10 + i * 12}%`,
                top: `${20 + (i % 4) * 20}%`,
              }}
            >
              {icon}
            </motion.div>
          ))}
        </div>
        
        <div className="relative max-w-7xl mx-auto px-3 min-[320px]:px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl min-[320px]:text-2xl min-[375px]:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 min-[320px]:mb-4 sm:mb-6 bg-gradient-to-r from-cyan-300 via-indigo-300 to-purple-300 bg-clip-text text-transparent leading-tight"
            >
              Intelligent Supply Chain
              <span className="block text-lg min-[320px]:text-xl sm:text-2xl md:text-3xl text-cyan-200 mt-2 min-[320px]:mt-3">
                End-to-End Digital Transformation
              </span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-sm min-[320px]:text-base sm:text-lg md:text-xl mb-4 min-[320px]:mb-5 sm:mb-8 text-gray-300 max-w-xs min-[320px]:max-w-sm sm:max-w-md lg:max-w-3xl mx-auto px-2 min-[320px]:px-4 leading-relaxed"
            >
              Transform your supply chain with AI-powered visibility, predictive analytics, and automated orchestration.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col min-[320px]:flex-row gap-2 min-[320px]:gap-3 sm:gap-4 justify-center items-center px-2"
            >
              <Link 
                to="/services"
                className="group relative overflow-hidden bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600 text-white px-4 min-[320px]:px-5 sm:px-6 lg:px-8 py-2 min-[320px]:py-2.5 sm:py-3 lg:py-4 rounded-lg sm:rounded-xl font-semibold text-sm min-[320box]:text-base sm:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg w-full min-[320px]:w-auto text-center"
              >
                <motion.div
                  animate={{ x: ["0%", "100%"] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                />
                <span className="relative z-10">Transform Your Supply Chain</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Live Supply Chain Network Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="relative max-w-4xl mx-auto mt-6 min-[320px]:mt-7 sm:mt-8 lg:mt-12 px-3 min-[320px]:px-4"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl lg:rounded-2xl p-3 min-[320px]:p-4 sm:p-6 border border-white/20">
            <div className="flex flex-col min-[320px]:flex-row items-center justify-between mb-3 min-[320px]:mb-4 gap-1 min-[320px]:gap-2">
              <div className="text-white font-semibold text-sm min-[320px]:text-base">Live Supply Chain Network</div>
              <motion.div 
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-cyan-300 text-xs min-[320box]:text-sm flex items-center gap-2"
              >
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                Real-time Monitoring
              </motion.div>
            </div>
            
            {/* Supply Chain Nodes */}
            <div className="grid grid-cols-2 min-[320px]:grid-cols-5 gap-2 min-[320px]:gap-3 mb-3 min-[320px]:mb-4">
              {supplyChainNodes.map((node, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    y: -3
                  }}
                  className="text-center p-2 min-[320px]:p-3 bg-black/20 rounded-lg border border-white/10 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="text-2xl mb-1">{node.icon}</div>
                  <div className="text-white font-bold text-xs min-[320px]:text-sm">{node.count}</div>
                  <div className="text-cyan-200 text-xs truncate">{node.name}</div>
                  <div className="text-gray-400 text-xs">{node.status}</div>
                </motion.div>
              ))}
            </div>
            
            {/* Network Activity */}
            <div className="grid grid-cols-2 gap-2 min-[320box]:gap-3 pt-3 min-[320px]:pt-4 border-t border-white/10">
              {[
                { label: "Active Shipments", value: "2,450", trend: "↑ 12%", color: "text-emerald-300" },
                { label: "Delivery Accuracy", value: "99.8%", trend: "↑ 0.5%", color: "text-cyan-300" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="bg-black/20 rounded-lg p-2 min-[320box]:p-3"
                >
                  <div className="flex justify-between items-center">
                    <div className="text-gray-300 text-xs min-[320box]:text-sm">{item.label}</div>
                    <div className={`${item.color} text-xs font-bold`}>{item.trend}</div>
                  </div>
                  <motion.div 
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                    className={`text-lg min-[320box]:text-xl font-bold mt-1 ${item.color}`}
                  >
                    {item.value}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="absolute bottom-0 left-0 w-full h-8 min-[320px]:h-10 sm:h-12 lg:h-20 bg-gradient-to-t from-indigo-50 to-transparent"></div>
      </motion.section>

      {/* Features Section */}
      <motion.section 
        style={{ opacity: featuresOpacity }}
        className="py-8 min-[320px]:py-10 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-b from-white to-indigo-50"
      >
        <div className="max-w-7xl mx-auto px-3 min-[320box]:px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="text-center mb-6 min-[320box]:mb-8 sm:mb-10 md:mb-12 lg:mb-16"
          >
            <h2 className="text-xl min-[320box]:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 min-[320box]:mb-4 leading-tight bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Smart Supply Chain Capabilities
            </h2>
            <p className="text-sm min-[320box]:text-base sm:text-lg md:text-xl text-gray-600 max-w-xs min-[320box]:max-w-sm sm:max-w-md lg:max-w-3xl mx-auto px-2 min-[320box]:px-4 leading-relaxed">
              Leverage advanced technologies to optimize every link in your supply chain.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 min-[320box]:grid-cols-2 lg:grid-cols-4 gap-3 min-[320box]:gap-4 sm:gap-5 lg:gap-6 xl:gap-8">
            {supplyChainFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, rotateX: 90 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  y: -5, 
                  scale: 1.03,
                  boxShadow: "0 20px 40px rgba(99, 102, 241, 0.1)"
                }}
                className={`${feature.bgColor} rounded-lg sm:rounded-xl lg:rounded-2xl p-3 min-[320box]:p-4 sm:p-5 lg:p-6 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-200 relative overflow-hidden group`}
              >
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`w-12 h-12 min-[320box]:w-14 min-[320box]:h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-r ${feature.color} rounded-lg sm:rounded-xl lg:rounded-2xl flex items-center justify-center text-white mb-3 min-[320box]:mb-4 lg:mb-6 mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300`}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-base min-[320box]:text-lg sm:text-xl font-bold text-gray-900 mb-2 min-[320box]:mb-3 lg:mb-4 text-center leading-tight">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-xs min-[320box]:text-sm sm:text-base text-center leading-relaxed mb-3">
                  {feature.description}
                </p>
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.2 }}
                  className={`text-sm font-semibold bg-gradient-to-r ${feature.color} bg-clip-text text-transparent text-center`}
                >
                  {feature.metric}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Stats Section with Enhanced Animations */}
      <motion.section 
        style={{ scale: statsScale }}
        className="py-8 min-[320box]:py-10 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-r from-indigo-900 via-purple-800 to-blue-900 text-white relative overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-grid-white/20 bg-grid-16"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-3 min-[320box]:px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-6 min-[320box]:mb-8 sm:mb-10 md:mb-12 lg:mb-16"
          >
            <h2 className="text-xl min-[320box]:text-2xl sm:text-3xl md:text-4xl font-bold mb-3 min-[320box]:mb-4 bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
              Supply Chain Transformation Impact
            </h2>
            <p className="text-gray-300 text-sm min-[320box]:text-base max-w-xs min-[320box]:max-w-sm sm:max-w-md lg:max-w-2xl mx-auto">
              Real results from digital supply chain implementation
            </p>
          </motion.div>

          <div className="grid grid-cols-2 min-[320box]:grid-cols-2 lg:grid-cols-4 gap-3 min-[320box]:gap-4 sm:gap-5 lg:gap-6 xl:gap-8">
            {supplyChainStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5, rotateY: 180 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 150,
                  damping: 15
                }}
                whileHover={{ 
                  scale: 1.08,
                  y: -8,
                  rotate: [0, -2, 2, 0]
                }}
                className="text-center p-3 min-[320box]:p-4 sm:p-5 lg:p-6 bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl lg:rounded-2xl border border-white/20 relative overflow-hidden group"
              >
                {/* Hover Effect */}
                <motion.div 
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent"
                />
                
                <motion.div 
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className={`w-10 h-10 min-[320box]:w-12 min-[320box]:h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r ${stat.color} rounded-lg sm:rounded-xl lg:rounded-2xl flex items-center justify-center text-white mb-3 min-[320box]:mb-4 lg:mb-6 mx-auto shadow-lg group-hover:shadow-xl`}
                >
                  {stat.icon}
                </motion.div>
                <motion.div 
                  className="text-2xl min-[320box]:text-3xl sm:text-4xl lg:text-5xl font-bold mb-1 min-[320box]:mb-2 bg-gradient-to-r from-cyan-300 via-indigo-300 to-purple-300 bg-clip-text text-transparent"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.2,
                    type: "spring",
                    stiffness: 200
                  }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-gray-300 font-semibold text-sm min-[320box]:text-base mb-1">{stat.label}</div>
                <div className="text-gray-400 text-xs">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Process Section with Interactive Timeline */}
      <motion.section 
        style={{ x: processX }}
        className="py-8 min-[320box]:py-10 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-b from-white to-purple-50"
      >
        <div className="max-w-7xl mx-auto px-3 min-[320box]:px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6 min-[320box]:mb-8 sm:mb-10 md:mb-12 lg:mb-16"
          >
            <h2 className="text-xl min-[320box]:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 min-[320box]:mb-4 leading-tight bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              End-to-End Supply Chain Process
            </h2>
            <p className="text-sm min-[320box]:text-base sm:text-lg md:text-xl text-gray-600 max-w-xs min-[320box]:max-w-sm sm:max-w-md lg:max-w-3xl mx-auto px-2 min-[320box]:px-4 leading-relaxed">
              Seamless orchestration from raw materials to customer delivery.
            </p>
          </motion.div>

          <div className="relative">
            {/* Animated Timeline */}
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="hidden lg:block absolute top-1/2 left-0 h-2 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 transform -translate-y-1/2 z-0 rounded-full shadow-lg"
            />
            
            <div className="grid grid-cols-1 min-[320box]:grid-cols-2 lg:grid-cols-5 gap-3 min-[320box]:gap-4 sm:gap-5 lg:gap-6 xl:gap-8 relative z-10">
              {supplyChainProcess.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.15,
                    type: "spring",
                    stiffness: 100,
                    damping: 15
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    y: -5,
                    rotate: [0, -1, 1, 0]
                  }}
                  className="bg-gradient-to-br from-white to-gray-50 rounded-lg sm:rounded-xl lg:rounded-2xl p-3 min-[320box]:p-4 sm:p-5 lg:p-6 shadow-lg border border-gray-200 text-center group hover:shadow-xl transition-all duration-500 relative overflow-hidden"
                >
                  {/* Step Number */}
                  <motion.div 
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    className={`w-10 h-10 min-[320box]:w-12 min-[320box]:h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-white font-bold text-sm min-[320box]:text-base lg:text-lg mb-3 min-[320box]:mb-4 lg:mb-6 mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300`}
                  >
                    {step.step}
                  </motion.div>
                  
                  {/* Step Icon */}
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 15 }}
                    transition={{ duration: 0.3 }}
                    className="w-12 h-12 min-[320box]:w-14 min-[320box]:h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg sm:rounded-xl lg:rounded-2xl flex items-center justify-center text-indigo-600 mb-3 min-[320box]:mb-4 lg:mb-6 mx-auto border border-indigo-200 group-hover:border-indigo-300 transition-all duration-300"
                  >
                    {step.icon}
                  </motion.div>
                  
                  {/* Step Title */}
                  <h3 className="text-sm min-[320box]:text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-2 min-[320box]:mb-3 lg:mb-4 leading-tight">
                    {step.title}
                  </h3>
                  
                  {/* Step Description */}
                  <p className="text-gray-600 text-xs min-[320box]:text-sm leading-relaxed mb-3">
                    {step.description}
                  </p>
                  
                  {/* Step Metrics */}
                  <div className="flex flex-wrap gap-1 min-[320box]:gap-2 justify-center">
                    {step.metrics.map((metric, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: index * 0.1 + idx * 0.1 }}
                        className="text-xs px-2 py-1 bg-indigo-100 text-indigo-700 rounded-full"
                      >
                        {metric}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Benefits Section with Enhanced Animations */}
      <motion.section 
        style={{ y: benefitsY }}
        className="py-8 min-[320box]:py-10 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-b from-indigo-50 to-purple-50"
      >
        <div className="max-w-7xl mx-auto px-3 min-[320box]:px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6 min-[320box]:mb-8 sm:mb-10 md:mb-12 lg:mb-16"
          >
            <h2 className="text-xl min-[320box]:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 min-[320box]:mb-4 leading-tight bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Strategic Supply Chain Benefits
            </h2>
            <p className="text-sm min-[320box]:text-base sm:text-lg md:text-xl text-gray-600 max-w-xs min-[320box]:max-w-sm sm:max-w-md lg:max-w-3xl mx-auto px-2 min-[320box]:px-4 leading-relaxed">
              Achieve competitive advantage through intelligent supply chain management.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 min-[320box]:grid-cols-2 lg:grid-cols-3 gap-3 min-[320box]:gap-4 sm:gap-5 lg:gap-6 xl:gap-8">
            {benefitsData.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateX: 90 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
                whileHover={{ 
                  y: -10,
                  scale: 1.03,
                  boxShadow: "0 25px 50px rgba(99, 102, 241, 0.1)"
                }}
                className={`${benefit.bgColor} rounded-lg sm:rounded-xl lg:rounded-2xl p-3 min-[320box]:p-4 sm:p-5 lg:p-6 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-200 relative overflow-hidden group`}
              >
                {/* Floating Animation */}
                <motion.div 
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                  className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 rounded-full"
                />
                
                {/* Icon */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.3,
                    type: "spring",
                    stiffness: 150
                  }}
                  whileHover={{ 
                    rotate: 360,
                    scale: 1.1
                  }}
                  className={`w-14 h-14 min-[320box]:w-16 min-[320box]:h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-r ${benefit.color} rounded-lg sm:rounded-xl lg:rounded-2xl flex items-center justify-center text-white mb-4 min-[320box]:mb-5 lg:mb-8 mx-auto shadow-lg group-hover:shadow-xl`}
                >
                  {benefit.icon}
                </motion.div>
                
                {/* Title */}
                <h3 className="text-base min-[320box]:text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 min-[320box]:mb-4 lg:mb-6 text-center leading-tight">
                  {benefit.title}
                </h3>
                
                {/* Improvement Metric */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.4,
                    type: "spring",
                    stiffness: 200
                  }}
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="text-2xl min-[320box]:text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-3 min-[320box]:mb-4 lg:mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
                >
                  {benefit.improvement}
                </motion.div>
                
                {/* Description */}
                <p className="text-gray-600 text-xs min-[320box]:text-sm sm:text-base text-center leading-relaxed mb-4 min-[320box]:mb-5 lg:mb-8">
                  {benefit.description}
                </p>
                
                {/* Benefits List */}
                <div className="space-y-2">
                  {benefit.benefits.map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2 + idx * 0.1 }}
                      className="flex items-center gap-2"
                    >
                      <CheckCircle className="w-4 h-4 text-emerald-500" />
                      <span className="text-gray-700 text-xs min-[320box]:text-sm">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Technology Section */}
      <section className="py-8 min-[320box]:py-10 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-r from-gray-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-3 min-[320box]:px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6 min-[320box]:mb-8 sm:mb-10 md:mb-12 lg:mb-16"
          >
            <h2 className="text-xl min-[320box]:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 min-[320box]:mb-4 bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
              Enabling Technologies
            </h2>
            <p className="text-gray-300 text-sm min-[320box]:text-base max-w-xs min-[320box]:max-w-sm sm:max-w-md lg:max-w-2xl mx-auto">
              Cutting-edge technologies powering modern supply chains
            </p>
          </motion.div>

          <div className="grid grid-cols-1 min-[320box]:grid-cols-2 lg:grid-cols-4 gap-3 min-[320box]:gap-4 sm:gap-5 lg:gap-6">
            {technologyFeatures.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  type: "spring"
                }}
                whileHover={{ 
                  y: -5,
                  scale: 1.05
                }}
                className="bg-gradient-to-br from-gray-800/50 to-indigo-800/50 rounded-lg sm:rounded-xl lg:rounded-2xl p-4 min-[320box]:p-5 sm:p-6 lg:p-8 text-center border border-gray-700/50 backdrop-blur-sm"
              >
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`w-12 h-12 min-[320box]:w-14 min-[320box]:h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-r ${tech.color} rounded-lg sm:rounded-xl lg:rounded-2xl flex items-center justify-center text-white mb-3 min-[320box]:mb-4 lg:mb-6 mx-auto`}
                >
                  {tech.icon}
                </motion.div>
                <h3 className="text-base min-[320box]:text-lg sm:text-xl font-bold mb-2 min-[320box]:mb-3">{tech.title}</h3>
                <p className="text-gray-300 text-xs min-[320box]:text-sm mb-3">{tech.description}</p>
                <div className={`text-sm font-semibold bg-gradient-to-r ${tech.color} bg-clip-text text-transparent`}>
                  {tech.efficiency}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-8 min-[320box]:py-10 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-grid-white/20 bg-grid-16"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-3 min-[320box]:px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            <motion.h2 
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="text-xl min-[320box]:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 min-[320box]:mb-4 lg:mb-6 leading-tight"
            >
              Ready for Supply Chain 4.0?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-indigo-100 text-sm min-[320box]:text-base sm:text-lg md:text-xl mb-4 min-[320box]:mb-5 lg:mb-8 max-w-xs min-[320box]:max-w-sm sm:max-w-md lg:max-w-2xl mx-auto px-2 leading-relaxed"
            >
              Join global leaders who have transformed their supply chains with intelligent digital solutions.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col min-[320box]:flex-row gap-2 min-[320box]:gap-3 sm:gap-4 justify-center items-center"
            >
              <Link 
                to="/services"
                className="group relative overflow-hidden bg-white text-indigo-600 hover:text-indigo-700 px-4 min-[320box]:px-5 sm:px-6 lg:px-8 py-2 min-[320box]:py-2.5 sm:py-3 lg:py-4 rounded-lg sm:rounded-xl font-semibold text-sm min-[320box]:text-base sm:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl w-full min-[320box]:w-auto text-center shadow-lg"
              >
                <motion.div
                  animate={{ x: ["0%", "100%"] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-100 to-transparent"
                />
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Start Digital Transformation
                  <RocketLaunch className="w-5 h-5" />
                </span>
              </Link>
              <Link 
                to="/contact"
                className="group overflow-hidden border-2 border-white text-white hover:bg-white hover:text-indigo-600 px-4 min-[320box]:px-5 sm:px-6 lg:px-8 py-2 min-[320box]:py-2.5 sm:py-3 lg:py-4 rounded-lg sm:rounded-xl font-semibold text-sm min-[320box]:text-base sm:text-lg transition-all duration-300 w-full min-[320box]:w-auto text-center shadow-lg"
              >
                <span className="flex items-center justify-center gap-2">
                  Request Demo
                  <GroupWork className="w-5 h-5" />
                </span>
              </Link>
            </motion.div>
            
            {/* ROI Calculator Preview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-6 min-[320box]:mt-8 sm:mt-12"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 min-[320box]:p-4 sm:p-6 border border-white/20">
                <div className="grid grid-cols-1 min-[320box]:grid-cols-3 gap-3 min-[320box]:gap-4">
                  {[
                    { label: "Average ROI", value: "300%", color: "from-emerald-400 to-teal-400" },
                    { label: "Payback Period", value: "< 9 Months", color: "from-cyan-400 to-blue-400" },
                    { label: "Customer Satisfaction", value: "↑ 40%", color: "from-purple-400 to-pink-400" }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className="text-center p-2 min-[320box]:p-3"
                    >
                      <div className={`text-lg min-[320box]:text-xl sm:text-2xl font-bold mb-1 bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                        {item.value}
                      </div>
                      <div className="text-indigo-200 text-xs min-[320box]:text-sm">{item.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WarehouseManagement ;