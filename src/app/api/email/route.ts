import { type NextRequest } from 'next/server';

import { Resend } from 'resend';

export async function POST(request: NextRequest) {
  const resend = new Resend(process.env.RESEND_APIKEY);
  const { email: to, subject, message: text } = await request.json();

  try {
    await resend.emails.send({
      from: 'celine@refugedusuffet.fr',
      to,
      subject,
      text,
    });

    return Response.json({ message: 'Email sent' });
  } catch (err) {
    return Response.json({ error: err }, { status: 500 });
  }
}
