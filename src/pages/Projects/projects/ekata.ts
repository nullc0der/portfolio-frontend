import { type Project } from ".";

const ekata: Project = {
  id: 7,
  name: "Ekata Social",
  timePeriod: {
    start: "Aug 2016",
    end: "Mar 2018",
  },
  summary:
    "Ekata Social is a dynamic social media platform powered by Django, offering a rich array of features, from user profiles and real-time messaging to member directories and group functionalities. This comprehensive platform was meticulously crafted, from inception to deployment, to provide users with a secure, engaging, and immersive social networking experience.",
  keyFeatures: [
    {
      title: "Comprehensive Social Media Platform",
      feature:
        "This is a feature-rich social media platform that encompasses user profiles, real-time messaging, member directories, and group functionalities. From the ground up, our platform was designed to foster meaningful connections and interactions among users.",
    },
    {
      title: "Real-Time Messaging with Django Channels",
      feature:
        "To facilitate seamless communication, It has real-time messaging functionality using Django Channels. This feature enriched user engagement and provided an instant messaging experience within the platform.",
    },
    {
      title: "Utilization of Django's Strengths",
      feature:
        "Leveraging Django's built-in authentication system, Object-Relational Mapping (ORM), templating system, and form handling, it is a robust and secure application. Django's powerful tools enabled us to create a reliable and scalable social media platform.",
    },
  ],
  worksDone: [
    "Developed and launched the social media platform using Django, from concept to deployment, with feature like user profiles, real-time messaging, member directories, groups.",
    "Implemented real-time messaging functionality using Django Channels.",
    "Leveraged Django built in authentication system, ORM, templating system and forms to build a robust and secure application.",
  ],
  primarySkills: ["Django", "Celery", "Docker", "Python", "Javascript"],
  skills: [
    "Django",
    "Celery",
    "Docker",
    "Python",
    "Javascript",
    "Nginx",
    "Git",
    "Bootstrap",
  ],
  githubLinks: [
    {
      title: "Ekata Platform",
      href: "https://github.com/nullc0der/ekataplatform",
    },
  ],
  gallerySources: [],
};

export default ekata;
