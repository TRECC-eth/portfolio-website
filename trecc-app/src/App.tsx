import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import HeroSlide from "./components/HeroSlide";
import DashboardSlide from "./components/DashboardSlide";
import ArchitectureSlide from "./components/ArchitectureSlide";

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const isAnimating = useRef(false);
  const totalSlides = 4; // Hero, Dashboard, Architecture, Footer

  useEffect(() => {
    // Handle Desktop Mouse Wheel
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault(); // Stop normal scrolling completely
      if (isAnimating.current) return;

      // Threshold to ignore tiny trackpad micro-scrolls
      if (Math.abs(e.deltaY) < 30) return;

      if (e.deltaY > 0 && currentSlide < totalSlides - 1) {
        changeSlide(1);
      } else if (e.deltaY < 0 && currentSlide > 0) {
        changeSlide(-1);
      }
    };

    // Handle Mobile Swiping
    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };
    const handleTouchMove = (e: TouchEvent) => {
      if (isAnimating.current) return;
      const touchEndY = e.touches[0].clientY;
      const deltaY = touchStartY - touchEndY;

      if (deltaY > 50 && currentSlide < totalSlides - 1) {
        changeSlide(1);
      } else if (deltaY < -50 && currentSlide > 0) {
        changeSlide(-1);
      }
    };

    const changeSlide = (direction: number) => {
      isAnimating.current = true;
      setCurrentSlide((prev) => prev + direction);
      // Lock scrolling for 1.2 seconds so the animation finishes smoothly
      setTimeout(() => {
        isAnimating.current = false;
      }, 1200); 
    };

    // Attach listeners with passive: false so we can preventDefault()
    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: false });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [currentSlide]);

  return (
    // Fixed inset-0 guarantees the user cannot manually scroll out of bounds
    <div className="fixed inset-0 w-full h-screen bg-[#030303] text-white overflow-hidden font-sans">
      <Navbar />

      {/* The Master Track that moves up and down */}
      <motion.div
        className="w-full h-full flex flex-col"
        animate={{ y: `-${currentSlide * 100}vh` }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} // Buttery smooth slide curve
      >
        <div className="h-screen w-full shrink-0"><HeroSlide /></div>
        <div className="h-screen w-full shrink-0"><DashboardSlide /></div>
        <div className="h-screen w-full shrink-0"><ArchitectureSlide /></div>
        
        {/* Slide 4 (Footer / Next Section) */}
        <div className="h-screen w-full shrink-0 flex flex-col items-center justify-center bg-white text-black rounded-t-[3rem] shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
          <h2 className="text-5xl font-light tracking-tight mb-4">Ecosystem First.</h2>
          <p className="text-gray-500">The next section of your platform.</p>
        </div>
      </motion.div>
    </div>
  );
}