import { FaGithub, FaTwitter, FaTelegramPlane } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

export default function Footer() {
  return (
    <div className="h-screen w-full shrink-0 flex flex-col justify-between bg-[#0a0a0a] text-white pt-24 pb-8 px-8 md:px-24 border-t border-white/10 relative overflow-hidden">

      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full flex-grow flex flex-col justify-center z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">

          {/* Main Brand Section */}
          <div className="md:col-span-6 flex flex-col">
            <h2 className="text-5xl md:text-7xl font-semibold tracking-tighter bg-clip-text text-transparent bg-gradient-to-br from-white to-gray-500 mb-6">
              TRECC
            </h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-md font-light mb-8">
              Trustless Reputation & Evaluation Credit. The ERC-8004 AI Agent Lending protocol powering the agentic economy.
            </p>
            <div className="flex gap-4">
              <a href="https://github.com/TRECC-eth/Trecc-synthesis" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 hover:bg-white/10 rounded-full transition-colors border border-white/10">
                <FaGithub className="w-5 h-5 text-gray-300" />
              </a>
              <a href="https://twitter.com/trecc_eth" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 hover:bg-white/10 rounded-full transition-colors border border-white/10">
                <FaTwitter className="w-5 h-5 text-gray-300" />
              </a>
              <a href="#" className="p-3 bg-white/5 hover:bg-white/10 rounded-full transition-colors border border-white/10">
                <FaTelegramPlane className="w-5 h-5 text-gray-300" />
              </a>
            </div>
          </div>

          {/* Links Section */}
          <div className="md:col-span-3">
            <h4 className="text-lg font-medium mb-6 text-gray-200">Protocol</h4>
            <ul className="space-y-4 text-gray-400 font-light">
              <li><a href="#" className="hover:text-white transition-colors flex items-center group">Smart Contracts <FiArrowUpRight className="w-3 h-3 ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" /></a></li>
              <li><a href="#" className="hover:text-white transition-colors flex items-center group">Identity Registry <FiArrowUpRight className="w-3 h-3 ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" /></a></li>
              <li><a href="#" className="hover:text-white transition-colors flex items-center group">Reputation Score <FiArrowUpRight className="w-3 h-3 ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" /></a></li>
              <li><a href="#" className="hover:text-white transition-colors flex items-center group">EIP-712 KYC <FiArrowUpRight className="w-3 h-3 ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" /></a></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-lg font-medium mb-6 text-gray-200">Developers</h4>
            <ul className="space-y-4 text-gray-400 font-light">
              <li><a href="https://github.com/TRECC-eth/Trecc-synthesis" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Setup Guide</a></li>
              <li><a href="#" className="hover:text-white transition-colors">GitHub Repository</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Coinbase Vault Integration</a></li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto w-full pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between z-10 text-sm text-gray-500 font-light">
        <p>© {new Date().getFullYear()} TRECC Protocol. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
        </div>
      </div>
    </div>
  );
}
