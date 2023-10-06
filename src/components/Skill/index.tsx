import classnames from "classnames";

import pythonLogo from "@/assets/python.png";
import { Minus, Plus } from "react-feather";

import styles from "./Skill.module.css";

type SkillProps = {
  changeIconOnHover?: boolean;
  showAdd?: boolean;
  onClickSkill?: (skill: string) => void;
  classNames?: string;
};

export default function Skill({
  classNames,
  changeIconOnHover = true,
  showAdd = true,
  onClickSkill,
}: SkillProps) {
  return (
    <div
      className={classnames(styles.container, classNames)}
      onClick={() => {
        typeof onClickSkill === "function" && onClickSkill("python");
      }}
    >
      <img className="skill-img" src={pythonLogo} />
      {!!changeIconOnHover &&
        (showAdd ? (
          <Plus size={28} className="add-to-filter" />
        ) : (
          <Minus size={28} className="add-to-filter" />
        ))}
      <p className="skill-name">Python</p>
    </div>
  );
}
