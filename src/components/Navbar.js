import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Financial Marketing', path: '/services/financial-marketing' },
    { label: 'Corporate Training', path: '/services/corporate-training' },
    { label: 'Mental Wellness', path: '/services/mental-wellness' },
    { label: 'Dispute Resolution', path: '/services/dispute-resolution' },
    { label: 'Contact', path: '/contact' }
  ];

  return (
    <nav className="bg-gray-800 text-white p-5 shadow-md fixed top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold hover:text-secondary">
          LEEROY CONSULTANTS
        </Link>
        <ul className="flex space-x-4 font-semibold">
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
      </div>
    </nav>
  );
};

export default Navbar;