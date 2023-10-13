import classnames from "classnames";
import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { ArrowLeft, ArrowRight, Play, X } from "react-feather";

import { type GallerySource } from "@/pages/Projects/projects";
import { useClickOutside, useSwipe } from "@/lib/hooks";
import styles from "./Gallery.module.css";

type GalleryProps = {
  contents: GallerySource[];
  classNames?: string;
};

type GalleryContentPopupProps = {
  currentContent: GallerySource;
  onClickNextPrev: (isNext: boolean) => void;
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

  const onSwipeLeft = () => {
    onClickNextPrev(true);
  };

  const onSwipeRight = () => {
    onClickNextPrev(false);
  };

  const swipeHandlers = useSwipe(onSwipeLeft, onSwipeRight);

  return (
    <div
      className={classnames(
        styles.popupContainer,
        "d-flex",
        "align-items-center",
        "justify-content-center"
      )}
      {...swipeHandlers}
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
        {currentContent.type === "image" ? (
          <img src={currentContent.src} />
        ) : (
          <iframe
            className="youtube-iframe"
            src={currentContent.iframeSource}
            title="YouTube video player"
          />
        )}
      </div>
    </div>
  );
}

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
