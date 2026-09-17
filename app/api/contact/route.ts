import { NextRequest, NextResponse } from 'next/server';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();
    const { name, email, subject, message } = body;

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
    const sanitizedName = name.trim().slice(0, 100);
    const sanitizedEmail = email.trim().slice(0, 100);
    const sanitizedSubject = subject.trim().slice(0, 200);
    const sanitizedMessage = message.trim().slice(0, 5000);

    // Subject mapping for human-readable labels
    const subjectLabels: Record<string, string> = {
      general: 'Allgemeine Anfrage',
      booking: 'Buchung',
      events: 'Events',
      production: 'Produktion',
      other: 'Sonstiges',
    };

    const subjectLabel = subjectLabels[sanitizedSubject] || sanitizedSubject;

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

    // Here you would integrate with your email service provider
    // Options: Resend, SendGrid, AWS SES, Nodemailer, etc.
    // For now, we'll log the email content and return success
    // In production, replace this with actual email sending logic

    console.log('Email to be sent:', emailContent);

    // Example integration with Resend (recommended for Next.js):
    // const { Resend } = require('resend');
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'Kontaktformular <noreply@creative-factor.com>',
    //   to: 'info@creative-factor.com',
    //   subject: emailContent.subject,
    //   html: emailContent.html,
    //   reply_to: sanitizedEmail,
    // });

    // Example integration with SendGrid:
    // const sgMail = require('@sendgrid/mail');
    // sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    // await sgMail.send({
    //   to: 'info@creative-factor.com',
    //   from: 'noreply@creative-factor.com',
    //   subject: emailContent.subject,
    //   html: emailContent.html,
    //   replyTo: sanitizedEmail,
    // });

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
