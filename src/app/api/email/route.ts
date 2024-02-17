import { type NextRequest, NextResponse } from 'next/server';
import Mail from 'nodemailer/lib/mailer';

import { Resend } from 'resend';

export async function POST(request: NextRequest, res: NextResponse) {
  const resend = new Resend(process.env.RESEND_APIKEY);
  const { email: to, subject, message: text } = await request.json();

  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to,
      subject,
      text,
    });

    return NextResponse.json({ message: 'Email sent' });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
