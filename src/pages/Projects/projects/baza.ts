import screenshot0 from "@/assets/baza_images/screenshot_1.png";
import screenshot1 from "@/assets/baza_images/screenshot_2.png";
import screenshot2 from "@/assets/baza_images/screenshot_3.png";
import screenshot3 from "@/assets/baza_images/screenshot_4.png";
import screenshot4 from "@/assets/baza_images/screenshot_5.png";
import screenshot5 from "@/assets/baza_images/screenshot_6.png";

import { Project } from ".";

const baza: Project = {
  id: 4,
  name: "Baza Foundation",
  timePeriod: {
    start: "Mar 2018",
    end: "Aug 2020",
  },
  summary:
    'Baza.Foundation is a groundbreaking platform designed to distribute universal basic income in cryptocurrency, complete with a fully functional web wallet and a native cryptocurrency known as "BAZA." This innovative system not only addresses the distribution of cryptocurrency-based basic income but also fosters a sense of community and engagement among users.',
  keyFeatures: [
    {
      title: "Universal Basic Income Distribution",
      feature:
        "This platform has a comprehensive system for the distribution of basic income in cryptocurrency, with users undergoing a rigorous verification process to ensure authenticity, making it an effective means of income distribution to real individuals.",
    },
    {
      title: "Social Engagement Features",
      feature:
        "To promote user interaction and community building, It has features that allowed users to create groups, make posts, and engage in comments. Additionally, a real-time messaging feature was implemented, enhancing the platform's social dynamics.",
    },
    {
      title: "Authentication Service",
      feature:
        "It has a robust authentication service equipped with modern features, including social login and multi-factor authentication (MFA). This service ensured secure and seamless user access to the platform, enhancing overall user experience.",
    },
    {
      title: "Custom Cryptocurrency",
      feature:
        'It has fork of TurtleCoin to create the native cryptocurrency "BAZA" specifically for this platform. This custom cryptocurrency served as the primary medium for basic income distribution within the ecosystem.',
    },
  ],
  worksDone: [
    "Collaborated in the development of the platform to distribute basic income in cryptocurrency with a fully functional web wallet.",
    "Implemented the groups, posts, comment and the real-time messaging feature.",
    "Designed the basic income signup and distribution system.",
    "Designed and built the authentication service with all modern features like social login, Multi Factor authentication.",
    "Forked and customized TurtleCoin for BAZA coin.",
    "Set up a mail server, GitLab, and taiga server for internal use, following the client's requirements.",
  ],
  primarySkills: ["Django", "React", "Redux", "Python", "Javascript"],
  skills: [
    "Django",
    "React",
    "Redux",
    "Python",
    "Javascript",
    "Docker",
    "Cloudflare",
    "Nginx",
    "Celery",
    "DRF",
  ],
  githubLinks: [
    { title: "Frontend", href: "https://github.com/nullc0der/baza-frontend" },
    { title: "Backend", href: "https://github.com/nullc0der/baza-backend" },
  ],
  gallerySources: [
    { id: 0, type: "image", src: screenshot0 },
    { id: 1, type: "image", src: screenshot1 },
    { id: 2, type: "image", src: screenshot2 },
    { id: 3, type: "image", src: screenshot3 },
    { id: 4, type: "image", src: screenshot4 },
    { id: 5, type: "image", src: screenshot5 },
  ],
};

export default baza;
