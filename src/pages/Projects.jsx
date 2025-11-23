import React from 'react';
import PageWrapper from '../components/common/PageWrapper';
import SectionHeader from '../components/common/SectionHeader';
import ProjectCard from '../components/common/ProjectCard';

const Projects = () => {
    const projects = [
        {
            title: "Real-Time Emotion Detection System",
            description: "A real-time facial emotion detection application using OpenCV and deep learning models.",
            bullets: [
                "Built a real-time facial emotion detection application using OpenCV and a pre-trained FER-based emotion recognition model.",
                "Implemented face detection using Haar Cascade Classifier.",
                "Integrated a pre-trained deep learning emotion model (.h5) for classifying emotions (Happy, Sad, Angry, Neutral, etc.).",
                "Added real-time webcam feed processing with bounding boxes and emotion labels."
            ],
            tech: ["Python", "OpenCV"],
            github: "https://github.com/nerdyKou/Real-Time-Emotion-Detection-.git"
        },
        {
            title: "Contact Book Web Application",
            description: "A fully responsive Contact Book web app using React with modern UI components.",
            bullets: [
                "Built a fully responsive Contact Book web app using React with modern UI components.",
                "Implemented add, delete, and real-time search for contacts with validation.",
                "Designed reusable components, custom hooks, and clean modular architecture.",
                "Ensured a clean, responsive UI with modern styling."
            ],
            tech: ["React.js", "CSS", "Lucide Icons"],
            github: "https://github.com/nerdyKou/Contact-Book-App.git"
        },
        {
            title: "Blood Bank Management System",
            description: "A full-stack Blood Bank Management System with role-based authentication.",
            bullets: [
                "Developed a full-stack Blood Bank Management System with role-based authentication for Admin and Users.",
                "Implemented donor registration, blood group–wise inventory tracking, and blood request management.",
                "Enabled automatic inventory updates upon adding or editing donor records.",
                "Designed separate dashboards for Admin and Users with functionalities like approve/decline requests, donor list, and stock overview.",
                "Built with responsive UI and secure CRUD operations."
            ],
            tech: ["Python", "Django", "HTML", "CSS", "JavaScript", "Bootstrap"],
            github: "https://github.com/nerdyKou/Blood-Bank-Management-System-.git"
        }
    ];

    return (
        <PageWrapper>
            <SectionHeader title="Projects" subtitle="Showcase of my technical projects and applications" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <div key={index} className="h-full">
                        <ProjectCard {...project} />
                    </div>
                ))}
            </div>
        </PageWrapper>
    );
};

export default Projects;
