import { useState } from "react";
import { motion } from "framer-motion";
import { FaTelegramPlane, FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import emailjs from "@emailjs/browser";
import Navbar from "../components/Navbar";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError(null);
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject || "Contact from TRECC website",
          message: form.message,
        },
        EMAILJS_PUBLIC_KEY
      );
      setSubmitted(true);
    } catch (err) {
      setError("Failed to send message. Please try again.");
    } finally {
      setSending(false);
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl bg-[#0A0A0A] border border-white/10 text-white text-sm placeholder:text-[#50545a] focus:outline-none focus:ring-1 focus:ring-white/20 focus:border-white/25 transition-all duration-200";

  return (
    <div className="min-h-screen w-full bg-[#030303] text-white font-sans relative overflow-x-hidden">
      <Navbar isLightMode={false} />

      <main className="relative z-10 min-h-screen flex items-center justify-center px-6 pt-28 pb-20">
        <div className="w-full max-w-5xl">

          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-16"
          >
            <h1 className="text-chrome font-['Montserrat'] font-medium tracking-tight leading-tight mb-5 text-4xl sm:text-5xl md:text-6xl">
              Get In Touch
            </h1>
            <p className="text-[#8A8D93] text-lg max-w-xl mx-auto leading-relaxed font-light">
              Have a question about the protocol, a partnership idea, or just want to say hello?
              We'd love to hear from you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

            {/* Left — Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-8"
            >
              {/* Direct email */}
              <div className="hyper-card p-6 flex flex-col gap-3">
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                    <MdEmail className="w-4 h-4 text-[#d7d7b6]" />
                  </div>
                  <span className="text-sm font-semibold text-white/80 uppercase tracking-widest">Email</span>
                </div>
                <a
                  href="mailto:trecclabs@gmail.com"
                  className="text-[#d7d7b6] text-sm hover:text-white transition-colors duration-200"
                >
                  trecclabs@gmail.com
                </a>
                <p className="text-xs text-[#606468] leading-relaxed">
                  For protocol inquiries, partnerships, and general questions. We typically respond within 24 hours.
                </p>
              </div>

              {/* Community */}
              <div className="hyper-card p-6 flex flex-col gap-4">
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                    <FaTelegramPlane className="w-4 h-4 text-[#d7d7b6]" />
                  </div>
                  <span className="text-sm font-semibold text-white/80 uppercase tracking-widest">Community</span>
                </div>
                <p className="text-xs text-[#606468] leading-relaxed">
                  Join the conversation, follow updates, and connect with the TRECC community across our channels.
                </p>
                <div className="flex items-center gap-3 mt-1">
                  <a
                    href="https://x.com/treccfinance"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/5 border border-white/10 rounded-md hover:bg-white/10 hover:border-white/20 text-[#8A8D93] hover:text-white transition-all"
                  >
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                  <a
                    href="https://youtube.com/@trecc.finance"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/5 border border-white/10 rounded-md hover:bg-white/10 hover:border-white/20 text-[#8A8D93] hover:text-white transition-all"
                  >
                    <FaYoutube className="w-4 h-4" />
                  </a>
                  <a
                    href="mailto:trecclabs@gmail.com"
                    className="p-2 bg-white/5 border border-white/10 rounded-md hover:bg-white/10 hover:border-white/20 text-[#8A8D93] hover:text-white transition-all"
                  >
                    <MdEmail className="w-4 h-4" />
                  </a>
                  <a
                    href="#"
                    className="p-2 bg-white/5 border border-white/10 rounded-md hover:bg-white/10 hover:border-white/20 text-[#8A8D93] hover:text-white transition-all"
                  >
                    <FaTelegramPlane className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Docs */}
              <div className="hyper-card p-6 flex flex-col gap-3">
                <span className="text-sm font-semibold text-white/80 uppercase tracking-widest mb-1">Documentation</span>
                <p className="text-xs text-[#606468] leading-relaxed">
                  Find integration guides, protocol specs, and technical references in our docs.
                </p>
                <a
                  href="https://docs.trecc.finance"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-[#d7d7b6] hover:text-white transition-colors duration-200 mt-1 group"
                >
                  docs.trecc.finance
                  <svg className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </a>
              </div>
            </motion.div>

            {/* Right — Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="hyper-card p-8">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col items-center justify-center py-12 gap-4 text-center"
                  >
                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-2">
                      <svg className="w-6 h-6 text-[#0ECB81]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-white font-semibold text-lg">Message sent</h3>
                    <p className="text-[#8A8D93] text-sm max-w-xs leading-relaxed">
                      We'll get back to you as soon as possible.
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                      className="mt-4 text-xs text-[#606468] hover:text-white transition-colors underline underline-offset-2"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div>
                      <label className="block text-xs font-medium text-[#8A8D93] uppercase tracking-widest mb-2">Name</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#8A8D93] uppercase tracking-widest mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#8A8D93] uppercase tracking-widest mb-2">Subject</label>
                      <input
                        type="text"
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        placeholder="What's this about?"
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#8A8D93] uppercase tracking-widest mb-2">Message</label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell us what you're working on..."
                        className={`${inputClass} resize-none`}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={sending}
                      className="w-full px-6 py-3 rounded-full text-sm font-semibold bg-steel text-black hover:brightness-110 border border-white/30 transition-all duration-300 mt-1 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {sending ? "Sending..." : "Send Message"}
                    </button>

                    {error && (
                      <p className="text-center text-xs text-red-400">{error}</p>
                    )}
                  </form>
                )}
              </div>
            </motion.div>

          </div>
        </div>
      </main>

      {/* Minimal footer bar */}
      <div className="relative z-10 border-t border-white/5 py-5 px-6 text-center">
        <p className="text-xs text-[#50545a]">© {new Date().getFullYear()} TRECC Labs, Inc.</p>
      </div>
    </div>
  );
}
