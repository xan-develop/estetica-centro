"use client";

import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Verificar si el usuario ya aceptó las cookies
    const hasAcceptedCookies = localStorage.getItem("cookiesAccepted");
    if (!hasAcceptedCookies) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    // Guardar la aceptación en localStorage
    localStorage.setItem("cookiesAccepted", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-sm">
          Usamos cookies para mejorar tu experiencia en nuestro sitio web.{" "}
          <a href="/cookiespolicy" className="underline">
            Leer más
          </a>
        </p>
        <button
          onClick={handleAccept}
          className="bg-primary text-white px-4 py-2 rounded-md"
        >
          Aceptar
        </button>
      </div>
    </div>
  );
}