"use client";

import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section className="py-24 md:py-32 bg-black text-white overflow-hidden relative">
      {/* Background Noise/Gradient */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-neutral-900/20 to-transparent pointer-events-none" />

      <div className="container px-6 mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 md:gap-24">
          
          {/* Abstract Visual Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2 relative aspect-square md:aspect-[4/3] lg:aspect-square"
          >
             <div className="w-full h-full rounded-2xl overflow-hidden border border-white/10 relative bg-neutral-900/50">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent z-10" />
                
                {/* Abstract Shapes */}
                <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-blue-500/30 rounded-full blur-[80px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-1/2 h-1/2 bg-purple-500/30 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: "1s" }} />
                
                {/* 3D-like Element Placeholder (CSS only) */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 md:w-48 md:h-48 border border-white/20 rounded-full flex items-center justify-center backdrop-blur-md bg-white/5">
                        <div className="w-16 h-16 md:w-24 md:h-24 bg-gradient-to-tr from-blue-400 to-purple-500 rounded-full shadow-[0_0_30px_rgba(79,70,229,0.5)]" />
                    </div>
                </div>
             </div>
          </motion.div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold tracking-tighter mb-8 leading-tight"
            >
              At Design Hive, we craft powerful <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">digital identities</span> by blending strategy, creativity, and technology.
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6 text-lg text-white/70 leading-relaxed"
            >
              <p>
                Our mission is to help ambitious brands stand out, connect with the right audience, and grow faster in the digital world. We believe great design is not just about aesthetics — it’s about clarity, performance, and impact.
              </p>
              <p>
                Whether you’re launching a startup or scaling a business, we build digital experiences that work for you 24/7.
              </p>
              
              <div className="pt-6">
                 <button className="group flex items-center gap-2 text-white font-medium hover:text-blue-400 transition-colors">
                    <span>Learn more about us</span>
                    <span className="block transition-transform group-hover:translate-x-1">→</span>
                 </button>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
