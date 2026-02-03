"use client";

import { cn } from "@/lib/utils";

const testimonials = [
  { name: "John Doe", company: "Acme Corp", text: "Design Hive transformed our brand identity completely." },
  { name: "Jane Smith", company: "StartUp Inc", text: "Incredible attention to detail and smooth animations." },
  { name: "Mike Johnson", company: "TechFlow", text: "The best design partner we've ever worked with." },
  { name: "Sarah Williams", company: "Creative Co", text: "Stunning visuals and seamless user experience." },
  { name: "David Brown", company: "NextGen", text: "Professional, creative, and timely delivery." },
  { name: "Emily Davis", company: "Artisan", text: "They truly understand how to capture a brand's essence." },
];

function TestimonialCard({ name, company, text }: any) {
  return (
    <div className="flex-shrink-0 w-80 md:w-96 p-8 bg-neutral-900/50 border border-white/10 rounded-2xl mx-4 backdrop-blur-md">
      <p className="text-lg text-white/80 mb-6 font-light leading-relaxed">"{text}"</p>
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500" />
        <div>
           <h4 className="font-bold text-white leading-none mb-1">{name}</h4>
           <p className="text-sm text-white/50 leading-none">{company}</p>
        </div>
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-black text-white overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6 mb-16 text-center">
         <h2 className="text-3xl md:text-5xl font-bold mb-4">Worked with growing brands</h2>
         <p className="text-white/60 text-lg">Driving real digital results for modern businesses.</p>
      </div>
      
      {/* Row 1 (Left) */}
      <div className="relative w-full mb-8">
         <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
         <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />
         
         <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
            {[...testimonials, ...testimonials].map((t, i) => (
               <TestimonialCard key={`t1-${i}`} {...t} />
            ))}
         </div>
      </div>
      
      {/* Row 2 (Right) */}
      <div className="relative w-full">
         <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
         <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />

         <div className="flex w-max animate-marquee-reverse hover:[animation-play-state:paused]">
            {[...testimonials, ...testimonials].map((t, i) => (
               <TestimonialCard key={`t2-${i}`} {...t} />
            ))}
         </div>
      </div>
    </section>
  );
}
