import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import GitHubSection from "@/components/GitHubSection";
import ExperienceTimeline from "@/components/Experience";

export default function Home() {
  return (
    <main>
      <Hero />
      <Skills />

      <GitHubSection />
      <Projects />
      <ExperienceTimeline />
    </main>
  );
}
