export const serviceCategories = [
  {
   
    id: "corporales",
    title: "Tratamientos Corporales",
    description:
      "Tratamientos especializados para mejorar la apariencia y salud de tu cuerpo, utilizando diversas técnicas innovadoras.",
    services: [
      {
        id: "maderoterapia",
        title: "Maderoterapia",
        description:
          "Terapia con herramientas de madera diseñadas para modelar el cuerpo, reducir medidas y mejorar la circulación.",
        price: 15,
        duration: "1€ el minuto - mínimo 15 minutos",
        image: "/fotos/sesion_maderoterapia_004.webp?height=300&width=400",
        benefits: [
          "Reduce celulitis y grasa localizada",
          "Mejora la circulación",
          "Tonifica la piel"
        ],
        process: [
          "Evaluación de la zona",
          "Aplicación de aceites",
          "Uso de herramientas de madera",
          "Masaje y modelado corporal"
        ]
      },
      {
        "id": "shr-v-laser",
        "title": "SHR-V Laser System",
        "description": "Sistema de depilación láser de última generación que combina tecnología SHR y luz exclusiva para garantizar resultados óptimos.",
        "price": 30,
        "duration": "1€ el minuto - mínimo 30 minutos",
        "image": "/img/fototerapia.webp?height=300&width=400",
        "benefits": [
          "100% indoloro",
          "Apto para todos los tipos de piel y cualquier época del año",
          "50% menos sesiones que equipos convencionales",
          "Sin zonas muertas, máxima comodidad y rapidez"
        ],
        "process": [
          "Preparación de la piel",
          "Ajuste del equipo según tipo de piel y zona",
          "Aplicación de luz SHR en varias pasadas",
          "Finalización con productos calmantes"
        ]
      },
      {
        id: "mesoterapia",
        title: "Mesoterapia",
        description:
          "Tratamiento estético no invasivo que ayuda a reducir grasa localizada y mejorar la apariencia de la piel.",
        price: 15,
        duration: "1€ el minuto - mínimo 15 minutos",
        image: "/img/mesoterapia.webp?height=300&width=400",
        benefits: [
          "Elimina grasa localizada",
          "Mejora la elasticidad de la piel",
          "Hidratación profunda"
        ],
        process: [
          "Evaluación de la piel",
          "Aplicación de microinyecciones",
          "Masaje de absorción",
          "Cuidado post-tratamiento"
        ]
      },
      {
        id: "manta-termica",
        title: "Manta Térmica",
        description:
          "Terapia de calor que ayuda a la eliminación de toxinas, mejora la circulación y favorece la reducción de medidas.",
        price: 15,
        duration: "1€ el minuto - mínimo 15 minutos",
        image: "/img/manta-termica.webp?height=300&width=400",
        benefits: [
          "Elimina toxinas",
          "Favorece la quema de grasa",
          "Relajación muscular"
        ],
        process: [
          "Preparación del área",
          "Colocación de la manta térmica",
          "Sesión de calor controlado",
          "Finalización y cuidados posteriores"
        ]
      },
      {
        id: "radiofrecuencia",
        title: "Radiofrecuencia",
        description:
          "La radiofrecuencia utiliza ondas electromagnéticas de alta frecuencia para calentar las capas de la dermis de forma controlada",
        price: 15,
        duration: "1€ el minuto - mínimo 15 minutos",
        image: "/img/radiofrecuencia.webp?height=300&width=400",
        benefits: [
          "Estimula la producción de colágeno",
          "Reafirma y tonifica la piel",
          "Reduce la flacidez"
        ],
        process: [
          "Evaluación de la piel",
          "Aplicación de gel conductor",
          "Uso de radiofrecuencia",
          "Recomendaciones post-tratamiento"
        ]
      },
      {
        id: "cavitacion",
        title: "Cavitación",
        description:
          "Técnica de ultrasonido que ayuda a eliminar grasa localizada y reducir medidas sin cirugía.",
        price: 15,
        duration: "1€ el minuto - mínimo 30 minutos",
        image: "/img/cavitacion.webp?height=300&width=400",
        benefits: [
          "Elimina grasa localizada",
          "Mejora la apariencia de la piel",
          "No invasivo ni doloroso"
        ],
        process: [
          "Evaluación de la zona",
          "Aplicación de gel conductor",
          "Uso de ultrasonido",
          "Drenaje linfático post-tratamiento"
        ]
      },
      {
        id: "presoterapia",
        title: "Presoterapia",
        description:
          "Tratamiento de compresión que mejora la circulación, reduce la retención de líquidos y ayuda en la recuperación muscular.",
        price: 15,
        duration: "1€ el minuto - mínimo 45 minutos",
        image: "/img/presoterapia.webp?height=300&width=400",
        benefits: [
          "Mejora la circulación",
          "Reduce la retención de líquidos",
          "Alivia la sensación de piernas cansadas"
        ],
        process: [
          "Colocación de prendas de compresión",
          "Presión secuencial aplicada",
          "Relajación durante la sesión",
          "Recomendaciones post-tratamiento"
        ]
      },
      {
        id: "vacumterapia",
        title: "Vacumterapia",
        description:
          "Terapia de succión que ayuda a mejorar la circulación, reducir la celulitis y tonificar la piel.",
        price: 15,
        duration: "1€ el minuto - mínimo 30 minutos",
        image: "/img/vacumterapia.webp?height=300&width=400",
        benefits: [
          "Reduce la celulitis",
          "Estimula la producción de colágeno",
          "Mejora la circulación"
        ],
        process: [
          "Evaluación de la zona",
          "Aplicación de aceites o gel conductor",
          "Uso de ventosas con succión controlada",
          "Drenaje linfático post-tratamiento"
        ]
      }
    ],
  },
  {
    id: "faciales",
    title: "Tratamientos Faciales",
    description:
      "Cuida y rejuvenece tu rostro con nuestros tratamientos faciales personalizados para cada tipo de piel.",
    services: [
      {
        id: "limpieza-basica",
        title: "Limpieza Básica",
        description:
          "Elimina impurezas y deja la piel fresca y revitalizada.",
        price: 40,
        duration: "45 minutos",
        image: "/img/limpiezabasica.webp?height=300&width=400",
        benefits: [
          "Elimina impurezas de la piel",
          "Refresca y revitaliza el rostro",
          "Mejora la oxigenación cutánea"
        ],
        process: [
          "Limpieza superficial",
          "Exfoliación",
          "Aplicación de mascarilla",
          "Hidratación final"
        ]
      },
      {
        id: "limpieza-profunda",
        title: "Limpieza Facial Profunda",
        description:
          "Elimina impurezas, puntos negros y células muertas dejando tu piel limpia, fresca y luminosa.",
        price: 65,
        duration: "60 minutos",
        image: "/img/limpiezaprofunda.webp?height=300&width=400",
        benefits: [
          "Elimina puntos negros y células muertas",
          "Hidratación profunda",
          "Mejora la textura y luminosidad de la piel"
        ],
        process: [
          "Limpieza inicial",
          "Exfoliación intensiva",
          "Extracción de impurezas",
          "Aplicación de mascarilla hidratante"
        ]
      },
      {
        id: "dermapen-hilos",
        title: "Dermapen + Hilos",
        description:
          "Reafirma y rejuvenece la piel con una combinación avanzada de Dermapen y hilos tensores.",
        price: 105,
        duration: "60 minutos",
        image: "/img/dermapen-hilos.webp?height=300&width=400",
        benefits: [
          "Reafirma la piel",
          "Reduce arrugas y líneas de expresión",
          "Estimula la producción de colágeno"
        ],
        process: [
          "Limpieza inicial",
          "Uso de Dermapen",
          "Aplicación de hilos tensores",
          "Hidratación y cuidados post-tratamiento"
        ]
      },
      {
        id: "dermapen-hidratacion",
        title: "Dermapen + Hidratación",
        description:
          "Estimula la regeneración de la piel mientras proporciona hidratación profunda.",
        price: 60,
        duration: "60 minutos",
        image: "/img/dermapen-hidratacionlabial.webp?height=300&width=400",
        benefits: [
          "Regenera la piel",
          "Aporta hidratación profunda",
          "Mejora la elasticidad cutánea"
        ],
        process: [
          "Limpieza facial",
          "Uso de Dermapen",
          "Aplicación de suero hidratante",
          "Masaje facial relajante"
        ]
      },
      {
        id: "dermapen-labial-hidratacion",
        title: "Dermapen Labial + Hidratación",
        description:
          "Tratamiento para labios que mejora la textura y los mantiene hidratados.",
        price: 35,
        duration: "30 minutos",
        image: "/img/dermapen-hidratacion.webp?height=300&width=400",
        benefits: [
          "Mejora la textura de los labios",
          "Aporta hidratación profunda",
          "Resalta el color natural de los labios"
        ],
        process: [
          "Limpieza labial",
          "Uso de Dermapen",
          "Aplicación de suero hidratante",
          "Masaje labial"
        ]
      },
      {
        id: "dermapen-labial-hidratacion-color",
        title: "Hidratación Labial con Color",
        description: "Tratamiento que hidrata los labios mientras aporta un toque de color natural.",
        price: 45,
        duration: "30 minutos",
        image: "/img/dermapen-color-hidratacion.webp?height=300&width=400",
        benefits: [
          "Hidratación profunda",
          "Realza el color natural de los labios",
          "Suaviza y mejora la textura labial"
        ],
        process: [
          "Limpieza labial",
          "Exfoliación suave",
          "Aplicación de suero hidratante con color",
          "Masaje para absorción"
        ]
      }
      
    ],
  },
  {
    id: "masajes",
    title: "Masajes Terapéuticos",
    description:
      "Relaja cuerpo y mente, alivia tensiones y mejora tu bienestar general con nuestros masajes especializados.",
    services: [
      {
        id: "masaje-relajante-espalda",
        title: "Masaje Relajante de Espalda",
        description:
          "Masaje relajante centrado en la espalda para aliviar tensiones y mejorar la circulación.",
        price: 35,
        duration: "45 minutos",
        image: "/img/masaje-espalda.webp?height=300&width=400",
        benefits: [
          "Alivio de tensiones musculares",
          "Mejora la circulación sanguínea",
          "Relajación profunda"
        ],
        process: [
          "Limpieza y preparación de la espalda",
          "Aplicación de aceite o crema relajante",
          "Masaje con técnicas suaves y profundas",
          "Finalización con un toque suave de relajación"
        ]
      },
      {
        id: "masaje-relajante-cuello",
        title: "Masaje Relajante de Cuello",
        description:
          "Técnica suave y efectiva para liberar la tensión acumulada en el cuello.",
        price: 35,
        duration: "45 minutos",
        image: "/img/masaje-cuello.webp?height=300&width=400",
        benefits: [
          "Alivio de la tensión cervical",
          "Reducción de dolores de cabeza",
          "Mejora la flexibilidad del cuello"
        ],
        process: [
          "Relajación inicial con movimientos suaves",
          "Masaje profundo en la zona del cuello y hombros",
          "Estiramientos suaves para liberar tensión",
          "Finalización con movimientos ligeros de relajación"
        ]
      },
      {
        id: "masaje-relajante-cara",
        title: "Masaje Relajante de Cara",
        description:
          "Estimula la circulación facial y reduce el estrés proporcionando una sensación de bienestar.",
        price: 35,
        duration: "45 minutos",
        image: "/img/masaje-facial.webp?height=300&width=400",
        benefits: [
          "Mejora la circulación facial",
          "Reduce la tensión y el estrés",
          "Aporta una sensación de frescura y relajación"
        ],
        process: [
          "Aplicación de crema o aceite facial",
          "Masaje suave con movimientos circulares",
          "Masaje en puntos de presión para liberar tensiones",
          "Finalización con toques ligeros para calmar la piel"
        ]
      },
      {
        id: "masaje-relajante-piernas",
        title: "Masaje Relajante de Piernas",
        description:
          "Alivia la pesadez en las piernas y mejora la circulación sanguínea.",
        price: 35,
        duration: "45 minutos",
        image: "/img/masaje-piernas.webp?height=300&width=400",
        benefits: [
          "Mejora la circulación en piernas",
          "Alivio de la sensación de pesadez",
          "Relajación muscular profunda"
        ],
        process: [
          "Aplicación de crema o aceite especial para piernas",
          "Masaje con movimientos ascendentes para mejorar circulación",
          "Masaje de los muslos, pantorrillas y pies",
          "Finalización con estiramientos suaves"
        ]
      },
      {
        id: "masaje-relajante-pies",
        title: "Masaje Relajante de Pies",
        description:
          "Terapia para relajar los pies cansados y mejorar el bienestar general.",
        price: 35,
        duration: "45 minutos",
        image: "/img/masaje-pies.webp?height=300&width=400",
        benefits: [
          "Alivio de la fatiga en los pies",
          "Mejora la circulación en los pies y tobillos",
          "Relajación general"
        ],
        process: [
          "Limpieza de los pies",
          "Aplicación de crema o aceite hidratante",
          "Masaje de pies, tobillos y planta",
          "Estimulación de puntos de presión para relajación profunda"
        ]
      },
      {
        id: "masaje-relajante-cuerpo-completo",
        title: "Masaje Relajante Cuerpo Completo",
        description:
          "Masaje integral para liberar estrés y relajar todos los músculos del cuerpo.",
        price: 75,
        duration: "60 minutos",
        image: "/img/masaje-cuerpo.webp?height=300&width=400",
        benefits: [
          "Relajación total del cuerpo",
          "Alivio del estrés y tensiones",
          "Mejora de la circulación sanguínea"
        ],
        process: [
          "Aplicación de aceite relajante en todo el cuerpo",
          "Masaje de todo el cuerpo con movimientos suaves y fluidos",
          "Técnicas para liberar tensión en zonas específicas",
          "Finalización con movimientos suaves para relajar"
        ]
      },
      {
        id: "masaje-descontracturante-cuerpo-completo",
        title: "Masaje Descontracturante Cuerpo Completo",
        description:
          "Técnica profunda que ayuda a aliviar tensiones musculares y mejorar la movilidad.",
        price: 90,
        duration: "60 minutos",
        image: "/img/masaje-des.webp?height=300&width=400",
        benefits: [
          "Alivio de contracturas y tensiones musculares",
          "Mejora de la movilidad y flexibilidad",
          "Reducción de dolores musculares crónicos"
        ],
        process: [
          "Aplicación de aceite o crema descontracturante",
          "Masaje profundo en áreas contracturadas",
          "Uso de técnicas de presión y estiramientos",
          "Finalización con relajación muscular"
        ]
      }
    ]
  }
];  


export const contactInfo = {
  address: "C/Aulaga 1 Agua dulce (38687) Santa Cruz de Tenerife",
  phone: "+34 822-695836",
  whatsapp: "+34 604 85 33 83",
  email: "lixchel@chirmate.com",
}