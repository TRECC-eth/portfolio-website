import { FaTelegramPlane, FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import treccLogo from "../assets/favicon.png";

export default function Footer() {
  return (
    <footer id="TRECC-footer" className="w-full mt-auto bg-[#0a0a0a] text-gray-400 py-16 px-8 md:px-16 border-t border-[#1f1f1f] flex flex-col md:flex-row justify-between gap-12 font-sans shrink-0">
      {/* Left side */}
      <div className="flex flex-col gap-6 max-w-xs">
        {/* Logo and brand */}
        <div className="flex items-center gap-2">
          <img src={treccLogo} alt="Trecc Logo" className="w-8 h-8 object-contain rounded" />
          <span className="text-2xl font-bold tracking-tight text-white">TRECC</span>
        </div>

        {/* Socials */}
        <div className="flex items-center gap-4 text-gray-500 mt-2">
          <a href="https://twitter.com/trecc_eth" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
          </a>
          <a href="https://youtube.com/@trecc.finance" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            <FaYoutube className="w-6 h-6" />
          </a>
          <a href="mailto:treccxyz@gmail.com" className="hover:text-white transition-colors">
            <MdEmail className="w-6 h-6" />
          </a>
          <a href="#" className="hover:text-white transition-colors">
            <FaTelegramPlane className="w-5 h-5" />
          </a>
        </div>

        {/* Bottom items */}
        <div className="text-sm text-gray-500 mt-8 flex flex-col gap-3">
          <div className="flex items-center border border-[#2a2a2a] rounded-md w-fit px-3 py-1.5 cursor-pointer hover:bg-[#1a1a1a] transition-colors">
            <span className="mr-2">🌐</span>
            <span className="font-medium text-gray-300">English (US)</span>
            <span className="ml-2 text-xs">▼</span>
          </div>
          <p className="cursor-pointer hover:underline hover:text-gray-300 mt-2">Cookie settings</p>
          <p>© {new Date().getFullYear()} TRECC Labs, Inc.</p>
        </div>
      </div>

      {/* Right side - Links */}
      <div className="grid grid-cols-2 gap-16 md:gap-32 text-sm text-gray-400 mt-2 md:mt-0">
        {/* Company Column */}
        <div className="flex flex-col gap-3">
          <h3 className="font-semibold text-white mb-2 text-base">Company</h3>
          <a href="#" className="hover:text-white hover:underline transition-colors">About us</a>
          <a href="#" className="hover:text-white hover:underline transition-colors">Careers</a>
          <a href="#" className="hover:text-white hover:underline transition-colors">Security</a>
          <a href="#" className="hover:text-white hover:underline transition-colors">Status</a>
          <a href="#" className="hover:text-white hover:underline transition-colors">Terms & privacy</a>
        </div>

        {/* Resources Column */}
        <div className="flex flex-col gap-3">
          <h3 className="font-semibold text-white mb-2 text-base">Resources</h3>
          <a href="#" className="hover:text-white hover:underline transition-colors">Help center</a>
          <a href="https://github.com/TRECC-eth/Trecc-synthesis" className="hover:text-white hover:underline transition-colors">GitHub Repository</a>
          <a href="#" className="hover:text-white hover:underline transition-colors">Protocol Documentation</a>
          <a href="#" className="hover:text-white hover:underline transition-colors">Community</a>
          <a href="#" className="font-semibold text-white mt-2 flex items-center hover:underline group">
            Explore more <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
