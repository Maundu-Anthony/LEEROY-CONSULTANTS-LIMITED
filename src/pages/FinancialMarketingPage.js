import React from 'react';
import { FaChalkboardTeacher } from 'react-icons/fa';

const FinancialMarketingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 via-white to-blue-50 pt-24">
      <div className="container mx-auto p-8">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <div className="flex items-center mb-6">
            <FaChalkboardTeacher className="text-6xl text-primary mr-6" />
            <h1 className="text-4xl font-bold text-primary">Financial Marketing & Resource Mobilization</h1>
          </div>
          
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-8">
              Our comprehensive financial marketing and resource mobilization services help businesses and organizations 
              secure funding, optimize financial strategies, and develop sustainable growth through strategic partnerships 
              and investment opportunities.
            </p>

            <h2 className="text-2xl font-semibold text-secondary mb-4">Our Comprehensive Services:</h2>
            <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg">
              <ol className="text-gray-700 list-decimal list-outside pl-6 space-y-3 text-lg">
                <li>Project Financing & Joint Venture Consultants.</li>
                <li>Micro Credit Linkages for SMEs & SMMEs.</li>
                <li>Fund Administration & Investments.</li>
                <li>Syndicate Financing Linkages.</li>
                <li>Venture Capital Facilitation.</li>
                <li>On-shore & Offshore Finance Facilitation.</li>
                <li>Fund Raising Proposals & Project Evaluations.</li>
                <li>Investment Banking & Money Market Investments.</li>
                <li>Financial Literacy & Capacity Building.</li>
                <li>Entrepreneurial Skills Development.</li>
                <li>Group Dynamics Training.</li>
                <li>Value Chain & Ecosystem Development.</li>
                <li>Investments in Money market Funds.</li>
                <li>Investments in Commodity Markets - Drop shipping.</li>
                <li>Investments in Stocks & Securities.</li>
                <li>Investments in Bonds (Private, Government & Infrastructure Bonds).</li>
              </ol>
            </div>

            <div className="mt-8 bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-primary mb-3">Why Choose Our Financial Services?</h3>
              <p className="text-gray-700">
                With extensive experience in financial markets and resource mobilization, we provide tailored solutions 
                that align with your business objectives. Our comprehensive approach ensures sustainable growth and 
                strategic financial positioning in today's competitive marketplace.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialMarketingPage;