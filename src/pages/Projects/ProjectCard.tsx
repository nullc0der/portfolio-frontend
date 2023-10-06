import { Calendar } from "react-feather";

import Skill from "@/components/Skill";
import Card from "@/components/Card";

type ProjectCardProps = {
  filteredSkills: string[];
  toggleSkills: (skill: string) => void;
};

export default function ProjectCard({
  filteredSkills,
  toggleSkills,
}: ProjectCardProps) {
  return (
    <div className="project-card">
      <div className="time-period">
        <Calendar size={14} className="feather-icon" />{" "}
        <span>Mar 2016 - Apr 2017</span>
      </div>
      <Card classNames="main-content">
        <h2 className="title">Project title</h2>
        <p className="summary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ex
          ipsa quam a dolor maiores fugit voluptates, temporibus consequatur
          illum facere incidunt provident. Dicta nemo beatae voluptas ex in
          accusantium.
        </p>
        <h4 className="skills-label">Primary Skills</h4>
        <div className="d-flex align-items-center">
          <Skill
            showAdd={!filteredSkills.includes("python")}
            onClickSkill={toggleSkills}
          />
        </div>
      </Card>
    </div>
  );
}
