import React from 'react';
import PageWrapper from '../components/common/PageWrapper';
import SectionHeader from '../components/common/SectionHeader';
import { Award, Building, Calendar, ExternalLink } from 'lucide-react';

const CertificationCard = ({ title, provider, date, link, type, badge }) => (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 card-hover">
        <div className="flex items-start gap-4">
            {badge ? (
                <div className="w-32 h-32 flex-shrink-0 rounded-full overflow-hidden shadow-md">
                    <img src={badge} alt={`${title} badge`} className="w-full h-full object-cover" />
                </div>
            ) : (
                <div className="p-3 bg-primary/5 rounded-lg text-primary">
                    {type === 'job-sim' ? <Building size={24} /> : <Award size={24} />}
                </div>
            )}
            <div>
                <h3 className="text-lg font-bold text-secondary">{title}</h3>
                <p className="text-gray-600 font-medium">{provider}</p>
                <div className="flex items-center text-gray-400 text-sm mt-1">
                    <Calendar size={14} className="mr-1" /> {date}
                </div>
            </div>
        </div>

        {link && (
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-sm py-2 px-4 whitespace-nowrap"
            >
                View Credential
            </a>
        )}
    </div>
);

const Certifications = () => {
    const certifications = [
        {
            title: "Oracle Certified Professional - OCI Generative AI",
            provider: "Oracle",
            date: "October 30, 2025",
            link: "/certificates/Oracle_OCI_Generative_AI.pdf",
            type: "cert",
            badge: "/badges/oracle_badge.jpg"
        },
        {
            title: "Software Development Internship",
            provider: "Saiket Systems",
            date: "Aug 2025 – Sep 2025",
            link: "/certificates/Saiket_Systems_Internship.pdf",
            type: "job-sim"
        },
        {
            title: "Technology Job Simulation",
            provider: "Deloitte Australia",
            date: "June 30, 2025",
            link: "/certificates/Deloitte_Technology.pdf",
            type: "job-sim"
        },
        {
            title: "Data Analytics Job Simulation",
            provider: "Deloitte Australia",
            date: "June 23, 2025",
            link: "/certificates/Deloitte_Data_Analytics.pdf",
            type: "job-sim"
        }
    ];

    return (
        <PageWrapper>
            <SectionHeader title="Certifications" subtitle="Professional certifications and job simulations" />

            <div className="max-w-4xl mx-auto space-y-4">
                {certifications.map((cert, index) => (
                    <CertificationCard key={index} {...cert} />
                ))}
            </div>
        </PageWrapper>
    );
};

export default Certifications;
