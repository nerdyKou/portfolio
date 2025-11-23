import React from 'react';
import PageWrapper from '../components/common/PageWrapper';
import SectionHeader from '../components/common/SectionHeader';
import { Calendar, Link as LinkIcon, Building2 } from 'lucide-react';

const ExperienceCard = ({ company, role, date, website, bullets }) => (
    <div className="relative pl-8 md:pl-0">
        {/* Timeline Line (Desktop) */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 transform -translate-x-1/2"></div>

        <div className={`md:flex items-center justify-between w-full mb-12 group`}>
            <div className="md:w-5/12 mb-4 md:mb-0 order-1 md:text-right pr-8">
                <h3 className="text-xl font-bold text-secondary">{company}</h3>
                <h4 className="text-primary font-medium mb-2">{role}</h4>
                <div className="flex items-center justify-end text-gray-500 text-sm mb-2">
                    <Calendar size={14} className="mr-2" />
                    {date}
                </div>
                <a
                    href={website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-gray-500 hover:text-primary transition-colors"
                >
                    <LinkIcon size={14} className="mr-2" /> {website.replace('https://', '')}
                </a>
            </div>

            <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center w-8 h-8 rounded-full bg-white border-4 border-primary z-10 group-hover:scale-110 transition-transform duration-300">
                <Building2 size={14} className="text-primary" />
            </div>

            <div className="md:w-5/12 pl-8 order-2 text-left">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 card-hover">
                    <ul className="space-y-3">
                        {bullets.map((bullet, index) => (
                            <li key={index} className="text-gray-600 text-sm leading-relaxed flex items-start">
                                <span className="min-w-[6px] h-[6px] rounded-full bg-primary mt-2 mr-3"></span>
                                {bullet}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </div>
);

const Experience = () => {
    const experiences = [
        {
            company: "Saiket Systems",
            role: "Software Development Intern",
            date: "Aug 2025 – Sep 2025",
            website: "https://saiket.in/",
            bullets: [
                "Contributed to the software development lifecycle, applying strong analytical thinking and problem-solving skills to meet project requirements.",
                "Collaborated with the development team on data modeling tasks and system design, demonstrating keen attention to detail.",
                "Gained practical experience in a professional software development environment, consistently receiving positive feedback for dedication and eagerness to learn new technologies."
            ]
        },
        {
            company: "Ardent Computech Pvt. Ltd.",
            role: "Industrial Trainee",
            date: "Jan 2024 – Mar 2024",
            website: "https://www.ardentcollaborations.com/",
            bullets: [
                "Developed a full-stack Blood Bank Management System using Django, significantly improving blood donation tracking and inventory management.",
                "Designed a responsive and interactive user interface with HTML, CSS, JavaScript, and Bootstrap, enhancing both donor and administrator experience.",
                "Implemented secure user authentication and integrated real-time database updates for efficient and reliable data management."
            ]
        }
    ];

    return (
        <PageWrapper>
            <SectionHeader title="Experience" subtitle="My professional journey and internships" />

            <div className="relative max-w-5xl mx-auto mt-12">
                {experiences.map((exp, index) => (
                    <ExperienceCard key={index} {...exp} />
                ))}
            </div>
        </PageWrapper>
    );
};

export default Experience;
