import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const ProjectCard = ({ title, description, bullets, tech, github, demo }) => {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 card-hover flex flex-col h-full">
            <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-secondary">{title}</h3>
                <div className="flex space-x-2">
                    {github && (
                        <a
                            href={github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-primary transition-colors"
                            title="View on GitHub"
                        >
                            <Github size={20} />
                        </a>
                    )}
                    {demo && (
                        <a
                            href={demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-primary transition-colors"
                            title="View Live Demo"
                        >
                            <ExternalLink size={20} />
                        </a>
                    )}
                </div>
            </div>

            <p className="text-gray-600 mb-4 text-sm leading-relaxed">{description}</p>

            {bullets && bullets.length > 0 && (
                <ul className="list-disc list-inside text-sm text-gray-500 mb-6 space-y-1 flex-grow">
                    {bullets.map((bullet, index) => (
                        <li key={index}>{bullet}</li>
                    ))}
                </ul>
            )}

            <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-4">
                    {tech.map((item, index) => (
                        <span
                            key={index}
                            className="px-3 py-1 bg-gray-50 text-gray-600 text-xs font-medium rounded-full border border-gray-100"
                        >
                            {item}
                        </span>
                    ))}
                </div>

                {github && (
                    <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-full px-4 py-2 border border-primary text-primary text-sm font-medium rounded-md hover:bg-primary hover:text-white transition-colors duration-300"
                    >
                        <Github size={16} className="mr-2" /> View on GitHub
                    </a>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;
