import classnames from "classnames";
import { Download } from "react-feather";

import Button from "@/components/Button";

import resume from "@/assets/resume/resume.pdf";
import resumeSVG from "@/assets/resume/hiring_resume.svg";
import styles from "./Resume.module.css";

export default function Resume() {
  return (
    <div className={classnames(styles.container, "page-container")}>
      <div className="resume-illustration-section">
        <img src={resumeSVG} />
      </div>
      <div className="d-flex flex-col resume-download-section">
        <p>Click on following link to download my latest resume</p>
        <a
          href={resume}
          download="prasanta-kakati-resume.pdf"
          target="_blank"
          rel="noreferrer"
        >
          <Button classNames="download-button">
            <Download size={16} className="feather-icon" />
            <span>Download Resume</span>
          </Button>
        </a>
      </div>
    </div>
  );
}
