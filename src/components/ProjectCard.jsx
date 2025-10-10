import React from 'react';

const tagClasses = "text-white text-xs font-roboto-mono px-2 py-0.5 rounded-md";

function ProjectCard({ project }) {
    const tagBg = "bg-[#272727]";

    return (
        <div className="rounded-lg shadow-xl overflow-hidden w-full aspect-square relative transition-all duration-300 group cursor-pointer">
            <img 
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover" 
            />
            <div 
                className="absolute inset-0 
                           bg-gradient-to-t 
                           from-black/70 to-transparent 
                           opacity-100 transition-opacity duration-300"
            />
            <div className="absolute inset-x-0 bottom-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"> 
                <h3 className="text-xl font-poetsen text-white mb-1">{project.title}</h3>
                <p className="text-sm text-gray-300 mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-2">{project.tags.map((tag, index) => (
                    <span key={index} className={`${tagBg} ${tagClasses}`}>{tag}</span>
                ))}</div>
            </div>
        </div>
    )
}

export default ProjectCard;