import { motion, AnimatePresence } from "framer-motion";
import Grainient from "./Grainient"; // <-- Make sure the path matches where you saved the component!

interface DashboardProps {
  step: number;
  active?: boolean;
}

// 60 Hand-crafted candles illustrating textbook crypto patterns.
const MARKET_CANDLES = [
  // Phase 1: Wyckoff Distribution
  { o: 120, c: 118, h: 110, l: 125, v: 20 }, { o: 118, c: 122, h: 115, l: 125, v: 15 },
  { o: 122, c: 115, h: 110, l: 125, v: 25 }, { o: 115, c: 112, h: 105, l: 120, v: 30 },
  { o: 112, c: 108, h: 100, l: 115, v: 35 }, { o: 108, c: 110, h: 102, l: 115, v: 20 },
  { o: 110, c: 105, h: 98, l: 112, v: 40 }, { o: 105, c: 107, h: 100, l: 110, v: 25 },
  { o: 107, c: 102, h: 95, l: 108, v: 30 }, { o: 102, c: 104, h: 98, l: 108, v: 15 },
  { o: 104, c: 100, h: 92, l: 106, v: 35 }, { o: 100, c: 103, h: 95, l: 105, v: 20 },
  { o: 103, c: 105, h: 98, l: 108, v: 15 }, { o: 105, c: 108, h: 100, l: 112, v: 20 },
  { o: 108, c: 112, h: 105, l: 115, v: 25 }, { o: 112, c: 110, h: 105, l: 115, v: 15 },
  { o: 110, c: 115, h: 108, l: 118, v: 30 }, { o: 115, c: 118, h: 110, l: 120, v: 25 },
  { o: 118, c: 125, h: 115, l: 130, v: 40 }, { o: 125, c: 122, h: 120, l: 128, v: 20 },

  // Phase 2: Cascading Liquidation Crash
  { o: 122, c: 140, h: 120, l: 145, v: 60 }, { o: 140, c: 165, h: 135, l: 175, v: 85 },
  { o: 165, c: 190, h: 160, l: 200, v: 95 }, { o: 190, c: 215, h: 185, l: 225, v: 110 },
  { o: 215, c: 205, h: 195, l: 220, v: 50 }, { o: 205, c: 195, h: 185, l: 210, v: 45 },
  { o: 195, c: 200, h: 190, l: 205, v: 30 },
  { o: 200, c: 230, h: 195, l: 240, v: 120 }, { o: 230, c: 255, h: 225, l: 265, v: 130 },
  { o: 255, c: 268, h: 250, l: 275, v: 90 }, { o: 268, c: 275, h: 265, l: 285, v: 100 },
  { o: 275, c: 265, h: 260, l: 295, v: 180 }, // Hammer
  { o: 265, c: 268, h: 260, l: 272, v: 60 }, { o: 268, c: 262, h: 258, l: 270, v: 40 },
  { o: 262, c: 258, h: 255, l: 265, v: 30 },

  // Phase 3: Parabolic Breakout
  { o: 258, c: 235, h: 230, l: 260, v: 90 }, { o: 235, c: 210, h: 205, l: 240, v: 85 },
  { o: 210, c: 190, h: 185, l: 215, v: 75 }, { o: 190, c: 175, h: 170, l: 195, v: 70 },
  { o: 175, c: 165, h: 160, l: 180, v: 65 }, { o: 165, c: 155, h: 150, l: 170, v: 60 },
  { o: 155, c: 162, h: 152, l: 165, v: 30 }, { o: 162, c: 168, h: 158, l: 172, v: 25 },
  { o: 168, c: 172, h: 165, l: 175, v: 20 }, { o: 172, c: 168, h: 162, l: 175, v: 35 },
  { o: 168, c: 150, h: 145, l: 170, v: 100 },
  { o: 150, c: 125, h: 120, l: 155, v: 110 }, { o: 125, c: 105, h: 100, l: 130, v: 120 },
  { o: 105, c: 85, h: 80, l: 110, v: 130 }, { o: 85, c: 90, h: 80, l: 95, v: 50 },
  { o: 90, c: 65, h: 60, l: 95, v: 140 }, { o: 65, c: 45, h: 40, l: 70, v: 150 },
  { o: 45, c: 30, h: 25, l: 50, v: 160 }, { o: 30, c: 20, h: 15, l: 35, v: 180 },
  { o: 20, c: 12, h: 8, l: 25, v: 190 }, { o: 12, c: 5, h: 2, l: 15, v: 200 }
];

const getCx = (i: number) => i * (1000 / MARKET_CANDLES.length) + 5 + ((1000 / MARKET_CANDLES.length) * 0.6) / 2;
const lineChartPath = MARKET_CANDLES.map((c, i) => `${i === 0 ? 'M' : 'L'} ${getCx(i)} ${c.c}`).join(" ");

export default function DashboardSlide({ step, active = true }: DashboardProps) {
  const isBase = step >= 1;
  const isHedging = step >= 2;
  const isYielding = step >= 3;

  const GREEN = "#0ECB81";
  const RED = "#F6465D";

  let vaultPnl = "+$142.50";
  let activeCredit = "$50,000.00";

  if (isBase && !isHedging) {
    vaultPnl = "+$142.50";
    activeCredit = "$50,000.00";
  } else if (isHedging && !isYielding) {
    vaultPnl = "-$45.20";
    activeCredit = "$50,000.00";
  } else if (isYielding) {
    vaultPnl = "+$24,092.50";
    activeCredit = "$500,000.00";
  }

  const isNegative = vaultPnl.includes("-");
  const pnlColorHex = isNegative ? RED : GREEN;

  return (
    // Removed the solid background color so the Grainient shows through
    <div className="h-screen w-full flex flex-col items-center justify-start pt-[4.5rem] md:pt-[120px] pb-3 md:pb-12 px-4 md:px-6 relative overflow-hidden box-border">

      {/* BACKGROUND LAYER: The React Bits Grainient */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
        <Grainient
          active={active}
          color1="#858585"
          color2="#000000"
          color3="#7d7d7d"
          timeSpeed={0.25}
          colorBalance={0.54}
          warpStrength={0.3}
          warpFrequency={0.5}
          warpSpeed={2}
          warpAmplitude={50}
          blendAngle={8}
          blendSoftness={0.05}
          rotationAmount={500}
          noiseScale={2}
          grainAmount={0.1}
          grainScale={2}
          grainAnimated={false}
          contrast={1.5}
          gamma={1}
          saturation={1}
          centerX={0}
          centerY={0}
          zoom={0.9}
        />
      </div>

      {/* Narrative Headers - Kept z-30 so it sits way above the background */}
      <div className="min-h-[2.75rem] md:min-h-[4.5rem] w-full flex items-center justify-center relative shrink-0 mb-3 md:mb-10 z-30 px-4">
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: step === 1 ? 1 : 0, y: step === 1 ? 0 : -10 }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} className="absolute max-w-4xl">
          <h2 className="text-chrome font-medium text-[1.45rem] sm:text-3xl md:text-5xl tracking-tight text-center leading-tight">
            The Capital-Starved Machine
          </h2>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: step === 2 ? 1 : 0, y: step === 2 ? 0 : -10 }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} className="absolute max-w-4xl">
          <h2 className="text-chrome font-medium text-[1.45rem] sm:text-3xl md:text-5xl tracking-tight text-center leading-tight">
            Programmable Guardrails
          </h2>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: step >= 3 ? 1 : 0, y: step >= 3 ? 0 : -10 }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} className="absolute max-w-4xl">
          <h2 className="text-chrome font-medium text-[1.45rem] sm:text-3xl md:text-5xl tracking-tight text-center leading-tight">
            Autonomous Credit Expansion
          </h2>
        </motion.div>
      </div>

      {/* THE PLATFORM UI - Added relative and z-10 so it isn't hidden by the absolute background */}
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: isBase ? 0 : 60, opacity: isBase ? 1 : 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-[1080px] flex-1 min-h-[300px] sm:min-h-[420px] md:min-h-[500px] max-h-[calc(100vh-8rem)] sm:max-h-[calc(100vh-9.5rem)] md:max-h-[720px] flex flex-col shadow-[0_30px_80px_rgba(0,0,0,0.9)] rounded-2xl relative z-10 border border-white/[0.08] bg-[#09090B]/95 backdrop-blur-2xl"
      >
        <div className="w-full h-full overflow-hidden flex flex-col relative rounded-2xl">

          {/* Header */}
          <div className="h-11 md:h-16 border-b border-white/[0.06] flex items-center justify-between gap-2.5 px-3 md:px-8 bg-gradient-to-b from-white/[0.03] to-transparent shrink-0 z-20">
            <div className="flex items-center gap-6 min-w-0">
              <span className="text-white font-medium text-[12px] sm:text-base md:text-lg flex items-center gap-2 tracking-tight truncate">
                TRECC Liquidity Vault
              </span>
            </div>
            <div className="flex items-center gap-3 md:gap-4 shrink-0">
              <span className="text-white/40 text-[11px] font-semibold uppercase tracking-widest hidden sm:inline">
                Delegated credit
              </span>
              <motion.span className="text-white bg-black/50 px-2 py-1 rounded-lg border border-white/[0.08] text-[10px] sm:text-sm md:text-base font-mono tabular-nums shadow-inner">
                {activeCredit}
              </motion.span>
            </div>
          </div>

          <div className="flex flex-1 min-h-0 overflow-hidden relative">

            {/* Sidebar */}
            <div className="w-72 border-r border-white/[0.06] p-4 hidden md:flex flex-col gap-3 bg-black/20 shrink-0 z-20 overflow-hidden justify-center relative">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20 pointer-events-none" />

              {/* Block 1: Lending Pool */}
              <div className="p-3.5 rounded-xl border border-white/[0.04] bg-gradient-to-b from-white/[0.03] to-white/[0.01] shadow-[inset_0_1px_0_rgba(255,255,255,0.02)] relative z-10">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] text-white/50 font-bold uppercase tracking-widest">Lending Pool</span>
                  <motion.div
                    animate={{ color: isBase ? GREEN : '#606468' }}
                    className="flex items-center gap-1.5 text-[10px] font-mono font-medium tracking-wide border border-current/20 px-2 py-0.5 rounded-full bg-current/5"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-current shadow-[0_0_8px_currentColor]" />
                    {isBase ? "LIVE" : "IDLE"}
                  </motion.div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs gap-2">
                    <span className="text-white/50">TVL</span>
                    <AnimatePresence mode="popLayout">
                      <motion.span key={activeCredit} initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 5 }} transition={{ duration: 0.4 }} className="font-mono tabular-nums font-semibold" style={{ color: GREEN, textShadow: `0 0 12px ${GREEN}40` }}>
                        {activeCredit}
                      </motion.span>
                    </AnimatePresence>
                  </div>
                  <div className="flex justify-between items-center text-[13px] gap-2">
                    <span className="text-white/50">Utilization</span>
                    <motion.span animate={{ color: isHedging ? '#E2E8F0' : '#606468' }} className="font-mono tabular-nums font-medium">
                      {isYielding ? "94%" : isHedging ? "100%" : "0%"}
                    </motion.span>
                  </div>
                  <div className="flex justify-between items-center text-[13px] gap-2">
                    <span className="text-white/50">Lender APY</span>
                    <motion.span animate={{ color: isYielding ? GREEN : isHedging ? '#C4C7CC' : '#606468' }} className="font-mono tabular-nums font-medium">
                      {isYielding ? "18.7%" : isHedging ? "3.2%" : "—"}
                    </motion.span>
                  </div>
                  <div className="flex justify-between items-center text-[13px] gap-2">
                    <span className="text-white/50">Active loans</span>
                    <motion.span animate={{ color: isYielding ? GREEN : '#C4C7CC' }} className="font-mono tabular-nums font-medium">
                      {isYielding ? "12" : isHedging ? "1" : "0"}
                    </motion.span>
                  </div>
                </div>
              </div>

              {/* Block 2: ERC-8004 Agent Credit */}
              <div className="p-3.5 rounded-xl border border-white/[0.04] bg-gradient-to-b from-white/[0.03] to-white/[0.01] shadow-[inset_0_1px_0_rgba(255,255,255,0.02)] relative z-10">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] text-white/50 font-bold uppercase tracking-widest">ERC-8004 Agent</span>
                  <motion.span animate={{ opacity: isHedging ? 1 : 0.3 }} className="text-[9px] font-mono text-white/40 border border-white/10 px-1.5 py-0.5 rounded backdrop-blur-sm bg-white/5">
                    Soulbound NFT
                  </motion.span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-[13px] gap-2">
                    <span className="text-white/50">ENS Identity</span>
                    <motion.span animate={{ color: isHedging ? '#E2E8F0' : '#606468' }} className="font-mono font-medium">
                      {isYielding ? "arb.trecc.eth" : isHedging ? "delta.trecc.eth" : "—"}
                    </motion.span>
                  </div>
                  <div className="flex justify-between items-center text-[13px] gap-2">
                    <span className="text-white/50">Credit score</span>
                    <AnimatePresence mode="popLayout">
                      <motion.span key={isYielding ? "980" : isHedging ? "720" : "none"} initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0, color: isYielding ? GREEN : isHedging ? '#E2E8F0' : '#606468' }} exit={{ opacity: 0, y: 5 }} transition={{ duration: 0.4 }} className="font-mono tabular-nums font-medium">
                        {isYielding ? "980" : isHedging ? "720" : "—"}
                      </motion.span>
                    </AnimatePresence>
                  </div>
                  <div className="flex justify-between items-center text-[13px] gap-2">
                    <span className="text-white/50">Tier</span>
                    <motion.span animate={{ color: isYielding ? GREEN : isHedging ? '#E2E8F0' : '#606468' }} className="font-mono font-medium">
                      {isYielding ? "Tier 1" : isHedging ? "Tier 2" : "—"}
                    </motion.span>
                  </div>
                  <div className="flex justify-between items-center text-[13px] gap-2">
                    <span className="text-white/50">Borrows / slashed</span>
                    <motion.span animate={{ color: isHedging ? '#E2E8F0' : '#606468' }} className="font-mono font-medium">
                      {isYielding ? "47 / 0" : isHedging ? "1 / 0" : "— / —"}
                    </motion.span>
                  </div>
                </div>
              </div>

              {/* Block 3: Collateral Exposure */}
              <div className="p-3.5 rounded-xl border border-white/[0.04] bg-gradient-to-b from-white/[0.03] to-white/[0.01] shadow-[inset_0_1px_0_rgba(255,255,255,0.02)] relative z-10">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] text-white/50 font-bold uppercase tracking-widest">Collateral</span>
                  <motion.span
                    animate={{ color: isHedging ? '#E2E8F0' : '#606468', opacity: isHedging ? 1 : 0.4 }}
                    className="text-[10px] font-mono font-bold"
                  >
                    {isHedging ? "UNDERCOLLAT." : "—"}
                  </motion.span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-[13px] gap-2">
                    <span className="text-white/50">ETH bond posted</span>
                    <motion.span animate={{ color: isHedging ? '#E2E8F0' : '#606468' }} className="font-mono font-medium">
                      {isHedging ? "0.01 ETH" : "—"}
                    </motion.span>
                  </div>
                  <div className="flex justify-between items-center text-[13px] gap-2">
                    <span className="text-white/50">Loan exposure</span>
                    <AnimatePresence mode="popLayout">
                      <motion.span key={activeCredit} initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 5 }} transition={{ duration: 0.4 }} className="font-mono tabular-nums font-semibold" style={{ color: isHedging ? RED : '#606468', textShadow: isHedging ? `0 0 12px ${RED}40` : 'none' }}>
                        {isHedging ? activeCredit : "—"}
                      </motion.span>
                    </AnimatePresence>
                  </div>
                  <div className="flex justify-between items-center text-[13px] gap-2">
                    <span className="text-white/50">Collateral ratio</span>
                    <motion.span animate={{ color: isYielding ? RED : isHedging ? '#E2E8F0' : '#606468' }} className="font-mono tabular-nums font-medium">
                      {isYielding ? "0.003%" : isHedging ? "0.03%" : "—"}
                    </motion.span>
                  </div>
                  <div className="flex justify-between items-center text-[13px] gap-2">
                    <span className="text-white/50">Protection</span>
                    <motion.span animate={{ color: isHedging ? GREEN : '#606468' }} className="font-mono text-right font-medium">
                      {isHedging ? "Score + Sentinel" : "—"}
                    </motion.span>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Chart Area */}
            <div className="flex-1 flex flex-col bg-transparent relative overflow-hidden">

              <div className="absolute right-0 top-0 bottom-9 sm:bottom-10 w-10 sm:w-16 flex flex-col justify-between py-4 md:py-8 text-[8px] sm:text-[10px] md:text-[11px] text-white/30 items-end pr-2 md:pr-4 z-10 font-mono tabular-nums shrink-0 font-medium">
                <span>$45.0k</span><span>$40.0k</span><span>$35.0k</span><span>$30.0k</span><span>$25.0k</span>
              </div>

              <div className="absolute left-0 right-0 bottom-0 h-8 sm:h-10 border-t border-white/[0.04] flex justify-between items-center px-3 md:px-8 text-[8px] sm:text-[10px] md:text-[11px] text-white/30 z-10 font-mono tabular-nums pr-10 sm:pr-[4.5rem] shrink-0 font-medium bg-black/10">
                <span>09:00</span><span>12:00</span><span>15:00</span><span>18:00</span><span>21:00</span>
              </div>

              <div className="absolute inset-0 pointer-events-none opacity-[0.02] bottom-10 right-16">
                {[...Array(5)].map((_, i) => <div key={`h-${i}`} className="w-full border-t border-white absolute" style={{ top: `${i * 25}%` }} />)}
                {[...Array(6)].map((_, i) => <div key={`v-${i}`} className="h-full border-l border-white absolute" style={{ left: `${i * 20}%` }} />)}
              </div>

              <div className="relative z-30 p-2.5 sm:p-6 md:p-8 pb-2 sm:pb-4 md:pb-5 flex justify-between items-end shrink-0">
                <div>
                  <div className="text-white/40 text-[11px] md:text-xs mb-2 font-bold uppercase tracking-widest flex items-center gap-2">
                    Vault net P&L
                    <div className="h-[1px] w-8 bg-white/10" />
                  </div>
                  <AnimatePresence mode="popLayout">
                    <motion.div
                      key={vaultPnl}
                      initial={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="text-[1.25rem] sm:text-4xl md:text-[56px] font-medium tracking-tight tabular-nums"
                      style={{ color: pnlColorHex, textShadow: `0 4px 32px ${pnlColorHex}50` }}
                    >
                      {vaultPnl}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              <div className="flex-1 relative mt-0 mr-10 sm:mr-[4.5rem] mb-8 sm:mb-12 md:mb-14 min-h-0 pl-2.5 md:pl-8">
                <svg className="absolute inset-0 w-full h-full" viewBox="0 -15 1000 330" preserveAspectRatio="none">

                  <motion.path
                    d={lineChartPath}
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="1.5"
                    opacity="0.15"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: isYielding ? 1 : (isHedging ? 35 / 60 : 20 / 60) }}
                    transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
                  />

                  <line x1="0" y1="120" x2="1000" y2="120" stroke="#30343a" strokeWidth="1" strokeDasharray="4 4" />

                  <g opacity="1">
                    {MARKET_CANDLES.map((c, i) => {
                      const isVisible = (i < 20 && isBase) || (i >= 20 && i < 35 && isHedging) || (i >= 35 && isYielding);
                      const isUp = c.c < c.o;
                      const color = isUp ? GREEN : RED;
                      const xPos = i * (1000 / MARKET_CANDLES.length) + 5;
                      const candleWidth = (1000 / MARKET_CANDLES.length) * 0.6;

                      let relativeDelay = i;
                      if (isHedging && i >= 20) relativeDelay = i - 20;
                      if (isYielding && i >= 35) relativeDelay = i - 35;
                      const animationDelay = isVisible ? relativeDelay * 0.04 : 0;

                      return (
                        <g key={i}>
                          <motion.line
                            x1={xPos + candleWidth / 2} y1={c.h}
                            x2={xPos + candleWidth / 2} y2={c.l}
                            stroke={color} strokeWidth="1.5"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isVisible ? 1 : 0 }}
                            transition={{ duration: 0.5, delay: animationDelay, ease: [0.22, 1, 0.36, 1] }}
                          />
                          <motion.rect
                            x={xPos} y={Math.min(c.o, c.c)}
                            width={candleWidth} height={Math.max(1.5, Math.abs(c.o - c.c))}
                            fill={color}
                            initial={{ opacity: 0, scaleY: 0 }}
                            animate={{ opacity: isVisible ? 1 : 0, scaleY: isVisible ? 1 : 0 }}
                            transition={{ duration: 0.6, delay: animationDelay + 0.02, ease: [0.22, 1, 0.36, 1] }}
                            style={{ transformOrigin: `center ${c.o}px` }}
                          />
                          <motion.rect
                            x={xPos} y={300 - (c.v * 0.25)}
                            width={candleWidth} height={c.v * 0.25}
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
