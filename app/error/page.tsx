'use client'
import { useEffect } from "react";

export default function ErrorPage() {
  useEffect(() => {
    console.error("Error en la página de pago");
  }, []);

  return (
    <main>
      <section className="bg-destructive/10 py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8 text-destructive">
            ¡Error en el Pago!
          </h1>
          <p className="text-lg text-muted-foreground text-center max-w-[800px] mx-auto mt-4">
            Lo sentimos, ha ocurrido un error al procesar tu pago. Por favor, inténtalo de nuevo más tarde o
            contacta con nuestro equipo de soporte.
          </p>
        </div>
      </section>
      <div className="flex flex-col items-center justify-center py-20 bg-background">
        <div className="w-full max-w-2xl">
          <h2 className="text-xl font-semibold text-foreground mb-4 text-center">
            ¿Qué puedes hacer ahora?
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <a href="/" className="text-primary hover:underline">
                Volver a la página de inicio
              </a>
            </li>
            <li>
              <a href="/compra" className="text-primary hover:underline">
                Intentar realizar el pago nuevamente
              </a>
            </li>
            <li>
              Contactar con nuestro equipo de soporte para obtener ayuda.
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}