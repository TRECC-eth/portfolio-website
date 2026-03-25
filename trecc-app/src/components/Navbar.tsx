import { motion } from "framer-motion";
import logoImg from "../assets/trecc-logo.png";

export default function Navbar() {
  return (
    <div className="fixed top-6 left-0 w-full z-50 flex justify-center px-6 pointer-events-none">
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-auto w-full max-w-5xl flex items-center justify-between px-6 py-3 rounded-full border border-white/10 bg-black/40 backdrop-blur-xl shadow-2xl"
      >
        {/* Logo Area */}
        <div className="flex items-center gap-3">
          <img
            src={logoImg}
            alt="TRECC"
            className="h-8 w-auto object-contain brightness-0 invert opacity-90"
          />
          <span className="text-white font-bold tracking-widest text-sm hidden sm:block">
            TRECC
          </span>
        </div>

        {/* Center Links */}
        <div className="hidden md:flex items-center gap-8">
          {["Protocol", "Agents", "Docs"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-sm font-medium text-[#8A8D93] hover:text-white transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Right CTA Button */}
        <button className="bg-steel text-black px-6 py-2 rounded-full text-sm font-semibold font-['system-ui'] hover:brightness-125 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3),inset_0_2px_2px_rgba(255,255,255,0.9),inset_0_-2px_3px_rgba(0,0,0,0.2)] border border-white/50">
          Launch App
        </button>
      </motion.nav>
    </div>
  );
}