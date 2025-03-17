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
import { motion } from "framer-motion"

// Versiones de componentes con motion
const MotionCard = motion(Card)
const MotionDiv = motion.div

// Variantes de animación
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { 
      type: "spring", 
      stiffness: 100,
      damping: 12
    }
  },
  exit: { 
    y: 20, 
    opacity: 0,
    transition: { 
      duration: 0.2
    }
  }
}

const headerVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: "easeOut" 
    }
  },
  exit: { 
    opacity: 0, 
    y: -20,
    transition: { 
      duration: 0.3
    }
  }
}

interface ContactDetail {
  icon: React.ElementType
  title: string
  details: string[]
}

const CONTACT_DETAILS: ContactDetail[] = [
  {
    icon: MapPin,
    title: "Dirección",
    details: ["C/Aulaga 1 Agua dulce", "38687 Santa Cruz de Tenerife, España"]
  },
  {
    icon: Clock,
    title: "Horario",
    details: ["Lunes a Viernes: 9:00 - 20:00", "Sábados: 10:00 - 14:00"]
  },
  {
    icon: Phone,
    title: "Teléfono",
    details: ["+34 604 85 33 83"]
  },
  {
    icon: Mail,
    title: "Email",
    details: ["chirmatesl@gmail.com"]
  }
]

export default function BookingForm() {
  const searchParams = useSearchParams()
  const initialService = searchParams.get("servicio") || ""

  return (
    <section className="container mx-auto py-12 px-4">
      <MotionDiv 
        className="max-w-4xl mx-auto"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={containerVariants}
      >
        <BookingHeader />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <MotionDiv className="lg:col-span-1 lg:row-span-2" variants={itemVariants}>
            <LocationCard />
          </MotionDiv>
          <div className="lg:col-span-2 space-y-6">
            <MotionDiv variants={itemVariants}>
              <BookingCalendarCard />
            </MotionDiv>
            <MotionDiv variants={itemVariants}>
              <ContactCard contactDetails={CONTACT_DETAILS} />
            </MotionDiv>
          </div>
        </div>
      </MotionDiv>
    </section>
  )
}

function BookingHeader() {
  return (
    <MotionDiv className="text-center mb-10" variants={headerVariants}>
      <h1 className="text-3xl font-bold mb-3 text-primary">Reserva tu cita</h1>
      <p className="text-gray-600 max-w-2xl mx-auto">
        Agenda tu próxima visita de manera rápida y sencilla con nuestro sistema de reservas online.
      </p>
    </MotionDiv>
  )
}

function BookingCalendarCard() {
  return (
    <MotionCard 
      className="border border-gray-200"
      whileHover={{ boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)", scale: 1.01 }}
      transition={{ duration: 0.2 }}
    >
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
    </MotionCard>
  )
}

function LocationCard() {
  return (
    <MotionCard 
      className="border border-gray-200"
      whileHover={{ boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)", scale: 1.01 }}
      transition={{ duration: 0.2 }}
    >
      <CardHeader className="bg-primary/5">
        <CardTitle className="flex items-center gap-2">
          <MapPin className="h-5 w-5 text-primary" />
          Nuestra ubicación
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <LocationMap />
      </CardContent>
    </MotionCard>
  )
}

function ContactCard({ contactDetails }: { contactDetails: ContactDetail[] }) {
  return (
    <MotionCard 
      className="border border-gray-200"
      whileHover={{ boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)", scale: 1.01 }}
      transition={{ duration: 0.2 }}
    >
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
          <MotionDiv
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <Button variant="default" className="w-full">
              Contáctanos
            </Button>
          </MotionDiv>
        </Link>
      </CardFooter>
    </MotionCard>
  )
}
