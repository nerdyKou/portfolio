import React, { useState } from 'react';
import PageWrapper from '../components/common/PageWrapper';
import SectionHeader from '../components/common/SectionHeader';
import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus('');

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    access_key: '8d7c7683-da08-42ba-8e6d-a3b7b86b8b2c',
                    name: formData.name,
                    email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                }),
            });

            const result = await response.json();

            if (result.success) {
                setStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });
                setTimeout(() => setStatus(''), 5000);
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        } finally {
            setLoading(false);
        }
    };

    return (
        <PageWrapper>
            <SectionHeader title="Contact Me" subtitle="Feel free to reach out for opportunities, collaborations, or any questions." />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                {/* Contact Info */}
                <div className="space-y-8">
                    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="text-2xl font-bold text-secondary mb-6">Get in Touch</h3>

                        <div className="space-y-6">
                            <a href="mailto:koustabhdawn@gmail.com" className="flex items-start group">
                                <div className="p-3 bg-primary/5 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                    <Mail size={24} />
                                </div>
                                <div className="ml-4">
                                    <p className="text-sm text-gray-500 font-medium">Email</p>
                                    <p className="text-lg text-secondary font-medium">koustabhdawn@gmail.com</p>
                                </div>
                            </a>

                            <a href="tel:+916290293365" className="flex items-start group">
                                <div className="p-3 bg-primary/5 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                    <Phone size={24} />
                                </div>
                                <div className="ml-4">
                                    <p className="text-sm text-gray-500 font-medium">Phone</p>
                                    <p className="text-lg text-secondary font-medium">+91-6290293365</p>
                                </div>
                            </a>

                            <div className="flex items-start group">
                                <div className="p-3 bg-primary/5 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                    <MapPin size={24} />
                                </div>
                                <div className="ml-4">
                                    <p className="text-sm text-gray-500 font-medium">Location</p>
                                    <p className="text-lg text-secondary font-medium">Kolkata, India</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 pt-8 border-t border-gray-100 flex gap-4">
                            <a
                                href="https://www.linkedin.com/in/koustabh-dawn"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-outline flex-1 flex justify-center items-center"
                            >
                                <Linkedin size={20} className="mr-2" /> LinkedIn
                            </a>
                            <a
                                href="https://github.com/nerdyKou"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-outline flex-1 flex justify-center items-center"
                            >
                                <Github size={20} className="mr-2" /> GitHub
                            </a>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="text-2xl font-bold text-secondary mb-6">Send a Message</h3>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                placeholder="Your Name"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                placeholder="your.email@example.com"
                            />
                        </div>

                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                required
                                value={formData.subject}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                placeholder="Project Inquiry"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows="4"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                                placeholder="How can I help you?"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full btn-primary flex justify-center items-center disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? (
                                <>
                                    <span className="mr-2">Sending...</span>
                                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                </>
                            ) : (
                                <>
                                    <Send size={18} className="mr-2" /> Send Message
                                </>
                            )}
                        </button>

                        {status === 'success' && (
                            <div className="p-4 bg-green-50 text-green-700 rounded-md text-center animate-fade-in">
                                ✅ Thank you! Your message has been sent successfully. I'll get back to you soon!
                            </div>
                        )}

                        {status === 'error' && (
                            <div className="p-4 bg-red-50 text-red-700 rounded-md text-center animate-fade-in">
                                ❌ Oops! Something went wrong. Please try again or email me directly.
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </PageWrapper>
    );
};

export default Contact;
