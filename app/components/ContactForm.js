import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch  {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact" className="relative z-10 w-full max-w-4xl mt-28 px-4">
      <div className="bg-gradient-to-br from-blue-600/80 to-purple-600/80 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl text-white">
        <div className="w-full flex flex-col justify-center items-center text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let&apos;s Work Together</h2>
          <p className="text-blue-100 max-w-xl text-lg mb-10">
            I&apos;m currently available for freelance work and full-time opportunities
          </p>
          
          <form onSubmit={handleSubmit} className="w-full max-w-2xl space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-left text-blue-100 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-2xl bg-white/10 border border-white/20 placeholder-blue-200 text-white focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-left text-blue-100 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-2xl bg-white/10 border border-white/20 placeholder-blue-200 text-white focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-left text-blue-100 mb-2">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-2xl bg-white/10 border border-white/20 placeholder-blue-200 text-white focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300"
                placeholder="Project Discussion"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-left text-blue-100 mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-3 rounded-2xl bg-white/10 border border-white/20 placeholder-blue-200 text-white focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300 resize-none"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-white text-blue-600 py-4 rounded-2xl font-bold hover:bg-gray-100 transition-all duration-500 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </button>
            
            {submitStatus === 'success' && (
              <div className="p-4 bg-green-500/20 border border-green-500/30 rounded-2xl text-green-200">
                Thank you! Your message has been sent successfully. I&apos;ll get back to you soon.
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="p-4 bg-red-500/20 border border-red-500/30 rounded-2xl text-red-200">
                Sorry, there was an error sending your message. Please try again or email me directly.
              </div>
            )}
          </form>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-2xl">
            <div className="text-center">
              <div className="bg-white/10 p-4 rounded-2xl inline-block mb-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="font-bold mb-1">Email</h4>
              <p className="text-blue-200">alisinai902@gmail.com</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white/10 p-4 rounded-2xl inline-block mb-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h4 className="font-bold mb-1">Location</h4>
              <p className="text-blue-200">Afghanistan</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white/10 p-4 rounded-2xl inline-block mb-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-bold mb-1">Response Time</h4>
              <p className="text-blue-200">Within 24 hours</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;