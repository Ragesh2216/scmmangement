import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    rememberMe: false,
    agreeToTerms: false
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      navigate('/404');
    }, 2000);
  };

  const toggleAuthMode = () => {
    setIsVisible(false);
    setTimeout(() => {
      setIsLogin(!isLogin);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        rememberMe: false,
        agreeToTerms: false
      });
      setIsVisible(true);
    }, 300);
  };

  return (
    <div className="min-h-screen mt-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-3 overflow-x-hidden">
      <div className="w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
          {/* Left Side - SCM Illustration & Info - Hidden on very small screens */}
          <div className={`hidden lg:block text-center lg:text-left transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="mb-6">
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent mb-3">
                {isLogin ? "Welcome Back" : "Join Our SCM"}
              </h1>
              <p className="text-base text-gray-300 max-w-md mx-auto lg:mx-0">
                {isLogin 
                  ? "Sign in to access your supply chain dashboard."
                  : "Create your account and optimize operations."
                }
              </p>
            </div>

            {/* SCM Features List */}
            <div className="space-y-3 max-w-md mx-auto lg:mx-0">
              {[
                { icon: "🚚", text: "Real-time tracking", color: "from-green-500 to-emerald-500" },
                { icon: "📊", text: "Inventory analytics", color: "from-blue-500 to-cyan-500" },
                { icon: "🔗", text: "Supplier network", color: "from-teal-500 to-green-500" },
                { icon: "⚡", text: "Automated processing", color: "from-indigo-500 to-purple-500" }
              ].map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 p-3 bg-gray-800 rounded-lg hover:shadow-md transition-all duration-300 group border border-gray-700"
                >
                  <div className={`w-8 h-8 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center text-white text-base group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <span className="text-gray-300 text-sm group-hover:text-white transition-colors duration-300">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            {/* SCM Stats */}
            <div className="mt-8 grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
              {[
                { number: "5K+", label: "Suppliers" },
                { number: "98%", label: "On-time" },
                { number: "24/7", label: "Logistics" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-lg font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Auth Form */}
          <div className={`bg-gray-800 mt-16 rounded-xl lg:rounded-2xl shadow-lg p-4 lg:p-8 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'} border border-gray-700`}>
            {/* Form Header */}
            <div className="text-center mt-16 mb-4">
              <div className="w-14 h-14 lg:w-20 lg:h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl lg:text-2xl text-white">
                  {isLogin ? "📦" : "🌐"}
                </span>
              </div>
              <h2 className="text-xl lg:text-3xl font-bold text-white mb-1">
                {isLogin ? "Sign In" : "Create Account"}
              </h2>
              <p className="text-gray-400 text-sm">
                {isLogin 
                  ? "Enter credentials to access dashboard"
                  : "Register to connect with our network"
                }
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Fields - Only for Signup */}
              {!isLogin && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 animate-fade-in-up">
                  <div>
                    <label htmlFor="firstName" className="block text-xs font-medium text-gray-300 mb-1">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required={!isLogin}
                      className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-1 focus:ring-green-500 focus:border-green-500 transition-all duration-300 text-sm placeholder-gray-400"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-xs font-medium text-gray-300 mb-1">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required={!isLogin}
                      className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-1 focus:ring-green-500 focus:border-green-500 transition-all duration-300 text-sm placeholder-gray-400"
                      placeholder="Doe"
                    />
                  </div>
                </div>
              )}

              {/* Email Field */}
              <div className="animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                <label htmlFor="email" className="block text-xs font-medium text-gray-300 mb-1">
                  Business Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-1 focus:ring-green-500 focus:border-green-500 transition-all duration-300 text-sm placeholder-gray-400"
                  placeholder="email@company.com"
                />
              </div>

              {/* Password Field */}
              <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                <label htmlFor="password" className="block text-xs font-medium text-gray-300 mb-1">
                  Password *
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-1 focus:ring-green-500 focus:border-green-500 transition-all duration-300 text-sm placeholder-gray-400"
                  placeholder="••••••••"
                />
              </div>

              {/* Confirm Password - Only for Signup */}
              {!isLogin && (
                <div className="animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                  <label htmlFor="confirmPassword" className="block text-xs font-medium text-gray-300 mb-1">
                    Confirm Password *
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    required={!isLogin}
                    className={`w-full px-3 py-2 bg-gray-700 border text-white rounded-lg focus:ring-1 focus:ring-green-500 focus:border-green-500 transition-all duration-300 text-sm placeholder-gray-400 ${
                      formData.confirmPassword && formData.password !== formData.confirmPassword
                        ? 'border-red-500'
                        : 'border-gray-600'
                    }`}
                    placeholder="••••••••"
                  />
                  {/* Error message */}
                  {formData.confirmPassword && formData.password !== formData.confirmPassword && (
                    <p className="text-red-400 text-xs mt-1 flex items-center">
                      <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      Passwords don't match
                    </p>
                  )}
                </div>
              )}

              {/* Checkboxes */}
              <div className="space-y-2 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                {isLogin ? (
                  <div className="text-right">
                    <Link to="/404" className="text-xs text-green-400 hover:text-green-300 transition-colors duration-300">
                      Forgot password?
                    </Link>
                  </div>
                ) : (
                  <label className="flex items-start">
                    <input
                      type="checkbox"
                      name="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onChange={handleInputChange}
                      required
                      className="w-3 h-3 text-green-500 bg-gray-700 border-gray-600 rounded focus:ring-green-500 mt-0.5 flex-shrink-0"
                    />
                    <span className="ml-2 text-xs text-gray-300">
                      I agree to{" "}
                      <Link to="/404" className="text-green-400 hover:text-green-300 transition-colors duration-300">
                        Terms
                      </Link>
                      {" "}and{" "}
                      <Link to="/404" className="text-green-400 hover:text-green-300 transition-colors duration-300">
                        Policy
                      </Link>
                    </span>
                  </label>
                )}
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                disabled={isLoading}
                className={`w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white py-2 lg:py-3 px-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center animate-fade-in-up text-sm ${
                  isLoading ? 'animate-pulse' : ''
                }`}
                style={{ animationDelay: '500ms' }}
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-3 w-3 lg:h-4 lg:w-4 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {isLogin ? "Accessing..." : "Joining..."}
                  </>
                ) : (
                  isLogin ? "Access Portal" : "Join Network"
                )}
              </button>

              {/* Divider */}
              <div className="relative animate-fade-in-up" style={{ animationDelay: '600ms' }}>
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-600"></div>
                </div>
                <div className="relative flex justify-center text-xs">
                  <span className="px-2 bg-gray-800 text-gray-400">Or continue with</span>
                </div>
              </div>

              {/* Social Login */}
              <div className="grid grid-cols-2 gap-2 animate-fade-in-up" style={{ animationDelay: '700ms' }}>
                <button
                  type="button"
                  onClick={() => navigate('/404')}
                  className="w-full bg-gray-700 border border-gray-600 text-gray-300 py-1.5 lg:py-2 px-2 rounded-lg font-medium hover:bg-gray-600 transition-all duration-300 flex items-center justify-center gap-1 text-xs"
                >
                  <svg className="w-3 h-3 lg:w-4 lg:h-4" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  </svg>
                  Google
                </button>
                <button
                  type="button"
                  onClick={() => navigate('/404')}
                  className="w-full bg-gray-700 border border-gray-600 text-gray-300 py-1.5 lg:py-2 px-2 rounded-lg font-medium hover:bg-gray-600 transition-all duration-300 flex items-center justify-center gap-1 text-xs"
                >
                  <svg className="w-3 h-3 lg:w-4 lg:h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                  Twitter
                </button>
              </div>

              {/* Switch Auth Mode */}
              <div className="text-center animate-fade-in-up" style={{ animationDelay: '800ms' }}>
                <p className="text-gray-400 text-xs">
                  {isLogin ? "New to supply chain? " : "Already part? "}
                  <button
                    type="button"
                    onClick={toggleAuthMode}
                    className="text-green-400 hover:text-green-300 font-semibold transition-colors duration-300 text-xs"
                  >
                    {isLogin ? "Join network" : "Sign in"}
                  </button>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Background Animation */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float opacity-10"
            style={{
              width: `${Math.random() * 8 + 3}px`,
              height: `${Math.random() * 8 + 3}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: ['#10B981', '#3B82F6', '#06B6D4', '#059669'][i % 4],
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${Math.random() * 15 + 8}s`
            }}
          />
        ))}
      </div>

      <style jsx global>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          33% {
            transform: translateY(-15px) translateX(8px);
          }
          66% {
            transform: translateY(8px) translateX(-8px);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }
        .animate-float {
          animation: float 12s ease-in-out infinite;
        }
        
        /* 320px specific fixes */
        @media (max-width: 320px) {
          .text-xl {
            font-size: 1.125rem !important;
          }
          .text-sm {
            font-size: 0.75rem !important;
          }
          .text-xs {
            font-size: 0.65rem !important;
          }
          .p-4 {
            padding: 0.75rem !important;
          }
          .px-3 {
            padding-left: 0.5rem !important;
            padding-right: 0.5rem !important;
          }
          .py-2 {
            padding-top: 0.375rem !important;
            padding-bottom: 0.375rem !important;
          }
          input, select, button {
            font-size: 0.75rem !important;
            min-height: 36px !important;
          }
        }
        
        /* Better touch targets */
        @media (max-width: 768px) {
          input, select, button {
            min-height: 38px;
          }
        }
      `}</style>
    </div>
  );
}