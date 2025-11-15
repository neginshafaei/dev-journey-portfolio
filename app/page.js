import { JourneyTimeline } from "@/components/JourneyTimeline";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { PerformanceMetrics } from "@/components/PerformanceMetrics";
import { SpotlightHero } from "@/components/SpotlightHero";
import { AvailabilityWidget } from "@/components/AvailabilityWidget";

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-slate-50">
      <SpotlightHero>
        <Hero />
      </SpotlightHero>
      <About />
      <JourneyTimeline />
      <Projects />
      <PerformanceMetrics />
      <AvailabilityWidget />

      <footer className="py-8 text-center text-slate-400 text-sm bg-slate-900">
        <p>
          &copy; {new Date().getFullYear()} Negin Shafaei. Built with Next.js 15
          & Tailwind.
        </p>
      </footer>
    </main>
  );
}
