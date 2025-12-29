import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const ctaRef = useRef(null);
  const statsRef = useRef(null);
  const industriesRef = useRef(null);
  
  // Scroll animations
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);
  
  const heroScale = useSpring(scale, {
    stiffness: 100,
    damping: 30
  });

  // Counter animations for stats
  const [globalClients, setGlobalClients] = useState(0);
  const [deliveryRate, setDeliveryRate] = useState(0);
  const [costReduction, setCostReduction] = useState(0);
  const [countriesServed, setCountriesServed] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    // Animated counters
    const animateCounters = () => {
      const duration = 3000;
      const steps = 100;
      const increment = (target, setter) => {
        let start = 0;
        const step = target / steps;
        const timer = setInterval(() => {
          start += step;
          if (start >= target) {
            setter(target);
            clearInterval(timer);
          } else {
            setter(Math.floor(start));
          }
        }, duration / steps);
      };
      
      increment(350, setGlobalClients);
      increment(99.5, setDeliveryRate);
      increment(45, setCostReduction);
      increment(80, setCountriesServed);
    };

    animateCounters();

    // Parallax effect on mouse move
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      
      const elements = document.querySelectorAll('.parallax-element');
      elements.forEach(el => {
        el.style.transform = `translate(${x}px, ${y}px)`;
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const services = [
    {
      icon: '🚚',
      title: 'Logistics & Transportation',
      subtitle: 'Global Supply Chain',
      description: 'End-to-end logistics solutions with real-time tracking, route optimization, and multi-modal transportation management.',
      gradient: 'from-blue-500 to-cyan-500',
      features: ['Real-time Tracking', 'Route Optimization', 'Multi-modal Transport', 'Customs Clearance'],
      clients: ['DHL', 'FedEx', 'Maersk']
    },
    {
      icon: '🏭',
      title: 'Warehouse Management',
      subtitle: 'Smart Warehousing',
      description: 'Advanced WMS with automation, inventory optimization, and seamless integration across your supply chain network.',
      gradient: 'from-purple-500 to-pink-500',
      features: ['Automation Systems', 'Inventory Optimization', 'Space Utilization', 'Temperature Control'],
      clients: ['Amazon', 'Walmart', 'IKEA']
    },
    {
      icon: '📦',
      title: 'Inventory Optimization',
      subtitle: 'Stock Management',
      description: 'AI-driven inventory control, demand forecasting, and automated replenishment for optimal stock levels.',
      gradient: 'from-green-500 to-emerald-500',
      features: ['AI Forecasting', 'Safety Stock', 'Reorder Points', 'Seasonal Planning'],
      clients: ['Nike', 'Adidas', 'Uniqlo']
    },
    {
      icon: '🔗',
      title: 'Supply Chain Integration',
      subtitle: 'Seamless Connectivity',
      description: 'Complete integration of suppliers, manufacturers, distributors, and retailers for real-time visibility.',
      gradient: 'from-orange-500 to-red-500',
      features: ['ERP Integration', 'API Connectivity', 'Data Analytics', 'Vendor Management'],
      clients: ['Siemens', 'Bosch', 'Samsung']
    }
  ];

  const supplyChainFeatures = [
    {
      title: 'Real-time Visibility',
      description: 'Track shipments, inventory, and operations across your entire supply chain network.',
      icon: '👁️',
      color: 'text-cyan-400'
    },
    {
      title: 'Predictive Analytics',
      description: 'AI-powered forecasting for demand planning, risk assessment, and optimization.',
      icon: '📊',
      color: 'text-purple-400'
    },
    {
      title: 'Automation',
      description: 'Automated processes for order fulfillment, inventory management, and reporting.',
      icon: '⚙️',
      color: 'text-emerald-400'
    },
    {
      title: 'Sustainability',
      description: 'Green logistics solutions and carbon footprint reduction strategies.',
      icon: '🌱',
      color: 'text-green-400'
    }
  ];

  const industries = [
    { name: 'Retail & E-commerce', icon: '🛒', clients: 120 },
    { name: 'Manufacturing', icon: '🏭', clients: 85 },
    { name: 'Healthcare', icon: '🏥', clients: 65 },
    { name: 'Automotive', icon: '🚗', clients: 45 },
    { name: 'Food & Beverage', icon: '🍎', clients: 75 },
    { name: 'Technology', icon: '💻', clients: 95 }
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
    hidden: { y: 20, opacity: 0 },
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
    y: [0, -10, 0],
    transition: {
      duration: 3,
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

  const rotateAnimation = {
    rotate: [0, 360],
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: "linear"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 overflow-x-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div
          animate={rotateAnimation}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            ...rotateAnimation,
            rotate: [360, 0]
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
        />
        
        {/* Supply Chain Network Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20">
          {[...Array(8)].map((_, i) => (
            <motion.path
              key={i}
              d={`M${50 + i * 100},0 Q${100 + i * 100},${100 + i * 50} ${150 + i * 100},200`}
              stroke="url(#gradient)"
              strokeWidth="1"
              fill="transparent"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.2 }}
              transition={{ duration: 2, delay: i * 0.2, ease: "easeInOut" }}
            />
          ))}
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        style={{ scale: heroScale, opacity }}
        className="relative min-h-screen flex items-center justify-center pt-16 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        <div className="absolute inset-0 parallax-element">
          <img
            src="hero.png"
            alt="Global Supply Chain Solutions"
            className="w-full h-full object-cover object-center scale-110"
            style={{ filter: 'brightness(0.7) contrast(1.2)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/30 via-blue-500/20 to-emerald-400/10" />
        </div>


        <div className="max-w-7xl mx-auto text-center relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-8 sm:mb-12"
          >
            {/* Floating Badge */}
            <motion.div
              animate={floatAnimation}
              className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-sm rounded-full mb-8 border border-white/10 shadow-lg"
            >
              
            </motion.div>

            {/* Main Heading with Staggered Animation */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-4"
            >
              <motion.h1
                variants={itemVariants}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-tight"
              >
                <span className="block text-3xl sm:text-4xl md:text-5xl opacity-90">
                  Global Supply Chain
                </span>
                <span className="block mt-2 sm:mt-4">
                  <motion.span
                    animate={{
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    className="bg-gradient-to-r from-cyan-400 via-green-400 to-emerald-400 bg-[length:200%_auto] bg-clip-text text-transparent"
                  >
                    Intelligence
                  </motion.span>
                </span>
                
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed"
              >
                Transform your logistics operations with AI-driven optimization, real-time visibility, 
                and sustainable supply chain solutions.
                <span className="block mt-3 text-white/60 text-base sm:text-lg">
                  
                </span>
              </motion.p>
            </motion.div>

            {/* CTA Buttons with Hover Effects */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.div variants={itemVariants}>
                <Link
                  to="/contact"
                  className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-green-600 text-white px-8 sm:px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-500 overflow-hidden shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50"
                >
                  <motion.div
                    animate={pulseAnimation}
                    className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-green-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
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
                  <span className="relative z-10 flex items-center gap-3">
                    <span className="text-xl">🚀</span>
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
                  className="group relative inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 sm:px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-500 hover:bg-white/20 hover:shadow-xl hover:border-cyan-500/30"
                >
                  <span className="flex items-center gap-3">
                    <motion.span
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      className="text-xl"
                    >
                      ⚡
                    </motion.span>
                    View Supply Chain Solutions
                  </span>
                </Link>
              </motion.div>
            </motion.div>

            {/* Live Stats Counter */}
            <motion.div
              ref={statsRef}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-12 sm:mt-16 max-w-3xl mx-auto"
            >
              {[
                { number: `${globalClients}+`, label: 'Global Clients', color: 'from-cyan-400 to-blue-500', icon: '🌍' },
                { number: `${deliveryRate.toFixed(1)}%`, label: 'On-Time Delivery', color: 'from-green-400 to-emerald-500', icon: '⏱️' },
                { number: `${costReduction}%`, label: 'Cost Reduction', color: 'from-teal-400 to-cyan-500', icon: '💰' },
                { number: `${countriesServed}+`, label: 'Countries Served', color: 'from-purple-400 to-pink-500', icon: '📍' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center p-4 sm:p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-500/30 transition-all duration-300"
                >
                  <div className="text-2xl sm:text-3xl mb-2">{stat.icon}</div>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.2 + index * 0.2, type: "spring" }}
                    className={`text-2xl sm:text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-white/60 text-sm font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        
      </motion.section>

      {/* Supply Chain Features */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
        className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                Modern Supply Chain
              </span>{' '}
              Capabilities
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
              Leverage cutting-edge technologies to optimize every aspect of your supply chain operations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {supplyChainFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <div className="relative h-full bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 sm:p-8 group-hover:border-cyan-500/30 transition-all duration-500">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-all duration-300`}
                  >
                    <span className={feature.color}>{feature.icon}</span>
                  </motion.div>
                  
                  <h3 className={`text-xl sm:text-2xl font-bold ${feature.color} mb-3`}>
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                    {feature.description}
                  </p>
                  
                  <Link to="/404">
  <motion.div
    whileHover={{ x: 5 }}
    className="mt-4 inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 text-sm sm:text-base font-medium cursor-pointer"
  >
    <span>Learn more</span>
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  </motion.div>
</Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Industries We Serve */}
      <motion.section
        ref={industriesRef}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Industries We Transform
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
              Tailored supply chain solutions for diverse industry sectors
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="text-3xl">{industry.icon}</div>
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.2 }}
                    className="px-3 py-1 bg-cyan-500/20 rounded-full"
                  >
                    <span className="text-cyan-400 font-bold">{industry.clients}+</span>
                    <span className="text-cyan-300 text-sm ml-1">clients</span>
                  </motion.div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{industry.name}</h3>
                <p className="text-gray-400 text-sm">
                  Customized logistics solutions for {industry.name.toLowerCase()} industry
                </p>
                
                
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      

      {/* Why Choose Us Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose Our
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent"> Supply Chain </span>
              Solutions?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-cyan-600 to-blue-700 rounded-2xl p-6 sm:p-8 text-white relative overflow-hidden">
                <motion.div
                  animate={rotateAnimation}
                  className="absolute -right-20 -top-20 w-64 h-64 bg-white/10 rounded-full"
                />
                <div className="text-4xl mb-4">🏆</div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">15+ Years of Excellence</h2>
                <p className="text-cyan-100 leading-relaxed mb-4">
                  With over a decade and a half of experience, we've perfected supply chain optimization 
                  across 80+ countries.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  {[
                    { label: 'Projects Completed', value: '5,000+' },
                    { label: 'Team Experts', value: '200+' },
                    { label: 'Awards Won', value: '50+' },
                    { label: 'Countries Covered', value: '80+' }
                  ].map((stat, idx) => (
                    <div key={idx} className="text-center p-3 bg-white/10 rounded-lg">
                      <div className="text-xl font-bold">{stat.value}</div>
                      <div className="text-cyan-200 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                {[
                  {
                    icon: '🤝',
                    title: 'Strategic Partnerships',
                    description: 'Collaboration with leading logistics providers worldwide'
                  },
                  {
                    icon: '🔧',
                    title: 'Custom Solutions',
                    description: 'Tailored strategies for your specific industry needs'
                  },
                  {
                    icon: '📈',
                    title: 'Proven ROI',
                    description: 'Average 45% cost reduction for our clients'
                  },
                  {
                    icon: '🛡️',
                    title: 'Risk Management',
                    description: 'Comprehensive risk assessment and mitigation plans'
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 10 }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-500/30 transition-all duration-300"
                  >
                    <div className="text-2xl">{item.icon}</div>
                    <div>
                      <h3 className="font-bold text-white mb-1">{item.title}</h3>
                      <p className="text-gray-300 text-sm">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-lg sm:text-xl text-gray-300">
              What global companies say about our supply chain solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                quote: "45% cost reduction and 99.5% on-time delivery rates transformed our operations completely.",
                author: "Maria Rodriguez",
                position: "Supply Chain Director, Global Retail Inc.",
                rating: 5,
                logo: "🛒"
              },
              {
                quote: "The AI-driven forecasting has improved our inventory accuracy by 30% while reducing holding costs.",
                author: "James Wilson",
                position: "Operations Manager, TechCorp Ltd.",
                rating: 5,
                logo: "💻"
              },
              {
                quote: "Their sustainable logistics solutions helped us reduce carbon emissions by 25% last year.",
                author: "Sarah Chen",
                position: "Sustainability Officer, EcoGoods Co.",
                rating: 5,
                logo: "🌱"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">⭐</span>
                  ))}
                </div>
                <p className="text-gray-300 italic mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-cyan-500 to-emerald-600 rounded-full flex items-center justify-center text-2xl text-white">
                    {testimonial.logo}
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-white">{testimonial.author}</p>
                    <p className="text-gray-400 text-sm">{testimonial.position}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Final CTA Section */}
      <motion.section
        ref={ctaRef}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
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
          className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-emerald-600 to-blue-600 opacity-90 bg-[length:200%_auto]"
        />
        
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />
        
        {/* Animated Icons */}
        <div className="absolute inset-0">
          {['🚚', '✈️', '🚢', '📦'].map((icon, i) => (
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
            Ready to Optimize Your Supply Chain?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg sm:text-xl text-white/90 mb-8 sm:mb-12"
          >
            Join 500+ global companies achieving operational excellence with our supply chain solutions
          </motion.p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 bg-white text-cyan-600 hover:bg-gray-100 px-8 sm:px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-2xl hover:shadow-cyan-500/30"
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
                className="inline-flex items-center gap-3 border-2 border-white text-white hover:bg-white/10 px-6 sm:px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300"
              >
                <span>📞</span>
                Schedule a Call
              </Link>
            </motion.div>
          </div>
          
          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-8 sm:mt-12"
          >
            <div className="inline-flex items-center gap-4 text-sm text-white/70">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span>Free Consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                <span>30-Day Implementation</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Enhanced CSS Animations */}
      <style jsx global>{`
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 12px;
        }

        ::-webkit-scrollbar-track {
          background: rgba(15, 23, 42, 0.8);
          backdrop-filter: blur(10px);
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #06b6d4, #3b82f6, #8b5cf6);
          border-radius: 6px;
          border: 2px solid rgba(15, 23, 42, 0.8);
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #0891b2, #2563eb, #7c3aed);
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

        /* Parallax layers */
        .parallax-element {
          transition: transform 0.1s ease-out;
        }

        /* Gradient text animation */
        .gradient-text {
          background: linear-gradient(45deg, #06b6d4, #3b82f6, #8b5cf6);
          background-size: 200% 200%;
          animation: gradient 5s ease infinite;
        }

        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
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

export default Home;