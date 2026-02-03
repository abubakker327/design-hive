"use client";

import { ProjectCard } from "./project-card";

const projects = [
  {
    title: "Lumina Scent",
    category: "Branding & E-commerce",
    imageClass: "bg-gradient-to-br from-indigo-900 to-blue-800",
  },
  {
    title: "Apex Finance",
    category: "Fintech Web App UI/UX",
    imageClass: "bg-gradient-to-bl from-emerald-900 to-teal-800",
  },
  {
    title: "Pulse Energy",
    category: "Marketing Website",
    imageClass: "bg-gradient-to-tr from-orange-900 to-amber-800",
  },
  {
    title: "Velvet Interiors",
    category: "Portfolio & Identity",
    imageClass: "bg-gradient-to-tl from-rose-900 to-pink-800",
  },
];

export function ProjectsSection() {
  return (
    <section className="py-24 md:py-32 bg-black text-white">
      <div className="container px-6 mx-auto">
        <div className="mb-20 max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight mb-8">
            We just don’t design. <br />
            We create <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">impact</span>.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, index) => (
             <ProjectCard key={index} {...project} />
          ))}
        </div>
        
        <div className="flex justify-center mt-24">
           <button className="group px-10 py-5 border border-white/20 rounded-full text-lg hover:bg-white hover:text-black transition-all uppercase tracking-widest text-sm font-medium">
             View All Projects
             <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
           </button>
        </div>
      </div>
    </section>
  );
}
