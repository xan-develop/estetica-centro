import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { CartProvider } from "@/components/cart-context"

const inter = Montserrat({subsets: ['latin']})


export const metadata: Metadata = {
  title: "Belleza Esencial - Centro de Estética",
  description: "Centro de estética especializado en mejorar tu físico con tratamientos personalizados",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={inter.className}>
        <CartProvider>
        <div className="flex min-h-screen flex-col">
          <Header />
          {children}
          <Footer />
        </div>
        </CartProvider>
      </body>
    </html>
  )
}



import './globals.css'