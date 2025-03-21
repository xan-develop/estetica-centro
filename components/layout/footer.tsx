import Link from "next/link"
import { SiWhatsapp , SiInstagram , SiGmail } from "react-icons/si";
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-muted py-6">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Lixchel - Centro Estético</h3>
            <p className="text-sm text-muted-foreground">
              Tu centro de estética especializado en mejorar tu físico y bienestar con tratamientos personalizados.
            </p>
            <div className="flex gap-4">
              <Button size="icon" variant="outline">
                <SiInstagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Button>
              <Button size="icon" variant="outline">
                <SiWhatsapp className="h-5 w-5" />
                <span className="sr-only">WhatsApp</span>
              </Button>
              <Button size="icon" variant="outline">
                <SiGmail className="h-5 w-5" />
                <span className="sr-only">Gmail</span>
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Enlaces rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm hover:underline underline-offset-4">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="text-sm hover:underline underline-offset-4">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/#nosotros" className="text-sm hover:underline underline-offset-4">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="/#testimonios" className="text-sm hover:underline underline-offset-4">
                  Testimonios
                </Link>
              </li>
              <li>
                <Link href="/#contacto" className="text-sm hover:underline underline-offset-4">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Servicios</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/servicios#corporales" className="text-sm hover:underline underline-offset-4">
                  Tratamientos corporales
                </Link>
              </li>
              <li>
                <Link href="/servicios#faciales" className="text-sm hover:underline underline-offset-4">
                  Tratamientos faciales
                </Link>
              </li>
              <li>
                <Link href="/servicios#masajes" className="text-sm hover:underline underline-offset-4">
                  Masajes terapéuticos
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contacto</h3>
            <address className="not-italic text-sm text-muted-foreground space-y-2">
              <p>C/Aulaga 1 Agua dulce (38687) Santa Cruz de Tenerife</p>
              <p>+34 604 85 33 83</p>
              <p>chirmatesl@gmail.com</p>
            </address>
          </div>
        </div>

        <div className="mt-8 border-t pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-sm text-muted-foreground">© 2025 Belleza Esencial. Todos los derechos reservados.</span>
          <nav className="flex gap-4 sm:gap-6">
            <Link href="/terms" className="text-sm hover:underline underline-offset-4">
              Términos y Privacidad
            </Link>
            <Link href="/cookiespolicy" className="text-sm hover:underline underline-offset-4">
              Cookies
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}

