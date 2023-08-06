import { Project } from "../interfaces/Project";
import "../styles/project-card.css";

interface ProjectComponentProps {
  project: Project;
}

const ProjectComponent: React.FC<ProjectComponentProps> = (props) => {
  return (
    <div>
      <div className="project-card">
        <h2 className="project-card-title">{props.project.name}</h2>
        <a className="project-card-anker" href={props.project.githubUrl}>
          <img
            className="project-card-image"
            src={props.project.imagePath}
            alt="project"
            width={300}
            onClick={() => { }}
            // TODO: Add full page view of project
          />
        </a>
        <p className="project-card-desc">{props.project.description}</p>
        <a className="project-card-footer" href={props.project.addInfo} target="_blank">{props.project.addInfo}</a>
      </div>
    </div>
  );
};

export default ProjectComponent;
