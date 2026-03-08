interface Env {
  RESEND_API_KEY: string;
  SENDER_EMAIL: string;
  PERSONAL_EMAIL: string;
}

function validateEnv(): Env {
  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  const SENDER_EMAIL = process.env.SENDER_EMAIL;
  const PERSONAL_EMAIL = process.env.PERSONAL_EMAIL;

  if (!RESEND_API_KEY) throw new Error("Missing RESEND_API_KEY environment variable");
  if (!SENDER_EMAIL) throw new Error("Missing SENDER_EMAIL environment variable");
  if (!PERSONAL_EMAIL) throw new Error("Missing PERSONAL_EMAIL environment variable");

  return {
    RESEND_API_KEY,
    SENDER_EMAIL,
    PERSONAL_EMAIL,
  };
}

export const env = validateEnv();
