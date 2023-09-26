import { useEffect, useState } from "react";
import * as classnames from "classnames";

import styles from "./TypeWriter.module.css";

type TypeWriterProps = {
  lines: string[];
  classNames?: string;
  infinite?: boolean;
  lineCompleteDelay?: number;
  typingDelay?: number;
  deletingDelay?: number;
  cursor?: string;
};

type WriterProps = {
  line: string;
  deleteLine: boolean;
  lineCompleteDelay: number;
  typingDelay: number;
  deletingDelay: number;
  cursor: string;
  onFinishShowingLine: () => void;
};

function Writer({
  line,
  deleteLine,
  lineCompleteDelay,
  typingDelay,
  deletingDelay,
  cursor,
  onFinishShowingLine,
}: WriterProps) {
  const [textVisible, setTextVisible] = useState<string>("");
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  useEffect(() => {
    const timeOutDelay =
      textVisible === line && deleteLine
        ? lineCompleteDelay
        : isDeleting
        ? deletingDelay
        : typingDelay;
    if (textVisible === line && deleteLine) {
      setIsDeleting(true);
    }
    if (!textVisible.length && isDeleting) {
      setIsDeleting(false);
      onFinishShowingLine();
    }
    const timeOutId = setTimeout(() => {
      setTextVisible(
        !isDeleting
          ? line.substring(0, textVisible.length + 1)
          : line.substring(0, textVisible.length - 1)
      );
    }, timeOutDelay);
    return () => {
      clearTimeout(timeOutId);
    };
  }, [
    line,
    deleteLine,
    textVisible,
    isDeleting,
    onFinishShowingLine,
    lineCompleteDelay,
    deletingDelay,
    typingDelay,
  ]);

  return (
    <p className="text">
      {textVisible}
      <span className="cursor">{cursor}</span>
    </p>
  );
}

export default function TypeWriter({
  lines,
  classNames,
  infinite = true,
  cursor = "|",
  lineCompleteDelay = 2000,
  typingDelay = 100,
  deletingDelay = 50,
}: TypeWriterProps) {
  const [currentLineIndex, setCurrentLineIndex] = useState<number>(0);

  const onFinishShowingLine = () => {
    setCurrentLineIndex(
      currentLineIndex === lines.length - 1
        ? infinite
          ? 0
          : currentLineIndex
        : currentLineIndex + 1
    );
  };

  return (
    <div className={classnames(styles.container, classNames)}>
      <Writer
        line={lines[currentLineIndex]}
        deleteLine={!infinite ? currentLineIndex !== lines.length - 1 : true}
        cursor={cursor}
        lineCompleteDelay={lineCompleteDelay}
        typingDelay={typingDelay}
        deletingDelay={deletingDelay}
        onFinishShowingLine={onFinishShowingLine}
      />
    </div>
  );
}
