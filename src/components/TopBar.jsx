export default function TopBar() {
    return (
      <div className="bg-gradient-to-r from-emerald-900 to-teal-700 overflow-hidden py-2 md:py-3">
        <div className="flex animate-marquee w-max">
          <MarqueeContent />
          <MarqueeContent />
        </div>
      </div>
    );
  }
  
  function MarqueeContent() {
    return (
      <div className="flex items-center gap-4 md:gap-8 px-4 text-white font-semibold text-[11px] md:text-sm whitespace-nowrap">
        <span>
          📘 GUÍA COMPLETA HOTMART
          <span className="bg-yellow-400 text-black px-1.5 py-0.5 rounded-full text-[9px] md:text-xs font-bold ml-1">
            PRO
          </span>
        </span>
  
        <span>🚀 SISTEMA AUTOMÁTICO</span>
        <span>💎 ACCESO DE POR VIDA</span>
        <span>⚡ PASO A PASO</span>
        <span>📈 PARA PRINCIPIANTES</span>
      </div>
    );
  }
  