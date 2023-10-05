import { useEffect, useState } from "react";
import classnames from "classnames";
import { Send, Trash2 } from "react-feather";

import { supabase } from "@/lib/supabase";
import Button from "@/components/Button";

import SuccessMessage from "./SuccessMessage";

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

export default function ContactForm() {
  const [contactFormValues, setContactFormValues] = useState<ContactFormValues>(
    contactFormInitialValues
  );

  const [contactFormErrorValues, setContactFormErrorValues] =
    useState<ContactFormErrorValues>(contactFormInitialErrorValues);

  const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);

  useEffect(() => {
    if (showSuccessMessage) {
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3 * 1000);
    }
  }, [showSuccessMessage]);

  const onChangeInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setContactFormValues({
      ...contactFormValues,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitContactForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formErrors = validateContactForm(
      ["email", "subject", "message"],
      ["email", "phone"]
    );
    if (Object.keys(formErrors).length) {
      setContactFormErrorValues(formErrors);
    } else {
      setContactFormErrorValues(contactFormInitialErrorValues);
      setShowSuccessMessage(true);
      await supabase.from("contact_form").insert({
        name: contactFormValues.name || null,
        email: contactFormValues.email,
        phone_number: contactFormValues.phone || null,
        subject: contactFormValues.subject,
        message: contactFormValues.message,
      });
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
    const emailRegEx =
      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/g;
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
            <span className="error-text">{contactFormErrorValues.subject}</span>
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
            <span className="error-text">{contactFormErrorValues.message}</span>
          )}
        </div>
        <SuccessMessage
          show={showSuccessMessage}
          sendersName={contactFormValues.name}
        />
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
  );
}
