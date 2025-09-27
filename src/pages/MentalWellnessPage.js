import React from 'react';
import { FaBrain } from 'react-icons/fa';

const MentalWellnessPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 via-white to-blue-50 pt-24">
      <div className="container mx-auto p-8">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <div className="flex items-center mb-6">
            <FaBrain className="text-6xl text-primary mr-6" />
            <h1 className="text-4xl font-bold text-primary">Mental Wellness Clinic</h1>
          </div>
          
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-8">
              Our Mental Wellness Clinic provides comprehensive psychological services designed to support individuals, 
              couples, and families in achieving optimal mental health and personal growth. We offer professional 
              counseling services in a safe, confidential, and supportive environment.
            </p>

            <h2 className="text-2xl font-semibold text-secondary mb-6">Our Complete Mental Health Services:</h2>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8">
              <ol className="text-gray-700 list-decimal list-outside pl-6 space-y-3 text-lg">
                <li>Trauma, Loss & Grief Counseling.</li>
                <li>Addiction Counseling (Drugs, Pornography, etc.)</li>
                <li>Marriage Counseling & Therapy.</li>
                <li>Pre-Marital Counseling.</li>
                <li>Mentorship & Career Coaching.</li>
                <li>Psycho-Social Counseling & Peer Counseling.</li>
                <li>Stress & Burnout Management.</li>
                <li>Counselling Psychology Training.</li>
              </ol>
            </div>

            <h3 className="text-xl font-semibold text-secondary mb-4">Service Categories:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-3">Individual Counseling</h3>
                <ul className="text-gray-700 list-disc list-outside pl-4 space-y-2">
                  <li>Trauma, Loss & Grief Counseling</li>
                  <li>Addiction Counseling (Drugs, Pornography, etc.)</li>
                  <li>Stress & Burnout Management</li>
                  <li>Psycho-Social Counseling & Peer Counseling</li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-3">Relationship & Family Services</h3>
                <ul className="text-gray-700 list-disc list-outside pl-4 space-y-2">
                  <li>Marriage Counseling & Therapy</li>
                  <li>Pre-Marital Counseling</li>
                  <li>Family Counseling</li>
                  <li>Relationship Enhancement Programs</li>
                </ul>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-3">Professional Development</h3>
                <ul className="text-gray-700 list-disc list-outside pl-4 space-y-2">
                  <li>Mentorship & Career Coaching</li>
                  <li>Leadership Development</li>
                  <li>Workplace Wellness Programs</li>
                  <li>Professional Burnout Prevention</li>
                </ul>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-3">Training & Education</h3>
                <ul className="text-gray-700 list-disc list-outside pl-4 space-y-2">
                  <li>Counseling Psychology Training</li>
                  <li>Mental Health Awareness Workshops</li>
                  <li>Peer Counselor Training</li>
                  <li>Crisis Intervention Training</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-primary mb-3">Our Approach</h3>
              <p className="text-gray-700 mb-4">
                We believe in a holistic approach to mental wellness that addresses the mind, body, and spirit. 
                Our evidence-based therapeutic interventions are tailored to meet each client's unique needs and circumstances.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="text-center">
                  <div className="font-semibold text-primary">Confidential</div>
                  <div className="text-gray-600">Safe and private environment</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold text-primary">Professional</div>
                  <div className="text-gray-600">Licensed and experienced</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold text-primary">Compassionate</div>
                  <div className="text-gray-600">Understanding and supportive</div>
                </div>
              </div>
            </div>

            <div className="bg-red-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-red-600 mb-3">When to Seek Help</h3>
              <p className="text-gray-700 mb-3">Consider reaching out if you're experiencing:</p>
              <ul className="text-gray-700 list-disc list-outside pl-6 space-y-1">
                <li>Persistent feelings of sadness, anxiety, or emptiness</li>
                <li>Difficulty coping with daily stressors or major life changes</li>
                <li>Relationship conflicts or communication problems</li>
                <li>Substance abuse or addictive behaviors</li>
                <li>Grief and loss that feels overwhelming</li>
                <li>Work-related stress or burnout</li>
                <li>Need for personal growth and self-improvement</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentalWellnessPage;