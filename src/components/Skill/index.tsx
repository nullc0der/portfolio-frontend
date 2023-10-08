import classnames from "classnames";

import { Minus, Plus } from "react-feather";

import { type Skill } from "./skills";
import styles from "./Skill.module.css";

type SkillProps = {
  skill: Skill;
  changeIconOnHover?: boolean;
  showAdd?: boolean;
  onClickSkill?: (skill: string) => void;
  classNames?: string;
};

export default function Skill({
  skill,
  classNames,
  changeIconOnHover = true,
  showAdd = true,
  onClickSkill,
}: SkillProps) {
  return (
    <div
      className={classnames(styles.container, classNames, {
        [styles.changeIcon]: changeIconOnHover,
      })}
      onClick={() => {
        typeof onClickSkill === "function" &&
          onClickSkill(skill.name.toLowerCase());
      }}
    >
      <img className="skill-img" src={skill.imageSrc} />
      {!!changeIconOnHover &&
        (showAdd ? (
          <Plus size={28} className="add-to-filter" />
        ) : (
          <Minus size={28} className="add-to-filter" />
        ))}
      <p className="skill-name">{skill.name}</p>
    </div>
  );
}
