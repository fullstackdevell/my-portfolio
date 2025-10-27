import React, { useState } from "react";

const initialExperienceData = [
  {
    category: ["Coding", "Marketing"],
    title: "Google Developers Group Organizer",
    company: "Google Developers Group Warsaw",
    duration: "August 2025 - Present",
    position: "Community Organizer",
    description:
      "As a GDG Organizer, I help plan and run tech events like DevFest and SheDev, working to bring the local developer community together. I also get an amazing opportunity to attend all the speaker sessions and workshops organised by the community and get to learn from the best experts in tech. My main focus is marketing and communications — promoting events, driving ticket sales, and finding creative ways to reach new audiences. I also built the DevFest 2025 event website using no-code tools and contribute to the design and branding of our events. Through this role, I’ve learned how to network with industry experts, manage community engagement, and grow a tech community through meaningful connections.",
  },
  {
    category: ["Coding", "Design", "Project Management"],
    title: "HackYeah 2025, Europe's Largest On-Site Hackathon",
    company: "PROIDEA (HackYeah Organizer)",
    duration: "October 2025",
    position: "Developer & Designer",
    description:
      "Rapidly developed a functional prototype for an AI-assisted travel application in 24 hours, competing against 50+ projects in the travel category. Collaborated under extreme pressure to deliver all project components, including UX/UI design, code implementation, business strategy, and the final pitch deck. This experience enhanced skills in rapid prototyping, cross-functional collaboration, and concise presentation.",
  },
  {
    category: ["Coding", "Marketing"],
    title: "Google Developers Group On Campus PJATK Lead",
    company: "Google Developers Group On Campus PJATK",
    duration: "September 2024 - June 2025",
    position: "GDG Lead (marketing department)",
    description:
      "As a co-lead of the GDG club at PJATK, I actively participated in the recruitment of a 21-member team across development, marketing, and management departments. I collaborated with my co-leads and our core team to successfully organize and execute numerous tech events.In this role, I actively contributed to a university-focused mobile app by gathering feedback and turning it into documentation and UI/UX design. I also took the initiative to speak at various events, including a presentation on front-end technologies at SheDev Warsaw 2025. My experience also includes leading our team's volunteer efforts at major conferences like DevFest 2023 in Warsaw. I ensured volunteers performed their duties, everything ran smoothly, and small issues were resolved quickly. This role allowed me to develop a unique blend of technical skills, leadership, and community-building expertise.",
  },
  {
    category: ["Coding"],
    title: "Master's degree in Computer Science",
    company: "Polish-Japanese Academy of Information Technology",
    duration: "October 2023 - September 2025",
    position: "student",
    description:
      "Completed a Master's Degree in Computer Science, focusing on Software Engineering, Business Processes, and Database Management (NoSQL/Firebase). Developed a multi-device smart home automation system and a dedicated mobile application for device management, serving as my Master's Thesis project. Developed the front-end management application using SwiftUI, focusing on a clean, responsive UI/UX for device monitoring and control. Built a prototype of a smart pet door using Raspberry Pi, utilizing Python Script for hardware control and integrating facial recognition for secure access. Designed the cloud architecture to manage real-time communication between the mobile app and the Raspberry Pi. This involved Firebase Cloud Firestore for sending/receiving commands and reporting device status, Firebase Authentication for secure login, Firebase Storage for downloading and uploading images from the device. Demonstrated skills in full-stack thinking, from designing the UI/UX to implementing the functional prototype.",
  },
  {
    category: ["Coding"],
    title: "Full-Stack Development Bootcamp",
    company: "GoIT",
    duration: "January 2022 - February 2023",
    position: "student",
    description:
      "Developed responsive web design (HTML/CSS) skills, learned JavaScript, and built complex front-end projects using React (Hooks, Redux, Routing). Gained foundational back-end basics with Node.js and MongoDB for data handling. Successfully completed three real-world team projects, where I effectively applied Git/GitHub for version control and professional collaborative development, simulating a true coding environment.",
  },
  // marketing
  // {
  //     category: ["Marketing"],
  //     title: "Student Depot ambassador",
  //     company: "Student Depot",
  //     duration: "December 2023 - September 2025",
  //     position: "ambassador",
  //     description: "promoted Student Depot with creative content"
  // },
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
      <p className="text-sm font-medium text-gray-300 mb-2">
        {position} at {company}
      </p>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </div>
  </div>
);

const categories = ["Coding", "Marketing"];

const FilterButtons = ({ activeTab, setActiveTab }) => {
  const baseClasses =
    "font-roboto-mono text-sm font-medium py-2 px-3 rounded-md shadow-md transition duration-300 ease-in-out cursor-pointer focus:outline-none";

  const activeColor = "bg-[#5856D6] text-white hover:bg-[#4a47bc]";

  const inactiveColor =
    "bg-[#272727] text-gray-400 hover:bg-[#5856D6] hover:text-white";

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
  const [activeCategory, setActiveCategory] = useState("Coding");

  const filteredExperience = initialExperienceData.filter((item) =>
    item.category.includes(activeCategory)
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
