import { Navbar } from "@/components/ui/Navbar";
import { Hero } from "@/components/sections/Hero";
import { LogoMarquee } from "@/components/sections/LogoMarquee";
import { BentoGridProjects } from "@/components/sections/BentoGridProjects";
import { Services } from "@/components/sections/Services";
import { ProcessRoadmap } from "@/components/sections/ProcessRoadmap";
import { ReviewCarousel } from "@/components/sections/ReviewCarousel";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#030712] text-zinc-100 selection:bg-cyan-500 selection:text-black">
      {/* Floating Modern Header */}
      <Navbar />

      {/* Main Interactive Sections */}
      <main className="relative flex flex-col w-full overflow-hidden">
        {/* 1. HeroSection with kinetic typography & 3D particle canvas */}
        <Hero />

        {/* 2. LogoMarquee with infinite tech stack & client badges */}
        <LogoMarquee />

        {/* 3. BentoGridProjects showcasing featured 3D perspective projects */}
        <BentoGridProjects />

        {/* 4. AnimatedServices with dynamic lighting and interactive accordion */}
        <Services />

        {/* 5. ProcessRoadmap scroll-driven timeline with line-draw animations */}
        <ProcessRoadmap />

        {/* 6. AnimatedReviewsCarousel with touch gestures & testimonials */}
        <ReviewCarousel />

        {/* 7. FAQSection with expanding accordion & dynamic rotation */}
        <FAQ />
      </main>

      {/* 8. InteractiveFooter with glowing CTA, live clock & newsletter */}
      <Footer />
    </div>
  );
}
