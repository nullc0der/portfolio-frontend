import { useEffect, useState } from "react";
import classnames from "classnames";

import styles from "./RotateToText.module.css";
import { getRandomLengthChars } from "@/lib/utils";

type RotateToTextProps = {
  text: string;
  delay?: number;
  classNames?: string;
};

type RotateTextChunkProps = {
  textChunk: string;
  delay: number;
};

function RotateTextChunk({ textChunk, delay }: RotateTextChunkProps) {
  const [currentText, setCurrentText] = useState<string>("");
  const [textIndex, setTextIndex] = useState<number>(0);

  useEffect(() => {
    const charsToRotate = getRandomLengthChars();
    if (charsToRotate.length > textIndex) {
      const timeOutId = setTimeout(() => {
        setCurrentText(charsToRotate[textIndex]);
        setTextIndex(textIndex + 1);
      }, delay);
      return () => {
        clearTimeout(timeOutId);
      };
    } else {
      setCurrentText(textChunk);
    }
  }, [textChunk, delay, textIndex]);

  return <span>{currentText}</span>;
}

export default function RotateToText({
  text,
  delay = 30,
  classNames,
}: RotateToTextProps) {
  return (
    <p className={classnames(styles.container, classNames)}>
      {text.split("").map((x, i) => {
        return x === " " ? (
          <span key={i}> </span>
        ) : (
          <RotateTextChunk textChunk={x} delay={delay} key={i} />
        );
      })}
    </p>
  );
}
