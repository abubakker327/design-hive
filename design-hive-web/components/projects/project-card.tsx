"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef, MouseEvent } from "react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  category: string;
  imageClass: string;
  className?: string;
}

export function ProjectCard({ title, category, imageClass, className }: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 15, mass: 0.1 };
  const mouseX = useSpring(x, springConfig);
  const mouseY = useSpring(y, springConfig);

  function onMouseMove(e: MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (rect) {
      x.set(e.clientX - rect.left);
      y.set(e.clientY - rect.top);
    }
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      initial="initial"
      whileHover="hover"
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 }
      }}
      className={cn("relative group overflow-hidden rounded-3xl aspect-[4/3] cursor-none bg-neutral-900 border border-white/5", className)}
    >
      <motion.div
        variants={{
          hover: { scale: 1.05, filter: "blur(3px)" },
          initial: { scale: 1, filter: "blur(0px)" },
        }}
        transition={{ duration: 0.5, ease: "circOut" }}
        className={cn("absolute inset-0 z-0 bg-cover bg-center", imageClass)}
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500 z-10" />

      {/* Text Overlay */}
      <div className="absolute bottom-0 left-0 p-8 md:p-12 z-20 w-full">
        <h3 className="text-2xl md:text-4xl font-bold text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
          {title}
        </h3>
        <p className="text-white/70 text-lg translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-75 ease-out">
          {category}
        </p>
      </div>

      {/* Custom Cursor Element (Absolute relative to card) */}
      <motion.div
        style={{ left: mouseX, top: mouseY }}
        variants={{
          hover: { opacity: 1, scale: 1 },
          initial: { opacity: 0, scale: 0.5 },
        }}
        className="absolute w-28 h-28 bg-white text-black rounded-full flex items-center justify-center font-bold text-sm tracking-wider pointer-events-none z-30 -translate-x-1/2 -translate-y-1/2 shadow-xl"
      >
        VIEW WORK
      </motion.div>
    </motion.div>
  );
}
