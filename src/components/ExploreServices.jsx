import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ai from '../images/ai.webp';
import aiint from '../images/aiint.webp';
import cloud from '../images/cloud.webp';
import scale from '../images/scale.webp';
import secuter from '../images/secuter.webp';
import speed from '../images/speed.webp';

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
      color: "from-purple-500 to-blue-500",
      image: ai
    },
    {
      id: 2,
      title: "High-Speed Networking",
      description: "Advanced RDMA networking with ultra-low latency for distributed AI training",
      icon: "🔗",
      color: "from-blue-500 to-cyan-500",
      image: speed
    },
    {
      id: 3,
      title: "Multicloud Flexibility",
      description: "Seamless integration across cloud environments with unified licensing",
      icon: "☁️",
      color: "from-cyan-500 to-green-500",
      image: cloud
    },
    {
      id: 4,
      title: "AI Infrastructure",
      description: "Purpose-built infrastructure optimized for machine learning workloads",
      icon: "🤖",
      color: "from-green-500 to-emerald-500",
      image: aiint
    },
    {
      id: 5,
      title: "Performance Scaling",
      description: "Linear scaling across thousands of GPUs for massive AI models",
      icon: "📈",
      color: "from-emerald-500 to-teal-500",
      image: scale
    },
    {
      id: 6,
      title: "Enterprise Security",
      description: "Zero-trust architecture with end-to-end encryption and compliance",
      icon: "🛡️",
      color: "from-teal-500 to-blue-500",
      image: secuter
    }
  ];

  const customerStories = [
    {
      id: 1,
      company: "Omega Healthcare",
      title: "Manages growth and M&A with Oracle Fusion Cloud Applications",
      description: "The healthcare solutions provider integrates multiple acquisitions and unifies technology and processes with Oracle Fusion Cloud ERP, EPM, and HCM.",
      link: "/404",
      industry: "Healthcare",
      icon: "🏥",
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      company: "MACOM",
      title: "Sees faster loan approvals and business reporting with OCI",
      description: "The IT services firm speeds up loan application reviews, business reports, and disaster recovery with OCI and Oracle Autonomous Data Warehouse.",
      link: "/404",
      industry: "Financial Services",
      icon: "💳",
      color: "from-green-500 to-emerald-500",
    },
    {
      id: 3,
      company: "Panasonic Electric Works India",
      title: "Improves customer satisfaction with Oracle Cloud",
      description: "India's leading provider of electrical systems migrates its Oracle E-Business Suite ERP and database to OCI and Oracle Exadata Database Service.",
      link: "/404",
      industry: "Manufacturing",
      icon: "🏭",
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 4,
      company: "Uber",
      title: "Relies on Oracle Cloud to deliver on promises to its customers",
      description: "Global ride-sharing platform leverages OCI for scalable, reliable infrastructure to serve millions of users worldwide.",
      link: "/404",
      industry: "Technology",
      icon: "🚗",
      color: "from-orange-500 to-red-500",
    }
  ];

  const services = [
    {
      title: "Cloud Applications",
      description: "A complete suite of cloud applications delivering consistent processes and data across your business",
      icon: "📊",
      link: "/services",
      color: "from-blue-500 to-indigo-600",
      image: cloud
    },
    {
      title: "Cloud Infrastructure",
      description: "An automated, secure platform for migrating enterprise workloads and building new cloud native apps",
      icon: "⚙️",
      link: "/services",
      color: "from-green-500 to-emerald-600",
      image: aiint
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 overflow-x-hidden">
      {/* Hero Section - Same as Home component */}
      <section className="relative min-h-screen flex items-center justify-center pt-16 pb-12 px-3 sm:px-4 lg:px-8 overflow-hidden">
        {/* Enhanced Background */}
        <div className="absolute inset-0">
          <img
            src="hero.png"
            alt="AI Infrastructure Solutions"
            className="w-full h-full object-cover object-center scale-110 animate-parallax-slow"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/20 via-blue-500/15 to-emerald-400/10 animate-gradient-shift"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-gray-900/30"></div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-2xl sm:blur-3xl animate-float-orb-1"></div>
          <div className="absolute top-1/3 right-1/4 w-40 h-40 sm:w-80 sm:h-80 bg-gradient-to-r from-green-400/20 to-emerald-500/20 rounded-full blur-2xl sm:blur-3xl animate-float-orb-2"></div>
          <div className="absolute bottom-1/4 left-1/3 w-36 h-36 sm:w-72 sm:h-72 bg-gradient-to-r from-teal-400/20 to-cyan-500/20 rounded-full blur-2xl sm:blur-3xl animate-float-orb-3"></div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10 w-full px-2">
          <div className={`mb-6 sm:mb-8 mt-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Main Heading */}
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 sm:mb-8 leading-tight drop-shadow-2xl">
              <span className="block animate-slide-in-up text-2xl xs:text-3xl sm:text-4xl md:text-5xl">
                AI Infrastructure
              </span>
              <span className="block mt-2 sm:mt-4">
                <span className="bg-gradient-to-r from-cyan-400 via-green-500 to-emerald-600 bg-clip-text text-transparent animate-gradient-flow text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                  Innovation Unleashed
                </span>
              </span>
            </h1>

            {/* Description */}
            <p className="text-base xs:text-lg sm:text-xl md:text-2xl text-white/80 max-w-xs xs:max-w-sm sm:max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed animate-fade-in-up delay-300 drop-shadow-lg px-2">
              Next-generation AI infrastructure with massive superclusters, high-speed networking, and multicloud flexibility.
              <span className="block mt-2 sm:mt-3 text-white/60 text-sm sm:text-base md:text-lg">
                Enterprise-grade AI solutions with unparalleled performance and scalability.
              </span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 md:gap-6 justify-center items-center animate-fade-in-up delay-500 px-2">
              <Link
                to="/contact"
                className="group relative bg-gradient-to-r from-cyan-500 to-green-600 hover:from-cyan-600 hover:to-green-700 text-white px-6 xs:px-8 sm:px-10 md:px-12 py-3 sm:py-4 md:py-5 rounded-xl sm:rounded-2xl font-bold text-sm xs:text-base sm:text-lg transition-all duration-500 transform hover:scale-105 hover:shadow-lg sm:hover:shadow-2xl shadow-md overflow-hidden w-full xs:w-auto text-center"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                <span className="relative z-10 flex items-center gap-2 justify-center">
                  🚀 Get AI Infrastructure Assessment
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </span>
              </Link>

              <Link
                to="/services"
                className="group relative bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 px-5 xs:px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-xl sm:rounded-2xl font-bold text-sm xs:text-base sm:text-lg transition-all duration-500 transform hover:scale-105 hover:shadow-lg w-full xs:w-auto text-center"
              >
                <span className="flex items-center gap-2 justify-center">
                  ⚡ Explore Solutions
                  <span className="group-hover:scale-110 transition-transform duration-300">📊</span>
                </span>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-10 sm:mt-12 md:mt-16 max-w-xs xs:max-w-sm sm:max-w-md md:max-w-2xl mx-auto animate-fade-in-up delay-700 px-2">
              {[
                { number: '10K+', label: 'GPUs Deployed', color: 'from-cyan-400 to-blue-500' },
                { number: '99.9%', label: 'Uptime SLA', color: 'from-green-400 to-emerald-500' },
                { number: '60%', label: 'Cost Savings', color: 'from-teal-400 to-cyan-500' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className={`text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1 sm:mb-2 animate-count-up`}>
                    {stat.number}
                  </div>
                  <div className="text-white/60 text-xs xs:text-sm font-medium leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-scroll-indicator">
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-cyan-400 rounded-full flex justify-center">
            <div className="w-1 h-2 sm:h-3 bg-cyan-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Innovation Slides Section */}
      <section className="py-12 sm:py-16 md:py-20 px-3 sm:px-4 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/20 to-emerald-900/20"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4 animate-fade-in-up">
              AI Infrastructure Innovations
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-xs sm:max-w-md md:max-w-2xl mx-auto animate-fade-in-up delay-200">
              Next-Generation AI Infrastructure Solutions
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-12">
            {/* Main Slide */}
            <div className="w-full lg:w-1/2 animate-fade-in-left">
              <div className="relative h-64 xs:h-72 sm:h-80 md:h-96 lg:h-[500px] rounded-xl sm:rounded-2xl overflow-hidden group">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
                  style={{ backgroundImage: `url(${slides[activeSlide].image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 to-gray-900/60"></div>
                </div>
                
                <div className="relative z-10 h-full flex items-center justify-center p-4 sm:p-6 lg:p-8">
                  <div className="text-center max-w-md mx-auto">
                    <div className={`text-3xl xs:text-4xl sm:text-5xl lg:text-6xl mb-3 sm:mb-4 animate-bounce ${slides[activeSlide].color.replace('from-', 'text-').replace('to-', '')}`}>
                      {slides[activeSlide].icon}
                    </div>
                    <h3 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 leading-tight">
                      {slides[activeSlide].title}
                    </h3>
                    <p className="text-gray-300 text-sm xs:text-base sm:text-lg lg:text-xl leading-relaxed">
                      {slides[activeSlide].description}
                    </p>
                  </div>
                </div>
                
                <div className={`absolute inset-0 bg-gradient-to-br ${slides[activeSlide].color} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}></div>
              </div>
            </div>

            {/* Slide Navigation */}
            <div className="w-full lg:w-1/2 animate-fade-in-right">
              <div className="grid grid-cols-2 min-[320px]:grid-cols-2 min-[425px]:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 h-full">
                {slides.map((slide, index) => (
                  <button
                    key={slide.id}
                    onClick={() => setActiveSlide(index)}
                    className={`relative overflow-hidden p-3 sm:p-4 lg:p-5 rounded-xl sm:rounded-2xl text-left transition-all duration-500 transform hover:scale-105 group min-h-[100px] sm:min-h-[120px] lg:min-h-[140px] ${
                      activeSlide === index
                        ? `bg-gradient-to-br ${slide.color} text-white shadow-lg scale-105`
                        : 'bg-white/10 text-gray-300 hover:bg-white/20 backdrop-blur-sm'
                    }`}
                  >
                    <div 
                      className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                      style={{ backgroundImage: `url(${slide.image})` }}
                    ></div>
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300"></div>
                    
                    <div className="relative z-10 h-full flex flex-col justify-center">
                      <div className={`text-xl sm:text-2xl lg:text-3xl mb-2 ${activeSlide === index ? 'animate-pulse' : ''}`}>
                        {slide.icon}
                      </div>
                      <h4 className="font-semibold text-sm xs:text-base sm:text-lg mb-1 leading-tight line-clamp-1">
                        {slide.title}
                      </h4>
                      <p className="text-xs sm:text-sm opacity-80 line-clamp-2 leading-tight hidden min-[375px]:block">
                        {slide.description}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-6 sm:mt-8 lg:mt-10 space-x-2 sm:space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 ${
                  activeSlide === index
                    ? 'bg-cyan-500 w-8 sm:w-12'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Customers Section */}
      <section className="py-12 sm:py-16 md:py-20 px-3 sm:px-4 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-pink-900/20"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4 animate-fade-in-up">
              Trusted by Industry Leaders
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-xs sm:max-w-md md:max-w-2xl mx-auto animate-fade-in-up delay-200">
              Discover how global enterprises leverage our AI infrastructure
            </p>
          </div>

          <div className="grid grid-cols-1 min-[320px]:grid-cols-1 min-[480px]:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {customerStories.map((story, index) => (
              <div
                key={story.id}
                className="group relative bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 border border-white/20 hover:border-cyan-500/30 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${story.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  {/* Company Header */}
                  <div className="flex flex-col min-[320px]:flex-row min-[320px]:items-center gap-3 sm:gap-4 mb-4 sm:mb-5">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="relative w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-xl bg-white/10 flex-shrink-0 flex items-center justify-center">
                        <span className="text-lg sm:text-xl lg:text-2xl">{story.icon}</span>
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="font-bold text-white text-base sm:text-lg lg:text-xl truncate">
                          {story.company}
                        </h3>
                        <div className="flex items-center gap-2">
                          <span className="text-gray-400 text-xs sm:text-sm">{story.industry}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Story Content */}
                  <h4 className="text-white font-semibold mb-3 sm:mb-4 leading-tight text-base sm:text-lg lg:text-xl group-hover:text-cyan-300 transition-colors duration-300 line-clamp-2 min-h-[2.8rem]">
                    {story.title}
                  </h4>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4 sm:mb-5 line-clamp-3 min-h-[4rem]">
                    {story.description}
                  </p>

                  {/* Read Story Link */}
                  <Link
                    to={story.link}
                    className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold text-sm sm:text-base transition-all duration-300 group-hover:gap-3"
                  >
                    Read the story
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 md:py-20 px-3 sm:px-4 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-cyan-900/20"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4 animate-fade-in-up">
              Our AI Services
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-xs sm:max-w-md md:max-w-2xl mx-auto animate-fade-in-up delay-200">
              Comprehensive AI Infrastructure Solutions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 text-white transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl min-h-[250px] sm:min-h-[300px] animate-fade-in-up"
                style={{ animationDelay: `${index * 300}ms` }}
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${service.image})` }}
                ></div>
                
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-90 group-hover:opacity-80 transition-opacity duration-500`}></div>
                
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                <div className="relative z-10 h-full flex flex-col justify-center">
                  <div className="text-3xl sm:text-4xl lg:text-5xl mb-4 sm:mb-5 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-white/80 mb-6 sm:mb-8 leading-relaxed text-base sm:text-lg lg:text-xl">
                    {service.description}
                  </p>
                  <Link
                    to={service.link}
                    className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 px-5 sm:px-6 lg:px-8 py-3 sm:py-3.5 lg:py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 text-base sm:text-lg w-fit"
                  >
                    Learn More
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-cyan-600 to-emerald-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center px-3 sm:px-4 lg:px-8 relative z-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 animate-fade-in-up leading-tight">
            Ready to Transform Your AI Infrastructure?
          </h2>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 opacity-90 animate-fade-in-up delay-200">
            Let's build the future of AI together
          </p>
          <Link 
            to="/contact" 
            className="inline-block bg-white text-cyan-600 hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base md:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg sm:hover:shadow-2xl animate-pulse-slow backdrop-blur-sm w-full sm:w-auto"
          >
            🚀 Start Your AI Journey Today
          </Link>
        </div>
      </section>

      {/* Enhanced CSS Animations */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes parallaxSlow {
          0%, 100% {
            transform: scale(1.1) translateY(0);
          }
          50% {
            transform: scale(1.15) translateY(-5px);
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
            transform: translate(20px, -30px) scale(1.1);
          }
          66% {
            transform: translate(-15px, 20px) scale(0.9);
          }
        }

        @keyframes floatOrb2 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(-30px, 25px) scale(1.2);
          }
          66% {
            transform: translate(20px, -15px) scale(0.8);
          }
        }

        @keyframes floatOrb3 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(20px, 30px) scale(1.05);
          }
          66% {
            transform: translate(-25px, -20px) scale(0.95);
          }
        }

        @keyframes countUp {
          from {
            opacity: 0;
            transform: scale(0.5) translateY(10px);
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
            transform: translateY(4px);
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
        
        .animate-count-up {
          animation: countUp 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-scroll-indicator {
          animation: scrollIndicator 2s ease-in-out infinite;
        }
        
        .delay-200 {
          animation-delay: 200ms;
        }
        
        .delay-300 {
          animation-delay: 300ms;
        }
        
        .delay-500 {
          animation-delay: 500ms;
        }

        /* Line clamp utilities */
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* Mobile-first responsive design */
        @media (max-width: 639px) {
          .leading-tight {
            line-height: 1.2;
          }
          
          .leading-relaxed {
            line-height: 1.5;
          }
        }

        /* Custom breakpoints */
        @media (min-width: 320px) {
          .min-\\[320px\\]\\:block { display: block; }
          .min-\\[320px\\]\\:hidden { display: none; }
          .min-\\[320px\\]\\:flex-row { flex-direction: row; }
          .min-\\[320px\\]\\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }

        @media (min-width: 375px) {
          .min-\\[375px\\]\\:block { display: block; }
        }

        @media (min-width: 425px) {
          .min-\\[425px\\]\\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
        }

        @media (min-width: 480px) {
          .min-\\[480px\\]\\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }
      `}</style>
    </div>
  );
};

export default ExploreServices;