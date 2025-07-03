// lib/mailer.ts
import { getResetPasswordTemplate } from "@/utils/emailTemplate";
import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: "gmail", // or 'mailgun', 'sendinblue', etc.
  auth: {
    user: process.env.EMAIL_USERNAME!,
    pass: process.env.EMAIL_PASSWORD!,
  },
});

export async function sendVerificationEmail(to: string, code: string) {
  await transporter.sendMail({
    from: `"TopAiglons" <${process.env.EMAIL_USERNAME}>`,
    to,
    subject: "Your verification code",
    html: `
      <h2>Email Verification</h2>
      <p>Your OTP verification code is:</p>
      <h3>${code}</h3>
      <p>This code will expire in 24 hours.</p>
    `,
  });
}

export async function sendPasswordResetEmail(
  to: string,
  name: string,
  resetUrl: string
) {
  const html = getResetPasswordTemplate(name, resetUrl);

  await transporter.sendMail({
    from: `"TopAiglons" <${process.env.EMAIL_USERNAME}>`,
    to,
    subject: "Reset Your Password",
    html,
  });
}
