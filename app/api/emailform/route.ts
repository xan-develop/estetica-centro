import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const enviromet = {
   SMTP_HOST: process.env.SMTP_HOST,
   SMTP_PORT: process.env.SMTP_PORT,
   SMTP_USER: process.env.SMTP_USER,
   SMTP_PASS: process.env.SMTP_PASS,
}
export const POST = async (req: Request) => {
  try {
    const { firstName, lastName, email, phone, message } = await req.json();

    const subject = "Nuevo mensaje de contacto - Lixchel Center";
    const htmlContent = `
      <!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Nuevo mensaje de contacto</title>
      </head>
      <body>
        <h1>Nuevo mensaje de contacto</h1>
        <p><strong>Nombre:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      </body>
      </html>
    `;

    const textContent = `
      Nuevo mensaje de contacto:
      
      Nombre: ${firstName} ${lastName}
      Email: ${email}
      Teléfono: ${phone}
      Mensaje: ${message}
    `;

    // Configurar el transporte SMTP
    const transporter = nodemailer.createTransport({
      host: enviromet.SMTP_HOST,
      port: Number(enviromet.SMTP_PORT),
      secure: true,
      auth: {
        user: enviromet.SMTP_USER,
        pass: enviromet.SMTP_PASS,
      },
    });

    // Enviar el correo al administrador
    try {
      await transporter.sendMail({
        from: `"Lixchel Centro Estetico" <info@lixchel.es>`,
        to: 'lixchel@chirmate.com', // Cambiar al correo del administrador
        subject: subject,
        text: textContent,
        html: htmlContent,
      });
      console.log("Correo enviado correctamente al administrador");
    } catch (sendError: any) {
      console.error("Error al enviar el email al administrador:", sendError);
      return NextResponse.json({ success: false, error: sendError.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: 'Formulario enviado correctamente' });

  } catch (error: any) {
    console.error("Error general:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
};
