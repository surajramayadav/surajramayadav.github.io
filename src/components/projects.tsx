// Example usage in another file (e.g., Projects.tsx)
import { assets } from "../../public/assets";
import ProjectShowcase from "./projectShowCase";

const projectData = {
  title: "Cycle Vita PKU",
  techStack: ["React Native", "TypeScript", "ReactJs", "NodeJs", "ExpressJs", "MongoDB","Elasticsearch", "Redis"],
  description: `<span class="font-semibold">Cycle Vita PKU
  </span> - a modern, microservice-based  
  <span class="italic">health management application built using a robust stack including</span> React Native, TypeScript, Node.js, and MongoDB. It ensures secure HTTP request authentication, 
  <span class="italic">efficient data retrieval with Elasticsearch, real-time processing via Redis, and seamless web/mobile experiences powered by ReactJS and ExpressJS.`,
  details: `Cycle Vita PKU helps you manage your PKU by sending medication reminders and allowing you to upload health reports. Stay organized and connected with your healthcare team.`,
  link: "https://apps.apple.com/us/app/cycle-vita-pku/id6737810019",
  images: [
    {
      src: assets.cycleVitaWeb,
      alt: "Dashboard",
      className: "rounded-3xl w-80 h-48 object-cover shadow-lg z-10",
    },
    {
        src: assets.cycleVitaM2,
      alt: "Mobile",
      className: "rounded-2xl w-32 h-64 object-cover absolute left-[-60px] top-12 shadow-md z-20 hidden md:block",
    },
    {
        src: assets.cycleVitaPlay,
      alt: "Cat",
      className: "rounded-2xl w-28 h-28 object-cover absolute bottom-[-40px] left-24 shadow-md z-30 hidden md:block",
    },
    {
        src: assets.cycleVitaMobile,
      alt: "Landscape",
      className: "rounded-2xl w-32 h-64 object-cover absolute right-[-60px] top-16 shadow-md z-20 hidden md:block",
    },
  ],
};

export default function Projects() {
  return (
    <>
    <ProjectShowcase {...projectData} />
    <ProjectShowcase {...projectData} />
    </>
  
  );
}