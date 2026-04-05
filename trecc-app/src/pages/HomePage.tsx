import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import HeroSlide from "../components/HeroSlide";
import DashboardSlide from "../components/DashboardSlide";
import ArchitectureSlide from "../components/ArchitectureSlide";
import Footer from "../components/Footer";

export default function HomePage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isMobileViewport, setIsMobileViewport] = useState(false);
  const isAnimating = useRef(false);
  const touchStartY = useRef(0);
  const totalSteps = 9;

  /*
    STEP MAPPING:
    0 = Hero
    1–3 = Dashboard (three beats)
    4 = Architecture — TRECC Protocol base only
    5 = Architecture — base + Liquidity Vault, Identity Registry, Risk Engine
    6 = Architecture — Off-chain / agent pillars
    7 = Architecture — Application / yield UI pillars
    8 = Footer
  */

  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)");
    const syncViewport = () => setIsMobileViewport(media.matches);
    syncViewport();
    media.addEventListener("change", syncViewport);
    return () => media.removeEventListener("change", syncViewport);
  }, []);

  useEffect(() => {
    const animationLockMs = isMobileViewport ? 520 : 700;

    const changeStep = (direction: number) => {
      isAnimating.current = true;
      setCurrentStep((prev) => {
        if (prev === 3 && direction === 1) return 4;
        return prev + direction;
      });
      window.setTimeout(() => {
        isAnimating.current = false;
      }, animationLockMs);
    };

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (isAnimating.current || Math.abs(e.deltaY) < 30) return;

      if (e.deltaY > 0 && currentStep < totalSteps - 1) {
        changeStep(1);
      } else if (e.deltaY < 0 && currentStep > 0) {
        changeStep(-1);
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };
    const handleTouchEnd = (e: TouchEvent) => {
      if (isAnimating.current) return;
      const touchEndY = e.changedTouches[0].clientY;
      const deltaY = touchStartY.current - touchEndY;

      if (deltaY > 50 && currentStep < totalSteps - 1) {
        changeStep(1);
      } else if (deltaY < -50 && currentStep > 0) {
        changeStep(-1);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [currentStep, isMobileViewport]);

  let yOffset = 0;
  if (currentStep === 0) yOffset = 0;
  else if (currentStep >= 1 && currentStep <= 3) yOffset = 100;
  else if (currentStep >= 4 && currentStep <= 7) yOffset = 200;
  else if (currentStep >= 8) yOffset = 300;

  return (
    <div className="fixed inset-0 w-full h-screen bg-[#030303] text-white overflow-hidden font-sans">
      <Navbar isLightMode={currentStep >= 8} />

      <motion.div
        className="w-full h-full flex flex-col"
        animate={{ y: `-${yOffset}vh` }}
        transition={{ duration: isMobileViewport ? 0.45 : 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="h-screen w-full shrink-0"><HeroSlide active={currentStep === 0} /></div>

        <div className="h-screen w-full shrink-0">
          <DashboardSlide step={currentStep} active={currentStep >= 1 && currentStep <= 3} />
        </div>

        <div className="h-screen w-full shrink-0">
          <ArchitectureSlide step={currentStep} />
        </div>

        <Footer active={currentStep >= 8} />
      </motion.div>
    </div>
  );
}
