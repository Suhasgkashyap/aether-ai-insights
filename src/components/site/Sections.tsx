import { motion } from "framer-motion";
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Activity, Brain, Cpu, LineChart as LineIcon, Lock, Rocket, Shield, Sparkles, Workflow, Zap } from "lucide-react";
import { Counter } from "./Counter";

const area = Array.from({ length: 24 }, (_, i) => ({
  t: i,
  v: 40 + Math.sin(i / 2) * 20 + Math.random() * 14,
  p: 30 + Math.cos(i / 3) * 18 + Math.random() * 10,
}));
const bars = Array.from({ length: 12 }, (_, i) => ({ m: `M${i + 1}`, v: 20 + Math.random() * 80 }));

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.08 } }),
};

export function StatsBar() {
  const stats = [
    { l: "Models orchestrated", v: 248, s: "+", suffix: "" },
    { l: "Daily inferences", v: 12.4, s: "M", suffix: "M" },
    { l: "Avg latency", v: 38, s: "ms", suffix: "ms" },
    { l: "Uptime", v: 99.99, s: "%", suffix: "%" },
  ];
  return (
    <section className="relative z-10 mx-auto max-w-6xl px-4 -mt-10">
      <div className="glass rounded-3xl grid grid-cols-2 md:grid-cols-4 gap-px overflow-hidden">
        {stats.map((s) => (
          <div key={s.l} className="p-6 text-center bg-background/20">
            <div className="font-display text-3xl md:text-4xl text-gradient">
              <Counter to={s.v} suffix={s.suffix} />
            </div>
            <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Features() {
  const items = [
    { i: Brain, t: "Neural orchestration", d: "Route prompts across 40+ frontier models with adaptive cost & latency policies." },
    { i: Activity, t: "Live telemetry", d: "Sub-second observability streamed from every node, agent and tool call." },
    { i: Workflow, t: "Agent workflows", d: "Compose multi-step autonomous flows with deterministic guardrails." },
    { i: Shield, t: "Zero-trust runtime", d: "Encrypted memory, scoped tokens, and audit trails wired in by default." },
    { i: Zap, t: "Edge inference", d: "Deploy to 280+ regions in a click — 38 ms median first token globally." },
    { i: Cpu, t: "Hardware aware", d: "Auto-allocate H100s, TPUs and Groq fabric to match each job's footprint." },
  ];
  return (
    <section id="features" className="relative mx-auto max-w-6xl px-4 py-32">
      <Header eyebrow="Platform" title="A control plane for autonomous intelligence" />
      <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map(({ i: Icon, t, d }, idx) => (
          <motion.div
            key={t}
            variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={idx}
            className="glass group relative overflow-hidden rounded-2xl p-6 hover:-translate-y-1 transition-transform"
          >
            <div className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none"
                 style={{ background: "var(--gradient-neon)", filter: "blur(40px)", zIndex: -1 }} />
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl glass-strong">
              <Icon className="h-5 w-5 text-[var(--neon)]" />
            </div>
            <h3 className="mt-5 text-lg font-semibold">{t}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function Analytics() {
  return (
    <section id="analytics" className="relative mx-auto max-w-6xl px-4 py-32">
      <Header eyebrow="Live analytics" title="Cinematic dashboards. Real signal." />
      <div className="mt-14 grid lg:grid-cols-3 gap-5">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="lg:col-span-2 glass rounded-2xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Inference throughput</div>
              <div className="mt-1 font-display text-3xl text-gradient">12.4M / day</div>
            </div>
            <div className="text-xs px-2 py-1 rounded-full glass-strong text-[var(--neon)]">▲ 24.6%</div>
          </div>
          <div className="h-72 mt-4">
            <ResponsiveContainer>
              <AreaChart data={area}>
                <defs>
                  <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#00D9FF" stopOpacity={0.7} />
                    <stop offset="100%" stopColor="#00D9FF" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="g2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#8B5CF6" stopOpacity={0.6} />
                    <stop offset="100%" stopColor="#8B5CF6" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid stroke="rgba(255,255,255,0.05)" vertical={false} />
                <XAxis dataKey="t" stroke="rgba(255,255,255,0.3)" fontSize={10} />
                <YAxis stroke="rgba(255,255,255,0.3)" fontSize={10} />
                <Tooltip contentStyle={{ background: "rgba(10,15,30,0.9)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 12 }} />
                <Area dataKey="v" stroke="#00D9FF" strokeWidth={2} fill="url(#g1)" />
                <Area dataKey="p" stroke="#8B5CF6" strokeWidth={2} fill="url(#g2)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={1} className="glass rounded-2xl p-6 flex flex-col">
          <div className="text-xs uppercase tracking-widest text-muted-foreground">Cost saved</div>
          <div className="mt-1 font-display text-3xl text-gradient">$2.84M</div>
          <div className="h-40 mt-4">
            <ResponsiveContainer>
              <BarChart data={bars}>
                <Bar dataKey="v" fill="url(#g3)" radius={[6, 6, 0, 0]} />
                <defs>
                  <linearGradient id="g3" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#FF4D9D" />
                    <stop offset="100%" stopColor="#8B5CF6" />
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-auto pt-4 grid grid-cols-2 gap-3 text-sm">
            <Mini label="Active agents" val="1,284" />
            <Mini label="Tokens / s" val="89.2K" />
            <Mini label="GPU pool" val="412" />
            <Mini label="Routes" val="38" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Mini({ label, val }: { label: string; val: string }) {
  return (
    <div className="rounded-xl bg-background/40 border border-white/5 px-3 py-2">
      <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{label}</div>
      <div className="font-display">{val}</div>
    </div>
  );
}

export function Predictions() {
  const insights = [
    { t: "Q4 conversion lift", d: "Switching to Sonnet-4.5 for tier-1 routes projects +18.2% conversion based on 14-day rolling cohort.", tag: "Recommendation" },
    { t: "Anomaly detected", d: "Latency p99 in eu-west drifted 42ms above baseline at 02:14 UTC. Auto-mitigation engaged.", tag: "Alert" },
    { t: "Capacity forecast", d: "Inference demand will exceed reserved fleet by ~8% next Tuesday. Pre-warm 64 nodes recommended.", tag: "Forecast" },
  ];
  return (
    <section id="predictions" className="relative mx-auto max-w-6xl px-4 py-32">
      <Header eyebrow="AI predictions" title="An assistant that thinks ahead of your business" />
      <div className="mt-14 grid lg:grid-cols-[1.1fr_1fr] gap-8 items-start">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="glass rounded-2xl p-6">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[var(--neon)] to-[var(--purple-glow)] glow-neon" />
              <span className="absolute inset-0 rounded-full animate-pulse-glow" style={{ background: "var(--gradient-neon)" }} />
            </div>
            <div>
              <div className="text-sm font-medium">Nexus assistant</div>
              <div className="text-xs text-muted-foreground">Reasoning across 14 data streams</div>
            </div>
          </div>
          <div className="mt-6 space-y-3">
            {insights.map((i, idx) => (
              <motion.div key={i.t} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={idx} className="rounded-xl border border-white/5 bg-background/40 p-4">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-full glass-strong text-[var(--cyan-glow)]">{i.tag}</span>
                  <span className="text-sm font-medium">{i.t}</span>
                </div>
                <p className="mt-1.5 text-sm text-muted-foreground">{i.d}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={1} className="glass rounded-2xl p-6">
          <div className="flex items-center justify-between">
            <div className="text-xs uppercase tracking-widest text-muted-foreground">Forecast vs actual</div>
            <LineIcon className="h-4 w-4 text-[var(--neon)]" />
          </div>
          <div className="h-72 mt-3">
            <ResponsiveContainer>
              <LineChart data={area}>
                <CartesianGrid stroke="rgba(255,255,255,0.05)" vertical={false} />
                <XAxis dataKey="t" stroke="rgba(255,255,255,0.3)" fontSize={10} />
                <YAxis stroke="rgba(255,255,255,0.3)" fontSize={10} />
                <Tooltip contentStyle={{ background: "rgba(10,15,30,0.9)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 12 }} />
                <Line dataKey="v" stroke="#00D9FF" strokeWidth={2} dot={false} />
                <Line dataKey="p" stroke="#FF4D9D" strokeWidth={2} strokeDasharray="4 4" dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function Pricing() {
  const tiers = [
    { name: "Pulse", price: "$49", desc: "For builders prototyping with frontier models.", feats: ["50M tokens / mo", "5 deployed agents", "Community support"] },
    { name: "Orbit", price: "$299", desc: "For scaling teams with production AI.", feats: ["1B tokens / mo", "Unlimited agents", "Edge inference", "SLA 99.95%"], hot: true },
    { name: "Nexus", price: "Custom", desc: "For enterprises shaping the post-AGI stack.", feats: ["Dedicated fleet", "On-prem option", "24/7 white-glove", "Custom guardrails"] },
  ];
  return (
    <section id="pricing" className="relative mx-auto max-w-6xl px-4 py-32">
      <Header eyebrow="Pricing" title="Scale from prototype to planetary" />
      <div className="mt-14 grid md:grid-cols-3 gap-5">
        {tiers.map((t, idx) => (
          <motion.div key={t.name} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={idx}
            className={`glass rounded-2xl p-7 relative ${t.hot ? "neon-border glow-neon" : ""}`}>
            {t.hot && <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-widest px-3 py-1 rounded-full bg-gradient-to-r from-[var(--neon)] to-[var(--pink-glow)] text-primary-foreground">Most loved</span>}
            <div className="font-display text-xl">{t.name}</div>
            <div className="mt-3 font-display text-4xl">{t.price}<span className="text-sm text-muted-foreground font-sans">/mo</span></div>
            <p className="mt-2 text-sm text-muted-foreground">{t.desc}</p>
            <ul className="mt-6 space-y-2 text-sm">
              {t.feats.map((f) => (
                <li key={f} className="flex items-center gap-2"><Sparkles className="h-3.5 w-3.5 text-[var(--cyan-glow)]" />{f}</li>
              ))}
            </ul>
            <button className={`mt-7 w-full rounded-xl py-2.5 text-sm font-medium transition ${t.hot ? "bg-gradient-to-r from-[var(--neon)] via-[var(--purple-glow)] to-[var(--pink-glow)] text-primary-foreground" : "glass-strong hover:bg-white/5"}`}>
              {t.hot ? "Launch Orbit" : "Choose plan"}
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function Testimonials() {
  const items = [
    { q: "Nexus collapsed our model ops surface from 12 dashboards into one cinematic command deck.", a: "Lena Park", r: "Head of AI, Lumen Labs" },
    { q: "The predictive layer caught a $400k anomaly 6 hours before our on-call did. Genuinely shocking.", a: "Idris Okafor", r: "VP Eng, Helio" },
    { q: "Feels like operating an aircraft carrier from a single touchscreen. Beautiful and dense.", a: "Mira Vance", r: "CTO, Nimbus" },
  ];
  return (
    <section className="relative mx-auto max-w-6xl px-4 py-32">
      <Header eyebrow="Loved by builders" title="Operators of the new intelligence stack" />
      <div className="mt-14 grid md:grid-cols-3 gap-5">
        {items.map((t, idx) => (
          <motion.figure key={t.a} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={idx} className="glass rounded-2xl p-6">
            <Sparkles className="h-4 w-4 text-[var(--neon)]" />
            <blockquote className="mt-4 text-sm leading-relaxed">"{t.q}"</blockquote>
            <figcaption className="mt-5 text-xs text-muted-foreground">
              <div className="text-foreground font-medium">{t.a}</div>{t.r}
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}

export function CtaFooter() {
  return (
    <section className="relative mx-auto max-w-6xl px-4 pb-16">
      <div className="glass-strong neon-border rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-60" style={{ background: "var(--gradient-neon)", filter: "blur(120px)" }} />
        <Rocket className="mx-auto h-8 w-8 text-[var(--neon)]" />
        <h2 className="mt-4 font-display text-3xl md:text-5xl">Ship the future this quarter.</h2>
        <p className="mt-3 text-muted-foreground max-w-xl mx-auto">Spin up a Nexus workspace in 90 seconds. No credit card. No infrastructure to babysit.</p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <button className="rounded-full bg-gradient-to-r from-[var(--neon)] via-[var(--purple-glow)] to-[var(--pink-glow)] px-6 py-3 font-medium text-primary-foreground glow-neon">Start free trial</button>
          <button className="rounded-full glass-strong px-6 py-3 font-medium hover:bg-white/5"><Lock className="inline h-4 w-4 mr-2" />Talk to sales</button>
        </div>
      </div>
      <footer className="mt-16 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
        <div className="flex items-center gap-2"><Sparkles className="h-4 w-4 text-[var(--neon)]" /><span className="text-gradient font-display">NEXUS.AI</span> © 2035</div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-foreground">Privacy</a>
          <a href="#" className="hover:text-foreground">Terms</a>
          <a href="#" className="hover:text-foreground">Status</a>
        </div>
      </footer>
    </section>
  );
}

function Header({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center max-w-3xl mx-auto">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-strong text-xs uppercase tracking-widest text-[var(--cyan-glow)]">{eyebrow}</div>
      <h2 className="mt-4 font-display text-3xl md:text-5xl">{title}</h2>
    </motion.div>
  );
}
