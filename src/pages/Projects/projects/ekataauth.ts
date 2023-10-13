import { Project } from ".";

const ekataAuth: Project = {
  id: 6,
  name: "Ekata Auth",
  timePeriod: {
    start: "Jun 2018",
    end: "Jul 2019",
  },
  summary:
    "EkataAuth is a robust authentication backend tailored for Ekata products, serving as a central authentication server for both Baza and Ekata platforms. This comprehensive service catered to all authentication-related needs, ensuring seamless and secure user experiences across the platforms.",
  keyFeatures: [
    {
      title: "Versatile Authentication Mechanisms",
      feature:
        "The authentication backend supported various authentication mechanisms, including username/password-based authentication and OAuth-based authentication for seamless integration with social platforms. This versatile approach allowed users to access the platforms using their preferred authentication methods.",
    },
    {
      title: "Seamless User Experience",
      feature:
        "With features like the forget password flow, email verification after registration, the ability to associate multiple email IDs with a user account, and the option to change the user password, we prioritized a smooth and user-friendly authentication experience, enhancing user engagement and satisfaction.",
    },
    {
      title: "Social Platform Integration",
      feature:
        "Leveraging Python-Social-Auth and Django-OAuth-Toolkit, we seamlessly integrated the service with various social platforms, enabling users to access their social platform avatars within the Ekata ecosystem. This integration enhanced the user experience and fostered a sense of familiarity within the platforms.",
    },
    {
      title: "Beta Site Invitations",
      feature:
        "The authentication backend included a feature to check whether a user was invited to beta sites, providing an exclusive and controlled environment for beta testing, ensuring a selective and targeted user base during the testing phase.",
    },
  ],
  worksDone: [
    "Spearheaded the development of a comprehensive authentication backend for Ekata products, serving as the central authentication server for Baza and Ekata platforms.",
    "Implemented versatile authentication mechanisms, including username/password-based authentication and OAuth integration for seamless login with social platforms.",
    "Orchestrated a seamless user experience through the integration of features such as the forget password flow, email verification upon registration, and the option to associate multiple email IDs with user accounts.",
    "Successfully integrated the service with various social platforms, leveraging Python-Social-Auth and Django-OAuth-Toolkit to enable users to access their social platform avatars within the Ekata ecosystem.",
    "Facilitated exclusive beta testing by incorporating a feature to verify user invitations to beta sites, ensuring a selective and controlled environment for testing purposes.",
  ],
  skills: ["Python", "Django", "DRF", "Celery", "Git"],
  primarySkills: ["Python", "Django", "DRF", "Celery"],
  githubLinks: [
    { title: "EkataAuth", href: "https://github.com/nullc0der/EkataAuth" },
  ],
  gallerySources: [],
};

export default ekataAuth;
