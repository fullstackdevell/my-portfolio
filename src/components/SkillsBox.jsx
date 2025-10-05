import React from "react";

const skillTagClasses =
  "bg-[#272727] font-roboto-mono text-sm font-medium px-3 py-1 rounded-md shadow-md";

function SkillsBox() {
  const skills = ["HTML", "CSS", "JavaScript", "React", "TailwindCSS", "Node.js", "MongoDB", "Git", "Github", "UI/UX Design", "Figma", "Swift", "SwiftUI", "Firebase", "SQL"];

  return (
    <div className="max-w-sm">
      <h3 className="text-lg font-normal mb-4">My Skills</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
         <span key={index} className={skillTagClasses}>{skill}</span>   
        ))}
      </div>
    </div>
  );
}

export default SkillsBox;
