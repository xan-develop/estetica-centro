"use client"
import Link from "next/link"
import { useState , useEffect, use } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Moon , Sun } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import Carrito from "./carrito"
import { useCart } from "../cart-context"

export default function Header() {
  const {quantity} = useCart()
  const [isOpen, setIsOpen] = useState(false)
  const [theme, setTheme] = useState('light')
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    }
    if (theme === 'light') {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])
  const navLinks = [
    { href: "/", label: "Inicio" },
    { href: "/servicios", label: "Servicios" },
    { href: "/nuestro-centro", label: "Nuestro Centro" },
  ]

  return (
    <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logolixchel.png"
              alt="Belleza Esencial"
              width={100}
              height={100}
            />
          </Link>
          <div>
            <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{ backgroundColor: theme === 'light' ? 'black' : 'white' }}
            className="rounded-full p-1 ml-5 hidden"
            aria-label="Cambiar tema"
            >
            {theme === 'light' ? (
            <Moon className="text-white h-4 w-4" onClick={() => setTheme('dark')} />
            ) : (
            <Sun className="text-black h-4 w-4" onClick={() => setTheme('light')} />
            )}
            </motion.button>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium transition-colors hover:text-primary">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Carrito itemCount={quantity} />
          <Button size="sm" className="hidden md:flex" asChild>
            <Link href="/compra">Finalizar compra</Link>
          </Button>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <span className="sr-only">Menú</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </svg>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-6 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-lg font-medium transition-colors hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <Button className="mt-4" asChild>
                  <Link href="/reservar" onClick={() => setIsOpen(false)}>
                    Reservar cita
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

