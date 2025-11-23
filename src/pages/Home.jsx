import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Github, Download } from 'lucide-react';
import PageWrapper from '../components/common/PageWrapper';

const Home = () => {
    return (
        <PageWrapper className="flex flex-col justify-center min-h-[calc(100vh-8rem)]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1 space-y-6">
                    <div>
                        <h2 className="text-primary font-bold text-xl mb-2">Hello, I'm</h2>
                        <h1 className="text-5xl md:text-6xl font-bold text-secondary mb-4 leading-tight">
                            Koustabh Dawn
                        </h1>
                        <h3 className="text-xl md:text-2xl lg:text-3xl text-gray-600 font-medium whitespace-nowrap">
                            Software Engineer | B.Tech CSE (AI & ML)
                        </h3>
                    </div>

                    <p className="text-gray-600 text-lg max-w-xl leading-relaxed">
                        Enthusiastic and detail-oriented Computer Science graduate specializing in AI & ML, full-stack development, and cloud-native solutions.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <Link to="/projects" className="btn-primary">
                            View Projects
                        </Link>
                        <a
                            href="/Koustabh_Dawn_Resume.pdf"
                            download
                            className="btn-outline flex items-center"
                        >
                            <Download size={18} className="mr-2" /> Download Resume
                        </a>
                    </div>

                    <div className="pt-8 border-t border-gray-100 mt-8">
                        <div className="flex flex-wrap gap-6 text-gray-600">
                            <a href="mailto:koustabhdawn@gmail.com" className="flex items-center hover:text-primary transition-colors">
                                <Mail size={18} className="mr-2" /> koustabhdawn@gmail.com
                            </a>
                            <a href="tel:+916290293365" className="flex items-center hover:text-primary transition-colors">
                                <Phone size={18} className="mr-2" /> +91-6290293365
                            </a>
                            <div className="flex items-center">
                                <MapPin size={18} className="mr-2" /> Kolkata, India
                            </div>
                        </div>
                        <div className="flex gap-4 mt-4">
                            <a href="https://www.linkedin.com/in/koustabh-dawn" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                                <Linkedin size={24} />
                            </a>
                            <a href="https://github.com/nerdyKou" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                                <Github size={24} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                    <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl bg-white">
                        <img
                            src="/profile.jpg"
                            alt="Koustabh Dawn - Software Engineer"
                            className="w-full h-full object-cover object-top"
                            onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.parentElement.innerHTML = '<div class="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400"><span class="text-4xl font-bold">KD</span></div>';
                            }}
                        />
                    </div>
                </div>
            </div>

            {/* Summary Strip */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                    "AI & ML Specialist",
                    "Full-Stack Developer",
                    "OCI Generative AI Certified"
                ].map((item, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4 text-center border border-gray-100 shadow-sm">
                        <span className="font-semibold text-secondary">{item}</span>
                    </div>
                ))}
            </div>
        </PageWrapper>
    );
};

export default Home;
