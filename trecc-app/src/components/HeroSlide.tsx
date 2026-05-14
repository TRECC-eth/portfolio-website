import { useEffect, useRef, useState } from "react";
import WaitlistModal from "./WaitlistModal";

export default function HeroSlide({ active = true }: { active?: boolean }) {
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const vantaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!active) {
      if (vantaEffect) {
        vantaEffect.destroy();
        setVantaEffect(null);
      }
      return;
    }

    const isMobile = window.matchMedia("(max-width: 767px)").matches;

    // Check if the global VANTA object has loaded from the index.html scripts
    if (!vantaEffect && vantaRef.current && (window as any).VANTA) {
      try {
        setVantaEffect(
          (window as any).VANTA.TOPOLOGY({
            el: vantaRef.current,
            mouseControls: !isMobile,
            touchControls: false,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 0.85,
            color: 0xd7d7b6, // The silver topography lines
            backgroundColor: 0x0, // Pure black background
            speed: isMobile ? 15.0 : 25.0
          })
        );
      } catch (error) {
        console.error("Vanta initialization failed:", error);
      }
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [active, vantaEffect]);

  return (
    <>
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
            Provide liquidity to fund autonomous agents, or mint your own to execute operations.
          </p>

          <button
            type="button"
            onClick={() => setIsWaitlistOpen(true)}
            className="pointer-events-auto mt-7 inline-flex items-center justify-center rounded-lg border border-white/55 bg-[linear-gradient(135deg,#ffffff_0%,#d9dde2_22%,#8e969f_48%,#f6f7f8_68%,#aeb5bd_100%)] px-6 py-3 text-sm font-semibold text-black shadow-[inset_0_1px_0_rgba(255,255,255,0.85),inset_0_-1px_0_rgba(0,0,0,0.32),0_18px_44px_rgba(0,0,0,0.38)] transition-all duration-300 active:scale-[0.98] md:hidden"
          >
            Join Waitlist
          </button>
        </div>
      </div>
      <WaitlistModal open={isWaitlistOpen} onClose={() => setIsWaitlistOpen(false)} />
    </>
  );
}
