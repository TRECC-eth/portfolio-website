import { useState } from "react";
import emailjs from "@emailjs/browser";
import { saveWaitlistSignup } from "../lib/waitlist";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_WAITLIST_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_WAITLIST_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

interface WaitlistFormProps {
  variant?: "footer" | "modal";
}

export default function WaitlistForm({ variant = "footer" }: WaitlistFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const isModal = variant === "modal";

  const handleJoin = async () => {
    if (!name || !email || !agreed) return;

    setStatus("sending");

    try {
      await saveWaitlistSignup({
        name,
        email,
        agreed,
        source: variant,
      });

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_WAITLIST_TEMPLATE_ID,
        {
          to_email: email,
          to_name: name,
          name,
        },
        EMAILJS_PUBLIC_KEY
      );

      setStatus("success");
      setName("");
      setEmail("");
      setAgreed(false);
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className={`flex flex-col gap-2.5 md:gap-3 w-full ${isModal ? "" : "md:w-auto"}`}>
      <div className={`flex flex-col gap-2 w-full ${isModal ? "" : "md:w-[420px]"}`}>
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => {
            setStatus("idle");
            setName(e.target.value);
          }}
          disabled={status === "sending" || status === "success"}
          className={`w-full px-4 py-3 rounded-xl border text-sm transition-all placeholder:text-gray-400 disabled:opacity-60 focus:outline-none ${
            isModal
              ? "border-white/15 bg-white/10 text-white focus:border-[#d7d7b6]/40 focus:ring-2 focus:ring-[#d7d7b6]/15"
              : "border-gray-200 bg-gray-50 text-gray-900 focus:border-gray-400 focus:ring-2 focus:ring-gray-200"
          }`}
        />
        <div className="flex flex-col sm:flex-row gap-2 w-full">
          <input
            type="email"
            placeholder="example@gmail.com"
            value={email}
            onChange={(e) => {
              setStatus("idle");
              setEmail(e.target.value);
            }}
            disabled={status === "sending" || status === "success"}
            className={`flex-1 px-4 py-3 rounded-xl border text-sm transition-all placeholder:text-gray-400 disabled:opacity-60 focus:outline-none ${
              isModal
                ? "border-white/15 bg-white/10 text-white focus:border-[#d7d7b6]/40 focus:ring-2 focus:ring-[#d7d7b6]/15"
                : "border-gray-200 bg-gray-50 text-gray-900 focus:border-gray-400 focus:ring-2 focus:ring-gray-200"
            }`}
          />
          <button
            type="button"
            onClick={handleJoin}
            disabled={!name || !email || !agreed || status === "sending" || status === "success"}
            className={`w-full sm:w-auto px-6 py-3 text-sm font-medium rounded-xl transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed ${
              isModal
                ? "bg-[#d7d7b6] text-black hover:brightness-105 border border-[#d7d7b6]/80"
                : "bg-white text-gray-900 border border-gray-200 hover:bg-gray-50"
            }`}
          >
            {status === "sending" ? "Joining..." : status === "success" ? "Joined!" : "Join"}
          </button>
        </div>
      </div>

      <label className="flex items-start gap-2 cursor-pointer group">
        <input
          type="checkbox"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
          disabled={status === "sending" || status === "success"}
          className={`w-4 h-4 rounded cursor-pointer mt-0.5 shrink-0 ${
            isModal
              ? "border-white/30 bg-transparent text-[#d7d7b6] focus:ring-[#d7d7b6]"
              : "border-gray-300 text-gray-900 focus:ring-gray-900"
          }`}
        />
        <span
          className={`text-[11px] md:text-xs transition-colors ${
            isModal
              ? "text-white/65 group-hover:text-white/85"
              : "text-gray-500 group-hover:text-gray-700"
          }`}
        >
          I agree to receive news and updates from TRECC and understand my waitlist details will be stored.
        </span>
      </label>

      {status === "success" && (
        <p className={`text-[11px] md:text-xs font-medium ${isModal ? "text-[#d7d7b6]" : "text-green-600"}`}>
          Thanks for joining! Check your inbox for a confirmation.
        </p>
      )}

      {status === "error" && (
        <p className={`text-[11px] md:text-xs font-medium ${isModal ? "text-red-300" : "text-red-500"}`}>
          Something went wrong. Please try again.
        </p>
      )}
    </div>
  );
}
