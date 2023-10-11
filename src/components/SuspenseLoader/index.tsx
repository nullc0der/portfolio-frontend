import classnames from "classnames";

import loaderSVG from "@/assets/loader.svg";
import styles from "./SuspenseLoader.module.css";

export default function SuspenseLoader() {
  return (
    <div className={classnames(styles.container, "page-container")}>
      <img src={loaderSVG} />
      <span>Loading necessary content</span>
    </div>
  );
}
