import React from 'react';
import PageWrapper from '../components/common/PageWrapper';
import SectionHeader from '../components/common/SectionHeader';
import { User, GraduationCap, MapPin, Briefcase } from 'lucide-react';

const About = () => {
    return (
        <PageWrapper>
            <SectionHeader title="About Me" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="md:col-span-2 space-y-6 text-gray-600 leading-relaxed text-lg">
                    <p>
                        Enthusiastic and detail-oriented Computer Science graduate (AI & ML) with a strong foundation in software development, cloud computing, and machine learning. Skilled in Python, Java, C++, and full-stack web development using Django and JavaScript frameworks.
                    </p>
                    <p>
                        Certified Oracle Cloud Infrastructure (OCI) Generative AI Professional (2025), demonstrating familiarity with emerging technologies and cloud platforms.
                    </p>
                    <p>
                        Known for quick learning, strong analytical ability, and a proactive approach to teamwork. Eager to contribute to innovative software solutions and grow in a dynamic, technology-driven organization.
                    </p>
                </div>

                <div className="md:col-span-1">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 space-y-6">
                        <div className="flex items-start space-x-4">
                            <Briefcase className="text-primary mt-1" size={20} />
                            <div>
                                <h4 className="font-bold text-secondary">Role</h4>
                                <p className="text-gray-600 text-sm">Software Engineer (AI & ML)</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <GraduationCap className="text-primary mt-1" size={20} />
                            <div>
                                <h4 className="font-bold text-secondary">Degree</h4>
                                <p className="text-gray-600 text-sm">B.Tech in CSE (AI & ML)</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <MapPin className="text-primary mt-1" size={20} />
                            <div>
                                <h4 className="font-bold text-secondary">Location</h4>
                                <p className="text-gray-600 text-sm">Kolkata, India</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <User className="text-primary mt-1" size={20} />
                            <div>
                                <h4 className="font-bold text-secondary">Open To</h4>
                                <p className="text-gray-600 text-sm">Software Engineer / Full-Stack / AI-related roles</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 bg-primary/5 p-6 rounded-xl border border-primary/10">
                        <h4 className="font-bold text-secondary mb-4">Highlights</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li className="flex items-center">
                                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                                Strong DSA fundamentals
                            </li>
                            <li className="flex items-center">
                                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                                Hands-on project experience
                            </li>
                            <li className="flex items-center">
                                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                                Cloud & Generative AI exposure
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </PageWrapper>
    );
};

export default About;
