
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:text-right md:pr-14">
                  <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        to="/why-us"
                        className="text-gray-300 hover:text-white transition-colors"
                      >
                        Why Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products"
                        className="text-gray-300 hover:text-white transition-colors"
                      >
                        Products
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/success-stories"
                        className="text-gray-300 hover:text-white transition-colors"
                      >
                        Success Stories
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/activities"
                        className="text-gray-300 hover:text-white transition-colors"
                      >
                        Activities
                      </Link>
                    </li>
                  </ul>
                </div>
    
                <div className="text-center">
                  <img
                    src="LOGO-RN.png"
                    alt="Regain Life Nutrition Centre Logo"
                    className="h-36 w-auto mb-4 mx-auto"
                  />
                  <p className="text-gray-300 font-semibold">
                    Regain Life Nutrition Centre
                  </p>
                </div>
                <div className="pl-14">
                  <h3 className="text-lg font-semibold mb-4">Support</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        to="/contact"
                        className="text-gray-300 hover:text-white transition-colors"
                      >
                        Contact Us
                      </Link>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-300 hover:text-white transition-colors"
                      >
                        FAQ
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-300 hover:text-white transition-colors"
                      >
                        Shipping Info
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-300 hover:text-white transition-colors"
                      >
                        Returns
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
                <p>
                  &copy; 2024 Regain Life Nutrition Centre. All rights reserved.
                </p>
              </div>
            </div>
          </footer>
  );
};

export default Footer;
