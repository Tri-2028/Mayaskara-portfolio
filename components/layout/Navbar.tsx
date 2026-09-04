"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Monogram from "@/components/ui/Monogram";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-charcoal/80 backdrop-blur-lg border-b border-white/5 py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <Monogram className="w-8 h-8 text-gold group-hover:text-goldAccent transition-colors" />
          <span className="font-playfair text-xl md:text-2xl font-bold tracking-wider text-ivory hidden sm:block">
            MAYASKARA<span className="text-gold">.</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {siteConfig.navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-ivory/70 hover:text-gold transition-colors tracking-wide"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button - Optimized Touch Target */}
        <button 
          className="md:hidden text-ivory p-3 -mr-3 hover:text-gold transition-colors focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-graphite border-b border-white/5 py-4 flex flex-col items-center space-y-4 md:hidden shadow-2xl"
          >
            {siteConfig.navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-ivory/80 hover:text-gold transition-colors text-lg"
              >
                {item.label}
              </Link>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
