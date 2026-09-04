"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Abstract Chess Knight Decoration */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none select-none w-1/2 h-full">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-current text-white">
          <path d="M 60 90 L 40 90 L 40 80 L 30 70 L 30 50 L 50 20 L 70 20 L 70 30 L 60 40 Z" />
        </svg>
      </div>

      <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-start gap-6"
        >
          <motion.div 
            initial={{ opacity: 0, letterSpacing: "0em" }}
            animate={{ opacity: 1, letterSpacing: "0.2em" }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="text-gold text-xs font-semibold uppercase tracking-widest"
          >
            EVERY MOVE MATTERS.
          </motion.div>
          
          <h1 className="font-playfair text-4xl sm:text-6xl md:text-7xl lg:text-5xl xl:text-7xl font-bold leading-tight">
            MAYASKARA <br/>
            <span className="text-ivory/50 italic font-light">BHAT.</span>
          </h1>
          
          <p className="text-base sm:text-lg text-ivory/70 max-w-xl font-light tracking-wide">
            Think. Strategize. Create.
          </p>
          
          <p className="text-lg text-ivory/60 max-w-lg leading-relaxed font-light">
            Student of Sri Venkatramana P.U. College, Kundapura with a passion for Chess, logical thinking and continuous learning.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
            <Link 
              href="#about"
              className="group relative px-8 py-4 bg-ivory text-charcoal font-medium hover:bg-white transition-colors flex items-center justify-center gap-2 overflow-hidden"
            >
              <span className="relative z-10">EXPLORE MY JOURNEY</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10" />
            </Link>
            
            <Link 
              href="#academy"
              className="px-8 py-4 border border-white/10 text-ivory hover:bg-white/5 transition-colors flex items-center justify-center font-medium"
            >
              3 STACK ACADEMY
            </Link>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative lg:h-[700px] flex justify-center lg:justify-end items-center"
        >
          {/* Cinematic Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-gold/5 rounded-full blur-[100px] pointer-events-none z-0" />
          
          <div className="relative w-full max-w-[320px] sm:max-w-md aspect-[3/4] bg-[#0a0a0a] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.8)] group z-10 mx-auto lg:mx-0">
            {/* Chess-inspired geometric frame */}
            <div className="absolute inset-0 border-2 border-white/5 z-30 pointer-events-none" />
            <div className="absolute inset-2 border border-gold/20 z-30 pointer-events-none mix-blend-overlay" />
            
            {/* Corner brackets */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-gold/50 z-30 pointer-events-none" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-gold/50 z-30 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-gold/50 z-30 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-gold/50 z-30 pointer-events-none" />

            {/* Elegant Knight Silhouette behind Portrait */}
            <svg 
              viewBox="0 0 100 100" 
              className="absolute -right-[20%] -bottom-[10%] w-[120%] h-[120%] text-gold/10 drop-shadow-2xl transition-transform duration-700 group-hover:scale-105 z-10 pointer-events-none"
            >
              <path fill="currentColor" d="M 60 90 L 40 90 L 40 80 L 30 70 L 30 50 L 50 20 L 70 20 L 70 30 L 60 40 Z" />
            </svg>

            {/* Actual Portrait Image */}
            <div className="absolute inset-0 z-20">
              <Image 
                src="/images/portrait.jpg" 
                alt="Mayaskara Bhat" 
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-center scale-100 transition-transform duration-1000 group-hover:scale-105 opacity-90 mix-blend-lighten"
              />
            </div>

            {/* Cinematic Rim Light & Shadow Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-gold/20 opacity-60 pointer-events-none z-30" />
            <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(0,0,0,0.9)] pointer-events-none z-30" />
            
          </div>
        </motion.div>
      </div>
    </section>
  );
}
