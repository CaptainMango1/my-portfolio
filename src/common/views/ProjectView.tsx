import exp from "constants";
import React, { useState } from "react";
import ProjectsData from "../data/ProjectsData";
import ProjectComponent from "../components/ProjectComponent";
import "../styles/projectview.css";

const ProjectView = () => {
  const [projects, setProjects] = useState(ProjectsData);

  return (
    <div>
      <h1 className="project-view-header">Projects</h1>

      <div className="project-panel">
        {projects.map((project) => {
          return <ProjectComponent project={project} />;
        })}
      </div>
    </div>
  );
};

export default ProjectView;
