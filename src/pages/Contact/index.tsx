import { useState } from "react";
import * as classnames from "classnames";
import { Send, Trash2 } from "react-feather";

import ContactSVG from "@/assets/contact.svg";
import Card from "@/components/Card";
import Button from "@/components/Button";

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

type ContactFormValues = typeof contactFormInitialValues;
type ContactFormErrorValues = {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
};

const contactFormInitialValues = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

const contactFormInitialErrorValues = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

export default function Contact() {
  const [contactFormValues, setContactFormValues] = useState<ContactFormValues>(
    contactFormInitialValues
  );

  const [contactFormErrorValues, setContactFormErrorValues] =
    useState<ContactFormErrorValues>(contactFormInitialErrorValues);

  const onChangeInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setContactFormValues({
      ...contactFormValues,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitContactForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formErrors = validateContactForm(
      ["email", "subject", "message"],
      ["email", "phone"]
    );
    if (Object.keys(formErrors).length) {
      setContactFormErrorValues(formErrors);
    } else {
      setContactFormErrorValues(contactFormInitialErrorValues);
      console.log(contactFormValues);
    }
  };

  const onResetContactForm = () => {
    setContactFormErrorValues(contactFormInitialErrorValues);
    setContactFormValues(contactFormInitialValues);
  };

  const validateContactForm = (
    requiredFields: (keyof ContactFormValues)[],
    validateFields: (keyof ContactFormValues)[]
  ): ContactFormErrorValues => {
    let errors: ContactFormErrorValues = {};
    const emailRegEx = /^[A-Za-z0-9_!#$%&'*+/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/g;
    const phoneRegEx = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s./0-9]*$/g;
    for (const field of validateFields) {
      if (
        field === "email" &&
        contactFormValues.email &&
        !emailRegEx.test(contactFormValues.email)
      ) {
        errors = { ...errors, email: "Email is not valid" };
      }
      if (
        field === "phone" &&
        contactFormValues.phone &&
        !phoneRegEx.test(contactFormValues.phone)
      ) {
        errors = { ...errors, phone: "Phone is not valid" };
      }
    }
    for (const field of requiredFields) {
      if (!contactFormValues[field]) {
        errors = { ...errors, [field]: "This field is required" };
      }
    }
    return errors;
  };

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
      <div className="contact-form">
        <h2 className="header">Contact Me</h2>
        <form
          className="form"
          onSubmit={onSubmitContactForm}
          onReset={onResetContactForm}
        >
          <div
            className={classnames("input-group", {
              "has-error": contactFormErrorValues.name?.length,
            })}
          >
            <label htmlFor="name" className="label">
              Your Name
            </label>
            <input
              className="input"
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              value={contactFormValues.name}
              onChange={onChangeInput}
            />
            {!!contactFormErrorValues.name?.length && (
              <span className="error-text">{contactFormErrorValues.name}</span>
            )}
          </div>
          <div
            className={classnames("input-group", {
              "has-error": contactFormErrorValues.email?.length,
            })}
          >
            <label htmlFor="email" className="label">
              Your Email ID
            </label>
            <input
              className="input"
              type="text"
              id="email"
              name="email"
              placeholder="Your Email ID"
              value={contactFormValues.email}
              onChange={onChangeInput}
            />
            {!!contactFormErrorValues.email?.length && (
              <span className="error-text">{contactFormErrorValues.email}</span>
            )}
          </div>
          <div
            className={classnames("input-group", {
              "has-error": contactFormErrorValues.phone?.length,
            })}
          >
            <label htmlFor="phone" className="label">
              Your Phone Number
            </label>
            <input
              className="input"
              type="text"
              id="phone"
              name="phone"
              placeholder="Your Phone Number"
              value={contactFormValues.phone}
              onChange={onChangeInput}
            />
            {!!contactFormErrorValues.phone?.length && (
              <span className="error-text">{contactFormErrorValues.phone}</span>
            )}
          </div>
          <div
            className={classnames("input-group", {
              "has-error": contactFormErrorValues.subject?.length,
            })}
          >
            <label htmlFor="subject" className="label">
              Subject
            </label>
            <input
              className="input"
              type="text"
              id="subject"
              name="subject"
              placeholder="Subject"
              value={contactFormValues.subject}
              onChange={onChangeInput}
            />
            {!!contactFormErrorValues.subject?.length && (
              <span className="error-text">
                {contactFormErrorValues.subject}
              </span>
            )}
          </div>
          <div
            className={classnames("input-group", {
              "has-error": contactFormErrorValues.message?.length,
            })}
          >
            <label htmlFor="message" className="label">
              Message
            </label>
            <textarea
              className="input"
              rows={8}
              id="message"
              name="message"
              placeholder="Message"
              value={contactFormValues.message}
              onChange={onChangeInput}
            />
            {!!contactFormErrorValues.message?.length && (
              <span className="error-text">
                {contactFormErrorValues.message}
              </span>
            )}
          </div>
          <div className="d-flex justify-content-end action-buttons">
            <Button type="submit" classNames="send-button">
              <Send size={16} className="feather-icon" />
              <span>Send</span>
            </Button>
            <Button type="reset" classNames="reset-button">
              <Trash2 size={16} className="feather-icon" />
              <span>Reset</span>
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
