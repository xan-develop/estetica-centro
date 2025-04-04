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

export default function ServiceCard({ 
  service, 
  categoryId 
}: { 
  service: ServiceProps; 
  categoryId: string 
}) {
  const { agregarAlCarrito } = useCart(); // Usa el hook para acceder a las funciones del carrito

  return (
    <Card className="overflow-hidden flex flex-col h-full">
      <div className="relative h-24 sm:h-32 md:h-60 overflow-hidden">
        <div className="absolute inset-0 filter">
          <Image
            src={service.image || "/placeholder.svg"}
            alt={service.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/10" />
        {service.popular && (
          <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground z-10">Popular</Badge>
        )}
      </div>
      <CardContent className="p-6 flex-grow">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-2xl font-bold text-primary">{service.title}</h3>
          <div className="text-lg font-bold text-primary">{service.price}€</div>
        </div>
        {service.id.includes('zona-') || service.id.includes('pack-') ? (
            <ul className="list-disc list-inside text-base mb-4">
            {service.description.split(',').map((item, index) => (
              service.id.includes('zona-') && index === 0 ? (
                <li key={index} className="list-none font-bold">
                  {item.trim()}
                </li>
              ) : (
                <li key={index}>
                  {service.id.includes('zona-') && index === 0 ? (
                    <span className="font-bold">{item.trim()}</span>
                  ) : (
                    item.trim()
                  )}
                </li>
              )
            ))}
            </ul>
        ) : (
          <>
            <p className="text-base mb-4">{service.description}</p>
            <div className="text-sm font-medium">Duración: <span className="text-muted-foreground">{service.duration}</span></div>
          </>
        )}
      </CardContent>
      <CardFooter className="p-6 pt-0 flex flex-col sm:flex-row gap-2">
        {categoryId !== "laser" && (
          <Button variant="outline" className="w-full text-sm" asChild>
            <Link href={`/servicios/${service.id}`}>Más información</Link>
          </Button>
        )}
        <Button className="w-full text-sm" onClick={() => agregarAlCarrito({ id: service.id, title: service.title, price: service.price })}>
          Agregar Tratamiento
        </Button>
      </CardFooter>
    </Card>
  );
}

