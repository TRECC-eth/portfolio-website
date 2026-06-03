import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const roles = [
  {
    title: "Telegram Community Moderator",
    type: "Community",
    summary: "Community team",
    applyPath: "/careers/telegram-community-moderator/apply",
  },
];

export default function CareersPage() {
  return (
    <div className="min-h-screen w-full bg-[#030303] text-white font-sans relative overflow-x-hidden">
      <Navbar isLightMode={false} />

      <main className="relative z-10 px-6 pb-20 pt-28">
        <section className="mx-auto flex w-full max-w-6xl flex-col gap-14">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="pt-8"
          >
            <span className="mb-6 inline-flex rounded-full border border-white/15 bg-white/[0.03] px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#8A8D93]">
              Careers
            </span>
            <h1 className="text-chrome font-['Montserrat'] text-5xl font-medium leading-tight tracking-tight sm:text-6xl md:text-7xl">
              Be part of TRECC
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap gap-3"
          >
            <span className="inline-flex rounded-full border border-white/20 bg-steel px-5 py-2 text-sm font-semibold text-black">
              View all
            </span>
            <span className="inline-flex rounded-full border border-white/15 bg-white/[0.03] px-5 py-2 text-sm font-semibold text-[#d7d7b6]">
              Community
            </span>
          </motion.div>

          <div className="grid grid-cols-1 gap-10">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="border-y border-white/10"
            >
              {roles.map((role) => (
                <article
                  key={role.title}
                  className="grid gap-6 py-9 md:grid-cols-[1fr_auto] md:items-center"
                >
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                      {role.title}
                    </h2>
                    <p className="mt-3 text-base text-[#8A8D93]">{role.summary}</p>
                    <div className="mt-6 flex flex-wrap gap-3">
                      <span className="inline-flex rounded-full border border-white/15 bg-white/[0.03] px-4 py-2 text-sm font-semibold text-[#c1c4ca]">
                        {role.type}
                      </span>
                      <span className="inline-flex rounded-full border border-white/15 bg-white/[0.03] px-4 py-2 text-sm font-semibold text-[#c1c4ca]">
                        Telegram
                      </span>
                    </div>
                  </div>

                  <Link
                    to={role.applyPath}
                    className="inline-flex items-center gap-2 justify-self-start text-2xl font-semibold tracking-tight text-white transition-colors hover:text-[#d7d7b6] md:justify-self-end"
                  >
                    Apply
                    <ArrowUpRight className="h-8 w-8" strokeWidth={2.2} />
                  </Link>
                </article>
              ))}
            </motion.div>
          </div>
        </section>
      </main>

      <div className="relative z-10 border-t border-white/5 px-6 py-5 text-center">
        <p className="text-xs text-[#50545a]">© {new Date().getFullYear()} TRECC Labs, Inc.</p>
      </div>
    </div>
  );
}
