"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-ivory tracking-wide"
          >
            MORE THAN A <span className="text-gold text-gradient">STUDENT</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.1 }}
            className="text-ivory/60 max-w-2xl mx-auto text-lg"
          >
            I am a student who deeply enjoys the process of learning. Whether it is analyzing a complex position on the chessboard or understanding a new concept in class, I believe in strategic thinking and continuous growth.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {siteConfig.aboutHighlights.map((item, index) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 group hover:-translate-y-2 transition-transform duration-500"
            >
              <div className="flex justify-between items-start mb-12">
                <span className="font-playfair text-3xl font-bold text-white/10 group-hover:text-gold/20 transition-colors">
                  {item.num}
                </span>
                <item.icon className="w-8 h-8 text-goldAccent opacity-50 group-hover:opacity-100 transition-opacity" />
              </div>
              
              <h3 className="text-xl tracking-wide font-semibold mb-4 group-hover:text-gold transition-colors">
                {item.title}
              </h3>
              <p className="text-ivory/60 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
