import * as classnames from "classnames";

import ContactSVG from "@/assets/contact.svg";
import Card from "@/components/Card";

import ContactForm from "./ContactForm";
import styles from "./Contact.module.css";

//TODO: link with backend, rate limit

type CardContent = {
  header: string;
  content: string;
};

const cardContents: CardContent[] = [
  {
    header: "Project Inquiry",
    content: `If you have a project idea and would like to discuss how I can contribute, please provide some initial details. 
      I'm excited to hear about your project and explore how I can help you achieve your goals.`,
  },
  {
    header: "Collaboration Opportunities",
    content: `I'm open to collaborating on interesting software development projects,
     whether it's building a new product, contributing to an open-source initiative, or any other exciting venture.
      Let's explore potential collaborations together.`,
  },
  {
    header: "General Inquiries",
    content: `Have questions or just want to chat about software development, technology trends,
     or industry insights? Feel free to drop me a message. I'm always up for a good tech conversation!`,
  },
  {
    header: "Seeking Assistance",
    content: `If you're facing challenges in your current project or need help with a coding problem,
     I'm here to assist. Provide details about the issue you're encountering,
      and I'll do my best to guide you toward a solution.`,
  },
];

export default function Contact() {
  return (
    <div className={classnames(styles.container, "page-container")}>
      <div className="pure-g">
        <div className="pure-u-1 pure-u-md-1-2 d-flex flex-col welcome">
          <h1>Hey There,</h1>
          <h4>
            Whether you&apos;re interested in hiring me for a project,
            discussing a collaboration, or seeking assistance with your software
            development needs, I&apos;m here to connect with you. Feel free to
            reach out, and I&apos;ll get back to you as soon as possible.
          </h4>
        </div>
        <div className="pure-u-1 pure-u-md-1-2 d-flex flex-col contact-img-wrapper">
          <img src={ContactSVG} className="contact-img" />
        </div>
      </div>
      <div className="pure-g">
        {cardContents.map((cardContent, index) => (
          <div className="pure-u-1 pure-u-md-1-2 d-flex flex-col" key={index}>
            <Card classNames="connect-card">
              <h2>{cardContent.header}</h2>
              <p>{cardContent.content}</p>
            </Card>
          </div>
        ))}
      </div>
      <ContactForm />
    </div>
  );
}
