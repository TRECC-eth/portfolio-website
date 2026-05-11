import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Block = ({
  x, y, z, w, h, depth, label, active, highlight = false, textFace = "top", className = "", delay = 0
}: {
  x: number, y: number, z: number, w: number, h: number, depth: number,
  label: string, active: boolean, highlight?: boolean, textFace?: "top" | "right" | "left", className?: string, delay?: number
}) => {
  // Define stronger 3D lighting states mapped to the reference images
  // Using variations of #d7d7b6 (approx 215, 215, 182)

  const smoothEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

  // Outer wireframe borders
  const borderColor = active
    ? (highlight ? "rgba(215, 215, 182, 0.9)" : "rgba(215, 215, 182, 0.3)")
    : "rgba(215, 215, 182, 0.1)";

  /* Same hue as before; multi-stop gradients + inset sheen = metallic finish */
  const topFaceColor = active
    ? (highlight
      ? "linear-gradient(135deg, rgba(200, 200, 170, 1) 0%, rgba(180, 180, 150, 1) 38%, rgba(180, 180, 150, 1) 58%, rgba(158, 158, 134, 1) 100%)"
      : "linear-gradient(135deg, rgba(55, 53, 45, 1) 0%, rgba(47, 47, 40, 1) 48%, rgba(47, 47, 40, 1) 55%, rgba(38, 36, 31, 1) 100%)")
    : "rgba(15, 15, 13, 1)";

  const rightFaceColor = active
    ? (highlight
      ? "linear-gradient(180deg, rgba(168, 168, 145, 1) 0%, rgba(150, 150, 130, 1) 42%, rgba(150, 150, 130, 1) 58%, rgba(128, 126, 108, 1) 100%)"
      : "linear-gradient(180deg, rgba(28, 27, 24, 1) 0%, rgba(22, 22, 19, 1) 50%, rgba(17, 16, 14, 1) 100%)")
    : "rgba(7, 7, 6, 1)";

  const leftFaceColor = active
    ? (highlight
      ? "linear-gradient(180deg, rgba(182, 182, 156, 1) 0%, rgba(165, 165, 140, 1) 45%, rgba(165, 165, 140, 1) 60%, rgba(142, 140, 118, 1) 100%)"
      : "linear-gradient(180deg, rgba(38, 36, 32, 1) 0%, rgba(32, 32, 28, 1) 50%, rgba(26, 25, 22, 1) 100%)")
    : "rgba(11, 11, 9, 1)";

  const topSheen = active
    ? highlight
      ? "inset 0 2px 0 rgba(235, 233, 210, 0.35), inset 0 -2px 0 rgba(95, 93, 78, 0.4), 0 6px 18px rgba(0,0,0,0.4)"
      : "inset 0 1px 0 rgba(255,255,255,0.07), inset 0 -1px 0 rgba(0,0,0,0.5)"
    : "none";

  const sideSheen = active
    ? highlight
      ? "inset 1px 0 0 rgba(215, 213, 190, 0.22), inset -1px 0 0 rgba(60, 58, 48, 0.35)"
      : "inset 1px 0 0 rgba(255,255,255,0.04), inset -1px 0 0 rgba(0,0,0,0.45)"
    : "none";

  const labelColor = highlight ? "text-[#030303] font-bold" : "text-white/80";

  return (
    <motion.div
      className="absolute"
      animate={{
        opacity: active ? 1 : 0.0,

      }}
      transition={{ duration: 0.4, ease: smoothEase }}
      style={{
        left: x, top: y, width: w, height: h, transformStyle: "preserve-3d", transform: `translateZ(${z}px)`
      }}
    >
      {/* Top Face */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{
          border: `1px solid ${borderColor}`,
          background: topFaceColor,
          boxShadow: topSheen,
          z: active ? depth : 0
        }}
        transition={{ duration: 0.8, ease: smoothEase, delay: active ? delay : 0 }}
        style={{ z: depth, transformStyle: "preserve-3d", borderWidth: 1, borderStyle: "solid" }}
      >
        {label && textFace === "top" && (
          <span className={`${labelColor} text-[8px] md:text-[9px] font-mono tracking-wider -rotate-45 ${className}`}>{label}</span>
        )}
      </motion.div>

      {/* Front-Right (X-axis) Face */}
      <motion.div
        className="absolute origin-top flex items-center justify-center overflow-hidden"
        animate={{
          border: `1px solid ${borderColor}`,
          background: rightFaceColor,
          boxShadow: sideSheen,
          height: active ? depth : 0,
          z: active ? depth : 0,
        }}
        transition={{ duration: 0.8, ease: smoothEase, delay: active ? delay : 0 }}
        style={{ width: w, height: depth, top: "100%", left: 0, z: depth, rotateX: "-90deg", borderWidth: 1, borderStyle: "solid" }}
      >
        {label && textFace === "right" && (
          <span className={`block origin-center ${labelColor} text-[7px] md:text-[8px] tracking-[0.15em] font-mono whitespace-nowrap ${className}`} style={{ minWidth: depth, textAlign: 'center', transform: 'rotate(-90deg)' }}>
            {label}
          </span>
        )}
      </motion.div>

      {/* Front-Left (Y-axis) Face */}
      <motion.div
        className="absolute origin-right flex items-center justify-center overflow-hidden"
        animate={{
          border: `1px solid ${borderColor}`,
          background: leftFaceColor,
          boxShadow: sideSheen,
          width: active ? depth : 0,
          z: active ? depth : 0,
        }}
        transition={{ duration: 0.8, ease: smoothEase, delay: active ? delay : 0 }}
        style={{ height: h, width: depth, top: 0, right: "100%", z: depth, rotateY: "-90deg", borderWidth: 1, borderStyle: "solid" }}
      >
        {label && textFace === "left" && (
          <span className={`block origin-center ${labelColor} text-[8px] md:text-[9px] tracking-[0.15em] font-mono whitespace-nowrap ${className}`} style={{ minWidth: h, textAlign: 'center' }}>
            {label}
          </span>
        )}
      </motion.div>
    </motion.div>
  );
};

export default function ArchitectureSlide({ step = 4 }: { step?: number }) {
  const baseActive = step >= 4;
  const platesActive = step >= 5;
  const agentsActive = step >= 6;
  const yieldActive = step >= 7;

  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)");
    const onChange = () => setIsMobile(media.matches);
    onChange();
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  const stackLeft = isMobile
    ? "50%"
    : (step === 5 || step === 7)
      ? "40%"
      : (step === 4 || step === 6)
        ? "58%"
        : "50%";

  return (
    <div ref={containerRef} className="h-full w-full bg-[#030303] flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(215,215,182,0.05),transparent_70%)]" />

      <h2 className="absolute top-36 sm:top-40 md:top-32 text-chrome font-medium text-xl sm:text-2xl md:text-4xl tracking-tight z-30 text-center px-6 leading-tight">
        The TRECC Stack
      </h2>

      <div className="w-full max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6 relative h-full">

        {/* Left Column Text */}
        <div className="hidden md:block w-1/4 relative z-20 h-40 pointer-events-none md:pointer-events-auto">
          <AnimatePresence>
            {step === 4 && (
              <motion.div
                key="layer1-base"
                initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }} transition={{ duration: 0.6 }}
                className="absolute inset-0"
              >
                <div className="inline-block px-3 py-1 mb-4 rounded-full border border-white/20 bg-white/5 text-xs font-mono text-white/70">LAYER 0</div>
                <h3 className="text-3xl text-white font-semibold mb-3">Protocol foundation</h3>
                <p className="text-[#8A8D93] leading-relaxed">The TRECC Protocol base—where settlement and shared execution context are anchored before vaults, registries, and engines come online.</p>
              </motion.div>
            )}

            {step === 6 && (
              <motion.div
                key="agents"
                initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }} transition={{ duration: 0.6 }}
                className="absolute inset-0"
              >
                <div className="inline-block px-3 py-1 mb-4 rounded-full border border-white/20 bg-white/5 text-xs font-mono text-white/70">LAYER 2</div>
                <h3 className="text-3xl text-white font-semibold mb-3">Off-Chain</h3>
                <p className="text-[#8A8D93] leading-relaxed">The secure execution environment. Off-chain Risk Sentinels and MPC Wallets seamlessly bridge autonomous AI logic to on-chain capabilities.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* CENTER 3D STACK - Isometric layout (horizontal shift per scroll step: vaults center, agents left, yield right) */}
        <motion.div
          className="absolute top-[47%] md:top-1/2 -translate-x-1/2 -translate-y-1/2 md:-translate-y-[35%] pointer-events-none z-10"
          animate={{
            left: stackLeft,
          }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Scale wrapper to prevent Tailwind classes from being overwritten by the inline transform string */}
          <div className="transform-gpu scale-[0.75] sm:scale-[0.8] md:scale-[1] lg:scale-[1.2] xl:scale-[1.4] origin-center mt-0 sm:mt-[8px] md:mt-[180px] ml-0 md:ml-3">
            <div className="relative w-[320px] h-[320px]" style={{ transform: "rotateX(60deg) rotateZ(-45deg)", transformStyle: "preserve-3d" }}>

              {/* BASE LAYER */}
              <Block className="rotate-90" x={0} y={0} z={0} w={320} h={320} depth={20} label="TRECC Protocol" active={baseActive} textFace="left" />

              {/* VAULTS LAYER (Middle Base) — appear after base-only beat */}
              <Block x={20} y={20} z={30} w={120} h={120} depth={30} label="Liquidity Vault" active={platesActive} textFace="top" />
              <Block x={20} y={160} z={30} w={120} h={140} depth={30} label="Identity Registry" active={platesActive} textFace="top" />
              <Block x={160} y={20} z={30} w={140} h={280} depth={30} label="Risk Engine" active={platesActive} textFace="top" />

              {/* AUTONOMOUS AGENTS (Pillars) */}
              <Block x={40} y={180} z={70} w={50} h={70} depth={80} label="MPC Wallet" active={agentsActive} textFace="right" />
              <Block x={180} y={40} z={70} w={50} h={70} depth={100} label="Risk Sentinel" active={agentsActive} textFace="right" />
              <Block x={240} y={160} z={70} w={40} h={40} depth={70} label="AI Logic" active={agentsActive} textFace="left" />

              {/* YIELD / APPS (Highlight Pillars) */}
              <Block x={40} y={40} z={70} w={60} h={60} depth={140} label="Agent UI" active={yieldActive} highlight={yieldActive} textFace="right" />
              <Block x={180} y={180} z={70} w={60} h={60} depth={160} label="Lender UI" active={yieldActive} highlight={yieldActive} textFace="left" />
            </div>
          </div>
        </motion.div>

        {/* Right Column Text */}
        <div className="hidden md:block w-1/4 pl-8 relative z-20 h-40 pointer-events-none md:pointer-events-auto">
          <AnimatePresence>
            {step === 5 && (
              <motion.div
                key="layer1-plates"
                initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 30 }} transition={{ duration: 0.6 }}
                className="absolute inset-0"
              >
                <div className="inline-block px-3 py-1 mb-4 rounded-full border border-white/20 bg-white/5 text-xs font-mono text-white/70">LAYER 1</div>
                <h3 className="text-3xl text-white font-semibold mb-3">On-Chain Core</h3>
                <p className="text-[#8A8D93] leading-relaxed">The foundational protocol layer. Vaults pool lender capital while the Registry and Risk Engine manage soulbound agent identities and credit bonds natively.</p>
              </motion.div>
            )}

            {step === 7 && (
              <motion.div
                key="yield"
                initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 30 }} transition={{ duration: 0.6 }}
                className="absolute inset-0"
              >
                <div className="inline-block px-3 py-1 mb-4 rounded-full border border-[#d7d7b6]/30 bg-[#d7d7b6]/10 text-xs font-mono text-[#d7d7b6]">LAYER 3</div>
                <h3 className="text-3xl text-white font-semibold mb-3 drop-shadow-[0_0_15px_rgba(215,215,182,0.4)]">Application Interfaces</h3>
                <p className="text-[#8A8D93] leading-relaxed">Purpose-built client gateways. Human capital providers earn yield via the Lender UI, while agents access credit operations through the Agent UI.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Mobile Text Panel */}
        <div className="md:hidden absolute left-4 right-4 top-[60%] sm:top-[62%] z-20">
          <AnimatePresence mode="wait">
            {step === 4 && (
              <motion.div
                key="mobile-base"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ duration: 0.4 }}
                className="rounded-2xl border border-white/10 bg-black/45 backdrop-blur-sm p-4"
              >
                <div className="inline-block px-3 py-1 mb-3 rounded-full border border-white/20 bg-white/5 text-[10px] font-mono text-white/70">LAYER 0</div>
                <h3 className="text-xl text-white font-semibold mb-2">Protocol foundation</h3>
                <p className="text-sm text-[#8A8D93] leading-relaxed">
                  The TRECC Protocol base anchors settlement and shared execution context before vaults, registries, and engines come online.
                </p>
              </motion.div>
            )}

            {step === 5 && (
              <motion.div
                key="mobile-vaults"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ duration: 0.4 }}
                className="rounded-2xl border border-white/10 bg-black/45 backdrop-blur-sm p-4"
              >
                <div className="inline-block px-3 py-1 mb-3 rounded-full border border-white/20 bg-white/5 text-[10px] font-mono text-white/70">LAYER 1</div>
                <h3 className="text-xl text-white font-semibold mb-2">On-Chain Core</h3>
                <p className="text-sm text-[#8A8D93] leading-relaxed">
                  Vaults pool lender capital while the Registry and Risk Engine manage soulbound agent identities and credit bonds natively.
                </p>
              </motion.div>
            )}

            {step === 6 && (
              <motion.div
                key="mobile-agents"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ duration: 0.4 }}
                className="rounded-2xl border border-white/10 bg-black/45 backdrop-blur-sm p-4"
              >
                <div className="inline-block px-3 py-1 mb-3 rounded-full border border-white/20 bg-white/5 text-[10px] font-mono text-white/70">LAYER 2</div>
                <h3 className="text-xl text-white font-semibold mb-2">Off-Chain</h3>
                <p className="text-sm text-[#8A8D93] leading-relaxed">
                  The secure execution environment. Risk Sentinels and MPC Wallets bridge autonomous AI logic to on-chain capabilities.
                </p>
              </motion.div>
            )}

            {step === 7 && (
              <motion.div
                key="mobile-yield"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ duration: 0.4 }}
                className="rounded-2xl border border-[#d7d7b6]/30 bg-black/50 backdrop-blur-sm p-4"
              >
                <div className="inline-block px-3 py-1 mb-3 rounded-full border border-[#d7d7b6]/30 bg-[#d7d7b6]/10 text-[10px] font-mono text-[#d7d7b6]">LAYER 3</div>
                <h3 className="text-xl text-white font-semibold mb-2 drop-shadow-[0_0_10px_rgba(215,215,182,0.35)]">Application Interfaces</h3>
                <p className="text-sm text-[#8A8D93] leading-relaxed">
                  Purpose-built client gateways where lenders earn yield through the Lender UI and agents access credit operations via the Agent UI.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
