import React from 'react';
import TimelineItem from '../components/TimeLineItem.jsx';

function ExperiencePage({ id }) {
    // Array of placeholder data for the roadmap/timeline
    const experienceData = [
        {
            title: "Current Focus: Project X Development",
            company: "Personal/Freelance",
            duration: "2024 - Present",
            position: "Lead Developer",
            description: "Currently focusing on advanced state management and deploying a full-stack application using modern React and serverless functions. This is where you will detail specific tech stacks and recent accomplishments."
        },
        {
            title: "Previous Role / Major Project",
            company: "Company Name Placeholder",
            duration: "2022 - 2024",
            position: "Senior Front-End Engineer",
            description: "Describe your major responsibilities, technologies used (e.g., React, TypeScript, Tailwind), and key achievements during this period. Keep descriptions focused and professional."
        },
        {
            title: "Early Career / Foundation Building",
            company: "Initial Role/Education",
            duration: "2020 - 2022",
            position: "Junior Developer / Graduated",
            description: "Detail the foundations of your technical skills, relevant coursework, or early contributions. This sets the stage for your career growth and learning journey."
        },
    ];

    return (
        <section id={id} className="py-12 px-4 md:px-8 bg-dark-bg min-h-screen">
            <h2 className={`font-mono text-4xl font-extrabold tracking-wide mb-12 border-b-4 border-purple-400 pb-2 text-white text-center`}>My Experience Roadmap</h2>
            
            <div className="max-w-3xl mx-auto pt-10">
                {experienceData.map((item, index) => (
                    <TimelineItem
                        key={index}
                        title={item.title}
                        company={item.company}
                        duration={item.duration}
                        description={item.description}
                        position={item.position}
                    />
                ))}
                
                {/* Final Dot for the bottom of the timeline */}
                <div className="flex mb-8">
                    <div className="flex flex-col items-center mr-6">
                        {/* Final dot uses a different accent color */}
                        <div className={`w-4 h-4 rounded-full bg-purple border-2 border400 border-2 border-white/50 z-10`}></div>
                    </div>
                    <div className="flex-grow pt-1">
                        <p className={`text-lg font-bold text-purple-400`}>The Journey Continues...</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ExperiencePage;