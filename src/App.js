import React from 'react';
import { 
  FaHandshake, 
  FaBrain, 
  FaBalanceScale, 
  FaChalkboardTeacher, 
  FaPhone, 
  FaEnvelope, 
  FaWhatsapp 
} from 'react-icons/fa'; 

import './index.css';
import royPhoto from './assets/roy-photo.jpg';
import homeImage from './assets/home.jpg';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 via-white to-blue-50">
      
      {/* Navbar */}
      <nav className="bg-gray-800 text-white p-5 shadow-md fixed top-0 w-full z-50">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Tuzungumze</h1>
          <ul className="flex space-x-6 font-semibold">
            <NavItem label="Home" section="home" />
            <NavItem label="About" section="about" />
            <NavItem label="Services" section="services" />
            <NavItem label="Contact us" section="contact" />
          </ul>
        </div>
      </nav>

      {/* Home Section */}
      <section
        id="home"
        className="relative bg-cover bg-center h-screen pt-20"
        style={{ backgroundImage: `url(${homeImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative container mx-auto flex flex-col items-center justify-center h-full text-white text-center">
          <h1 className="text-5xl font-extrabold leading-tight mb-4">Tuzungumze Consultants Limited</h1>
          <p className="text-lg text-white mb-8">Tuzungumze na Tusalimiane</p>
          <a href="#about" className="bg-secondary text-white px-6 py-3 rounded-lg">Learn More</a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto p-8 flex flex-col items-center bg-white rounded-lg shadow-lg mt-16">
        <img
          src={royPhoto}
          alt="Roy Muli"
          className="w-52 h-58 rounded-full object-cover mb-6 transform transition-transform duration-300 hover:scale-110"
        />
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-primary">About Director/Founder</h2>
          <p className="text-accent mt-2 leading-relaxed">
            Roy Muli is a seasoned professional in Finance & Counseling Psychology. He specializes in Corporate Training, Management Consultancy, Financial Marketing, Resource Mobilization, Mental Wellness, Counseling Services & Alternative Dispute Resolution.
          </p>
          <div className="flex space-x-4 mt-4 justify-center">
            <a href="#contact" className="bg-gray-200 text-primary px-4 py-2 rounded-lg">Contacts</a>
            <a href="#services" className="bg-gray-200 text-primary px-4 py-2 rounded-lg">Services</a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="container mx-auto p-8 text-center mt-16">
        <h2 className="text-4xl font-bold text-primary mb-8">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Corporate Training Consultancy */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <FaHandshake className="text-4xl text-primary mb-4" />
            <h3 className="text-2xl font-semibold text-secondary">Corporate Training Consultancy</h3>
            <ul className="text-gray-600 mt-2 list-disc list-inside">
              <li>Corporate Governance & Leadership Training.</li>
              <li>Modern AI leadership skills in Digital Era.</li>
              <li>NextGen AI leadership for C-SUITE Executives.</li>
              <li>Strategic Marketing, PR & Customer Service.</li>
              <li>Digital Banking & Credit Digitization.</li>
              <li>Good Customer Service in the Digital Age.</li>
              <li>AI, PR & Data-Driven Decision Making in Customer Service.</li>
              <li>SACCOs & Supervisory Committees Training.</li>
              <li>Revolutionizing Customer Service: AI, PR, & Data-Driven Decision Making.</li>
              <li>Good Customer Service & Social Media Strategy.</li>
              <li>SACCO Supervisory Committee Roles & Legal Compliance.</li>
              <li>Pension Fund Governance & Compliance.</li>
              <li>Curated Pension Fund Governance and Compliance with RBA Act Requirements Training.</li>
              <li>Best practices in Pension Fund Assets Custody and Regulatory Compliance.</li>
              <li>Corporate Governance for Executives.</li>
              <li>Business Continuity Plans.</li>
              <li>Next-Gen Administrative Skills, AI-Driven Writing.</li>
              <li>Innovative Tax Strategies in Pension Funds.</li>
              <li>Public Finance Management & Tax Compliance.</li>
              <li>Modern Budget Control, PFM & Tax Compliance Mastery. Navigating the future of Public Finance Training.</li>
              <li>Policy Formulation, Implementation and Analysis course.</li>  
              <li>Public Policy Development, Governance & Administration Training.</li> 
              <li>Mastering Insurance Operations & Strategy: Navigating Risk Assesment, Underwriting Claims Handling and Regulatory Compliance Excellence Training. </li>       
              <li>Mental Health & Corporate Team Building.</li>
              
            </ul>
          </div>

          {/* Mental Wellness Clinic */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <FaBrain className="text-4xl text-primary mb-4" />
            <h3 className="text-2xl font-semibold text-secondary">Mental Wellness Clinic</h3>
            <ul className="text-gray-600 mt-2 list-disc list-inside">
              <li>Trauma, Loss & Grief Counseling.</li>
              <li>Addiction Counseling (Drugs, Pornography, etc.)</li>
              <li>Marriage Counseling & Therapy.</li>
              <li>Pre-Marital Counseling.</li>
              <li>Mentorship & Career Coaching.</li>
              <li>Psycho-Social Counseling & Peer Counseling.</li>
              <li>Stress & Burnout Management.</li>
              <li>Couselling Psychology Training.</li>

            </ul>
          </div>

          {/* Mediation (Alternative Dispute Resolution) Services */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <FaBalanceScale className="text-4xl text-primary mb-4" />
            <h3 className="text-2xl font-semibold text-secondary">Mediation (Alternative Dispute Resolution) Services</h3>
            <ul className="text-gray-600 mt-2 list-disc list-inside">
              <li>Trade & Commercial Disputes.</li>
              <li>Family Disputes (Inheritance, Alimony, Child disputes)</li>
              <li>Land & Boundary Disputes.</li>
              <li>Certified Professional Mediation Training.</li>
            </ul>
          </div>

          {/* Financial Marketing & Resource Mobilization */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <FaChalkboardTeacher className="text-4xl text-primary mb-4" />
            <h3 className="text-2xl font-semibold text-secondary">Financial Marketing & Resource Mobilization</h3>
            <ul className="text-gray-600 mt-2 list-disc list-inside">
              <li>Investment Banking & Money Market Investments.</li>
              <li>Financial Literacy & Capacity Building.</li>
              <li>Micro Credit Linkages for SMEs & SMMEs.</li>
              <li>Fund Administration & Investments.</li>
              <li>Syndicate Financing Linkages.</li>
              <li>Venture Capital Facilitation</li>
              <li>On-shore & Offshore Finance Facilitation.</li>
              <li>Fund Raising Proposals & Project Evaluations.</li>
              <li>Entrepreneurial Skills Development.</li>
              <li>Group Dynamics Training.</li>
              <li>Value Chain & Ecosystem Development.</li>
            </ul>
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className="container mx-auto p-8 max-w-lg bg-white rounded-lg shadow-lg mt-16 mb-16">
        <h2 className="text-3xl font-bold text-primary mb-6 text-center">Contact us through:</h2>
        <div className="space-y-4 text-gray-700">
          <div className="flex items-center">
            <FaPhone className="text-primary text-2xl mr-3" />
            <span>0722709200 or 0785762888</span>
          </div>
          <div className="flex items-center">
            <FaWhatsapp className="text-green-500 text-2xl mr-3" />
            <a href="https://wa.me/254722709200" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              +254 722709200 (WhatsApp)
            </a>
          </div>
          <div className="flex items-start">
            <FaEnvelope className="text-primary text-2xl mr-3" />
            <div>
              <a href="mailto:roymully@gmail.com" className="text-blue-600 hover:underline">roymully@gmail.com</a>
              <br />
              <a href="mailto:roymuli@yahoo.com" className="text-blue-600 hover:underline">roymuli@yahoo.com</a>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}

// Navigation Item Component
const NavItem = ({ label, section }) => (
  <li>
    <a href={`#${section}`} className="hover:text-secondary">
      {label}
    </a>
  </li>
);

// Service Card Component
const ServiceCard = ({ icon, title, services }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
    {icon}
    <h3 className="text-2xl font-semibold text-secondary">{title}</h3>
    <ul className="text-gray-600 mt-2 list-disc list-inside">
      {services.map((service, index) => (
        <li key={index}>{service}</li>
      ))}
    </ul>
  </div>
);

export default App;
