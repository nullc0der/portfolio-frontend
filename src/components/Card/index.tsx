import { type PropsWithChildren } from "react";
import * as classnames from "classnames";

import styles from "./Card.module.css";

type CardProps = {
  classNames?: string;
} & PropsWithChildren;

export default function Card({ classNames, children }: CardProps) {
  return (
    <div className={classnames(styles.container, classNames)}>{children}</div>
  );
}
