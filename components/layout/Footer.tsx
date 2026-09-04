import Monogram from "@/components/ui/Monogram";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal border-t border-white/5 py-16 text-center relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 flex flex-col items-center gap-6 relative z-10">
        <Monogram className="w-12 h-12 text-gold/50" />
        
        <h2 className="font-playfair text-2xl text-ivory tracking-widest font-bold">MAYASKARA<span className="text-gold">.</span></h2>
        
        <div className="flex flex-col gap-3 text-sm text-ivory/50 mt-4">
          <p>© {currentYear} Mayaskara Bhat. All rights reserved.</p>
          <p>Student Portfolio | Sri Venkatramana P.U. College</p>
          <div className="mt-6 flex items-center justify-center gap-4 text-xs font-bold tracking-[0.3em] uppercase">
            <span className="text-gold">MB</span>
            <span className="text-white/20">×</span>
            <span className="text-ivory/40">3SA</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
