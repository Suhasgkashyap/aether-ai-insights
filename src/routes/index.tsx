import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Particles } from "@/components/site/Particles";
import { HeroScene } from "@/components/site/HeroScene";
import { Analytics, CtaFooter, Features, Predictions, Pricing, StatsBar, Testimonials } from "@/components/site/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nexus.AI — The cinematic control plane for autonomous intelligence" },
      { name: "description", content: "A futuristic AI SaaS platform for orchestrating models, agents and live analytics across the planet." },
      { property: "og:title", content: "Nexus.AI — Autonomous intelligence, beautifully orchestrated" },
      { property: "og:description", content: "Holographic dashboards, predictive insights and edge inference. Built for the post-AGI stack." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Sora:wght@300;400;500;600&display=swap" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Particles />
      <div className="grid-bg absolute inset-0 -z-10" />
      <Nav />

      {/* Hero */}
      <section className="relative pt-36 pb-24 px-4">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-strong text-xs uppercase tracking-widest text-[var(--cyan-glow)]">
              <Sparkles className="h-3 w-3" /> Now live · v3 Aurora
            </div>
            <h1 className="mt-6 font-display text-5xl md:text-7xl leading-[1.05]">
              The <span className="text-gradient">intelligence layer</span> for everything you ship.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              Orchestrate frontier models, autonomous agents and real-time analytics from a single holographic command deck — engineered for the year 2035.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--neon)] via-[var(--purple-glow)] to-[var(--pink-glow)] px-6 py-3 font-medium text-primary-foreground glow-neon">
                Enter the deck
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button className="rounded-full glass-strong px-6 py-3 font-medium hover:bg-white/5">Watch the film · 2:14</button>
            </div>
            <div className="mt-10 flex items-center gap-6 text-xs text-muted-foreground">
              <div>SOC 2 · ISO 27001</div>
              <div className="h-4 w-px bg-white/10" />
              <div>280+ regions</div>
              <div className="h-4 w-px bg-white/10" />
              <div>40+ models</div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2 }}
            className="relative h-[460px] md:h-[560px]">
            <div className="absolute inset-0 -z-10 animate-pulse-glow rounded-full" style={{ background: "var(--gradient-neon)" }} />
            <div className="h-full glass rounded-3xl overflow-hidden">
              <HeroScene />
            </div>
            {/* floating widgets */}
            <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute -left-4 top-10 glass-strong rounded-2xl p-4 w-44">
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Active agents</div>
              <div className="font-display text-2xl text-gradient">1,284</div>
              <div className="text-[10px] text-[var(--cyan-glow)] mt-1">▲ 6.2% / hr</div>
            </motion.div>
            <motion.div animate={{ y: [0, 14, 0] }} transition={{ duration: 6, repeat: Infinity }} className="absolute -right-2 bottom-12 glass-strong rounded-2xl p-4 w-48">
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Latency · p50</div>
              <div className="font-display text-2xl text-gradient">38ms</div>
              <div className="mt-2 h-1.5 rounded-full bg-white/10 overflow-hidden">
                <div className="h-full w-3/4 bg-gradient-to-r from-[var(--neon)] to-[var(--pink-glow)]" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <StatsBar />
      <Features />
      <Analytics />
      <Predictions />
      <Pricing />
      <Testimonials />
      <CtaFooter />
    </div>
  );
}
