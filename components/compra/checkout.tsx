'use client'
import React, { useState } from 'react';
import { Trash2, MinusCircle, PlusCircle } from 'lucide-react';
import { useCart } from '../cart-context';
import PaymentButton from './payment';
export const CheckoutSection: React.FC = () => {
  const { carrito, agregarAlCarrito, eliminarDelCarrito, quantity } = useCart();
  const [paymentPercentage, setPaymentPercentage] = useState<number>(100);

  const handlePercentageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPaymentPercentage(Number(e.target.value));
  };

  const total = carrito.reduce((acc, item) => acc + item.price, 0);
  const amountToPay = (total * paymentPercentage) / 100;

  return (
    <div className=" mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Finaliza la compra para reservar</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="space-y-6">
          <div className="bg-card rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-4 text-foreground">Carrito de Tratamientos</h3>
            {carrito.length === 0 ? (
              <p className="text-muted-foreground">No hay tratamientos en el carrito</p>
            ) : (
              <div className="space-y-4">
                {carrito.map((item) => (
                  <div key={item.id} className="flex items-center justify-between p-3 border border-border rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-medium text-foreground">{item.title}</h4>
                      <p className="text-muted-foreground">{item.price}€</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() => eliminarDelCarrito(item.id)}
                        className="text-destructive hover:text-destructive ml-2"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>

        <div className="bg-card rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4 text-foreground">Resumen del Pedido</h3>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-foreground">Total de tratamientos:</span>
              <span className="font-medium text-foreground">{total}€</span>
            </div>

            <div className="border-t border-border pt-4">
              <label className="block text-sm font-medium text-foreground mb-2">
                Porcentaje a pagar ahora:
              </label>
              <select
                value={paymentPercentage}
                onChange={handlePercentageChange}
                className="w-full border border-input rounded-md py-2 px-3 bg-background text-foreground focus-visible:ring-ring focus-visible:ring-2 focus-visible:ring-offset-2"
              >
                <option value="100">100% - Pago completo</option>
                <option value="50">50% - Pago parcial</option>
                <option value="30">30% - Reserva mínima</option>
              </select>
            </div>

            <div className="border-t border-border pt-4">
              <div className="flex justify-between text-lg font-semibold">
                <span className="text-foreground">Total a pagar ahora:</span>
                <span className="text-foreground">{amountToPay.toFixed(2)}€</span>
              </div>
              {paymentPercentage < 100 && (
                <p className="text-sm text-muted-foreground mt-2">
                  Resto a pagar: {(total - amountToPay).toFixed(2)}€
                </p>
              )}
         
        </div>
      </div>
      </div>
              {total > 0 && (
                  <PaymentButton amountToPay={amountToPay.toFixed(2)} />
              )}
          </div>
    </div>
  );
};