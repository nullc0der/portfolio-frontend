import { useState } from "react";
import classnames from "classnames";

import Skill from "@/components/Skill";

import ProjectCard from "./ProjectCard";
import styles from "./Projects.module.css";

// TODO: Add project details and image gallery

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
          filteredSkills.map((skill) => (
            <div key={skill} className="skills">
              <Skill showAdd={false} onClickSkill={toggleSkills} />
            </div>
          ))
        ) : (
          <p>
            No skill filtered, click on a skill on project to filter projects
            with that skill
          </p>
        )}
      </div>
      <ProjectCard
        filteredSkills={filteredSkills}
        toggleSkills={toggleSkills}
      />
      <ProjectCard
        filteredSkills={filteredSkills}
        toggleSkills={toggleSkills}
      />
      <ProjectCard
        filteredSkills={filteredSkills}
        toggleSkills={toggleSkills}
      />
    </div>
  );
}
