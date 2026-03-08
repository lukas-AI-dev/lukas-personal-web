"use server";

import { Resend } from "resend";

interface SendEmailResult {
  success: boolean;
  error?: string;
}

/**
 * Server Action that sends a contact form email via the Resend API.
 */
export async function sendEmail(formData: FormData): Promise<SendEmailResult> {
  const name = (formData.get("name") as string)?.trim();
  const email = (formData.get("email") as string)?.trim();
  const message = (formData.get("message") as string)?.trim();

  // Basic validation
  if (!name || !email || !message) {
    return { success: false, error: "All fields are required." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const senderEmail = process.env.SENDER_EMAIL;
  const personalEmail = process.env.PERSONAL_EMAIL;

  if (!apiKey || !senderEmail || !personalEmail) {
    console.error("Missing required environment variables for email sending.");
    return { success: false, error: "Server configuration error." };
  }

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from: senderEmail,
      to: personalEmail,
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
      return { success: false, error: "Failed to send email." };
    }

    return { success: true };
  } catch (err) {
    console.error("Unexpected error sending email:", err);
    return { success: false, error: "An unexpected error occurred." };
  }
}
