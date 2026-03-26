import { motion, AnimatePresence } from "framer-motion";

interface DashboardProps {
  step: number;
}

// 60 Hand-crafted candles illustrating textbook crypto patterns.
const MARKET_CANDLES = [
  // Phase 1: Wyckoff Distribution (Sideways chop, trapping retail)
  {o: 120, c: 118, h: 110, l: 125, v: 20}, {o: 118, c: 122, h: 115, l: 125, v: 15},
  {o: 122, c: 115, h: 110, l: 125, v: 25}, {o: 115, c: 112, h: 105, l: 120, v: 30},
  {o: 112, c: 108, h: 100, l: 115, v: 35}, {o: 108, c: 110, h: 102, l: 115, v: 20},
  {o: 110, c: 105, h: 98,  l: 112, v: 40}, {o: 105, c: 107, h: 100, l: 110, v: 25},
  {o: 107, c: 102, h: 95,  l: 108, v: 30}, {o: 102, c: 104, h: 98,  l: 108, v: 15},
  {o: 104, c: 100, h: 92,  l: 106, v: 35}, {o: 100, c: 103, h: 95,  l: 105, v: 20},
  {o: 103, c: 105, h: 98,  l: 108, v: 15}, {o: 105, c: 108, h: 100, l: 112, v: 20},
  {o: 108, c: 112, h: 105, l: 115, v: 25}, {o: 112, c: 110, h: 105, l: 115, v: 15},
  {o: 110, c: 115, h: 108, l: 118, v: 30}, {o: 115, c: 118, h: 110, l: 120, v: 25},
  {o: 118, c: 125, h: 115, l: 130, v: 40}, {o: 125, c: 122, h: 120, l: 128, v: 20},

  // Phase 2: Cascading Liquidation Crash
  {o: 122, c: 140, h: 120, l: 145, v: 60}, {o: 140, c: 165, h: 135, l: 175, v: 85}, // Breakdown
  {o: 165, c: 190, h: 160, l: 200, v: 95}, {o: 190, c: 215, h: 185, l: 225, v: 110}, // Freefall
  {o: 215, c: 205, h: 195, l: 220, v: 50}, {o: 205, c: 195, h: 185, l: 210, v: 45}, // Bear Flag (Dead cat bounce)
  {o: 195, c: 200, h: 190, l: 205, v: 30}, 
  {o: 200, c: 230, h: 195, l: 240, v: 120}, {o: 230, c: 255, h: 225, l: 265, v: 130}, // Second capitulation
  {o: 255, c: 268, h: 250, l: 275, v: 90}, {o: 268, c: 275, h: 265, l: 285, v: 100},
  {o: 275, c: 265, h: 260, l: 295, v: 180}, // THE HAMMER: Massive long wick down to 295, high volume
  {o: 265, c: 268, h: 260, l: 272, v: 60}, {o: 268, c: 262, h: 258, l: 270, v: 40}, // Consolidation at bottom
  {o: 262, c: 258, h: 255, l: 265, v: 30},

  // Phase 3: V-Recovery, Cup & Handle, Parabolic Breakout
  {o: 258, c: 235, h: 230, l: 260, v: 90}, {o: 235, c: 210, h: 205, l: 240, v: 85}, // V-Recovery starts
  {o: 210, c: 190, h: 185, l: 215, v: 75}, {o: 190, c: 175, h: 170, l: 195, v: 70}, 
  {o: 175, c: 165, h: 160, l: 180, v: 65}, {o: 165, c: 155, h: 150, l: 170, v: 60}, // Cup lip reached
  {o: 155, c: 162, h: 152, l: 165, v: 30}, {o: 162, c: 168, h: 158, l: 172, v: 25}, // The Handle (Red pullback)
  {o: 168, c: 172, h: 165, l: 175, v: 20}, {o: 172, c: 168, h: 162, l: 175, v: 35}, 
  {o: 168, c: 150, h: 145, l: 170, v: 100}, // BREAKOUT! (Massive volume)
  {o: 150, c: 125, h: 120, l: 155, v: 110}, {o: 125, c: 105, h: 100, l: 130, v: 120},
  {o: 105, c: 85,  h: 80,  l: 110, v: 130}, {o: 85,  c: 90,  h: 80,  l: 95,  v: 50}, // Micro red pullback
  {o: 90,  c: 65,  h: 60,  l: 95,  v: 140}, {o: 65,  c: 45,  h: 40,  l: 70,  v: 150},
  {o: 45,  c: 30,  h: 25,  l: 50,  v: 160}, {o: 30,  c: 20,  h: 15,  l: 35,  v: 180}, // Moon
  {o: 20,  c: 12,  h: 8,   l: 25,  v: 190}, {o: 12,  c: 5,   h: 2,   l: 15,  v: 200}
];

// Calculate exact X coordinates for the layout
const getCx = (i: number) => i * (1000 / MARKET_CANDLES.length) + 5 + ((1000 / MARKET_CANDLES.length) * 0.6) / 2;

// The Line Chart path tracking exactly the Close prices (straight lines, no curves)
const lineChartPath = MARKET_CANDLES.map((c, i) => `${i === 0 ? 'M' : 'L'} ${getCx(i)} ${c.c}`).join(" ");

export default function DashboardSlide({ step }: DashboardProps) {
  const isBase = step >= 1;
  const isHedging = step >= 2;
  const isYielding = step >= 3;

  // Authentic Binance/TradingView Colors
  const GREEN = "#0ECB81"; 
  const RED = "#F6465D";   

  // Dynamic PnL Logic
  let vaultPnl = "+$0.00";
  let activeCredit = "$0.00";
  
  if (isBase && !isHedging) {
    vaultPnl = "+$142.50"; 
    activeCredit = "$50,000.00"; 
  } else if (isHedging && !isYielding) {
    vaultPnl = "-$45.20"; // Drawdown
    activeCredit = "$50,000.00"; 
  } else if (isYielding) {
    vaultPnl = "+$24,092.50"; // Parabolic yield
    activeCredit = "$500,000.00"; 
  }

  // FORCE THE COLOR: By defining it here and using style={{ color: pnlColorHex }}
  // we bypass Tailwind's compiler bug entirely.
  const isNegative = vaultPnl.includes("-");
  const pnlColorHex = isNegative ? RED : GREEN;

  return (
    <div className="h-screen w-full bg-[#030303] flex flex-col items-center justify-center p-4 sm:p-8 relative overflow-hidden box-border">
      
      {/* Narrative Headers */}
      <div className="h-16 w-full flex items-center justify-center relative shrink-0">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: step === 1 ? 1 : 0 }} className="absolute">
          <h2 className="text-3xl md:text-4xl text-white font-light tracking-tight text-center">The Capital-Starved Machine</h2>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: step === 2 ? 1 : 0 }} className="absolute">
          <h2 className="text-3xl md:text-4xl text-white font-light tracking-tight text-center">Programmable Guardrails</h2>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: step >= 3 ? 1 : 0 }} className="absolute">
          <h2 className="text-3xl md:text-4xl text-white font-light tracking-tight text-center">Autonomous Credit Expansion</h2>
        </motion.div>
      </div>

      {/* THE PLATFORM UI */}
      <motion.div 
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: isBase ? 0 : 60, opacity: isBase ? 1 : 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-6xl flex-1 min-h-0 flex flex-col mt-4"
      >
        <div className="hyper-card w-full h-full overflow-hidden shadow-[0_0_80px_rgba(255,255,255,0.02)] flex flex-col bg-[#0A0A0B] border border-white/5 rounded-xl relative">
          
          {/* Header */}
          <div className="h-14 border-b border-white/5 flex items-center justify-between px-6 bg-[#0E0E10] shrink-0 z-20">
            <div className="flex items-center gap-6">
              <span className="text-white font-semibold text-sm flex items-center gap-2 tracking-wide">
                TRECC Liquidity Vault
              </span>
            </div>
            <div className="flex items-center gap-4 text-xs font-mono">
              <span className="text-[#50545a]">DELEGATED CREDIT:</span>
              <motion.span className="text-white bg-black px-3 py-1 rounded border border-white/10">
                {activeCredit}
              </motion.span>
            </div>
          </div>

          <div className="flex flex-1 min-h-0 overflow-hidden relative">
            
            {/* Sidebar */}
            <div className="w-64 border-r border-white/5 p-4 hidden md:flex flex-col bg-[#0E0E10] shrink-0 z-20">
              <div className="text-[10px] text-[#50545a] font-bold mb-4 tracking-[0.2em]">WHITELISTED AGENTS</div>
              
              <motion.div animate={{ backgroundColor: isHedging && !isYielding ? 'rgba(255, 255, 255, 0.03)' : 'transparent' }} className="p-3 rounded-lg mb-2 border border-transparent">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-2">
                    <div className={`w-1.5 h-1.5 rounded-full ${isHedging && !isYielding ? 'bg-white' : 'bg-[#30343a]'}`} />
                    <span className={isHedging && !isYielding ? 'text-white text-sm font-medium' : 'text-[#606468] text-sm font-medium'}>0xDelta_Hedge</span>
                  </div>
                </div>
                <div className="flex justify-between items-center text-xs"><span className="text-[#50545a]">Reputation</span><span className="text-[#8A8D93] font-mono">720 (Tier 2)</span></div>
                <div className="flex justify-between items-center text-xs mt-1"><span className="text-[#50545a]">Scope</span><span className="text-[#8A8D93]">Delta-Neutral</span></div>
              </motion.div>

              <motion.div animate={{ backgroundColor: isYielding ? 'rgba(255, 255, 255, 0.03)' : 'transparent' }} className="p-3 rounded-lg border border-transparent">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-2">
                    <div className={`w-1.5 h-1.5 rounded-full ${isYielding ? 'bg-white' : 'bg-[#30343a]'}`} style={{ backgroundColor: isYielding ? GREEN : '' }} />
                    <span className={isYielding ? 'text-white text-sm font-medium' : 'text-[#606468] text-sm font-medium'}>0xArb_Prime</span>
                  </div>
                </div>
                <div className="flex justify-between items-center text-xs"><span className="text-[#50545a]">Reputation</span><motion.span animate={{ color: isYielding ? '#ffffff' : '#8A8D93' }} className="font-mono">{isYielding ? "980 (Tier 1)" : "850 (Tier 2)"}</motion.span></div>
                <div className="flex justify-between items-center text-xs mt-1"><span className="text-[#50545a]">Scope</span><span className={isYielding ? 'text-white' : 'text-[#8A8D93]'}>Uncollateralized</span></div>
              </motion.div>
            </div>

            {/* Main Chart Area */}
            <div className="flex-1 flex flex-col bg-[#050505] relative overflow-hidden">
              
              <div className="absolute right-0 top-0 bottom-6 w-12 border-l border-white/5 flex flex-col justify-between py-4 text-[9px] text-[#50545a] items-end pr-2 bg-[#050505] z-10 font-mono shrink-0">
                <span>$45.0k</span><span>$40.0k</span><span>$35.0k</span><span>$30.0k</span><span>$25.0k</span>
              </div>
              
              <div className="absolute left-0 right-0 bottom-0 h-6 border-t border-white/5 flex justify-between items-center px-6 text-[9px] text-[#50545a] bg-[#050505] z-10 font-mono pr-16 shrink-0">
                <span>09:00</span><span>12:00</span><span>15:00</span><span>18:00</span><span>21:00</span>
              </div>

              <div className="absolute inset-0 pointer-events-none opacity-[0.03] bottom-6 right-12">
                {[...Array(5)].map((_, i) => <div key={`h-${i}`} className="w-full border-t border-white absolute" style={{ top: `${i * 25}%` }} />)}
                {[...Array(6)].map((_, i) => <div key={`v-${i}`} className="h-full border-l border-white absolute" style={{ left: `${i * 20}%` }} />)}
              </div>

              <div className="relative z-30 p-6 pb-0 flex justify-between items-end shrink-0">
                <div>
                  <div className="text-[#50545a] text-[10px] mb-1 font-bold tracking-[0.15em]">VAULT NET PNL</div>
                  
                  {/* SMOOTH PNL "TICK" ANIMATION WITH EXACT COLOR FIX */}
                  <AnimatePresence mode="popLayout">
                    <motion.div 
                      key={vaultPnl}
                      initial={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="text-4xl font-light"
                      style={{ color: pnlColorHex }} // Direct inline style overrides any Tailwind bugs
                    >
                      {vaultPnl}
                    </motion.div>
                  </AnimatePresence>

                </div>
              </div>
              
              {/* SVG Canvas */}
              <div className="flex-1 relative mt-2 mr-12 mb-6 min-h-0">
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 300" preserveAspectRatio="none">
                  
                  {/* --- 1. BACKGROUND LAYER: Faint Line Chart --- */}
                  <motion.path
                    d={lineChartPath}
                    fill="none" 
                    stroke="#ffffff" 
                    strokeWidth="1.5" 
                    opacity="0.1" 
                    initial={{ pathLength: 0 }}
                    animate={{ 
                      pathLength: isYielding ? 1 : (isHedging ? 35/60 : 20/60) 
                    }}
                    transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }} // Slower, fluid line drawing
                  />

                  {/* Origin Threshold Line ($35k baseline / Break-even) */}
                  <line x1="0" y1="120" x2="1000" y2="120" stroke="#30343a" strokeWidth="1" strokeDasharray="4 4" />

                  {/* --- 2. FOREGROUND LAYER: Flat Candlesticks with Smooth Cascade --- */}
                  <g opacity="1">
                    {MARKET_CANDLES.map((c, i) => {
                      const isVisible = (i < 20 && isBase) || (i >= 20 && i < 35 && isHedging) || (i >= 35 && isYielding);
                      const isUp = c.c < c.o; 
                      const color = isUp ? GREEN : RED;
                      const xPos = i * (1000 / MARKET_CANDLES.length) + 5; 
                      const candleWidth = (1000 / MARKET_CANDLES.length) * 0.6; 

                      // MAGIC CALCULATION: Creates a cascading wave effect ONLY for the newly revealed candles
                      let relativeDelay = i;
                      if (isHedging && i >= 20) relativeDelay = i - 20;
                      if (isYielding && i >= 35) relativeDelay = i - 35;
                      
                      // Slows down the cascade slightly so it looks like real-time market printing
                      const animationDelay = isVisible ? relativeDelay * 0.04 : 0; 

                      return (
                        <g key={i}>
                          {/* Wick */}
                          <motion.line 
                            x1={xPos + candleWidth / 2} y1={c.h} 
                            x2={xPos + candleWidth / 2} y2={c.l} 
                            stroke={color} strokeWidth="1.5"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isVisible ? 1 : 0 }}
                            transition={{ duration: 0.5, delay: animationDelay, ease: [0.22, 1, 0.36, 1] }}
                          />
                          {/* Body */}
                          <motion.rect 
                            x={xPos} y={Math.min(c.o, c.c)} 
                            width={candleWidth} height={Math.max(1.5, Math.abs(c.o - c.c))} 
                            fill={color} 
                            initial={{ opacity: 0, scaleY: 0 }}
                            animate={{ opacity: isVisible ? 1 : 0, scaleY: isVisible ? 1 : 0 }}
                            transition={{ duration: 0.6, delay: animationDelay + 0.02, ease: [0.22, 1, 0.36, 1] }}
                            style={{ transformOrigin: `center ${c.o}px` }}
                          />
                          {/* Volume */}
                          <motion.rect 
                            x={xPos} y={300 - (c.v * 0.4)} 
                            width={candleWidth} height={c.v * 0.4} 
                            fill={color} opacity="0.25"
                            initial={{ opacity: 0, scaleY: 0 }}
                            animate={{ opacity: isVisible ? 0.25 : 0, scaleY: isVisible ? 1 : 0 }}
                            transition={{ duration: 0.6, delay: animationDelay + 0.05, ease: [0.22, 1, 0.36, 1] }}
                            style={{ transformOrigin: `bottom` }}
                          />
                        </g>
                      );
                    })}
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}