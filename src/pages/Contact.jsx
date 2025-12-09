import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page-container">
      {/* Header/Title Section */}
      <div className="contact-header">
        <h1 className="contact-title">Contact Us - Customer</h1>
        <p className="contact-subtitle">
          For quick support, please check our <a href="#" className="faq-link">FAQ section</a>.
        </p>
      </div>
      
      {/* Main Content Grid */}
      <div className="contact-grid">
        
        {/* Left Column: Contact Methods */}
        <div className="contact-methods">
          <h2 className="section-title">Get in touch with us</h2>
          <p className="section-description">
            We are here to help and answer any question you might have. We look forward to hearing from you.
          </p>

          {/* Contact Cards */}
          <div className="contact-card">
            <div className="icon-circle">
              {/* Phone Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-7.5-7.5 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.08 2h3a2 2 0 0 1 2 1.72 17.61 17.61 0 0 0 .93 4.86 2 2 0 0 1-.45 2.15l-1.39 1.39a17.61 17.61 0 0 0 7.03 7.03l1.39-1.39a2 2 0 0 1 2.15-.45 17.61 17.61 0 0 0 4.86.93A2 2 0 0 1 22 16.92z"></path></svg>
            </div>
            <div className="card-info">
              <p className="card-title">Call Us</p>
              <p className="card-detail">044-66444444</p>
            </div>
          </div>
          
          <div className="contact-card">
            <div className="icon-circle">
              {/* Email Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            </div>
            <div className="card-info">
              <p className="card-title">Email Us</p>
              <p className="card-detail">support@scenebooking.com</p>
            </div>
          </div>
          
          <div className="contact-card">
            <div className="icon-circle">
              {/* Location Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            </div>
            <div className="card-info">
              <p className="card-title">Office Address</p>
              <p className="card-detail">Scene Booking, Chennai, Tamil Nadu</p>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="contact-form-container">
          <form className="contact-form">
            <h2 className="section-title form-title">Send us a message</h2>
            
            <div className="input-group">
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" placeholder="Enter your name" required />
            </div>
            
            <div className="input-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" placeholder="Enter your email" required />
            </div>

            <div className="input-group">
              <label htmlFor="mobile">Mobile Number</label>
              <input type="tel" id="mobile" placeholder="Enter your mobile number" required />
            </div>

            <div className="input-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" placeholder="Enter the subject" required />
            </div>
            
            <div className="input-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="5" placeholder="Enter your message" required></textarea>
            </div>
            
            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;