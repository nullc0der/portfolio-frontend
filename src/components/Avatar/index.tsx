import { useEffect, useRef } from "react";
import * as classnames from "classnames";

import avatarImage from "@/assets/avatar.png";
import styles from "./Avatar.module.css";

type AvatarProps = { classNames?: string };

export default function Avatar({ classNames }: AvatarProps) {
  const imageContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const handleMouseMove = (e: MouseEvent) => {
    const imageContainer = imageContainerRef.current;
    if (imageContainer) {
      const imageContainerBoundingClientRect =
        imageContainer.getBoundingClientRect();
      const imageContainerCenter = {
        x:
          imageContainerBoundingClientRect.left +
          imageContainerBoundingClientRect.width / 2,
        y:
          imageContainerBoundingClientRect.top +
          imageContainerBoundingClientRect.height / 2,
      };
      const translateValues = {
        x:
          (e.clientX - imageContainerCenter.x) /
          imageContainerBoundingClientRect.width,
        y:
          (e.clientY - imageContainerCenter.y) /
          imageContainerBoundingClientRect.height,
      };
      imageContainer.animate(
        {
          scale: 1.1,
          translate: `${translateValues.x}% ${translateValues.y}%`,
        },
        { duration: 500, fill: "forwards", easing: "ease" }
      );
    }
  };

  const handleMouseLeave = () => {
    const imageContainer = imageContainerRef.current;
    if (imageContainer) {
      imageContainer.animate(
        {
          scale: 1,
          translate: 0,
        },
        { duration: 500, fill: "forwards", easing: "ease" }
      );
    }
  };

  return (
    <div
      className={classnames(styles.container, classNames)}
      ref={imageContainerRef}
    >
      <img src={avatarImage} className="avatar-img" />
    </div>
  );
}
