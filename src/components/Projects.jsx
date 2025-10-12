import React from "react";
import ProjectCard from "./ProjectCard";
import projects from "../data/projects";

function Projects({ id }) {
    return (
        <section className="py-20" id={id}>
            <h2 className="font-roboto-mono text-2xl tracking-wide mb-8">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    ) 
}

export default Projects;