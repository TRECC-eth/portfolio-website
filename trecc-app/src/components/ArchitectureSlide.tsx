import { motion } from "framer-motion";

export default function ArchitectureSlide() {
  return (
    <div className="h-full w-full bg-[#030303] flex flex-col items-center justify-center relative overflow-hidden">
      
      <h2 className="absolute top-24 text-chrome font-medium text-4xl tracking-tight z-30">
        The TRECC Stack
      </h2>

      <div className="w-full max-w-6xl mx-auto flex items-center justify-between px-6 relative h-full">
        
        {/* Left Text */}
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="w-1/3">
          <h3 className="text-2xl text-white font-semibold mb-3">Core Infrastructure</h3>
          <p className="text-[#8A8D93] leading-relaxed text-sm">High-performance foundational primitives. The base layer pools liquidity and enforces smart-contract security.</p>
        </motion.div>

        {/* CENTER 3D STACK */}
        <div className="w-1/3 flex justify-center perspective-[1000px]">
          <div className="relative w-48 h-48 md:w-64 md:h-64" style={{ transform: "rotateX(60deg) rotateZ(-45deg)", transformStyle: "preserve-3d" }}>
            
            {/* Bottom Layer */}
            <motion.div initial={{ opacity: 0.1 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }} style={{ transform: "translateZ(0px)" }} className="absolute inset-0 border border-white/20 bg-white/5 backdrop-blur-md flex items-center justify-center">
              <span className="text-white/80 font-mono text-xs tracking-[0.2em] font-bold">CORE_VAULTS</span>
            </motion.div>
            
            {/* Middle Layer */}
            <motion.div initial={{ opacity: 0.1 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.8 }} style={{ transform: "translateZ(80px)" }} className="absolute inset-4 border border-white/40 bg-white/10 backdrop-blur-xl flex items-center justify-center">
              <span className="text-white font-mono text-sm tracking-[0.2em] font-bold">AI_AGENTS</span>
            </motion.div>
            
            {/* Top Layer */}
            <motion.div initial={{ opacity: 0.1 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8, delay: 1.2 }} style={{ transform: "translateZ(160px)" }} className="absolute inset-8 border border-white/70 bg-[#c4c6cc]/20 backdrop-blur-2xl flex items-center justify-center shadow-[0_0_50px_rgba(255,255,255,0.1)]">
              <span className="text-white font-mono text-base tracking-[0.2em] font-bold">YIELD_LAYER</span>
            </motion.div>
            
            {/* Connection Line */}
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5, delay: 0.5 }} className="absolute top-1/2 left-1/2 w-[1px] h-[160px] bg-gradient-to-t from-white/10 to-white/50 -translate-x-1/2 -translate-y-1/2" style={{ transform: "translateZ(80px) rotateX(-90deg)" }} />
          </div>
        </div>

        {/* Right Text */}
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="w-1/3 pl-8">
          <h3 className="text-2xl text-white font-semibold mb-3">Autonomous Execution</h3>
          <p className="text-[#8A8D93] leading-relaxed text-sm">The execution brain. Specialized nodes ingest market data and execute complex routing strategies natively.</p>
        </motion.div>

      </div>
    </div>
  );
}