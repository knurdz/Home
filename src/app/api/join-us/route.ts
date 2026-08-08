import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const whatsappPattern = /^07\d{8}$/;

type SubmissionData = {
  name: string;
  email: string;
  whatsapp: string;
  about: string;
  why: string;
};

type ValidationResult =
  | { success: false; error: string }
  | { success: true; data: SubmissionData };

function validateSubmission(body: Record<string, unknown>): ValidationResult {
  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const whatsapp = typeof body.whatsapp === "string" ? body.whatsapp.trim() : "";
  const about = typeof body.about === "string" ? body.about.trim() : "";
  const why = typeof body.why === "string" ? body.why.trim() : "";

  if (!name || !email || !whatsapp || !about || !why) {
    return {
      success: false,
      error: "Please fill in every field before submitting.",
    };
  }

  if (!emailPattern.test(email)) {
    return {
      success: false,
      error: "Please enter a valid email address.",
    };
  }

  if (!whatsappPattern.test(whatsapp)) {
    return {
      success: false,
      error: "WhatsApp number must start with 07 and contain exactly 10 digits.",
    };
  }

  return {
    success: true,
    data: { name, email, whatsapp, about, why },
  };
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validation = validateSubmission(body);

    if (!validation.success) {
      return NextResponse.json({ error: validation.error }, { status: 400 });
    }

    const { name, email, whatsapp, about, why } = validation.data;

    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.log("SMTP not fully configured, skipping email.");
      return NextResponse.json({
        success: true,
        warning: "Email notification skipped (SMTP not configured).",
      });
    }

    try {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT ?? 587),
        secure: process.env.SMTP_SECURE === "true",
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      await transporter.sendMail({
        from: `"Knurdz Join Us" <${process.env.SMTP_USER}>`,
        to: process.env.EMAIL_TO || process.env.SMTP_USER,
        replyTo: email,
        subject: `[Knurdz Join Request] ${name} wants to join`,
        html: `
          <div style="font-family:monospace;background:#000;color:#fff;padding:32px;border-radius:8px;max-width:600px;">
            <h2 style="color:#22c55e;margin:0 0 24px;">New Join Us Submission</h2>
            <table style="width:100%;border-collapse:collapse;">
              <tr>
                <td style="padding:8px 0;color:#9ca3af;width:120px;vertical-align:top;">Name</td>
                <td style="padding:8px 0;">${name}</td>
              </tr>
              <tr>
                <td style="padding:8px 0;color:#9ca3af;vertical-align:top;">Email</td>
                <td style="padding:8px 0;"><a href="mailto:${email}" style="color:#22c55e;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding:8px 0;color:#9ca3af;vertical-align:top;">WhatsApp</td>
                <td style="padding:8px 0;">${whatsapp}</td>
              </tr>
            </table>
            
            <hr style="border:none;border-top:1px solid #333;margin:24px 0;" />
            
            <p style="color:#9ca3af;margin:0 0 8px;font-size:12px;">TELL US ABOUT YOURSELF</p>
            <p style="color:#e5e7eb;line-height:1.8;white-space:pre-wrap;margin:0 0 24px;">${about}</p>
            
            <p style="color:#9ca3af;margin:0 0 8px;font-size:12px;">WHY DO YOU WANT TO JOIN KNURDZ?</p>
            <p style="color:#e5e7eb;line-height:1.8;white-space:pre-wrap;margin:0;">${why}</p>
          </div>
        `,
      });
      console.log("Email sent successfully");
    } catch (emailErr: unknown) {
      const message =
        emailErr instanceof Error ? emailErr.message : String(emailErr);
      console.error("Email sending error:", message);
      return NextResponse.json({
        success: true,
        warning: "Email notification failed.",
      });
    }

    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error("Join Us API critical error:", message);
    return NextResponse.json(
      { error: `Internal server error: ${message}` },
      { status: 500 },
    );
  }
}
