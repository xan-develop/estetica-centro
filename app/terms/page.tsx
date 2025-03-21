import React from 'react';
import Head from 'next/head';

export default function TermsPrivacy() {
  return (
    <div className="container mx-auto p-6">
      <Head>
        <title>Términos y Política de Privacidad</title>
        <meta name="description" content="Consulta nuestros términos y políticas de privacidad." />
      </Head>
      
      <h1 className="text-3xl font-bold mb-4">Términos y Política de Privacidad</h1>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2">1. Información del Responsable</h2>
      <p className="mb-4">
        En cumplimiento del Reglamento General de Protección de Datos (RGPD) y la Ley de Servicios de la Sociedad de la Información (LSSI-CE), informamos que el responsable del tratamiento de datos es:
      </p>
      <p className="mb-4">
        <strong>Chermite SL</strong><br/>
        C/Aulaga 1 Agua dulce (38687) Santa Cruz de Tenerife<br/>
        chermitesl@gmail.com<br/>
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2">2. Finalidad del Tratamiento</h2>
      <p className="mb-4">
        Solo recopilamos la dirección de correo electrónico del cliente con el propósito exclusivo de enviar confirmaciones de compra. No utilizamos esta información para marketing ni la compartimos con terceros.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2">3. Base Legal del Tratamiento</h2>
      <p className="mb-4">
        La base legal para el tratamiento de los datos es la ejecución del contrato de compraventa y el consentimiento expreso del usuario al proporcionar su correo electrónico.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2">4. Plazo de Conservación</h2>
      <p className="mb-4">
        Los datos se conservarán únicamente durante el tiempo necesario para gestionar la compra y las obligaciones legales correspondientes.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2">5. Pagos y Seguridad</h2>
      <p className="mb-4">
        Utilizamos Redsys para procesar pagos, lo que implica una redirección segura a su plataforma. No almacenamos ni gestionamos datos de pago en nuestro sitio.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2">6. Derechos del Usuario</h2>
      <p className="mb-4">
        Como usuario, tienes derecho a acceder, rectificar, suprimir y limitar el tratamiento de tus datos. Para ejercer estos derechos, puedes contactarnos en el correo electrónico proporcionado arriba.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2">7. Medidas de Seguridad</h2>
      <p className="mb-4">
        Aplicamos medidas de seguridad técnicas y organizativas adecuadas para garantizar la protección de los datos personales frente a accesos no autorizados.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2">8. Uso de Cookies</h2>
      <p className="mb-4">
        Para más información sobre el uso de cookies, consulta nuestra <a href="/cookiespolicy" className="text-blue-500 underline">Política de Cookies</a>.
      </p>
    </div>
  );
}
