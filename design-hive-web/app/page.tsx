import { Hero } from "@/components/hero/hero";
import { AboutSection } from "@/components/about/about-section";
import { ProjectsSection } from "@/components/projects/projects-section";
import { ServicesSection } from "@/components/services/services-section";
import { TestimonialsSection } from "@/components/testimonials/testimonials-section";
import { CTASection } from "@/components/cta/cta-section";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <AboutSection />
      <ProjectsSection />
      <ServicesSection />
      <TestimonialsSection />
      <CTASection />
      {/* <div className="h-screen"></div>  Removed placeholder */}
    </main>
  );
}
