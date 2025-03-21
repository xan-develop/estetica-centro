import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { CartProvider } from "@/components/cart-context"
import CookieBanner from "@/components/coockies/cookiebanner"

const inter = Montserrat({subsets: ['latin']})


export const metadata: Metadata = {
  title: "Lixchel - Centro de Estética",
  description: "Centro de estética especializado en mejorar tu físico con tratamientos personalizados",
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
          <CookieBanner />
          {children}
          <Footer />
        </div>
        </CartProvider>
      </body>
    </html>
  )
}



import './globals.css'