import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import logoImg from "../assets/trecc-logo.png";
import WaitlistModal from "./WaitlistModal";

interface NavbarProps {
  isLightMode?: boolean;
  /** Hide the desktop Join Waitlist button, e.g. on the hero, which has its own in the centre */
  hideWaitlist?: boolean;
}

const MARKETS_URL = "https://pulse.trecc.finance";

export default function Navbar({ isLightMode = false, hideWaitlist = false }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  return (
    <>
      <div className="fixed top-3 md:top-6 left-0 w-full z-50 flex justify-center px-4 md:px-6 pointer-events-none">
        <motion.nav
          initial={{ y: -12, opacity: 0, scale: 0.985 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className={`pointer-events-auto w-full max-w-5xl px-5 py-2.5 md:px-6 md:py-3 rounded-[1.75rem] md:rounded-full border backdrop-blur-xl transition-all duration-500 ease-in-out ${isLightMode
            ? "border-black/10 bg-transparent shadow-none"
            : "border-white/10 bg-transparent"
            }`}
        >
          <div className="flex items-center justify-between gap-4">
            {/* Logo Area */}
            <Link to="/" className="flex items-center gap-2 md:gap-3 min-w-0">
              <img
                src={logoImg}
                alt="TRECC"
                className={`h-7 md:h-8 w-auto object-contain transition-all duration-500 drop-shadow-[0_0_10px_rgba(255,255,255,0.18)] ${isLightMode
                  ? "brightness-0 contrast-125 saturate-0"
                  : "brightness-125 contrast-125 saturate-0 sepia-[0.08] hue-rotate-[8deg]"
                  }`}
                style={!isLightMode ? { filter: "drop-shadow(0 0 14px rgba(215,215,182,0.22))" } : undefined}
              />
            </Link>

            {/* Center Links */}
            <div className="hidden md:flex items-center gap-8">
              <a
                href={MARKETS_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Markets, live: open TRECC Pulse in a new tab"
                className={`group inline-flex items-center gap-2 text-sm font-medium transition-colors duration-500 ${isLightMode ? "text-black" : "text-white"}`}
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#0ECB81] opacity-60 motion-reduce:hidden" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#0ECB81]" />
                </span>
                <span className={`transition-opacity duration-300 ${isLightMode ? "group-hover:opacity-70" : "group-hover:opacity-80"}`}>Markets</span>
                <span className={`rounded-full px-1.5 py-[1px] text-[9.5px] font-semibold uppercase tracking-[0.08em] transition-colors duration-300 ${isLightMode
                  ? "bg-[#0ECB81]/15 text-[#067a4d] group-hover:bg-[#0ECB81]/25"
                  : "bg-[#0ECB81]/15 text-[#5ee0a8] group-hover:bg-[#0ECB81]/25"
                  }`}>Live</span>
              </a>
              <a
                href="https://docs.trecc.finance"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-sm font-medium transition-colors duration-500 ${isLightMode
                  ? "text-gray-600 hover:text-black"
                  : "text-[#8A8D93] hover:text-white"
                  }`}
              >
                Docs
              </a>
              <Link
                to="/contact"
                className={`text-sm font-medium transition-colors duration-500 ${isLightMode
                  ? "text-gray-600 hover:text-black"
                  : "text-[#8A8D93] hover:text-white"
                  }`}
              >
                Contact Us
              </Link>
            </div>

            {/* Desktop CTA Button */}
            <div className="hidden md:flex items-center gap-2.5 shrink-0">
            <button
              type="button"
              onClick={() => setIsWaitlistOpen(true)}
              className={`${hideWaitlist ? "hidden" : "inline-flex"} shrink-0 px-4 py-2 md:px-6 md:py-2 rounded-full text-sm font-semibold font-['system-ui'] transition-all duration-500 border ${isLightMode
                ? "bg-black text-white hover:bg-gray-800 border-black"
                : "bg-steel text-black hover:brightness-125 border-white/50"
                }`}
            >
              Join Waitlist
            </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((value) => !value)}
              className={`md:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border transition-colors ${isLightMode
                ? "border-black/10 bg-white/80 text-black"
                : "border-white/15 bg-black/25 text-white"
                }`}
            >
              <span className="sr-only">{isMenuOpen ? "Close menu" : "Open menu"}</span>
              <span className="relative block h-4 w-5">
                <span
                  className={`absolute left-0 top-0 h-[2px] w-5 rounded-full transition-all duration-300 ${isLightMode ? "bg-black" : "bg-white shadow-[0_0_8px_rgba(255,255,255,0.35)]"} ${isMenuOpen ? "translate-y-[7px] rotate-45" : ""}`}
                />
                <span
                  className={`absolute left-0 top-[7px] h-[2px] w-5 rounded-full transition-all duration-300 ${isLightMode ? "bg-black" : "bg-white shadow-[0_0_8px_rgba(255,255,255,0.35)]"} ${isMenuOpen ? "opacity-0" : "opacity-100"}`}
                />
                <span
                  className={`absolute left-0 top-[14px] h-[2px] w-5 rounded-full transition-all duration-300 ${isLightMode ? "bg-black" : "bg-white shadow-[0_0_8px_rgba(255,255,255,0.35)]"} ${isMenuOpen ? "-translate-y-[7px] -rotate-45" : ""}`}
                />
              </span>
            </button>
          </div>

          <motion.div
            initial={false}
            animate={{
              height: isMenuOpen ? "auto" : 0,
              opacity: isMenuOpen ? 1 : 0,
              marginTop: isMenuOpen ? 16 : 0,
            }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden"
          >
            <div className={`flex flex-col gap-3 rounded-3xl border p-4 ${isLightMode ? "border-black/10 bg-white/85" : "border-white/10 bg-black/35"}`}>
              <a
                href={MARKETS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 text-sm font-medium transition-colors duration-500 ${isLightMode ? "text-gray-700 hover:text-black" : "text-[#c1c4ca] hover:text-white"}`}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="h-2 w-2 rounded-full bg-[#0ECB81]" />
                Markets
                <span className={`rounded-full px-1.5 py-[1px] text-[9.5px] font-semibold uppercase tracking-[0.08em] bg-[#0ECB81]/15 ${isLightMode ? "text-[#067a4d]" : "text-[#5ee0a8]"}`}>Live</span>
              </a>
              <a
                href="https://docs.trecc.finance"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-sm font-medium transition-colors duration-500 ${isLightMode ? "text-gray-700 hover:text-black" : "text-[#c1c4ca] hover:text-white"}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Docs
              </a>
              <Link
                to="/contact"
                className={`text-sm font-medium transition-colors duration-500 ${isLightMode ? "text-gray-700 hover:text-black" : "text-[#c1c4ca] hover:text-white"}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
              <button
                type="button"
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsWaitlistOpen(true);
                }}
                className={`mt-1 inline-flex w-full items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold font-['system-ui'] transition-all duration-500 border ${isLightMode
                  ? "bg-black text-white hover:bg-gray-800 border-black"
                  : "bg-steel text-black hover:brightness-125 border-white/50"
                  }`}
              >
                Join Waitlist
              </button>
            </div>
          </motion.div>
        </motion.nav>
      </div>

      <WaitlistModal open={isWaitlistOpen} onClose={() => setIsWaitlistOpen(false)} />
    </>
  );
}
