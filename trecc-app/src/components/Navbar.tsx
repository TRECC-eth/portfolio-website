import { motion } from "framer-motion";
import logoImg from "../assets/trecc-logo.png";

interface NavbarProps {
  isLightMode?: boolean;
}

export default function Navbar({ isLightMode = false }: NavbarProps) {
  return (
    <div className="fixed top-6 left-0 w-full z-50 flex justify-center px-6 pointer-events-none">
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`pointer-events-auto w-full max-w-5xl flex items-center justify-between px-6 py-3 rounded-full border backdrop-blur-xl transition-all duration-500 ease-in-out ${isLightMode
            ? "border-black/10 bg-transparent shadow-none"
            : "border-white/10 bg-transparent"
          }`}
      >
        {/* Logo Area */}
        <div className="flex items-center gap-3">
          <img
            src={logoImg}
            alt="TRECC"
            className={`h-8 w-auto object-contain transition-all duration-500 ${isLightMode ? "brightness-0" : ""}`}
          />
        </div>

        {/* Center Links */}
        <div className="hidden md:flex items-center gap-8">
          {["Protocol", "Agents", "Docs"].map((item) => (
            <a
              key={item}
              href="#"
              className={`text-sm font-medium transition-colors duration-500 ${isLightMode
                  ? "text-gray-600 hover:text-black"
                  : "text-[#8A8D93] hover:text-white"
                }`}
            >
              {item}
            </a>
          ))}
        </div>

        {/* Right CTA Button */}
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className={`px-6 py-2 rounded-full text-sm font-semibold font-['system-ui'] transition-all duration-500 border ${isLightMode
              ? "bg-black text-white hover:bg-gray-800 border-black"
              : "bg-steel text-black hover:brightness-125 border-white/50"
            }`}
        >
          Launch App
        </a>
      </motion.nav>
    </div>
  );
}