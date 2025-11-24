import React, { useState, useEffect } from 'react';

const ExploreServices = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const slides = [
    {
      id: 1,
      title: "AI Supercluster",
      description: "Massive new supercluster with next-generation NVIDIA GPUs and high-performance computing",
      icon: "⚡",
      color: "from-purple-500 to-blue-500"
    },
    {
      id: 2,
      title: "High-Speed Networking",
      description: "Advanced RDMA networking with ultra-low latency for distributed AI training",
      icon: "🔗",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 3,
      title: "Multicloud Flexibility",
      description: "Seamless integration across cloud environments with unified licensing",
      icon: "☁️",
      color: "from-cyan-500 to-green-500"
    },
    {
      id: 4,
      title: "AI Infrastructure",
      description: "Purpose-built infrastructure optimized for machine learning workloads",
      icon: "🤖",
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 5,
      title: "Performance Scaling",
      description: "Linear scaling across thousands of GPUs for massive AI models",
      icon: "📈",
      color: "from-emerald-500 to-teal-500"
    },
    {
      id: 6,
      title: "Enterprise Security",
      description: "Zero-trust architecture with end-to-end encryption and compliance",
      icon: "🛡️",
      color: "from-teal-500 to-blue-500"
    }
  ];

  const customerStories = [
    {
      id: 1,
      company: "Omega Healthcare",
      title: "Manages growth and M&A with Oracle Fusion Cloud Applications",
      description: "The healthcare solutions provider integrates multiple acquisitions and unifies technology and processes with Oracle Fusion Cloud ERP, EPM, and HCM.",
      link: "#",
      industry: "Healthcare",
      icon: "🏥",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      company: "MACOM",
      title: "Sees faster loan approvals and business reporting with OCI",
      description: "The IT services firm speeds up loan application reviews, business reports, and disaster recovery with OCI and Oracle Autonomous Data Warehouse.",
      link: "#",
      industry: "Financial Services",
      icon: "💳",
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 3,
      company: "Panasonic Electric Works India",
      title: "Improves customer satisfaction with Oracle Cloud",
      description: "India's leading provider of electrical systems migrates its Oracle E-Business Suite ERP and database to OCI and Oracle Exadata Database Service.",
      link: "#",
      industry: "Manufacturing",
      icon: "🏭",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 4,
      company: "Uber",
      title: "Relies on Oracle Cloud to deliver on promises to its customers",
      description: "Global ride-sharing platform leverages OCI for scalable, reliable infrastructure to serve millions of users worldwide.",
      link: "#",
      industry: "Technology",
      icon: "🚗",
      color: "from-orange-500 to-red-500"
    }
  ];

  const services = [
    {
      title: "Cloud Applications",
      description: "A complete suite of cloud applications delivering consistent processes and data across your business",
      icon: "📊",
      link: "#",
      color: "from-blue-500 to-indigo-600"
    },
    {
      title: "Cloud Infrastructure",
      description: "An automated, secure platform for migrating enterprise workloads and building new cloud native apps",
      icon: "⚙️",
      link: "#",
      color: "from-green-500 to-emerald-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className={`text-center mb-16 mt-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Innovations Power{' '}
            <span className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent">
              Next-Gen AI
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Massive new supercluster, high-speed networking advancements, multicloud licensing program 
            redefine AI infrastructure performance, flexibility, and enterprise readiness.
          </p>
        </div>

        {/* Innovation Slides */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Main Slide Display */}
            <div className="relative h-96 rounded-2xl overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl"></div>
              <div className="relative z-10 h-full flex items-center justify-center p-8">
                <div className="text-center">
                  <div className={`text-6xl mb-4 animate-bounce ${slides[activeSlide].color.replace('from-', 'text-').replace('to-', '')}`}>
                    {slides[activeSlide].icon}
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">
                    {slides[activeSlide].title}
                  </h3>
                  <p className="text-gray-300 text-lg max-w-md mx-auto">
                    {slides[activeSlide].description}
                  </p>
                </div>
              </div>
              
              {/* Animated Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${slides[activeSlide].color} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}></div>
            </div>

            {/* Slide Navigation */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {slides.map((slide, index) => (
                <button
                  key={slide.id}
                  onClick={() => setActiveSlide(index)}
                  className={`p-4 rounded-xl text-left transition-all duration-500 transform hover:scale-105 group ${
                    activeSlide === index
                      ? `bg-gradient-to-br ${slide.color} text-white shadow-2xl scale-105`
                      : 'bg-white/10 text-gray-300 hover:bg-white/20 backdrop-blur-sm'
                  }`}
                >
                  <div className={`text-2xl mb-2 ${activeSlide === index ? 'animate-pulse' : ''}`}>
                    {slide.icon}
                  </div>
                  <h4 className="font-semibold text-sm mb-1">{slide.title}</h4>
                  <p className="text-xs opacity-80 line-clamp-2">
                    {slide.description}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeSlide === index
                    ? 'bg-orange-500 w-8'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Featured Customers Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Customers
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Discover how industry leaders leverage Oracle Cloud to drive innovation and growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {customerStories.map((story, index) => (
              <div
                key={story.id}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-orange-500/30 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${story.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  {/* Company Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${story.color} flex items-center justify-center text-white text-xl`}>
                      {story.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-lg">{story.company}</h3>
                      <span className="text-gray-400 text-sm">{story.industry}</span>
                    </div>
                  </div>

                  {/* Story Content */}
                  <h4 className="text-white font-semibold mb-3 leading-tight group-hover:text-orange-300 transition-colors duration-300">
                    {story.title}
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {story.description}
                  </p>

                  {/* Read Story Link */}
                  <a
                    href={story.link}
                    className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 font-semibold text-sm transition-all duration-300 group-hover:gap-3"
                  >
                    Read the story
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Services Section */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl p-8 text-white transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-90 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                <div className="relative z-10">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-white/80 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <a
                    href={service.link}
                    className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    Learn More
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Learn why our customers trust Oracle
          </h3>
          <a
            href="#"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
          >
            Explore all customer stories
            <span className="text-xl">🚀</span>
          </a>
        </div>
      </div>

      {/* Enhanced CSS Animations */}
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
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animate-slide-in-left {
          animation: slideInLeft 0.8s ease-out forwards;
        }
        
        .animate-slide-in-right {
          animation: slideInRight 0.8s ease-out forwards;
        }
        
        .animate-bounce {
          animation: bounce 2s ease-in-out infinite;
        }
        
        .animate-pulse {
          animation: pulse 2s ease-in-out infinite;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .backdrop-blur-sm {
          backdrop-filter: blur(4px);
        }
      `}</style>
    </div>
  );
};

export default ExploreServices;