import React, { useState } from 'react';

const initialExperienceData = [
    {
        category: ["Coding", "Marketing"],
        title: "Google Developers Group Organizer",
        company: "Google Developers Groups Warsaw",
        duration: "August 2025 - Present",
        position: "Community Organizer",
        description: "Leading a large-scale developer community in Warsaw. Responsibilities include organizing major tech events (e.g., DevFests), managing partnerships, and driving technical content strategy to support local developers."
    },
    {
        category: ["Coding"],
        title: "Google Developers Group On Campus PJATK Lead",
        company: "Google Developers Group On Campus PJATK",
        duration: "September 2024 - June 2025",
        position: "GDG Lead (marketing department)",
        description: "Managed a core team focused on specific technology tracks (e.g., Firebase, Flutter). Organized and hosted monthly workshops, providing mentorship and technical guidance to aspiring developers."
    },
    {
        category: ["Coding"],
        title: "Master's degree in Computer Science",
        company: "Polish-Japanese Academy of Information Technology",
        duration: "October 2023 - September 2025",
        position: "student",
        description: "Specialized in [Thesis Topic, e.g., Distributed Systems or AI]. Served as a core team member in the Google Developer Student Club (GDSC), facilitating beginner-to-intermediate coding workshops."
    },
    {
        category: ["Coding"],
        title: "Full-Stack Development Bootcamp",
        company: "GoIT",
        duration: "January 2022 - February 2023",
        position: "student",
        description: "Developed responsive web design HTML CSS skills, learned JavaScript, built front-end projects using React (Hooks, Redux, Routing). Gained back-end basics with Node.js and MongoDB for data handling."
    },
    // marketing
    {
        category: ["Marketing"],
        title: "Student Depot ambassador",
        company: "Student Depot",
        duration: "December 2023 - September 2025",
        position: "ambassador",
        description: "promoted Student Depot with creative content"
    },
];

const TimelineItem = ({ title, company, duration, description, position }) => (
    <div className="flex mb-8">
        <div className="flex flex-col items-center mr-6">
            <div className="w-4 h-4 rounded-full bg-[#5856D6] border-2 border-white/50 z-10"></div>
            <div className="h-full w-0.5 bg-gray-600/50"></div>
        </div>
        <div className="flex-grow pb-10 pt-1">
            <p className="text-xs text-gray-400 font-mono">{duration}</p>
            <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
            <p className="text-sm font-medium text-gray-300 mb-2">{position} at {company}</p>
            <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
        </div>
    </div>
);


const categories = ['Coding', 'Marketing'];

const FilterButtons = ({ activeTab, setActiveTab }) => {
    const baseClasses = "font-roboto-mono text-sm font-medium py-2 px-3 rounded-md shadow-md transition duration-300 ease-in-out cursor-pointer focus:outline-none";
    
    const activeColor = "bg-[#5856D6] text-white hover:bg-[#4a47bc]";
    
    const inactiveColor = "bg-[#272727] text-gray-400 hover:bg-[#5856D6] hover:text-white";

    return (
        <div className="flex space-x-4 mb-8 justify-center max-w-3xl mx-auto">
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => setActiveTab(category)}
                    className={`${baseClasses} ${
                        activeTab === category ? activeColor : inactiveColor
                    }`}
                >
                    {category}
                </button>
            ))}
        </div>
    );
};


function ExperiencePage({ id }) {
    const [activeCategory, setActiveCategory] = useState('Coding');

    const filteredExperience = initialExperienceData.filter(
        (item) => item.category.includes(activeCategory)
    );

    return (
        <section id={id} className="py-12 px-4 md:px-8 bg-dark-bg min-h-screen">
            <h2 className="font-mono text-4xl font-extrabold tracking-wide mb-12 text-white text-center">
                My Experience
            </h2>
            
            <FilterButtons 
                activeTab={activeCategory} 
                setActiveTab={setActiveCategory} 
            />
            
            <div className="max-w-3xl mx-auto pt-10">
                {filteredExperience.length > 0 ? (
                    filteredExperience.map((item, index) => (
                        <TimelineItem
                            key={index}
                            title={item.title}
                            company={item.company}  
                            duration={item.duration}
                            description={item.description}
                            position={item.position}
                        />
                    ))
                ) : (
                    <div className="text-center text-gray-400 pt-10">
                        No experience entries found for the **{activeCategory}** category.
                    </div>
                )}
            </div>
        </section>
    );
}

export default ExperiencePage;