'use client'
import { useEffect, useState } from "react";

export interface CarritoItem {
  id: string;
  title: string;
  price: number;
  quantity?: number;
}

export default function SuccessPayment() {
  const [loading, setLoading] = useState(false);
  const [datosPersona, setDatosPersona] = useState<{
    amount: string;
    email: string;
    fullName: string;
    orderId: string;
    phone: string;
  } | null>(null);
  const [carritoOk, setCarritoOk] = useState<CarritoItem[]>([]);

  useEffect(() => {
    setLoading(true);
    const datosPersona = localStorage.getItem('datosPersona');
    if (datosPersona) {
      setDatosPersona(JSON.parse(datosPersona));
      console.log(datosPersona);
    }
    const carritoOk = localStorage.getItem('carritoOk');
    if (carritoOk) {
      try {
        setCarritoOk(JSON.parse(carritoOk));
        console.log(carritoOk);
      } catch (error) {
        console.error("Error parsing carritoOk from localStorage:", error);
        localStorage.removeItem('carritoOk');
        setCarritoOk([]);
      }
    }
    setLoading(false);
    localStorage.clear();
  }, []);

  return (
   <main>
   <section className="bg-muted py-12 md:py-24">
   <div className="container px-4 md:px-6">
   <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">
   ¡Pago Realizado con Éxito!
   </h1>
   <p className="text-lg text-muted-foreground text-center max-w-[800px] mx-auto mt-4">
   Hemos recibido tu pago correctamente. En breve recibirás un correo con los detalles de tu compra.
   </p>
   </div>
</section>
    <div className="flex flex-col items-center justify-center py-20 bg-background">
      {loading && (
        <div className="flex items-center justify-center h-full">
          <p className="text-lg text-muted-foreground">Cargando...</p>
        </div>
      )}
      {!loading && (
      <div className="w-full max-w-2xl">
        <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-6 text-center">Estamos enviando el correo de confirmacion</h1>
        <p className="text-lg text-center text-muted-foreground mb-8">
         Correo Enviado
        </p>
        <div className="w-full">
          <h2 className="text-xl font-semibold text-foreground mb-4">Resumen de la Compra</h2>
          <table className="min-w-full bg-white">
         <thead>
           <tr>
             <th className="py-2 px-4 border-b border-gray-200">Producto</th>
             <th className="py-2 px-4 border-b border-gray-200">Precio</th>
           </tr>
         </thead>
         <tbody>
           {carritoOk.length > 0 ? (
             carritoOk.map((item) => (
            <tr key={item.id}>
              <td className="py-2 px-4 border-b border-gray-200">{item.title}</td>
              <td className="py-2 px-4 border-b border-gray-200">{item.price}€</td>
            </tr>
             ))
           ) : (
             <tr>
            <td colSpan={2} className="py-2 px-4 border-b border-gray-200 text-center text-sm text-muted-foreground">No hay elementos en el carrito.</td>
             </tr>
           )}
           <tr>
             <td className="py-2 px-4 border-b border-gray-200 font-semibold">Total:</td>
             <td className="py-2 px-4 border-b border-gray-200 font-bold text-primary">{datosPersona?.amount}€</td>
           </tr>
         </tbody>
          </table>
        </div>
        <div>
         <h3>Tus datos</h3>
         <p>Nombre: {datosPersona?.fullName}</p>
         <p>Email: {datosPersona?.email}</p>
         <p>Telefono: {datosPersona?.phone}</p>
        </div>
      </div>
      )}
    </div>
    </main>
  );
}