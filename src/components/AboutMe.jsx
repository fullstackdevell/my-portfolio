import React from "react";
import SkillsBox from "./SkillsBox";

function AboutMe() {
  return (
    <section className="py-20">
      <h2 className="font-roboto-mono text-2xl tracking-wide mb-8">About Me</h2>
      <div className="flex justify-between items-start gap-x-12">
        <div className="max-w-2xl">
          <p className="font-roboto text-base leading-relaxed mb-6">
            I am a Full-Stack Developer with a Master’s degree in Computer
            Science, focused on building efficient, user-centric web and mobile
            applications.
          </p>
          <p className="font-roboto text-base leading-relaxed mb-6">
            I have a strong background in HTML, CSS, and JavaScript, I build scalable full-stack services using modern frameworks like React, Node.js, and SQL/MongoDB, and develop mobile applications with Swift/SwiftUI. I am comfortable collaborating
            effectively on team coding projects using Git and GitHub.
          </p>
          <p className="font-roboto text-base leading-relaxed mb-6">
            Beyond coding, I have strong leadership and community engagement
            skills. I gained valuable experience in team management, UI/UX
            design, and community engagement as a former Google Developer Group
            (GDG) Lead at my university. I now continue this commitment as a GDG
            Organizer for the GDG Warsaw chapter.
            </p>
            <p className="font-roboto text-base leading-relaxed">
              Highly enthusiastic and responsible, I have a proven ability to grasp new
            technologies quickly and have demonstrated initiative through
            successful hackathon participation. I am eager to apply my
            comprehensive skills, from development to organization, to
            challenging, real-world projects.
            </p>
          
          <button className="mt-8 bg-[#272727] font-roboto-mono text-sm font-medium py-2 px-3 rounded-md shadow-md hover:bg-purple transition duration-300">
            get in touch
          </button>
        </div>
        <div className="flex-shrink-0 w-full max-w-sm">
          <SkillsBox />
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
