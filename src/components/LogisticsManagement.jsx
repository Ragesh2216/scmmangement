import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  LocalShipping, 
  Inventory, 
  TrackChanges, 
  Analytics,
  Speed,
  Security,
  Group,
  TrendingUp,
  Warehouse,
  Route,
  Timeline,
  CheckCircle,
  PlayArrow
} from "@mui/icons-material";

const LogisticsManagement = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const logisticsFeatures = [
    {
      icon: <LocalShipping className="text-4xl" />,
      title: "Real-time Tracking",
      description: "Monitor shipments in real-time with GPS tracking and live updates",
      color: "from-blue-500 to-cyan-500",
      delay: 0
    },
    {
      icon: <Inventory className="text-4xl" />,
      title: "Smart Inventory",
      description: "Automated inventory management with predictive restocking",
      color: "from-green-500 to-emerald-500",
      delay: 100
    },
    {
      icon: <TrackChanges className="text-4xl" />,
      title: "Route Optimization",
      description: "AI-powered route planning for maximum efficiency",
      color: "from-purple-500 to-pink-500",
      delay: 200
    },
    {
      icon: <Analytics className="text-4xl" />,
      title: "Advanced Analytics",
      description: "Comprehensive analytics and performance insights",
      color: "from-orange-500 to-red-500",
      delay: 300
    }
  ];

  const logisticsStats = [
    { number: "99.8%", label: "On-time Delivery", icon: <CheckCircle /> },
    { number: "24/7", label: "Tracking Support", icon: <Speed /> },
    { number: "50K+", label: "Daily Shipments", icon: <LocalShipping /> },
    { number: "98%", label: "Customer Satisfaction", icon: <Group /> }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Order Processing",
      description: "Automated order intake and validation",
      icon: <Inventory />
    },
    {
      step: "02",
      title: "Inventory Allocation",
      description: "Smart inventory matching and allocation",
      icon: <Warehouse />
    },
    {
      step: "03",
      title: "Route Optimization",
      description: "AI-driven route planning and scheduling",
      icon: <Route />
    },
    {
      step: "04",
      title: "Real-time Tracking",
      description: "Live tracking and status updates",
      icon: <TrackChanges />
    },
    {
      step: "05",
      title: "Delivery & Analytics",
      description: "Proof of delivery and performance analytics",
      icon: <Analytics />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-gray-900 to-blue-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-green-500 rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-purple-500 rounded-full animate-ping"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              Advanced Logistics Management
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
              Streamline your supply chain with AI-powered logistics solutions that deliver efficiency, visibility, and reliability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-2xl"
              >
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                <PlayArrow className="mr-2" />
                Watch Demo
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Powerful Logistics Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to optimize your supply chain and deliver exceptional customer experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {logisticsFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center text-white mb-6 mx-auto`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {logisticsStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center text-white mb-4 mx-auto">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our streamlined process ensures efficient logistics management from start to finish.
            </p>
          </motion.div>

          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-green-500 transform -translate-y-1/2 z-0"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 relative z-10">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-6 shadow-lg border border-gray-100 text-center group hover:shadow-2xl transition-all duration-500"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    {step.step}
                  </div>
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-4 mx-auto group-hover:bg-blue-200 transition-colors duration-300">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Logistics?
            </h2>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              Join thousands of companies that trust our logistics platform to streamline their supply chain operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-2xl"
              >
                Get Started Today
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Schedule a Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Key Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how our logistics management platform can transform your business operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Cost Reduction",
                description: "Reduce operational costs by up to 40% with optimized routes and inventory management",
                icon: <TrendingUp />,
                color: "from-green-500 to-emerald-500"
              },
              {
                title: "Time Efficiency",
                description: "Save hundreds of hours with automated processes and real-time decision making",
                icon: <Speed />,
                color: "from-blue-500 to-cyan-500"
              },
              {
                title: "Enhanced Security",
                description: "Enterprise-grade security protecting your supply chain data and operations",
                icon: <Security />,
                color: "from-purple-500 to-pink-500"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center text-white mb-6`}>
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LogisticsManagement;