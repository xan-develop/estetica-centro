'use client'
import React, { createContext, useState, useContext, useEffect } from 'react';
import { NewToast } from './ui/toast';

interface CarritoItem {
  id: string;
  title: string;
  price: number;
  quantity?: number;
}

interface CartContextProps {
  carrito: CarritoItem[];
  quantity: number;
  agregarAlCarrito: (item: CarritoItem) => void;
  eliminarDelCarrito: (id: string) => void;
  toast: {
    visible: boolean;
    message: string;
    title: string;
    variant: 'success' | 'error';
  };
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [carrito, setCarrito] = useState<CarritoItem[]>([]);
  const [toast, setToast] = useState({
    visible: false,
    message: '',
    title: '',
    variant: 'success'
  });

  useEffect(() => {
    // Cargar el carrito desde el localStorage al montar el componente
    const storedCarrito = localStorage.getItem('carrito');
    if (storedCarrito) {
      try {
        setCarrito(JSON.parse(storedCarrito));
      } catch (error) {
        console.error("Error parsing carrito from localStorage:", error);
        localStorage.removeItem('carrito'); // Eliminar datos corruptos
      }
    }
  }, []);

  useEffect(() => {
    // Guardar el carrito en el localStorage cada vez que cambia
    localStorage.setItem('carrito', JSON.stringify(carrito));
  }, [carrito]);

  // Calcular la cantidad total de productos en el carrito
  const quantity = carrito.reduce((total, item) => total + (item.quantity || 1), 0);

  const agregarAlCarrito = (item: CarritoItem) => {
    setCarrito(prevCarrito => {
      const itemIndex = prevCarrito.findIndex(existingItem => existingItem.id === item.id);

      if (itemIndex > -1) {
        const updatedCarrito = [...prevCarrito];
        updatedCarrito[itemIndex] = { 
          ...updatedCarrito[itemIndex], 
          quantity: (updatedCarrito[itemIndex].quantity || 1) + 1 
        };
        return updatedCarrito;
      } else {
        return [...prevCarrito, { ...item, quantity: 1 }];
      }
    });
    
    // Mostrar toast
    setToast({
      visible: true,
      message: `${item.title} ha sido añadido al carrito`,
      title: '¡Añadido al carrito!',
      variant: 'success'
    });
    
    // Ocultar toast después de 3 segundos
    setTimeout(() => {
      setToast(prev => ({ ...prev, visible: false }));
    }, 1000);
  };

  const eliminarDelCarrito = (id: string) => {
    const item = carrito.find(item => item.id === id);
    setCarrito(prevCarrito => prevCarrito.filter(item => item.id !== id));
    
    // Mostrar toast
    setToast({
      visible: true,
      message: `${item?.title} ha sido eliminado del carrito`,
      title: '¡Eliminado del carrito!',
      variant: 'error'
    });
    
    // Ocultar toast después de 3 segundos
    setTimeout(() => {
      setToast(prev => ({ ...prev, visible: false }));
    }, 1000);
  };

  return (
    <CartContext.Provider value={{ carrito, agregarAlCarrito, eliminarDelCarrito, quantity, toast }}>
      {children}
      {toast.visible && <NewToast title={toast.title} message={toast.message} variant={toast.variant} />}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart debe ser usado dentro de un CartProvider');
  }
  return context;
};
