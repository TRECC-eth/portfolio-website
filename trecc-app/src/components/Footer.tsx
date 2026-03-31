import { useState, useRef } from "react";
import { FaTelegramPlane, FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import treccLogo from "../assets/favicon.png";

function ShinyText({ text, speed = 5, color = "#e5e7eb", shineColor = "#000000", spread = 120, className = "" }: {
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
  const [logoPos, setLogoPos] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const logoPosRef = useRef(0);

  const moveLogo = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const maxOffset = rect.width / 2 - 28;
    const mouseX = e.clientX - rect.left;
    // Logo's current absolute X within container
    const logoCenterX = rect.width / 2 + logoPosRef.current;
    const distToCursor = Math.abs(mouseX - logoCenterX);

    if (distToCursor < 60) {
      let next;
      do {
        next = (Math.random() * 2 - 1) * maxOffset;
      } while (Math.abs(next - logoPosRef.current) < maxOffset * 0.5);
      logoPosRef.current = next;
      setLogoPos(next);
    }
  };

  const resetLogo = () => {
    logoPosRef.current = 0;
    setLogoPos(0);
  };

  return (
<<<<<<< Updated upstream
    <footer id="TRECC-footer" className="w-full h-screen shrink-0 flex flex-col pt-12 relative overflow-hidden" style={{ background: "#0A0A0A" }}>

      {/* Radial glow — metallic silver light emanating from text base */}
      <div className="absolute pointer-events-none" style={{
        bottom: "calc(20vh + 2px)",
        left: "50%",
        transform: "translateX(-50%)",
        width: "110vw",
        height: "55vh",
        background: "radial-gradient(ellipse at 50% 100%, rgba(210,216,226,0.38) 0%, rgba(180,190,208,0.18) 30%, rgba(150,165,188,0.07) 55%, transparent 72%)",
      }}></div>

      {/* Top Main Section with Huge Text — flush to the border */}
      <div className="w-full flex-grow flex items-end justify-center px-4 md:px-8 pb-0 z-10 select-none group overflow-visible">
        <h1 className="text-[25vw] leading-none font-serif font-medium tracking-tighter text-center w-full group-hover:scale-[1.03] transition-all duration-700 ease-out" style={{
          marginBottom: "-0.19em",
          background: "linear-gradient(to bottom, #2a2a2a 0%, #888ea0 45%, #d8dae0 72%, #ffffff 100%)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}>
          TRECC
        </h1>
      </div>

      {/* Bottom Section — cool platinum primary, flush with text */}
      <div className="w-full px-6 md:px-12 pb-10 pt-12 z-10 flex flex-col justify-end min-h-[20vh] md:min-h-[25vh]" style={{ background: "#ebeef4" }}>
=======
    <footer id="TRECC-footer" className="w-full h-screen shrink-0 flex flex-col bg-white text-gray-900 pt-12 relative overflow-hidden">

      {/* Decorative Blur Backgrounds - Flipped to dark blurs with very low opacity */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-black/[0.02] rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-black/[0.02] rounded-full blur-[120px] pointer-events-none"></div>

      {/* Top Main Section with Huge Text */}
      <div className="w-full flex-grow flex items-end justify-center px-4 md:px-8 pb-12 z-10 select-none group">
        <h1 className="text-[25vw] leading-[0.75] font-serif font-medium tracking-tighter text-center w-full transition-all duration-700 ease-out group-hover:scale-[1.02]">
          {/* Base text is light gray, shine is black */}
          <ShinyText text="TRECC" speed={5} color="#e5e7eb" shineColor="#000000" spread={120} />
        </h1>
      </div>

      {/* Bottom Section - Clean off-white background with a light border */}
      <div className="w-full bg-gray-50 px-6 md:px-12 pb-10 pt-12 z-10 border-t border-gray-200 flex flex-col justify-end min-h-[20vh] md:min-h-[25vh]">
>>>>>>> Stashed changes

        {/* Social Icons row */}
        {/* Social Icons row */}
        <div className="flex justify-end gap-6 mb-8">
<<<<<<< Updated upstream
          <a href="https://twitter.com/trecc_eth" target="_blank" rel="noopener noreferrer" className="hover:-translate-y-1 transition-all duration-300 ease-out" style={{ color: "#94a3b8" }} onMouseEnter={e => (e.currentTarget.style.color = "#1e293b")} onMouseLeave={e => (e.currentTarget.style.color = "#94a3b8")}>
            <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
          </a>
          <a href="https://youtube.com/@trecc.finance" target="_blank" rel="noopener noreferrer" className="hover:-translate-y-1 transition-all duration-300 ease-out" style={{ color: "#94a3b8" }} onMouseEnter={e => (e.currentTarget.style.color = "#1e293b")} onMouseLeave={e => (e.currentTarget.style.color = "#94a3b8")}>
            <FaYoutube className="w-7 h-7" />
          </a>
          <a href="mailto:treccxyz@gmail.com" className="hover:-translate-y-1 transition-all duration-300 ease-out" style={{ color: "#94a3b8" }} onMouseEnter={e => (e.currentTarget.style.color = "#1e293b")} onMouseLeave={e => (e.currentTarget.style.color = "#94a3b8")}>
            <MdEmail className="w-7 h-7" />
          </a>
          <a href="#" className="hover:-translate-y-1 transition-all duration-300 ease-out" style={{ color: "#94a3b8" }} onMouseEnter={e => (e.currentTarget.style.color = "#1e293b")} onMouseLeave={e => (e.currentTarget.style.color = "#94a3b8")}>
=======
          <a href="https://twitter.com/trecc_eth" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 hover:-translate-y-1 transition-all duration-300 ease-out">
            <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
          </a>
          <a href="https://youtube.com/@trecc.finance" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 hover:-translate-y-1 transition-all duration-300 ease-out">
            <FaYoutube className="w-7 h-7" />
          </a>
          <a href="mailto:treccxyz@gmail.com" className="text-gray-500 hover:text-gray-900 hover:-translate-y-1 transition-all duration-300 ease-out">
            <MdEmail className="w-7 h-7" />
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-900 hover:-translate-y-1 transition-all duration-300 ease-out">
>>>>>>> Stashed changes
            <FaTelegramPlane className="w-7 h-7" />
          </a>
        </div>

<<<<<<< Updated upstream
        {/* Links row (Bottom row) */}
        <div className="hidden md:grid grid-cols-3 items-center text-sm font-medium w-full" style={{ color: "#94a3b8" }}>
          <div className="flex items-center gap-8">
            <span>{new Date().getFullYear()}</span>
            <a href="#" className="transition-colors" onMouseEnter={e => (e.currentTarget.style.color = "#1e293b")} onMouseLeave={e => (e.currentTarget.style.color = "#94a3b8")}>Terms of Service</a>
            <a href="#" className="transition-colors" onMouseEnter={e => (e.currentTarget.style.color = "#1e293b")} onMouseLeave={e => (e.currentTarget.style.color = "#94a3b8")}>Privacy Policy</a>
          </div>
=======
        {/* Links row (Desktop) */}
        <div className="hidden md:flex justify-between items-center text-sm font-medium text-gray-500 w-full">
          <span>{new Date().getFullYear()}</span>

          <a href="#" className="hover:text-gray-900 transition-colors">Terms of Service</a>

          <a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a>
>>>>>>> Stashed changes

          <div
            ref={containerRef}
            className="flex justify-center items-center h-12 z-20"
            onMouseMove={moveLogo}
            onMouseLeave={resetLogo}
          >
            <img
              src={treccLogo}
              alt="Trecc Logo"
<<<<<<< Updated upstream
              style={{ transform: `translateX(${logoPos}px)`, transition: "transform 400ms linear" }}
              className="w-12 h-12 object-contain cursor-default"
            />
          </div>

          <div className="flex items-center justify-end gap-8">
            <a href="#" className="transition-colors" onMouseEnter={e => (e.currentTarget.style.color = "#1e293b")} onMouseLeave={e => (e.currentTarget.style.color = "#94a3b8")}>Protocol Documentation</a>
            <a href="https://github.com/TRECC-eth/Trecc-synthesis" className="transition-colors" onMouseEnter={e => (e.currentTarget.style.color = "#1e293b")} onMouseLeave={e => (e.currentTarget.style.color = "#94a3b8")}>GitHub Repository</a>
          </div>
        </div>

        {/* Mobile Links row */}
        <div className="flex md:hidden flex-wrap justify-center gap-4 items-center text-sm font-medium w-full" style={{ color: "#94a3b8" }}>
          <span>{new Date().getFullYear()}</span>
          <a href="#" className="transition-colors" onMouseEnter={e => (e.currentTarget.style.color = "#1e293b")} onMouseLeave={e => (e.currentTarget.style.color = "#94a3b8")}>Terms of Service</a>
          <a href="#" className="transition-colors" onMouseEnter={e => (e.currentTarget.style.color = "#1e293b")} onMouseLeave={e => (e.currentTarget.style.color = "#94a3b8")}>Privacy Policy</a>
          <a href="#" className="transition-colors" onMouseEnter={e => (e.currentTarget.style.color = "#1e293b")} onMouseLeave={e => (e.currentTarget.style.color = "#94a3b8")}>Protocol Documentation</a>
          <a href="https://github.com/TRECC-eth/Trecc-synthesis" className="transition-colors" onMouseEnter={e => (e.currentTarget.style.color = "#1e293b")} onMouseLeave={e => (e.currentTarget.style.color = "#94a3b8")}>GitHub Repository</a>
=======
              onMouseEnter={moveLogo}
              style={{ transform: `translateX(${logoPos.x}px)` }}
              // Note: Added a brightness-0 class here just in case your logo is white text. 
              // If your logo is already dark, just remove "brightness-0".
              className="w-12 h-12 object-contain transition-transform duration-200 ease-out cursor-default opacity-80 hover:opacity-100 brightness-0"
            />
          </div>

          <a href="#" className="hover:text-gray-900 transition-colors">Protocol Documentation</a>

          <a href="https://github.com/TRECC-eth/Trecc-synthesis" className="hover:text-gray-900 transition-colors">GitHub Repository</a>
        </div>

        {/* Mobile Links row */}
        <div className="flex md:hidden flex-wrap justify-center gap-4 items-center text-sm font-medium text-gray-500 w-full">
          <span>{new Date().getFullYear()}</span>
          <a href="#" className="hover:text-gray-900 transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-gray-900 transition-colors">Protocol Documentation</a>
          <a href="https://github.com/TRECC-eth/Trecc-synthesis" className="hover:text-gray-900 transition-colors">GitHub Repository</a>
>>>>>>> Stashed changes
        </div>

      </div>
    </footer>
  );
}