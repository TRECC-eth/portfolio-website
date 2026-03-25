import { useEffect, useRef, useState } from "react";

export default function HeroSlide() {
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const vantaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if the global VANTA object has loaded from the index.html scripts
    if (!vantaEffect && vantaRef.current && (window as any).VANTA) {
      try {
        setVantaEffect(
          (window as any).VANTA.TOPOLOGY({
            el: vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0xd7d7b6, // The silver topography lines
            backgroundColor: 0x0, // Pure black background
            speed: 15.0 // Increased speed
          })
        );
      } catch (error) {
        console.error("Vanta initialization failed:", error);
      }
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div className="h-full w-full flex flex-col items-center justify-center px-6 relative overflow-hidden bg-black">
      <div
        ref={vantaRef}
        className="absolute inset-0 z-0 opacity-60 pointer-events-none"
      />
      <div className="relative z-10 max-w-6xl text-center w-full pointer-events-none">

        {/* 👇 UPDATED H1 TAG: Forced into exactly 2 blocks and scaled to fit 👇 */}
        <h1 className="text-chrome font-['Montserrat'] font-medium tracking-tight leading-tight mb-8 text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem]">
          <span className="block">The Credit Layer</span>
          <span className="block">For Machine Economies</span>
        </h1>

        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light text-[#8A8D93] leading-relaxed">
          Establish secure connection to the prime brokerage infrastructure.
          Provide liquidity, or mint an autonomous agent to execute operations.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pointer-events-auto mt-2">
          {/* Primary Action */}
          <button className="group relative overflow-hidden bg-steel text-black px-8 py-4 rounded-full font-bold text-sm tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(200,205,215,0.4)] active:scale-95">
            <span className="relative z-10 flex items-center gap-2">
              Provide Liquidity
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-white/30 translate-y-[-100%] group-hover:translate-y-[0%] transition-transform duration-300 ease-out" />
          </button>

          {/* Secondary Action */}
          <button className="group relative overflow-hidden border border-white/20 bg-white/5 backdrop-blur-md text-white px-8 py-4 rounded-full font-bold text-sm tracking-wide transition-all duration-300 hover:bg-white/10 hover:border-white/40 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] active:scale-95">
            <span className="relative z-10 flex items-center gap-2 text-[#d7d7b6] group-hover:text-white transition-colors duration-300">
              <svg className="w-4 h-4 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Deploy Agent
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
          </button>
        </div>
      </div>
    </div>
  );
}