import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, Calendar } from "react-feather";

import Skill from "@/components/Skill";
import { getSkillObjs } from "@/components/Skill/skills";
import Card from "@/components/Card";

import { type Project } from "./projects";

type ProjectCardProps = {
  project: Project;
  filteredSkills: string[];
  toggleSkills: (skill: string) => void;
};

export default function ProjectCard({
  project,
  filteredSkills,
  toggleSkills,
}: ProjectCardProps) {
  const navigate = useNavigate();
  return (
    <div
      className="project-card"
      onClick={() => {
        navigate(`/projects/${project.id}`);
      }}
    >
      <div className="time-period">
        <Calendar size={14} className="feather-icon" />{" "}
        <span>
          {project.timePeriod.start} - {project.timePeriod.end}
        </span>
      </div>
      <Card classNames="main-content">
        <h2 className="title">{project.name}</h2>
        <p className="summary">{project.summary}</p>
        <div className="d-flex flex-col">
          <h4 className="skills-label">Primary Skills</h4>
          <div className="d-flex flex-wrap align-items-center">
            {getSkillObjs(project.primarySkills).map((skill) => (
              <Skill
                key={skill.id}
                skill={skill}
                showAdd={!filteredSkills.includes(skill.name.toLowerCase())}
                onClickSkill={toggleSkills}
              />
            ))}
          </div>
        </div>
        <div className="d-flex align-items-center">
          <div className="details-btn">
            <Link to={`/projects/${project.id}`}>
              <span>Details</span>
              <ArrowRight size={18} className="feather-icon" />
            </Link>
          </div>
        </div>
      </Card>
    </div>
  );
}
