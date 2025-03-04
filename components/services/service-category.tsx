import type { ServiceProps } from "./service-card"
import ServiceCard from "./service-card"

interface ServiceCategoryProps {
  id: string
  title: string
  description: string
  services: ServiceProps[]
}

export default function ServiceCategory({ category }: { category: ServiceCategoryProps }) {
  return (
    <section id={category.id} className="py-12 scroll-mt-20">
      <div className="space-y-4 mb-8">
        <h2 className="text-3xl font-bold tracking-tighter">{category.title}</h2>
        <p className="text-muted-foreground max-w-3xl">{category.description}</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {category.services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  )
}

