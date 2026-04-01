import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import HeroSlide from "../components/HeroSlide";
import DashboardSlide from "../components/DashboardSlide";
import ArchitectureSlide from "../components/ArchitectureSlide";
import Footer from "../components/Footer";

export default function HomePage() {
  const [currentStep, setCurrentStep] = useState(0);
  const isAnimating = useRef(false);
  const totalSteps = 8;

  /*
    STEP MAPPING:
    0 = Hero
    1 = Dashboard (Base empty state)
    2 = Dashboard (Red Bearish Line draws in)
    3 = Dashboard (Green Bullish Bars shoot up)
    4 = Architecture (Bottom Layer Explanation, Instantly loaded)
    5 = Architecture (Agents Layer Explanation)
    6 = Architecture (Yield Layer Explanation)
    7 = Ecosystem/Footer
  */

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (isAnimating.current || Math.abs(e.deltaY) < 30) return;

      if (e.deltaY > 0 && currentStep < totalSteps - 1) {
        changeStep(1);
      } else if (e.deltaY < 0 && currentStep > 0) {
        changeStep(-1);
      }
    };

    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };
    const handleTouchMove = (e: TouchEvent) => {
      if (isAnimating.current) return;
      const touchEndY = e.touches[0].clientY;
      const deltaY = touchStartY - touchEndY;

      if (deltaY > 50 && currentStep < totalSteps - 1) {
        changeStep(1);
      } else if (deltaY < -50 && currentStep > 0) {
        changeStep(-1);
      }
    };

    const changeStep = (direction: number) => {
      isAnimating.current = true;
      setCurrentStep((prev) => {
        if (prev === 3 && direction === 1) return 4;
        return prev + direction;
      });
      setTimeout(() => {
        isAnimating.current = false;
      }, 900);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: false });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [currentStep]);

  let yOffset = 0;
  if (currentStep === 0) yOffset = 0;
  else if (currentStep >= 1 && currentStep <= 3) yOffset = 100;
  else if (currentStep >= 4 && currentStep <= 6) yOffset = 200;
  else if (currentStep >= 7) yOffset = 300;

  return (
    <div className="fixed inset-0 w-full h-screen bg-[#030303] text-white overflow-hidden font-sans">
      <Navbar isLightMode={currentStep >= 7} />

      <motion.div
        className="w-full h-full flex flex-col"
        animate={{ y: `-${yOffset}vh` }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="h-screen w-full shrink-0"><HeroSlide /></div>

        <div className="h-screen w-full shrink-0">
          <DashboardSlide step={currentStep} />
        </div>

        <div className="h-screen w-full shrink-0">
          <ArchitectureSlide step={currentStep} />
        </div>

        <Footer />
      </motion.div>
    </div>
  );
}
