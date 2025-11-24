import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function SupplyChainService() {
  const [activeService, setActiveService] = useState(0);
  const [isHovered, setIsHovered] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      title: "Logistics & Transportation",
      icon: "🚚",
      description: "Optimize your transportation network with our comprehensive logistics solutions. We provide end-to-end transportation management, route optimization, and carrier management services.",
      detailsLink: "/logistics",
      buttonText: "Optimize Routes",
      features: [
        "Route optimization & planning",
        "Carrier management & negotiation",
        "Real-time shipment tracking",
        "Freight audit & payment",
        "Multi-modal transportation"
      ],
      stats: "Reduced costs by 25% avg.",
      color: "from-blue-500 to-cyan-500",
      hoverColor: "from-blue-600 to-cyan-600",
      iconColor: "text-blue-400"
    },
    {
      title: "Warehouse Management",
      icon: "🏭",
      description: "Transform your warehouse operations with advanced WMS solutions. We implement smart warehousing, automation, and inventory optimization strategies.",
      detailsLink: "/warehouse",
      buttonText: "Upgrade WMS",
      features: [
        "Warehouse design & layout optimization",
        "Inventory management systems",
        "Automation & robotics integration",
        "Order fulfillment optimization",
        "Space utilization analysis"
      ],
      stats: "Increased efficiency 40%",
      color: "from-green-500 to-emerald-500",
      hoverColor: "from-green-600 to-emerald-600",
      iconColor: "text-green-400"
    },
    {
      title: "Inventory Optimization",
      icon: "📦",
      description: "Achieve perfect inventory balance with data-driven optimization. We help reduce carrying costs while maintaining optimal stock levels.",
      detailsLink: "/inventory",
      buttonText: "Analyze Inventory",
      features: [
        "Demand forecasting & planning",
        "Safety stock optimization",
        "ABC analysis implementation",
        "Inventory turnover improvement",
        "Stockout prevention strategies"
      ],
      stats: "Reduced excess stock 35%",
      color: "from-purple-500 to-pink-500",
      hoverColor: "from-purple-600 to-pink-600",
      iconColor: "text-purple-400"
    },
    {
      title: "Supply Chain Consulting",
      icon: "🔍",
      description: "Get expert guidance to transform your supply chain operations. We provide strategic planning, process improvement, and digital transformation consulting.",
      detailsLink: "/consulting",
      buttonText: "Get Assessment",
      features: [
        "Supply chain strategy development",
        "Process optimization & reengineering",
        "Digital transformation roadmap",
        "Risk assessment & mitigation",
        "Performance benchmarking"
      ],
      stats: "Improved ROI by 45% avg.",
      color: "from-orange-500 to-red-500",
      hoverColor: "from-orange-600 to-red-600",
      iconColor: "text-orange-400"
    },
    {
      title: "Procurement & Sourcing",
      icon: "🤝",
      description: "Optimize your procurement processes and supplier relationships. We implement strategic sourcing, vendor management, and cost reduction strategies.",
      detailsLink: "/procurement",
      buttonText: "Source Better",
      features: [
        "Supplier relationship management",
        "Strategic sourcing & negotiation",
        "Cost reduction initiatives",
        "Supplier risk management",
        "Procurement process automation"
      ],
      stats: "Saved clients $2.5M+",
      color: "from-indigo-500 to-purple-500",
      hoverColor: "from-indigo-600 to-purple-600",
      iconColor: "text-indigo-400"
    },
    {
      title: "Supply Chain Analytics",
      icon: "📊",
      description: "Leverage data analytics to gain supply chain insights and drive informed decisions. We implement advanced analytics and business intelligence solutions.",
      detailsLink: "/analytics",
      buttonText: "Get Insights",
      features: [
        "Predictive analytics & forecasting",
        "KPI dashboard development",
        "Cost-to-serve analysis",
        "Network optimization modeling",
        "Real-time performance monitoring"
      ],
      stats: "Improved forecasting 30%",
      color: "from-teal-500 to-blue-500",
      hoverColor: "from-teal-600 to-blue-600",
      iconColor: "text-teal-400"
    }
  ];

  const testimonials = [
    {
      quote: "Their logistics optimization reduced our transportation costs by 28% while improving delivery times. The ROI was incredible.",
      author: "Maria Rodriguez",
      company: "Supply Chain Director, Global Retail Inc",
      rating: 5
    },
    {
      quote: "The warehouse management transformation increased our picking efficiency by 45% and reduced errors by 90%. Game-changing results.",
      author: "David Kim",
      company: "Operations VP, E-commerce Giant",
      rating: 5
    },
    {
      quote: "Their inventory optimization strategies helped us reduce carrying costs by 35% while maintaining 99.8% service levels.",
      author: "Sarah Johnson",
      company: "Inventory Manager, Manufacturing Corp",
      rating: 5
    },
    {
      quote: "The supply chain analytics implementation gave us visibility we never had before. We can now make data-driven decisions in real-time.",
      author: "James Wilson",
      company: "CEO, Distribution Network",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float-slow opacity-10"
            style={{
              width: `${Math.random() * 20 + 5}px`,
              height: `${Math.random() * 20 + 5}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: ['#3B82F6', '#10B981', '#6366F1', '#06B6D4', '#8B5CF6'][i % 5],
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 20 + 10}s`
            }}
          />
        ))}
      </div>

      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <section className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-100 to-green-100 px-6 py-3 rounded-full mb-6 border border-blue-200/50">
            <span className="text-blue-600 text-lg">🚀</span>
            <span className="text-blue-700 font-semibold text-sm">Transforming Global Supply Chains</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-blue-600 via-green-600 to-emerald-600 bg-clip-text text-transparent animate-gradient">
            Supply Chain Excellence
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            End-to-end supply chain solutions that drive efficiency, reduce costs, and accelerate your business growth. 
            From logistics to procurement, we optimize every link in your chain.
          </p>
        </section>

        {/* Stats Section */}
        <section className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "45%", label: "Cost Reduction", color: "from-green-500 to-emerald-500", icon: "💰" },
              { number: "99.8%", label: "On-Time Delivery", color: "from-blue-500 to-cyan-500", icon: "⏱️" },
              { number: "350+", label: "Clients Optimized", color: "from-purple-500 to-pink-500", icon: "🏢" },
              { number: "$150M+", label: "Client Savings", color: "from-orange-500 to-red-500", icon: "💸" }
            ].map((stat, index) => (
              <div 
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-500 transform hover:scale-105 group overflow-hidden relative border border-white/50"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                <div className="relative">
                  <div className="text-2xl mb-2 transform group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300`}>
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium group-hover:text-gray-900 transition-colors duration-300">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Services Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-l-4 ${
                  isHovered === index ? 'border-blue-500' : 'border-transparent'
                } group relative flex flex-col h-full border border-white/50`}
                onMouseEnter={() => setIsHovered(index)}
                onMouseLeave={() => setIsHovered(null)}
              >
                {/* Animated gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Header Section - Fixed height */}
                <div className={`p-8 bg-gradient-to-br ${service.color} text-white relative overflow-hidden group-hover:bg-gradient-to-br ${service.hoverColor} transition-all duration-500 min-h-[180px] flex flex-col justify-center`}>
                  {/* Subtle shimmer effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                  
                  <div className="flex items-center gap-4 mb-4 relative">
                    <div className={`text-4xl transform group-hover:scale-110 transition-transform duration-300 ${service.iconColor}`}>
                      {service.icon}
                    </div>
                    <h2 className="text-2xl font-bold leading-tight drop-shadow-sm">{service.title}</h2>
                  </div>
                  <p className="text-blue-100/90 text-lg leading-relaxed group-hover:text-white transition-colors duration-300 line-clamp-3">
                    {service.description}
                  </p>
                </div>
                
                {/* Content Section - Flexible but consistent */}
                <div className="p-6 relative flex-1 flex flex-col">
                  <div className="mb-6 flex-1">
                    <h3 className="font-semibold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors duration-300 flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color}`}></span>
                      Key Capabilities:
                    </h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li 
                          key={featureIndex} 
                          className="flex items-start gap-3 text-gray-700 group-hover:text-gray-900 transition-colors duration-300 transform group-hover:translate-x-2 transition-transform"
                          style={{ transitionDelay: `${featureIndex * 100}ms` }}
                        >
                          <span className={`${service.iconColor} transform group-hover:scale-125 transition-transform duration-300 flex-shrink-0 mt-0.5`}>
                            ✓
                          </span>
                          <span className="text-sm leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Footer - Fixed at bottom */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100/50 mt-auto">
                    <span className="text-sm text-gray-500 font-medium group-hover:text-gray-700 transition-colors duration-300">
                      {service.stats}
                    </span>
                    <Link
                      to={service.detailsLink}
                      className={`bg-gradient-to-r ${service.color} hover:${service.hoverColor} text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-sm whitespace-nowrap shadow-md`}
                    >
                      {service.buttonText}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="mb-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 relative overflow-hidden border border-white/50">
            {/* Background gradient */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-green-500 to-emerald-500 animate-pulse"></div>
            
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12 bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
              Our Supply Chain Transformation Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Discovery & Analysis",
                  description: "Comprehensive assessment of your current supply chain operations and pain points",
                  icon: "🔍",
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  step: "02",
                  title: "Strategy & Planning",
                  description: "Develop customized supply chain strategy and implementation roadmap",
                  icon: "🎯",
                  color: "from-green-500 to-emerald-500"
                },
                {
                  step: "03",
                  title: "Implementation",
                  description: "Execute transformation with agile methodology and continuous improvement",
                  icon: "⚡",
                  color: "from-purple-500 to-pink-500"
                },
                {
                  step: "04",
                  title: "Optimization & Support",
                  description: "Ongoing monitoring, analytics, and continuous optimization",
                  icon: "🔄",
                  color: "from-orange-500 to-amber-500"
                }
              ].map((step, index) => (
                <div 
                  key={index} 
                  className="text-center group cursor-pointer transform hover:-translate-y-2 transition-all duration-500"
                >
                  <div className="relative">
                    <div className={`w-20 h-20 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:shadow-lg transition-all duration-500 relative overflow-hidden shadow-md`}>
                      <div className="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition-colors duration-300"></div>
                      <span className="text-2xl relative z-10 transform group-hover:scale-110 transition-transform duration-300">
                        {step.icon}
                      </span>
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-gray-700 to-gray-900 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 group-hover:text-gray-800 transition-colors duration-300 text-lg">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm group-hover:text-gray-800 transition-colors duration-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
              Trusted by Industry Leaders
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See what businesses say about our supply chain transformation results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 group relative overflow-hidden border border-white/50"
              >
                {/* Gradient border effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-green-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span 
                      key={i} 
                      className="text-yellow-400 transform group-hover:scale-110 transition-transform duration-300 drop-shadow-sm"
                      style={{ transitionDelay: `${i * 100}ms` }}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <blockquote className="text-gray-700 text-lg italic mb-4 group-hover:text-gray-900 transition-colors duration-300 relative">
                  <span className="absolute -top-2 -left-2 text-4xl text-blue-200 opacity-50 group-hover:opacity-70 transition-opacity duration-300">"</span>
                  {testimonial.quote}
                  <span className="absolute -bottom-4 -right-2 text-4xl text-blue-200 opacity-50 group-hover:opacity-70 transition-opacity duration-300">"</span>
                </blockquote>
                <div className="relative">
                  <div className="font-semibold text-gray-900 group-hover:text-gray-800 transition-colors duration-300">
                    {testimonial.author}
                  </div>
                  <div className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technology Stack */}
        <section className="mb-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-white/50">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12 bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
              Our Supply Chain Technology Partners
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[
                { name: "SAP", icon: "🔷", color: "from-blue-600 to-indigo-600" },
                { name: "Oracle", icon: "🔴", color: "from-red-500 to-orange-500" },
                { name: "Blue Yonder", icon: "🌐", color: "from-green-500 to-teal-500" },
                { name: "Manhattan", icon: "🏢", color: "from-purple-500 to-pink-500" },
                { name: "Kinaxis", icon: "📈", color: "from-blue-500 to-cyan-500" },
                { name: "JDA", icon: "📊", color: "from-orange-500 to-red-500" },
                { name: "Infor", icon: "💼", color: "from-indigo-500 to-purple-500" },
                { name: "ERP", icon: "⚙️", color: "from-gray-600 to-gray-800" },
                { name: "WMS", icon: "🏭", color: "from-green-600 to-emerald-600" },
                { name: "TMS", icon: "🚛", color: "from-blue-400 to-cyan-400" },
                { name: "IoT", icon: "📡", color: "from-purple-400 to-pink-400" },
                { name: "AI/ML", icon: "🤖", color: "from-orange-400 to-red-400" }
              ].map((tech, index) => (
                <div 
                  key={index}
                  className="text-center group transform hover:-translate-y-2 transition-all duration-300"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${tech.color} rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300 shadow-md`}>
                    <span className="text-2xl">{tech.icon}</span>
                  </div>
                  <div className="font-semibold text-gray-700 group-hover:text-gray-900 transition-colors duration-300 text-sm">
                    {tech.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section>
          <div className="bg-gradient-to-br from-blue-600 via-green-600 to-emerald-700 rounded-2xl p-12 text-white text-center relative overflow-hidden group border border-blue-500/30">
            {/* Animated background elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/50 via-green-600/50 to-emerald-700/50 group-hover:from-blue-600/60 group-hover:via-green-600/60 group-hover:to-emerald-700/60 transition-all duration-1000"></div>
            
            {/* Floating particles */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-white/30 rounded-full animate-float"
                  style={{
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${i * 2}s`,
                    animationDuration: `${15 + i * 5}s`
                  }}
                ></div>
              ))}
            </div>

            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 transform group-hover:scale-105 transition-transform duration-500 drop-shadow-sm">
                Ready to Transform Your Supply Chain?
              </h2>
              <p className="text-blue-100 text-xl mb-8 max-w-2xl mx-auto group-hover:text-white transition-colors duration-300 leading-relaxed">
                Whether you need logistics optimization, warehouse transformation, or end-to-end supply chain consulting, 
                our expert team is ready to drive measurable results for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group/btn border border-white/20"
                >
                  <span className="relative z-10">Contact Supply Chain Experts</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-green-500 opacity-0 group-hover/btn:opacity-10 transition-opacity duration-300"></div>
                </Link>
                <Link
                  to="/contact"
                  className="border border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-600 hover:scale-105 transform transition-all duration-300 relative overflow-hidden group/btn backdrop-blur-sm"
                >
                  <span className="relative z-10">Get Free Chain Analysis</span>
                  <div className="absolute inset-0 bg-white opacity-0 group-hover/btn:opacity-10 transition-opacity duration-300"></div>
                </Link>
              </div>
              <p className="text-blue-200 mt-6 text-sm group-hover:text-blue-100 transition-colors duration-300">
                Receive a comprehensive supply chain assessment within 48 hours
              </p>
            </div>
          </div>
        </section>
      </main>

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          33% {
            transform: translateY(-15px) translateX(10px);
          }
          66% {
            transform: translateY(10px) translateX(-10px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 15s ease-in-out infinite;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}