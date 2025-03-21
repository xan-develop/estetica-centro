'use client'
import { Calendar, Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { contactInfo } from "@/lib/services-data"
import Image from "next/image"
import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors: any = {};
    if (!formData.firstName) newErrors.firstName = "El nombre es obligatorio.";
    if (!formData.lastName) newErrors.lastName = "El apellido es obligatorio.";
    if (!formData.email) {
      newErrors.email = "El email es obligatorio.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "El email no es válido.";
    }
    if (!formData.phone) newErrors.phone = "El teléfono es obligatorio.";
    if (!formData.message) newErrors.message = "El mensaje es obligatorio.";
    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/emailform", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Formulario enviado correctamente.");
        setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
      } else {
        const errorData = await response.json();
        alert(errorData.message || "Hubo un error al enviar el formulario.");
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      alert("Hubo un error al enviar el formulario.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">¿Listo para transformar tu físico?</h2>
          <div className="p-0">
            <Image 
              src="/img/consultoria.webp" 
              alt="Tratamientos estéticos" 
              width={600} 
              height={200} 
              className="rounded-lg shadow-md" 
            />
          </div>
          <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Agenda una consulta gratuita y descubre cómo podemos ayudarte a alcanzar tus objetivos.
          </p>
          <div className="space-y-4 pt-4">
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-primary" />
              <span>WhatsApp: {contactInfo.whatsapp}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-primary" />
              <span>{contactInfo.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              <span>{contactInfo.address}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              <span>Lunes a Sábado: 9:00 - 20:00</span>
            </div>
          </div>
        </div>
        <div className="space-y-4 rounded-lg border bg-background p-6">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold">Solicita información</h3>
            <p className="text-muted-foreground">
              Completa el formulario y nos pondremos en contacto contigo a la brevedad.
            </p>
          </div>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label
                  htmlFor="firstName"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Nombre
                </label>
                <input
                  id="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Nombre"
                />
                {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="lastName"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Apellido
                </label>
                <input
                  id="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Apellido"
                />
                {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
              </div>
            </div>
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="tu@email.com"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>
            <div className="space-y-2">
              <label
                htmlFor="phone"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Teléfono
              </label>
              <input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="+34 123 456 789"
              />
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
            </div>
            <div className="space-y-2">
              <label
                htmlFor="message"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Mensaje
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="¿En qué podemos ayudarte?"
              ></textarea>
              {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
            </div>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Enviando..." : "Enviar mensaje"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}

