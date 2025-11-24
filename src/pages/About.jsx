import React, { useState, useEffect } from "react";
import sakthi from '../images/sakthi.webp';
import abi from '../images/abi.webp';
import dhara from '../images/dhara.webp';
import yuva from '../images/yuva.webp';
import { Link, useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const sections = [
    {
      section: 'Mission & Vision',
      icon: '🎯',
      content: 'We optimize global supply chains with innovative logistics solutions that drive efficiency, reduce costs, and accelerate business growth.',
      importance: 'This defines our purpose and commitment to delivering exceptional supply chain services that solve real business challenges.',
      details: [
        'Commitment to end-to-end supply chain visibility',
        'Dedication to client success and partnership',
        'Focus on sustainability and ethical practices',
        'Drive continuous improvement and operational excellence'
      ],
      color: 'from-blue-400 to-cyan-400'
    },
    {
      section: 'Our Story',
      icon: '🚚',
      content: 'Founded by logistics experts passionate about solving complex supply chain challenges through innovative solutions and technology.',
      importance: 'Shows our journey, expertise, and commitment to staying at the forefront of supply chain management.',
      details: [
        'Founded in 2015 by industry veterans',
        'Grew from startup to serving 1000+ clients globally',
        'Expanded to international markets in 2018',
        'Achieved 99.5% on-time delivery rate'
      ],
      color: 'from-green-400 to-emerald-400'
    },
    {
      section: 'Supply Chain Expertise',
      icon: '⚡',
      content: 'Comprehensive logistics services including warehousing, transportation, inventory management, and supply chain consulting.',
      importance: 'Demonstrates our technical capabilities and specialized knowledge across multiple supply chain domains.',
      details: [
        'Certified in ISO 9001 quality management',
        'Expertise in 50+ global trade routes',
        'Advanced inventory optimization systems',
        'Lean and Six Sigma methodology experts'
      ],
      color: 'from-purple-400 to-pink-400'
    },
    {
      section: 'Quality Standards',
      icon: '🏆',
      content: 'Rigorous quality assurance processes, safety protocols, and industry best practices in every operation.',
      importance: 'Ensures reliability, safety, and excellence in all our supply chain services.',
      details: [
        'ISO 9001 certified quality practices',
        'Real-time tracking and monitoring',
        'Continuous improvement processes',
        'Comprehensive safety and compliance'
      ],
      color: 'from-orange-400 to-red-400'
    },
    {
      section: 'Client Partnership',
      icon: '🤝',
      content: 'We build long-term relationships with our clients, acting as their trusted supply chain partners.',
      importance: 'Focus on understanding client needs and delivering sustainable logistics solutions.',
      details: [
        'Dedicated account managers for each client',
        'Regular performance reviews and reporting',
        'Transparent communication channels',
        'Flexible service level agreements'
      ],
      color: 'from-indigo-400 to-violet-400'
    },
    {
      section: 'Innovation & Technology',
      icon: '🔬',
      content: 'Continuous investment in supply chain technology and innovation to stay ahead of industry trends.',
      importance: 'Ensures we deliver cutting-edge solutions using the latest logistics technologies.',
      details: [
        'Advanced warehouse management systems',
        'Real-time GPS tracking technology',
        'AI-powered demand forecasting',
        'Blockchain for supply chain transparency'
      ],
      color: 'from-teal-400 to-blue-400'
    },
    {
      section: 'Industry Recognition',
      icon: '⭐',
      content: 'Award-winning supply chain solutions provider recognized for excellence and innovation.',
      importance: 'Validates our expertise and commitment to quality service delivery.',
      details: [
        '2023 Best Logistics Service Provider Award',
        'ISO 9001 quality management certification',
        'Top 5 Supply Chain Innovators 2024',
        'Sustainability Excellence Award 2023'
      ],
      color: 'from-yellow-400 to-amber-400'
    },
  ];

  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "Chief Operations Officer",
      bio: "15+ years in global logistics and supply chain management. Former VP of Logistics at GlobalCorp.",
      expertise: ["Supply Chain Strategy", "Global Logistics", "Operations"],
      color: "from-blue-400 to-cyan-500",
      image: abi
    },
    {
      name: "Marcus Johnson",
      role: "Head of Transportation",
      bio: "Transportation expert with extensive experience in multi-modal logistics and fleet management.",
      expertise: ["Fleet Management", "Route Optimization", "Compliance"],
      color: "from-green-400 to-emerald-500",
      image: yuva
    },
    {
      name: "Dr. Aisha Patel",
      role: "Supply Chain Analytics Lead",
      bio: "PhD in Supply Chain Management with focus on predictive analytics and optimization models.",
      expertise: ["Data Analytics", "Demand Forecasting", "Process Optimization"],
      color: "from-purple-400 to-violet-500",
      image: dhara
    },
    {
      name: "David Kim",
      role: "Warehouse Operations Director",
      bio: "Warehouse management expert with extensive experience in automated storage and retrieval systems.",
      expertise: ["Warehouse Design", "Inventory Management", "Automation"],
      color: "from-orange-400 to-red-500",
      image: sakthi
    }
  ];

  const technologies = [
    { name: "WMS", icon: "🏭", category: "Warehouse" },
    { name: "TMS", icon: "🚛", category: "Transport" },
    { name: "RFID", icon: "📡", category: "Tracking" },
    { name: "IoT", icon: "🌐", category: "Technology" },
    { name: "ERP", icon: "💼", category: "Enterprise" },
    { name: "Blockchain", icon: "⛓️", category: "Security" },
    { name: "AI/ML", icon: "🤖", category: "Analytics" },
    { name: "GPS", icon: "📍", category: "Tracking" },
    { name: "Automation", icon: "⚙️", category: "Technology" },
    { name: "Analytics", icon: "📊", category: "Data" },
    { name: "Cloud", icon: "☁️", category: "Platform" },
    { name: "Mobile", icon: "📱", category: "Platform" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float-slow opacity-20"
            style={{
              width: `${Math.random() * 16 + 4}px`,
              height: `${Math.random() * 16 + 4}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: ['#3B82F6', '#10B981', '#6366F1', '#06B6D4', '#8B5CF6', '#EF4444', '#F59E0B'][i % 7],
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 20 + 10}s`
            }}
          />
        ))}
      </div>

      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <section className="text-center mb-16">
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6 transition-all duration-1000 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
          }`}>
            About Global Supply Chain Solutions
          </h1>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
          }`}>
            We are a premier supply chain solutions provider delivering innovative logistics services 
            that transform businesses and drive operational excellence across industries.
          </p>
        </section>

        {/* Stats Section */}
        <section className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "1000+", label: "Clients Served", color: "from-blue-500 to-cyan-500" },
              { number: "99.5%", label: "On-Time Delivery", color: "from-green-500 to-emerald-500" },
              { number: "50+", label: "Countries Served", color: "from-purple-500 to-pink-500" },
              { number: "24/7", label: "Supply Chain Monitoring", color: "from-orange-500 to-red-500" }
            ].map((stat, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6 text-center transform hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl animate-fade-in-up group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300`}>
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
                {/* Animated border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-200 transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
              </div>
            ))}
          </div>
        </section>

        {/* Technology Stack */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-2xl p-8 transform hover:-translate-y-1 transition-all duration-500 animate-fade-in-up">
            <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-8">
              Our Supply Chain Technology
            </h2>
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {technologies.map((tech, index) => (
                <div 
                  key={index}
                  className="text-center transform hover:-translate-y-2 transition-all duration-300 group animate-fade-in-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-2 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                    <span className="text-2xl">{tech.icon}</span>
                  </div>
                  <div className="font-semibold text-gray-700 text-sm group-hover:text-gray-900 transition-colors duration-300">
                    {tech.name}
                  </div>
                  <div className="text-xs text-gray-500 group-hover:text-blue-600 transition-colors duration-300">
                    {tech.category}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Sections */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transform hover:-translate-y-1 transition-all duration-500 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            <div className="grid grid-cols-1 lg:grid-cols-4">
              {/* Navigation */}
              <div className="lg:col-span-1 bg-gradient-to-b from-gray-50 to-blue-50 p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Our Expertise
                </h2>
                <nav className="space-y-2">
                  {sections.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveSection(index)}
                      className={`w-full text-left px-4 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                        activeSection === index
                          ? `bg-gradient-to-r ${item.color} text-white shadow-md`
                          : 'text-gray-700 hover:bg-white hover:border-2 hover:border-gray-200'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xl">{item.icon}</span>
                        <span className="font-medium">{item.section}</span>
                      </div>
                    </button>
                  ))}
                </nav>
              </div>

              {/* Content */}
              <div className="lg:col-span-3 p-8 bg-gradient-to-br from-white to-blue-50">
                <div className="flex items-center gap-4 mb-6 animate-fade-in-left">
                  <div className={`w-16 h-16 bg-gradient-to-r ${sections[activeSection].color} rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg`}>
                    {sections[activeSection].icon}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                    {sections[activeSection].section}
                  </h2>
                </div>
                
                <div className="space-y-6">
                  <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <div className={`w-2 h-2 bg-gradient-to-r ${sections[activeSection].color} rounded-full`}></div>
                      Overview
                    </h3>
                    <p className="text-gray-700 leading-relaxed bg-gradient-to-r from-gray-50 to-white p-4 rounded-xl border-l-4 border-blue-300">
                      {sections[activeSection].content}
                    </p>
                  </div>

                  <div className="animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <div className={`w-2 h-2 bg-gradient-to-r ${sections[activeSection].color} rounded-full`}></div>
                      Business Impact
                    </h3>
                    <p className="text-gray-700 leading-relaxed bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-xl border-l-4 border-green-300">
                      {sections[activeSection].importance}
                    </p>
                  </div>

                  <div className="animate-fade-in-up" style={{ animationDelay: '600ms' }}>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <div className={`w-2 h-2 bg-gradient-to-r ${sections[activeSection].color} rounded-full`}></div>
                      Key Capabilities
                    </h3>
                    <ul className="space-y-3 bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border-l-4 border-purple-300">
                      {sections[activeSection].details.map((detail, index) => (
                        <li 
                          key={index} 
                          className="flex items-start gap-3 text-gray-700 group hover:translate-x-2 transition-transform duration-300"
                        >
                          <span className={`w-6 h-6 bg-gradient-to-r ${sections[activeSection].color} rounded-full flex items-center justify-center text-white text-sm mt-0.5 group-hover:scale-110 transition-transform duration-300`}>
                            ✓
                          </span>
                          <span className="group-hover:text-gray-900 transition-colors duration-300">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Updated Team Section with Images */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4 animate-fade-in-up">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              Meet the supply chain experts driving innovation and excellence at Global Supply Chain Solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 animate-fade-in-up group"
                style={{ animationDelay: `${index * 150 + 400}ms` }}
              >
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-60`}></div>
                  {/* Role Badge */}
                  <div className="absolute bottom-3 left-3">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-xs font-semibold">
                      {member.role.split(' ')[0]}
                    </span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className={`font-semibold mb-3 bg-gradient-to-r ${member.color} bg-clip-text text-transparent text-sm`}>
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {member.bio}
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.expertise.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex} 
                        className="bg-gradient-to-r from-gray-100 to-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium group-hover:scale-105 transition-transform duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Animated border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-200 transition-all duration-500 opacity-0 group-hover:opacity-100 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </section>

        {/* Commitment Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-2xl p-8 text-white transform hover:-translate-y-1 transition-all duration-500 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 drop-shadow-lg">Our Commitment to Excellence</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    icon: "🚚",
                    title: "On-Time Delivery",
                    description: "Guaranteed timely delivery with real-time tracking and proactive monitoring",
                    color: "from-green-400 to-teal-400"
                  },
                  {
                    icon: "💰",
                    title: "Cost Efficiency",
                    description: "Optimized logistics solutions that reduce costs while maintaining quality",
                    color: "from-blue-400 to-indigo-400"
                  },
                  {
                    icon: "🌱",
                    title: "Sustainable Practices",
                    description: "Environmentally responsible supply chain solutions and ethical operations",
                    color: "from-purple-400 to-pink-400"
                  }
                ].map((commitment, index) => (
                  <div 
                    key={index} 
                    className="text-center transform hover:scale-105 transition-all duration-300 animate-fade-in-up group"
                    style={{ animationDelay: `${800 + index * 100}ms` }}
                  >
                    <div className={`text-4xl mb-4 bg-gradient-to-r ${commitment.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}>
                      {commitment.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white drop-shadow">{commitment.title}</h3>
                    <p className="text-blue-100 leading-relaxed group-hover:text-white transition-colors duration-300">
                      {commitment.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-white to-blue-50 rounded-2xl shadow-2xl p-8 transform hover:-translate-y-1 transition-all duration-500 animate-fade-in-up" style={{ animationDelay: '800ms' }}>
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent mb-4">
              Ready to Optimize Your Supply Chain?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Partner with Global Supply Chain Solutions to leverage cutting-edge logistics and drive your operational excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => navigate('/contact')}
                className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl animate-pulse-slow flex items-center justify-center gap-2"
              >
                <span>Get Free Consultation</span>
                <span className="text-lg">🚀</span>
              </button>
              
              <button 
                onClick={() => navigate('/services')}
                className="border-2 border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2"
              >
                <span>Explore Our Services</span>
                <span className="text-lg">📦</span>
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* CSS Animations */}
      <style jsx global>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInLeft {
          0% {
            opacity: 0;
            transform: translateX(-20px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
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
        
        @keyframes pulse-slow {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.02);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-fade-in-left {
          animation: fadeInLeft 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .animate-float-slow {
          animation: float-slow 15s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }
        
        .delay-300 {
          animation-delay: 300ms;
        }
      `}</style>
    </div>
  );
};

export default About;