import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Latest() {
  const [activeTab, setActiveTab] = useState("monthly");
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage({ type: '', text: '' });

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setMessage({ type: 'success', text: 'Thank you! Our team will contact you shortly.' });
      setEmail('');
    } catch (error) {
      setMessage({ type: 'error', text: 'Submission failed. Please try again.' });
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
      color: "from-blue-500 to-cyan-500",
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
      link: "/signup"
    },
    {
      id: 2,
      name: "Professional",
      description: "Advanced features for growing supply chains",
      price: { monthly: 799, yearly: 7990 },
      popular: true,
      color: "from-purple-500 to-pink-500",
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
      link: "/signup"
    },
    {
      id: 3,
      name: "Enterprise",
      description: "Complete SCM solution for large organizations",
      price: { monthly: 1499, yearly: 14990 },
      popular: false,
      color: "from-orange-500 to-amber-500",
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
      link: "/contact"
    }
  ];

  const featuresComparison = [
    {
      feature: "Real-time Shipment Tracking",
      starter: "✓ (100/month)",
      professional: "✓ Unlimited",
      enterprise: "✓ Unlimited"
    },
    {
      feature: "Inventory Management",
      starter: "Basic",
      professional: "Advanced",
      enterprise: "Advanced + AI"
    },
    {
      feature: "AI Demand Forecasting",
      starter: "✗",
      professional: "✓",
      enterprise: "✓ Custom Models"
    },
    {
      feature: "User Accounts",
      starter: "2",
      professional: "10",
      enterprise: "Unlimited"
    },
    {
      feature: "API Access",
      starter: "Limited",
      professional: "Full",
      enterprise: "Full + Custom"
    },
    {
      feature: "Support",
      starter: "Email",
      professional: "Priority",
      enterprise: "24/7 Dedicated"
    },
    {
      feature: "Analytics Dashboard",
      starter: "Basic",
      professional: "Advanced",
      enterprise: "Enterprise"
    },
    {
      feature: "Warehouse Management",
      starter: "✗",
      professional: "✓ Single",
      enterprise: "✓ Multi-location"
    },
    {
      feature: "Supplier Network",
      starter: "✗",
      professional: "✓ Basic",
      enterprise: "✓ Advanced"
    },
    {
      feature: "Custom Integrations",
      starter: "✗",
      professional: "Limited",
      enterprise: "✓ Full"
    }
  ];

  const savings = {
    yearly: 17
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 py-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden pt-20">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float-slow opacity-20"
            style={{
              width: `${Math.random() * 100 + 30}px`,
              height: `${Math.random() * 100 + 30}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `linear-gradient(45deg, ${
                ['#10B981', '#3B82F6', '#8B5CF6', '#EC4899', '#F59E0B', '#84CC16', '#06B6D4', '#EF4444'][i % 8]
              }, ${
                ['#059669', '#2563EB', '#7C3AED', '#DB2777', '#D97706', '#65A30D', '#0891B2', '#DC2626'][(i + 4) % 8]
              })`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${Math.random() * 20 + 15}s`,
              filter: 'blur(15px)'
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section - Perfectly Centered */}
        <div className={`text-center mt-8 mb-16 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent leading-tight">
            Supply Chain Management Plans
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            Choose the perfect plan to optimize your supply chain operations, reduce costs, and improve efficiency with AI-powered solutions.
          </p>
          
          {/* Billing Toggle - Perfectly Centered */}
          <div className="flex justify-center items-center mb-16">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-xl p-2 border border-white/20">
              <button
                onClick={() => setActiveTab("monthly")}
                className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === "monthly"
                    ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                Monthly Billing
              </button>
              <button
                onClick={() => setActiveTab("yearly")}
                className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 relative ${
                  activeTab === "yearly"
                    ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                Yearly Billing
                <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                  Save {savings.yearly}%
                </span>
              </button>
            </div>
          </div>

          {/* Stats - Perfect Grid Alignment */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto mb-4">
            {[
              { number: "99.5%", label: "Uptime SLA", color: "from-green-500 to-emerald-500" },
              { number: "24/7", label: "Support", color: "from-blue-500 to-cyan-500" },
              { number: "50K+", label: "Shipments Tracked", color: "from-purple-500 to-pink-500" },
              { number: "40%", label: "Cost Reduction", color: "from-orange-500 to-amber-500" }
            ].map((stat, index) => (
              <div 
                key={index}
                className="text-center group cursor-pointer transform hover:scale-105 transition-all duration-500"
              >
                <div className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300 mb-2`}>
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Cards - Perfect Alignment */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 items-stretch">
          {pricingPlans.map((plan, index) => (
            <div
              key={plan.id}
              className={`group relative overflow-hidden rounded-2xl backdrop-blur-sm border transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl flex flex-col h-full ${
                plan.popular 
                  ? "border-cyan-500/50 md:scale-105 scale-100" 
                  : "border-white/20 hover:border-cyan-500/30"
              }`}
              style={{
                animationDelay: `${index * 200}ms`
              }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                  
                </div>
              )}

              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${plan.color} opacity-10 group-hover:opacity-15 transition-opacity duration-500`}></div>
              
              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              <div className="relative z-10 p-8 flex flex-col flex-grow">
                {/* Plan Header - Perfectly Centered */}
                <div className="text-center mb-8">
                  <div className={`w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${plan.color} flex items-center justify-center text-white text-3xl shadow-lg`}>
                    {plan.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{plan.name}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{plan.description}</p>
                </div>

                {/* Price - Perfectly Centered */}
                <div className="text-center mb-8">
                  <div className="flex items-baseline justify-center space-x-2">
                    <span className="text-5xl font-bold text-white">
                      ${activeTab === "monthly" ? plan.price.monthly : plan.price.yearly}
                    </span>
                    <span className="text-gray-400 text-lg">
                      /{activeTab === "monthly" ? "month" : "year"}
                    </span>
                  </div>
                  {activeTab === "yearly" && (
                    <p className="text-green-400 text-sm mt-3 font-medium">
                      Save ${(plan.price.monthly * 12 - plan.price.yearly).toLocaleString()} annually
                    </p>
                  )}
                </div>

                {/* Features - Perfect Alignment */}
                <div className="flex-grow mb-8">
                  <ul className="space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <span className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3 h-3 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </span>
                        <span className="text-gray-300 text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button - Perfectly Centered */}
                <div className="mt-auto">
                  <Link 
                    to={plan.link}
                    className={`block w-full text-center py-4 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                      plan.popular
                        ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600 shadow-lg hover:shadow-xl"
                        : "bg-white/10 text-white backdrop-blur-sm border border-white/20 hover:bg-white/20"
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Features Comparison Table - Perfect Alignment */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Compare All Features</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Detailed comparison of all features across our Supply Chain Management plans
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/20 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
              {/* Header Row */}
              <div className="p-6 border-b border-white/10 bg-white/5">
                <h3 className="font-semibold text-white text-lg">Features</h3>
              </div>
              {pricingPlans.map((plan) => (
                <div key={plan.id} className={`p-6 border-b border-white/10 text-center ${
                  plan.popular ? "bg-cyan-500/10" : "bg-white/5"
                }`}>
                  <h3 className="font-bold text-white text-lg">{plan.name}</h3>
                </div>
              ))}

              {/* Feature Rows */}
              {featuresComparison.map((feature, index) => (
                <React.Fragment key={index}>
                  <div className="p-5 border-b border-white/5 flex items-center">
                    <span className="text-gray-300 text-sm font-medium">{feature.feature}</span>
                  </div>
                  {pricingPlans.map((plan, planIndex) => (
                    <div key={planIndex} className={`p-5 border-b border-white/5 text-center flex items-center justify-center ${
                      plan.popular ? "bg-cyan-500/5" : ""
                    }`}>
                      <span className={`text-sm font-medium ${
                        feature[plan.name.toLowerCase()].startsWith('✓') 
                          ? 'text-green-400' 
                          : feature[plan.name.toLowerCase()].startsWith('✗')
                          ? 'text-red-400'
                          : 'text-gray-300'
                      }`}>
                        {feature[plan.name.toLowerCase()]}
                      </span>
                    </div>
                  ))}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* Custom Enterprise Solution - Perfect Centering */}
        <div className={`relative overflow-hidden rounded-2xl p-8 md:p-12 text-center text-white mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/30 via-blue-600/30 to-purple-600/30"></div>
          
          <div className="absolute inset-0">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full animate-pulse-slow opacity-20"
                style={{
                  width: `${100 + i * 50}px`,
                  height: `${100 + i * 50}px`,
                  left: `${20 + i * 20}%`,
                  top: `${30 + i * 10}%`,
                  background: `radial-gradient(circle, cyan, transparent)`,
                  animationDelay: `${i * 2}s`
                }}
              />
            ))}
          </div>

          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Need a Custom Solution?</h2>
            <p className="text-cyan-100 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Our enterprise team can build a tailored SCM solution for your specific business needs with custom integrations and dedicated support.
            </p>
            <form onSubmit={handleContactSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your work email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading}
                className="flex-1 px-4 py-4 rounded-xl border border-cyan-300/50 bg-white/10 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white placeholder-cyan-200 disabled:opacity-50 text-base"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none backdrop-blur-sm text-base whitespace-nowrap"
              >
                {isLoading ? (
                  <div className="flex items-center space-x-2 justify-center">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Contacting...</span>
                  </div>
                ) : (
                  "Contact Enterprise Team"
                )}
              </button>
            </form>
            {message.text && (
              <p className={`mt-4 text-base font-medium ${
                message.type === 'success' ? 'text-green-300' : 'text-red-300'
              }`}>
                {message.text}
              </p>
            )}
          </div>
        </div>

        {/* FAQ Section - Perfect Grid Alignment */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center lg:text-left">Frequently Asked Questions</h3>
            <div className="space-y-6">
              {[
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
              ].map((faq, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-500/30 transition-all duration-300">
                  <h4 className="font-semibold text-white text-lg mb-3">{faq.question}</h4>
                  <p className="text-gray-300 text-base leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center lg:text-left">Why Choose Our SCM Platform?</h3>
            <div className="space-y-6">
              {[
                {
                  icon: "🚀",
                  title: "AI-Powered Optimization",
                  description: "Reduce costs by up to 40% with intelligent route and inventory optimization"
                },
                {
                  icon: "🔒",
                  title: "Enterprise Security",
                  description: "Bank-level security with 99.9% uptime SLA and data encryption"
                },
                {
                  icon: "🌐",
                  title: "Global Support",
                  description: "24/7 support with dedicated account managers for enterprise clients"
                }
              ].map((feature, index) => (
                <div key={index} className="flex items-start space-x-6 bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-500/30 transition-all duration-300">
                  <div className="text-3xl flex-shrink-0">{feature.icon}</div>
                  <div>
                    <h4 className="font-semibold text-white text-lg mb-2">{feature.title}</h4>
                    <p className="text-gray-300 text-base leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
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
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes floatSlow {
          0%, 100% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-20px) translateX(10px) rotate(120deg);
          }
          66% {
            transform: translateY(10px) translateX(-10px) rotate(240deg);
          }
        }
        @keyframes pulseSlow {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.05);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
        .animate-float-slow {
          animation: floatSlow 25s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulseSlow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

export default Latest;