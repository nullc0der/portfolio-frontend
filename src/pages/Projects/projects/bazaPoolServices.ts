import { Project } from ".";

const bazaPoolServices: Project = {
  id: 4,
  name: "Baza Pool Services",
  timePeriod: {
    start: "Sep 2020",
    end: "Dec 2020",
  },
  summary:
    "Baza Pool Services is a dynamic voting system tailored for cryptocurrency mining pool hosting. This platform empowers users to actively engage in the selection process of cryptocurrency mining pool by casting their votes during monthly voting windows. Once each voting window concludes, the winning cryptocurrencies mining pool is granted hosting.",
  keyFeatures: [
    {
      title: "Monthly Voting Windows",
      feature:
        "This has a structured voting schedule, featuring monthly voting windows. During these time frames, users have the opportunity to cast their votes to determine the mining pools for the upcoming month. This recurring cycle ensures fairness and promotes continuous community involvement.",
    },
    {
      title: "Mining Pool Configuration and Deployment",
      feature:
        "In conjunction with the voting system, we configured and deployed multiple cryptocurrency mining pools. The winning pool is chosen based on the accumulated votes at the end of each voting window.",
    },
  ],
  worksDone: [
    "Developed the backend, admin interface, and user frontend for a voting system.",
    "Configured and deployed multiple crypto mining pool.",
  ],
  primarySkills: ["Django", "React", "Python", "Javascript", "Redux"],
  skills: [
    "Django",
    "React",
    "Python",
    "Javascript",
    "Docker",
    "Cloudflare",
    "Nginx",
    "Redux",
    "Celery",
    "DRF",
    "Git",
  ],
  githubLinks: [
    {
      title: "Frontend",
      href: "https://github.com/nullc0der/baza-pool-service-frontend",
    },
    {
      title: "Admin Frontend",
      href: "https://github.com/nullc0der/baza-pool-service-admin-frontend",
    },
    {
      title: "Backend",
      href: "https://github.com/nullc0der/baza-pool-services",
    },
  ],
  gallerySources: [],
};

export default bazaPoolServices;
