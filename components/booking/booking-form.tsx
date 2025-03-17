"use client"

import React from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Clock, Phone, Mail, Calendar } from "lucide-react"
import Calform from "@/components/booking/calform"
import ContactInfo from "@/components/booking/contact-info"
import LocationMap from "@/components/booking/location-map"
import Link from "next/link"

interface ContactDetail {
  icon: React.ElementType
  title: string
  details: string[]
}

const CONTACT_DETAILS: ContactDetail[] = [
  {
    icon: MapPin,
    title: "Dirección",
    details: ["Calle Ejemplo, 123", "28001 Madrid, España"]
  },
  {
    icon: Clock,
    title: "Horario",
    details: ["Lunes a Viernes: 9:00 - 20:00", "Sábados: 10:00 - 14:00"]
  },
  {
    icon: Phone,
    title: "Teléfono",
    details: ["+34 912 345 678"]
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@tuestetica.com"]
  }
]

export default function BookingForm() {
  const searchParams = useSearchParams()
  const initialService = searchParams.get("servicio") || ""

  return (
    <section className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <BookingHeader />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1 lg:row-span-2">
            <LocationCard />
          </div>
          <div className="lg:col-span-2 space-y-6">
            <BookingCalendarCard />
            <ContactCard contactDetails={CONTACT_DETAILS} />
          </div>
        </div>
      </div>
    </section>
  )
}

function BookingHeader() {
  return (
    <div className="text-center mb-10">
      <h1 className="text-3xl font-bold mb-3 text-primary">Reserva tu cita</h1>
      <p className="text-gray-600 max-w-2xl mx-auto">
        Agenda tu próxima visita de manera rápida y sencilla con nuestro sistema de reservas online.
      </p>
    </div>
  )
}

function BookingCalendarCard() {
  return (
    <Card className="border border-gray-200">
      <CardHeader className="bg-primary/5">
        <CardTitle className="flex items-center gap-2">
          <Calendar className="h-5 w-5 text-primary" />
          Reserva instantánea
        </CardTitle>
        <CardDescription>
          Selecciona el servicio, fecha y hora que mejor se adapte a tu agenda
        </CardDescription>
      </CardHeader>
      <CardContent className="p-4">
        <div className="cal-container rounded">
          <Calform />
        </div>
      </CardContent>
    </Card>
  )
}

function LocationCard() {
  return (
    <Card className="border border-gray-200">
      <CardHeader className="bg-primary/5">
        <CardTitle className="flex items-center gap-2">
          <MapPin className="h-5 w-5 text-primary" />
          Nuestra ubicación
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <LocationMap />
      </CardContent>
    </Card>
  )
}

function ContactCard({ contactDetails }: { contactDetails: ContactDetail[] }) {
  return (
    <Card className="border border-gray-200">
      <CardHeader className="bg-primary/5">
        <CardTitle className="flex items-center gap-2">
          <Phone className="h-5 w-5 text-primary" />
          Información de contacto
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4 space-y-4">
        <ContactInfo contactDetails={contactDetails} />
      </CardContent>
      <CardFooter className="p-4">
        <Link href="/#contacto">
            <Button variant="default" className="w-full">
              Contáctanos
            </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
