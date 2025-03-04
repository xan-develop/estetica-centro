import HeroSection from "@/components/home/hero-section"
import ServicesPreview from "@/components/home/services-preview"
import AboutSection from "@/components/home/about-section"
import TestimonialsSection from "@/components/home/testimonials-section"
import ContactSection from "@/components/home/contact-section"

export default function Home() {
  return (
    <main className="flex-1">
      <HeroSection />
      <ServicesPreview />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  )
}

