"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { ChevronRight } from "lucide-react";

export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24 relative bg-graphite/30">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide text-ivory"
          >
            CORE <span className="text-gold text-gradient">SKILLS</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {siteConfig.skills.map((skill, i) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.05 }}
              className="glass-card p-6 flex items-center justify-between group hover:border-gold/30 transition-all duration-300"
            >
              <span className="font-medium text-ivory/80 group-hover:text-gold transition-colors">
                {skill}
              </span>
              <ChevronRight className="w-4 h-4 text-white/10 group-hover:text-gold group-hover:translate-x-1 transition-all" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
