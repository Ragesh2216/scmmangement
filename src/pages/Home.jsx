import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import WarehouseManagement from '../components/WarehouseManagement';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      icon: '🚚',
      title: 'Logistics & Transportation',
      subtitle: 'Global Supply Chain',
      description: 'End-to-end logistics solutions with real-time tracking, route optimization, and multi-modal transportation management.'
    },
    {
      icon: '🏭',
      title: 'Warehouse Management',
      subtitle: 'Smart Warehousing',
      description: 'Advanced WMS with automation, inventory optimization, and seamless integration across your supply chain network.'
    },
    {
      icon: '📦',
      title: 'Inventory Optimization',
      subtitle: 'Stock Management',
      description: 'AI-driven inventory control, demand forecasting, and automated replenishment for optimal stock levels.'
    },
    {
      icon: '🔗',
      title: 'Supply Chain Integration',
      subtitle: 'Seamless Connectivity',
      description: 'Complete integration of suppliers, manufacturers, distributors, and retailers for real-time visibility.'
    }
  ];

  const stats = [
    { number: '500+', label: 'Global Clients' },
    { number: '99.5%', label: 'On-Time Delivery' },
    { number: '45%', label: 'Cost Reduction' }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Supply Chain Assessment',
      description: 'Comprehensive analysis of your current supply chain operations and identification of optimization opportunities.',
      button: 'Request Assessment'
    },
    {
      step: '02',
      title: 'Custom Implementation',
      description: 'Tailored implementation of supply chain solutions with continuous monitoring and performance optimization.',
      button: "Let's Optimize"
    }
  ];

  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'Logistics Director',
      avatar: '👩‍💼'
    },
    {
      name: 'Michael Chen',
      role: 'Supply Chain Analyst',
      avatar: '👨‍💻'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Operations Manager',
      avatar: '👩‍🔧'
    }
  ];


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900">
     {/* Hero Section */}
<section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
  {/* Enhanced Background Image with Animations */}
  <div className="absolute inset-0">
    <img
      src="hero.png"
      alt="Global Supply Chain Solutions"
      className="w-full h-full object-cover object-center scale-110 animate-parallax-slow"
    />
    {/* Multi-layer Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/20 via-blue-500/15 to-emerald-400/10 animate-gradient-shift"></div>
    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-gray-900/30"></div>
  </div>

  {/* Animated Background Elements */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Floating Gradient Orbs */}
    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl animate-float-orb-1"></div>
    <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-green-400/20 to-emerald-500/20 rounded-full blur-3xl animate-float-orb-2"></div>
    <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gradient-to-r from-teal-400/20 to-cyan-500/20 rounded-full blur-3xl animate-float-orb-3"></div>
    
    {/* Supply Chain Network Animation */}
    <div className="absolute inset-0 opacity-10">
      <div className="network-pattern-animated"></div>
    </div>

    {/* Logistics-themed Floating Particles */}
    {[...Array(20)].map((_, i) => (
      <div
        key={i}
        className="absolute rounded-full animate-particle-float"
        style={{
          width: `${Math.random() * 10 + 5}px`,
          height: `${Math.random() * 10 + 5}px`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          backgroundColor: ['#10B981', '#3B82F6', '#059669', '#06B6D4', '#84CC16', '#F59E0B'][Math.floor(Math.random() * 6)],
          opacity: Math.random() * 0.4 + 0.1,
          animationDelay: `${Math.random() * 20}s`,
          animationDuration: `${Math.random() * 25 + 15}s`
        }}
      />
    ))}

    {/* Supply Chain Icons Floating */}
    {['🚚', '📦', '🏭', '🌐', '⚡', '🔗'].map((icon, i) => (
      <div
        key={`icon-${i}`}
        className="absolute text-2xl animate-logistics-float"
        style={{
          left: `${20 + i * 15}%`,
          top: `${Math.random() * 80 + 10}%`,
          animationDelay: `${i * 3}s`,
          animationDuration: `${20 + i * 2}s`
        }}
      >
        {icon}
      </div>
    ))}
  </div>

  <div className="max-w-7xl mx-auto text-center relative z-10">
    <div className={`mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      
     

      {/* Animated Main Heading */}
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-tight drop-shadow-2xl">
        <span className="block animate-slide-in-up">
          Global Supply Chain
        </span>
        <span className="block mt-4">
          <span className="bg-gradient-to-r from-cyan-400 via-green-500 to-emerald-600 bg-clip-text text-transparent animate-gradient-flow">
            Excellence Delivered
          </span>
        </span>
      </h1>

      {/* Animated Description */}
      <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in-up delay-300 drop-shadow-lg">
        Optimizing logistics, transforming warehouses, and revolutionizing inventory management worldwide.
        <span className="block mt-3 text-white/60 text-lg">
          End-to-end supply chain solutions with 99.5% on-time delivery guarantee.
        </span>
      </p>

      {/* Enhanced CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up delay-500">
        <Link
          to="/contact"
          className="group relative bg-gradient-to-r from-cyan-500 to-green-600 hover:from-cyan-600 hover:to-green-700 text-white px-12 py-5 rounded-2xl font-bold text-lg transition-all duration-500 transform hover:scale-105 hover:shadow-2xl shadow-lg overflow-hidden"
        >
          {/* Shine Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
          <span className="relative z-10 flex items-center gap-3">
            🚛 Optimize Your Supply Chain
            <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
          </span>
        </Link>

        <Link
          to="/services"
          className="group relative bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-500 transform hover:scale-105 hover:shadow-xl"
        >
          <span className="flex items-center gap-3">
            📊 View Our Solutions
            <span className="group-hover:scale-110 transition-transform duration-300">⚡</span>
          </span>
        </Link>
      </div>

      {/* Animated Stats */}
      <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto animate-fade-in-up delay-700">
        {[
          { number: '350+', label: 'Global Clients', color: 'from-cyan-400 to-blue-500' },
          { number: '99.5%', label: 'On-Time Delivery', color: 'from-green-400 to-emerald-500' },
          { number: '45%', label: 'Cost Reduction', color: 'from-teal-400 to-cyan-500' }
        ].map((stat, index) => (
          <div key={index} className="text-center">
            <div className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2 animate-count-up`}>
              {stat.number}
            </div>
            <div className="text-white/60 text-sm font-medium">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  </div>

  {/* Scroll Indicator */}
  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-scroll-indicator">
    <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
      <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse"></div>
    </div>
  </div>

  {/* Enhanced CSS Animations */}
  <style jsx>{`
    @keyframes parallaxSlow {
      0%, 100% {
        transform: scale(1.1) translateY(0);
      }
      50% {
        transform: scale(1.15) translateY(-10px);
      }
    }

    @keyframes gradientShift {
      0%, 100% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
    }

    @keyframes gradientFlow {
      0%, 100% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
    }

    @keyframes floatOrb1 {
      0%, 100% {
        transform: translate(0, 0) scale(1);
      }
      33% {
        transform: translate(50px, -60px) scale(1.2);
      }
      66% {
        transform: translate(-30px, 40px) scale(0.8);
      }
    }

    @keyframes floatOrb2 {
      0%, 100% {
        transform: translate(0, 0) scale(1);
      }
      33% {
        transform: translate(-60px, 50px) scale(1.3);
      }
      66% {
        transform: translate(40px, -30px) scale(0.7);
      }
    }

    @keyframes floatOrb3 {
      0%, 100% {
        transform: translate(0, 0) scale(1);
      }
      33% {
        transform: translate(40px, 60px) scale(1.1);
      }
      66% {
        transform: translate(-50px, -40px) scale(0.9);
      }
    }

    @keyframes particleFloat {
      0%, 100% {
        transform: translateY(0) translateX(0) rotate(0deg);
      }
      25% {
        transform: translateY(-50px) translateX(30px) rotate(90deg);
      }
      50% {
        transform: translateY(30px) translateX(-40px) rotate(180deg);
      }
      75% {
        transform: translateY(-30px) translateX(50px) rotate(270deg);
      }
    }

    @keyframes logisticsFloat {
      0%, 100% {
        transform: translateY(0) translateX(0) rotate(0deg);
        opacity: 0.7;
      }
      25% {
        transform: translateY(-100px) translateX(50px) rotate(90deg);
        opacity: 1;
      }
      50% {
        transform: translateY(50px) translateX(-80px) rotate(180deg);
        opacity: 0.7;
      }
      75% {
        transform: translateY(-80px) translateX(100px) rotate(270deg);
        opacity: 1;
      }
    }

    @keyframes glowPulse {
      0%, 100% {
        box-shadow: 0 0 20px rgba(6, 182, 212, 0.3);
        background: rgba(255, 255, 255, 0.1);
      }
      50% {
        box-shadow: 0 0 40px rgba(6, 182, 212, 0.6);
        background: rgba(255, 255, 255, 0.15);
      }
    }

    @keyframes slideInUp {
      from {
        opacity: 0;
        transform: translateY(100px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes countUp {
      from {
        opacity: 0;
        transform: scale(0.5) translateY(20px);
      }
      to {
        opacity: 1;
        transform: scale(1) translateY(0);
      }
    }

    @keyframes scrollIndicator {
      0%, 100% {
        transform: translateY(0);
        opacity: 0.5;
      }
      50% {
        transform: translateY(8px);
        opacity: 1;
      }
    }

    .animate-parallax-slow {
      animation: parallaxSlow 30s ease-in-out infinite;
    }

    .animate-gradient-shift {
      background-size: 200% 200%;
      animation: gradientShift 15s ease infinite;
    }

    .animate-gradient-flow {
      background-size: 200% 200%;
      animation: gradientFlow 3s ease infinite;
    }

    .animate-float-orb-1 {
      animation: floatOrb1 20s ease-in-out infinite;
    }

    .animate-float-orb-2 {
      animation: floatOrb2 25s ease-in-out infinite;
    }

    .animate-float-orb-3 {
      animation: floatOrb3 18s ease-in-out infinite;
    }

    .animate-particle-float {
      animation: particleFloat 25s ease-in-out infinite;
    }

    .animate-logistics-float {
      animation: logisticsFloat 20s ease-in-out infinite;
    }

    .animate-glow-pulse {
      animation: glowPulse 3s ease-in-out infinite;
    }

    .animate-slide-in-up {
      animation: slideInUp 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
    }

    .animate-count-up {
      animation: countUp 0.8s ease-out forwards;
      opacity: 0;
    }

    .animate-scroll-indicator {
      animation: scrollIndicator 2s ease-in-out infinite;
    }

    .network-pattern-animated {
      background-image: 
        radial-gradient(circle at 25% 25%, rgba(6, 182, 212, 0.1) 2px, transparent 2px),
        radial-gradient(circle at 75% 75%, rgba(16, 185, 129, 0.1) 2px, transparent 2px);
      background-size: 100px 100px;
      animation: gradientShift 60s linear infinite;
    }
  `}</style>
</section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/20 to-emerald-900/20"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-fade-in-up">
              Our Supply Chain Services
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto animate-fade-in-up delay-200">
              End-to-End Logistics & Operations Solutions
            </p>
            <p className="text-gray-400 mt-4 max-w-3xl mx-auto animate-fade-in-up delay-300">
              Comprehensive supply chain management services that optimize your logistics, reduce costs, and improve efficiency across your entire operations network.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative overflow-hidden bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up group border border-white/20"
                style={{ animationDelay: `${index * 200 + 400}ms` }}
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="text-4xl mb-4 text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-cyan-400 font-semibold mb-3">{service.subtitle}</p>
                  <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-600 to-emerald-700 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in-up">
            Stop wasting resources on inefficient supply chains.
          </h2>
          <p className="text-xl mb-8 opacity-90 animate-fade-in-up delay-200">
            Let's optimize your logistics operations
          </p>
          <Link to="/contact" 
          className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl animate-pulse-slow backdrop-blur-sm">
            🚛 Get Free Supply Chain Assessment
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-pink-900/20"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <div className="relative overflow-hidden bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 transform hover:-translate-y-2 transition-all duration-500">
                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-emerald-600 rounded-2xl flex items-center justify-center text-white text-2xl mb-6">
                  🎯
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">
                  Global Supply Chain Expertise
                </h2>
                <h3 className="text-xl text-cyan-300 font-semibold mb-4">
                  We Help Businesses Scale Logistics Operations
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  With decades of experience in global supply chain management, we provide innovative solutions that optimize logistics, reduce costs, and enhance operational efficiency across all touchpoints of your supply chain.
                </p>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                      <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-1">{stat.number}</div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-emerald-500/20 to-green-500/20 rounded-xl border border-emerald-500/30">
                  <div className="text-2xl">✅</div>
                  <div>
                    <h4 className="font-semibold text-emerald-300">Global Network Partners</h4>
                    <p className="text-emerald-200 text-sm">Best Practices for Supply Chain Excellence</p>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-cyan-500/20 rounded-xl border border-cyan-500/30">
                  <p className="text-cyan-300 font-semibold flex items-center gap-2">
                    <span>📞</span>
                    Join our logistics network – partner with us.
                  </p>
                  <p className="text-cyan-200 mt-1">+1 (555) 123-LOGI</p>
                </div>
              </div>
            </div>

            <div className="animate-fade-in-right">
              <div className="bg-gradient-to-br from-cyan-500 to-emerald-600 rounded-2xl p-8 text-white relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute top-4 right-4 text-6xl opacity-20">🌐</div>
                
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-2xl font-bold mb-4">Supply Chain Process</h3>
                <h4 className="text-xl mb-2">How we optimize your logistics</h4>
                <p className="text-cyan-100 mb-6">Grow and scale efficiently</p>
                <p className="text-cyan-200 mb-8">
                  Our proven methodology ensures seamless integration of logistics, warehousing, and inventory management for maximum efficiency and cost savings.
                </p>

                <div className="space-y-6">
                  {processSteps.map((step, index) => (
                    <div key={index} className="flex items-start gap-4 animate-fade-in-up" style={{ animationDelay: `${index * 200}ms` }}>
                      <div className="w-12 h-12 bg-white text-cyan-600 rounded-xl flex items-center justify-center font-bold text-lg flex-shrink-0">
                        {step.step}
                      </div>
                      <div>
                        <h5 className="font-bold text-white mb-2">{step.title}</h5>
                        <p className="text-cyan-200 text-sm mb-3">{step.description}</p>
                        <Link to="/404" className="bg-white text-cyan-600 hover:bg-gray-100 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 transform hover:scale-105">
                          {step.button}
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Promise Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 to-red-900/20"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <div className="bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl p-8 text-white relative overflow-hidden">
                <div className="text-4xl mb-4">⭐</div>
                <h2 className="text-3xl font-bold mb-4">15+ Years of Logistics Excellence</h2>
                <h3 className="text-xl mb-4">What we promise: High-Quality Supply Chain Solutions</h3>
                <p className="text-orange-100 leading-relaxed">
                  With over a decade and a half of experience, we've perfected the art of supply chain optimization. Our solutions deliver measurable results through advanced technology, proven methodologies, and deep industry expertise in global logistics and operations management.
                </p>
              </div>
            </div>

            <div className="animate-fade-in-right">
              <div className="text-center">
                <div className="text-4xl mb-4">👥</div>
                <h2 className="text-3xl font-bold text-white mb-4">Logistics Team Members</h2>
                <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                  Meet our expert supply chain and logistics professionals
                </p>
                <p className="text-gray-400 mb-8">
                  Our team brings together decades of experience in logistics, warehousing, inventory management, and supply chain optimization from across the globe.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {teamMembers.map((member, index) => (
                    <div
                      key={index}
                      className="relative overflow-hidden bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up group border border-white/20"
                      style={{ animationDelay: `${index * 200}ms` }}
                    >
                      <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-emerald-600 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        {member.avatar}
                      </div>
                      <h3 className="font-bold text-white mb-1">{member.name}</h3>
                      <p className="text-cyan-400 text-sm">{member.role}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 to-pink-900/30"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl font-bold text-white mb-4 animate-fade-in-up">
            Client Success Stories
          </h2>
          <p className="text-xl text-gray-300 mb-12 animate-fade-in-up delay-200">
            What our logistics partners say about us?
          </p>

          <div className="relative overflow-hidden bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-4xl mx-auto transform hover:-translate-y-2 transition-all duration-500 animate-fade-in-up delay-400">
            {/* Quote Icon */}
            <div className="text-6xl mb-4 text-cyan-400">🚛</div>
            <p className="text-gray-300 text-lg italic mb-6">
              "The supply chain optimization provided by Global Logistics transformed our operations completely. We achieved 45% cost reduction and 99.5% on-time delivery rates. Their team's expertise in logistics and warehouse management is unparalleled."
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-emerald-600 rounded-full flex items-center justify-center text-white">
                👤
              </div>
              <div className="text-left">
                <p className="font-semibold text-white">Maria Rodriguez</p>
                <p className="text-gray-400 text-sm">Supply Chain Director, Global Retail Inc.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-cyan-900/20"></div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="text-4xl mb-4">📊</div>
          <h2 className="text-3xl font-bold text-white mb-4">Supply Chain Success Stories</h2>
          <p className="text-gray-300 mb-12 max-w-2xl mx-auto">
            Our Recent Logistics Transformations in the Market
          </p>
          <p className="text-gray-400 mb-12">
            Real-world implementations that demonstrate our ability to optimize supply chains, reduce costs, and improve efficiency across diverse industries.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Global Logistics Network',
                description: 'Implemented end-to-end logistics solution across 15 countries with 60% faster delivery times.',
                icon: '🌍'
              },
              {
                title: 'Warehouse Automation',
                description: 'Deployed robotic automation reducing operational costs by 35% and improving accuracy to 99.9%.',
                icon: '🏭'
              },
              {
                title: 'Inventory Optimization',
                description: 'AI-driven inventory management reducing stockouts by 80% and carrying costs by 25%.',
                icon: '📦'
              }
            ].map((project, index) => (
              <div
                key={index}
                className="relative overflow-hidden bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up group"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="w-full h-48 bg-gradient-to-r from-cyan-400 to-emerald-500 rounded-xl mb-4 flex items-center justify-center text-white text-6xl">
                  {project.icon}
                </div>
                <h3 className="font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

     <WarehouseManagement/>
      {/* CSS Animations */}
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
        
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes floatSlow {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          33% {
            transform: translateY(-20px) translateX(10px);
          }
          66% {
            transform: translateY(10px) translateX(-10px);
          }
        }
        
        @keyframes bounceSlow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes pulseSlow {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-fade-in-left {
          animation: fadeInLeft 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-fade-in-right {
          animation: fadeInRight 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-float-slow {
          animation: floatSlow 15s ease-in-out infinite;
        }
        
        .animate-bounce-slow {
          animation: bounceSlow 2s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulseSlow 2s ease-in-out infinite;
        }
        
        .delay-200 {
          animation-delay: 200ms;
        }
        
        .delay-300 {
          animation-delay: 300ms;
        }
        
        .delay-400 {
          animation-delay: 400ms;
        }
      `}</style>
    </div>
  );
};

export default Home;