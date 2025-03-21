import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const teamMembers = [
  {
    name: "María Rodríguez",
    role: "Fundadora y Directora",
    image: "/placeholder.svg?height=300&width=300",
    description: "Con más de 20 años de experiencia en el sector de la belleza y el bienestar.",
  },
  {
    name: "Carlos Gómez",
    role: "Especialista en Tratamientos Corporales",
    image: "/placeholder.svg?height=300&width=300",
    description: "Experto en técnicas de masaje y tratamientos reductores.",
  },
  {
    name: "Laura Sánchez",
    role: "Esteticista Facial",
    image: "/placeholder.svg?height=300&width=300",
    description: "Especializada en tratamientos anti-edad y rejuvenecimiento facial.",
  },
  {
    name: "Javier Martín",
    role: "Terapeuta Holístico",
    image: "/placeholder.svg?height=300&width=300",
    description: "Combina técnicas tradicionales con terapias alternativas para un bienestar integral.",
  },
]

export default function TeamSection() {
  return (
    <section className="py-12 md:py-24 hidden">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-serif font-bold tracking-tighter text-center mb-12">Nuestro Equipo</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="relative h-64">
                <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
              </div>
              <CardContent className="p-4">
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-sm text-muted-foreground mb-2">{member.role}</p>
                <p className="text-sm">{member.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

