import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Inventory,
  TrendingUp,
  Analytics,
  Speed,
  Security,
  AutoGraph,
  Warning,
  CheckCircle,
  Timeline,
  Storage,
  Dashboard,
  ShowChart,
  PlayArrow
} from "@mui/icons-material";

const InventoryOptimization = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const optimizationFeatures = [
    {
      icon: <AutoGraph className="text-4xl" />,
      title: "AI Demand Forecasting",
      description: "Predict future demand with machine learning algorithms and historical data analysis",
      color: "from-purple-500 to-pink-500",
      delay: 0
    },
    {
      icon: <Inventory className="text-4xl" />,
      title: "Smart Reordering",
      description: "Automated reorder points with dynamic safety stock calculations",
      color: "from-blue-500 to-cyan-500",
      delay: 100
    },
    {
      icon: <Analytics className="text-4xl" />,
      title: "Real-time Analytics",
      description: "Live inventory insights and performance dashboards",
      color: "from-green-500 to-emerald-500",
      delay: 200
    },
    {
      icon: <Warning className="text-4xl" />,
      title: "Stockout Prevention",
      description: "Proactive alerts for low stock and potential shortages",
      color: "from-orange-500 to-red-500",
      delay: 300
    }
  ];

  const optimizationStats = [
    { number: "40%", label: "Reduction in Carrying Costs", icon: <TrendingUp /> },
    { number: "99.5%", label: "Inventory Accuracy", icon: <CheckCircle /> },
    { number: "65%", label: "Faster Turnover", icon: <Speed /> },
    { number: "85%", label: "Reduction in Stockouts", icon: <Security /> }
  ];

  const optimizationProcess = [
    {
      step: "01",
      title: "Data Collection",
      description: "Gather historical sales, seasonality, and market data",
      icon: <Storage />
    },
    {
      step: "02",
      title: "AI Analysis",
      description: "Machine learning algorithms analyze patterns and trends",
      icon: <AutoGraph />
    },
    {
      step: "03",
      title: "Demand Forecasting",
      description: "Predict future demand with 95%+ accuracy",
      icon: <Timeline />
    },
    {
      step: "04",
      title: "Optimization Rules",
      description: "Set dynamic reorder points and safety stock levels",
      icon: <Dashboard />
    },
    {
      step: "05",
      title: "Continuous Monitoring",
      description: "Real-time tracking and automatic adjustments",
      icon: <ShowChart />
    }
  ];

  const benefitsData = [
    {
      title: "Reduced Carrying Costs",
      description: "Lower storage, insurance, and capital costs by maintaining optimal inventory levels",
      improvement: "40%",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Improved Cash Flow",
      description: "Free up working capital by reducing excess inventory investment",
      improvement: "35%",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Higher Service Levels",
      description: "Maintain 99%+ order fulfillment rates with optimal stock availability",
      improvement: "99.5%",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50 pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-gray-900 to-green-800 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <motion.div
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-10 left-10 w-20 h-20 bg-green-500 rounded-full opacity-20"
          ></motion.div>
          <motion.div
            animate={{
              y: [0, 15, 0],
              x: [0, -15, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-40 right-20 w-16 h-16 bg-blue-500 rounded-full opacity-20"
          ></motion.div>
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-20 left-1/4 w-12 h-12 bg-purple-500 rounded-full opacity-20"
          ></motion.div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              AI-Powered Inventory Optimization
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
              Transform your inventory management with intelligent forecasting, automated reordering, and real-time optimization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-2xl"
              >
                Optimize Your Inventory
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                <PlayArrow className="mr-2" />
                View Case Study
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Animated Chart Preview */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative max-w-4xl mx-auto mt-12 px-4"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="flex items-center justify-between mb-4">
              <div className="text-white font-semibold">Inventory Level Optimization</div>
              <div className="text-green-300 text-sm">Live Demo</div>
            </div>
            <div className="h-32 bg-black/20 rounded-lg p-4">
              <div className="flex items-end justify-between h-full space-x-2">
                {[30, 45, 60, 80, 95, 75, 65, 55, 70, 85, 90, 75].map((height, index) => (
                  <motion.div
                    key={index}
                    initial={{ height: 0 }}
                    animate={{ height: `${height}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className={`w-8 rounded-t-lg ${
                      height > 80 ? 'bg-red-400' : 
                      height > 60 ? 'bg-yellow-400' : 'bg-green-400'
                    }`}
                  ></motion.div>
                ))}
              </div>
            </div>
            <div className="flex justify-between text-xs text-gray-300 mt-2">
              <span>Understock</span>
              <span className="text-green-300">Optimal</span>
              <span>Overstock</span>
            </div>
          </div>
        </motion.div>

        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-green-50 to-transparent"></div>
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
              Intelligent Optimization Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leverage AI and machine learning to transform your inventory management strategy.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {optimizationFeatures.map((feature, index) => (
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
      <section className="py-20 bg-gradient-to-r from-green-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {optimizationStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center text-white mb-4 mx-auto">
                  {stat.icon}
                </div>
                <motion.div 
                  className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How Optimization Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI-driven process continuously optimizes your inventory for maximum efficiency.
            </p>
          </motion.div>

          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-blue-500 transform -translate-y-1/2 z-0"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 relative z-10">
              {optimizationProcess.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center group hover:shadow-2xl transition-all duration-500"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    {step.step}
                  </div>
                  <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 mb-4 mx-auto group-hover:bg-green-200 transition-colors duration-300">
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

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Tangible Business Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See measurable improvements in your inventory performance and bottom line.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefitsData.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 relative overflow-hidden"
              >
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-r ${benefit.color} rounded-full -mr-12 -mt-12 opacity-10`}></div>
                
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.3 }}
                  className={`w-20 h-20 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center text-white mb-6 mx-auto`}
                >
                  <TrendingUp className="text-2xl" />
                </motion.div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                  {benefit.title}
                </h3>
                
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.4 }}
                  className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent"
                >
                  {benefit.improvement}
                </motion.div>
                
                <p className="text-gray-600 text-center leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Optimize Your Inventory?
            </h2>
            <p className="text-xl mb-8 text-green-100 max-w-2xl mx-auto">
              Join industry leaders who have transformed their inventory management with AI-powered optimization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-2xl"
              >
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Request Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ROI Calculator Preview */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold mb-4">Calculate Your Potential Savings</h3>
            <p className="text-gray-400 mb-8">See how much you can save with intelligent inventory optimization</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {[
                { label: "Average Monthly Savings", value: "$15,000+" },
                { label: "Reduction in Stockouts", value: "85%" },
                { label: "ROI Timeline", value: "< 6 Months" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-800 rounded-xl p-6"
                >
                  <div className="text-2xl font-bold text-green-400 mb-2">{item.value}</div>
                  <div className="text-gray-400 text-sm">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default InventoryOptimization;