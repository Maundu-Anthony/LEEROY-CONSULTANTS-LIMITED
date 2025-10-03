import React from 'react';
import { FaGlobe, FaRocket, FaUsers, FaSearch } from 'react-icons/fa';

const SocialMediaMarketingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 via-white to-blue-50 pt-24">
      <div className="container mx-auto p-8">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <div className="flex items-center mb-6">
            <FaGlobe className="text-6xl text-primary mr-6" />
            <h1 className="text-4xl font-bold text-primary">Social Media Marketing & Website Development</h1>
          </div>
          
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-8">
              Transform your digital presence with our comprehensive social media marketing and website development 
              services. We help businesses build strong online identities, engage with their target audiences, 
              and drive meaningful growth through strategic digital marketing solutions.
            </p>

            <h2 className="text-2xl font-semibold text-secondary mb-4">Our Comprehensive Digital Services:</h2>
            <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg">
              <ol className="text-gray-700 list-decimal list-outside pl-6 space-y-4 text-lg">
                <li className="flex items-start">
                  <FaGlobe className="text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <strong>Website Development & Configuration</strong>
                    <p className="text-gray-600 mt-1">Custom website design, development, and configuration tailored to your business needs with responsive design and optimal user experience.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <FaRocket className="text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <strong>Social Media Marketing</strong>
                    <p className="text-gray-600 mt-1">Strategic social media campaigns across all major platforms to increase brand awareness, engagement, and customer acquisition.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <FaUsers className="text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <strong>Content Creation</strong>
                    <p className="text-gray-600 mt-1">High-quality, engaging content creation including copywriting, graphics, videos, and multimedia content that resonates with your audience.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <FaSearch className="text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <strong>Visual Content Optimization</strong>
                    <p className="text-gray-600 mt-1">Professional optimization of visual content including images, videos, and graphics for maximum impact and engagement across digital platforms.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <FaRocket className="text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <strong>Influencer Marketing</strong>
                    <p className="text-gray-600 mt-1">Strategic partnerships with relevant influencers to expand your reach, build credibility, and connect with your target market authentically.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <FaSearch className="text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <strong>Search Engine Optimization (SEO)</strong>
                    <p className="text-gray-600 mt-1">Comprehensive SEO strategies to improve your website's visibility, ranking, and organic traffic from search engines.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <FaGlobe className="text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <strong>Back Links Development</strong>
                    <p className="text-gray-600 mt-1">Strategic backlink building campaigns to enhance your website's authority, improve search rankings, and drive quality referral traffic.</p>
                  </div>
                </li>
              </ol>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-3 flex items-center">
                  <FaRocket className="mr-2" />
                  Digital Strategy & Growth
                </h3>
                <p className="text-gray-700">
                  Our data-driven approach combines cutting-edge digital marketing techniques with strategic planning 
                  to ensure your online presence delivers measurable results and sustainable growth.
                </p>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-3 flex items-center">
                  <FaUsers className="mr-2" />
                  Audience Engagement
                </h3>
                <p className="text-gray-700">
                  We create compelling content and experiences that not only attract your target audience but also 
                  foster meaningful relationships that convert visitors into loyal customers and brand advocates.
                </p>
              </div>
            </div>

            <div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-primary mb-3">Why Choose Our Digital Marketing Services?</h3>
              <p className="text-gray-700 mb-4">
                In today's digital landscape, having a strong online presence is crucial for business success. Our team 
                of digital marketing experts combines creativity with technical expertise to deliver comprehensive solutions 
                that drive real results.
              </p>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Customized strategies tailored to your specific industry and goals</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Comprehensive analytics and reporting for transparent ROI tracking</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Experienced team with proven track record across various industries</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Ongoing support and optimization for continuous improvement</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaMarketingPage;