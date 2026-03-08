"use client";

import { useState, useRef } from "react";
import AnimatedSection from "./AnimatedSection";
import { Mail, Github, Linkedin, Send, Loader2 } from "lucide-react";
import { sendEmail } from "@/app/actions/sendEmail";

const SOCIAL_LINKS = [
  {
    icon: Mail,
    label: "Email",
    href: "mailto:hello@lukaskachtik.cz",
    color: "#6366f1",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/lukaskachtik",
    color: "#1a1a2e",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/lukaskachtik",
    color: "#0077b5",
  },
];

/**
 * Contact section with a clean form and social media links.
 */
export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);
      const result = await sendEmail(formData);

      if (result.success) {
        setSuccessMessage("Zpráva byla úspěšně odeslána. Brzy se ozvu!");
        formRef.current?.reset();
      } else {
        setErrorMessage(result.error || "Něco se pokazilo. Zkuste to prosím znovu.");
      }
    } catch {
      setErrorMessage("Došlo k chybě při komunikaci se serverem.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-24 md:py-32 section-gradient">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-semibold text-[#a855f7] tracking-wider uppercase mb-3">
              Spojme se
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a2e] mb-4">
              Kontakt
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-full mx-auto mb-6" />
            <p className="text-lg text-[#64748b] max-w-xl mx-auto">
              Máte nápad, projekt nebo jen chuť si popovídat o automatizaci a
              moderním vývoji? Napište mi — rád se s vámi spojím.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-14">
          {/* Contact Form */}
          <AnimatedSection delay={0.15}>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="glass-card rounded-3xl p-8 space-y-5"
            >
              {/* Honeypot field - Bots will see this and fill it in, but real users won't */}
              <div style={{ display: "none" }} aria-hidden="true">
                <label htmlFor="contact-address">Adresa</label>
                <input
                  id="contact-address"
                  name="address"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-sm font-medium text-[#1a1a2e] mb-2"
                >
                  Jméno
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  placeholder="Vaše jméno"
                  className="w-full px-4 py-3 rounded-xl border border-[rgba(99,102,241,0.15)] bg-white/70 text-[#1a1a2e] placeholder-[#94a3b8] transition-all focus:border-[#6366f1]"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-sm font-medium text-[#1a1a2e] mb-2"
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  placeholder="vas@email.cz"
                  className="w-full px-4 py-3 rounded-xl border border-[rgba(99,102,241,0.15)] bg-white/70 text-[#1a1a2e] placeholder-[#94a3b8] transition-all focus:border-[#6366f1]"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-sm font-medium text-[#1a1a2e] mb-2"
                >
                  Zpráva
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Popište váš projekt nebo myšlenku..."
                  className="w-full px-4 py-3 rounded-xl border border-[rgba(99,102,241,0.15)] bg-white/70 text-[#1a1a2e] placeholder-[#94a3b8] transition-all focus:border-[#6366f1] resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-gradient w-full py-3.5 rounded-full font-semibold flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Odesílá se...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Odeslat zprávu
                  </>
                )}
              </button>

              {/* Status messages */}
              {successMessage && (
                <p className="text-center text-sm font-medium text-emerald-600 mt-3">
                  {successMessage}
                </p>
              )}
              {errorMessage && (
                <p className="text-center text-sm font-medium text-red-500 mt-3">
                  {errorMessage}
                </p>
              )}
            </form>
          </AnimatedSection>

          {/* Social links + info */}
          <AnimatedSection delay={0.3}>
            <div className="flex flex-col justify-center h-full space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-[#1a1a2e] mb-3">
                  Pojďme tvořit společně
                </h3>
                <p className="text-[#64748b] leading-relaxed">
                  Ať už hledáte automatizaci vašich procesů nebo partnera pro
                  kreativní vývoj — jsem tu pro vás. Odpovídám většinou do 24
                  hodin.
                </p>
              </div>

              <div className="space-y-4">
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-card rounded-2xl p-4 flex items-center gap-4 group hover:scale-[1.02] transition-all"
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{
                        backgroundColor: `${link.color}12`,
                      }}
                    >
                      <link.icon
                        className="w-5 h-5 transition-colors"
                        style={{ color: link.color }}
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#1a1a2e]">
                        {link.label}
                      </h4>
                      <p className="text-sm text-[#64748b]">
                        {link.href.replace(/(https?:\/\/)|(mailto:)/g, "")}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
