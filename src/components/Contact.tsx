import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle, MessageSquare, User, Globe } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const subjects = [
    'General Inquiry',
    'Technical Support',
    'Business Partnership',
    'Delivery Issue',
    'Restaurant Partnership',
    'Feedback & Suggestions',
    'Media & Press',
    'Other'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setFormStatus({ type: 'error', message: 'Name is required' });
      return false;
    }
    if (!formData.email.trim()) {
      setFormStatus({ type: 'error', message: 'Email is required' });
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setFormStatus({ type: 'error', message: 'Please enter a valid email address' });
      return false;
    }
    if (!formData.subject) {
      setFormStatus({ type: 'error', message: 'Please select a subject' });
      return false;
    }
    if (!formData.message.trim()) {
      setFormStatus({ type: 'error', message: 'Message is required' });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    setFormStatus({ type: '', message: '' });

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setFormStatus({ 
        type: 'success', 
        message: 'Thank you for your message! We\'ll get back to you within 24 hours.' 
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setFormStatus({ 
        type: 'error', 
        message: 'Sorry, there was an error sending your message. Please try again.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      details: ['+234 800 SHARP (74277)', '+234 1 234 5678'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      details: ['hello@gosharpsharp.com', 'support@gosharpsharp.com'],
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Address',
      details: ['123 Innovation Drive', 'Victoria Island, Lagos, Nigeria'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Business Hours',
      details: ['Mon - Fri: 8:00 AM - 8:00 PM', 'Sat - Sun: 10:00 AM - 6:00 PM'],
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const socialLinks = [
    { name: 'Facebook', url: '#', color: 'hover:text-blue-600' },
    { name: 'Twitter', url: '#', color: 'hover:text-blue-400' },
    { name: 'Instagram', url: '#', color: 'hover:text-pink-600' },
    { name: 'LinkedIn', url: '#', color: 'hover:text-blue-700' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white pt-20">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-16 sm:mb-20 animate-slide-in-up">
            <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-800 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-6 sm:mb-8 animate-fade-in">
              <MessageSquare className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>Get In Touch</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 mb-6 sm:mb-8 animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
              Contact
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-500">GoSharpSharp</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto font-light animate-slide-in-up" style={{ animationDelay: '0.4s' }}>
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16 sm:mb-20">
            {contactInfo.map((info, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:scale-105 transform animate-slide-in-up border border-slate-100"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${info.color} rounded-2xl flex items-center justify-center text-white mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                  {info.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-4">{info.title}</h3>
                <div className="space-y-2">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-slate-600 text-sm sm:text-base">{detail}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div className="animate-slide-in-left">
              <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl">
                <div className="mb-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">Send us a Message</h2>
                  <p className="text-slate-600">Fill out the form below and we'll get back to you as soon as possible.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-3 sm:py-4 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors text-slate-900 placeholder-slate-400"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-3 sm:py-4 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors text-slate-900 placeholder-slate-400"
                        placeholder="Enter your email address"
                        required
                      />
                    </div>
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-slate-700 mb-2">
                      Subject *
                    </label>
                    <div className="relative">
                      <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-3 sm:py-4 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors text-slate-900 appearance-none bg-white"
                        required
                      >
                        <option value="">Select a subject</option>
                        {subjects.map((subject, index) => (
                          <option key={index} value={subject}>{subject}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className="w-full px-4 py-3 sm:py-4 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors text-slate-900 placeholder-slate-400 resize-none"
                      placeholder="Tell us how we can help you..."
                      required
                    />
                  </div>

                  {/* Status Message */}
                  {formStatus.message && (
                    <div className={`flex items-center space-x-3 p-4 rounded-xl ${
                      formStatus.type === 'success' 
                        ? 'bg-green-50 text-green-800 border border-green-200' 
                        : 'bg-red-50 text-red-800 border border-red-200'
                    }`}>
                      {formStatus.type === 'success' ? (
                        <CheckCircle className="w-5 h-5 flex-shrink-0" />
                      ) : (
                        <AlertCircle className="w-5 h-5 flex-shrink-0" />
                      )}
                      <p className="text-sm">{formStatus.message}</p>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-emerald-600 text-white py-3 sm:py-4 px-6 rounded-xl font-semibold hover:bg-emerald-700 focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-3 hover:scale-105 transform"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Map & Additional Info */}
            <div className="space-y-8 animate-slide-in-right">
              {/* Embedded Map */}
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6">Find Us</h3>
                <div className="aspect-video bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-emerald-600/20"></div>
                  <div className="relative text-center">
                    <MapPin className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                    <p className="text-slate-700 font-semibold">Interactive Map</p>
                    <p className="text-slate-600 text-sm">123 Innovation Drive, Victoria Island</p>
                    <p className="text-slate-600 text-sm">Lagos, Nigeria</p>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6">Follow Us</h3>
                <p className="text-slate-600 mb-6">Stay connected with us on social media for updates and news.</p>
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className={`flex items-center space-x-2 px-4 py-3 bg-slate-50 rounded-xl hover:bg-slate-100 transition-all duration-300 text-slate-700 ${social.color} hover:scale-105 transform`}
                    >
                      <Globe className="w-5 h-5" />
                      <span className="font-medium">{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-3xl p-8 text-white">
                <h3 className="text-xl sm:text-2xl font-bold mb-4">Need Immediate Help?</h3>
                <p className="text-emerald-100 mb-6">For urgent matters, you can reach us directly:</p>
                <div className="space-y-4">
                  <a href="tel:+2348007427" className="flex items-center space-x-3 hover:text-emerald-200 transition-colors">
                    <Phone className="w-5 h-5" />
                    <span>+234 800 SHARP (74277)</span>
                  </a>
                  <a href="mailto:support@gosharpsharp.com" className="flex items-center space-x-3 hover:text-emerald-200 transition-colors">
                    <Mail className="w-5 h-5" />
                    <span>support@gosharpsharp.com</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;