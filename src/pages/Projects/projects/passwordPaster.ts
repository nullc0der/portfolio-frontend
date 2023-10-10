import screenshot0 from "@/assets/password_paster_images/screenshot_0.png";

import { type Project } from ".";

const passwordPaster: Project = {
  id: 0,
  name: "Password Paster Browser Plugin",
  timePeriod: {
    start: "Aug 2023",
    end: "Aug 2023",
  },
  summary:
    "Frequently, we encounter websites that restrict pasting within their password input fields, like the login pages of banking sites. This compels us to manually input the password, which can be even more laborious when dealing with lengthy passwords from a password manager. Moreover, certain websites necessitate entering the password twice during sign-up, demanding a repetitive manual entry. This is where this extension becomes useful.",
  keyFeatures: [
    {
      title: "Password Pasting Workaround",
      feature:
        "Enables pasting passwords into websites that restrict this action in their password input fields.",
    },
    {
      title: "Banking Site Compatibility",
      feature:
        "Specifically designed to work with login pages of banking websites and similar platforms with pasting restrictions.",
    },
    {
      title: "Duplication Entry Streamlining",
      feature:
        "Streamlines the process of entering passwords twice during sign-up on websites that require this, eliminating the need for repetitive manual input.",
    },
    {
      title: "User-Friendly Interface",
      feature: "Provides an intuitive and user-friendly interface.",
    },
  ],
  worksDone: [],
  primarySkills: ["JavaScript", "Git"],
  skills: ["JavaScript", "Git"],
  githubLinks: [
    {
      title: "Password Paster",
      href: "https://github.com/nullc0der/password-paster",
    },
  ],
  gallerySources: [
    {
      id: 0,
      type: "image",
      src: screenshot0,
    },
  ],
};

export default passwordPaster;
