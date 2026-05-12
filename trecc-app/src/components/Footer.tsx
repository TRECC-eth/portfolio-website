import { useState } from "react";
import { FaTelegramPlane, FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import treccLogo from "../assets/favicon.png";
import textImg from "../assets/text.png";
import Threads from "./Threads";
import WaitlistForm from "./WaitlistForm";
import WaitlistModal from "./WaitlistModal";

const DOCS_URL = "https://docs.trecc.finance";

export default function Footer({ active = true }: { active?: boolean }) {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  return (
    <>
    <footer id="TRECC-footer" className="w-full min-h-[100dvh] bg-white text-gray-600 px-6 pb-[calc(2.5rem+env(safe-area-inset-bottom))] md:px-16 md:pb-12 border-t border-gray-100 flex flex-col font-sans relative overflow-hidden">
      
      {/* 
        Mobile renders the canvas wider than the viewport, then scales it down.
        This gives the thread model a slightly more zoomed-out feel on narrow screens.
      */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[170vw] h-[320px] md:left-0 md:translate-x-0 md:w-full md:h-[40vh] z-0 pointer-events-none transform scale-[0.7] md:scale-100 origin-top"
        style={{ 
          maskImage: "linear-gradient(to bottom, black 40%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 40%, transparent 100%)" 
        }}
      >
        <Threads active={active} color={[0.2, 0.2, 0.3]} amplitude={1.5} distance={0.4} style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} />
      </div>

      {/* Adjust padding to elegantly clear the zoomed-out canvas height */}
      <div className="relative z-10 flex flex-col flex-1 w-full max-w-6xl mx-auto pt-[220px] md:pt-[35vh]">

        {/* Top Section: Logo + Links */}
        <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-16 w-full mb-12">

          {/* Left side: Logo & Socials */}
          <div className="flex flex-col gap-6 max-w-xs">
            <div className="flex items-center gap-3">
              <img src={treccLogo} alt="Trecc Logo" className="w-9 h-9 object-contain rounded" />
              <img src={textImg} alt="Trecc Text" className="h-[3.2rem] md:h-[4rem] w-auto object-contain relative translate-y-0.5" />
            </div>
            <div className="flex items-center gap-3">
              <a href="https://twitter.com/trecc_finance" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-gray-900 text-gray-500 transition-all duration-200">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
              </a>
              <a href="https://youtube.com/@trecc.finance" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-gray-900 text-gray-500 transition-all duration-200">
                <FaYoutube className="w-4 h-4" />
              </a>
              <a href="mailto:trecclabs@gmail.com" className="p-2.5 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-gray-900 text-gray-500 transition-all duration-200">
                <MdEmail className="w-4 h-4" />
              </a>
              <a href="#" className="p-2.5 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-gray-900 text-gray-500 transition-all duration-200">
                <FaTelegramPlane className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right side: Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12 w-full md:w-auto">
            
            {/* Platforms Column */}
            <div className="flex flex-col gap-10 md:gap-4 text-sm">
              <div className="flex flex-col gap-4 text-sm">
                <h4 className="text-gray-900 font-semibold mb-1 text-base">Platforms</h4>
                <a href="#" className="text-gray-500 hover:text-gray-900 font-medium transition-colors">Launch App</a>
                <a href={DOCS_URL} className="text-gray-500 hover:text-gray-900 font-medium transition-colors">Go to Docs</a>
                <button type="button" onClick={() => setIsWaitlistOpen(true)} className="text-left text-gray-500 hover:text-gray-900 font-medium transition-colors">Join Waitlist</button>
              </div>
              
              {/* This Legal block only shows on mobile, stacked beautifully under Platforms */}
              <div className="flex md:hidden flex-col gap-4 text-sm">
                <h4 className="text-gray-900 font-semibold mb-1 text-base">Legal</h4>
                <a href={`${DOCS_URL}/legal/privacy-policy`} className="text-gray-500 hover:text-gray-900 font-medium transition-colors">Privacy Policy</a>
                <a href={`${DOCS_URL}/legal/terms-of-use`} className="text-gray-500 hover:text-gray-900 font-medium transition-colors">Terms of Use</a>
              </div>
            </div>

            {/* Resources Column */}
            <div className="flex flex-col gap-4 text-sm">
              <h4 className="text-gray-900 font-semibold mb-1 text-base">Resources</h4>
              <a href="#" className="text-gray-500 hover:text-gray-900 font-medium transition-colors">Help Center</a>
              <a href="https://github.com/TRECC-eth/Trecc-synthesis" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 font-medium transition-colors">GitHub Repository</a>
              <a href="#" className="text-gray-500 hover:text-gray-900 font-medium transition-colors">Security</a>
              <a href="#" className="text-gray-500 hover:text-gray-900 font-medium transition-colors">Status</a>
            </div>

            {/* Legal Column (Desktop Only) */}
            <div className="hidden md:flex flex-col gap-4 text-sm">
              <h4 className="text-gray-900 font-semibold mb-1 text-base">Legal</h4>
              <a href={`${DOCS_URL}/legal/privacy-policy`} className="text-gray-500 hover:text-gray-900 font-medium transition-colors">Privacy Policy</a>
              <a href={`${DOCS_URL}/legal/terms-of-use`} className="text-gray-500 hover:text-gray-900 font-medium transition-colors">Terms of Use</a>
            </div>
            
          </div>
        </div>

        {/* Bottom Section */}
        <div className="w-full flex flex-col mt-auto pt-8">
          
          <div className="w-full h-px bg-gray-200 mb-8" />

          {/* Newsletter Section - Hidden on mobile, visible on desktop */}
          <div className="hidden md:flex w-full flex-col md:flex-row justify-between items-center gap-10 mb-10">
            <div className="flex flex-col gap-2 max-w-md">
              <h4 className="text-gray-900 font-semibold text-base">Join the waitlist</h4>
              <p className="text-sm text-gray-500 leading-relaxed">
                Be the first to experience the future of our ecosystem. Join the <strong className="text-gray-800">TRECC</strong> waitlist to secure your spot for early access, exclusive sneak peeks, and priority onboarding.
              </p>
            </div>
            <WaitlistForm />
          </div>

          {/* Copyright */}
          <div className="w-full flex items-center justify-between pb-[calc(7rem+env(safe-area-inset-bottom))] md:pb-0 text-[13px] text-gray-400 font-medium">
            <p>© {new Date().getFullYear()} TRECC Finance. All rights reserved.</p>
          </div>
        </div>

      </div>
    </footer>
    <WaitlistModal open={isWaitlistOpen} onClose={() => setIsWaitlistOpen(false)} />
    </>
  );
}
