import { NextResponse } from 'next/server';
import { MailerSend, EmailParams, Sender, Recipient } from 'mailersend';

export async function POST(req: Request) {
  try {
    const { dataPerson, elementos } = await req.json();

    const toEmail = dataPerson.email;
    const toName = dataPerson.fullName;
    const subject = `¡Pedido ${dataPerson.orderId} Confirmado! - Lixchel Center`;

    // Crear el HTML para el correo electrónico
    const htmlContent = `
      <!DOCTYPE html>
      <html lang="es">
      <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Confirmación de Pedido</title>
      <style>
        body {
        font-family: Georgia, Cambria, 'Times New Roman', Times, serif;
        line-height: 1.6;
        color: #333;
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
        }
        .header {
        background-color: #f8b6c1;
        color: white;
        padding: 20px;
        text-align: center;
        border-radius: 8px 8px 0 0;
        }
        .content {
        background-color: #ffffff;
        padding: 20px;
        border: 1px solid #eaeaea;
        }
        .footer {
        background-color: #fdf2f4;
        padding: 15px;
        text-align: center;
        font-size: 12px;
        color: #666;
        border-radius: 0 0 8px 8px;
        }
        table {
        width: 100%;
        border-collapse: collapse;
        margin: 20px 0;
        }
        th, td {
        padding: 10px;
        border-bottom: 1px solid #eaeaea;
        text-align: left;
        }
        th {
        background-color: #fdf2f4;
        }
        .total-row {
        font-weight: bold;
        }
        .logo {
        max-width: 150px;
        height: auto;
        margin: 0 auto;
        display: block;
        }
        .button {
        display: inline-block;
        background-color: #f8b6c1;
        color: #ffffff;
        padding: 10px 20px;
        text-decoration: none;
        border-radius: 5px;
        margin-top: 10px;
        transition: background-color 0.3s ease;
        }
        .button:hover {
        background-color: #e8a6b1;
        }
        h1, h2, h3 {
        font-family: Georgia, Cambria, 'Times New Roman', Times, serif;
        color: #f8b6c1;
        }
        p {
        margin-bottom: 1rem;
        }
        a {
        color: #f8b6c1;
        text-decoration: none;
        }
        a:hover {
        text-decoration: underline;
        }
      </style>
      </head>
      <body>
      <div class="header">
        <img src="https://lixchel.vercel.app/logolixchel.png" alt="Lixchel Logo" class="logo" />
        <h1>¡Gracias por tu compra!</h1>
        <p>Hemos recibido tu pedido correctamente</p>
      </div>
      
      <div class="content">
        <p>Hola <strong>${dataPerson.fullName}</strong>,</p>
        <p>Te confirmamos que hemos recibido tu pedido y estamos procesándolo. A continuación, encontrarás los detalles:</p>
        
        <h2>Detalles del pedido #${dataPerson.orderId}</h2>
        
        <table>
        <thead>
          <tr>
          <th>Tratamiento</th>
          <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          ${elementos.map((item: any) => `
          <tr>
            <td>${item.title}</td>
            <td>${item.price}€</td>
          </tr>
          `).join('')}
        </tbody>
        <tfoot>
          <tr class="total-row">
          <td>Total:</td>
          <td>${elementos.reduce((sum: number, item: any) => sum + item.price, 0)}€</td>
          </tr>
        </tfoot>
        </table>
        
        <h3>Tus datos</h3>
        <p><strong>Nombre:</strong> ${dataPerson.fullName}</p>
        <p><strong>Email:</strong> ${dataPerson.email}</p>
        <p><strong>Teléfono:</strong> ${dataPerson.phone}</p>
        
        <p>Nos pondremos en contacto contigo próximamente para confirmar la fecha y hora de tu cita.</p>
        <h3>Reserva ahora aquí</h3>
        <a href="https://cal.com/alex-garcia-cb8w5j/cita-previa" class="button">Reservar cita</a>
        
        <p>Si tienes alguna pregunta sobre tu pedido, no dudes en contactarnos a <a href="mailto:info@lixchel.es">info@lixchel.es</a> o al teléfono que encontrarás en nuestra web.</p>
        
        <p>¡Gracias por confiar en nosotros!</p>
        
        <a href="https://lixchel.vercel.app" class="button">Visitar nuestra web</a>
      </div>
      
      <div class="footer">
        <p>&copy; ${new Date().getFullYear()} Lixchel Center. Todos los derechos reservados.</p>
        <p>Este correo ha sido enviado a ${dataPerson.email} porque has realizado una compra en nuestra web.</p>
      </div>
      </body>
      </html>
    `;

    const textContent = `
      Gracias por tu compra, ${dataPerson.fullName}!
      
      Pedido #${dataPerson.orderId}
      
      Tratamientos:
      ${elementos.map((item: any) => `${item.title}: ${item.price}€`).join('\n')}
      
      Total: ${elementos.reduce((sum: number, item: any) => sum + item.price, 0)}€
      
      Datos de contacto:
      Nombre: ${dataPerson.fullName}
      Email: ${dataPerson.email}
      Teléfono: ${dataPerson.phone}
      
      Nos pondremos en contacto contigo próximamente para confirmar la fecha y hora de tu cita.
      
      Si tienes alguna pregunta, contáctanos a info@lixchel.es
      
      Lixchel Center
    `;

    const mailerSend = new MailerSend({
      apiKey: process.env.MAILERSEND_API_KEY as string,
    });

    const sentFrom = new Sender('prueba@trial-z3m5jgr3w2zgdpyo.mlsender.net', 'Lixchel Center');

    // Enviar el primer correo al cliente
    const emailParamsToClient = new EmailParams()
      .setFrom(sentFrom)
      .setTo([new Recipient(toEmail, toName)])
      .setSubject(subject)
      .setHtml(htmlContent)
      .setText(textContent);

    try {
      await mailerSend.email.send(emailParamsToClient);
      console.log("Correo enviado correctamente al cliente");
    } catch (sendError: any) {
      console.error("Error al enviar el email al cliente:", sendError.body);
      return NextResponse.json({ success: false, error: sendError.message }, { status: 500 });
    }

    // Enviar el segundo correo al administrador
    const emailParamsToAdmin = new EmailParams()
      .setFrom(sentFrom)
      .setTo([new Recipient('espaciodexander@gmail.com', 'Lixchell')])
      .setSubject(subject)
      .setHtml(htmlContent)
      .setText(textContent);

    try {
      await mailerSend.email.send(emailParamsToAdmin);
      console.log("Correo enviado correctamente al administrador");
      return NextResponse.json({ success: true, message: 'Email enviado correctamente' });
    } catch (sendError: any) {
      console.error("Error al enviar el email al administrador:", sendError.body);
      return NextResponse.json({ success: false, error: sendError.message }, { status: 500 });
    }

  } catch (error: any) {
    console.error("Error general:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}