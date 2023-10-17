import classnames from "classnames";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Play } from "react-feather";

import { type GallerySource } from "@/pages/Projects/projects";
import GalleryContentPopup from "./GalleryContentPopup";
import styles from "./Gallery.module.css";

type GalleryProps = {
  contents: GallerySource[];
  classNames?: string;
};

export default function Gallery({ contents, classNames }: GalleryProps) {
  const [currentContent, setCurrentContent] = useState<GallerySource | null>(
    null
  );

  useEffect(() => {
    document.body.classList.remove("modal-open");
    if (currentContent) {
      document.body.classList.add("modal-open");
    }
  }, [currentContent]);

  const onClickNextPrev = (isNext: boolean) => {
    if (currentContent) {
      const currentIndex = contents.indexOf(currentContent);
      const nextIndex = isNext
        ? currentIndex + 1 === contents.length
          ? 0
          : currentIndex + 1
        : currentIndex - 1 === -1
        ? contents.length - 1
        : currentIndex - 1;
      setCurrentContent(contents[nextIndex]);
    }
  };

  return (
    <div className={classnames(styles.container, classNames)}>
      {contents.map((content) => (
        <div
          className="content"
          key={content.id}
          onClick={(e) => {
            e.stopPropagation();
            setCurrentContent(content);
          }}
        >
          <img
            src={
              content.type === "image" ? content.src : content.thumbnailSource
            }
          />
          {content.type === "video" && (
            <div className="video-play-btn">
              <Play size={18} />
            </div>
          )}
        </div>
      ))}
      {createPortal(
        <GalleryContentPopup
          currentContent={currentContent}
          onClose={() => {
            setCurrentContent(null);
          }}
          onClickNextPrev={onClickNextPrev}
        />,
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        document.getElementById("portalRoot")!
      )}
    </div>
  );
}
