import { useState } from "react";
import classnames from "classnames";

import Skill from "@/components/Skill";
import { getSkillObjs } from "@/components/Skill/skills";

import ProjectCard from "./ProjectCard";
import projects from "./projects";
import styles from "./Projects.module.css";

// TODO: content, SMTP, analytics, hosting

export default function Projects() {
  const [filteredSkills, setFilteredSkills] = useState<string[]>([]);

  const toggleSkills = (skill: string) => {
    const skills = filteredSkills.includes(skill)
      ? filteredSkills.filter((s) => s !== skill)
      : [...filteredSkills, skill];
    setFilteredSkills(skills);
  };

  return (
    <div className={classnames(styles.container, "page-container")}>
      <div className="d-flex flex-col align-items-end justify-content-center filtered-skills">
        <h3>Filtered Skills</h3>
        {filteredSkills.length ? (
          <div className="d-flex align-items-center">
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
            No skill filtered, click on a skill on project to filter projects
            with that skill
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
