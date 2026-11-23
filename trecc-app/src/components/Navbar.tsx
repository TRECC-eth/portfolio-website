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
          <div className="flex items-center justify-between gap-4 md:grid md:grid-cols-[1fr_auto_1fr]">
            {/* Logo Area */}
            <Link to="/" className="flex items-center gap-2 md:gap-3 min-w-0 md:justify-self-start">
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
            <div className="hidden md:flex items-center gap-8 md:justify-self-center">
              <a
                href={MARKETS_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Markets: open TRECC Pulse in a new tab"
                className={`-my-1.5 inline-flex items-center rounded-full border border-transparent px-3.5 py-1.5 text-sm font-medium transition-all duration-500 ${isLightMode
                  ? "text-black [background:linear-gradient(#ffffff,#ffffff)_padding-box,linear-gradient(135deg,rgba(0,0,0,0.55),rgba(0,0,0,0.1)_50%,rgba(0,0,0,0.35))_border-box] hover:[background:linear-gradient(#f4f4f4,#f4f4f4)_padding-box,linear-gradient(135deg,rgba(0,0,0,0.8),rgba(0,0,0,0.2)_50%,rgba(0,0,0,0.5))_border-box]"
                  : "text-white [background:linear-gradient(#0c0c0c,#0c0c0c)_padding-box,linear-gradient(135deg,rgba(255,255,255,0.85),rgba(255,255,255,0.12)_50%,rgba(215,215,182,0.6))_border-box] hover:[background:linear-gradient(#161616,#161616)_padding-box,linear-gradient(135deg,#ffffff,rgba(255,255,255,0.3)_50%,rgba(215,215,182,0.85))_border-box]"
                  }`}
              >
                Markets
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
            <div className="hidden md:flex items-center gap-2.5 shrink-0 md:justify-self-end">
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
                className={`inline-flex w-fit items-center rounded-full border border-transparent px-3.5 py-1.5 text-sm font-medium transition-all duration-500 ${isLightMode
                  ? "text-black [background:linear-gradient(#ffffff,#ffffff)_padding-box,linear-gradient(135deg,rgba(0,0,0,0.55),rgba(0,0,0,0.1)_50%,rgba(0,0,0,0.35))_border-box] hover:[background:linear-gradient(#f4f4f4,#f4f4f4)_padding-box,linear-gradient(135deg,rgba(0,0,0,0.8),rgba(0,0,0,0.2)_50%,rgba(0,0,0,0.5))_border-box]"
                  : "text-white [background:linear-gradient(#0c0c0c,#0c0c0c)_padding-box,linear-gradient(135deg,rgba(255,255,255,0.85),rgba(255,255,255,0.12)_50%,rgba(215,215,182,0.6))_border-box] hover:[background:linear-gradient(#161616,#161616)_padding-box,linear-gradient(135deg,#ffffff,rgba(255,255,255,0.3)_50%,rgba(215,215,182,0.85))_border-box]"
                  }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Markets
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
