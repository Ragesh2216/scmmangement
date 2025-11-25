import React from "react";
import logo from "../images/logo.png";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
 
  
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 pb-8 border-b border-gray-700">
        
        {/* Company Info */}
<div className="lg:col-span-1 text-center md:text-left">
  <div className="flex justify-center md:justify-start">
    <h1 className="text-4xl lg:text-5xl font-bold text-blue-500 mb-4">Stackly</h1>
  </div>
  <p className="text-sm text-gray-400 leading-relaxed mb-4">
    Your trusted partner for end-to-end supply chain solutions. We deliver cutting-edge logistics, inventory management, supplier network integration, and supply chain optimization services.
  </p>

          <div className="flex justify-center md:justify-start space-x-4">
            {[
              { icon: <TwitterIcon className="hover:text-green-400 transition-colors duration-200" />, url: "/404" },
              { icon: <LinkedInIcon className="hover:text-yellow-600 transition-colors duration-200" />, url: "/404" },
              { icon: <GitHubIcon className="hover:text-red-800 transition-colors duration-200" />, url: "/404" },
              { icon: <InstagramIcon className="hover:text-green-500 transition-colors duration-200" />, url: "/404" }
            ].map((social, index) => (
              <a
                key={index}
                href={social.url}
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors duration-200"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* SCM Services */}
        <div className="lg:col-span-1 text-center md:text-left">
          <h5 className="text-white text-lg font-semibold mb-6">SCM Services</h5>
          <ul className="space-y-3">
            {[
              { label: "Logistics Management", url: "/logi" },
              { label: "Inventory Optimization", url: "/inst" },
              { label: "Supplier Network", url: "/supply" },
              { label: "Warehouse Management", url: "/warehouse" },
             
            ].map((service, index) => (
              <li key={index}>
                <a 
                  href={service.url} 
                  className="text-gray-400 hover:text-green-400 transition-colors duration-200 text-sm font-normal block py-1"
                >
                  {service.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Quick Links */}
        <div className="lg:col-span-1 text-center md:text-left">
          <h5 className="text-white text-lg font-semibold mb-6">Quick Links</h5>
          <ul className="space-y-3">
            {[
              { label: "Home", url: "/" },
              { label: "About Us", url: "/about" },
              { label: "Service", url: "/services" },
              { label: "Contact Us", url: "/contact" },
              { label: "Login", url: "/login" }
            ].map((link, index) => (
              <li key={index}>
                <a 
                  href={link.url} 
                  className="text-gray-400 hover:text-green-400 transition-colors duration-200 text-sm font-normal block py-1"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="lg:col-span-1 text-center md:text-left">
          <h5 className="text-white text-lg font-semibold mb-6">Get In Touch</h5>
          <div className="space-y-4">
            <div className="flex flex-col items-center md:items-start md:flex-row md:space-x-3">
              <LocationOnIcon className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0 mb-2 md:mb-0" />
              <div className="text-center md:text-left">
                <p className="text-sm text-gray-300 font-medium">Logistics Hub</p>
                <p className="text-sm text-gray-400">MMR Complex</p>
                <p className="text-sm text-gray-400">Salem, Tamil Nadu</p>
                <p className="text-sm text-gray-400">India - 636008</p>
              </div>
            </div>
            
            <div className="flex justify-center md:justify-start">
              <a
                href="https://www.google.com/maps/search/?api=1&query=MMR+COMPLEX,+Salem,+Tamil+Nadu+636008"
                target="_blank"
                rel="noreferrer"
                className="text-green-400 hover:text-green-300 underline text-sm"
              >
                View on Google Maps
              </a>
            </div>
            
            <div className="flex justify-center md:justify-start items-center space-x-3">
              <PhoneIcon className="w-5 h-5 text-green-400 flex-shrink-0" />
              <a href="tel:+911234567890" className="text-sm text-gray-400 hover:text-green-400 transition-colors duration-200">
                +91 12345 67890
              </a>
            </div>
            
            <div className="flex justify-center md:justify-start items-center space-x-3">
              <EmailIcon className="w-5 h-5 text-green-400 flex-shrink-0" />
              <a href="mailto:info@supplychainpro.com" className="text-sm text-gray-400 hover:text-green-400 transition-colors duration-200">
                info@supplychainpro.com
              </a>
            </div>
          </div>

         
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-sm text-gray-400">
              &copy; {currentYear} SupplyChain Pro. All rights reserved.
            </p>
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
            {[
              { label: "Privacy Policy", url: "/404" },
              { label: "Terms of Service", url: "/404" },
              { label: "Supply Chain Policy", url: "/404" },
              { label: "Sitemap", url: "/404" }
            ].map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="text-gray-400 hover:text-green-400 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-6 pt-6 border-t border-gray-800 text-center">
          <p className="text-xs text-gray-500">
            SupplyChain Pro - Optimizing global supply chains through innovative logistics solutions. 
            ISO 9001:2015 Certified • Logistics Partner • Global Supply Chain Network
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;