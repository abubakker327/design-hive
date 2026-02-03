"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export function CTASection() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(values);
    alert("Message sent! (Simulation)");
  }

  return (
    <section className="py-24 md:py-32 bg-black text-white border-t border-white/10" id="contact">
       <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
             {/* Text Content */}
             <div>
                <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Ready to Start?</h2>
                <p className="text-xl text-white/60 mb-8 leading-relaxed">
                  No pressure. No sales pitch. Just a friendly strategy call where we understand your goals and guide you with the best possible solution — absolutely free.
                </p>
                
                <div className="flex flex-col gap-4 mt-12">
                   <div className="flex items-center gap-4 text-white/80">
                      <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">📧</div>
                      <div>
                        <p className="text-sm text-white/50">Email us at</p>
                        <p className="font-medium">hello@designhive.com</p>
                      </div>
                   </div>
                   <div className="flex items-center gap-4 text-white/80">
                      <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">📍</div>
                      <div>
                        <p className="text-sm text-white/50">Visit us</p>
                        <p className="font-medium">100 Design Street, Creative City</p>
                      </div>
                   </div>
                </div>
             </div>
             
             {/* Contact Form */}
             <div className="bg-white/5 p-8 md:p-10 rounded-3xl border border-white/10 backdrop-blur-sm">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                         <label className="text-sm font-medium text-white/70">Full Name</label>
                         <input 
                           {...register("name")}
                           className={cn("w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors", errors.name && "border-red-500")}
                           placeholder="John Doe"
                         />
                         {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
                      </div>
                      <div className="space-y-2">
                         <label className="text-sm font-medium text-white/70">Email Address</label>
                         <input 
                           {...register("email")}
                           className={cn("w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors", errors.email && "border-red-500")}
                           placeholder="john@example.com"
                         />
                         {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
                      </div>
                   </div>
                   
                   <div className="space-y-2">
                      <label className="text-sm font-medium text-white/70">Subject</label>
                      <input 
                        {...register("subject")}
                        className={cn("w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors", errors.subject && "border-red-500")}
                        placeholder="Project Inquiry"
                      />
                       {errors.subject && <p className="text-red-500 text-xs">{errors.subject.message}</p>}
                   </div>
                   
                   <div className="space-y-2">
                      <label className="text-sm font-medium text-white/70">Message</label>
                      <textarea 
                        {...register("message")}
                        rows={4}
                        className={cn("w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors", errors.message && "border-red-500")}
                        placeholder="Tell us about your project..."
                      />
                       {errors.message && <p className="text-red-500 text-xs">{errors.message.message}</p>}
                   </div>
                   
                   <button 
                      disabled={isSubmitting}
                      className="w-full bg-white text-black font-bold py-4 rounded-lg hover:bg-neutral-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                   >
                      {isSubmitting ? "Sending..." : "Send Message"}
                   </button>
                </form>
             </div>
          </div>
       </div>
    </section>
  )
}
