import { type PropsWithChildren } from "react";
import classnames from "classnames";

import styles from "./Button.module.css";

type ButtonProps = {
  type?: "reset" | "button" | "submit";
  disabled?: boolean;
  classNames?: string;
  onClick?: () => void;
} & PropsWithChildren;

export default function Button({
  type = "button",
  disabled,
  classNames,
  onClick,
  children,
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={classnames(styles.container, classNames)}
    >
      {children}
    </button>
  );
}
