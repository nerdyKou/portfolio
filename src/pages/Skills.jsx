import React from 'react';
import PageWrapper from '../components/common/PageWrapper';
import SectionHeader from '../components/common/SectionHeader';

const SkillCategory = ({ title, skills }) => (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-full">
        <h3 className="text-xl font-bold text-secondary mb-6 pb-2 border-b border-gray-100">{title}</h3>
        <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
                <span
                    key={index}
                    className="px-4 py-2 bg-gray-50 text-gray-700 rounded-full text-sm font-medium border border-gray-200 hover:border-primary hover:text-primary transition-colors duration-300 cursor-default"
                >
                    {skill}
                </span>
            ))}
        </div>
    </div>
);

const Skills = () => {
    const skillData = [
        {
            title: "Programming",
            skills: ["Python", "C++", "Java", "SQL", "JavaScript", "HTML", "CSS"]
        },
        {
            title: "Frameworks & Libraries",
            skills: ["React.js", "Node.js", "TensorFlow", "PyTorch", "Django"]
        },
        {
            title: "Core Areas",
            skills: ["Machine Learning", "Deep Learning", "Generative AI", "Computer Vision", "DSA", "OOP"]
        },
        {
            title: "Tools & Platforms",
            skills: ["Git", "VS Code", "Jupyter Notebook", "Docker", "Linux", "Windows"]
        }
    ];

    return (
        <PageWrapper>
            <SectionHeader title="Technical Skills" subtitle="My technical toolkit and areas of expertise" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skillData.map((category, index) => (
                    <div key={index}>
                        <SkillCategory title={category.title} skills={category.skills} />
                    </div>
                ))}
            </div>
        </PageWrapper>
    );
};

export default Skills;
