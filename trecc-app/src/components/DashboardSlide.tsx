import { motion } from "framer-motion";

export default function DashboardSlide() {
  return (
    <div className="h-full w-full bg-[#0A0A0B] flex flex-col items-center justify-center px-6 border-t border-white/10 shadow-[0_-30px_50px_rgba(0,0,0,0.8)]">
      
      <motion.div 
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="w-full max-w-5xl flex flex-col"
      >
        <div className="text-center mb-8">
          <h2 className="text-2xl text-white font-medium">The flagship application: Prime Brokerage</h2>
        </div>

        <div className="hyper-card w-full overflow-hidden shadow-[0_0_80px_rgba(255,255,255,0.03)] flex flex-col h-[500px] md:h-[650px] bg-[#050505]">
          <div className="h-14 border-b border-white/10 flex items-center justify-between px-6 bg-[#0E0E10]">
            <div className="flex items-center gap-6">
              <span className="text-white font-semibold text-sm">USDC Prime Vault</span>
              <span className="text-[#8A8D93] text-xs">APY: <span className="text-green-400">12.4%</span></span>
            </div>
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-white/10" />
              <div className="w-3 h-3 rounded-full bg-white/10" />
              <div className="w-3 h-3 rounded-full bg-white/10" />
            </div>
          </div>

          <div className="flex flex-1 overflow-hidden">
            <div className="w-64 border-r border-white/10 p-4 hidden md:block bg-[#0A0A0B]">
              <div className="text-xs text-[#8A8D93] font-semibold mb-4">ACTIVE AGENTS</div>
              {["Arbitrage Bot 01", "Yield Optimizer"].map((bot, i) => (
                <div key={bot} className={`p-3 rounded-lg mb-2 text-sm ${i === 0 ? "bg-white/10 text-white" : "text-[#8A8D93]"}`}>{bot}</div>
              ))}
            </div>
            <div className="flex-1 p-6 flex flex-col bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.03)_0%,transparent_80%)]">
              <div className="text-[#8A8D93] text-xs mb-1">Total PnL</div>
              <div className="text-4xl text-white font-light mb-8">+$24,092<span className="text-[#8A8D93]">.50</span></div>
              <div className="flex-1 border-b border-white/10 relative">
                <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                  <path d="M0 200 Q 50 150 100 180 T 200 120 T 300 140 T 400 80 T 500 100 T 600 40" fill="none" stroke="#A0A5AA" strokeWidth="2" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}