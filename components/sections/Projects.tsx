"use client";

import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide text-ivory"
          >
            MY <span className="text-gold text-gradient">WORK</span>
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          className="glass-card max-w-4xl mx-auto p-12 md:p-16 text-center border-dashed border-2 border-white/10"
        >
          <div className="text-4xl mb-6">♟</div>
          <h3 className="font-playfair text-2xl md:text-3xl font-semibold mb-4 text-ivory/90">
            Projects Coming Soon
          </h3>
          <p className="text-ivory/60 text-base sm:text-lg max-w-md mx-auto">
            Every project is another move toward becoming a better problem solver. Stay tuned for future updates.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
