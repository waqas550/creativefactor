import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();
    const name = body.name?.trim();
    const email = body.email?.trim();
    const subject = body.subject?.trim();
    const message = body.message?.trim();

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Sanitize inputs to prevent injection
    const sanitizedName = name.slice(0, 100);
    const sanitizedEmail = email.slice(0, 100);
    const sanitizedSubject = subject.slice(0, 200);
    const sanitizedMessage = message.slice(0, 5000);

    // Subject mapping for human-readable labels
    const subjectLabels: Record<string, string> = {
      general: 'Allgemeine Anfrage',
      booking: 'Buchung',
      events: 'Events',
      production: 'Produktion',
      other: 'Sonstiges',
    };

    const subjectLabel = subjectLabels[sanitizedSubject];

    if (!subjectLabel) {
      return NextResponse.json(
        { error: 'Invalid subject' },
        { status: 400 }
      );
    }

    // Create email content
    const emailContent = {
      to: 'info@creative-factor.com',
      from: sanitizedEmail,
      subject: `[Kontaktformular] ${subjectLabel} - ${sanitizedName}`,
      text: `Name: ${sanitizedName}\nE-Mail: ${sanitizedEmail}\nBetreff: ${subjectLabel}\n\nNachricht:\n${sanitizedMessage}`,
      html: `
        <h2>Neue Kontaktanfrage über das Website-Kontaktformular</h2>
        <p><strong>Name:</strong> ${escapeHtml(sanitizedName)}</p>
        <p><strong>E-Mail:</strong> ${escapeHtml(sanitizedEmail)}</p>
        <p><strong>Betreff:</strong> ${escapeHtml(subjectLabel)}</p>
        <hr>
        <p><strong>Nachricht:</strong></p>
        <p>${escapeHtml(sanitizedMessage).replace(/\n/g, '<br>')}</p>
      `,
    };

    const smtpPort = Number(process.env.SMTP_PORT || 465);
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.strato.de',
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: 'info@creative-factor.com',
      replyTo: sanitizedEmail,
      subject: emailContent.subject,
      text: emailContent.text,
      html: emailContent.html,
    });

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Helper function to escape HTML
function escapeHtml(text: string): string {
  const div = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' };
  return text.replace(/[&<>"']/g, (m) => div[m as keyof typeof div]);
}
