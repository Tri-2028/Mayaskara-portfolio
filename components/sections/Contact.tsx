"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { Camera, Briefcase, Code, Mail } from "lucide-react";

export default function Contact() {
  const socials = [
    { name: "Instagram", icon: Camera, href: siteConfig.socials.instagram },
    { name: "LinkedIn", icon: Briefcase, href: siteConfig.socials.linkedin },
    { name: "GitHub", icon: Code, href: siteConfig.socials.github },
    { name: "Email", icon: Mail, href: siteConfig.socials.email },
  ];

  return (
    <section id="contact" className="py-16 md:py-24 relative overflow-hidden bg-charcoal">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-ivory tracking-wide">
            LET'S <span className="text-gold text-gradient">CONNECT</span>
          </h2>
          
          <p className="text-base sm:text-lg text-ivory/60 max-w-xl mx-auto mb-10 px-4">
            Whether you want to discuss chess strategies, technology, or potential collaborations, I'm always open to connecting with like-minded people.
          </p>
          
          <a 
            href={siteConfig.socials.email}
            className="inline-flex items-center justify-center gap-3 bg-gold hover:bg-goldAccent text-charcoal px-6 py-4 sm:px-8 sm:py-4 rounded-sm font-semibold tracking-widest text-xs sm:text-sm transition-all duration-300 w-[90%] sm:w-auto mb-12"
          >
            SEND ME AN EMAIL
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-6 md:gap-12"
        >
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              className="flex flex-col items-center gap-4 group"
            >
              <div className="w-16 h-16 rounded-full glass-card flex items-center justify-center group-hover:bg-gold/10 group-hover:border-gold/30 transition-all duration-300">
                <social.icon className="w-6 h-6 text-ivory/60 group-hover:text-gold transition-colors" />
              </div>
              <span className="text-sm tracking-widest text-ivory/60 uppercase group-hover:text-gold transition-colors">
                {social.name}
              </span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
