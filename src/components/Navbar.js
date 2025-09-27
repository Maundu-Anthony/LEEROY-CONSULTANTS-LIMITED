import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Financial Marketing', path: '/services/financial-marketing' },
    { label: 'Corporate Training', path: '/services/corporate-training' },
    { label: 'Mental Wellness', path: '/services/mental-wellness' },
    { label: 'Dispute Resolution', path: '/services/dispute-resolution' },
    { label: 'Contact Us', path: '/contact' }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-gray-800 text-white p-5 shadow-md fixed top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold hover:text-secondary">
          LEEROY CONSULTANTS
        </Link>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-4 font-semibold">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`hover:text-secondary transition-colors px-3 py-2 rounded ${
                  location.pathname === item.path 
                    ? 'text-yellow-400 border-b-2 border-yellow-400' 
                    : ''
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1 focus:outline-none"
        >
          <div className={`h-0.5 w-6 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
          <div className={`h-0.5 w-6 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
          <div className={`h-0.5 w-6 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${
        isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <ul className="bg-gray-800 border-t border-gray-700 mt-5 py-4 space-y-2">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                onClick={closeMenu}
                className={`block px-4 py-3 hover:bg-gray-700 hover:text-secondary transition-colors ${
                  location.pathname === item.path 
                    ? 'text-yellow-400 bg-gray-700 border-l-4 border-yellow-400' 
                    : ''
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;