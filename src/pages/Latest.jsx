import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

function Latest() {
  const [activeTab, setActiveTab] = useState("monthly");
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });
  const [hoveredPlan, setHoveredPlan] = useState(null);
  const { scrollYProgress } = useScroll();

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardHover = {
    rest: { 
      scale: 1,
      y: 0,
      boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)"
    },
    hover: { 
      scale: 1.02,
      y: -8,
      boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.25)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage({ type: '', text: '' });

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setMessage({ 
        type: 'success', 
        text: 'Thank you! Our team will contact you shortly.' 
      });
      setEmail('');
    } catch (error) {
      setMessage({ 
        type: 'error', 
        text: 'Submission failed. Please try again.' 
      });
    } finally {
      setIsLoading(false);
    }
  };

  const pricingPlans = [
    {
      id: 1,
      name: "Starter",
      description: "Perfect for small businesses starting their SCM journey",
      price: { monthly: 299, yearly: 2990 },
      popular: false,
      gradient: "from-blue-500 to-cyan-500",
      icon: "🚚",
      features: [
        "Basic Inventory Management",
        "Real-time Tracking (Up to 100 shipments/month)",
        "Basic Analytics Dashboard",
        "Email Support",
        "2 User Accounts",
        "Mobile App Access",
        "API Access (Limited)",
        "Basic Reporting"
      ],
      cta: "Start Free Trial",
      link: "/signup",
      highlightColor: "blue"
    },
    {
      id: 2,
      name: "Professional",
      description: "Advanced features for growing supply chains",
      price: { monthly: 799, yearly: 7990 },
      popular: true,
      gradient: "from-purple-500 to-pink-500",
      icon: "📊",
      features: [
        "Advanced Inventory Optimization",
        "Unlimited Real-time Tracking",
        "AI-Powered Demand Forecasting",
        "Priority Support",
        "10 User Accounts",
        "Advanced Analytics",
        "Full API Access",
        "Custom Reporting",
        "Supplier Management",
        "Warehouse Management"
      ],
      cta: "Get Started",
      link: "/signup",
      highlightColor: "purple"
    },
    {
      id: 3,
      name: "Enterprise",
      description: "Complete SCM solution for large organizations",
      price: { monthly: 1499, yearly: 14990 },
      popular: false,
      gradient: "from-amber-500 to-orange-500",
      icon: "🏭",
      features: [
        "Everything in Professional",
        "Dedicated Account Manager",
        "Custom AI Models",
        "24/7 Phone Support",
        "Unlimited User Accounts",
        "Multi-warehouse Management",
        "Advanced Risk Analytics",
        "Custom Integrations",
        "SLA Guarantee",
        "On-premise Deployment Option",
        "Training & Onboarding",
        "Custom Development"
      ],
      cta: "Contact Sales",
      link: "/contact",
      highlightColor: "amber"
    }
  ];

  const stats = [
    { 
      number: "99.5%", 
      label: "Uptime SLA", 
      gradient: "from-emerald-500 to-green-500",
      icon: "🛡️"
    },
    { 
      number: "24/7", 
      label: "Support", 
      gradient: "from-cyan-500 to-blue-500",
      icon: "📞"
    },
    { 
      number: "50K+", 
      label: "Shipments", 
      gradient: "from-pink-500 to-rose-500",
      icon: "📦"
    },
    { 
      number: "40%", 
      label: "Cost Reduction", 
      gradient: "from-orange-500 to-amber-500",
      icon: "💰"
    }
  ];

  const faqItems = [
    {
      question: "Can I switch plans later?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately."
    },
    {
      question: "Is there a free trial?",
      answer: "Yes, all plans include a 14-day free trial with full access to all features."
    },
    {
      question: "Do you offer discounts for non-profits?",
      answer: "Yes, we offer special pricing for non-profit organizations and educational institutions."
    }
  ];

  const features = [
    {
      icon: "🚀",
      title: "AI-Powered Optimization",
      description: "Reduce costs by up to 40% with intelligent route and inventory optimization",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: "🔒",
      title: "Enterprise Security",
      description: "Bank-level security with 99.9% uptime SLA and data encryption",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: "🌐",
      title: "Global Support",
      description: "24/7 support with dedicated account managers for enterprise clients",
      gradient: "from-amber-500 to-orange-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute inset-0">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                x: [0, 100 * Math.sin(i), 0],
                y: [0, 100 * Math.cos(i), 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 20 + i * 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 2
              }}
              className={`absolute w-64 h-64 sm:w-96 sm:h-96 rounded-full blur-3xl opacity-5 ${
                i % 3 === 0 ? 'bg-cyan-500' : 
                i % 3 === 1 ? 'bg-purple-500' : 'bg-amber-500'
              }`}
              style={{
                left: `${20 + i * 15}%`,
                top: `${10 + i * 20}%`,
              }}
            />
          ))}
        </div>

        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pt-24">
          {/* Hero Section */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Supply Chain
              </span>
              <br />
              <span className="text-white">Management Plans</span>
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed"
            >
              Choose the perfect plan to optimize your supply chain operations, reduce costs, 
              and improve efficiency with AI-powered solutions.
            </motion.p>

            {/* Billing Toggle */}
            <motion.div 
              variants={fadeInUp}
              className="inline-flex items-center bg-gray-800/50 backdrop-blur-sm rounded-full p-1 border border-gray-700 mb-12"
            >
              {["monthly", "yearly"].map((tab) => (
                <motion.button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                    activeTab === tab 
                      ? 'text-white' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {activeTab === tab && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    />
                  )}
                  <span className="relative z-10 capitalize">{tab}</span>
                </motion.button>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div 
              variants={staggerContainer}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto mb-16"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05 }}
                  className="text-center group cursor-pointer"
                >
                  <div className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                    {stat.label}
                  </div>
                  <div className="mt-2 text-xl opacity-0 group-hover:opacity-100 transition-opacity">
                    {stat.icon}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Pricing Cards */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20"
          >
            {pricingPlans.map((plan) => (
              <motion.div
                key={plan.id}
                variants={fadeInUp}
                initial="rest"
                whileHover="hover"
                animate="rest"
                variants={cardHover}
                onMouseEnter={() => setHoveredPlan(plan.id)}
                onMouseLeave={() => setHoveredPlan(null)}
                className={`relative rounded-2xl overflow-hidden border ${
                  plan.popular 
                    ? 'border-cyan-500/50 scale-105' 
                    : 'border-gray-700 hover:border-cyan-500/30'
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <motion.div 
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
                  >
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs font-semibold px-4 py-2 rounded-full shadow-lg">
                      Most Popular
                    </div>
                  </motion.div>
                )}

                {/* Animated Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />
                
                {/* Shimmer Effect */}
                <AnimatePresence>
                  {hoveredPlan === plan.id && (
                    <motion.div
                      initial={{ x: "-100%" }}
                      animate={{ x: "100%" }}
                      exit={{ x: "100%" }}
                      transition={{ duration: 0.8 }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    />
                  )}
                </AnimatePresence>

                {/* Content */}
                <div className="relative z-10 p-8">
                  {/* Header */}
                  <div className="text-center mb-8">
                    <motion.div 
                      animate={hoveredPlan === plan.id ? { rotate: 360 } : { rotate: 0 }}
                      transition={{ duration: 0.6 }}
                      className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${plan.gradient} flex items-center justify-center text-white text-3xl shadow-xl`}
                    >
                      {plan.icon}
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 text-sm">{plan.description}</p>
                  </div>

                  {/* Price */}
                  <div className="text-center mb-8">
                    <motion.div 
                      key={activeTab}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ type: "spring", stiffness: 200 }}
                      className="flex items-baseline justify-center space-x-2"
                    >
                      <span className="text-5xl font-bold text-white">
                        ${activeTab === "monthly" ? plan.price.monthly : plan.price.yearly}
                      </span>
                      <span className="text-gray-400">
                        /{activeTab === "monthly" ? "month" : "year"}
                      </span>
                    </motion.div>
                  </div>

                  {/* Features */}
                  <div className="mb-8">
                    <ul className="space-y-3">
                      {plan.features.map((feature, index) => (
                        <motion.li 
                          key={index}
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: index * 0.05 }}
                          className="flex items-start space-x-3"
                        >
                          <motion.div 
                            whileHover={{ scale: 1.2 }}
                            className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                          >
                            <svg className="w-3 h-3 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </motion.div>
                          <span className="text-gray-300 text-sm leading-relaxed">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to={plan.link}
                      className={`block w-full text-center py-4 px-6 rounded-xl font-semibold transition-all duration-300 ${
                        plan.popular
                          ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg hover:shadow-xl"
                          : "bg-white/10 text-white backdrop-blur-sm border border-white/20 hover:bg-white/20"
                      }`}
                    >
                      {plan.cta}
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Custom Solution Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-2xl p-8 md:p-12 text-center mb-20"
          >
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 via-blue-600/20 to-purple-600/20" />
            
            {/* Animated Particles */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -100, 0],
                    x: [0, 50 * Math.sin(i), 0],
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 6 + i * 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 1.5
                  }}
                  className="absolute w-32 h-32 bg-cyan-500/10 rounded-full blur-xl"
                  style={{
                    left: `${10 + i * 30}%`,
                    top: `${20 + i * 20}%`,
                  }}
                />
              ))}
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Need a Custom Solution?
              </h2>
              <p className="text-cyan-100 text-lg mb-8 max-w-2xl mx-auto">
                Our enterprise team can build a tailored SCM solution for your specific 
                business needs with custom integrations and dedicated support.
              </p>
              
              <form onSubmit={handleContactSubmit} className="max-w-md mx-auto">
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="mb-4"
                >
                  <input
                    type="email"
                    placeholder="Enter your work email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isLoading}
                    className="w-full px-6 py-4 rounded-xl border border-cyan-300/50 bg-white/10 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 text-white placeholder-cyan-200 disabled:opacity-50"
                  />
                </motion.div>
                
                <motion.button
                  type="submit"
                  disabled={isLoading}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center space-x-3">
                      <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Contacting...</span>
                    </div>
                  ) : (
                    "Contact Enterprise Team"
                  )}
                </motion.button>
              </form>
              
              <AnimatePresence mode="wait">
                {message.text && (
                  <motion.p
                    key={message.type}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={`mt-4 text-lg font-medium ${
                      message.type === 'success' ? 'text-green-300' : 'text-red-300'
                    }`}
                  >
                    {message.text}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* FAQ & Features Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* FAQ */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl font-bold text-white mb-8">
                Frequently Asked Questions
              </h3>
              <div className="space-y-4">
                {faqItems.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-500/30 transition-all duration-300 cursor-pointer"
                  >
                    <h4 className="font-semibold text-white text-lg mb-3">
                      {faq.question}
                    </h4>
                    <p className="text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl font-bold text-white mb-8">
                Why Choose Our SCM Platform?
              </h3>
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-start space-x-6 bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-500/30 transition-all duration-300"
                  >
                    <motion.div 
                      animate={{ 
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        repeatDelay: 3 
                      }}
                      className="text-4xl flex-shrink-0"
                    >
                      {feature.icon}
                    </motion.div>
                    <div>
                      <h4 className="font-semibold text-white text-lg mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-gray-300 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Latest;