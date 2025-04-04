'use client'
import type { ServiceProps } from "./service-card"
import ServiceCard from "./service-card"
import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface ServiceCategoryProps {
  id: string
  title: string
  description: string
  services: ServiceProps[]
}

export default function ServiceCategory({ category }: { category: ServiceCategoryProps }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section id={category.id} className="py-12 scroll-mt-20">
      <div className="space-y-4 mb-8">
        <button
          className="flex items-center justify-between w-full hover:bg-zinc-50 hover:p-4 transition-all ease-out duration-300 rounded-lg"
          onClick={() => setIsOpen(!isOpen)}
        >
          <h2 className="text-2xl font-bold tracking-tighter">{category.title}</h2>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? <ChevronUp className="h-6 w-6" /> : <ChevronDown className="h-6 w-6" />}
          </motion.div>
        </button>
        <p className="text-muted-foreground max-w-3xl">{category.description}</p>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            {category.services.map((service) => (
              <ServiceCard key={service.id} service={service} categoryId={category.id} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

