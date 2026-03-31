import { FaTelegramPlane, FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import treccLogo from "../assets/favicon.png";
import Threads from "./Threads";

export default function Footer() {
  return (
    <div>
      <div style={{ width: "100%", height: "220px", background: "#f9fafb" }}>
        <Threads color={[0.2, 0.2, 0.3]} amplitude={1.5} distance={0.4} />
      </div>
      <footer id="TRECC-footer" className="w-full mt-auto bg-white text-gray-600 px-8 py-16 md:px-16 border-t border-gray-100 flex flex-col font-sans shrink-0">

      {/* Top Section: Link Columns */}
      <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-12 mb-16">

        {/* Left side Background/Logo area */}
        <div className="flex flex-col gap-4 max-w-xs">
          <div className="flex items-center gap-3 mb-2">
            <img src={treccLogo} alt="Trecc Logo" className="w-8 h-8 object-contain rounded" />
            <span className="text-xl font-bold tracking-tight text-gray-900">TRECC</span>
          </div>
          <p className="text-sm text-gray-500 leading-relaxed">
            Building the decentralized future. Join our community to access protocol documentation, discussions, and updates.
          </p>
          <div className="flex items-center gap-3 mt-2">
            <a href="https://twitter.com/trecc_eth" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-50 border border-gray-200 rounded-md hover:bg-gray-100 hover:text-gray-900 text-gray-500 transition-colors">
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
            </a>
            <a href="https://youtube.com/@trecc.finance" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-50 border border-gray-200 rounded-md hover:bg-gray-100 hover:text-gray-900 text-gray-500 transition-colors">
              <FaYoutube className="w-4 h-4" />
            </a>
            <a href="mailto:treccxyz@gmail.com" className="p-2 bg-gray-50 border border-gray-200 rounded-md hover:bg-gray-100 hover:text-gray-900 text-gray-500 transition-colors">
              <MdEmail className="w-4 h-4" />
            </a>
            <a href="#" className="p-2 bg-gray-50 border border-gray-200 rounded-md hover:bg-gray-100 hover:text-gray-900 text-gray-500 transition-colors">
              <FaTelegramPlane className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Right side Links Area (2 Columns) */}
        <div className="grid grid-cols-2 gap-16 md:gap-32 w-full md:w-auto">
          {/* Company Column */}
          <div className="flex flex-col gap-4 text-sm">
            <h3 className="font-mono text-xs text-gray-400 mb-2 tracking-wider uppercase">// Company</h3>
            <a href="#" className="hover:text-gray-900 font-medium transition-colors">About us</a>
            <a href="#" className="hover:text-gray-900 font-medium transition-colors">Careers</a>
            <a href="#" className="hover:text-gray-900 font-medium transition-colors">Security</a>
            <a href="#" className="hover:text-gray-900 font-medium transition-colors">Status</a>
          </div>

          {/* Resources Column */}
          <div className="flex flex-col gap-4 text-sm">
            <h3 className="font-mono text-xs text-gray-400 mb-2 tracking-wider uppercase">// Resources</h3>
            <a href="#" className="hover:text-gray-900 font-medium transition-colors">Help center</a>
            <a href="https://github.com/TRECC-eth/Trecc-synthesis" className="hover:text-gray-900 font-medium transition-colors">GitHub Repository</a>
            <a href="#" className="hover:text-gray-900 font-medium transition-colors">Protocol Documentation</a>
            <a href="#" className="hover:text-gray-900 font-medium transition-colors">Community</a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full max-w-6xl mx-auto h-px bg-gray-200 mb-12" />

      {/* Newsletter Section */}
      <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-10 mb-10">

        {/* Newsletter Text */}
        <div className="flex flex-col gap-2 max-w-md">
          <h4 className="text-gray-900 font-semibold text-base">Join the waitlist</h4>
          <p className="text-sm text-gray-500 leading-relaxed">
            Be the first to experience the future of our ecosystem. Join the <strong className="text-gray-800">TRECC</strong> waitlist to secure your spot for early access, exclusive sneak peeks, and priority onboarding.
          </p>
        </div>

        {/* Newsletter Form */}
        <div className="flex flex-col gap-3 w-full md:w-auto">
          <div className="flex gap-2 w-full md:w-[420px]">
            <input
              type="email"
              placeholder="example@gmail.com"
              className="flex-1 px-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-gray-400 transition-all placeholder:text-gray-400"
            />
            <button
              type="button"
              className="px-6 py-2.5 bg-white text-gray-900 border border-gray-200 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors shadow-sm"
            >
              Join
            </button>
          </div>
          <label className="flex items-center gap-2 cursor-pointer group">
            <input
              type="checkbox"
              className="w-4 h-4 rounded border-gray-300 text-gray-900 focus:ring-gray-900 cursor-pointer"
            />
            <span className="text-xs text-gray-500 group-hover:text-gray-700 transition-colors mt-0.5">
              I agree to receive marketing emails from TRECC
            </span>
          </label>
        </div>
      </div>

      {/* Copyright & Legal */}
      <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 font-medium">
        <p>© {new Date().getFullYear()} TRECC Labs, Inc. Designed by the community</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-gray-900 hover:underline transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-gray-900 hover:underline transition-colors">Terms of Service</a>
        </div>
      </div>

    </footer>
    </div>
  );
}
