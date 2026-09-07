"use client";

import { motion } from "framer-motion";
import { Share2, Link as LinkIcon, Check, QrCode } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export default function ShareSection() {
  const [copied, setCopied] = useState(false);
  const [showOptions, setShowOptions] = useState(false);

  const handleNativeShare = async () => {
    if (typeof window === "undefined") return;
    
    const shareData = {
      title: "Mayaskara Bhat - Portfolio",
      text: "Think. Strategize. Create. Check out my portfolio!",
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.log("Error sharing:", err);
      }
    } else {
      setShowOptions(!showOptions);
    }
  };

  const handleCopyLink = () => {
    if (typeof window === "undefined") return;
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleWhatsApp = () => {
    if (typeof window === "undefined") return;
    const text = encodeURIComponent("Check out Mayaskara Bhat's portfolio: " + window.location.href);
    window.open(`https://wa.me/?text=${text}`, "_blank");
  };

  return (
    <section className="py-24 relative overflow-hidden bg-[#0a0a0a] border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
          
          {/* Share Action */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start text-center md:text-left gap-6"
          >
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-ivory tracking-wide">
              SHARE MY <span className="text-gold text-gradient">PORTFOLIO</span>
            </h2>
            <p className="text-ivory/60 text-lg max-w-md">
              Help me expand my network. Share this portfolio with your connections, mentors, or peers.
            </p>
            
            <div className="w-full flex flex-col gap-4 mt-2">
              <button 
                onClick={handleNativeShare}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 text-ivory border border-white/10 px-8 py-4 rounded-sm font-semibold tracking-widest text-sm transition-all duration-300 group"
              >
                <Share2 className="w-5 h-5 text-gold group-hover:scale-110 transition-transform" />
                SHARE PORTFOLIO
              </button>

              {/* Fallback Options (Visible on desktop or if Web Share API is missing) */}
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <button 
                  onClick={handleWhatsApp}
                  className="inline-flex items-center gap-2 text-ivory/60 hover:text-green-500 text-sm font-medium transition-colors px-4 py-2 bg-white/5 rounded-sm"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.66-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.81 11.81 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.88 11.88 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 0 0-3.48-8.413Z"/>
                  </svg>
                  WhatsApp
                </button>
                <button 
                  onClick={handleCopyLink}
                  className="inline-flex items-center gap-2 text-ivory/60 hover:text-ivory text-sm font-medium transition-colors px-4 py-2 bg-white/5 rounded-sm"
                >
                  {copied ? <Check className="w-4 h-4 text-green-500" /> : <LinkIcon className="w-4 h-4" />}
                  {copied ? "Copied!" : "Copy Link"}
                </button>
              </div>
            </div>
          </motion.div>

          {/* QR Code Placeholder */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center p-8 border border-white/10 bg-[#121212] rounded-sm relative group overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <h3 className="font-playfair text-xl md:text-2xl font-bold text-ivory tracking-[0.2em] mb-2 uppercase text-center relative z-10">
              ONE SCAN. ONE JOURNEY.
            </h3>
            <p className="text-ivory/50 text-sm text-center max-w-xs mb-8 relative z-10">
              Explore my portfolio and follow my learning journey.
            </p>

            <div className="w-40 h-40 bg-white rounded-md flex items-center justify-center relative z-10 p-2 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all duration-500 hover:-translate-y-1">
              <Image 
                src="/images/share-code.png"
                alt="Scan to share portfolio"
                width={150}
                height={150}
                className="w-full h-full object-contain rounded-sm"
              />
            </div>
            
            <div className="mt-6 text-xs text-gold/80 tracking-[0.2em] uppercase font-semibold relative z-10">
              SCAN TO SHARE
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
