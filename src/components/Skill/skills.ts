import android from "@/assets/skill_logos/android.svg";
import cloudflare from "@/assets/skill_logos/cloudflare.svg";
import dart from "@/assets/skill_logos/dart.svg";
import django from "@/assets/skill_logos/django.svg";
import docker from "@/assets/skill_logos/docker.svg";
import expressjs from "@/assets/skill_logos/expressjs.svg";
import fastapi from "@/assets/skill_logos/fastapi.svg";
import flask from "@/assets/skill_logos/flask.svg";
import flutter from "@/assets/skill_logos/flutter.svg";
import git from "@/assets/skill_logos/git.svg";
import java from "@/assets/skill_logos/java.svg";
import js from "@/assets/skill_logos/js.svg";
import kotlin from "@/assets/skill_logos/kotlin.svg";
import linux from "@/assets/skill_logos/linux.svg";
import mongodb from "@/assets/skill_logos/mongodb.svg";
import nextjs from "@/assets/skill_logos/nextjs.svg";
import nginx from "@/assets/skill_logos/nginx.svg";
import psql from "@/assets/skill_logos/postgresql.svg";
import python from "@/assets/skill_logos/python.png";
import reactjs from "@/assets/skill_logos/reactjs.svg";
import ts from "@/assets/skill_logos/ts.svg";
import btc from "@/assets/skill_logos/btc.svg";
import doge from "@/assets/skill_logos/doge.svg";
import monero from "@/assets/skill_logos/monero.svg";
import jotai from "@/assets/skill_logos/jotai-mascot.png";
import redux from "@/assets/skill_logos/redux.svg";
import celery from "@/assets/skill_logos/celery.svg";
import drf from "@/assets/skill_logos/drf.png";
import mui from "@/assets/skill_logos/mui.svg";
import bootstrap from "@/assets/skill_logos/bootstrap.svg";
import tailwind from "@/assets/skill_logos/tailwindcss.svg";

export type Skill = {
  id: number;
  name: string;
  imageSrc: string;
};

const skillObjects: Skill[] = [
  { id: 0, name: "Android", imageSrc: android },
  { id: 1, name: "Cloudflare", imageSrc: cloudflare },
  { id: 2, name: "Dart", imageSrc: dart },
  { id: 3, name: "Django", imageSrc: django },
  { id: 4, name: "Docker", imageSrc: docker },
  { id: 5, name: "ExpressJS", imageSrc: expressjs },
  { id: 6, name: "FastAPI", imageSrc: fastapi },
  { id: 7, name: "Flask", imageSrc: flask },
  { id: 8, name: "Flutter", imageSrc: flutter },
  { id: 9, name: "Git", imageSrc: git },
  { id: 10, name: "Java", imageSrc: java },
  { id: 11, name: "JavaScript", imageSrc: js },
  { id: 12, name: "Kotlin", imageSrc: kotlin },
  { id: 13, name: "Linux", imageSrc: linux },
  { id: 14, name: "MongoDB", imageSrc: mongodb },
  { id: 15, name: "NextJS", imageSrc: nextjs },
  { id: 16, name: "Nginx", imageSrc: nginx },
  { id: 17, name: "PostgresSQL", imageSrc: psql },
  { id: 18, name: "Python", imageSrc: python },
  { id: 19, name: "React", imageSrc: reactjs },
  { id: 20, name: "TypeScript", imageSrc: ts },
  { id: 21, name: "Bitcoin", imageSrc: btc },
  { id: 22, name: "Dogecoin", imageSrc: doge },
  { id: 23, name: "Monero", imageSrc: monero },
  { id: 24, name: "Redux", imageSrc: redux },
  { id: 25, name: "Jotai", imageSrc: jotai },
  { id: 26, name: "Celery", imageSrc: celery },
  { id: 27, name: "DRF", imageSrc: drf },
  { id: 28, name: "MUI", imageSrc: mui },
  { id: 29, name: "Bootstrap", imageSrc: bootstrap },
  { id: 30, name: "Tailwind", imageSrc: tailwind },
];

export const getSkillObjs = (skills: string[]) => {
  const skillObjs: Skill[] = [];
  for (const skill of skills) {
    const skl = skillObjects.find(
      (s) => s.name.toLowerCase() === skill.toLowerCase()
    );
    if (skl) {
      skillObjs.push(skl);
    }
  }
  return skillObjs;
};
