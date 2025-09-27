import React from 'react';
import { Link } from 'react-router-dom';
import royPhoto from '../assets/roy-photo.jpg';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 via-white to-blue-50 pt-24">
      <div className="container mx-auto p-8">
        <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center">
          <img
            src={royPhoto}
            alt="Roy Muli"
            className="w-52 h-58 rounded-full object-cover mb-6 transform transition-transform duration-300 hover:scale-110"
          />
          <div className="text-center max-w-4xl">
            <h1 className="text-4xl font-bold text-primary mb-4">About Director/Founder</h1>
            <h2 className="text-2xl font-semibold text-secondary mb-6">Roy Muli</h2>
            
            <div className="text-left space-y-6">
              <p className="text-lg text-accent leading-relaxed">
                Roy Muli is a seasoned professional in Finance & Counseling Psychology. He specializes in Corporate Training, 
                Management Consultancy, Financial Marketing, Resource Mobilization, Mental Wellness, Counseling Services & 
                Alternative Dispute Resolution.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-primary mb-4">Professional Expertise</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Finance & Investment Consultancy</li>
                    <li>• Counseling Psychology</li>
                    <li>• Corporate Training & Development</li>
                    <li>• Management Consultancy</li>
                    <li>• Alternative Dispute Resolution</li>
                    <li>• Resource Mobilization</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-primary mb-4">Core Values</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Professional Excellence</li>
                    <li>• Integrity & Ethics</li>
                    <li>• Client-Centered Approach</li>
                    <li>• Continuous Innovation</li>
                    <li>• Sustainable Solutions</li>
                    <li>• Confidentiality & Trust</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-4">Our Mission</h3>
                <p className="text-gray-700 leading-relaxed">
                  To provide comprehensive consulting services that empower individuals, organizations, and communities 
                  to achieve their full potential through strategic guidance, professional development, and innovative 
                  solutions that drive sustainable growth and positive transformation.
                </p>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-4">Our Vision</h3>
                <p className="text-gray-700 leading-relaxed">
                  To be the leading consulting firm recognized for excellence in delivering transformative solutions 
                  that bridge the gap between traditional business practices and modern digital innovations, while 
                  fostering mental wellness and sustainable development across all sectors.
                </p>
              </div>
            </div>

            <div className="flex space-x-4 mt-8 justify-center">
              <Link to="/contact" className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors">
                Contact Us
              </Link>
              <Link to="/services/financial-marketing" className="bg-gray-200 text-primary px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors">
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;