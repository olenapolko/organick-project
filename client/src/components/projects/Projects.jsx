import { useState, useEffect } from "react";
import './Projects.scss';
import { getAllProjects } from "../../fetches/fetches";
import { ProjectsCard } from "../projectsCard/ProjectsCard";

export function Projects(){
    const [projects, setProjects] = useState([]);

    useEffect(() => {
      getAllProjects().then((result) => {
        setProjects(result.data);
      });
    }, []);
    
    return(
        <section className="projects">
            <div className="projects__container">
                <div className="projects__content">
                {projects.map((project) => (
                    <ProjectsCard
                    key={project.id}
                    imagePath={project.imagePath} 
                    title={project.title}
                    subtitle={project.subtitle}
                    />
                ))}
                </div>
            </div>
        </section>
    )
}