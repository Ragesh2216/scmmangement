import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { 
  LocalShipping, 
  Inventory, 
  Analytics, 
  Timeline, 
  Speed, 
  Security, 
  Cloud,
  TrendingUp,
  CheckCircle,
  Factory,
  Store,
  Public,
  Devices
} from '@mui/icons-material';

const ExploreServices = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const featuresRef = useRef(null);
  const statsRef = useRef(null);
  const ctaRef = useRef(null);
  
  // Scroll animations
  const { scrollYProgress } = useScroll();
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);
  const servicesY = useTransform(scrollYProgress, [0.1, 0.3], [100, 0]);
  const featuresOpacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);

  // Animated counters
  const [clients, setClients] = useState(0);
  const [deliveryRate, setDeliveryRate] = useState(0);
  const [costReduction, setCostReduction] = useState(0);
  const [countries, setCountries] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    // Animate counters
    const animateCounters = () => {
      const duration = 2000;
      const steps = 60;
      
      const animate = (setter, target, suffix = '') => {
        let start = 0;
        const step = target / steps;
        const timer = setInterval(() => {
          start += step;
          if (start >= target) {
            setter(target + suffix);
            clearInterval(timer);
          } else {
            setter(Math.floor(start) + suffix);
          }
        }, duration / steps);
      };
      
      animate(setClients, 500, '+');
      animate(setDeliveryRate, 99.9, '%');
      animate(setCostReduction, 40, '%');
      animate(setCountries, 80, '+');
    };

    animateCounters();

    // Parallax effect
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      
      document.querySelectorAll('.parallax-layer').forEach((el, i) => {
        const depth = (i + 1) * 0.5;
        el.style.transform = `translate(${x * depth}px, ${y * depth}px)`;
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const coreServices = [
    {
      icon: <LocalShipping />,
      title: 'Smart Logistics',
      description: 'AI-optimized route planning, real-time tracking, and multi-modal transportation management',
      gradient: 'from-blue-500 to-cyan-500',
      features: ['Route Optimization', 'Real-time Tracking', 'Fleet Management', 'Carrier Integration'],
      stats: '60% Faster Delivery'
    },
    {
      icon: <Inventory />,
      title: 'Warehouse Automation',
      description: 'Advanced WMS with robotics, IoT sensors, and automated inventory management',
      gradient: 'from-purple-500 to-pink-500',
      features: ['Robotic Automation', 'Smart Shelving', 'IoT Integration', 'Automated Sorting'],
      stats: '99.9% Accuracy'
    },
    {
      icon: <Analytics />,
      title: 'Predictive and  Analytics',
      description: 'AI-driven demand forecasting, risk prediction, and supply chain optimization',
      gradient: 'from-green-500 to-emerald-500',
      features: ['Demand Forecasting', 'Risk Analytics', 'Scenario Planning', 'Performance Insights'],
      stats: '30% Better Forecasts'
    },
    {
      icon: <Timeline />,
      title: 'End-to-End Visibility',
      description: 'Real-time tracking across suppliers, manufacturers, distributors, and retailers',
      gradient: 'from-orange-500 to-red-500',
      features: ['Supplier Portal', 'Manufacturing Insights', 'Distribution Tracking', 'Retail Analytics'],
      stats: 'Real-time Monitoring'
    }
  ];
  const aiInfrastructureFeatures = [
  {
    title: "AI Superclusters",
    description: "Massive-scale GPU clusters for training large language models",
    icon: "⚡",
    color: "text-yellow-400",
    points: [
      "10K+ NVIDIA H100 GPUs",
      "Petabyte-scale storage",
      "Custom ML frameworks"
    ]
  },
  {
    title: "MLOps Platform",
    description: "End-to-end machine learning operations and lifecycle management",
    icon: "🤖",
    color: "text-emerald-400",
    points: [
      "Auto-scaling training jobs",
      "Model versioning & registry",
      "A/B testing deployment"
    ]
  },
  {
    title: "Vector Databases",
    description: "High-performance databases for AI embeddings and semantic search",
    icon: "🗄️",
    color: "text-cyan-400",
    points: [
      "Millisecond query latency",
      "Billion+ vector capacity",
      "Real-time indexing"
    ]
  },
  {
    title: "Edge AI",
    description: "Distributed AI inference at the network edge",
    icon: "🌐",
    color: "text-pink-400",
    points: [
      "Low-latency inference",
      "Federated learning",
      "Privacy-preserving AI"
    ]
  }
];

  const supplyChainFeatures = [
    {
      title: 'Digital Twin Technology',
      description: 'Virtual replica of your supply chain for simulation and optimization',
      icon: <Devices />,
      color: 'text-blue-400'
    },
    {
      title: 'Blockchain Traceability',
      description: 'Immutable records for complete product traceability and compliance',
      icon: <Security />,
      color: 'text-purple-400'
    },
    {
      title: 'IoT and  ai Integration',
      description: 'Real-time data from sensors across the entire supply chain network',
      icon: <Cloud />,
      color: 'text-cyan-400'
    },
    {
      title: 'Sustainability Analytics',
      description: 'Carbon footprint tracking and sustainable logistics optimization',
      icon: <Public />,
      color: 'text-emerald-400'
    }
  ];

  const industrySolutions = [
    {
      name: 'Manufacturing',
      icon: '🏭',
      challenges: ['Raw Material Sourcing', 'Production Scheduling', 'Quality Control'],
      benefits: ['30% Faster Production', '25% Cost Reduction', 'Zero Defects']
    },
    {
      name: 'Retail & E-commerce',
      icon: '🛒',
      challenges: ['Last-mile Delivery', 'Inventory Synchronization', 'Returns Management'],
      benefits: ['Same-day Delivery', '95% Stock Accuracy', '30% Lower Returns']
    },
    {
      name: 'Healthcare',
      icon: '🏥',
      challenges: ['Cold Chain Management', 'Regulatory Compliance', 'Emergency Supply'],
      benefits: ['100% Compliance', 'Real-time Tracking', 'Emergency Response']
    },
    {
      name: 'Automotive',
      icon: '🚗',
      challenges: ['Just-in-Time Delivery', 'Global Sourcing', 'Quality Assurance'],
      benefits: ['Zero Delays', 'Global Integration', 'Quality Assurance']
    }
  ];

  const stats = [
    { value: clients, label: 'Global Clients', icon: '🌍', color: 'from-blue-400 to-cyan-400' },
    { value: deliveryRate, label: 'On-time Delivery', icon: '⏱️', color: 'from-emerald-400 to-teal-400' },
    { value: costReduction, label: 'Cost Reduction', icon: '💰', color: 'from-purple-400 to-pink-400' },
    { value: countries, label: 'Countries Served', icon: '📍', color: 'from-orange-400 to-red-400' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const floatAnimation = {
    y: [0, -15, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Gradient Orbs */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            rotate: [0, 360]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl parallax-layer"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            rotate: [360, 0]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl parallax-layer"
        />
        
        {/* Network Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10">
          {[...Array(15)].map((_, i) => (
            <motion.path
              key={i}
              d={`M${i * 100},0 Q${i * 100 + 50},${100 + i * 30} ${i * 100 + 100},200`}
              stroke="url(#network-gradient)"
              strokeWidth="1"
              fill="transparent"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.1 }}
              transition={{ duration: 2, delay: i * 0.1 }}
            />
          ))}
          <defs>
            <linearGradient id="network-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        style={{ scale: heroScale, opacity: heroOpacity }}
        className="relative min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        {/* Animated Supply Chain Visualization */}
        <div className="absolute inset-0">
          {/* Floating Supply Chain Elements */}
          {['🏭', '🚚', '📦', '🛒', '🌐', '⚡', '🔗', '📊'].map((icon, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -40, 0],
                x: [0, Math.sin(i) * 25, 0],
                rotate: [0, 180, 360],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "easeInOut"
              }}
              className="absolute text-3xl sm:text-4xl opacity-20"
              style={{
                left: `${10 + i * 12}%`,
                top: `${20 + (i % 4) * 20}%`,
              }}
            >
              {icon}
            </motion.div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10 w-full">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6 sm:space-y-8"
          >
            {/* Trust Badge */}
            <motion.div
              variants={itemVariants}
              animate={floatAnimation}
              className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-sm rounded-full mb-4 sm:mb-6 border border-white/10 shadow-lg"
            >
              <div className="flex items-center gap-2">
                <motion.div
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-2 h-2 rounded-full bg-cyan-400"
                />
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-tight"
            >
              <span className="block text-2xl sm:text-3xl md:text-4xl opacity-90 mb-2 sm:mb-4">
                Intelligent Supply Chain
              </span>
              <motion.span
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-[length:200%_auto] bg-clip-text text-transparent"
              >
                Optimization Platform
              </motion.span>
              <span className="block text-lg sm:text-xl md:text-2xl opacity-80 mt-2 sm:mt-4">
                AI-Powered • Real-time • Sustainable
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed"
            >
              Transform your supply chain with end-to-end visibility, predictive analytics, 
              and automated logistics. Reduce costs by 40% while achieving 99.9% on-time delivery.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={containerVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.div variants={itemVariants}>
                <Link
                  to="/contact"
                  className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg md:text-xl transition-all duration-500 overflow-hidden shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50"
                >
                  <motion.div
                    animate={pulseAnimation}
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  <motion.div
                    animate={{
                      x: [0, 100, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                  />
                  <span className="relative z-10 flex items-center gap-2 sm:gap-3">
                    <LocalShipping className="text-xl sm:text-2xl" />
                    Get Free Supply Chain Assessment
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="inline-block"
                    >
                      →
                    </motion.span>
                  </span>
                </Link>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Link
                  to="/services"
                  className="group relative inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-5 sm:px-7 md:px-9 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg md:text-xl transition-all duration-500 hover:bg-white/20 hover:shadow-xl hover:border-cyan-500/30"
                >
                  <span className="flex items-center gap-2 sm:gap-3">
                    <Analytics className="text-xl sm:text-2xl" />
                    View Solutions
                  </span>
                </Link>
              </motion.div>
            </motion.div>

            {/* Live Stats */}
            <motion.div
              ref={statsRef}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-8 sm:mt-12 max-w-4xl mx-auto"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center p-3 sm:p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-500/30 transition-all duration-300"
                >
                  <div className="text-2xl sm:text-3xl mb-2">{stat.icon}</div>
                  <motion.div
                    className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-white/60 text-xs sm:text-sm font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

       
      </motion.section>

      {/* Core Services Section */}
      <motion.section
        ref={servicesRef}
        style={{ y: servicesY }}
        className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-10 sm:mb-12 md:mb-16"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full mb-4 border border-blue-500/30"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                ⚡
              </motion.div>
              <span className="text-blue-400 font-medium text-sm sm:text-base">Core Solutions</span>
            </motion.div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
              Comprehensive
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> Supply Chain </span>
              Solutions
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
              End-to-end supply chain optimization powered by cutting-edge technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {coreServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                <div className="relative h-full rounded-xl sm:rounded-2xl overflow-hidden">
                  {/* Animated Background */}
                  <motion.div
                    animate={{
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-[length:200%_auto]`}
                  />
                  
                  {/* Card Content */}
                  <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 h-full group-hover:border-cyan-500/30 transition-all duration-500">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center text-white mb-4 sm:mb-6`}
                    >
                      {service.icon}
                    </motion.div>
                    
                    {/* Title & Description */}
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300"
                        style={{
                          backgroundImage: `linear-gradient(to right, ${service.gradient.split(' ')[1]}, ${service.gradient.split(' ')[3]})`
                        }}>
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed text-sm sm:text-base">
                      {service.description}
                    </p>
                    
                    {/* Stats */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: index * 0.2 }}
                      className="mb-4"
                    >
                      <div className={`text-sm font-semibold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                        {service.stats}
                      </div>
                    </motion.div>
                    
                    {/* Features */}
                    <div className="mb-4">
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 + idx * 0.05 }}
                            className="flex items-center gap-2 text-gray-400 text-xs sm:text-sm"
                          >
                            <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-500" />
                            {feature}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* CTA */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-4"
                    >
                      <Link
                        to="/services"
                        className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 text-xs sm:text-sm font-medium group/link"
                      >
                        <span>Explore Details</span>
                        <motion.svg
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                          className="w-3 h-3 sm:w-4 sm:h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </motion.svg>
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Advanced AI Infrastructure */}
<motion.section
  ref={featuresRef}
  style={{ opacity: featuresOpacity }}
  className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-b from-gray-900/50 to-purple-900/30"
>
  <div className="max-w-7xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center mb-10 sm:mb-12 md:mb-16"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
        <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Advanced AI
        </span>{' '}
        Infrastructure Solutions
      </h2>
      <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
        Next-generation infrastructure for machine learning and AI workloads
      </p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
      {aiInfrastructureFeatures.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          whileHover={{ y: -10, scale: 1.02 }}
          className="group"
        >
          <div className="relative h-full bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 group-hover:border-purple-500/30 transition-all duration-500 overflow-hidden">
            {/* Background gradient on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/0 via-purple-900/0 to-pink-900/0 group-hover:from-purple-900/10 group-hover:via-purple-900/5 group-hover:to-pink-900/10 transition-all duration-500"></div>
            
            {/* Icon */}
            <motion.div
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
              className={`relative z-10 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-all duration-300`}
            >
              <div className={`text-2xl sm:text-3xl ${feature.color}`}>
                {feature.icon}
              </div>
            </motion.div>
            
            {/* Content */}
            <div className="relative z-10">
              <h3 className={`text-lg sm:text-xl lg:text-2xl font-bold ${feature.color} mb-3`}>
                {feature.title}
              </h3>
              
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base mb-4">
                {feature.description}
              </p>
              
              {/* Feature Points */}
              <ul className="space-y-2 mb-6">
                {feature.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                    <span className="text-purple-400 mt-1">✓</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              
              {/* Learn More Link */}
              <Link to="/404">
                <motion.div
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center gap-2 text-purple-400 hover:text-pink-300 text-xs sm:text-sm font-medium cursor-pointer group/link"
                >
                  <span>Explore technology</span>
                  <motion.svg 
                    className="w-3 h-3 sm:w-4 sm:h-4"
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    animate={{ x: [0, 3, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </motion.svg>
                </motion.div>
              </Link>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</motion.section>
      {/* Industry Solutions */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-12 md:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
              Industry-Specific
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Solutions </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
              Tailored supply chain strategies for different industry verticals
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {industrySolutions.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group relative overflow-hidden rounded-xl sm:rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 p-5 sm:p-6 lg:p-8"
              >
                <div className="flex items-start gap-4 sm:gap-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl sm:rounded-2xl flex items-center justify-center text-2xl sm:text-3xl"
                  >
                    {industry.icon}
                  </motion.div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">{industry.name}</h3>
                    
                    {/* Challenges */}
                    <div className="mb-4 sm:mb-6">
                      <h4 className="text-cyan-400 text-sm sm:text-base font-semibold mb-2">Key Challenges Solved:</h4>
                      <div className="flex flex-wrap gap-2">
                        {industry.challenges.map((challenge, idx) => (
                          <span key={idx} className="px-2 sm:px-3 py-1 bg-gray-800/50 rounded-full text-gray-300 text-xs sm:text-sm">
                            {challenge}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Benefits */}
                    <div>
                      <h4 className="text-emerald-400 text-sm sm:text-base font-semibold mb-2">Achieved Benefits:</h4>
                      <div className="space-y-2">
                        {industry.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-500" />
                            <span className="text-gray-300 text-xs sm:text-sm">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-b from-blue-900/30 to-purple-900/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-12 md:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
              Trusted by
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"> Global </span>
              Leaders
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
              500+ companies across 80+ countries trust our supply chain solutions
            </p>
          </motion.div>

          {/* Client Logos */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8"
          >
            {['🚚', '🏭', '🛒', '🏥', '🚗', '💻'].map((logo, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, y: -5 }}
                className="flex items-center justify-center p-4 sm:p-6 bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="text-3xl sm:text-4xl opacity-80">{logo}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <motion.section
        ref={ctaRef}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      >
        <motion.div
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 opacity-90 bg-[length:200%_auto]"
        />
        
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />
        
        {/* Animated Icons */}
        <div className="absolute inset-0">
          {['📦', '🚚', '⚡', '🔗'].map((icon, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -30, 0],
                x: [0, Math.sin(i) * 20, 0],
                rotate: [0, 360, 0]
              }}
              transition={{
                duration: 6 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut"
              }}
              className="absolute text-3xl sm:text-4xl opacity-20"
              style={{
                left: `${15 + i * 25}%`,
                top: `${30 + (i % 2) * 40}%`,
              }}
            >
              {icon}
            </motion.div>
          ))}
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6"
          >
            Ready to Transform Your Supply Chain?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8"
          >
            Schedule a free consultation and discover how we can optimize your operations
          </motion.p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 bg-white text-blue-600 hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg transition-all duration-300 shadow-2xl hover:shadow-cyan-500/30"
              >
                <motion.span
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  🚀
                </motion.span>
                Get Free Assessment
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 border-2 border-white text-white hover:bg-white/10 px-5 sm:px-7 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg transition-all duration-300"
              >
                <span>📞</span>
                Schedule Demo
              </Link>
            </motion.div>
          </div>
          
          {/* Quick Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-6 sm:mt-8"
          >
            <div className="inline-flex flex-wrap items-center justify-center gap-4 text-sm text-white/70">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span>Free Consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span>30-Day Implementation</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                <span>24/7 Support</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Enhanced CSS Animations */}
      <style jsx global>{`
        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 10px;
        }

        ::-webkit-scrollbar-track {
          background: rgba(15, 23, 42, 0.8);
          backdrop-filter: blur(10px);
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #3b82f6, #06b6d4, #8b5cf6);
          border-radius: 5px;
          border: 2px solid rgba(15, 23, 42, 0.8);
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #2563eb, #0891b2, #7c3aed);
        }

        /* Selection color */
        ::selection {
          background: rgba(6, 182, 212, 0.3);
          color: white;
          backdrop-filter: blur(10px);
        }

        /* Smooth transitions */
        * {
          transition: background-color 0.3s ease, border-color 0.3s ease, transform 0.3s ease;
        }

        /* Gradient text animation */
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animate-gradient {
          background: linear-gradient(45deg, #06b6d4, #3b82f6, #8b5cf6);
          background-size: 200% 200%;
          animation: gradient 5s ease infinite;
        }

        /* Floating animation */
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        /* Pulse glow */
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(6, 182, 212, 0.5); }
          50% { box-shadow: 0 0 40px rgba(6, 182, 212, 0.8); }
        }

        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default ExploreServices;