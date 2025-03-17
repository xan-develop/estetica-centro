'use client'
import React, { useState, useEffect } from 'react';
import RedsysForm from '@/components/compra/RedsysForm';
import { validateForm } from '@/lib/validation';
import { useCart } from '../cart-context';
import { set } from 'date-fns';

interface PaymentButtonProps {
  amountToPay: string;
  onPaymentStart: () => void;
  onPaymentCancel: () => void;
}

const PaymentButton: React.FC<PaymentButtonProps> = ({ amountToPay, onPaymentStart, onPaymentCancel }) => {
  const { carrito } = useCart();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<{
    url: string;
    Ds_SignatureVersion: string;
    Ds_MerchantParameters: string;
    Ds_Signature: string;
  } | null>(null);
  const [amount, setAmount] = useState<string>('0.00');
  const [orderId, setOrderId] = useState<string | null>(null);
  const [currency, setCurrency] = useState<string>('EUR');
  const [fullName, setFullName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [fullNameError, setFullNameError] = useState<string | null>(null);
  const [phoneError, setPhoneError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [paymentPercentage, setPaymentPercentage] = useState<number>(100);

  useEffect(() => {
    setAmount(amountToPay);
  }, [amountToPay]);

  useEffect(() => {
    console.log('url de entorno', process.env.NEXT_PUBLIC_BASE_URL);
    const datosPersona = localStorage.getItem('datosPersona');
    let storedPercentage = sessionStorage.getItem('paymentPercentage'); // Obtener el porcentaje del sessionStorage
    if (!storedPercentage) {
      storedPercentage = '100';
      sessionStorage.setItem('paymentPercentage', storedPercentage);
    }
    setPaymentPercentage(Number(storedPercentage));
    setAmount(amountToPay);
    if (datosPersona) {
      const formPdata = JSON.parse(datosPersona);
      setFullName(formPdata.fullName);
      setPhone(formPdata.phone);
      setEmail(formPdata.email);
      console.log('datosPersona', datosPersona);
    }
  }, []);

  const handlePayment = async () => {
    onPaymentStart();
    try {
      const response = await fetch('/api/payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: Number(amountToPay).toFixed(2),
          currency: 'EUR',
          fullName: fullName,
          carrito: carrito,
          porcent: paymentPercentage 
        }),
      });

      if (response.ok) {
        const result = await response.json();
        setFormData(result.formData);
        setOrderId(result.orderId);
        setCurrency(result.currency);
        const formPdata = {
          fullName: fullName,
          phone: phone,
          email: email,
          orderId: result.orderId,
          amount: amount,
          paymentPercentage: paymentPercentage
        };
        
        // Guardamos los datos personales
        localStorage.setItem('datosPersona', JSON.stringify(formPdata));
        
        // Guardamos el carrito como un array
        localStorage.setItem('carritoOk', JSON.stringify(carrito));
        sessionStorage.setItem('paymentPercentage', String(paymentPercentage)); // Guardar el porcentaje en el sessionStorage
        
        setLoading(false);
      } else {
        console.error('Error al obtener el formulario de pago');
        setLoading(false);
      }
    } catch (error) {
      console.error('Error al procesar el pago:', error);
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setFormData(null);
    setOrderId(null);
    onPaymentCancel();
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-card text-card-foreground rounded-lg shadow-md">
      <h1 className="text-lg font-semibold mb-4 text-foreground">Pasarela de Pago</h1>

      {!formData ? (
        <div className="space-y-4">
          <div className="flex flex-col">
            <label className="mb-2 font-medium hidden">
              Monto (EUR):
              <input
                type="text"
                value={amount}
                className="w-full mt-1 p-2 border border-input rounded-md bg-background text-foreground"
                disabled
                hidden
              />
            </label>
          </div>
          <div className="flex flex-col">
            <label className="mb-2 font-medium">
              Nombre Completo:
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full mt-1 p-2 border border-input rounded-md bg-background text-foreground"
                required
              />
              {fullNameError && <p className="text-xs text-red-500 mt-2 font-semibold">{fullNameError}</p>}
            </label>
          </div>
          <div className="flex flex-col">
            <label className="mb-2 font-medium">
              Teléfono:
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full mt-1 p-2 border border-input rounded-md bg-background text-foreground"
                required
              />
              {phoneError && <p className="text-xs text-red-500 mt-2 font-semibold">{phoneError}</p>}
            </label>
          </div>
          <div className="flex flex-col">
            <label className="mb-2 font-medium">
              Correo Electrónico:
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full mt-1 p-2 border border-input rounded-md bg-background text-foreground"
                required
              />
              {emailError && <p className="text-xs text-red-500 mt-2 font-semibold">{emailError}</p>}
            </label>
          </div>

          <button
            onClick={handlePayment}
            disabled={loading}
            className="w-full py-2 px-4 bg-primary text-primary-foreground rounded-md font-bold hover:bg-primary/80 transition-colors duration-200 disabled:opacity-50"
          >
            {loading ? 'Generando formulario...' : 'Pagar ahora'}
          </button>
        </div>
      ) : (
        <div className="space-y-6">
         <div className="p-6 bg-green-50 border border-green-200 rounded-xl shadow-sm">
           <p className="text-left text-lg font-medium text-green-800">
             Pedido <strong className="text-green-900">{orderId}</strong> creado correctamente
           </p>
           <p className="text-left text-base text-green-600 mt-2">
             Importe: <strong>{amount} {currency}</strong>
           </p>
         </div>
         
         <div className="p-6 bg-gray-50 border border-gray-200 rounded-xl shadow-sm">
           <h2 className="text-xl font-semibold text-gray-800 mb-4">Tus Datos</h2>
           <p className="text-base text-gray-700 mb-2"><strong className="font-semibold">Nombre:</strong> {fullName}</p>
           <p className="text-base text-gray-700 mb-2"><strong className="font-semibold">Teléfono:</strong> {phone}</p>
           <p className="text-base text-gray-700 mb-2"><strong className="font-semibold">Correo Electrónico:</strong> {email}</p>
         </div>
       
          <RedsysForm
            url={formData.url}
            Ds_SignatureVersion={formData.Ds_SignatureVersion}
            Ds_MerchantParameters={formData.Ds_MerchantParameters}
            Ds_Signature={formData.Ds_Signature}
            amount={amount}
            currency={currency}
          />

          <button
            onClick={handleCancel}
            className="w-full py-2 px-4 bg-black text-destructive-foreground rounded-md font-bold hover:bg-destructive/80 transition-colors duration-200"
          >
            Cancelar y volver
          </button>
        </div>
      )}
    </div>
  );
};

export default PaymentButton;
