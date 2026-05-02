const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

export interface WaitlistSignupPayload {
  name: string;
  email: string;
  agreed: boolean;
  source: "footer" | "modal";
}

export async function saveWaitlistSignup(payload: WaitlistSignupPayload) {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    throw new Error("Supabase environment variables are missing.");
  }

  const response = await fetch(
    `${SUPABASE_URL}/rest/v1/waitlist_signups?on_conflict=email`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: SUPABASE_ANON_KEY,
        Prefer: "resolution=merge-duplicates,return=minimal",
      },
      body: JSON.stringify([
        {
          name: payload.name.trim(),
          email: payload.email.trim().toLowerCase(),
          agreed_to_updates: payload.agreed,
          source: payload.source,
        },
      ]),
    }
  );

  if (!response.ok) {
    const errorText = await response.text();
    let message = errorText || "Failed to save waitlist signup.";

    try {
      const parsed = JSON.parse(errorText);
      message = parsed.message || parsed.error || parsed.hint || message;
    } catch {
      // Keep the raw response text when the error isn't JSON.
    }

    throw new Error(message);
  }
}
