import { NextResponse } from 'next/server';
import { MailerSend, EmailParams, Sender, Recipient } from 'mailersend';

export async function POST(req: Request) {
  try {
    const { dataPerson, elementos } = await req.json();

    const toEmail = dataPerson.email;
    const toName = dataPerson.fullName;
    const subject = `Pedido ${dataPerson.orderId} - Xadow`;

    const mailerSend = new MailerSend({
      apiKey: process.env.MAILERSEND_API_KEY as string,
    });

    const sentFrom = new Sender('info@xadow.es', 'Alexander');
    const recipients = [new Recipient(toEmail, toName)];
    const personalization = [
      {
        email: toEmail,
        data: {
          email: toEmail,
          phone: dataPerson.phone,
          amount: dataPerson.amount,
          elements: elementos.map((elemento: { title: string }) => {
            return {
              name: elemento.title,
            };
          }),
          fullName: dataPerson.fullName,
          order_number: dataPerson.orderId,
          support_email: 'info@lixchel.es'
        },
      }
    ];
    const emailParams = new EmailParams()
      .setFrom(sentFrom)
      .setTo(recipients)
      .setSubject(subject)
      .setTemplateId('v69oxl5x5q2g785k')
      .setPersonalization(personalization);
    try {
      await mailerSend.email.send(emailParams);
      return NextResponse.json({ success: true, message: 'Email enviado' });
    } catch (sendError: any) {
      console.error("Error details:", sendError.body);
      return NextResponse.json({ success: false, error: sendError.message }, { status: 500 });
    }
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
