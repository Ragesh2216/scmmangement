import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import WarehouseManagement from '../components/WarehouseManagement';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const ctaRef = useRef(null);
  
  // Scroll animations
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);
  
  const heroScale = useSpring(scale, {
    stiffness: 100,
    damping: 30
  });

  useEffect(() => {
    setIsVisible(true);
    
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
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: '🏭',
      title: 'Warehouse Management',
      subtitle: 'Smart Warehousing',
      description: 'Advanced WMS with automation, inventory optimization, and seamless integration across your supply chain network.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: '📦',
      title: 'Inventory Optimization',
      subtitle: 'Stock Management',
      description: 'AI-driven inventory control, demand forecasting, and automated replenishment for optimal stock levels.',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: '🔗',
      title: 'Supply Chain Integration',
      subtitle: 'Seamless Connectivity',
      description: 'Complete integration of suppliers, manufacturers, distributors, and retailers for real-time visibility.',
      gradient: 'from-orange-500 to-red-500'
    }
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 overflow-x-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            rotate: [0, 360]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            rotate: [0, -360]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
        />
        
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(90deg, transparent 95%, rgba(59, 130, 246, 0.3) 100%),
                             linear-gradient(0deg, transparent 95%, rgba(59, 130, 246, 0.3) 100%)`,
            backgroundSize: '50px 50px',
            animation: 'gridMove 20s linear infinite'
          }} />
        </div>
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
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur-sm rounded-full mb-8 border border-white/10 shadow-lg"
            >
              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-cyan-300 font-medium text-sm">Worldwide Supply Chain Solutions</span>
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
                    Excellence Delivered
                  </motion.span>
                </span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed"
              >
                Optimizing logistics, transforming warehouses, and revolutionizing inventory management worldwide.
                <span className="block mt-3 text-white/60 text-base sm:text-lg">
                  End-to-end supply chain solutions with 99.5% on-time delivery guarantee.
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
                  className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-green-600 text-white px-8 sm:px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-500 overflow-hidden shadow-2xl shadow-cyan-500/30"
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
                  <span className="relative z-10 flex items-center gap-2">
                    🚛 Optimize Your Supply Chain
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
                  className="group relative inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 sm:px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-500 hover:bg-white/20 hover:shadow-xl"
                >
                  <span className="flex items-center gap-2">
                    📊 View Our Solutions
                    <motion.span
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      className="inline-block"
                    >
                      ⚡
                    </motion.span>
                  </span>
                </Link>
              </motion.div>
            </motion.div>

            {/* Animated Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="grid grid-cols-3 gap-6 mt-12 sm:mt-16 max-w-md mx-auto"
            >
              {[
                { number: '350+', label: 'Global Clients', color: 'from-cyan-400 to-blue-500' },
                { number: '99.5%', label: 'On-Time Delivery', color: 'from-green-400 to-emerald-500' },
                { number: '45%', label: 'Cost Reduction', color: 'from-teal-400 to-cyan-500' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
                >
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

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-cyan-400/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2" />
          </div>
        </motion.div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        ref={servicesRef}
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
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="inline-block px-6 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full mb-4 border border-blue-500/30"
            >
              <span className="text-blue-400">💎</span>
            </motion.div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Advanced
              </span>{' '}
              Supply Chain Services
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive logistics and operations solutions powered by cutting-edge technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                <div className="relative h-full rounded-2xl overflow-hidden">
                  {/* Animated Gradient Background */}
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
                  <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 sm:p-8 h-full group-hover:border-cyan-500/30 transition-all duration-500">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center text-2xl mb-6`}
                    >
                      {service.icon}
                    </motion.div>
                    
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300"
                        style={{
                          backgroundImage: `linear-gradient(to right, ${service.gradient.split(' ')[1]}, ${service.gradient.split(' ')[3]})`
                        }}>
                      {service.title}
                    </h3>
                    
                    <p className="text-cyan-400 font-semibold mb-3 text-sm sm:text-base">{service.subtitle}</p>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed text-sm sm:text-base">
                      {service.description}
                    </p>
                    
                    {/* Animated Button */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        to="/404"
                        className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 text-sm sm:text-base font-medium group/link"
                      >
                        <span>Explore Service</span>
                        <motion.svg
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                          className="w-4 h-4"
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

      {/* CTA Section */}
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
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6"
          >
            Transform Your Supply Chain Today
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg sm:text-xl text-white/90 mb-8 sm:mb-12"
          >
            Join 500+ global companies optimizing their logistics with our solutions
          </motion.p>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-white text-cyan-600 hover:bg-gray-100 px-8 sm:px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-2xl"
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
        </div>
      </motion.section>

      {/* Quality Promise Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl p-6 sm:p-8 text-white relative overflow-hidden">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -right-20 -top-20 w-64 h-64 bg-white/10 rounded-full"
                />
                <div className="text-4xl mb-4">⭐</div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">15+ Years of Logistics Excellence</h2>
                <p className="text-orange-100 leading-relaxed">
                  With over a decade and a half of experience, we've perfected the art of supply chain optimization.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 text-center lg:text-left">
                Expert Logistics Team
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                {[
                  { name: 'Sarah Johnson', role: 'Logistics Director', avatar: '👩‍💼' },
                  { name: 'Michael Chen', role: 'Supply Chain Analyst', avatar: '👨‍💻' },
                  { name: 'Emily Rodriguez', role: 'Operations Manager', avatar: '👩‍🔧' }
                ].map((member, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -10 }}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 text-center border border-white/10"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-cyan-500 to-emerald-600 rounded-full flex items-center justify-center text-white text-xl sm:text-2xl mx-auto mb-4"
                    >
                      {member.avatar}
                    </motion.div>
                    <h3 className="font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-cyan-400 text-sm">{member.role}</p>
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
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Client Success Stories
            </h2>
            <p className="text-lg sm:text-xl text-gray-300">
              What our logistics partners say about us
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10"
          >
            <motion.div
              animate={floatAnimation}
              className="text-5xl sm:text-6xl mb-4 sm:mb-6 text-cyan-400 text-center"
            >
              🚛
            </motion.div>
            <p className="text-gray-300 text-lg sm:text-xl italic text-center mb-6 sm:mb-8 leading-relaxed">
              "The supply chain optimization provided by Global Logistics transformed our operations completely. We achieved 45% cost reduction and 99.5% on-time delivery rates."
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-cyan-500 to-emerald-600 rounded-full flex items-center justify-center text-white">
                👤
              </div>
              <div className="text-left">
                <p className="font-semibold text-white">Maria Rodriguez</p>
                <p className="text-gray-400">Supply Chain Director, Global Retail Inc.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <WarehouseManagement />

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
          width: 10px;
        }

        ::-webkit-scrollbar-track {
          background: rgba(15, 23, 42, 0.8);
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #06b6d4, #3b82f6);
          border-radius: 5px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #0891b2, #2563eb);
        }

        /* Selection color */
        ::selection {
          background: rgba(6, 182, 212, 0.3);
          color: white;
        }

        /* Smooth transitions */
        * {
          transition: background-color 0.3s ease, border-color 0.3s ease;
        }

        /* Parallax layers */
        .parallax-element {
          transition: transform 0.1s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Home;