import React from 'react';
import { Link } from 'react-router-dom';
import homeImage from '../assets/home.jpg';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 via-white to-blue-50">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-screen pt-20"
        style={{ backgroundImage: `url(${homeImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative container mx-auto flex flex-col items-center justify-center h-full text-white text-center">
          <h1 className="text-5xl font-extrabold leading-tight mb-4">LEEROY CONSULTANTS</h1>
          <p className="text-lg text-white mb-8">Professional Consulting Services</p>
          <Link to="/about" className="bg-secondary text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors">
            Learn More
          </Link>
        </div>
      </section>

      {/* Services Overview */}
      <section className="container mx-auto p-8 mt-16">
        <h2 className="text-4xl font-bold text-primary mb-8 text-center">Our Core Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <Link to="/services/financial-marketing" className="group">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group-hover:transform group-hover:scale-105">
              <h3 className="text-xl font-semibold text-secondary mb-3">Financial Marketing & Resource Mobilization</h3>
              <p className="text-gray-600">Comprehensive funding solutions, investment strategies, and financial literacy programs.</p>
              <div className="mt-4 text-primary font-semibold group-hover:text-secondary">Learn More →</div>
            </div>
          </Link>

          <Link to="/services/corporate-training" className="group">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group-hover:transform group-hover:scale-105">
              <h3 className="text-xl font-semibold text-secondary mb-3">Corporate Training Consultancy</h3>
              <p className="text-gray-600">AI-integrated leadership training, digital banking, and modern business solutions.</p>
              <div className="mt-4 text-primary font-semibold group-hover:text-secondary">Learn More →</div>
            </div>
          </Link>

          <Link to="/services/mental-wellness" className="group">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group-hover:transform group-hover:scale-105">
              <h3 className="text-xl font-semibold text-secondary mb-3">Mental Wellness Clinic</h3>
              <p className="text-gray-600">Professional counseling, therapy, and mental health support services.</p>
              <div className="mt-4 text-primary font-semibold group-hover:text-secondary">Learn More →</div>
            </div>
          </Link>

          <Link to="/services/dispute-resolution" className="group">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group-hover:transform group-hover:scale-105">
              <h3 className="text-xl font-semibold text-secondary mb-3">Alternative Dispute Resolution</h3>
              <p className="text-gray-600">Mediation services for commercial, family, and land disputes.</p>
              <div className="mt-4 text-primary font-semibold group-hover:text-secondary">Learn More →</div>
            </div>
          </Link>
          
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-800 text-white py-16 mt-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-lg mb-8">Get professional consulting services tailored to your needs.</p>
          <div className="space-x-4">
            <Link to="/contact" className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors">
              Contact Us
            </Link>
            <Link to="/about" className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-gray-800 transition-colors">
              About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;