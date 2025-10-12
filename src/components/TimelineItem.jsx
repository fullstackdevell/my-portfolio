import React from 'react';

// Tailwind utility classes
const baseText = "font-roboto-mono text-white";
const accentColor = "text-purple"; 

/**
 * Renders a single, styled entry for the vertical roadmap/timeline.
 */
function TimelineItem ({ title, company, duration, description, position }) {
    return (
        <div className="flex mb-8">
            {/* Left Side: Timeline Connector and Dot */}
            <div className="flex flex-col items-center mr-6">
                <div className={`w-4 h-4 rounded-full bg-purple border-2 border-white/50 z-10 transition duration-300`}></div>
                <div className={`w-px flex-grow bg-gray-600`}></div>
            </div>
            
            {/* Right Side: Content Box */}
            <div className="flex-grow pb-6">
                <h3 className={`text-xl font-bold ${baseText} ${accentColor} mb-1`}>{title}</h3>
                <p className={`text-sm font-semibold ${baseText} text-gray-400 mb-1`}>{company} | {duration}</p>
                <p className={`text-base ${baseText} mb-2`}>{position}</p>
                <p className={`text-sm ${baseText} text-gray-300`}>{description}</p>
            </div>
        </div>
    );
}

export default TimelineItem;
