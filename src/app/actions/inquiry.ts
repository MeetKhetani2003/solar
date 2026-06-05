"use server";

import nodemailer from "nodemailer";

export interface InquiryResult {
  success: boolean;
  message?: string;
  error?: string;
}

export async function submitInquiryAction(prevState: unknown, formData: FormData): Promise<InquiryResult> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const company = formData.get("company") as string;
  const product = formData.get("product") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !phone || !product || !message) {
    return { success: false, error: "Please fill out all required fields." };
  }

  try {
    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;

    if (!emailUser || !emailPass) {
      return { success: false, error: "SMTP settings not configured on server." };
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    const mailOptions = {
      from: emailUser,
      to: emailUser,
      replyTo: email,
      subject: `New Lead Inquiry: ${product} - ${company || name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; color: #333; line-height: 1.6; border: 1px solid #ea580c; border-radius: 12px; padding: 24px;">
          <h2 style="color: #ea580c; border-bottom: 2px solid #ea580c; padding-bottom: 8px; margin-top: 0;">New Lead Inquiry</h2>
          <p>You have received a new product inquiry lead from <strong>Radha Solar</strong>.</p>
          
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background-color: #f9fafb;">
              <th style="padding: 10px; border: 1px solid #e5e7eb; text-align: left; width: 30%;">Product</th>
              <td style="padding: 10px; border: 1px solid #e5e7eb; font-weight: bold;">${product}</td>
            </tr>
            <tr>
              <th style="padding: 10px; border: 1px solid #e5e7eb; text-align: left;">Name</th>
              <td style="padding: 10px; border: 1px solid #e5e7eb;">${name}</td>
            </tr>
            <tr style="background-color: #f9fafb;">
              <th style="padding: 10px; border: 1px solid #e5e7eb; text-align: left;">Email</th>
              <td style="padding: 10px; border: 1px solid #e5e7eb;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <th style="padding: 10px; border: 1px solid #e5e7eb; text-align: left;">Phone</th>
              <td style="padding: 10px; border: 1px solid #e5e7eb;"><a href="tel:${phone}">${phone}</a></td>
            </tr>
            <tr style="background-color: #f9fafb;">
              <th style="padding: 10px; border: 1px solid #e5e7eb; text-align: left;">Company</th>
              <td style="padding: 10px; border: 1px solid #e5e7eb;">${company || "Not provided"}</td>
            </tr>
            <tr>
              <th style="padding: 10px; border: 1px solid #e5e7eb; text-align: left; vertical-align: top;">Message</th>
              <td style="padding: 10px; border: 1px solid #e5e7eb; white-space: pre-wrap;">${message}</td>
            </tr>
          </table>
          
          <p style="font-size: 12px; color: #6b7280; border-top: 1px solid #e5e7eb; padding-top: 10px; margin-top: 30px;">
            This email was sent dynamically via the lead system at Radha Solar.
          </p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    return { success: true, message: "Your inquiry has been successfully sent! We will contact you shortly." };
  } catch (err: unknown) {
    console.error("Inquiry Server Action Error:", err);
    return { success: false, error: err instanceof Error ? err.message : "An error occurred while sending your inquiry." };
  }
}
