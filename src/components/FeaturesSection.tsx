"use client";

import Image from "next/image";
import AnimatedSection from "./AnimatedSection";
import {
  Bot,
  Workflow,
  Zap,
  Palette,
  Sparkles,
  Waves,
} from "lucide-react";

interface FeatureItem {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
}

const AUTOMATION_FEATURES: FeatureItem[] = [
  {
    icon: Bot,
    title: "Inteligentní boty",
    description:
      "Navrhuji autonomní systémy, které zvládají opakující se úkoly bez lidského zásahu — rychleji a přesněji.",
    color: "#6366f1",
  },
  {
    icon: Workflow,
    title: "Workflow orchestrace",
    description:
      "Propojuji nástroje a služby do bezešvých workflow, které šetří čas a eliminují chyby.",
    color: "#818cf8",
  },
  {
    icon: Zap,
    title: "Bleskový výkon",
    description:
      "Optimalizuji procesy tak, aby běžely na maximum — s minimální latencí a maximální spolehlivostí.",
    color: "#06b6d4",
  },
];

const VIBECODING_FEATURES: FeatureItem[] = [
  {
    icon: Palette,
    title: "Kreativní kód",
    description:
      "Programování jako forma umění — píšu kód, který je nejen funkční, ale i vizuálně elegantní a expresivní.",
    color: "#a855f7",
  },
  {
    icon: Sparkles,
    title: "Intuitivní tvorba",
    description:
      "Nechávám se vést flow a instinktem. Nejlepší řešení přichází, když se kód stane přirozeným vyjádřením myšlenky.",
    color: "#ec4899",
  },
  {
    icon: Waves,
    title: "Flow stav",
    description:
      "Vytvářím prostředí a nástroje, které podporují hluboké soustředění a kreativní flow každého vývojáře.",
    color: "#f59e0b",
  },
];

/**
 * Feature cards section with translucent glassmorphism cards for
 * "Automatizace" and "Vibe Coding" themes.
 */
export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-20">
            <span className="inline-block text-sm font-semibold text-[#6366f1] tracking-wider uppercase mb-3">
              Co nabízím
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a2e] mb-4">
              Moje specializace
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-full mx-auto" />
          </div>
        </AnimatedSection>

        {/* Automatizace Block */}
        <AnimatedSection delay={0.1}>
          <div className="glass-card rounded-3xl p-8 md:p-10 mb-12 glow-blue">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-[rgba(99,102,241,0.1)] to-[rgba(129,140,248,0.1)] mb-4">
                  <Zap className="w-4 h-4 text-[#6366f1]" />
                  <span className="text-xs font-bold text-[#6366f1] uppercase tracking-wider">
                    Automatizace
                  </span>
                </div>
                <h3 className="text-3xl font-bold text-[#1a1a2e] mb-4">
                  Stroje pracují za vás
                </h3>
                <p className="text-[#64748b] leading-relaxed mb-6">
                  Automatizace není jen o úspoře času — jde o osvobození vaší
                  kreativity. Navrhuji systémy, které převezmou rutinní operace,
                  abyste se mohli soustředit na to, co opravdu záleží.
                </p>
                <div className="space-y-4">
                  {AUTOMATION_FEATURES.map((feature) => (
                    <div
                      key={feature.title}
                      className="flex items-start gap-3"
                    >
                      <div
                        className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{
                          backgroundColor: `${feature.color}15`,
                        }}
                      >
                        <feature.icon
                          className="w-5 h-5"
                          style={{ color: feature.color }}
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#1a1a2e] mb-1">
                          {feature.title}
                        </h4>
                        <p className="text-sm text-[#64748b] leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/images/automation.png"
                  alt="Abstraktní ilustrace automatizace — ozubená kola, obvody, datové toky"
                  width={500}
                  height={500}
                  className="rounded-2xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Vibe Coding Block */}
        <AnimatedSection delay={0.2}>
          <div className="glass-card rounded-3xl p-8 md:p-10 glow-purple">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative order-2 md:order-1">
                <Image
                  src="/images/vibecoding.png"
                  alt="Abstraktní ilustrace vibe codingu — kreativní kód, hudba, barvy"
                  width={500}
                  height={500}
                  className="rounded-2xl w-full h-auto"
                />
              </div>
              <div className="order-1 md:order-2">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-[rgba(168,85,247,0.1)] to-[rgba(236,72,153,0.1)] mb-4">
                  <Sparkles className="w-4 h-4 text-[#a855f7]" />
                  <span className="text-xs font-bold text-[#a855f7] uppercase tracking-wider">
                    Vibe Coding
                  </span>
                </div>
                <h3 className="text-3xl font-bold text-[#1a1a2e] mb-4">
                  Kód jako umění
                </h3>
                <p className="text-[#64748b] leading-relaxed mb-6">
                  Vibe Coding je víc než metodika — je to přístup k tvorbě.
                  Programování řízené intuicí, kde se technická preciznost
                  potkává s kreativním výrazem a přirozeným flow.
                </p>
                <div className="space-y-4">
                  {VIBECODING_FEATURES.map((feature) => (
                    <div
                      key={feature.title}
                      className="flex items-start gap-3"
                    >
                      <div
                        className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{
                          backgroundColor: `${feature.color}15`,
                        }}
                      >
                        <feature.icon
                          className="w-5 h-5"
                          style={{ color: feature.color }}
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#1a1a2e] mb-1">
                          {feature.title}
                        </h4>
                        <p className="text-sm text-[#64748b] leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
