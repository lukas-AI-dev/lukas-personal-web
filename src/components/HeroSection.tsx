"use client";

import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";

/**
 * Full-viewport hero section with animated gradient background,
 * massive title, Czech subtitle, and gradient CTA button.
 */
export default function HeroSection() {
  const handleScrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden"
    >
      {/* Decorative floating blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[8%] w-72 h-72 bg-gradient-to-br from-[rgba(99,102,241,0.08)] to-[rgba(168,85,247,0.06)] rounded-full blur-3xl float-animation" />
        <div className="absolute top-[60%] right-[5%] w-96 h-96 bg-gradient-to-br from-[rgba(168,85,247,0.06)] to-[rgba(6,182,212,0.05)] rounded-full blur-3xl float-animation-delayed" />
        <div className="absolute bottom-[15%] left-[15%] w-64 h-64 bg-gradient-to-br from-[rgba(6,182,212,0.06)] to-[rgba(99,102,241,0.04)] rounded-full blur-3xl float-animation" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8"
        >
          <Sparkles className="w-4 h-4 text-[#6366f1]" />
          <span className="text-sm font-medium text-[#64748b]">
            Budoucnost tvorby je tady
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-tight tracking-tight mb-6"
        >
          <span className="bg-gradient-to-r from-[#6366f1] via-[#a855f7] to-[#6366f1] bg-clip-text text-transparent">
            Automatizace
          </span>
          <br />
          <span className="text-[#1a1a2e]">&amp; Vibe Coding</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-lg sm:text-xl text-[#64748b] max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Tvořím digitální řešení, kde se lidská intuice setkává se silou
          automatizace. Jednoduchý kód, ohromující výsledky — to je moje
          filozofie.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={handleScrollToAbout}
            className="btn-gradient text-base font-semibold px-8 py-3.5 rounded-full flex items-center gap-2 cursor-pointer"
          >
            <Sparkles className="w-4 h-4" />
            Zjistit více
          </button>
          <button
            onClick={() =>
              document
                .querySelector("#features")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="glass-card text-base font-semibold px-8 py-3.5 rounded-full text-[#6366f1] hover:text-[#a855f7] transition-colors cursor-pointer"
          >
            Moje služby
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator — anchored to section bottom, outside content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown className="w-5 h-5 text-[#a855f7] opacity-50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
