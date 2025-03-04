import type { Metadata } from "next"
import BookingForm from "@/components/booking/booking-form"

export const metadata: Metadata = {
  title: "Reservar Cita - Belleza Esencial",
  description: "Reserva tu cita en nuestro centro de estética",
}

export default function ReservarPage() {
  return (
    <main className="flex-1">
      <section className="bg-muted py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Reserva tu Cita</h1>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Selecciona el servicio, fecha y hora que prefieras para tu tratamiento
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container px-4 md:px-6">
          <BookingForm />
        </div>
      </section>
    </main>
  )
}

