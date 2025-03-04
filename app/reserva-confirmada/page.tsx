import Link from "next/link"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Reserva Confirmada - Belleza Esencial",
  description: "Tu cita ha sido confirmada con éxito",
}

export default function ReservaConfirmadaPage() {
  return (
    <main className="flex-1">
      <div className="container flex flex-col items-center justify-center max-w-md py-20 px-4 text-center">
        <div className="rounded-full bg-primary/10 p-4 mb-6">
          <CheckCircle className="h-12 w-12 text-primary" />
        </div>
        <h1 className="text-3xl font-bold tracking-tighter mb-4">¡Reserva Confirmada!</h1>
        <p className="text-muted-foreground mb-8">
          Hemos recibido tu solicitud de reserva. En breve recibirás un correo electrónico con los detalles de tu cita.
        </p>
        <div className="space-y-4 w-full">
          <Button className="w-full" asChild>
            <Link href="/">Volver al inicio</Link>
          </Button>
          <Button variant="outline" className="w-full" asChild>
            <Link href="/servicios">Ver más servicios</Link>
          </Button>
        </div>
      </div>
    </main>
  )
}

