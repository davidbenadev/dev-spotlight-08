import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "David Benavides — Senior AI Fullstack Engineer" },
      {
        name: "description",
        content:
          "Portfolio of David Benavides, a Senior AI Fullstack Engineer building intelligent, end-to-end software products.",
      },
      {
        property: "og:title",
        content: "David Benavides — Senior AI Fullstack Engineer",
      },
      {
        property: "og:description",
        content:
          "Portfolio of David Benavides, a Senior AI Fullstack Engineer building intelligent, end-to-end software products.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
