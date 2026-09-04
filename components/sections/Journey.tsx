"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";

export default function Journey() {
  return (
    <section id="journey" className="py-16 md:py-24 relative">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide text-ivory"
          >
            THE <span className="text-gold text-gradient">JOURNEY</span>
          </motion.h2>
        </div>

        <div className="relative border-l border-white/10 pl-8 md:pl-12 ml-4 md:mx-auto">
          {siteConfig.journeyTimeline.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.2 }}
              className="mb-16 relative"
            >
              {/* Timeline Dot */}
              <div className={`absolute -left-[41px] md:-left-[57px] w-4 h-4 rounded-full border-2 ${
                item.isFuture ? "border-gold/50 bg-transparent" : "border-gold bg-charcoal"
              }`} />
              
              <div className="text-goldAccent text-sm tracking-widest font-bold mb-2">
                {item.year}
              </div>
              <h3 className="font-playfair text-xl sm:text-2xl md:text-3xl font-semibold mb-3 text-ivory">
                {item.title}
              </h3>
              {item.desc && (
                <p className="text-ivory/60 text-base sm:text-lg max-w-2xl">
                  {item.desc}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
