import screenshot1 from "@/assets/epg_images/screenshot_1.gif";
import screenshot2 from "@/assets/epg_images/screenshot_2.png";
import screenshot3 from "@/assets/epg_images/screenshot_3.png";
import screenshot4 from "@/assets/epg_images/screenshot_4.png";
import screenshot5 from "@/assets/epg_images/screenshot_5.png";
import screenshot6 from "@/assets/epg_images/screenshot_6.png";
import screenshot7 from "@/assets/epg_images/screenshot_7.png";
import screenshot8 from "@/assets/epg_images/screenshot_8.png";
import screenshot9 from "@/assets/epg_images/screenshot_9.png";
import screenshot10 from "@/assets/epg_images/screenshot_10.png";
import screenshot11 from "@/assets/epg_images/screenshot_11.png";
import screenshot12 from "@/assets/epg_images/screenshot_12.jpg";
import screenshot13 from "@/assets/epg_images/screenshot_13.jpg";

import { type Project } from ".";

const epg: Project = {
  id: 1,
  name: "Ekata Crypto Payment Processor",
  timePeriod: {
    start: "Oct 2021",
    end: "May 2022",
  },
  summary:
    "This is a robust cryptocurrency payment processor designed for seamless integration into third-party applications. This payment processor empowers businesses and developers to effortlessly handle cryptocurrency payments, enhancing the flexibility and utility of their platforms.",
  keyFeatures: [
    {
      title: "Client Dashboard",
      feature:
        "It has a feature-rich client dashboard that offers users an intuitive interface for monitoring payment statuses, creating projects, managing payout addresses, and reviewing payout logs, among other essential functionalities. This dashboard provides users with a comprehensive overview of their payment operations.",
    },
    {
      title: "Versatile Payment Form",
      feature:
        "It has a versatile payment form that can be easily integrated into any web application using JavaScript code. This flexibility enables businesses to accept cryptocurrency payments with minimal development effort.",
    },
    {
      title: "Payment Processing Enhancements",
      feature:
        "To optimize payment processing, it has backend utilities and background jobs. These additions improve the efficiency and reliability of the payment processing system, ensuring timely and accurate transactions.",
    },
    {
      title: "Helper Libraries",
      feature:
        "This project includes dedicated helper library in Python and Node.js, designed to simplify the work of client developers. These libraries facilitate the creation of payment form IDs and the verification of payments on the client-side backend, streamlining the integration process.",
    },
  ],
  worksDone: [
    "Collaborated on the development of a cryptocurrency payment processor which can be integrated in 3rd party application.",
    "Developed the client dashboard where the user can check the status of payment, create projects, add payout address, and check the log of payouts, among other features.",
    "Implemented the payment form that can be integrated in any web app, using JavaScript code.",
    "Created a REST API for payment forms and client dashboard.",
    "Added backend utilities and background jobs for payment processing.",
    "Deployed and maintained the application using docker.",
  ],
  skills: [
    "FastAPI",
    "Python",
    "React",
    "TypeScript",
    "Docker",
    "Nginx",
    "Cloudflare",
    "Bitcoin",
    "Monero",
    "Dogecoin",
  ],
  primarySkills: ["FastAPI", "React", "Python", "TypeScript"],
  gallerySources: [
    { id: 0, type: "image", src: screenshot1 },
    { id: 1, type: "image", src: screenshot2 },
    { id: 2, type: "image", src: screenshot3 },
    { id: 3, type: "image", src: screenshot4 },
    { id: 4, type: "image", src: screenshot5 },
    { id: 5, type: "image", src: screenshot6 },
    { id: 6, type: "image", src: screenshot7 },
    { id: 7, type: "image", src: screenshot8 },
    { id: 8, type: "image", src: screenshot9 },
    { id: 9, type: "image", src: screenshot10 },
    { id: 10, type: "image", src: screenshot11 },
    {
      id: 11,
      type: "video",
      iframeSource:
        "https://www.youtube.com/embed/EvjD0iOonxs?si=s2NJHuzIy-2H-NKS",
      thumbnailSource: screenshot4,
    },
    {
      id: 12,
      type: "video",
      iframeSource:
        "https://www.youtube.com/embed/WE2XWU3eq7A?si=-hWHpAKn973yOyOa",
      thumbnailSource: screenshot2,
    },
    {
      id: 13,
      type: "video",
      iframeSource:
        "https://www.youtube.com/embed/di3PbEkdxnA?si=bisr0rvtS-_mGevf",
      thumbnailSource: screenshot12,
    },
    {
      id: 14,
      type: "video",
      iframeSource:
        "https://www.youtube.com/embed/YVK8IHKDODg?si=nzuYoyjZQYwwhYtt",
      thumbnailSource: screenshot13,
    },
  ],
  githubLinks: [
    {
      title: "Backend",
      href: "https://github.com/nullc0der/ekata-gateway-processor-backend",
    },
    {
      title: "Landing",
      href: "https://github.com/nullc0der/ekata-gateway-processor-landing",
    },
    {
      title: "Client Frontend",
      href: "https://github.com/nullc0der/ekata-gateway-processor-client-frontend",
    },
    {
      title: "Payment Form",
      href: "https://github.com/nullc0der/ekata-gateway-processor-form",
    },
    {
      title: "Python Helper Library",
      href: "https://github.com/nullc0der/ekata-gateway-processor-helper-python",
    },
    {
      title: "Node Helper Library",
      href: "https://github.com/nullc0der/ekata-gateway-processor-backend-helper-node",
    },
    {
      title: "React Form Component",
      href: "https://github.com/nullc0der/ekata-gateway-processor-react-component",
    },
  ],
};

export default epg;
