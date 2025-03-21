import Head from 'next/head';

export default function CookiesPolicy() {
  return (
    <div className="container mx-auto p-20 min-h-screen">
      <Head>
        <title>Política de Cookies</title>
        <meta name="description" content="Conoce nuestra política de cookies y cómo las usamos." />
      </Head>
      
      <h1 className="text-3xl font-bold mb-4">Política de Cookies</h1>
      <p className="mb-4">
        Esta Política de Cookies explica qué son las cookies y cómo las utilizamos en nuestro sitio web.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2">¿Qué son las cookies?</h2>
      <p className="mb-4">
        Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2">¿Cómo usamos las cookies?</h2>
      <p className="mb-4">
        Utilizamos cookies para mejorar la experiencia del usuario, analizar el tráfico del sitio y personalizar contenido.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2">Tipos de cookies que utilizamos</h2>
      <ul className="list-disc pl-6 mb-4">
        <li><strong>Cookies esenciales:</strong> Necesarias para el funcionamiento del sitio.</li>
        <li><strong>Cookies de análisis:</strong> Nos ayudan a entender cómo se usa el sitio.</li>
        <li><strong>Cookies de personalización:</strong> Guardan preferencias del usuario.</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2">Cómo gestionar cookies</h2>
      <p className="mb-4">
        Puedes aceptar, rechazar o eliminar cookies a través de la configuración de tu navegador.
      </p>
    </div>
  );
}
