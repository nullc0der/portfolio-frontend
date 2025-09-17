import classnames from "classnames";
import { useState, useRef, useEffect } from "react";
import { ArrowLeft, ArrowRight, X } from "react-feather";

import { type GallerySource } from "@/pages/Projects/projectsInfo";
import { useClickOutside, useSwipe } from "@/lib/hooks";
import styles from "./Gallery.module.css";

type GalleryContentPopupProps = {
  currentContent: GallerySource | null;
  onClickNextPrev: (isNext: boolean) => void;
  onClose: () => void;
};

export default function GalleryContentPopup({
  currentContent,
  onClose,
  onClickNextPrev,
}: GalleryContentPopupProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [showContent, setShowContent] = useState<boolean>(false);
  const [prevContent, setPrevContent] = useState<GallerySource | null>(null);

  if (prevContent?.id !== currentContent?.id) {
    if (currentContent) {
      setShowContent(true);
    }
    setPrevContent(currentContent);
  }

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

  const onSwipeLeft = () => {
    onClickNextPrev(true);
  };

  const onSwipeRight = () => {
    onClickNextPrev(false);
  };

  const swipeHandlers = useSwipe(onSwipeLeft, onSwipeRight);

  const hideGalleryContent = () => {
    if (currentContent) {
      setShowContent(false);
    }
  };

  useClickOutside(ref, hideGalleryContent);

  const onAnimationEnd = () => {
    if (!showContent) {
      onClose();
    }
  };

  return (
    <div
      className={classnames(
        styles.popupContainer,
        "d-flex",
        "align-items-center",
        "justify-content-center",
        { show: currentContent, hide: !currentContent }
      )}
      {...swipeHandlers}
    >
      <div
        className={classnames("gallery-content", {
          show: showContent,
          hide: !showContent,
        })}
        ref={ref}
        onAnimationEnd={onAnimationEnd}
      >
        <div className="close-btn" onClick={hideGalleryContent}>
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
        {currentContent &&
          (currentContent.type === "image" ? (
            <img src={currentContent.src} />
          ) : (
            <iframe
              className="youtube-iframe"
              src={currentContent.iframeSource}
              title="YouTube video player"
            />
          ))}
      </div>
    </div>
  );
}
