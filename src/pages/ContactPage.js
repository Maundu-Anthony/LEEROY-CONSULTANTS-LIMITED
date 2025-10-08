import React from 'react';
import { FaPhone, FaEnvelope, FaWhatsapp, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 via-white to-blue-50 pt-24">
      <div className="container mx-auto p-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">Contact Us</h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Ready to transform your business or need professional consultation? 
            Get in touch with us today and let's discuss how we can help you achieve your goals.
          </p>
        </div>

        {/* Main Contact Section */}
        <div className="bg-white p-12 rounded-lg shadow-lg max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Left Column - Contact Methods */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-8">Get In Touch</h2>
              
              <div className="space-y-8">
                <div className="flex items-center p-4 bg-blue-50 rounded-lg">
                  <FaPhone className="text-primary text-3xl mr-6 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-800 text-lg">Phone Numbers</div>
                    <div className="text-gray-600 text-lg">+254 722709200</div>
                    <div className="text-gray-600 text-lg">+254 785762888</div>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-green-50 rounded-lg">
                  <FaWhatsapp className="text-green-500 text-3xl mr-6 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-800 text-lg">WhatsApp</div>
                    <a 
                      href="https://wa.me/254722709200" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-blue-600 hover:underline text-lg font-medium"
                    >
                      +254 722709200 (Click to chat)
                    </a>
                  </div>
                </div>

                <div className="flex items-start p-4 bg-purple-50 rounded-lg">
                  <FaEnvelope className="text-primary text-3xl mr-6 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-gray-800 mb-2 text-lg">Email Addresses</div>
                    <div className="space-y-2">
                      <a href="mailto:roymully@gmail.com" className="text-blue-600 hover:underline block text-lg">
                        roymully@gmail.com
                      </a>
                      <a href="mailto:roymuli@yahoo.com" className="text-blue-600 hover:underline block text-lg">
                        roymuli@yahoo.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Business Info */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-8">Business Information</h2>
              
              <div className="space-y-8">
                <div className="p-4 bg-yellow-50 rounded-lg">
                  <div className="flex items-start">
                    <FaClock className="text-primary text-3xl mr-6 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-gray-800 mb-3 text-lg">Business Hours</div>
                      <div className="text-gray-700 space-y-2">
                        <div className="flex justify-between">
                          <span className="font-medium">Monday - Friday:</span>
                          <span>8:00 AM - 6:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium">Saturday:</span>
                          <span>9:00 AM - 4:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium">Sunday:</span>
                          <span>By Appointment Only</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-start">
                    <FaMapMarkerAlt className="text-primary text-3xl mr-6 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-gray-800 mb-2 text-lg">Office Location</div>
                      <div className="text-gray-700">
                        <div className="text-lg font-medium">Nairobi, Kenya</div>
                        <div className="text-sm text-gray-600 mt-1">Exact address available upon request</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-blue-100 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-3 text-lg">Why Choose Us?</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Professional & Confidential Service</li>
                    <li>• Experienced & Certified Consultants</li>
                    <li>• Flexible Scheduling Options</li>
                    <li>• Comprehensive Service Portfolio</li>
                    <li>• Personalized Solutions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action Section */}
          <div className="mt-12 text-center bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-primary mb-4">Ready to Get Started?</h3>
            <p className="text-gray-700 mb-6 text-lg">
              Contact us today to discuss your needs and discover how our professional consulting services 
              can help you achieve your goals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="tel:+254722709200" 
                className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors font-semibold"
              >
                Call Now
              </a>
              <a 
                href="https://wa.me/254722709200" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors font-semibold"
              >
                WhatsApp Us
              </a>
              <a 
                href="mailto:roymully@gmail.com" 
                className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors font-semibold"
              >
                Send Email
              </a>
            </div>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-8 bg-red-50 border border-red-200 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-red-800 mb-2">Emergency Mental Health Support</h3>
          <p className="text-red-700">
            If you're experiencing a mental health crisis, please don't wait. Contact us immediately at 
            <a href="tel:+254722709200/ +254 785762888" className="font-semibold underline ml-1">+254 722709200</a> 
            or reach out to local emergency services.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
