import classnames from "classnames";
import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { ArrowLeft, ArrowRight, X } from "react-feather";

import useClickOutside from "@/lib/hooks/useClickOutSide";
import styles from "./Gallery.module.css";

export type GalleryContent = {
  type: "image" | "video";
  contentSrc: string;
};

type GalleryProps = {
  contents: GalleryContent[];
  classNames?: string;
};

type GalleryContentPopupProps = {
  onClickNextPrev: (isNext: boolean) => void;
  currentContent?: GalleryContent;
  onClose: () => void;
};

function GalleryContentPopup({
  currentContent,
  onClose,
  onClickNextPrev,
}: GalleryContentPopupProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "Escape":
          onClose();
          break;
        case "ArrowRight":
          onClickNextPrev(true);
          break;
        case "ArrowLeft":
          onClickNextPrev(false);
          break;
        default:
          break;
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [onClickNextPrev, onClose]);

  useClickOutside(ref, onClose);

  return (
    <div
      className={classnames(
        styles.popupContainer,
        "d-flex",
        "align-items-center",
        "justify-content-center"
      )}
    >
      <div className="gallery-content" ref={ref}>
        <div className="close-btn" onClick={onClose}>
          <X size={24} />
        </div>
        <div
          className="next-btn"
          onClick={() => {
            onClickNextPrev(true);
          }}
        >
          <ArrowRight size={24} />
        </div>
        <div
          className="prev-btn"
          onClick={() => {
            onClickNextPrev(false);
          }}
        >
          <ArrowLeft size={24} />
        </div>
        {!!currentContent && <img src={currentContent.contentSrc} />}
        {/* <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/I-M3rqxxglQ?si=FSgdg2YSiYNn4cIb"
          title="YouTube video player"
          style={{ border: 0 }}
        ></iframe> */}
      </div>
    </div>
  );
}

export default function Gallery({ contents, classNames }: GalleryProps) {
  const [currentContent, setCurrentContent] = useState<GalleryContent | null>(
    null
  );

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
      {contents.map((content, index) => (
        <div className="content" key={index}>
          <img
            src={content.contentSrc}
            onClick={(e) => {
              e.stopPropagation();
              setCurrentContent(content);
            }}
          />
        </div>
      ))}
      {!!currentContent &&
        createPortal(
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
