import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { createAdminClient } from "@/lib/appwrite";
import { ID } from "node-appwrite";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, whatsapp, about, why } = body;

    // Basic validation
    if (!name || !email || !whatsapp || !about || !why) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    // 1. Send to Appwrite Database
    try {
      const { databases } = createAdminClient();
      console.log("Attempting to save to Appwrite:", { 
        db: process.env.APPWRITE_DATABASE_ID, 
        coll: process.env.APPWRITE_COLLECTION_ID 
      });
      
      await databases.createDocument(
        process.env.APPWRITE_DATABASE_ID!,
        process.env.APPWRITE_COLLECTION_ID!,
        ID.unique(),
        {
          name,
          email,
          whatsapp,
          about,
          why,
          submittedAt: new Date().toISOString(),
        }
      );
      console.log("Appwrite storage successful");
    } catch (appwriteErr: any) {
      console.error("Appwrite storage error:", appwriteErr.message || appwriteErr);
      // Optional: return error if DB is critical
      // return NextResponse.json({ error: `Database error: ${appwriteErr.message}` }, { status: 500 });
    }

    // 2. Create transporter using your SMTP credentials
    // Check if SMTP is configured
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.log("SMTP not fully configured, skipping email.");
      return NextResponse.json({ success: true, warning: "Saved to database, but email notification skipped (SMTP not configured)." });
    }

    try {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT ?? 587),
        secure: process.env.SMTP_SECURE === "true", // true for port 465, false for 587
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
    } catch (emailErr: any) {
      console.error("Email sending error:", emailErr.message || emailErr);
      // We still return success: true because the data is in Appwrite
      return NextResponse.json({ success: true, warning: "Saved to database, but email notification failed." });
    }

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error("Join Us API critical error:", err.message || err);
    return NextResponse.json(
      { error: `Internal server error: ${err.message || "Unknown error"}` },
      { status: 500 }
    );
  }
}
