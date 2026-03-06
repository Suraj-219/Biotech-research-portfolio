import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Mail, Linkedin, BookOpen, Send } from 'lucide-react';
import { personalInfo } from '../mock';
import { toast } from '../hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Mock submission - in real app, this would call backend API
      console.log('Form submitted:', formData);
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0A2463] mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-blue-500 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Interested in collaboration or have questions? Let's connect!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-[#0A2463] mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-teal-50 transition-colors duration-300 group"
                >
                  <div className="p-3 bg-teal-100 rounded-lg group-hover:bg-teal-200 transition-colors duration-300">
                    <Mail className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Email</p>
                    <p className="text-gray-700 font-semibold">{personalInfo.email}</p>
                  </div>
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-300 group"
                >
                  <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors duration-300">
                    <Linkedin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">LinkedIn</p>
                    <p className="text-gray-700 font-semibold">Connect on LinkedIn</p>
                  </div>
                </a>

                {/* <a
                  href={personalInfo.researchgate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-green-50 transition-colors duration-300 group"
                >
                  <div className="p-3 bg-green-100 rounded-lg group-hover:bg-green-200 transition-colors duration-300">
                    <BookOpen className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">ResearchGate</p>
                    <p className="text-gray-700 font-semibold">View Publications</p>
                  </div>
                </a> */}
              </div>
            </div>

            {/* Decorative Element */}
            <div className="hidden lg:block bg-gradient-to-br from-teal-100 to-blue-100 p-8 rounded-xl">
              <p className="text-gray-700 leading-relaxed italic">
                "Open to research collaborations, academic discussions, and opportunities in biotechnology and bioinformatics."
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Name *
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="What's your name?"
                  className={`border-gray-300 focus:border-teal-500 focus:ring-teal-500 ${errors.name ? 'border-red-500' : ''}`}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="What's your email?"
                  className={`border-gray-300 focus:border-teal-500 focus:ring-teal-500 ${errors.email ? 'border-red-500' : ''}`}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                  Subject *
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Research Collaboration Opportunity"
                  className={`border-gray-300 focus:border-teal-500 focus:ring-teal-500 ${errors.subject ? 'border-red-500' : ''}`}
                />
                {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or inquiry..."
                  rows={5}
                  className={`border-gray-300 focus:border-teal-500 focus:ring-teal-500 ${errors.message ? 'border-red-500' : ''}`}
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white py-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-lg font-semibold"
              >
                Send Message
                <Send className="ml-2 w-5 h-5" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
