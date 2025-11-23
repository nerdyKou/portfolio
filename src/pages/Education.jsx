import React from 'react';
import PageWrapper from '../components/common/PageWrapper';
import SectionHeader from '../components/common/SectionHeader';
import { GraduationCap, Calendar, Award, ExternalLink } from 'lucide-react';

const EducationCard = ({ institution, degree, date, score, website, type }) => (
    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 card-hover mb-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
            <div>
                <h3 className="text-xl font-bold text-secondary flex items-center">
                    <GraduationCap className="text-primary mr-3" size={24} />
                    {institution}
                </h3>
                <p className="text-lg text-gray-600 mt-1 font-medium">{degree}</p>
            </div>
            <div className="mt-2 md:mt-0 flex items-center text-gray-500 bg-gray-50 px-4 py-2 rounded-full text-sm">
                <Calendar size={16} className="mr-2" />
                {date}
            </div>
        </div>

        <div className="border-t border-gray-100 pt-4 mt-4 flex flex-col sm:flex-row sm:items-center justify-between">
            <div className="flex items-center text-gray-700 font-medium mb-2 sm:mb-0">
                <Award size={18} className="text-primary mr-2" />
                {type}: <span className="ml-2 text-secondary font-bold">{score}</span>
            </div>

            {website && (
                <a
                    href={website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-primary hover:text-red-700 transition-colors text-sm font-medium"
                >
                    Visit Website <ExternalLink size={14} className="ml-1" />
                </a>
            )}
        </div>
    </div>
);

const Education = () => {
    const educationData = [
        {
            institution: "Future Institute of Technology",
            degree: "B.Tech (CSE – AI & ML)",
            date: "September 2021 – July 2025",
            score: "8.33",
            type: "CGPA",
            website: "https://futureeducation.in/fit"
        },
        {
            institution: "Sarada Vidyapith (H.S.)",
            degree: "XII (WBCHSE)",
            date: "2021",
            score: "86.28%",
            type: "Percentage",
            website: null
        },
        {
            institution: "Sarada Vidyapith (H.S.)",
            degree: "X (WBBSE)",
            date: "2019",
            score: "86.2%",
            type: "Percentage",
            website: null
        }
    ];

    return (
        <PageWrapper>
            <SectionHeader title="Education" subtitle="My academic background and qualifications" />

            <div className="max-w-3xl mx-auto">
                {educationData.map((edu, index) => (
                    <EducationCard key={index} {...edu} />
                ))}
            </div>
        </PageWrapper>
    );
};

export default Education;
