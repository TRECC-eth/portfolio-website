import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import WaitlistForm from "./WaitlistForm";

interface WaitlistModalProps {
  open: boolean;
  onClose: () => void;
}

export default function WaitlistModal({ open, onClose }: WaitlistModalProps) {
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-8"
        >
          <button
            type="button"
            aria-label="Close waitlist modal"
            onClick={onClose}
            className="absolute inset-0 bg-black/65 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-xl overflow-hidden rounded-[2rem] border border-white/15 bg-white/8 p-6 text-white shadow-[0_30px_100px_rgba(0,0,0,0.55)] backdrop-blur-2xl md:p-8"
          >
            <button
              type="button"
              aria-label="Close"
              onClick={onClose}
              className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
            >
              ×
            </button>
            <div className="mb-6 pr-12">
              <h2 className="text-2xl font-medium tracking-tight text-white md:text-4xl">
                Application is in internal beta testing
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-white/70 md:text-base">
                To join the beta waitlist, add your name and email below, then opt in to receive updates.
              </p>
            </div>

            <WaitlistForm variant="modal" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
