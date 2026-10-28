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

  let response: Response;

  try {
    // Plain insert so the table only needs an anon INSERT policy (no public read/update access).
    response = await fetch(`${SUPABASE_URL}/rest/v1/waitlist_signups`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: SUPABASE_ANON_KEY,
        Prefer: "return=minimal",
      },
      body: JSON.stringify({
        name: payload.name.trim(),
        email: payload.email.trim().toLowerCase(),
        agreed_to_updates: payload.agreed,
        source: payload.source,
      }),
    });
  } catch {
    throw new Error("We couldn't reach the waitlist server. Please try again in a moment.");
  }

  if (response.ok) return;

  const errorText = await response.text();
  let message = errorText || "Failed to save waitlist signup.";

  try {
    const parsed = JSON.parse(errorText);

    // Unique violation on email: this person is already on the waitlist.
    if (parsed.code === "23505") return;

    message = parsed.message || parsed.error || parsed.hint || message;
  } catch {
    // Keep the raw response text when the error isn't JSON.
  }

  throw new Error(message);
}
