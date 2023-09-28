import { Send, Linkedin, GitHub, Phone, Mail } from "react-feather";

import Avatar from "@/components/Avatar";
import TypeWriter from "@/components/TypeWriter";
import RotateToText from "@/components/RotateToText";

import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className="pure-g w-100">
        <div className="pure-u-1 pure-u-lg-1-2 d-flex info-texts-wrapper">
          <div className="info-texts">
            <TypeWriter
              lines={[
                'print("Hello, World!")',
                'console.log("Hello, World!")',
                'println("Hello, World!")',
                'System.out.println("Hello, World!");',
              ]}
              classNames="hello-world"
            />
            <h1 className="title">I am</h1>
            <RotateToText text="Prasanta Kakati" />
            <TypeWriter
              lines={["Full Stack Developer"]}
              infinite={false}
              classNames="position"
            />
            <div className="contact-buttons d-flex align-items-center">
              <button className="button contact-button">
                <Send size={18} className="feather-icon" />
                Contact Me
              </button>
              <a
                href="https://www.linkedin.com/in/prasantak/"
                target="_blank"
                className="contact-link"
                rel="noreferrer"
              >
                <Linkedin size={18} className="feather-icon" />
              </a>
              <a
                href="https://github.com/nullc0der/"
                target="_blank"
                className="contact-link"
                rel="noreferrer"
              >
                <GitHub size={18} className="feather-icon" />
              </a>
              <a href="tel:+919954707983" className="contact-link">
                <Phone size={18} className="feather-icon" />
              </a>
              <a
                href="mailto:prasantakakati1994@gmail.com"
                className="contact-link"
              >
                <Mail size={18} className="feather-icon" />
              </a>
            </div>
          </div>
        </div>
        <div className="pure-u-1 pure-u-lg-1-2 d-flex align-items-center justify-content-center avatar-wrapper">
          <Avatar />
        </div>
      </div>
    </div>
  );
}
