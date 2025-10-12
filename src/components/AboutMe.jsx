import React from "react";
import SkillsBox from "./SkillsBox";

const developerProfile = {
  codename: "VIKTORIIA_DEV",
  origin: "Warsaw, Poland (GDG Warsaw Member)",
  role: "Junior Full-Stack Developer",
  
  stack: {
    languages: ["JavaScript", "HTML/CSS", "SQL", "Swift/SwiftUI"],
    frameworks: ["React", "Node.js", "Express", "Next.js", "TailwindCSS"],
    databases: ["MongoDB", "PostgreSQL"],
  },
  
  traits: [
    "efficient builder",
    "user-centric solutions advocate",
    "former GDG Lead (Team Management)",
    "UI/UX design awareness",
    "Git/GitHub collaboration expert",
    "rapid learner",
  ],
  
  missionStatement: 
    "Transforming complex challenges into scalable, high-impact web and mobile solutions.",
  availability: "Available for challenging, real-world projects & high-impact developer roles.",
};

const profileCodeString = `const aboutMe: DeveloperProfile = ${JSON.stringify(developerProfile, null, 2).replace(/"/g, '')};`;

function AboutMe() {
    return (
        <section className="py-20">
            <h2 className="font-roboto-mono text-2xl tracking-wide mb-8">About Me</h2>
            <div className="flex justify-between items-start gap-x-12">
                <div className="max-w-2xl">
                    <p className="font-roboto text-base leading-relaxed">I'm a Full-Stack Developer focused on building efficient, user-centric web and mobile applications.
Starting with a strong foundation in core web technologies like HTML, CSS, and JavaScript, I now build full-stack services with modern frameworks. My technical focus is on creating scalable solutions using React, Node.js, and SQL/MongoDB, while simultaneously developing mobile applications using Swift/SwiftUI.
My experience extends beyond coding. As a former GDG Lead and current member of GDG Warsaw, I have practical experience in team management, UI/UX design, and community engagement. I'm comfortable using tools like Git and GitHub for team coding projects and collaborating effectively to achieve common goals.
Enthusiastic and responsible, I have a proven ability to grasp new technologies quickly. I am eager to apply my comprehensive skills—from development to management—to challenging, real-world projects and grow rapidly into a high-impact developer role.</p>
                    <button className="mt-8 bg-[#272727] font-roboto-mono text-sm font-medium py-2 px-3 rounded-md shadow-md hover:bg-purple transition duration-300">get in touch</button>
                </div>
                <div className="flex-shrink-0 w-full max-w-sm">
                    <SkillsBox />
                </div>
            </div>
        </section>
    )
}

export default AboutMe;