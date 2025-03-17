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
    setLoading(true); // Activar el estado de carga
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
    <div className="max-w-lg mx-auto p-8 bg-muted dark:bg-gray-900 text-gray-800 dark:text-white rounded-xl shadow-lg">
      <h1 className="text-2xl font-bold mb-6 text-center">Pasarela de Pago</h1>
  
      {!formData ? (
        <div className="space-y-6">
          {/* Full Name Input */}
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="fullName">
              Nombre Completo:
            </label>
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 dark:bg-gray-800"
              required
            />
            {fullNameError && (
              <p className="text-xs text-red-500 mt-1 font-semibold">{fullNameError}</p>
            )}
          </div>
  
          {/* Phone Input */}
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="phone">
              Teléfono:
            </label>
            <input
              type="text"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 dark:bg-gray-800"
              required
            />
            {phoneError && (
              <p className="text-xs text-red-500 mt-1 font-semibold">{phoneError}</p>
            )}
          </div>
  
          {/* Email Input */}
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="email">
              Correo Electrónico:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 dark:bg-gray-800"
              required
            />
            {emailError && (
              <p className="text-xs text-red-500 mt-1 font-semibold">{emailError}</p>
            )}
          </div>
  
          {/* Payment Button */}
          <button
            onClick={handlePayment}
            disabled={loading}
            className="w-full py-3 px-6 bg-primary text-white rounded-md font-bold hover:bg-primary-dark transition-colors duration-200 disabled:opacity-50"
          >
            {loading ? (
              <div className="flex items-center justify-center">
                <div className="w-5 h-5 border-2 border-t-2 border-white rounded-full animate-spin mr-2"></div>
                Generando formulario...
              </div>
            ) : (
              'Pagar ahora'
            )}
          </button>
        </div>
      ) : (
        <div className="space-y-8">
          {/* Success Message */}
          <div className="p-6 bg-green-50 dark:bg-green-900 border border-green-200 dark:border-green-800 rounded-xl shadow-sm">
            <p className="text-left text-lg font-medium text-green-800 dark:text-green-400">
              Pedido <strong className="text-green-900 dark:text-green-300">{orderId}</strong> creado correctamente
            </p>
            <p className="text-left text-base text-green-600 dark:text-green-400 mt-2">
              Importe: <strong>{amount} {currency}</strong>
            </p>
          </div>
  
          {/* User Details */}
          <div className="p-6 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Tus Datos</h2>
            <p className="text-base text-gray-700 dark:text-gray-300 mb-2">
              <strong className="font-semibold">Nombre:</strong> {fullName}
            </p>
            <p className="text-base text-gray-700 dark:text-gray-300 mb-2">
              <strong className="font-semibold">Teléfono:</strong> {phone}
            </p>
            <p className="text-base text-gray-700 dark:text-gray-300 mb-2">
              <strong className="font-semibold">Correo Electrónico:</strong> {email}
            </p>
          </div>
  
          {/* Redsys Form */}
          <RedsysForm
            url={formData.url}
            Ds_SignatureVersion={formData.Ds_SignatureVersion}
            Ds_MerchantParameters={formData.Ds_MerchantParameters}
            Ds_Signature={formData.Ds_Signature}
            amount={amount}
            currency={currency}
          />
  
          {/* Cancel Button */}
          <button
            onClick={handleCancel}
            className="w-full py-3 px-6 bg-gray-700 dark:bg-gray-800 text-white rounded-md font-bold hover:bg-gray-800 dark:hover:bg-gray-700 transition-colors duration-200"
          >
            Cancelar y volver
          </button>
        </div>
      )}
    </div>
  );
};

export default PaymentButton;
