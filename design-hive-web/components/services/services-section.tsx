"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Branding",
    subtitle: "Your Strategic Brand Partner",
    description: "We build strong, memorable brand identities that help businesses stand out, connect emotionally with their audience, and grow with confidence. From startups to established brands, we craft visual systems that clearly communicate your story and values.",
    gradient: "from-blue-900 to-indigo-900"
  },
  {
    title: "Web Design & Dev",
    subtitle: "High-Converting Digital Experiences",
    description: "We design and develop fast, modern, and conversion-focused websites that turn visitors into real customers. Whether it’s a business site, startup landing page, or eCommerce store — we build for performance, scalability, and results.",
    gradient: "from-purple-900 to-fuchsia-900"
  },
  {
    title: "Digital Marketing",
    subtitle: "Growth That’s Driven by Data",
    description: "We help businesses get discovered, attract the right audience, and generate consistent leads through data-driven digital marketing and powerful SEO strategies that improve visibility, traffic, and conversions.",
    gradient: "from-emerald-900 to-teal-900"
  },
  {
    title: "UI/UX Design",
    subtitle: "Designs That Users Love",
    description: "We create intuitive, engaging, and beautiful user interfaces that solve problems and delight users. We focus on usability, accessibility, and creating a seamless journey for your customers.",
    gradient: "from-rose-900 to-pink-900"
  }
];

export function ServicesSection() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["2%", "-75%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-black text-white">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        
        {/* Section Header (Fixed visually but part of the scroll container context) */}
        <div className="absolute top-8 left-6 md:top-20 md:left-20 z-10 pointer-events-none">
           <h2 className="text-xl font-bold uppercase tracking-widest text-white/50 border border-white/10 px-4 py-2 rounded-full backdrop-blur-md bg-black/20">Our Services</h2>
        </div>

        <motion.div style={{ x }} className="flex gap-8 md:gap-16 pl-6 md:pl-20 pr-20">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index + 1} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ServiceCard({ title, subtitle, description, gradient, index }: any) {
  return (
    <div className={cn("group relative h-[80vh] w-[85vw] md:w-[45vw] lg:w-[35vw] flex-shrink-0 overflow-hidden rounded-[2rem] border border-white/10 bg-neutral-900 transition-transform duration-300 hover:scale-[1.02]")}>
       {/* Background Gradient */}
       <div className={cn("absolute inset-0 bg-gradient-to-br opacity-40 group-hover:opacity-60 transition-opacity duration-500", gradient)} />
       
       <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-between z-10">
          <div className="flex justify-between items-start">
            <span className="text-3xl md:text-4xl font-bold text-white/20">0{index}</span>
            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                <span className="text-xl">↗</span>
            </div>
          </div>
          
          <div>
            <h3 className="text-base md:text-lg text-white/70 font-medium mb-2">{subtitle}</h3>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-white leading-tight">{title}</h2>
            <p className="text-sm md:text-base text-white/60 leading-relaxed text-balance border-t border-white/10 pt-4 md:pt-6">
                {description}
            </p>
          </div>
       </div>
    </div>
  );
}
