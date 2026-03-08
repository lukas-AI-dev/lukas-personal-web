"use server";

import { Resend } from "resend";
import { env } from "@/lib/env";

interface SendEmailResult {
  success: boolean;
  error?: string;
}

/**
 * Server Action that sends a contact form email via the Resend API.
 */
export async function sendEmail(formData: FormData): Promise<SendEmailResult> {
  const nameValue = formData.get("name");
  const emailValue = formData.get("email");
  const messageValue = formData.get("message");

  const name = typeof nameValue === "string" ? nameValue.trim() : "";
  const email = typeof emailValue === "string" ? emailValue.trim() : "";
  const message = typeof messageValue === "string" ? messageValue.trim() : "";

  // Basic validation
  if (!name || !email || !message) {
    return { success: false, error: "Vyplňte prosím všechna pole." };
  }

  try {
    const resend = new Resend(env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: env.SENDER_EMAIL,
      to: env.PERSONAL_EMAIL,
      replyTo: email,
      subject: `Nová zpráva od ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1a1a2e;">Nová zpráva z kontaktního formuláře</h2>
          <hr style="border: none; border-top: 2px solid #6366f1; margin: 16px 0;" />
          <p><strong>Jméno:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Zpráva:</strong></p>
          <div style="background: #f8fafc; border-radius: 8px; padding: 16px; white-space: pre-wrap;">${message}</div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend API error:", error);
      return { success: false, error: "Odeslání selhalo kvůli chybě serveru." };
    }

    return { success: true };
  } catch (err) {
    console.error("Unexpected error sending email:", err);
    return { success: false, error: "Došlo k nečekané chybě. Zkuste to prosím znovu." };
  }
}
