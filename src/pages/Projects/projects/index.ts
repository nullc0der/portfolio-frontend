import baza from "./baza";
import bazaPoolServices from "./bazaPoolServices";
import ekata from "./ekata";
import ekataAuth from "./ekataauth";
import epc from "./epc";
import epg from "./epg";
import hmppc from "./hmppc";
import passwordPaster from "./passwordPaster";

type TimePeriod = {
  start: string;
  end: string;
};

type GallerySourceBase = {
  id: number;
};

export type GallerySource = GallerySourceBase &
  (
    | {
        type: "image";
        src: string;
      }
    | {
        type: "video";
        iframeSource: string;
        thumbnailSource: string;
      }
  );

type KeyFeature = {
  title: string;
  feature: string;
};

type GithubLinks = {
  title: string;
  href: string;
};

export type Project = {
  id: number;
  name: string;
  timePeriod: TimePeriod;
  summary: string;
  keyFeatures: KeyFeature[];
  worksDone: string[];
  skills: string[];
  primarySkills: string[];
  gallerySources: GallerySource[];
  githubLinks: GithubLinks[];
};

const projects: Project[] = [
  passwordPaster,
  epc,
  epg,
  hmppc,
  bazaPoolServices,
  baza,
  ekataAuth,
  ekata,
];

export default projects;
