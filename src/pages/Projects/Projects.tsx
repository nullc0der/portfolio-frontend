import { useState } from "react";
import classnames from "classnames";

import Skill from "@/components/Skill";
import { getSkillObjs } from "@/components/Skill/skills";

import ProjectCard from "./ProjectCard";
import initialProjects, { type Project } from "./projectsInfo";
import styles from "./Projects.module.css";

export default function Projects() {
  const [filteredSkills, setFilteredSkills] = useState<string[]>([]);
  const [projects, setProjects] = useState<Project[]>(initialProjects);

  const toggleSkills = (skill: string) => {
    const skills = filteredSkills.includes(skill)
      ? filteredSkills.filter((s) => s !== skill)
      : [...filteredSkills, skill];
    let projects = initialProjects;
    if (skills.length) {
      projects = projects.filter((project) =>
        project.skills.some((skill) => skills.includes(skill.toLowerCase()))
      );
    }
    setFilteredSkills(skills);
    setProjects(projects);
  };

  return (
    <div className={classnames(styles.container, "page-container")}>
      <div className="d-flex flex-col align-items-end justify-content-center filtered-skills">
        <h3>Filtered Skills</h3>
        {filteredSkills.length ? (
          <div className="d-flex flex-wrap align-items-center">
            {getSkillObjs(filteredSkills).map((skill) => (
              <Skill
                skill={skill}
                showAdd={false}
                key={skill.id}
                onClickSkill={toggleSkills}
              />
            ))}
          </div>
        ) : (
          <p>
            Click on a skill listed on project to filter projects with that
            skill
          </p>
        )}
      </div>
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          filteredSkills={filteredSkills}
          toggleSkills={toggleSkills}
        />
      ))}
    </div>
  );
}
