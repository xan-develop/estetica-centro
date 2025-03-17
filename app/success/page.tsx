'use client'
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { EmailSpinner } from "@/components/success/EmailSpinner";
import { AlertCircle } from "lucide-react";
import { useSearchParams } from 'next/navigation';
import { set } from "zod";

export interface CarritoItem {
  id: string;
  title: string;
  price: number;
  quantity?: number;
}

export default function SuccessPayment() {
  const searchParams = useSearchParams();
  const [isValid, setIsValid] = useState(true);
  const [loading, setLoading] = useState(true);
  const [mailSent, setMailSent] = useState<boolean | null>(null);
  const [mailError, setMailError] = useState<string | null>(null);
  const [datosPersona, setDatosPersona] = useState<{
    amount: string;
    email: string;
    fullName: string;
    orderId: string;
    phone: string;
  } | null>(null);
  const [carritoOk, setCarritoOk] = useState<CarritoItem[]>([]);
  const [emailAlreadySent, setEmailAlreadySent] = useState(false);
  const emailSentRef = useRef(false); // Nuevo flag para controlar envíos múltiples

  // Función para enviar el correo
  const sendConfirmationEmail = async (datosPersona: any, carritoItems: CarritoItem[]) => {
    try {
      if (!datosPersona.email || !datosPersona.fullName || !datosPersona.orderId) {
        setMailError("Faltan datos necesarios para enviar la confirmación");
        return false;
      }
      if (carritoItems.length === 0) {
        setMailError("No hay productos en el carrito para confirmar");
        return false;
      }

      const response = await fetch('/api/sendmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          dataPerson: datosPersona,
          elementos: carritoItems,
        }),
      });

      const result = await response.json();

      if (!result.success) {
        setMailError(result.error || "Error al enviar el correo de confirmación");
        console.log("Fallo al enviar el correo");
        return false;
      }

      localStorage.setItem('emailSent', datosPersona.orderId);
      console.log("Correo enviado correctamente");
      return true;
    } catch (error: any) {
      console.error("Error al enviar el correo de confirmación:", error);
      setMailError(error.message || "Error desconocido al enviar el correo");
      return false;
    }
  };

  useEffect(() => {
    let mounted = true;

    const processData = async () => {
      if (!mounted) return;

      setLoading(true);

      // 1. Validar el token CSRF
      const csrfTokenFromUrl = searchParams.get('csrfToken');
      const response = await fetch(`/api/validateCsrf?csrfToken=${csrfTokenFromUrl}`);
      const data = await response.json();
      setIsValid(data.valid);

      if (!data.valid) {
        console.warn('Solicitud no autorizada a la página de éxito');
        window.location.href = '/error?fail=csrfToken'; // Redirige a la página de error
        return; // Importante: Detener la ejecución si la validación falla
      }

      // 2. Si la validación es exitosa, continuar con el resto del código
      const datosPersonaStr = localStorage.getItem('datosPersona');
      const carritoOkStr = localStorage.getItem('carritoOk');
      const emailSentForOrder = localStorage.getItem('emailSent');

      if (datosPersonaStr && carritoOkStr) {
        try {
          const parsedDatos = JSON.parse(datosPersonaStr);
          setDatosPersona(parsedDatos);

          const parsedCarrito = JSON.parse(carritoOkStr);
          setCarritoOk(parsedCarrito);

          // Verificar si el correo ya fue enviado para este pedido
          if (emailSentForOrder === parsedDatos.orderId) {
            console.log('Email ya enviado anteriormente, no se reenvía');
            setMailSent(true);
          } else {
            // Intentar enviar el correo solo si no se ha enviado antes
            console.log('Intentando enviar email por primera vez');
            if (!emailSentRef.current) {
              emailSentRef.current = true; // Marcar como enviado
              const success = await sendConfirmationEmail(parsedDatos, parsedCarrito);
              if (success) {
                setMailSent(success);
                console.log('Correo enviado correctamente');
              }
            }
          }
        } catch (error) {
          console.error("Error al procesar los datos:", error);
          setMailError("Error al procesar los datos de la compra");
          setMailSent(false);
        }
      } else {
        setMailError("No se encontraron los datos necesarios para la confirmación");
        setMailSent(false);
      }

      setLoading(false);
    };

    processData();

    return () => {
      mounted = false;
    };
  }, [searchParams]);

  return (
    <main className="bg-background min-h-screen">
      <section className="bg-muted py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <motion.h1
            className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            ¡Pago Realizado con Éxito!
          </motion.h1>
          <motion.p
            className="text-lg text-muted-foreground text-center max-w-[800px] mx-auto mt-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Hemos recibido tu pago correctamente. En breve recibirás un correo con los detalles de tu compra.
          </motion.p>
        </div>
      </section>
      <section className="py-8 md:py-12">
        {loading && (
          <div className="container px-4 md:px-6 text-center">
            <EmailSpinner />
          </div>
        )}
        {!loading && (
          <div className="flex flex-col items-center gap-3">
            {mailSent === false && (
              <div className="w-full max-w-2xl mx-auto mb-4">
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                  <div className="flex items-center">
                    <AlertCircle className="h-6 w-6 text-yellow-400 mr-3" />
                    <p className="text-sm text-yellow-700">
                      {mailError || "No se pudo enviar el correo de confirmación. Por favor, contáctanos para más información."}
                    </p>
                  </div>
                </div>
              </div>
            )}
            
            <div className="container px-4 md:px-6 text-center">
              <motion.div
                className="rounded-lg border shadow-md p-4 md:p-6 bg-white text-card-foreground"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-xl font-semibold text-foreground mb-4">¡Gracias por tu compra!</h2>
                <Image
                  src="/logolixchel.png"
                  alt="Compra Realizada"
                  width={400}
                  height={200}
                  className="mx-auto p-7"
                />
              </motion.div>
            </div>
            <div className="container px-4 md:px-6">
              <motion.div
                className="rounded-lg border shadow-md p-4 md:p-6 bg-card text-card-foreground"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="text-xl font-semibold text-foreground mb-4">Resumen de la Compra</h2>
                <h4>Id del pedido: {datosPersona?.orderId}</h4>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-border">
                    <thead>
                      <tr>
                        <th className="px-4 py-2 text-left text-sm font-semibold text-muted-foreground">Producto</th>
                        <th className="px-4 py-2 text-right text-sm font-semibold text-muted-foreground">Precio</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {carritoOk.length > 0 ? (
                        carritoOk.map((item) => (
                          <tr key={item.id}>
                            <td className="px-4 py-2 text-left">{item.title}</td>
                            <td className="px-4 py-2 text-right">{item.price}€</td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan={2} className="py-2 px-4 text-center text-sm text-muted-foreground">No hay elementos en el carrito.</td>
                        </tr>
                      )}
                    </tbody>
                    <tfoot>
                      <tr>
                        <td className="px-4 py-2 font-semibold">Total:</td>
                        <td className="px-4 py-2 font-bold text-right">{datosPersona?.amount}€</td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
                <div className="mt-6 border-t pt-4">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Tus datos</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div>
                      <span className="font-semibold text-sm text-muted-foreground">Nombre:</span>
                      <p className="text-foreground">{datosPersona?.fullName}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-sm text-muted-foreground">Email:</span>
                      <p className="text-foreground">{datosPersona?.email}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-sm text-muted-foreground">Teléfono:</span>
                      <p className="text-foreground">{datosPersona?.phone}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}