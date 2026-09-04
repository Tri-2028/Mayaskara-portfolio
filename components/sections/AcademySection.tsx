"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function AcademySection() {
  return (
    <section id="academy" className="py-16 md:py-24 relative overflow-hidden bg-[#161616] border-y border-white/5">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-blue-900/10 blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <div className="text-goldAccent mb-8 text-xs tracking-[0.3em] font-semibold uppercase">
              WHERE MY LEARNING JOURNEY GROWS
            </div>

            {/* Logo Container - White background to perfectly blend with the jpeg's white bg */}
            <div className="w-24 h-24 md:w-28 md:h-28 bg-white rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-white/10 flex items-center justify-center p-2 mb-8 group overflow-hidden">
              <Image 
                src="/images/3sa-logo.jpg" 
                alt="3 Stack Academy Logo" 
                width={120} 
                height={120}
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-gold/20 bg-gold/5 text-gold text-xs font-bold tracking-[0.2em] uppercase">
              PROUD STUDENT
            </div>

            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-wide text-ivory">
              3 STACK ACADEMY
            </h2>
            
            <h3 className="text-base sm:text-lg md:text-xl text-ivory/60 font-light tracking-[0.2em] uppercase mb-8 text-center px-4">
              Learning. Building. Growing.
            </h3>

            <p className="text-base sm:text-lg md:text-xl text-ivory/80 max-w-2xl mx-auto leading-relaxed mb-10 px-4">
              Being part of 3 Stack Academy has given me an environment to explore technology, develop practical skills and keep learning beyond the classroom.
            </p>

            <a 
              href="https://3stackacademy.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 text-ivory px-6 py-4 sm:px-8 sm:py-4 rounded-sm border border-white/10 transition-all duration-300 group w-[90%] sm:w-auto"
            >
              <span className="text-xs sm:text-sm font-semibold tracking-[0.2em]">DISCOVER 3 STACK ACADEMY</span>
              <ArrowRight className="w-4 h-4 text-gold group-hover:translate-x-1 transition-transform shrink-0" />
            </a>

            <div className="mt-12 text-sm text-ivory/40 tracking-[0.1em] font-light italic font-playfair">
              "Guided by mentors. Driven by curiosity."
            </div>
            
          </motion.div>

        </div>
      </div>
    </section>
  );
}
