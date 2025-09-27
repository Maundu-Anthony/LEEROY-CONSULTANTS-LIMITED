import React from 'react';
import { FaBalanceScale } from 'react-icons/fa';

const DisputeResolutionPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 via-white to-blue-50 pt-24">
      <div className="container mx-auto p-8">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <div className="flex items-center mb-6">
            <FaBalanceScale className="text-6xl text-primary mr-6" />
            <h1 className="text-4xl font-bold text-primary">Mediation (Alternative Dispute Resolution) Services</h1>
          </div>
          
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-8">
              Our Alternative Dispute Resolution (ADR) services provide effective, confidential, and cost-efficient 
              solutions to resolve conflicts outside of traditional court proceedings. We specialize in mediation 
              services that help parties reach mutually acceptable agreements while preserving relationships.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-4">Why Choose Mediation?</h3>
                <ul className="text-gray-700 list-disc list-outside pl-4 space-y-2">
                  <li><strong>Cost-Effective:</strong> Significantly less expensive than litigation</li>
                  <li><strong>Time-Efficient:</strong> Faster resolution than court proceedings</li>
                  <li><strong>Confidential:</strong> Private process protects reputation</li>
                  <li><strong>Flexible:</strong> Tailored solutions to meet specific needs</li>
                  <li><strong>Preserves Relationships:</strong> Collaborative rather than adversarial</li>
                  <li><strong>Control:</strong> Parties maintain control over the outcome</li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-4">Our Mediation Process</h3>
                <ol className="text-gray-700 list-decimal list-outside pl-4 space-y-2">
                  <li><strong>Initial Consultation:</strong> Understanding the dispute and parties involved</li>
                  <li><strong>Agreement to Mediate:</strong> Establishing ground rules and procedures</li>
                  <li><strong>Opening Statements:</strong> Each party presents their perspective</li>
                  <li><strong>Joint Discussion:</strong> Facilitated dialogue between parties</li>
                  <li><strong>Private Sessions:</strong> Confidential meetings with each party</li>
                  <li><strong>Negotiation:</strong> Working toward mutually acceptable solutions</li>
                  <li><strong>Settlement Agreement:</strong> Documenting the agreed resolution</li>
                </ol>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-secondary mb-6">Our Core Mediation Services:</h2>
            <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg mb-8">
              <ol className="text-gray-700 list-decimal list-outside pl-6 space-y-3 text-lg">
                <li>Trade & Commercial Disputes.</li>
                <li>Family Disputes (Inheritance, Alimony, Child disputes)</li>
                <li>Land & Boundary Disputes.</li>
                <li>Certified Professional Mediation Training.</li>
              </ol>
            </div>

            <h3 className="text-xl font-semibold text-secondary mb-4">Detailed Service Areas:</h3>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                <h3 className="text-xl font-semibold text-primary mb-2">Trade & Commercial Disputes</h3>
                <p className="text-gray-700 mb-2">Resolving business conflicts including:</p>
                <ul className="text-gray-600 list-disc list-outside pl-4 space-y-1">
                  <li>Contract disputes and breach of agreement</li>
                  <li>Partnership and shareholder conflicts</li>
                  <li>Supplier and vendor disagreements</li>
                  <li>Employment and workplace disputes</li>
                  <li>Intellectual property conflicts</li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                <h3 className="text-xl font-semibold text-primary mb-2">Family Disputes (Inheritance, Alimony, Child disputes)</h3>
                <p className="text-gray-700 mb-2">Sensitive family matters including:</p>
                <ul className="text-gray-600 list-disc list-outside pl-4 space-y-1">
                  <li>Inheritance and estate disputes</li>
                  <li>Alimony and spousal support issues</li>
                  <li>Child custody and support disputes</li>
                  <li>Divorce and separation agreements</li>
                  <li>Elder care and guardianship matters</li>
                </ul>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
                <h3 className="text-xl font-semibold text-primary mb-2">Land & Boundary Disputes</h3>
                <p className="text-gray-700 mb-2">Property-related conflicts including:</p>
                <ul className="text-gray-600 list-disc list-outside pl-4 space-y-1">
                  <li>Boundary line disagreements</li>
                  <li>Property ownership disputes</li>
                  <li>Easement and right-of-way issues</li>
                  <li>Landlord-tenant conflicts</li>
                  <li>Construction and development disputes</li>
                </ul>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
                <h3 className="text-xl font-semibold text-primary mb-2">Certified Professional Mediation Training</h3>
                <p className="text-gray-700 mb-2">Comprehensive training programs for aspiring mediators:</p>
                <ul className="text-gray-600 list-disc list-outside pl-4 space-y-1">
                  <li>40-hour basic mediation certification course</li>
                  <li>Advanced mediation techniques and skills</li>
                  <li>Specialized training in family or commercial mediation</li>
                  <li>Continuing education for certified mediators</li>
                  <li>Practical experience through supervised mediations</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-primary mb-3">Our Commitment</h3>
              <p className="text-gray-700">
                As certified mediators, we are committed to maintaining the highest standards of neutrality, 
                confidentiality, and professionalism. Our goal is to create a safe space where all parties 
                can communicate effectively and work together toward sustainable solutions that meet everyone's interests.
              </p>
            </div>

            <div className="mt-6 bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-yellow-800 mb-2">Ready to Resolve Your Dispute?</h3>
              <p className="text-yellow-700">
                Contact us today to discuss how our mediation services can help you find a mutually beneficial 
                resolution to your conflict. We offer flexible scheduling and can accommodate urgent matters.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisputeResolutionPage;