import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
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

const sectionIds = ["home", "about", "projects", "experience", "contact"];

function Index() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0.1, 0.5, 1] },
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background p-4 text-foreground">
      <Sidebar active={active} />
      <div className="lg:ml-[19rem]">
        <main className="rounded-2xl border border-border bg-ink-light py-4">
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
