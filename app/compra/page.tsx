import { Metadata } from "next";
import { CheckoutSection } from "@/components/compra/checkout";

export const metadata: Metadata = {
  title: "Belleza Esencial - Centro de Estética",
  description: "Centro de estética especializado en mejorar tu físico con tratamientos personalizados",
  generator: 'v0.dev'
}

export default function CompraPage() {
   
  return (
   <main>
   <section className="bg-muted py-12 md:py-24">
      <div className="container px-4 md:px-6">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">
         Reserva tu tratamiento
      </h1>
      <p className="text-lg text-muted-foreground text-center max-w-[800px] mx-auto mt-4">
         Completa tu compra y disfruta de una experiencia única. Nuestro equipo de profesionales está listo para
         brindarte el mejor servicio.
      </p>
      </div>
   </section>
   <section className="container px-4 md:px-6 py-12">
      <CheckoutSection />
   </section>
   </main>

  );
}