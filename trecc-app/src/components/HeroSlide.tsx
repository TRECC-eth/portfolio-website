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
    <div className="h-full w-full flex flex-col items-center justify-center px-4 sm:px-6 pt-24 pb-16 md:pt-0 md:pb-0 relative overflow-hidden bg-black">
      <div
        ref={vantaRef}
        className="absolute inset-0 z-0 opacity-60 pointer-events-none"
      />
      <div className="relative z-10 max-w-6xl text-center w-full pointer-events-none">

        {/* 👇 UPDATED H1 TAG: Adjusted mobile text sizes so the two blocks don't wrap awkwardly 👇 */}
        <h1 className="text-chrome font-['Montserrat'] font-medium tracking-tight leading-[1.05] mb-5 sm:mb-8 text-3xl min-[400px]:text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem]">
          <span className="block">The Credit Layer</span>
          <span className="block">For Machine Economies</span>
        </h1>

        {/* 👇 UPDATED P TAG: Scaled down text for narrow screens to maintain readability 👇 */}
        <p className="text-sm sm:text-lg md:text-xl max-w-xl sm:max-w-2xl mx-auto mb-0 sm:mb-12 font-light text-[#8A8D93] leading-relaxed px-3 sm:px-0">
          Establish secure connection to the prime brokerage infrastructure.
          Provide liquidity, or mint an autonomous agent to execute operations.
        </p>

      </div>
    </div>
  );
}
