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
  const addressValue = formData.get("address"); // Honeypot field

  const name = typeof nameValue === "string" ? nameValue.trim() : "";
  const email = typeof emailValue === "string" ? emailValue.trim() : "";
  const message = typeof messageValue === "string" ? messageValue.trim() : "";
  const address = typeof addressValue === "string" ? addressValue.trim() : "";

  // 1. Honeypot check
  if (address) {
    // If completed, pretend it was successful to trick the bot
    console.log("Honeypot aktivován v kontaktním formuláři");
    return { success: true };
  }

  // 2. Length validation and required fields
  if (!name || name.length > 100) {
    return { success: false, error: "Jméno je buď prázdné nebo příliš dlouhé (max 100 znaků)." };
  }

  // 3. Email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || email.length > 100 || !emailRegex.test(email)) {
    return { success: false, error: "Zadejte platnou emailovou adresu (max 100 znaků)." };
  }

  if (!message || message.length > 5000) {
    return { success: false, error: "Zpráva je buď prázdná nebo příliš dlouhá (max 5000 znaků)." };
  }

  // 4. HTML Escaping mapping function
  const escapeHTML = (str: string) => {
    return str.replace(/[&<>'"]/g, 
      (tag) => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;'
      }[tag] || tag)
    );
  };

  const safeName = escapeHTML(name);
  const safeMessage = escapeHTML(message);

  try {
    const resend = new Resend(env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: env.SENDER_EMAIL,
      to: env.PERSONAL_EMAIL,
      replyTo: email,
      subject: `Nová zpráva od ${safeName}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1a1a2e;">Nová zpráva z kontaktního formuláře</h2>
          <hr style="border: none; border-top: 2px solid #6366f1; margin: 16px 0;" />
          <p><strong>Jméno:</strong> ${safeName}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Zpráva:</strong></p>
          <div style="background: #f8fafc; border-radius: 8px; padding: 16px; white-space: pre-wrap;">${safeMessage}</div>
        </div>
      `,
    });

    if (error) {
      console.error("Chyba Resend API:", error);
      return { success: false, error: "Odeslání selhalo kvůli chybě serveru." };
    }

    return { success: true };
  } catch (err) {
    console.error("Nečekaná chyba při odesílání emailu:", err);
    return { success: false, error: "Došlo k nečekané chybě. Zkuste to prosím znovu." };
  }
}
