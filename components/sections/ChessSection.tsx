"use client";

import { motion } from "framer-motion";

const sequence = [
  { step: "THINK", delay: 0 },
  { step: "PLAN", delay: 1 },
  { step: "MOVE", delay: 2 },
  { step: "GROW", delay: 3 },
];

export default function ChessSection() {
  return (
    <section id="chess" className="py-16 md:py-32 relative overflow-hidden bg-[#0a0a0a] border-y border-white/5">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-12 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-goldAccent mb-4 md:mb-6 text-xs md:text-sm tracking-[0.3em] md:tracking-[0.4em] font-medium uppercase">
              The Grandmaster Approach
            </div>
            <h2 className="font-playfair text-3xl sm:text-4xl md:text-6xl font-bold mb-8">
              THE GAME OF <span className="text-gold">STRATEGY</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Left Column: Stylized Chessboard Composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative aspect-square w-full max-w-lg mx-auto border border-white/10 bg-[#121212] p-4 lg:p-8 shadow-2xl overflow-hidden rounded-sm"
          >
            <div className="grid grid-cols-8 grid-rows-8 w-full h-full border border-white/5 relative z-10 opacity-60">
              {[...Array(64)].map((_, i) => (
                <div 
                  key={i} 
                  className={`${(Math.floor(i / 8) + i) % 2 === 0 ? "bg-white/5" : "bg-transparent"} transition-colors duration-1000`}
                />
              ))}
            </div>

            {/* Animated Knight Path line */}
            <svg className="absolute inset-0 w-full h-full z-20 pointer-events-none stroke-gold drop-shadow-[0_0_10px_rgba(212,175,55,0.8)]" fill="none" viewBox="0 0 100 100" preserveAspectRatio="none">
              <motion.path
                d="M 18.75 81.25 L 31.25 56.25 L 56.25 43.75 L 81.25 18.75"
                strokeWidth="0.5"
                strokeDasharray="100"
                initial={{ strokeDashoffset: 100 }}
                whileInView={{ strokeDashoffset: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 2.5, ease: "easeInOut" }}
              />
            </svg>
            
            {/* Animated Knight SVG */}
            <motion.div 
              className="absolute w-[10%] h-[10%] z-30 text-goldAccent drop-shadow-[0_0_15px_rgba(235,209,119,0.5)]"
              initial={{ left: "13.75%", top: "76.25%" }}
              whileInView={{ 
                left: ["13.75%", "26.25%", "51.25%", "76.25%"], 
                top: ["76.25%", "51.25%", "38.75%", "13.75%"] 
              }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 2.5, ease: "easeInOut", times: [0, 0.33, 0.66, 1] }}
            >
              <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
                <path d="M 60 90 L 40 90 L 40 80 L 30 70 L 30 50 L 50 20 L 70 20 L 70 30 L 60 40 Z" />
              </svg>
            </motion.div>
          </motion.div>

          {/* Right Column: Sequence and Quote */}
          <div className="flex flex-col justify-center gap-10 md:gap-12 mt-8 md:mt-0">
            <div className="flex flex-col gap-4 md:gap-6">
              {sequence.map((item, i) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: item.delay * 0.6, duration: 0.6 }}
                  className="flex items-center gap-6"
                >
                  <span className="font-playfair text-lg sm:text-xl md:text-2xl text-gold/30 w-8">
                    0{i + 1}
                  </span>
                  <span className="text-xl sm:text-2xl md:text-4xl font-light tracking-[0.2em] text-ivory/90 uppercase border-b border-gold/20 pb-2 flex-grow">
                    {item.step}
                  </span>
                </motion.div>
              ))}
            </div>

            <motion.blockquote
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 2.2, duration: 1 }}
              className="relative pl-8 border-l-2 border-gold/50"
            >
              <span className="absolute -top-4 -left-3 text-6xl text-gold/20 font-playfair">"</span>
              <p className="font-playfair text-2xl md:text-3xl text-ivory/80 italic leading-relaxed">
                Think before you move.
              </p>
            </motion.blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
