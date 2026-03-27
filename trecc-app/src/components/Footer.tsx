import { useState, useRef } from "react";
import { motion, useMotionValue, useAnimationFrame, useTransform } from "framer-motion";
import { FaGithub, FaTelegramPlane, FaDiscord } from "react-icons/fa";
import treccLogo from "../assets/favicon.png";

function ShinyText({ text, speed = 5, color = "#b5b5b5", shineColor = "#ffffff", spread = 120, className = "" }: {
  text: string; speed?: number; color?: string; shineColor?: string; spread?: number; className?: string;
}) {
  const progress = useMotionValue(0);
  const elapsedRef = useRef(0);
  const lastTimeRef = useRef<number | null>(null);

  useAnimationFrame((time) => {
    if (lastTimeRef.current === null) { lastTimeRef.current = time; return; }
    elapsedRef.current += time - lastTimeRef.current;
    lastTimeRef.current = time;
    const p = (elapsedRef.current % (speed * 1000)) / (speed * 1000) * 100;
    progress.set(p);
  });

  const backgroundPosition = useTransform(progress, (p) => `${150 - p * 2}% center`);

  return (
    <motion.span
      className={className}
      style={{
        backgroundImage: `linear-gradient(${spread}deg, ${color} 0%, ${color} 35%, ${shineColor} 50%, ${color} 65%, ${color} 100%)`,
        backgroundSize: "200% auto",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundPosition,
      }}
    >
      {text}
    </motion.span>
  );
}

export default function Footer() {
  const [logoPos, setLogoPos] = useState({ x: 0, y: 0 });

  const moveLogo = () => {
    const maxX = 60;
    const newX = (Math.random() - 0.5) * maxX * 2;
    setLogoPos({ x: newX, y: 0 });
  };

  const resetLogo = () => {
    setLogoPos({ x: 0, y: 0 });
  };

  return (
    <footer id="TRECC-footer" className="w-full h-screen shrink-0 flex flex-col bg-gray-50 text-gray-900 pt-12 relative overflow-hidden">

      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Top Main Section with Huge Text */}
      <div className="w-full flex-grow flex items-end justify-center px-4 md:px-8 pb-12 z-10 select-none group">
        <h1 className="text-[25vw] leading-[0.75] font-serif font-medium tracking-tighter text-gray-200 text-center w-full group-hover:scale-[1.03] group-hover:text-gray-900 transition-all duration-700 ease-out">
          <ShinyText text="TRECC" speed={5} color="#d1d5db" shineColor="#9ca3af" spread={120} />
        </h1>
      </div>

      {/* Bottom Section */}
      <div className="w-full bg-white px-6 md:px-12 pb-10 pt-12 z-10 border-t border-gray-200 flex flex-col justify-end min-h-[20vh] md:min-h-[25vh]">

        {/* Social Icons row (Top right of bottom section) */}
        <div className="flex justify-end gap-6 mb-8">
          <a href="https://twitter.com/trecc_eth" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 hover:-translate-y-1 transition-all duration-300 ease-out">
            <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900 hover:-translate-y-1 transition-all duration-300 ease-out">
            <FaDiscord className="w-7 h-7" />
          </a>
          <a href="https://github.com/TRECC-eth/Trecc-synthesis" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 hover:-translate-y-1 transition-all duration-300 ease-out">
            <FaGithub className="w-7 h-7" />
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900 hover:-translate-y-1 transition-all duration-300 ease-out">
            <FaTelegramPlane className="w-7 h-7" />
          </a>
        </div>

        {/* Links row (Bottom row) */}
        <div className="hidden md:flex justify-between items-center text-sm font-medium text-gray-600 w-full">
          <span>{new Date().getFullYear()}</span>

          <a href="#" className="hover:text-gray-900 transition-colors">Terms of Service</a>

          <a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a>

          <div
            className="flex justify-center items-center px-4 w-32 h-12 z-20"
            onMouseLeave={resetLogo}
          >
            <img
              src={treccLogo}
              alt="Trecc Logo"
              onMouseEnter={moveLogo}
              style={{ transform: `translateX(${logoPos.x}px)` }}
              className="w-12 h-12 object-contain transition-transform duration-200 ease-out cursor-default"
            />
          </div>

          <a href="#" className="hover:text-gray-900 transition-colors">Protocol Documentation</a>

          <a href="https://github.com/TRECC-eth/Trecc-synthesis" className="hover:text-gray-900 transition-colors">GitHub Repository</a>
        </div>

        {/* Mobile Links row */}
        <div className="flex md:hidden flex-wrap justify-center gap-4 items-center text-sm font-medium text-gray-600 w-full">
          <span>{new Date().getFullYear()}</span>
          <a href="#" className="hover:text-gray-900 transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-gray-900 transition-colors">Protocol Documentation</a>
          <a href="https://github.com/TRECC-eth/Trecc-synthesis" className="hover:text-gray-900 transition-colors">GitHub Repository</a>
        </div>

      </div>
    </footer>
  );
}
