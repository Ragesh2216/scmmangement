import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Warehouse,
  Inventory,
  TrendingUp,
  Analytics,
  Speed,
  Security,
  AutoGraph,
  CheckCircle,
  Timeline,
  Dashboard,
  ShowChart,
  PlayArrow,
  
  Storage,
  LocationOn,
  
} from "@mui/icons-material";

const WarehouseManagement = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const warehouseFeatures = [
    {
      icon: <Inventory className="text-4xl" />,
      title: "Smart Inventory Tracking",
      description: "Real-time inventory visibility with barcode and RFID technology for 99.9% accuracy",
      color: "from-blue-500 to-cyan-500",
      delay: 0
    },
   
    {
      icon: <Dashboard className="text-4xl" />,
      title: "Live Operations Dashboard",
      description: "Real-time monitoring of warehouse activities and performance metrics",
      color: "from-purple-500 to-pink-500",
      delay: 200
    },
    {
      icon: <Analytics className="text-4xl" />,
      title: "Predictive Analytics",
      description: "Machine learning forecasts for demand, space utilization, and labor planning",
      color: "from-orange-500 to-red-500",
      delay: 300
    }
  ];

  const warehouseStats = [
    { number: "40%", label: "Space Utilization", icon: <Storage /> },
    { number: "65%", label: "Faster Order Processing", icon: <Speed /> },
    { number: "99.9%", label: "Inventory Accuracy", icon: <CheckCircle /> },
    { number: "50%", label: "Labor Cost Reduction", icon: <TrendingUp /> }
  ];

  const managementProcess = [
    {
      step: "01",
      title: "Receiving & Inspection",
      description: "Automated goods receipt with quality checks and barcode labeling",
      icon: <CheckCircle />
    },
    {
      step: "02",
      title: "Smart Putaway",
      description: "AI-optimized storage location assignment based on demand patterns",
      icon: <LocationOn />
    },
    {
      step: "03",
      title: "Inventory Management",
      description: "Real-time tracking with cycle counting and automated replenishment",
      icon: <Inventory />
    },
    {
      step: "04",
      title: "Order Picking",
      description: "Optimized picking routes with batch and wave picking strategies",
      icon: <Warehouse />
    },
    {
      step: "05",
      title: "Shipping & Dispatch",
      description: "Automated packing, labeling, and carrier integration",
      icon: <Warehouse />
    }
  ];

  const benefitsData = [
    {
      title: "Space Optimization",
      description: "Increase storage capacity by up to 40% with intelligent slotting and vertical space utilization",
      improvement: "40%",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Operational Efficiency",
      description: "Reduce order processing time by 65% with optimized workflows and automation",
      improvement: "65%",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Cost Reduction",
      description: "Cut labor and operational costs by 50% through process automation and optimization",
      improvement: "50%",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const automationFeatures = [
    {
      title: "Automated Storage & Retrieval",
      description: "Robotic systems for high-density storage and rapid item retrieval",
      efficiency: "3x Faster"
    },
    {
      title: "Conveyor Systems",
      description: "Automated material handling between warehouse zones and workstations",
      efficiency: "24/7 Operation"
    },
    {
      title: "Pick-to-Light Systems",
      description: "Visual guidance systems for error-free and rapid order picking",
      efficiency: "99.9% Accuracy"
    },
    {
      title: "Inventory Drones",
      description: "Autonomous drones for cycle counting and inventory audits",
      efficiency: "90% Time Saved"
    }
  ];

  // Animated warehouse layout
  const warehouseZones = [
    { name: "Receiving", color: "bg-blue-500", width: "20%", items: 8 },
    { name: "Bulk Storage", color: "bg-green-500", width: "30%", items: 12 },
    { name: "Picking Zone", color: "bg-yellow-500", width: "25%", items: 15 },
    { name: "Packing", color: "bg-orange-500", width: "15%", items: 6 },
    { name: "Shipping", color: "bg-red-500", width: "10%", items: 4 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-orange-50 pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-gray-900 to-orange-800 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        
        {/* Animated Warehouse Background */}
        <div className="absolute top-0 left-0 w-full h-full">
          {/* Animated Shelves */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
              className="absolute bg-orange-600 opacity-20"
              style={{
                width: "4px",
                height: "60px",
                left: `${15 + i * 12}%`,
                top: "30%",
              }}
            />
          ))}
          
          {/* Floating Packages */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -20, 0],
                x: [0, 5, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 3
              }}
              className="absolute bg-white opacity-10 rounded"
              style={{
                width: "30px",
                height: "20px",
                left: `${20 + i * 15}%`,
                top: `${40 + (i % 3) * 10}%`,
              }}
            />
          ))}
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
              Smart Warehouse Management
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
              Transform your warehouse operations with AI-powered automation, real-time visibility, and optimized workflows.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-2xl"
              >
                Optimize Your Warehouse
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                <PlayArrow className="mr-2" />
                Virtual Tour
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Animated Warehouse Layout Preview */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative max-w-6xl mx-auto mt-12 px-4"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="flex items-center justify-between mb-4">
              <div className="text-white font-semibold">Smart Warehouse Layout</div>
              <div className="text-orange-300 text-sm">Live Operations</div>
            </div>
            
            {/* Warehouse Layout Visualization */}
            <div className="h-48 bg-black/20 rounded-lg p-4 relative">
              {/* Warehouse Floor */}
              <div className="absolute inset-4 bg-gray-800 rounded-lg border-2 border-gray-600">
                {/* Warehouse Zones */}
                {warehouseZones.map((zone, index) => (
                  <motion.div
                    key={index}
                    initial={{ width: 0 }}
                    animate={{ width: zone.width }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                    className={`${zone.color} h-full inline-block relative group cursor-pointer`}
                  >
                    <div className="absolute inset-0 flex items-center justify-center text-white text-xs font-bold">
                      {zone.name}
                    </div>
                    
                    {/* Animated Items in Zone */}
                    {[...Array(zone.items)].map((_, itemIndex) => (
                      <motion.div
                        key={itemIndex}
                        animate={{
                          y: [0, -8, 0],
                          opacity: [0.7, 1, 0.7],
                        }}
                        transition={{
                          duration: 2 + Math.random() * 2,
                          repeat: Infinity,
                          delay: itemIndex * 0.3
                        }}
                        className="absolute w-2 h-2 bg-white rounded-sm"
                        style={{
                          left: `${10 + (itemIndex % 4) * 20}%`,
                          top: `${20 + Math.floor(itemIndex / 4) * 25}%`,
                        }}
                      />
                    ))}
                    
                    {/* Hover Info */}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-black/80 text-white p-2 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                      {zone.name} Zone
                      <div className="text-orange-300">{zone.items} active items</div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Moving Forklift */}
              <motion.div
                animate={{
                  x: [0, 300, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute bottom-4 left-4 w-8 h-4 bg-yellow-500 rounded-sm"
              >
                <div className="absolute -top-1 left-1 w-1 h-1 bg-yellow-300 rounded-full"></div>
                <div className="absolute -top-1 right-1 w-1 h-1 bg-yellow-300 rounded-full"></div>
              </motion.div>
            </div>
            
            <div className="flex justify-between text-xs text-gray-300 mt-2">
              <span>Real-time Operations</span>
              <span className="text-orange-300">5 Active Zones</span>
            </div>
          </div>
        </motion.div>

        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-orange-50 to-transparent"></div>
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
              Advanced Warehouse Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leverage cutting-edge technology to optimize every aspect of your warehouse operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {warehouseFeatures.map((feature, index) => (
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
      <section className="py-20 bg-gradient-to-r from-orange-900 to-yellow-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {warehouseStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center text-white mb-4 mx-auto">
                  {stat.icon}
                </div>
                <motion.div 
                  className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent"
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

      {/* Automation Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Automation Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              State-of-the-art automation technologies to maximize efficiency and accuracy.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {automationFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold"
                  >
                    {feature.efficiency}
                  </motion.div>
                </div>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                
                {/* Animated Progress Bar */}
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "85%" }}
                    transition={{ duration: 1, delay: index * 0.3 }}
                    className="bg-gradient-to-r from-orange-500 to-yellow-500 h-2 rounded-full"
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>
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
              Warehouse Workflow
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Streamlined processes from receiving to shipping with maximum efficiency.
            </p>
          </motion.div>

          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 transform -translate-y-1/2 z-0"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 relative z-10">
              {managementProcess.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-white to-orange-50 rounded-2xl p-6 shadow-lg border border-gray-100 text-center group hover:shadow-2xl transition-all duration-500"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    {step.step}
                  </div>
                  <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 mb-4 mx-auto group-hover:bg-orange-200 transition-colors duration-300">
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Operational Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Achieve significant improvements in warehouse performance and cost efficiency.
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
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 relative overflow-hidden"
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
                  className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent"
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
      <section className="py-20 bg-gradient-to-r from-orange-600 to-yellow-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Warehouse?
            </h2>
            <p className="text-xl mb-8 text-orange-100 max-w-2xl mx-auto">
              Join industry leaders who have revolutionized their warehouse operations with smart management solutions.
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
                Schedule Demo
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
            <h3 className="text-3xl font-bold mb-4">Calculate Your Warehouse ROI</h3>
            <p className="text-gray-400 mb-8">See how much you can save with smart warehouse management</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {[
                { label: "Average Annual Savings", value: "$250,000+" },
                { label: "Order Accuracy", value: "99.9%" },
                { label: "ROI Timeline", value: "< 12 Months" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-800 rounded-xl p-6"
                >
                  <div className="text-2xl font-bold text-orange-400 mb-2">{item.value}</div>
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

export default WarehouseManagement;