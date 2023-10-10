import screenshot1 from "@/assets/epc_images/screenshot_1.png";
import screenshot2 from "@/assets/epc_images/screenshot_2.png";
import screenshot3 from "@/assets/epc_images/screenshot_3.png";
import screenshot4 from "@/assets/epc_images/screenshot_4.png";
import screenshot5 from "@/assets/epc_images/screenshot_5.png";
import screenshot6 from "@/assets/epc_images/screenshot_6.png";
import screenshot7 from "@/assets/epc_images/screenshot_7.png";
import screenshot8 from "@/assets/epc_images/screenshot_8.png";
import screenshot9 from "@/assets/epc_images/screenshot_9.png";
import screenshot10 from "@/assets/epc_images/screenshot_10.png";
import screenshot11 from "@/assets/epc_images/screenshot_11.png";
import screenshot12 from "@/assets/epc_images/screenshot_12.png";
import screenshot13 from "@/assets/epc_images/screenshot_13.png";
import screenshot14 from "@/assets/epc_images/screenshot_14.png";
import screenshot15 from "@/assets/epc_images/screenshot_15.png";
import screenshot16 from "@/assets/epc_images/screenshot_16.png";
import screenshot17 from "@/assets/epc_images/screenshot_17.png";

import { type Project } from ".";

const epc: Project = {
  id: 1,
  name: "Ekata Pool Companion",
  timePeriod: {
    start: "May 2022",
    end: "Aug 2023",
  },
  summary:
    "Ekata Pool Companion is a versatile cryptocurrency mining application that caters to both mobile (Android) and desktop (Linux, Windows) platforms using the Flutter framework. This application serves as a user-friendly tool for mining CPU and GPU mineable cryptocurrencies, making the process accessible to both beginners and experienced miners.",
  keyFeatures: [
    {
      title: "Multi-Platform Compatibility",
      feature:
        "It is available on Android mobile devices and desktop computers running Linux and Windows operating systems, ensuring a wide user base.",
    },
    {
      title: "Mining Backend Integration",
      feature:
        "It is seamlessly integrated with three powerful mining backends, namely xmrig, xmrigcc, and ccminer, allowing users to choose the most suitable option for their mining needs.",
    },
    {
      title: "Configuration Wizard",
      feature:
        "To simplify the setup process, there is a user-friendly miner configuration generation wizard. This wizard guides users through the configuration process step by step, making it easy for even novices to get started with cryptocurrency mining.",
    },
    {
      title: "Cloud Configuration Storage",
      feature:
        "It offers the convenience of saving mining configurations to the cloud. This feature ensures that users can easily access their configurations from any device, streamlining the mining experience and enhancing portability.",
    },
  ],
  worksDone: [
    "Developed a mobile(Android) and desktop(Linux, Windows) app in Flutter, which acts as an easy-to-use cryptocurrency mining tool for CPU and GPU mineable coins.",
    "Integrated xmrig, xmrigcc, and ccminer as mining backends.",
    "Built the miner configuration generation wizard.",
    "Built the option to save configurations to the cloud for easy access.",
    "Developed a REST API with ExpressJS that acts as the cloud store. It provides functionality for users to save and retrieve miner configurations for quick start. Additionally, it serves the predefined pool configurations which user can choose through the wizard.",
    "Added endpoint in the API to log user activity for usage analysis.",
  ],
  skills: [
    "Flutter",
    "Dart",
    "Kotlin",
    "Android",
    "ExpressJS",
    "TypeScript",
    "MongoDB",
    "Docker",
    "Git",
  ],
  primarySkills: [
    "Flutter",
    "ExpressJS",
    "MongoDB",
    "Dart",
    "Kotlin",
    "TypeScript",
  ],
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
    { id: 11, type: "image", src: screenshot12 },
    { id: 12, type: "image", src: screenshot13 },
    { id: 13, type: "image", src: screenshot14 },
    { id: 14, type: "image", src: screenshot15 },
    { id: 15, type: "image", src: screenshot16 },
    { id: 16, type: "image", src: screenshot17 },
    {
      id: 17,
      type: "video",
      thumbnailSource: screenshot1,
      iframeSource:
        "https://www.youtube.com/embed/I-M3rqxxglQ?si=yajHPNnA9zmVKsVO",
    },
  ],
  githubLinks: [
    {
      title: "Main App",
      href: "https://github.com/nullc0der/ekata-pool-companion",
    },
    {
      title: "Backend",
      href: "https://github.com/nullc0der/ekata-pool-companion-backend",
    },
  ],
};

export default epc;
