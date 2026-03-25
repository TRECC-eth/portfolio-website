import { motion } from "framer-motion";

interface DashboardProps {
  step: number;
}

export default function DashboardSlide({ step }: DashboardProps) {
  // We only show animations if the global step is at least at the dashboard phase
  const isBaseVisible = step >= 1;
  const isBearish = step >= 2;
  const isBullish = step >= 3;

  return (
    <div className="h-full w-full bg-[#0A0A0B] flex flex-col items-center justify-center px-6 border-t border-white/10 shadow-[0_-30px_50px_rgba(0,0,0,0.8)] relative">
      
      {/* Dynamic Text Explanations that change based on scroll */}
      <div className="absolute top-24 text-center w-full z-10 h-16">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: step === 1 ? 1 : 0 }} className="absolute inset-0">
          <h2 className="text-2xl text-white font-medium">The flagship application: Prime Brokerage</h2>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: step === 2 ? 1 : 0 }} className="absolute inset-0">
          <h2 className="text-2xl text-[#ef4444] font-medium">1. Absolute Downside Protection</h2>
          <p className="text-sm text-[#8A8D93] mt-1">Autonomous hedging during market downturns.</p>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: step >= 3 ? 1 : 0 }} className="absolute inset-0">
          <h2 className="text-2xl text-[#22c55e] font-medium">2. Accelerated Yield Capture</h2>
          <p className="text-sm text-[#8A8D93] mt-1">Deploying capital optimally when the market flips.</p>
        </motion.div>
      </div>

      <motion.div 
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: isBaseVisible ? 0 : 60, opacity: isBaseVisible ? 1 : 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-5xl flex flex-col mt-20"
      >
        {/* FIX: Changed h-[500px] to responsive h-[75vh] to prevent top/bottom cropping */}
        <div className="hyper-card w-full overflow-hidden shadow-[0_0_80px_rgba(255,255,255,0.03)] flex flex-col h-[75vh] max-h-[700px] min-h-[450px] bg-[#050505]">
          
          <div className="h-14 border-b border-white/10 flex items-center justify-between px-6 bg-[#0E0E10] shrink-0">
            <div className="flex items-center gap-6">
              <span className="text-white font-semibold text-sm">USDC Prime Vault</span>
              <span className="text-[#8A8D93] text-xs">APY: <motion.span animate={{ color: isBullish ? '#4ade80' : '#8A8D93' }}>12.4%</motion.span></span>
            </div>
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-white/10" />
              <div className="w-3 h-3 rounded-full bg-white/10" />
              <div className="w-3 h-3 rounded-full bg-white/10" />
            </div>
          </div>

          <div className="flex flex-1 overflow-hidden">
            {/* Sidebar */}
            <div className="w-64 border-r border-white/10 p-4 hidden md:block bg-[#0A0A0B] shrink-0">
              <div className="text-xs text-[#8A8D93] font-semibold mb-4">ACTIVE AGENTS</div>
              {["Hedging Node 01", "Yield Optimizer"].map((bot, i) => (
                <motion.div 
                  key={bot} 
                  animate={{ 
                    backgroundColor: (i === 0 && isBearish && !isBullish) || (i === 1 && isBullish) ? 'rgba(255,255,255,0.1)' : 'transparent',
                    color: (i === 0 && isBearish && !isBullish) || (i === 1 && isBullish) ? '#ffffff' : '#8A8D93'
                  }}
                  className="p-3 rounded-lg mb-2 text-sm border border-transparent transition-colors"
                >
                  {bot}
                </motion.div>
              ))}
            </div>

            {/* Main Graph Area */}
            <div className="flex-1 p-6 flex flex-col bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.03)_0%,transparent_80%)] relative">
              <div className="text-[#8A8D93] text-xs mb-1">Total PnL</div>
              <motion.div className="text-4xl text-white font-light mb-8 relative z-10">
                {isBullish ? "+$24,092" : "-$1,240"}<span className="text-[#8A8D93]">.50</span>
              </motion.div>
              
              <div className="flex-1 border-b border-white/10 relative overflow-hidden">
                {/* 1. Bearish Red Line (Draws in Step 2, fades to grey in Step 3) */}
                <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                  <motion.path 
                    d="M0 50 Q 150 150 300 120 T 600 350 L 1000 450" 
                    fill="none" 
                    stroke={isBullish ? "#3f3f46" : "#ef4444"} // Turns from red to grey
                    strokeWidth="3"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: isBearish ? 1 : 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                  />
                  <motion.path 
                    d="M0 50 Q 150 150 300 120 T 600 350 L 1000 450 L 1000 1000 L 0 1000 Z" 
                    fill="url(#red-grad)" 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isBearish ? (isBullish ? 0 : 0.2) : 0 }} // Fades out completely in Bull phase
                    transition={{ duration: 1 }}
                  />
                  <defs>
                    <linearGradient id="red-grad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#ef4444" />
                      <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* 2. Bullish 3D Green Bars (Shoots up in Step 3) */}
                <div className="absolute bottom-0 left-0 w-full h-[80%] flex items-end justify-around px-8 pb-1">
                  {[20, 35, 25, 60, 45, 80, 110, 95, 140, 180, 220].map((height, index) => (
                    <div key={index} className="relative w-8 md:w-12 group flex items-end justify-center">
                      <motion.div
                        className="w-full bg-gradient-to-t from-green-500/10 to-green-500/80 border-t-2 border-green-400 shadow-[0_0_20px_rgba(34,197,94,0.3)] backdrop-blur-sm"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: isBullish ? `${height}px` : 0, opacity: isBullish ? 1 : 0 }}
                        transition={{ duration: 0.6, delay: index * 0.05, ease: "easeOut" }} // Staggered pop-up effect
                      />
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}