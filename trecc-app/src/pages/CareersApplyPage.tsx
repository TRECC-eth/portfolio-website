import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const ROLE_TITLE = "Telegram Community Moderator";
const CAREERS_WEBHOOK_URL = import.meta.env.VITE_CAREERS_WEBHOOK_URL;

const initialForm = {
  name: "",
  email: "",
  telegram: "",
  timezone: "",
  experience: "",
  links: "",
  note: "",
};

export default function CareersApplyPage() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setSending(true);
    setError(null);

    if (!CAREERS_WEBHOOK_URL) {
      setError("Applications are not configured yet. Please add the careers webhook URL.");
      setSending(false);
      return;
    }

    const application = {
      role: ROLE_TITLE,
      name: form.name,
      email: form.email,
      telegram: form.telegram,
      timezone: form.timezone,
      experience: form.experience,
      links: form.links || "Not provided",
      note: form.note || "Not provided",
    };

    try {
      await fetch(CAREERS_WEBHOOK_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(application),
      });
      setSubmitted(true);
      setForm(initialForm);
    } catch {
      setError("Failed to submit application. Please try again.");
    } finally {
      setSending(false);
    }
  };

  const inputClass =
    "w-full rounded-xl border border-white/10 bg-[#0A0A0A] px-4 py-3 text-sm text-white placeholder:text-[#50545a] transition-all duration-200 focus:border-white/25 focus:outline-none focus:ring-1 focus:ring-white/20";

  return (
    <div className="min-h-screen w-full bg-[#030303] text-white font-sans relative overflow-x-hidden">
      <Navbar isLightMode={false} />

      <main className="relative z-10 px-6 pb-20 pt-28">
        <section className="mx-auto flex w-full max-w-5xl flex-col gap-10">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="pt-8"
          >
            <Link
              to="/careers"
              className="mb-7 inline-flex text-sm font-medium text-[#8A8D93] transition-colors hover:text-white"
            >
              Back to careers
            </Link>
            <span className="mb-6 inline-flex rounded-full border border-white/15 bg-white/[0.03] px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#8A8D93]">
              Application
            </span>
            <h1 className="text-chrome font-['Montserrat'] text-4xl font-medium leading-tight tracking-tight sm:text-5xl md:text-6xl">
              {ROLE_TITLE}
            </h1>
          </motion.div>

          <motion.section
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="hyper-card overflow-hidden p-6 md:p-8"
          >
            {submitted ? (
              <div className="flex min-h-[380px] flex-col items-center justify-center gap-4 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5">
                  <svg className="h-6 w-6 text-[#0ECB81]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-xl font-semibold text-white">Application received</h2>
                <p className="max-w-md text-sm leading-relaxed text-[#8A8D93]">
                  Thanks for applying. Our team is reviewing your application and will get
                  back to you if there is a fit.
                </p>
                <Link
                  to="/careers"
                  className="mt-3 text-sm font-medium text-[#d7d7b6] transition-colors hover:text-white"
                >
                  Back to careers
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-xs font-medium uppercase tracking-widest text-[#8A8D93]">
                    Name
                  </label>
                  <input
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs font-medium uppercase tracking-widest text-[#8A8D93]">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs font-medium uppercase tracking-widest text-[#8A8D93]">
                    Telegram username
                  </label>
                  <input
                    name="telegram"
                    type="text"
                    required
                    value={form.telegram}
                    onChange={handleChange}
                    placeholder="@username"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs font-medium uppercase tracking-widest text-[#8A8D93]">
                    Location / timezone
                  </label>
                  <input
                    name="timezone"
                    type="text"
                    required
                    value={form.timezone}
                    onChange={handleChange}
                    placeholder="City or timezone"
                    className={inputClass}
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="mb-2 block text-xs font-medium uppercase tracking-widest text-[#8A8D93]">
                    Community experience
                  </label>
                  <textarea
                    name="experience"
                    required
                    rows={5}
                    value={form.experience}
                    onChange={handleChange}
                    placeholder="Tell us about Telegram, Discord, or community moderation work you have done."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="mb-2 block text-xs font-medium uppercase tracking-widest text-[#8A8D93]">
                    Relevant links
                  </label>
                  <input
                    name="links"
                    type="text"
                    value={form.links}
                    onChange={handleChange}
                    placeholder="X, LinkedIn, previous communities, or portfolio"
                    className={inputClass}
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="mb-2 block text-xs font-medium uppercase tracking-widest text-[#8A8D93]">
                    Anything else
                  </label>
                  <textarea
                    name="note"
                    rows={4}
                    value={form.note}
                    onChange={handleChange}
                    placeholder="Optional"
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <div className="md:col-span-2">
                  <button
                    type="submit"
                    disabled={sending}
                    className="inline-flex w-full items-center justify-center rounded-full border border-white/30 bg-steel px-6 py-3 text-sm font-semibold text-black transition-all duration-300 hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50 md:w-auto"
                  >
                    {sending ? "Submitting..." : "Submit application"}
                  </button>

                  {error && <p className="mt-4 text-sm text-red-400">{error}</p>}
                </div>
              </form>
            )}
          </motion.section>
        </section>
      </main>
    </div>
  );
}
