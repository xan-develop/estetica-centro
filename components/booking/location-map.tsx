import React from "react"

export default function LocationMap() {
  return (
    <div className="w-full h-64 bg-gray-200">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4103.325973069971!2d-16.801977499969066!3d28.179580362995072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc6a91f4755533c1%3A0x6824251fdb5c5545!2sLixchel%20Centro%20Est%C3%A9tico!5e0!3m2!1ses!2ses!4v1742250087351!5m2!1ses!2ses" 
        width="100%" 
        height="100%" 
        style={{ border: 0 }} 
        allowFullScreen={true} 
        loading="lazy"
        title="Ubicación del negocio"
      ></iframe>
    </div>
  )
}
