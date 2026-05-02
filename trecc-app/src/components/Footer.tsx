import { FaTelegramPlane, FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import treccLogo from "../assets/favicon.png";
import textImg from "../assets/text.png";
import Threads from "./Threads";
import WaitlistForm from "./WaitlistForm";

export default function Footer({ active = true }: { active?: boolean }) {
  return (
    // FIX 1: h-auto on mobile prevents the content from getting cut off at the bottom
    <footer id="TRECC-footer" className="w-full h-auto md:min-h-screen bg-white text-gray-600 px-6 pb-8 pt-4 md:px-16 md:pb-16 md:pt-0 border-t border-gray-100 flex flex-col font-sans shrink-0 overflow-hidden relative">
      
      {/* FIX 2: Mobile canvas locked to 120px so the model isn't massively enlarged */}
      <div className="absolute inset-x-0 top-0 h-[120px] md:h-[30%] z-0">
        <Threads active={active} color={[0.2, 0.2, 0.3]} amplitude={1.5} distance={0.4} style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} />
      </div>

      <div className="h-[120px] md:h-[40vh] shrink-0" />

      <div className="relative z-10 flex flex-col flex-1 justify-between">

        {/* Top Section: Link Columns - Increased gap for better mobile spacing */}
        <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-12 md:gap-12 mb-10 md:mb-16">

          {/* Left side Background/Logo area */}
          <div className="flex flex-col gap-5 md:gap-4 max-w-xs">
            <div className="flex items-center gap-3">
              <img src={treccLogo} alt="Trecc Logo" className="w-8 h-8 object-contain rounded" />
              <img src={textImg} alt="Trecc Text" className="h-[2.8rem] md:h-[4rem] w-auto object-contain relative translate-y-0.5" />
            </div>
            <div className="flex items-center gap-3">
              <a href="https://twitter.com/trecc_finance" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-50 border border-gray-200 rounded-md hover:bg-gray-100 hover:text-gray-900 text-gray-500 transition-colors">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
              </a>
              <a href="https://youtube.com/@trecc.finance" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-50 border border-gray-200 rounded-md hover:bg-gray-100 hover:text-gray-900 text-gray-500 transition-colors">
                <FaYoutube className="w-4 h-4" />
              </a>
              <a href="mailto:trecclabs@gmail.com" className="p-2 bg-gray-50 border border-gray-200 rounded-md hover:bg-gray-100 hover:text-gray-900 text-gray-500 transition-colors">
                <MdEmail className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-gray-50 border border-gray-200 rounded-md hover:bg-gray-100 hover:text-gray-900 text-gray-500 transition-colors">
                <FaTelegramPlane className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right side Links Area - FIX 3: Removed col-span-2 from Legal so it aligns neatly in the grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-10 md:gap-16 mt-2 md:mt-4 w-full md:w-auto">
            
            {/* Platforms Column */}
            <div className="flex flex-col gap-3 md:gap-4 text-sm">
              <h4 className="text-gray-900 font-semibold mb-1 md:mb-2 text-base">Platforms</h4>
              <a href="#" className="hover:text-gray-900 font-medium transition-colors">Launch App</a>
              <a href="#" className="hover:text-gray-900 font-medium transition-colors">Go to Docs</a>
              <a href="#waitlist" className="hover:text-gray-900 font-medium transition-colors">Join Waitlist</a>
            </div>

            {/* Resources Column */}
            <div className="flex flex-col gap-3 md:gap-4 text-sm">
              <h4 className="text-gray-900 font-semibold mb-1 md:mb-2 text-base">Resources</h4>
              <a href="#" className="hover:text-gray-900 font-medium transition-colors">Help Center</a>
              <a href="https://github.com/TRECC-eth/Trecc-synthesis" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 font-medium transition-colors">GitHub Repository</a>
              <a href="#" className="hover:text-gray-900 font-medium transition-colors">Security</a>
              <a href="#" className="hover:text-gray-900 font-medium transition-colors">Status</a>
            </div>

            {/* Legal Column - Now acts as a standard grid column */}
            <div className="flex flex-col gap-3 md:gap-4 text-sm">
              <h4 className="text-gray-900 font-semibold mb-1 md:mb-2 text-base">Legal</h4>
              <Link to="/privacy" className="hover:text-gray-900 font-medium transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-gray-900 font-medium transition-colors">Terms of Use</Link>
            </div>
            
          </div>
        </div>

        <div className="w-full max-w-6xl mx-auto h-px bg-gray-200 mb-6 md:mb-5" />

        {/* Newsletter Section - FIX 4: Completely hidden on mobile using 'hidden md:flex' */}
        <div className="hidden md:flex w-full max-w-6xl mx-auto flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-10 mb-10">
          <div className="flex flex-col gap-1.5 md:gap-2 max-w-md">
            <h4 className="text-gray-900 font-semibold text-base">Join the waitlist</h4>
            <p className="text-sm text-gray-500 leading-relaxed">
              Be the first to experience the future of our ecosystem. Join the <strong className="text-gray-800">TRECC</strong> waitlist to secure your spot for early access, exclusive sneak peeks, and priority onboarding.
            </p>
          </div>
          <WaitlistForm />
        </div>

        {/* Copyright - Only this remains visible at the bottom on mobile */}
        <div className="w-full max-w-6xl mx-auto flex flex-col items-start justify-center text-xs text-gray-400 font-medium">
          <p>© {new Date().getFullYear()} TRECC Finance. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}