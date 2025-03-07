'use client'
import { ShoppingCart } from "lucide-react";
import React from "react";
import { Dialog } from "radix-ui";
import { useCart } from "../cart-context";
import Link from "next/link";

interface CarritoProps {
   itemCount: number;
   className?: string;
}

export default function Carrito({ itemCount, className }: CarritoProps) {
   const { carrito, eliminarDelCarrito } = useCart();

   return (
      <div className={`bottom-0 mr-6 relative hidden md:block ${className}`}>
         <Dialog.Root>
            <Dialog.Trigger asChild>
               <button className="group bg-primary text-primary-foreground rounded-full p-3 flex items-center gap-2 hover:bg-primary/80 transition-colors duration-200 focus:outline-none">
                  <p className="text-sm font-semibold">{itemCount}</p>
                  <ShoppingCart className="h-5 w-5" />
               </button>
            </Dialog.Trigger>

            <Dialog.Portal>
               <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm animate-fadeIn" />
               <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-card text-card-foreground border border-border rounded-lg shadow-lg p-6 w-full max-w-md animate-zoomIn">
                  <Dialog.Title className="text-lg font-semibold tracking-tight">Carrito de Compras</Dialog.Title>
                  <Dialog.Description className="text-sm text-muted-foreground mt-2">
                     Aquí están los tratamientos que has agregado al carrito.
                  </Dialog.Description>

                  <div className="mt-6 space-y-6">
                     {carrito.length > 0 ? (
                        carrito.map((item) => (
                           <div key={item.id} className="flex justify-between items-center bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-all duration-300 ease-in-out">
                              <div className="flex flex-col space-y-2">
                                 <p className="text-lg font-semibold text-primary">{item.title}</p>
                                 <p className="text-sm text-muted-foreground">{item.price}€</p>
                              </div>

                                <button
                                  onClick={() => eliminarDelCarrito(item.id)}
                                  className="text-xs bg-red-400 text-white p-2 rounded-md font-semibold hover:bg-red-700 transition-colors duration-200"
                                >
                                  Eliminar
                                </button>
                           </div>
                        ))
                     ) : (
                        <p className="text-sm text-muted-foreground text-center">No hay tratamientos en el carrito.</p>
                     )}

                     <div className="flex justify-between items-center pt-4">
                        <p className="text-lg font-semibold text-primary">Total: {carrito.reduce((total, item) => total + item.price, 0)}€</p>
                           <Link
                              href="/compra"
                              className="bg-primary text-primary-foreground px-4 py-2 rounded-md font-semibold hover:bg-primary/80 transition-colors duration-200"
                           >
                              Finalizar Compra
                           </Link>
                     </div>
                  </div>
                  <Dialog.Close asChild>
                     <button className="absolute top-2 right-2 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none h-6 w-6 flex items-center justify-center">
                        <span className="sr-only">Cerrar</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                           <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
                        </svg>
                     </button>
                  </Dialog.Close>
               </Dialog.Content>
            </Dialog.Portal>
         </Dialog.Root>
      </div>
   );
}
