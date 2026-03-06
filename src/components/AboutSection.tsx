"use client";

import Image from "next/image";
import AnimatedSection from "./AnimatedSection";
import { Code2, Cpu, Lightbulb } from "lucide-react";

/**
 * About section with philosophy text in Czech and AI-generated illustration.
 */
export default function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 section-gradient">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-semibold text-[#a855f7] tracking-wider uppercase mb-3">
              Kdo jsem
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a2e] mb-4">
              O mně
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-full mx-auto" />
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Illustration */}
          <AnimatedSection delay={0.15}>
            <div className="relative">
              <div className="glass-card rounded-3xl p-4 glow-purple">
                <Image
                  src="/images/about.png"
                  alt="Abstraktní ilustrace — fúze kódu, přírody a mechaniky"
                  width={600}
                  height={600}
                  className="rounded-2xl w-full h-auto"
                  priority
                />
              </div>
              {/* Decorative floating badge */}
              <div className="absolute -bottom-4 -right-4 glass-card rounded-2xl px-4 py-3 flex items-center gap-2 float-animation">
                <Code2 className="w-5 h-5 text-[#6366f1]" />
                <span className="text-sm font-medium text-[#1a1a2e]">
                  Vibe Coder
                </span>
              </div>
            </div>
          </AnimatedSection>

          {/* Text content */}
          <AnimatedSection delay={0.3}>
            <div className="space-y-6">
              <p className="text-lg text-[#64748b] leading-relaxed">
                Jmenuji se <strong className="text-[#1a1a2e]">Lukáš Kachtík</strong> a
                věřím, že budoucnost tvorby softwaru leží v harmonii mezi lidskou
                kreativitou a strojovou přesností. Moje práce stojí na dvou
                pilířích.
              </p>
              <p className="text-lg text-[#64748b] leading-relaxed">
                <strong className="text-[#6366f1]">Vibe Coding</strong> je pro mě
                způsob, jak programovat intuitivně — nechat se vést pocitem, flow
                a kreativním tlakem, místo rigidních šablon. Kód by měl být živý
                a expresivní.
              </p>
              <p className="text-lg text-[#64748b] leading-relaxed">
                <strong className="text-[#a855f7]">Automatizace</strong> je pak
                mou odpovědí na opakující se úkoly. Navrhuji systémy, které pracují
                za vás — elegantně, spolehlivě a bez zbytečné složitosti.
              </p>

              {/* Stat-like highlights */}
              <div className="grid grid-cols-3 gap-4 pt-6">
                {[
                  { icon: Code2, label: "Čistý kód", color: "#6366f1" },
                  { icon: Cpu, label: "Automatizace", color: "#a855f7" },
                  { icon: Lightbulb, label: "Inovace", color: "#06b6d4" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="glass-card rounded-2xl p-4 text-center"
                  >
                    <item.icon
                      className="w-6 h-6 mx-auto mb-2"
                      style={{ color: item.color }}
                    />
                    <span className="text-xs font-semibold text-[#64748b]">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
