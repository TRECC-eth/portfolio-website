import { motion } from "framer-motion";

interface DashboardProps {
  step: number;
}

// Hardcoded candlestick data to create the perfect "Crash and Recovery" narrative
const CANDLES = [
  // Phase 1: Normal / Choppy (Visible Step 1)
  { o: 150, c: 140, h: 130, l: 160 }, { o: 140, c: 145, h: 135, l: 150 },
  { o: 145, c: 130, h: 120, l: 155 }, { o: 130, c: 135, h: 125, l: 140 },
  { o: 135, c: 120, h: 110, l: 145 }, { o: 120, c: 125, h: 115, l: 130 },
  { o: 125, c: 110, h: 100, l: 135 }, { o: 110, c: 115, h: 105, l: 125 },
  // Phase 2: The Crash (Revealed Step 2)
  { o: 115, c: 160, h: 110, l: 170 }, { o: 160, c: 210, h: 150, l: 220 },
  { o: 210, c: 250, h: 200, l: 260 }, { o: 250, c: 280, h: 240, l: 290 },
  // Phase 3: The AI Yield Reversal (Revealed Step 3)
  { o: 280, c: 240, h: 230, l: 290 }, { o: 240, c: 190, h: 180, l: 250 },
  { o: 190, c: 140, h: 130, l: 200 }, { o: 140, c: 90, h: 80, l: 150 },
  { o: 90, c: 50, h: 40, l: 100 }, { o: 50, c: 20, h: 10, l: 60 },
  { o: 20, c: 10, h: 5, l: 30 },
];

export default function DashboardSlide({ step }: DashboardProps) {
  const isBaseVisible = step >= 1;
  const isBearish = step >= 2;
  const isBullish = step >= 3;

  // Dynamic PnL Narrative based on the step
  let pnlText = "+$4,092.50";
  let pnlColor = "text-white";
  if (isBearish && !isBullish) {
    pnlText = "+$4,010.00"; // Barely dropped despite the crash
    pnlColor = "text-[#8A8D93]"; 
  } else if (isBullish) {
    pnlText = "+$24,092.50"; // Skyrockets
    pnlColor = "text-[#4ade80]";
  }

  return (
    <div className="h-full w-full bg-[#0A0A0B] flex flex-col items-center justify-center px-6 border-t border-white/10 shadow-[0_-30px_50px_rgba(0,0,0,0.8)] relative">
      
      {/* Dynamic Text Explanations */}
      <div className="absolute top-24 text-center w-full z-10 h-16 pointer-events-none">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: step === 1 ? 1 : 0 }} className="absolute inset-0">
          <h2 className="text-2xl text-white font-medium">The flagship application: Prime Brokerage</h2>
          <p className="text-sm text-[#8A8D93] mt-1">Connect your capital to the machine economy.</p>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: step === 2 ? 1 : 0 }} className="absolute inset-0">
          <h2 className="text-2xl text-[#ef4444] font-medium">1. Autonomous Downside Protection</h2>
          <p className="text-sm text-[#8A8D93] mt-1">Market crashes. Hedging agents instantly protect your principal.</p>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: step >= 3 ? 1 : 0 }} className="absolute inset-0">
          <h2 className="text-2xl text-[#4ade80] font-medium">2. Accelerated Yield Capture</h2>
          <p className="text-sm text-[#8A8D93] mt-1">Market reverses. Yield optimizers dynamically lever up to multiply gains.</p>
        </motion.div>
      </div>

      <motion.div 
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: isBaseVisible ? 0 : 60, opacity: isBaseVisible ? 1 : 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-5xl flex flex-col mt-20"
      >
        <div className="hyper-card w-full overflow-hidden shadow-[0_0_80px_rgba(255,255,255,0.03)] flex flex-col h-[75vh] max-h-[700px] min-h-[450px] bg-[#050505] border border-white/10 rounded-xl relative">
          
          {/* Header */}
          <div className="h-14 border-b border-white/10 flex items-center justify-between px-6 bg-[#0a0a0c] shrink-0 z-20 relative">
            <div className="flex items-center gap-6">
              <span className="text-white font-semibold text-sm flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#4ade80] animate-pulse" />
                TRECC / USDC
              </span>
              <span className="text-[#8A8D93] text-xs">Vol: <span className="text-white">$14.2M</span></span>
            </div>
            <div className="flex gap-2 text-xs text-[#8A8D93]">
              <span className="px-2 py-1 bg-white/5 rounded hover:text-white cursor-pointer">1H</span>
              <span className="px-2 py-1 bg-white/10 text-white rounded cursor-pointer">4H</span>
              <span className="px-2 py-1 bg-white/5 rounded hover:text-white cursor-pointer">1D</span>
            </div>
          </div>

          <div className="flex flex-1 overflow-hidden">
            {/* Left Sidebar: Agents */}
            <div className="w-64 border-r border-white/10 p-4 hidden md:flex flex-col bg-[#0a0a0c] shrink-0 z-20 relative">
              <div className="text-xs text-[#8A8D93] font-semibold mb-4 tracking-wider">ACTIVE AGENTS</div>
              
              {/* Agent 1: Hedging */}
              <motion.div 
                animate={{ 
                  backgroundColor: isBearish && !isBullish ? 'rgba(239, 68, 68, 0.1)' : 'transparent',
                  borderColor: isBearish && !isBullish ? 'rgba(239, 68, 68, 0.3)' : 'rgba(255,255,255,0.05)'
                }}
                className="p-3 rounded-lg mb-3 text-sm border transition-colors relative overflow-hidden"
              >
                <div className="flex items-center gap-2 mb-1">
                  <div className={`w-1.5 h-1.5 rounded-full ${isBearish && !isBullish ? 'bg-[#ef4444] shadow-[0_0_8px_#ef4444]' : 'bg-[#8A8D93]'}`} />
                  <span className={isBearish && !isBullish ? 'text-white font-medium' : 'text-[#8A8D93]'}>Hedging Node 01</span>
                </div>
                <div className="text-xs text-[#8A8D93] pl-3.5">Delta Neutral</div>
              </motion.div>

              {/* Agent 2: Yield */}
              <motion.div 
                animate={{ 
                  backgroundColor: isBullish ? 'rgba(74, 222, 128, 0.1)' : 'transparent',
                  borderColor: isBullish ? 'rgba(74, 222, 128, 0.3)' : 'rgba(255,255,255,0.05)'
                }}
                className="p-3 rounded-lg text-sm border transition-colors relative overflow-hidden"
              >
                <div className="flex items-center gap-2 mb-1">
                  <div className={`w-1.5 h-1.5 rounded-full ${isBullish ? 'bg-[#4ade80] shadow-[0_0_8px_#4ade80]' : 'bg-[#8A8D93]'}`} />
                  <span className={isBullish ? 'text-white font-medium' : 'text-[#8A8D93]'}>Yield Optimizer</span>
                </div>
                <div className="text-xs text-[#8A8D93] pl-3.5">Max Capital Eff.</div>
              </motion.div>
            </div>

            {/* Main Graph Area */}
            <div className="flex-1 p-6 flex flex-col bg-[#050505] relative overflow-hidden">
              
              {/* Background Exchange Grid Lines */}
              <div className="absolute inset-0 pointer-events-none opacity-20">
                {[...Array(10)].map((_, i) => (
                  <div key={i} className="w-full border-t border-[#8A8D93] absolute" style={{ top: `${i * 10}%` }} />
                ))}
                {[...Array(10)].map((_, i) => (
                  <div key={`v-${i}`} className="h-full border-l border-[#8A8D93] absolute" style={{ left: `${i * 10}%` }} />
                ))}
              </div>

              {/* PnL Display */}
              <div className="relative z-30 mb-8">
                <div className="text-[#8A8D93] text-xs mb-1 font-medium tracking-wide">TOTAL PORTFOLIO PNL</div>
                <motion.div className={`text-5xl font-light ${pnlColor} transition-colors duration-500`}>
                  {pnlText}
                </motion.div>
              </div>
              
              {/* The Candlestick Canvas */}
              <div className="flex-1 relative mt-4">
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 300" preserveAspectRatio="none">
                  
                  {/* The Hedging Floor Line (Appears in Step 2) */}
                  <motion.line 
                    x1="400" y1="280" x2="1000" y2="280" 
                    stroke="#ef4444" strokeWidth="2" strokeDasharray="10 5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isBearish ? 0.6 : 0 }}
                    transition={{ duration: 0.5 }}
                  />
                  <motion.text 
                    x="420" y="270" fill="#ef4444" fontSize="14" fontWeight="bold" letterSpacing="2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isBearish ? 0.8 : 0 }}
                  >
                    AI HEDGE ACTIVATED
                  </motion.text>

                  {/* The Yield Multiplier Zone (Appears in Step 3) */}
                  <motion.path 
                    d="M 600 300 L 1000 300 L 1000 0 L 600 300 Z"
                    fill="url(#green-glow)"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isBullish ? 0.15 : 0 }}
                    transition={{ duration: 1 }}
                  />
                  <defs>
                    <linearGradient id="green-glow" x1="0" y1="1" x2="0" y2="0">
                      <stop offset="0%" stopColor="transparent" />
                      <stop offset="100%" stopColor="#4ade80" />
                    </linearGradient>
                  </defs>

                  {/* Drawing the Candles */}
                  {CANDLES.map((c, i) => {
                    // Logic to determine if this specific candle should be visible yet
                    const isPhase1 = i < 8;
                    const isPhase2 = i >= 8 && i < 12;
                    const isPhase3 = i >= 12;

                    let showCandle = false;
                    if (isPhase1) showCandle = isBaseVisible;
                    if (isPhase2) showCandle = isBearish;
                    if (isPhase3) showCandle = isBullish;

                    const isGreen = c.c < c.o; // In SVG, lower Y is higher price
                    const color = isGreen ? "#4ade80" : "#ef4444";
                    const xPos = i * 45 + 50; // Spacing the candles out evenly

                    return (
                      <g key={i}>
                        {/* The Wick */}
                        <motion.line 
                          x1={xPos} y1={c.h} x2={xPos} y2={c.l} 
                          stroke={color} strokeWidth="2"
                          initial={{ opacity: 0, scaleY: 0 }}
                          animate={{ 
                            opacity: showCandle ? 1 : 0,
                            scaleY: showCandle ? 1 : 0 
                          }}
                          transition={{ duration: 0.4, delay: showCandle ? i * 0.05 : 0 }} // Waterfall animation
                          style={{ transformOrigin: `center ${c.o}px` }}
                        />
                        {/* The Body */}
                        <motion.rect 
                          x={xPos - 8} y={Math.min(c.o, c.c)} width="16" height={Math.abs(c.o - c.c)} 
                          fill={color} rx="2"
                          initial={{ opacity: 0, scaleY: 0 }}
                          animate={{ 
                            opacity: showCandle ? 1 : 0,
                            scaleY: showCandle ? 1 : 0 
                          }}
                          transition={{ duration: 0.4, delay: showCandle ? i * 0.05 : 0 }}
                          style={{ transformOrigin: `center ${c.o}px` }}
                        />
                      </g>
                    );
                  })}
                </svg>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}