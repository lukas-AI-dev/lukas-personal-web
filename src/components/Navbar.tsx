"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "#hero", label: "Domů" },
  { href: "#about", label: "O mně" },
  { href: "#features", label: "Služby" },
  { href: "#contact", label: "Kontakt" },
];

/**
 * Sticky glassmorphism navbar with smooth scroll links.
 * Includes responsive mobile hamburger menu.
 */
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass-nav py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 flex items-center justify-between">
        {/* Logo / Name */}
        <button
          onClick={() => handleLinkClick("#hero")}
          className="text-xl font-bold bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent hover:opacity-80 transition-opacity cursor-pointer"
        >
          Lukáš Kachtík
        </button>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleLinkClick(link.href)}
              className="text-sm font-medium text-[#64748b] hover:text-[#6366f1] transition-colors cursor-pointer"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleLinkClick("#contact")}
            className="btn-gradient text-sm font-semibold px-5 py-2.5 rounded-full cursor-pointer"
          >
            Napište mi
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 rounded-xl hover:bg-[rgba(99,102,241,0.1)] transition-colors cursor-pointer"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-5 h-5 text-[#6366f1]" />
          ) : (
            <Menu className="w-5 h-5 text-[#64748b]" />
          )}
        </button>
      </div>

      {/* Mobile menu dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass-nav mt-2 mx-4 rounded-2xl overflow-hidden"
          >
            <div className="p-4 flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleLinkClick(link.href)}
                  className="text-left text-sm font-medium text-[#64748b] hover:text-[#6366f1] py-2 px-3 rounded-xl hover:bg-[rgba(99,102,241,0.05)] transition-all cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => handleLinkClick("#contact")}
                className="btn-gradient text-sm font-semibold px-5 py-2.5 rounded-full mt-1 cursor-pointer"
              >
                Napište mi
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
