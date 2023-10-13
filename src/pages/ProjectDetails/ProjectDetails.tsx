import { useEffect } from "react";
import { useParams } from "react-router-dom";
import classnames from "classnames";

import projects from "@/pages/Projects/projects";
import Gallery from "@/components/Gallery";
import Skill from "@/components/Skill";
import { getSkillObjs } from "@/components/Skill/skills";

import styles from "./ProjectDetails.module.css";
import { GitHub } from "react-feather";

export default function ProjectDetails() {
  const { id } = useParams();

  useEffect(() => {
    return () => {
      document.body.classList.remove("modal-open");
    };
  }, []);

  const project = projects.find((p) => p.id === Number(id));

  return (
    !!project && (
      <div className={classnames(styles.container, "page-container")}>
        <h1>{project.name}</h1>
        <p>{project.summary}</p>
        <div className="d-flex flex-col">
          <h2>Key Features</h2>
          {project.keyFeatures.map((feature, index) => (
            <div className="project-feature" key={index}>
              <h4>{feature.title}</h4>
              <p>{feature.feature}</p>
            </div>
          ))}
        </div>
        {!!project.worksDone.length && (
          <div className="d-flex flex-col">
            <h2>Responsibilities</h2>
            <ul className="responsibilities">
              {project.worksDone.map((workDone, index) => (
                <li key={index}>{workDone}</li>
              ))}
            </ul>
          </div>
        )}
        <div className="d-flex flex-col">
          <h2>Skills Used</h2>
          <div className="d-flex flex-wrap align-items-center">
            {getSkillObjs(project.skills).map((skill) => (
              <Skill key={skill.id} changeIconOnHover={false} skill={skill} />
            ))}
          </div>
        </div>
        <div className="d-flex flex-col">
          <h2>Project Source Codes</h2>
          {project.githubLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="gh-link"
            >
              <GitHub size={18} className="feather-icon" />
              {link.title}
            </a>
          ))}
        </div>
        {!!project.gallerySources.length && (
          <div className="d-flex flex-col">
            <h2>Project Gallery</h2>
            <Gallery contents={project.gallerySources} />
          </div>
        )}
      </div>
    )
  );
}
