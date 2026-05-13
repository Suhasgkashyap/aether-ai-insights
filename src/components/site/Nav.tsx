import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export function Nav() {
  const links = ["Features", "Analytics", "Predictions", "Pricing"];
  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 inset-x-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav className="glass-strong flex items-center gap-8 rounded-full px-6 py-3">
        <a href="#" className="flex items-center gap-2 font-display text-lg font-semibold">
          <Sparkles className="h-5 w-5 text-[var(--neon)]" />
          <span className="text-gradient">NEXUS.AI</span>
        </a>
        <ul className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
          {links.map((l) => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} className="hover:text-foreground transition-colors">{l}</a>
            </li>
          ))}
        </ul>
        <button className="rounded-full bg-gradient-to-r from-[var(--neon)] via-[var(--purple-glow)] to-[var(--pink-glow)] px-4 py-1.5 text-sm font-medium text-primary-foreground glow-neon">
          Launch App
        </button>
      </nav>
    </motion.header>
  );
}
