import Monogram from "@/components/ui/Monogram";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] bg-[#050505] flex items-center justify-center flex-col gap-8">
      <div className="w-24 h-24 text-gold">
        <Monogram animated={true} />
      </div>
      <div className="text-gold/50 font-playfair tracking-[0.3em] text-sm uppercase animate-pulse">
        Think. Strategize. Create.
      </div>
    </div>
  );
}
