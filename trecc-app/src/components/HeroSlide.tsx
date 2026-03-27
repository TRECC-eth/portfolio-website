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

      </div>
    </div>
  );
}