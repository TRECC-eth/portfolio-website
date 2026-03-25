import { motion, AnimatePresence } from "framer-motion";

const Block = ({
  x, y, z, w, h, depth, label, active, highlight = false, textFace = "top"
}: {
  x: number, y: number, z: number, w: number, h: number, depth: number,
  label: string, active: boolean, highlight?: boolean, textFace?: "top" | "right" | "left"
}) => {
  // Define stronger 3D lighting states mapped to the reference images
  // Using variations of #d7d7b6 (approx 215, 215, 182)

  // Outer wireframe borders
  const borderColor = active
    ? (highlight ? "rgba(215, 215, 182, 0.9)" : "rgba(215, 215, 182, 0.3)")
    : "rgba(215, 215, 182, 0.1)";

  // Top Face (Lightest)
  const topFaceColor = active
    ? (highlight ? "rgba(215, 215, 182, 0.85)" : "rgba(180, 180, 150, 0.25)")
    : "rgba(150, 150, 130, 0.05)";

  // Right Face (Darkest shadow to create depth)
  const rightFaceColor = active
    ? (highlight ? "rgba(180, 180, 150, 0.75)" : "rgba(80, 80, 70, 0.4)")
    : "rgba(50, 50, 45, 0.15)";

  // Left Face (Mid-tone shadow)
  const leftFaceColor = active
    ? (highlight ? "rgba(195, 195, 165, 0.65)" : "rgba(100, 100, 85, 0.3)")
    : "rgba(65, 65, 55, 0.1)";

  const labelColor = highlight ? "text-[#030303] font-bold" : "text-white/80";

  return (
    <motion.div
      className="absolute"
      animate={{ opacity: active ? 1 : 0.25, z: active ? z : z - 10 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{
        left: x, top: y, width: w, height: h, transformStyle: "preserve-3d"
      }}
    >
      {/* Top Face */}
      <div
        className="absolute inset-0 flex items-center justify-center transition-colors duration-700 backdrop-blur-sm"
        style={{ border: `1px solid ${borderColor}`, backgroundColor: topFaceColor, transform: `translateZ(${depth}px)` }}
      >
        {label && textFace === "top" && (
          <span className={`${labelColor} text-[10px] md:text-[11px] font-mono tracking-wider -rotate-45`}>{label}</span>
        )}
      </div>

      {/* Front-Right (X-axis) Face */}
      <div
        className="absolute origin-top flex items-center justify-center overflow-hidden transition-colors duration-700 backdrop-blur-md"
        style={{
          width: w, height: depth, top: "100%", left: 0,
          border: `1px solid ${borderColor}`, backgroundColor: rightFaceColor,
          transform: `translateZ(${depth}px) rotateX(-90deg)`,
        }}
      >
        {label && textFace === "right" && (
          <span className={`block -rotate-90 ${labelColor} text-[9px] md:text-[10px] tracking-[0.2em] font-mono whitespace-nowrap`}>
            {label}
          </span>
        )}
      </div>

      {/* Front-Left (Y-axis) Face */}
      <div
        className="absolute origin-right flex items-center justify-center overflow-hidden transition-colors duration-700 backdrop-blur-md"
        style={{
          width: depth, height: h, top: 0, right: "100%",
          border: `1px solid ${borderColor}`, backgroundColor: leftFaceColor,
          transform: `translateZ(${depth}px) rotateY(-90deg)`,
        }}
      >
        {label && textFace === "left" && (
          <span className={`block ${labelColor} text-[9px] md:text-[10px] tracking-[0.2em] font-mono whitespace-nowrap`}>
            {label}
          </span>
        )}
      </div>
    </motion.div>
  );
};

export default function ArchitectureSlide({ step = 4 }: { step?: number }) {
  const vaultActive = step >= 4;
  const agentsActive = step >= 5;
  const yieldActive = step >= 6;

  // Track the most recent active stage for the text transitions
  const stepText = step <= 4 ? "vaults" : step === 5 ? "agents" : "yield";

  return (
    <div className="h-full w-full bg-[#030303] flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(215,215,182,0.05),transparent_70%)]" />

      <h2 className="absolute top-16 md:top-24 text-chrome font-medium text-4xl tracking-tight z-30">
        The TRECC Stack
      </h2>

      <div className="w-full max-w-7xl mx-auto flex items-center justify-between px-6 relative h-full">

        {/* Left Column Text */}
        <div className="w-1/4 relative z-20 h-40 pointer-events-none md:pointer-events-auto">
          <AnimatePresence mode="wait">
            {stepText === "vaults" && (
              <motion.div
                key="vaults"
                initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <div className="inline-block px-3 py-1 mb-4 rounded-full border border-white/20 bg-white/5 text-xs font-mono text-white/70">LAYER 1</div>
                <h3 className="text-3xl text-white font-semibold mb-3">On-Chain Core</h3>
                <p className="text-[#8A8D93] leading-relaxed">The foundational protocol layer. Vaults pool lender capital while the Registry and Risk Engine manage soulbound agent identities and credit bonds natively.</p>
              </motion.div>
            )}

            {stepText === "yield" && (
              <motion.div
                key="yield"
                initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <div className="inline-block px-3 py-1 mb-4 rounded-full border border-[#d7d7b6]/30 bg-[#d7d7b6]/10 text-xs font-mono text-[#d7d7b6]">LAYER 3</div>
                <h3 className="text-3xl text-white font-semibold mb-3 drop-shadow-[0_0_15px_rgba(215,215,182,0.4)]">Application Interfaces</h3>
                <p className="text-[#8A8D93] leading-relaxed">Purpose-built client gateways. Human capital providers earn yield via the Lender UI, while agents access credit operations through the Agent UI.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* CENTER 3D STACK - Isometric layout */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[35%] pointer-events-none z-10">
          {/* Scale wrapper to prevent Tailwind classes from being overwritten by the inline transform string */}
          <div className="transform-gpu scale-[0.8] md:scale-[1] lg:scale-[1.2] xl:scale-[1.4] origin-center mt-[180px] ml-3">
            <div className="relative w-[320px] h-[320px]" style={{ transform: "rotateX(60deg) rotateZ(-45deg)", transformStyle: "preserve-3d" }}>

              {/* BASE LAYER */}
              <Block x={0} y={0} z={0} w={320} h={320} depth={20} label="TRECC Protocol" active={vaultActive} textFace="left" />

              {/* VAULTS LAYER (Middle Base) */}
              <Block x={20} y={20} z={30} w={120} h={120} depth={30} label="Liquidity Vault" active={vaultActive} textFace="top" />
              <Block x={20} y={160} z={30} w={120} h={140} depth={30} label="Identity Registry" active={vaultActive} textFace="top" />
              <Block x={160} y={20} z={30} w={140} h={280} depth={30} label="Risk Engine" active={vaultActive} textFace="top" />

              {/* AUTONOMOUS AGENTS (Pillars) */}
              <Block x={40} y={180} z={70} w={50} h={70} depth={80} label="MPC Wallet" active={agentsActive} textFace="right" />
              <Block x={180} y={40} z={70} w={50} h={70} depth={100} label="Risk Sentinel" active={agentsActive} textFace="right" />
              <Block x={240} y={160} z={70} w={40} h={40} depth={70} label="AI Logic" active={agentsActive} textFace="left" />

              {/* YIELD / APPS (Highlight Pillars) */}
              <Block x={40} y={40} z={70} w={60} h={60} depth={140} label="Agent UI" active={yieldActive} highlight={yieldActive} textFace="right" />
              <Block x={180} y={180} z={70} w={60} h={60} depth={160} label="Lender UI" active={yieldActive} highlight={yieldActive} textFace="left" />
              {/* Connection Line connecting the highlight to the text (Decorative) */}
              <motion.div
                animate={{ opacity: yieldActive ? 1 : 0 }}
                className="absolute left-[-150px] top-[100px] w-[150px] h-[1px] bg-[#d7d7b6]/50"
                style={{ transform: "translateZ(200px) rotateZ(45deg)", transformOrigin: "right center" }}
              />
            </div>
          </div>
        </div>

        {/* Right Column Text */}
        <div className="w-1/4 pl-8 relative z-20 h-40 pointer-events-none md:pointer-events-auto">
          <AnimatePresence mode="wait">
            {stepText === "agents" && (
              <motion.div
                key="agents"
                initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 30 }} transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <div className="inline-block px-3 py-1 mb-4 rounded-full border border-white/20 bg-white/5 text-xs font-mono text-white/70">LAYER 2</div>
                <h3 className="text-3xl text-white font-semibold mb-3">Off-Chain</h3>
                <p className="text-[#8A8D93] leading-relaxed">The secure execution environment. Off-chain Risk Sentinels and MPC Wallets seamlessly bridge autonomous AI logic to on-chain capabilities.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}