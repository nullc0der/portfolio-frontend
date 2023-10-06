import classnames from "classnames";

import pythonLogo from "@/assets/python.png";
import { Minus, Plus } from "react-feather";

import styles from "./Skill.module.css";

type SkillProps = {
  showAdd: boolean;
  onClickSkill: (skill: string) => void;
  classNames?: string;
};

export default function Skill({
  classNames,
  showAdd,
  onClickSkill,
}: SkillProps) {
  return (
    <div
      className={classnames(styles.container, classNames)}
      onClick={() => {
        onClickSkill("python");
      }}
    >
      <img className="skill-img" src={pythonLogo} />
      {showAdd ? (
        <Plus size={28} className="add-to-filter" />
      ) : (
        <Minus size={28} className="add-to-filter" />
      )}
      <p className="skill-name">Python</p>
    </div>
  );
}
