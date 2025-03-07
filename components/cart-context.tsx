'use client'
import React, { createContext, useState, useContext, useEffect } from 'react';

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
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [carrito, setCarrito] = useState<CarritoItem[]>([]);

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
  };

  const eliminarDelCarrito = (id: string) => {
    setCarrito(prevCarrito => prevCarrito.filter(item => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ carrito, agregarAlCarrito, eliminarDelCarrito, quantity }}>
      {children}
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
