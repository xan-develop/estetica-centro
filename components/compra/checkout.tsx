'use client'
import React, { useState } from 'react';
import { Trash2 } from 'lucide-react';
import { useCart } from '../cart-context';
import PaymentButton from './payment';

export const CheckoutSection: React.FC = () => {
  const { carrito, eliminarDelCarrito } = useCart();
  const [showSummary, setShowSummary] = useState(true);

  const handlePaymentStart = () => {
    setShowSummary(false);
  };

  const handlePaymentCancel = () => {
    setShowSummary(true);
  };

  const total = carrito.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="mx-auto p-6">
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

        {showSummary && (
          <div className="bg-card rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-4 text-foreground">Resumen del Pedido</h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-foreground">Total de tratamientos:</span>
                <span className="font-medium text-foreground">{total}€</span>
              </div>

              <div className="border-t border-border pt-4">
                <div className="flex justify-between text-lg font-semibold">
                  <span className="text-foreground">Total a pagar:</span>
                  <span className="text-foreground">{total.toFixed(2)}€</span>
                </div>
              </div>
            </div>
          </div>
        )}
        {total > 0 && (
          <PaymentButton 
            amountToPay={total.toFixed(2)} 
            onPaymentStart={handlePaymentStart}
            onPaymentCancel={handlePaymentCancel}
          />
        )}
      </div>
    </div>
  );
};