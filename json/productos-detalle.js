const productos = [
{
      "_id": 1,
      "nombre": "Tres Leches Con Melocotón ",
      "imagen_destacada": "./img/pastel-tres-leches.jpeg",
      "precio": 12000,
      "categoria": "Tres leches",
      "stock": "Disponible",
      "descripcion": "Delicioso pastel tres leches con topping de melocotón y con crema chantilly. Ideal para cualquier ocasión especial.",
      "galeria_imagenes": [
        "./img/pastel-tres-leches.jpeg",
        "./img-productos-carrusel/pastel-tres-leches-b.jpeg",
        "./img-productos-carrusel/pastel-tres-leches-c.jpeg"
      ],
      "tamaños": {
        "Grande": "22cm"
      },
      "opcion_entrega":"En local, servicio express en Coyolar y en Orotina por un costo adicional de ₡2000.",
      "tiempo_entrega":"De 3 a 5 días después de realizar su pedido",
      "reseñas_usuarios": [
        {
          "usuario": "Ian Morales",
          "comentario": "El pastel estaba delicioso y llegó a tiempo. ¡Muy recomendado!"
        },
        {
          "usuario": "Ana Martínez",
          "comentario": "Muy bueno, aunque me gustaría que tuviera un poco más de melocotones."
        }
      ]
   },{
    "_id": 2,
    "nombre": "Tres Leches Con Fresas",
    "imagen_destacada": "./img/pastel-tres-leches-fresa.jpeg",
    "precio": 12500,
      "categoria": "Tres leches",
      "stock": "Disponible",
    "descripcion": "Delicioso tres leches con topping de fresa y chocolate, cubierto de crema chantilly. Ideal para cualquier ocasión especial.",
    "galeria_imagenes": [
      "./img/pastel-tres-leches-fresa.jpeg",
      "./img-productos-carrusel/pastel-tres-leches-fresa-b.jpeg",
      "./img-productos-carrusel/pastel-tres-leches-fresa-c.jpeg"
    ],
   "tamaños": {
        "Mediano": "18cm"
      },
      "opcion_entrega":"En local, servicio express en Coyolar y en Orotina por un costo adicional de ₡2000.",
      "tiempo_entrega":"De  3 a 5 días después de realizar su pedido",
    "reseñas_usuarios": [
      {
        "usuario": "Sherlyn Vargas",
        "comentario": "El pastel estaba muy rico, me encantó! Justo en el punto de sabor.  "
      },
      {
        "usuario": "Alejandra Barquero",
        "comentario": "Muy bueno, aunque me gustaría que tuviera un poco más de chocolate encima."
      }
    ]
   },{
    "_id": 3,
    "nombre": "Cupcakes de Colores",
    "imagen_destacada": "./img/cupcakes.jpeg",
    "precio": 5700,
    "categoria": "Cupcakes",
    "stock": "Disponible",
    "descripcion": "Deliciosos cupcakes de chocolate con un centro de dulce de leche y decorado con diferentes colores y chispas. Ideal para acompañar cualquier ocasión especial.",
    "galeria_imagenes": [
      "./img/cupcakes.jpeg",
      "./img-productos-carrusel/colores-b.jpeg",
      "./img-productos-carrusel/colores-c.jpeg"
    ],
    "tamaños": {
        "Mediano": "6 unidades"
      },
      "opcion_entrega":"En local, servicio express en Coyolar y en Orotina por un costo adicional de ₡2000.",
      "tiempo_entrega":"De 3 a 5 días después de realizar su pedido",
    "reseñas_usuarios": [
      {
        "usuario": "Luis Herrera",
        "comentario": "Los pedí para la fiesta de mi hijo y a mis invitados le encantaron. Definitivamente un 10."
      },
      {
        "usuario": "Julia Serrano",
        "comentario": "Muy buenos, aunque me gustaría que tuvieran más relleno de dulce de leche."
      }
    ]
    
  },{
    "_id": 4,
    "nombre": "Cupcakes de Graduación",
    "imagen_destacada": "./img/cupcakes-graduación.png",
    "precio": 6500,
    "categoria": "Cupcakes",
    "stock": "Disponible",
    "descripcion": "Deliciosos cupcakes de vainilla con un relleno de dulce de leche y con una decoración para graduación. Ideal para acompañar ese momento especial.",
    "galeria_imagenes": [
      "./img/cupcakes-graduación.png",
      "./img-productos-carrusel/cupcakes-graduación-b.jpeg",
      "./img-productos-carrusel/cupcakes-graduación-c.jpeg"
    ],
    "tamaños": {
        "Mediano": "6 unidades"
      },
      "opcion_entrega":"En local, servicio express en Coyolar y en Orotina por un costo adicional de ₡2000.",
      "tiempo_entrega":"De 3 a 5 días después de realizar su pedido",
    "reseñas_usuarios": [
      {
        "usuario": "Jimena Fernández",
        "comentario": "Los pedí para la graduación de mi mejor amiga y le encantaron. ¡Súper recomendados!"
      },
      {
        "usuario": "David Solano",
        "comentario": "¡Deliciosos!"
      }
    ]
    
  },{
    "_id": 5,
    "nombre": "Bento Cake de Spider-Man",
    "imagen_destacada": "./img-productos-carrusel/spider-man-c.jpeg",
    "precio": 8500,
    "categoria": "Bento Cake",
    "stock": "Disponible",
    "descripcion": "Deliciosos bento cake de vainilla y relleno de dulce de leche y con diseño de Spider-Man. Ideal para acompañar cualquier momento especial.",
    "galeria_imagenes": [
      "./img-productos-carrusel/spider-man-c.jpeg",
      "./img/pastel-spider.jpeg",
      "./img-productos-carrusel/spider-man.jpeg"
    ],
    "tamaños": {
        "Pequeño": "12 cm",
      },
      "opcion_entrega":"En local, servicio express en Coyolar y en Orotina por un costo adicional de ₡2000.",
      "tiempo_entrega":"De 3 a 5 días después de realizar su pedido",
    "reseñas_usuarios": [
      {
        "usuario": "Naomy Venegas",
        "comentario": "El queque un 10, como siempre. El servicio express llegó justo a tiempo."
      },
      {
        "usuario": "Julio López",
        "comentario": "Lo compré para una reunión con mis amigos, y es pequeño apenas como para 6 personas."
      }
    ]
    
  },{
    "_id": 6,
    "nombre": "Bento Cake de Sprinkles",
    "imagen_destacada": "./img-productos-carrusel/chispas-a.jpeg",
    "precio": 8500,
    "categoria": "Bento Cake",
    "stock": "Disponible",
    "descripcion": "Deliciosos bento cake de vainilla con relleno de moka, y lleno de sprinkles. Ideal para acompañar cualquier momento especial.",
    "galeria_imagenes": [
      "./img-productos-carrusel/chispas-a.jpeg",
      "./img-productos-carrusel/chispas-b.jpeg",
      "./img-productos-carrusel/chispas-c.jpeg"
    ],
    "tamaños": {
        "Pequeño": "12 cm",
      },
      "opcion_entrega":"En local, servicio express en Coyolar y en Orotina por un costo adicional de ₡2000.",
      "tiempo_entrega":"De 3 a 5 días después de realizar su pedido",
    "reseñas_usuarios": [
      {
        "usuario": "Sofia Guevara",
        "comentario": "Muy delicado y delicioso."
      },
      {
        "usuario": "Pablo Sánchez",
        "comentario": "A mi novia le encantó, ¡Súper lindo!"
      }
    ]
    
  },{
    "_id": 7,
    "nombre": "Pastel Primera Comunión",
    "imagen_destacada": "./img/pastel-primera-comunion.jpeg",
    "precio": 20700,
    "categoria": "Infantil",
    "stock": "Disponible",
    "descripcion": "Deliciosos pastel de vainilla con relleno de dulce de leche y con diseño para primera comunión. Ideal para acompañar ese importante momento de nuestros pequeños.",
    "galeria_imagenes": [
      "./img/pastel-primera-comunion.jpeg",
      "./img-productos-carrusel/pastel-primera-comunion.jpeg",
      "./img-productos-carrusel/pastel-primera-comunion-b.jpeg"
    ],
    "tamaños": {
        "Pequeño": "22 cm",
      },
      "opcion_entrega":"En local, servicio express en Coyolar y en Orotina por un costo adicional de ₡2000.",
      "tiempo_entrega":"De 3 a 5 días después de realizar su pedido",
    "reseñas_usuarios": [
      {
        "usuario": "Fabiana Torres",
        "comentario": "El pan estaba muy esponjoso y tenía un sabor delicioso."
      },
      {
        "usuario": "Mario Morales",
        "comentario": "Le faltaba más relleno pero después de ahí no tengo quejas. "
      }
    ]
    
  }, {
    "_id": 8,
    "nombre": "Pastel de la Sirenita ",
    "imagen_destacada": "./img/pastel-sirena-entero.jpeg",
    "precio": 23000,
    "categoria": "Infantil",
    "stock": "Disponible",
    "descripcion": "Delicioso pastel de vainilla, con relleno de dulce de leche y melotocón y con un diseño especial de la Sirenita. Ideal para cualquier ocasión especial.",
    "galeria_imagenes": [
      "./img/pastel-sirena-entero.jpeg",
      "./img-productos-carrusel/pastel-sirena.jpeg",
      "./img-productos-carrusel/pastel-sirena-abajo.png"
    ],
    "tamaños": {
      "Mediano": "18cm"
    },
    "opcion_entrega":"En local, servicio express en Coyolar y en Orotina por un costo adicional de ₡2000.",
    "tiempo_entrega":"De 3 a 5 días después de realizar su pedido",
    "reseñas_usuarios": [
      {
        "usuario": "Verónica Vargas",
        "valoracion": 5,
        "comentario": "El pastel que pedí llegó justo como lo deseaba. ¡Excelentes productos!"
      },
      {
        "usuario": "Jimena Matamorros",
        "comentario": "Aún no puedo superar lo lindo y lo detallado que estaba, ¡Muchas gracias."
      }
    ]
  },{
    "_id": 9,
    "nombre": "Pastel de Elefantes ",
    "imagen_destacada": "./img/pastel-elefante.jpeg",
    "precio": 25000,
    "categoria": "Infantil",
    "stock": "Disponible",
    "descripcion": "Delicioso pastel de vainilla, con relleno de dulce de leche y con un diseño infantil de elefante. Ideal para cualquier ocasión especial.",
    "galeria_imagenes": [
      "./img/pastel-elefante.jpeg",
      "./img-productos-carrusel/pastel-elefante-b.jpeg",
      "./img-productos-carrusel/pastel-elefante-c.jpeg"
    ],
    "tamaños": {
      "Grande": "22cm"
    },
    "opcion_entrega":"En local, servicio express en Coyolar y en Orotina por un costo adicional de ₡2000.",
    "tiempo_entrega":"De 3 a 5 días después de realizar su pedido",
    "reseñas_usuarios": [
      {
        "usuario": "Karen Montero",
        "comentario": "Lo pedí para el baby shower de mi hija, nos encantó."
      },
      {
        "usuario": "Fabián Quesada",
        "comentario": "A mi esposa le encantó para nuestro hijo, quedó super satisfecha con el pastel."
      }
    ]
 },{
  "_id": 10,
  "nombre": "Pastel de Stitch",
  "imagen_destacada": "./img/pastel-stitch.jpeg",
  "precio": 27800,
  "categoria": "Infantil",
  "stock": "Disponible",
  "descripcion": "Delicioso pastel de vainilla, con un relleno de dulce de leche y fresa. Ideal para cualquier ocasión especial.",
  "galeria_imagenes": [
    "./img/pastel-stitch.jpeg",
    "./img-productos-carrusel/pastel-stitch-b.jpeg",
    "./img-productos-carrusel/pastel-stitch-c.jpeg"
  ],
  "tamaños": {
    "Mediano": "18cm"
  },
  "opcion_entrega":"En local, servicio express en Coyolar y en Orotina por un costo adicional de ₡2000.",
  "tiempo_entrega":"De 3 a 5 días después de realizar su pedido",
  "reseñas_usuarios": [
    {
      "usuario": "Melanie Arias",
      "comentario": "¡Sigo impactada con el resultado! Estaba delicioso."
    },
    {
      "usuario": "Ana Martínez",
      "valoracion": 4,
      "comentario": "Se nota que cuando se hacen las cosas con amor, y este definitivamente es la descripción de esa frase."
    }
  ]
},{
  "_id": 11,
  "nombre": "Torta Fría de Frutas",
  "imagen_destacada": "./img-productos-carrusel/frutas-c.jpeg",
  "precio": 16500,
  "categoria": "Torta Fría",
  "stock": "Disponible",
  "descripcion": "Deliciosa torta fría de vainilla con toppings de melocotón y cerezas. Ideal para cualquier ocasión especial.",
  "galeria_imagenes": [
    "./img/pastel-fruta.jpeg",
    "./img-productos-carrusel/frutas-c.jpeg",
    "./img-productos-carrusel/frutas-b.jpeg"
  ],
  "tamaños": {
    "Mediano": "18cm"
  },
  "opcion_entrega":"En local, servicio express en Coyolar y en Orotina por un costo adicional de ₡2000.",
  "tiempo_entrega":"De 3 a 5 días después de realizar su pedido",
  "reseñas_usuarios": [
    {
      "usuario": "Liliana Portela",
      "comentario": "Delicioso, apenas para ser el postre de una reunión."
    },
    {
      "usuario": "Marco Salas",
      "comentario": "Le hizo falta ser más húmedo, pero estaba rico."
    }
  ]
},{
  "_id": 12,
  "nombre": "Selva Negra",
  "imagen_destacada": "./img/pastel-chocolate.jpeg",
  "precio": 16500,
  "categoria": "Torta Fría",
  "stock": "Disponible",
  "descripcion": "Deliciosa torta fria de selva negra con topping de fresas. Ideal para cualquier ocasión especial.",
  "galeria_imagenes": [
    "./img/pastel-chocolate.jpeg",
    "./img-productos-carrusel/selva-negra-b.jpeg",
    "./img-productos-carrusel/selva-negra-c.jpeg"
  ],
  "tamaños": {
    "Grande": "22cm"
  },
  "opcion_entrega":"En local, servicio express en Coyolar y en Orotina por un costo adicional de ₡2000.",
  "tiempo_entrega":"De 3 a 5 días después de realizar su pedido",
  "reseñas_usuarios": [
    {
      "usuario": "Raúl Gutierrez",
      "comentario": "Nunca había probado un Selva Negra, tan rico. ¡Felicidades!"
    },
    {
      "usuario": "Brenda Mora",
      "comentario": "Simplemente ¡Wow!"
    }
  ]
},{
  "_id": 13,
  "nombre": "Pastel con Mariposas",
  "imagen_destacada": "./img-productos-carrusel/mariposa-a.jpeg",
  "precio": 16700,
  "categoria": "Juveniles",
  "stock": "Disponible",
  "descripcion": "Delicioso pastel de vainilla, con relleno de dulce de leche y melocotón. Ideal para las aficionadas del rosado y de las mariposas.",
  "galeria_imagenes": [
    "./img-productos-carrusel/mariposa-a.jpeg",
    "./img-productos-carrusel/mariposa-b.jpeg",
    "./img-productos-carrusel/mariposa-c.jpeg"
  ],
  "tamaños": {
    "Grande": "22cm"
  },
  "opcion_entrega":"En local, servicio express en Coyolar y en Orotina por un costo adicional de ₡2000.",
  "tiempo_entrega":"De 3 a 5 días después de realizar su pedido",
  "reseñas_usuarios": [
    {
      "usuario": "Martha Sandí",
      "comentario": "Le encantó a mi hija, gracias."
    },
    {
      "usuario": "Rocio Naranjo",
      "comentario": "Me hubiera gustado que tuviera más mariposas."
    }
  ]
},{
  "_id": 14,
  "nombre": "Pastel de Corazón",
  "imagen_destacada": "./img/pastel-corazón-amarillo.jpeg",
  "precio": 15200,
  "categoria": "Juveniles",
  "stock": "Disponible",
  "descripcion": "Delicioso pastel de vainilla, con relleno de dulce de leche y con diseño de corazón con mucho brillo. Ideal para la aquellas personas que le encantan brillar en sus momnentos especiales.",
  "galeria_imagenes": [
    "./img/pastel-corazón-amarillo.jpeg",
    "./img-productos-carrusel/pastel-corazón-b.jpeg",
    "./img-productos-carrusel/pastel-corazón-c.jpeg"
  ],
  "tamaños": {
    "Pequeño": "12cm"
  },
  "opcion_entrega":"En local o servicio express alrededor de la zona de Coyolar, Orotina.",
  "tiempo_entrega":"De 3 a 5 días después de realizar su pedido",
  "reseñas_usuarios": [
    {
      "usuario": "Angie Castro",
      "comentario": "Lo pedí para mi cumpleaños, quedé fascinada."
    },
    {
      "usuario": "Carolina Ulloa",
      "comentario": "¡Me encantó!."
    }
  ]
},{
  "_id": 15,
  "nombre": "Pastel de Bolso Chic",
  "imagen_destacada": "./img-productos-carrusel/pastel-bolso-b.jpeg",
  "precio": 22500,
  "categoria": "Juveniles",
  "stock": "Disponible",
  "descripcion": "Delicioso pastel de chocolate, con relleno de dulce de leche y con diseño de bolso clásico. Ideal para aquellas personas que le encantan los bolsos.",
  "galeria_imagenes": [
    "./img-productos-carrusel/pastel-bolso-b.jpeg",
    "./img-productos-carrusel/pastel-bolso-a.jpeg",
    "./img-productos-carrusel/pastel-bolso-c.jpeg"
  ],
  "tamaños": {
    "Mediano": "18cm",
  },
  "opcion_entrega":"En local o servicio express alrededor de la zona de Coyolar, Orotina.",
  "tiempo_entrega":"De 3 a 5 días después de realizar su pedido",
  "reseñas_usuarios": [
    {
      "usuario": "Fernanda Herrera",
      "comentario": "¡Súper chic!"
    },
    {
      "usuario": "Debóra Valverde",
      "comentario": "¡Lo quiero!."
    }
  ]
}
   ]
  