"use client";

import { Heart } from "lucide-react";

/**
 * Minimalist footer with name and copyright.
 */
export default function Footer() {
  return (
    <footer className="py-8 border-t border-[rgba(99,102,241,0.08)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Name */}
          <span className="text-sm font-semibold bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">
            Lukáš Kachtík
          </span>

          {/* Copyright */}
          <p className="flex items-center gap-1.5 text-sm text-[#94a3b8]">
            © {new Date().getFullYear()} — Vytvořeno s
            <Heart className="w-3.5 h-3.5 text-[#ec4899] fill-[#ec4899]" />
            a vibe codingem
          </p>
        </div>
      </div>
    </footer>
  );
}
