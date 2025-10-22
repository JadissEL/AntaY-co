import { RequestHandler } from "express";
import sgMail from "@sendgrid/mail";
import { z } from "zod";
import { ContactRequest, ContactResponse } from "@shared/api";

const contactSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export const handleContact: RequestHandler = async (req, res) => {
  try {
    const validation = contactSchema.safeParse(req.body);

    if (!validation.success) {
      return res.status(400).json({
        success: false,
        error: "Validation failed",
        details: validation.error.flatten(),
      });
    }

    const { fullName, email, subject, message } = validation.data;

    // Initialize SendGrid
    const apiKey = process.env.SENDGRID_API_KEY;
    if (!apiKey) {
      console.error("SENDGRID_API_KEY not configured");
      return res.status(500).json({
        success: false,
        error: "Email service not configured",
      });
    }

    sgMail.setApiKey(apiKey);

    // Create formatted email template
    const emailBody = `New Contact Form Submission:
--------------------------------
Name: ${fullName}
Email: ${email}
Subject: ${subject}
Message:
${message}
--------------------------------
Received via: ANTAY-CO Holding (https://antay-co.com)
Timestamp: ${new Date().toLocaleString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      timeZoneName: "short",
    })}`;

    // Send email to recipient
    await sgMail.send({
      to: "antayco.info@gmail.com",
      from: "noreply@antay-co.com",
      subject: `New Contact Form: ${subject}`,
      text: emailBody,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #f8f9fa; padding: 20px; border-left: 4px solid #d4af37;">
            <h2 style="color: #333; margin-top: 0;">New Contact Form Submission</h2>
            <div style="background-color: #ffffff; padding: 20px; border-radius: 4px;">
              <p><strong>Name:</strong> ${escapeHtml(fullName)}</p>
              <p><strong>Email:</strong> ${escapeHtml(email)}</p>
              <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
              <p><strong>Message:</strong></p>
              <p style="white-space: pre-wrap; background-color: #f8f9fa; padding: 15px; border-radius: 4px;">${escapeHtml(message)}</p>
            </div>
            <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e0e0e0; font-size: 12px; color: #666;">
              <p><strong>Received via:</strong> ANTAY-CO Holding (https://antay-co.com)</p>
              <p><strong>Timestamp:</strong> ${new Date().toLocaleString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                timeZoneName: "short",
              })}</p>
            </div>
          </div>
        </div>
      `,
    });

    // Send confirmation email to user
    await sgMail.send({
      to: email,
      from: "noreply@antay-co.com",
      subject: "We received your message - ANTAY-CO Holding",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #f8f9fa; padding: 20px;">
            <h2 style="color: #333; margin-top: 0;">Thank you for contacting us</h2>
            <p style="color: #666; line-height: 1.6;">
              Dear ${escapeHtml(fullName)},<br><br>
              We have received your message and appreciate you taking the time to reach out to ANTAY-CO Holding. 
              Our team will review your inquiry and get back to you as soon as possible.
            </p>
            <div style="background-color: #ffffff; padding: 15px; border-left: 4px solid #d4af37; margin: 20px 0;">
              <p style="margin: 0; color: #666;"><strong>Your Subject:</strong> ${escapeHtml(subject)}</p>
            </div>
            <p style="color: #666; line-height: 1.6;">
              Best regards,<br>
              <strong>ANTAY-CO Holding Team</strong>
            </p>
          </div>
        </div>
      `,
    });

    const response: ContactResponse = {
      success: true,
      message: "Your message has been sent successfully. We will get back to you soon.",
    };

    res.status(200).json(response);
  } catch (error) {
    console.error("Contact form error:", error);
    const response: ContactResponse = {
      success: false,
      error: "Failed to send message. Please try again later.",
    };
    res.status(500).json(response);
  }
};

// Helper function to escape HTML special characters
function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (char) => map[char]);
}
