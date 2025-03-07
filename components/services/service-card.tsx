import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/components/cart-context"; // Importa el hook personalizado

export interface ServiceProps {
  id: string
  title: string
  description: string
  price: number
  duration: string
  image: string
  popular?: boolean
}

export default function ServiceCard({ service }: { service: ServiceProps }) {
  const { agregarAlCarrito } = useCart(); // Usa el hook para acceder a las funciones del carrito

  return (
    <Card className="overflow-hidden">
      <div className="relative">
        <Image
          src={service.image || "/placeholder.svg"}
          alt={service.title}
          width={400}
          height={300}
          className="aspect-video w-full object-cover"
        />
        {service.popular && (
          <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">Popular</Badge>
        )}
      </div>
      <CardContent className="p-6">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-bold">{service.title}</h3>
          <div className="text-lg font-bold text-primary">{service.price}€</div>
        </div>
        <p className="text-muted-foreground mb-2">{service.description}</p>
        <div className="text-sm text-muted-foreground">Duración: {service.duration}</div>
      </CardContent>
      <CardFooter className="p-6 pt-0 flex gap-2">
        <Button variant="outline" className="w-full" asChild>
          <Link href={`/servicios/${service.id}`}>Más información</Link>
        </Button>
        <Button className="w-full" onClick={() => agregarAlCarrito({ id: service.id, title: service.title, price: service.price })}>
          Agregar Tratamiento
        </Button>
      </CardFooter>
    </Card>
  );
}

