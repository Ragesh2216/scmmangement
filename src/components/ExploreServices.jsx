import React, { useState, useEffect, useRef } from 'react';
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
  const [scrollY, setScrollY] = useState(0);
  const sectionRefs = useRef([]);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    setIsVisible(true);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in-view');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  // Auto-slide interval
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Enhanced color scheme
  const colors = {
    primary: 'from-fuchsia-600 to-purple-700',
    secondary: 'from-rose-500 to-pink-600',
    accent: 'from-violet-500 to-purple-600',
    success: 'from-emerald-500 to-teal-600',
    info: 'from-cyan-500 to-blue-600',
    warning: 'from-amber-500 to-orange-600',
    dark: 'from-slate-900 to-gray-900',
  };

  const slides = [
    {
      id: 1,
      title: "AI Supercluster",
      description: "Massive new supercluster with next-generation NVIDIA GPUs and high-performance computing",
      icon: "⚡",
      color: colors.accent,
      image: ai
    },
    {
      id: 2,
      title: "High-Speed Networking",
      description: "Advanced RDMA networking with ultra-low latency for distributed AI training",
      icon: "🔗",
      color: colors.info,
      image: speed
    },
    {
      id: 3,
      title: "Multicloud Flexibility",
      description: "Seamless integration across cloud environments with unified licensing",
      icon: "☁️",
      color: colors.primary,
      image: cloud
    },
    {
      id: 4,
      title: "AI Infrastructure",
      description: "Purpose-built infrastructure optimized for machine learning workloads",
      icon: "🤖",
      color: colors.success,
      image: aiint
    },
    {
      id: 5,
      title: "Performance Scaling",
      description: "Linear scaling across thousands of GPUs for massive AI models",
      icon: "📈",
      color: colors.warning,
      image: scale
    },
    {
      id: 6,
      title: "Enterprise Security",
      description: "Zero-trust architecture with end-to-end encryption and compliance",
      icon: "🛡️",
      color: colors.secondary,
      image: secuter
    }
  ];

  const customerStories = [
    {
      id: 1,
      company: "Omega Healthcare",
      title: "Manages growth and M&A with Oracle Fusion Cloud Applications",
      description: "The healthcare solutions provider integrates multiple acquisitions and unifies technology and processes.",
      link: "/404",
      industry: "Healthcare",
      icon: "🏥",
      color: colors.info,
    },
    {
      id: 2,
      company: "MACOM",
      title: "Sees faster loan approvals and business reporting with OCI",
      description: "The IT services firm speeds up loan application reviews and business reports.",
      link: "/404",
      industry: "Financial Services",
      icon: "💳",
      color: colors.success,
    },
    {
      id: 3,
      company: "Panasonic Electric Works India",
      title: "Improves customer satisfaction with Oracle Cloud",
      description: "India's leading provider of electrical systems migrates to cloud infrastructure.",
      link: "/404",
      industry: "Manufacturing",
      icon: "🏭",
      color: colors.primary,
    },
    {
      id: 4,
      company: "Uber",
      title: "Relies on Oracle Cloud to deliver on promises to its customers",
      description: "Global ride-sharing platform leverages cloud for scalable infrastructure.",
      link: "/404",
      industry: "Technology",
      icon: "🚗",
      color: colors.warning,
    }
  ];

  const services = [
    {
      title: "Cloud Applications",
      description: "A complete suite of cloud applications delivering consistent processes and data across your business",
      icon: "📊",
      link: "/services",
      color: colors.accent,
      image: cloud
    },
    {
      title: "Cloud Infrastructure",
      description: "An automated, secure platform for migrating enterprise workloads and building new cloud native apps",
      icon: "⚙️",
      link: "/services",
      color: colors.primary,
      image: aiint
    }
  ];

  // Parallax effect function
  const parallaxStyle = (speed = 0.5) => ({
    transform: `translateY(${scrollY * speed}px)`,
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-fuchsia-900 overflow-hidden">
      {/* Enhanced Hero Section with Parallax */}
      <section 
        ref={el => sectionRefs.current[0] = el}
        className="relative min-h-screen flex items-center justify-center pt-16 pb-8 min-[320px]:pb-10 sm:pb-12 px-3 min-[320px]:px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        {/* Enhanced Background with multiple layers */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Base gradient layer */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-fuchsia-900"></div>
          
          {/* Animated gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-600/30 via-purple-600/20 to-rose-600/30 animate-gradient-pan"></div>
          
          {/* Particle effect */}
          <div className="absolute inset-0 particle-container">
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full animate-float-particle"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  opacity: Math.random() * 0.5 + 0.1,
                }}
              />
            ))}
          </div>
        </div>

        {/* Animated orbs with glow */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 min-[320px]:w-40 min-[320px]:h-40 sm:w-96 sm:h-96">
            <div className="w-full h-full bg-gradient-to-r from-fuchsia-400/40 to-purple-500/40 rounded-full blur-2xl sm:blur-3xl animate-pulse-glow"></div>
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-fuchsia-400/20 to-purple-500/20 rounded-full animate-spin-slow"></div>
          </div>
          
          <div className="absolute top-1/3 right-1/4 w-28 h-28 min-[320px]:w-36 min-[320px]:h-36 sm:w-80 sm:h-80">
            <div className="w-full h-full bg-gradient-to-r from-rose-400/40 to-pink-500/40 rounded-full blur-2xl sm:blur-3xl animate-pulse-glow delay-1000"></div>
          </div>
          
          <div className="absolute bottom-1/4 left-1/3 w-24 h-24 min-[320px]:w-32 min-[320px]:h-32 sm:w-72 sm:h-72">
            <div className="w-full h-full bg-gradient-to-r from-violet-400/40 to-indigo-500/40 rounded-full blur-2xl sm:blur-3xl animate-pulse-glow delay-2000"></div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10 w-full px-2">
          <div className={`mb-4 min-[320px]:mb-6 sm:mb-8 mt-4 min-[320px]:mt-6 sm:mt-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Animated Main Heading */}
            <h1 className="text-2xl min-[320px]:text-2xl min-[375px]:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 min-[320px]:mb-5 sm:mb-8 leading-tight drop-shadow-2xl">
              <span className="block animate-slide-in-up text-xl min-[320px]:text-xl min-[375px]:text-2xl sm:text-3xl md:text-4xl bg-gradient-to-r from-fuchsia-400 via-rose-400 to-pink-400 bg-clip-text text-transparent">
                AI Infrastructure
              </span>
              <span className="block mt-2 min-[320px]:mt-2 sm:mt-4">
                <span className="bg-gradient-to-r from-fuchsia-400 via-rose-400 to-pink-400 bg-clip-text text-transparent animate-gradient-flow text-2xl min-[320px]:text-2xl min-[375px]:text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                  Innovation Unleashed
                </span>
              </span>
            </h1>

            {/* Enhanced Description with Typewriter Effect */}
            <div className="text-sm min-[320px]:text-base sm:text-lg md:text-xl text-white/80 max-w-xs min-[320px]:max-w-sm sm:max-w-md lg:max-w-2xl mx-auto mb-6 min-[320px]:mb-7 sm:mb-12 leading-relaxed">
              <p className="animate-typewriter overflow-hidden whitespace-nowrap border-r-4 border-fuchsia-400 pr-1">
                Next-generation AI infrastructure with massive superclusters.
              </p>
              <p className="mt-2 min-[320px]:mt-2 sm:mt-3 text-white/60 text-xs min-[320px]:text-sm sm:text-base md:text-lg animate-fade-in delay-1000">
                Enterprise-grade AI solutions with unparalleled performance and scalability.
              </p>
            </div>

            {/* Enhanced CTA Buttons with Hover Effects */}
            <div className="flex flex-col min-[320px]:flex-row gap-2 min-[320px]:gap-3 sm:gap-4 md:gap-6 justify-center items-center animate-fade-in-up delay-500 px-2">
              <Link
                to="/contact"
                className="group relative bg-gradient-to-r from-fuchsia-500 to-rose-600 hover:from-fuchsia-600 hover:to-rose-700 text-white px-4 min-[320px]:px-5 sm:px-8 md:px-10 lg:px-12 py-2 min-[320px]:py-2.5 sm:py-3 md:py-4 rounded-lg sm:rounded-xl lg:rounded-2xl font-bold text-sm min-[320px]:text-base sm:text-lg transition-all duration-500 transform hover:scale-105 hover:shadow-lg sm:hover:shadow-xl shadow-md shadow-fuchsia-500/30 overflow-hidden w-full min-[320px]:w-auto text-center animate-pulse-slow"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-400/10 via-rose-400/10 to-pink-400/10 animate-shimmer"></div>
                <span className="relative z-10 flex items-center gap-1 min-[320px]:gap-2 justify-center">
                  🚀 Get AI Assessment
                  <span className="group-hover:translate-x-1 transition-transform duration-300 animate-bounce-x">→</span>
                </span>
              </Link>

              <Link
                to="/services"
                className="group relative bg-white/10 backdrop-blur-lg border border-white/30 hover:border-fuchsia-400/50 text-white hover:bg-white/20 px-4 min-[320px]:px-5 sm:px-6 md:px-8 lg:px-10 py-2 min-[320px]:py-2.5 sm:py-3 md:py-4 rounded-lg sm:rounded-xl lg:rounded-2xl font-bold text-sm min-[320px]:text-base sm:text-lg transition-all duration-500 transform hover:scale-105 hover:shadow-lg w-full min-[320px]:w-auto text-center"
              >
                <div className="absolute inset-0 rounded-lg sm:rounded-xl lg:rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <span className="relative flex items-center gap-1 min-[320px]:gap-2 justify-center">
                  ⚡ Explore Solutions
                  <span className="group-hover:rotate-90 transition-transform duration-300">📊</span>
                </span>
              </Link>
            </div>

            {/* Enhanced Stats with Counter Animation */}
            <div className="grid grid-cols-3 gap-3 min-[320px]:gap-4 sm:gap-6 md:gap-8 mt-8 min-[320px]:mt-10 sm:mt-12 md:mt-16 max-w-xs min-[320px]:max-w-sm sm:max-w-md md:max-w-2xl mx-auto animate-fade-in-up delay-700 px-2">
              {[
                { number: '10K+', label: 'GPUs Deployed', color: 'from-fuchsia-400 to-rose-500' },
                { number: '99.9%', label: 'Uptime SLA', color: 'from-emerald-400 to-teal-500' },
                { number: '60%', label: 'Cost Savings', color: 'from-violet-400 to-purple-500' }
              ].map((stat, index) => (
                <div key={index} className="text-center group cursor-pointer">
                  <div className={`text-base min-[320px]:text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1 min-[320px]:mb-2 animate-count`}>
                    {stat.number}
                  </div>
                  <div className="text-white/60 text-xs min-[320px]:text-sm font-medium leading-tight group-hover:text-white/80 transition-colors duration-300">
                    {stat.label}
                  </div>
                  <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-transparent via-fuchsia-500 to-transparent transition-all duration-500 mt-1 mx-auto"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-3 min-[320px]:bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-scroll-bounce">
          <div className="flex flex-col items-center gap-2">
            <div className="text-white/60 text-xs animate-pulse">Scroll</div>
            <div className="w-4 h-6 min-[320px]:w-5 min-[320px]:h-8 sm:w-6 sm:h-10 border-2 border-fuchsia-400 rounded-full flex justify-center relative overflow-hidden">
              <div className="w-1 h-1 min-[320px]:h-2 sm:h-3 bg-gradient-to-b from-fuchsia-400 to-rose-400 rounded-full mt-2 animate-scroll-dot"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-fuchsia-400/10 to-transparent animate-scroll-glow"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Slides Section with Parallax */}
      <section 
        ref={el => sectionRefs.current[1] = el}
        className="py-8 min-[320px]:py-10 sm:py-12 md:py-16 lg:py-20 px-3 min-[320px]:px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        style={parallaxStyle(0.3)}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-900/20 via-purple-900/20 to-rose-900/20"></div>
        
        {/* Floating elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-10 w-20 h-20 bg-gradient-to-r from-fuchsia-500/10 to-purple-500/10 rounded-full blur-xl animate-float-vertical"></div>
          <div className="absolute bottom-1/4 right-10 w-16 h-16 bg-gradient-to-r from-rose-500/10 to-pink-500/10 rounded-full blur-xl animate-float-horizontal"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-6 min-[320px]:mb-8 sm:mb-10 md:mb-12 lg:mb-16">
            <h2 className="text-xl min-[320px]:text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 min-[320px]:mb-3 sm:mb-4 animate-fade-in-up leading-tight">
              <span className="bg-gradient-to-r from-fuchsia-400 to-rose-400 bg-clip-text text-transparent">
                AI Infrastructure Innovations
              </span>
            </h2>
            <p className="text-sm min-[320px]:text-base sm:text-lg lg:text-xl text-gray-300 max-w-xs min-[320px]:max-w-sm sm:max-w-md md:max-w-2xl mx-auto animate-fade-in-up delay-200 leading-relaxed">
              Next-Generation AI Infrastructure Solutions
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-4 min-[320px]:gap-5 sm:gap-6 md:gap-8 lg:gap-12">
            {/* Main Slide with 3D effect */}
            <div className="w-full lg:w-1/2 animate-fade-in-left">
              <div className="relative h-48 min-[320px]:h-52 sm:h-64 md:h-72 lg:h-80 xl:h-96 rounded-lg sm:rounded-xl lg:rounded-2xl overflow-hidden group perspective-1000">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-all duration-1000 group-hover:scale-110"
                  style={{ backgroundImage: `url(${slides[activeSlide].image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-purple-900/60 to-fuchsia-900/60"></div>
                </div>
                
                {/* 3D hover effect */}
                <div className="absolute inset-0 transform group-hover:rotate-y-5 transition-transform duration-700">
                  <div className="relative z-10 h-full flex items-center justify-center p-3 min-[320px]:p-4 sm:p-6 lg:p-8">
                    <div className="text-center max-w-md mx-auto transform group-hover:scale-105 transition-transform duration-500">
                      <div className={`text-2xl min-[320px]:text-3xl sm:text-4xl lg:text-5xl mb-2 min-[320px]:mb-3 sm:mb-4 animate-bounce ${slides[activeSlide].color.replace('from-', 'text-').replace('to-', '')}`}>
                        {slides[activeSlide].icon}
                      </div>
                      <h3 className="text-lg min-[320px]:text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 min-[320px]:mb-3 sm:mb-4 leading-tight">
                        {slides[activeSlide].title}
                      </h3>
                      <p className="text-gray-300 text-xs min-[320px]:text-sm sm:text-base lg:text-lg leading-relaxed">
                        {slides[activeSlide].description}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Glowing border */}
                <div className="absolute inset-0 rounded-lg sm:rounded-xl lg:rounded-2xl border border-transparent group-hover:border-fuchsia-400/50 transition-all duration-500"></div>
                <div className={`absolute inset-0 bg-gradient-to-br ${slides[activeSlide].color} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}></div>
              </div>
            </div>

            {/* Slide Navigation with Hover Effects */}
            <div className="w-full lg:w-1/2 animate-fade-in-right">
              <div className="grid grid-cols-2 min-[320px]:grid-cols-2 min-[425px]:grid-cols-3 gap-2 min-[320px]:gap-3 sm:gap-4 lg:gap-6 h-full">
                {slides.map((slide, index) => (
                  <button
                    key={slide.id}
                    onClick={() => setActiveSlide(index)}
                    className={`relative overflow-hidden p-2 min-[320px]:p-3 sm:p-4 lg:p-5 rounded-lg sm:rounded-xl lg:rounded-2xl text-left transition-all duration-500 transform hover:scale-105 group min-h-[80px] min-[320px]:min-h-[90px] sm:min-h-[100px] lg:min-h-[120px] ${
                      activeSlide === index
                        ? `bg-gradient-to-br ${slide.color} text-white shadow-lg shadow-fuchsia-500/30 scale-105`
                        : 'bg-white/10 backdrop-blur-sm text-gray-300 hover:bg-white/20 hover:shadow-lg'
                    }`}
                  >
                    {/* Hover effect layer */}
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Background image with parallax */}
                    <div 
                      className="absolute inset-0 bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity duration-300"
                      style={{ 
                        backgroundImage: `url(${slide.image})`,
                        transform: activeSlide === index ? 'scale(1.1)' : 'scale(1)',
                        transition: 'transform 0.5s ease'
                      }}
                    ></div>
                    
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300"></div>
                    
                    <div className="relative z-10 h-full flex flex-col justify-center">
                      <div className={`text-lg min-[320px]:text-xl sm:text-2xl lg:text-3xl mb-1 min-[320px]:mb-2 transition-transform duration-300 ${
                        activeSlide === index ? 'animate-pulse scale-110' : 'group-hover:scale-110'
                      }`}>
                        {slide.icon}
                      </div>
                      <h4 className="font-semibold text-xs min-[320px]:text-sm sm:text-base lg:text-lg mb-1 leading-tight line-clamp-1 group-hover:text-white">
                        {slide.title}
                      </h4>
                      <p className="text-xs opacity-80 line-clamp-2 leading-tight hidden min-[375px]:block group-hover:opacity-100">
                        {slide.description}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced Slide Indicators */}
          <div className="flex justify-center mt-4 min-[320px]:mt-5 sm:mt-6 lg:mt-8 space-x-1 min-[320px]:space-x-2 sm:space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className={`relative h-2 min-[320px]:h-2.5 sm:h-3 lg:h-4 rounded-full transition-all duration-500 overflow-hidden ${
                  activeSlide === index
                    ? 'w-8 min-[320px]:w-10 sm:w-12 lg:w-16'
                    : 'w-2 min-[320px]:w-2.5 sm:w-3 lg:w-4 hover:w-4 min-[320px]:hover:w-5 sm:hover:w-6'
                }`}
              >
                <div className={`absolute inset-0 rounded-full ${
                  activeSlide === index
                    ? `bg-gradient-to-r ${colors.accent}`
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}></div>
                {activeSlide === index && (
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Customers Section with Staggered Animation */}
      <section 
        ref={el => sectionRefs.current[2] = el}
        className="py-8 min-[320px]:py-10 sm:py-12 md:py-16 lg:py-20 px-3 min-[320px]:px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-fuchsia-900/20 to-rose-900/30"></div>
        
        {/* Animated background grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-grid-white/10 bg-grid-16"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-6 min-[320px]:mb-8 sm:mb-10 md:mb-12 lg:mb-16">
            <h2 className="text-xl min-[320px]:text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 min-[320box]:mb-3 sm:mb-4 animate-fade-in-up leading-tight">
              <span className="bg-gradient-to-r from-fuchsia-400 to-rose-400 bg-clip-text text-transparent">
                Trusted by Industry Leaders
              </span>
            </h2>
            <p className="text-sm min-[320px]:text-base sm:text-lg lg:text-xl text-gray-300 max-w-xs min-[320px]:max-w-sm sm:max-w-md md:max-w-2xl mx-auto animate-fade-in-up delay-200 leading-relaxed">
              Discover how global enterprises leverage our AI infrastructure
            </p>
          </div>

          <div className="grid grid-cols-1 min-[320px]:grid-cols-1 min-[480px]:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-3 min-[320px]:gap-4 sm:gap-5 lg:gap-6 xl:gap-8">
            {customerStories.map((story, index) => (
              <div
                key={story.id}
                className="group relative bg-white/10 backdrop-blur-lg rounded-lg sm:rounded-xl lg:rounded-2xl p-3 min-[320px]:p-4 sm:p-5 lg:p-6 border border-white/20 hover:border-fuchsia-500/50 transition-all duration-500 transform hover:-translate-y-2 lg:hover:-translate-y-3 hover:shadow-2xl hover:shadow-fuchsia-500/20 overflow-hidden animate-stagger-fade"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Hover gradient effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${story.color} opacity-0 group-hover:opacity-20 transition-opacity duration-700`}></div>
                
                {/* Shimmer effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                <div className="relative z-10">
                  {/* Company Header with Animation */}
                  <div className="flex flex-col min-[320px]:flex-row min-[320px]:items-center gap-2 min-[320px]:gap-3 sm:gap-4 mb-3 min-[320px]:mb-4 sm:mb-5">
                    <div className="flex items-center gap-2 min-[320px]:gap-3 sm:gap-4">
                      <div className="relative w-8 h-8 min-[320box]:w-9 min-[320px]:h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 rounded-lg sm:rounded-xl bg-white/10 flex-shrink-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <span className="text-sm min-[320px]:text-base sm:text-lg lg:text-xl xl:text-2xl group-hover:animate-spin-slow">
                          {story.icon}
                        </span>
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="font-bold text-white text-sm min-[320px]:text-base sm:text-lg lg:text-xl truncate leading-tight group-hover:text-fuchsia-300 transition-colors duration-300">
                          {story.company}
                        </h3>
                        <div className="flex items-center gap-1 min-[320px]:gap-2">
                          <span className="text-gray-400 text-xs min-[320px]:text-sm leading-tight group-hover:text-white/70 transition-colors duration-300">
                            {story.industry}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Story Content */}
                  <h4 className="text-white font-semibold mb-2 min-[320px]:mb-3 sm:mb-4 leading-tight text-sm min-[320px]:text-base sm:text-lg lg:text-xl group-hover:text-fuchsia-300 transition-colors duration-300 line-clamp-2 min-h-[2.5rem]">
                    {story.title}
                  </h4>
                  <p className="text-gray-300 text-xs min-[320px]:text-sm sm:text-base leading-relaxed mb-3 min-[320px]:mb-4 sm:mb-5 line-clamp-3 min-h-[3.5rem] group-hover:text-white/80 transition-colors duration-300">
                    {story.description}
                  </p>

                  {/* Enhanced Read Story Link */}
                  <Link
                    to={story.link}
                    className="inline-flex items-center gap-1 min-[320px]:gap-2 text-fuchsia-400 hover:text-rose-300 font-semibold text-xs min-[320px]:text-sm sm:text-base transition-all duration-300 group-hover:gap-2 lg:group-hover:gap-3 relative overflow-hidden py-1"
                  >
                    <span className="relative z-10 flex items-center gap-1 min-[320px]:gap-2">
                      Read the story
                      <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </span>
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-fuchsia-400 to-rose-400 group-hover:w-full transition-all duration-500"></div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Services Section with Flip Animation */}
      <section 
        ref={el => sectionRefs.current[3] = el}
        className="py-8 min-[320px]:py-10 sm:py-12 md:py-16 lg:py-20 px-3 min-[320px]:px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-fuchsia-900/20 to-rose-900/30"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-6 min-[320px]:mb-8 sm:mb-10 md:mb-12 lg:mb-16">
            <h2 className="text-xl min-[320px]:text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 min-[320px]:mb-3 sm:mb-4 animate-fade-in-up leading-tight">
              <span className="bg-gradient-to-r from-fuchsia-400 to-rose-400 bg-clip-text text-transparent">
                Our AI Services
              </span>
            </h2>
            <p className="text-sm min-[320px]:text-base sm:text-lg lg:text-xl text-gray-300 max-w-xs min-[320px]:max-w-sm sm:max-w-md md:max-w-2xl mx-auto animate-fade-in-up delay-200 leading-relaxed">
              Comprehensive AI Infrastructure Solutions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 min-[320px]:gap-5 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="group perspective-1000 relative overflow-hidden rounded-lg sm:rounded-xl lg:rounded-2xl p-4 min-[320px]:p-5 sm:p-6 lg:p-8 text-white transition-all duration-700 transform hover:-translate-y-2 lg:hover:-translate-y-3 hover:shadow-2xl hover:shadow-fuchsia-500/20 min-h-[200px] min-[320px]:min-h-[220px] sm:min-h-[250px] lg:min-h-[300px] animate-flip-in"
                style={{ animationDelay: `${index * 300}ms` }}
              >
                {/* Front side */}
                <div className="relative h-full transition-all duration-700 preserve-3d group-hover:rotate-y-180">
                  <div className="absolute inset-0 backface-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url(${service.image})` }}
                    ></div>
                    
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-90 group-hover:opacity-80 transition-opacity duration-500`}></div>
                    
                    <div className="relative z-10 h-full flex flex-col justify-center p-4 min-[320px]:p-5 sm:p-6 lg:p-8">
                      <div className="text-2xl min-[320px]:text-3xl sm:text-4xl lg:text-5xl mb-3 min-[320px]:mb-4 sm:mb-5 transition-transform duration-500 group-hover:scale-110">
                        {service.icon}
                      </div>
                      <h3 className="text-lg min-[320px]:text-xl sm:text-2xl lg:text-3xl font-bold mb-2 min-[320px]:mb-3 sm:mb-4 leading-tight">
                        {service.title}
                      </h3>
                      <p className="text-white/80 mb-4 min-[320px]:mb-5 sm:mb-6 lg:mb-8 leading-relaxed text-sm min-[320px]:text-base sm:text-lg lg:text-xl">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Back side (flipped) */}
                  <div className="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br from-gray-900 to-slate-900 p-4 min-[320px]:p-5 sm:p-6 lg:p-8">
                    <div className="h-full flex flex-col justify-center items-center text-center">
                      <div className="text-3xl min-[320px]:text-4xl sm:text-5xl lg:text-6xl mb-4 min-[320px]:mb-5 sm:mb-6">
                        {service.icon}
                      </div>
                      <h3 className="text-xl min-[320px]:text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 min-[320px]:mb-4 sm:mb-5 text-white">
                        {service.title}
                      </h3>
                      <p className="text-gray-300 mb-6 min-[320px]:mb-7 sm:mb-8 text-sm min-[320px]:text-base sm:text-lg">
                        Get started with our comprehensive solutions
                      </p>
                      <Link
                        to={service.link}
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-fuchsia-500 to-rose-600 hover:from-fuchsia-600 hover:to-rose-700 px-4 min-[320px]:px-5 sm:px-6 lg:px-8 py-2 min-[320px]:py-2.5 sm:py-3 lg:py-4 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 text-sm min-[320px]:text-base sm:text-lg"
                      >
                        Learn More
                        <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Final CTA Section */}
      <section 
        ref={el => sectionRefs.current[4] = el}
        className="py-8 min-[320px]:py-10 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-r from-fuchsia-600 via-purple-600 to-rose-700 text-white relative overflow-hidden"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-r from-white/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-l from-white/10 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center px-3 min-[320px]:px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-xl min-[320px]:text-2xl sm:text-3xl md:text-4xl font-bold mb-2 min-[320px]:mb-3 sm:mb-4 animate-fade-in-up leading-tight">
            <span className="bg-gradient-to-r from-white via-rose-100 to-pink-200 bg-clip-text text-transparent">
              Ready to Transform Your AI Infrastructure?
            </span>
          </h2>
          <p className="text-sm min-[320px]:text-base sm:text-lg lg:text-xl mb-4 min-[320px]:mb-5 sm:mb-6 lg:mb-8 opacity-90 animate-fade-in-up delay-200 leading-relaxed">
            Let's build the future of AI together
          </p>
          <Link 
            to="/contact" 
            className="group relative inline-block bg-white text-fuchsia-600 hover:bg-gray-100 px-4 min-[320px]:px-5 sm:px-6 lg:px-8 py-2 min-[320box]:py-2.5 sm:py-3 lg:py-4 rounded-lg sm:rounded-xl font-semibold text-sm min-[320px]:text-base sm:text-lg md:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl animate-float backdrop-blur-sm overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            <span className="relative z-10 flex items-center justify-center gap-2">
              🚀 Start Your AI Journey Today
              <span className="group-hover:rotate-180 transition-transform duration-500">⚡</span>
            </span>
          </Link>
          
          {/* Additional floating elements */}
          <div className="mt-8 min-[320px]:mt-10 sm:mt-12 flex justify-center space-x-4">
            {['🤖', '⚡', '🔗', '☁️'].map((icon, index) => (
              <div
                key={index}
                className="text-2xl animate-bounce"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {icon}
              </div>
            ))}
          </div>
        </div>
      </section>

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

        @keyframes typewriter {
          from { width: 0; }
          to { width: 100%; }
        }

        @keyframes gradientFlow {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes gradientPan {
          0% {
            background-position: 0% 0%;
          }
          100% {
            background-position: 100% 100%;
          }
        }

        @keyframes pulseGlow {
          0%, 100% {
            opacity: 0.4;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.05);
          }
        }

        @keyframes spinSlow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes floatParticle {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-10px) translateX(-10px);
          }
          75% {
            transform: translateY(-30px) translateX(5px);
          }
        }

        @keyframes floatVertical {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes floatHorizontal {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(20px);
          }
        }

        @keyframes count {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.8);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes scrollBounce {
          0%, 100% {
            transform: translateY(0) translateX(-50%);
          }
          50% {
            transform: translateY(10px) translateX(-50%);
          }
        }

        @keyframes scrollDot {
          0% {
            transform: translateY(0);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(20px);
            opacity: 0;
          }
        }

        @keyframes scrollGlow {
          0%, 100% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
        }

        @keyframes bounceX {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(5px);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -200px 0;
          }
          100% {
            background-position: calc(200px + 100%) 0;
          }
        }

        @keyframes staggerFade {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes flipIn {
          from {
            opacity: 0;
            transform: rotateY(90deg) scale(0.8);
          }
          to {
            opacity: 1;
            transform: rotateY(0) scale(1);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        /* Utility classes */
        .animate-typewriter {
          animation: typewriter 2s steps(40) 1s 1 normal both;
        }

        .animate-gradient-flow {
          background-size: 200% 200%;
          animation: gradientFlow 3s ease infinite;
        }

        .animate-gradient-pan {
          background-size: 200% 200%;
          animation: gradientPan 15s linear infinite;
        }

        .animate-pulse-glow {
          animation: pulseGlow 3s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spinSlow 20s linear infinite;
        }

        .animate-float-particle {
          animation: floatParticle 15s ease-in-out infinite;
        }

        .animate-float-vertical {
          animation: floatVertical 8s ease-in-out infinite;
        }

        .animate-float-horizontal {
          animation: floatHorizontal 10s ease-in-out infinite;
        }

        .animate-count {
          animation: count 1s ease-out forwards;
        }

        .animate-scroll-bounce {
          animation: scrollBounce 2s ease-in-out infinite;
        }

        .animate-scroll-dot {
          animation: scrollDot 2s ease-in-out infinite;
        }

        .animate-scroll-glow {
          animation: scrollGlow 2s ease-in-out infinite;
        }

        .animate-bounce-x {
          animation: bounceX 1s ease-in-out infinite;
        }

        .animate-shimmer {
          background-size: 200px 100%;
          animation: shimmer 2s infinite linear;
        }

        .animate-stagger-fade {
          animation: staggerFade 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-flip-in {
          animation: flipIn 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-in-view {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        /* 3D Transform utilities */
        .perspective-1000 {
          perspective: 1000px;
        }

        .preserve-3d {
          transform-style: preserve-3d;
        }

        .backface-hidden {
          backface-visibility: hidden;
        }

        .rotate-y-180 {
          transform: rotateY(180deg);
        }

        .bg-grid-white\/10 {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(255 255 255 / 0.1)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
        }

        .bg-grid-16 {
          background-size: 16px 16px;
        }

        /* Scroll animation triggers */
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

        .animate-slide-in-up {
          animation: slideInUp 1s ease-out;
        }

        /* Delay utilities */
        .delay-100 {
          animation-delay: 100ms;
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
        .delay-700 {
          animation-delay: 700ms;
        }
        .delay-1000 {
          animation-delay: 1000ms;
        }
        .delay-2000 {
          animation-delay: 2000ms;
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

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 10px;
        }

        ::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 5px;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #d946ef, #ec4899);
          border-radius: 5px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #c026d3, #db2777);
        }
      `}</style>
    </div>
  );
};

export default ExploreServices;