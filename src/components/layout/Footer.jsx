import React from 'react';
import { Linkedin, Github } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-white border-t border-gray-100 py-8 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <p className="text-gray-500 text-sm">
                        &copy; {currentYear} Koustabh Dawn. All rights reserved.
                    </p>
                </div>
                <div className="flex space-x-6">
                    <a
                        href="https://www.linkedin.com/in/koustabh-dawn"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-primary transition-colors"
                        aria-label="LinkedIn"
                    >
                        <Linkedin size={20} />
                    </a>
                    <a
                        href="https://github.com/nerdyKou"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-primary transition-colors"
                        aria-label="GitHub"
                    >
                        <Github size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
