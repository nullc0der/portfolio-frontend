import { useEffect, useState } from "react";
import classnames from "classnames";

type SuccessMessageProps = {
  show: boolean;
  sendersName: string;
};

export default function SuccessMessage({
  show,
  sendersName,
}: SuccessMessageProps) {
  const [render, setRender] = useState<boolean>(false);

  useEffect(() => {
    if (show) {
      setRender(true);
    }
  }, [show]);

  const onAnimationEnd = () => {
    if (!show) {
      setRender(false);
    }
  };

  return (
    render && (
      <div
        className={classnames(
          "d-flex",
          "success-message",
          { show: show },
          { hide: !show }
        )}
        onAnimationEnd={onAnimationEnd}
      >
        <p>
          Thank you {sendersName} for considering me for your software
          development needs. I look forward to connecting with you and exploring
          the possibilities of working together. Your interest and inquiries are
          greatly appreciated!
        </p>
      </div>
    )
  );
}
