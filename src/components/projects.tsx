'use client'
import { assets } from "../../public/assets";
import ProjectShowcase from "./projectShowCase";

const cycleVita = {
  title: "Cycle Vita PKU",
  techStack: ["React Native", "TypeScript",'Push Notifications,Deep Linking'],
  description: `<span class="font-semibold">Cycle Vita PKU</span> – a modern, microservice-based  
<span class="italic">health management application built using a robust stack including</span> React Native, TypeScript, Node.js, and MongoDB.  
Worked as a <span class="italic">React Native developer focused on building secure, high-performance mobile experiences,</span> integrating seamless UI components and real-time features aligned with the app's broader microservice architecture.
`,
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

const squeezeMeIn={
  title: "SqueezeMeIn",
  techStack: ["React Native", "TypeScript","i18next",'Push Notifications','Deep Linking'],
  description: `<span class="font-semibold">Squezemeim</span> – an intuitive appointment management platform tailored for the Oman market, <span class="italic">built using a scalable stack including</span> React Native, TypeScript, Node.js, and MongoDB. It offers <span class="italic">real-time booking and notifications, multi-language support (Arabic/English), secure local payment integration,</span> and a seamless mobile experience for both clients and service providers.`,
  details: `Developed a comprehensive appointment management application tailored for the Oman market, similar to Fresha. The platform supports online booking, client management, and local payment integration, enabling salons and clinics to streamline operations and reduce no-shows.`,
  link: "",
  images: [
    {
      src: assets.squeezMeInWeb,
      alt: "Dashboard",
      className: "rounded-3xl w-80 h-48 object-cover shadow-lg z-10",
    },
    {
        src: assets.squeezMeInM3,
      alt: "Mobile",
      className: "rounded-2xl w-32 h-64 object-cover absolute left-[-60px] top-12 shadow-md z-20 hidden md:block",
    },
    {
        src: assets.squeezMeInM2,
      alt: "Cat",
      className: "rounded-2xl w-28 h-28 object-cover absolute bottom-[-40px] left-24 shadow-md z-30 hidden md:block",
    },
    {
        src: assets.squeezMeInM1,
      alt: "Landscape",
      className: "rounded-2xl w-32 h-64 object-cover absolute right-[-60px] top-16 shadow-md z-20 hidden md:block",
    },
  ],
}

const Titan={
  title: "Titan",
  techStack: ["React Native", "TypeScript","React.Js",'Node.Js','Express.js','Twillio','Google Map api','Mongodb','Docker','Aws EC2'],
  description: `<span class="font-semibold">Hotel Cab Booking System</span> – a mobile and web application designed to manage cab bookings within hotel premises in the US, <span class="italic">built using a modern stack including</span> React Native, React.js, Node.js, MongoDB, Redis, AWS, and Docker.  
<span class="italic">Implemented real-time booking management, driver assignment, and seamless user experiences across platforms,</span> optimized for hotel staff and guests.
`,
  details: 'Built a mobile and web-based cab booking system for hotel premises in the US using React Native, React.js, Node.js, MongoDB, Redis, AWS, and Docker. Enabled real-time ride management, driver assignments, and seamless cross-platform access. Designed for both hotel staff and guests to streamline in-premise transportation.',
  link: "https://hotels.titanurban.com/",
  images: [
    {
      src: assets.titanweb,
      alt: "Dashboard",
      className: "rounded-3xl w-80 h-48 object-cover shadow-lg z-10",
    },
    {
        src: assets.titanm,
      alt: "Mobile",
      className: "rounded-2xl w-32 h-64 object-cover absolute left-[-60px] top-12 shadow-md z-20 hidden md:block",
    },
    {
        src: assets.titanm,
      alt: "Cat",
      className: "rounded-2xl w-28 h-28 object-cover absolute bottom-[-40px] left-24 shadow-md z-30 hidden md:block",
    },
    {
        src: assets.titanm1,
      alt: "Landscape",
      className: "rounded-2xl w-32 h-64 object-cover absolute right-[-60px] top-16 shadow-md z-20 hidden md:block",
    },
  ],
}

export default function Projects() {
  return (
    <>
     <section className="min-h-screen bg-black flex flex-col justify-center items-center px-4 py-12">
      <h2 className="text-center text-3xl md:text-4xl font-mono text-white mb-12 tracking-widest">
        .../Projects ...
      </h2>
    <ProjectShowcase {...cycleVita} />
    <ProjectShowcase {...squeezeMeIn} />
    <ProjectShowcase {...Titan} />
    </section> 
    </>

  
  );
}