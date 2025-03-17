import Image from "next/image"

const galleryImages = [
  { src: "fotos/sesion_maderoterapia_007.webp?height=400&width=600", alt: "Recepción del centro" },
  { src: "local/image0.jpeg?height=400&width=600", alt: "Sala de tratamientos" },
  { src: "local/image3.jpeg?height=400&width=600", alt: "Área de relajación" },
  { src: "local/image6.jpeg?height=400&width=600", alt: "Productos utilizados" },
]

export default function GallerySection() {
  return (
    <section className="py-12 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-serif font-bold tracking-tighter text-center mb-8">Nuestras Instalaciones</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {galleryImages.map((image, index) => (
            <div key={index} className="relative h-64 md:h-80 overflow-hidden rounded-lg shadow-lg">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

