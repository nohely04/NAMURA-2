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
        "https://th.bing.com/th/id/OIP.myRpF_kCirndelIP6Ux1cgHaE8?rs=1&pid=ImgDetMain",
        "https://4.bp.blogspot.com/-X3LEAh8yTJM/VUZP6NqHWrI/AAAAAAAAA2E/8D_7vWNKq5w/s1600/DSC_0411.JPG",
        "https://res.cloudinary.com/oreegano/image/upload/c_fill,f_auto,g_center,h_800,q_auto,w_800/v1496867820/cjaiflsoujp1lrdwjjgg.jpg"
      ],
      "tamaños": {
        "Grande": "22cm"
      },
      "opcion_entrega":"En local o servicio express alrededor de la zona de Coyolar, Orotina a partir de la compra de más de ₡10 000",
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
      "https://example.com/imagenes/pastel-chocolate-gourmet-1.jpg",
      "https://example.com/imagenes/pastel-chocolate-gourmet-2.jpg",
      "https://example.com/imagenes/pastel-chocolate-gourmet-3.jpg"
    ],
   "tamaños": {
        "Mediano": "18cm"
      },
      "opcion_entrega":"En local o servicio express alrededor de la zona de Coyolar, Orotina. A partir de la compra de más de ₡10 000",
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
      "https://example.com/imagenes/pastel-chocolate-gourmet-3.jpg"
    ],
    "tamaños": {
        "Mediano": "6 unidades"
      },
      "opcion_entrega":"En local o servicio express alrededor de la zona de Coyolar, Orotina a partir de la compra de más de ₡10 000",
      "tiempo_entrega":"De 3 a 5 días después de realizar su pedido",
    "reseñas_usuarios": [
      {
        "usuario": "Juan Pérez",
        "valoracion": 5,
        "comentario": "El pastel estaba delicioso y llegó a tiempo. ¡Muy recomendado!"
      },
      {
        "usuario": "Ana Martínez",
        "valoracion": 4,
        "comentario": "Muy bueno, aunque me gustaría que tuviera un poco más de relleno."
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
      "https://example.com/imagenes/pastel-chocolate-gourmet-3.jpg"
    ],
    "tamaños": {
        "Mediano": "6 unidades"
      },
      "opcion_entrega":"En local o servicio express alrededor de la zona de Coyolar, Orotina a partir de la compra de más de ₡10 000",
      "tiempo_entrega":"De 3 a 5 días después de realizar su pedido",
    "reseñas_usuarios": [
      {
        "usuario": "Juan Pérez",
        "valoracion": 5,
        "comentario": "El pastel estaba delicioso y llegó a tiempo. ¡Muy recomendado!"
      },
      {
        "usuario": "Ana Martínez",
        "valoracion": 4,
        "comentario": "Muy bueno, aunque me gustaría que tuviera un poco más de relleno."
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
      "opcion_entrega":"En local o servicio express alrededor de la zona de Coyolar, Orotina a partir de la compra de más de ₡10 000",
      "tiempo_entrega":"De 3 a 5 días después de realizar su pedido",
    "reseñas_usuarios": [
      {
        "usuario": "Juan Pérez",
        "valoracion": 5,
        "comentario": "El pastel estaba delicioso y llegó a tiempo. ¡Muy recomendado!"
      },
      {
        "usuario": "Ana Martínez",
        "valoracion": 4,
        "comentario": "Muy bueno, aunque me gustaría que tuviera un poco más de relleno."
      }
    ]
    
  },{
    "_id": 6,
    "nombre": "Bento Cake de Corazón",
    "imagen_destacada": "./img/pastel-blanco.jpeg",
    "precio": 8500,
    "categoria": "Bento Cake",
    "stock": "Disponible",
    "descripcion": "Deliciosos bento cake de vainilla con relleno de moka, en forma de corazón y pequeños de corazones. Ideal para acompañar cualquier momento especial.",
    "galeria_imagenes": [
      "https://example.com/imagenes/pastel-chocolate-gourmet-1.jpg",
      "https://example.com/imagenes/pastel-chocolate-gourmet-2.jpg",
      "https://example.com/imagenes/pastel-chocolate-gourmet-3.jpg"
    ],
    "tamaños": {
        "Pequeño": "12 cm",
      },
      "opcion_entrega":"En local o servicio express alrededor de la zona de Coyolar, Orotina a partir de la compra de más de ₡10 000",
      "tiempo_entrega":"De 3 a 5 días después de realizar su pedido",
    "reseñas_usuarios": [
      {
        "usuario": "Juan Pérez",
        "valoracion": 5,
        "comentario": "El pastel estaba delicioso y llegó a tiempo. ¡Muy recomendado!"
      },
      {
        "usuario": "Ana Martínez",
        "valoracion": 4,
        "comentario": "Muy bueno, aunque me gustaría que tuviera un poco más de relleno."
      }
    ]
    
  },{
    "_id": 7,
    "nombre": "Bento Cake de Flores",
    "imagen_destacada": "./img/pastel-mini-cake.jpeg",
    "precio": 8500,
    "categoria": "Bento Cake",
    "stock": "Disponible",
    "descripcion": "Deliciosos bento cake de vainilla con relleno de dulce de leche y con diseño de flores. Ideal para acompañar cualquier momento especial.",
    "galeria_imagenes": [
      "https://example.com/imagenes/pastel-chocolate-gourmet-1.jpg",
      "https://example.com/imagenes/pastel-chocolate-gourmet-2.jpg",
      "https://example.com/imagenes/pastel-chocolate-gourmet-3.jpg"
    ],
    "tamaños": {
        "Pequeño": "12 cm",
      },
      "opcion_entrega":"En local o servicio express alrededor de la zona de Coyolar, Orotina a partir de la compra de más de ₡10 000",
      "tiempo_entrega":"De 3 a 5 días después de realizar su pedido",
    "reseñas_usuarios": [
      {
        "usuario": "Juan Pérez",
        "valoracion": 5,
        "comentario": "El pastel estaba delicioso y llegó a tiempo. ¡Muy recomendado!"
      },
      {
        "usuario": "Ana Martínez",
        "valoracion": 4,
        "comentario": "Muy bueno, aunque me gustaría que tuviera un poco más de relleno."
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
    "opcion_entrega":"En local o servicio express alrededor de la zona de Coyolar, Orotina a partir de la compra de más de ₡10 000",
    "tiempo_entrega":"De 3 a 5 días después de realizar su pedido",
    "reseñas_usuarios": [
      {
        "usuario": "Juan Pérez",
        "valoracion": 5,
        "comentario": "El pastel estaba delicioso y llegó a tiempo. ¡Muy recomendado!"
      },
      {
        "usuario": "Ana Martínez",
        "valoracion": 4,
        "comentario": "Muy bueno, aunque me gustaría que tuviera un poco más de relleno."
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
      "https://th.bing.com/th/id/OIP.myRpF_kCirndelIP6Ux1cgHaE8?rs=1&pid=ImgDetMain",
      "https://4.bp.blogspot.com/-X3LEAh8yTJM/VUZP6NqHWrI/AAAAAAAAA2E/8D_7vWNKq5w/s1600/DSC_0411.JPG",
      "https://res.cloudinary.com/oreegano/image/upload/c_fill,f_auto,g_center,h_800,q_auto,w_800/v1496867820/cjaiflsoujp1lrdwjjgg.jpg"
    ],
    "tamaños": {
      "Grande": "22cm"
    },
    "opcion_entrega":"En local o servicio express alrededor de la zona de Coyolar, Orotina a partir de la compra de más de ₡10 000",
    "tiempo_entrega":"De 3 a 5 días después de realizar su pedido",
    "reseñas_usuarios": [
      {
        "usuario": "Juan Pérez",
        "valoracion": 5,
        "comentario": "El pastel estaba delicioso y llegó a tiempo. ¡Muy recomendado!"
      },
      {
        "usuario": "Ana Martínez",
        "valoracion": 4,
        "comentario": "Muy bueno, aunque me gustaría que tuviera un poco más de relleno."
      }
    ]
 },{
  "_id": 10,
  "nombre": "Pastel de Stitch",
  "imagen_destacada": "./img/pastel-stitch.jpeg",
  "precio": 23000,
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
  "opcion_entrega":"En local o servicio express alrededor de la zona de Coyolar, Orotina a partir de la compra de más de ₡10 000",
  "tiempo_entrega":"De 3 a 5 días después de realizar su pedido",
  "reseñas_usuarios": [
    {
      "usuario": "Juan Pérez",
      "valoracion": 5,
      "comentario": "El pastel estaba delicioso y llegó a tiempo. ¡Muy recomendado!"
    },
    {
      "usuario": "Ana Martínez",
      "valoracion": 4,
      "comentario": "Muy bueno, aunque me gustaría que tuviera un poco más de relleno."
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
  "opcion_entrega":"En local o servicio express alrededor de la zona de Coyolar, Orotina a partir de la compra de más de ₡10 000",
  "tiempo_entrega":"De 3 a 5 días después de realizar su pedido",
  "reseñas_usuarios": [
    {
      "usuario": "Juan Pérez",
      "valoracion": 5,
      "comentario": "El pastel estaba delicioso y llegó a tiempo. ¡Muy recomendado!"
    },
    {
      "usuario": "Ana Martínez",
      "valoracion": 4,
      "comentario": "Muy bueno, aunque me gustaría que tuviera un poco más de relleno."
    }
  ]
},{
  "_id": 12,
  "nombre": "Serlva Negra",
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
  "opcion_entrega":"En local o servicio express alrededor de la zona de Coyolar, Orotina a partir de la compra de más de ₡10 000",
  "tiempo_entrega":"De 3 a 5 días después de realizar su pedido",
  "reseñas_usuarios": [
    {
      "usuario": "Juan Pérez",
      "valoracion": 5,
      "comentario": "El pastel estaba delicioso y llegó a tiempo. ¡Muy recomendado!"
    },
    {
      "usuario": "Ana Martínez",
      "valoracion": 4,
      "comentario": "Muy bueno, aunque me gustaría que tuviera un poco más de relleno."
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
  "opcion_entrega":"En local o servicio express alrededor de la zona de Coyolar, Orotina a partir de la compra de más de ₡10 000",
  "tiempo_entrega":"De 3 a 5 días después de realizar su pedido",
  "reseñas_usuarios": [
    {
      "usuario": "Juan Pérez",
      "valoracion": 5,
      "comentario": "El pastel estaba delicioso y llegó a tiempo. ¡Muy recomendado!"
    },
    {
      "usuario": "Ana Martínez",
      "valoracion": 4,
      "comentario": "Muy bueno, aunque me gustaría que tuviera un poco más de relleno."
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
  "opcion_entrega":"En local o servicio express alrededor de la zona de Coyolar, Orotina a partir de la compra de más de ₡10 000",
  "tiempo_entrega":"De 3 a 5 días después de realizar su pedido",
  "reseñas_usuarios": [
    {
      "usuario": "Juan Pérez",
      "valoracion": 5,
      "comentario": "El pastel estaba delicioso y llegó a tiempo. ¡Muy recomendado!"
    },
    {
      "usuario": "Ana Martínez",
      "valoracion": 4,
      "comentario": "Muy bueno, aunque me gustaría que tuviera un poco más de relleno."
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
    "https://res.cloudinary.com/oreegano/image/upload/c_fill,f_auto,g_center,h_800,q_auto,w_800/v1496867820/cjaiflsoujp1lrdwjjgg.jpg"
  ],
  "tamaños": {
    "Mediano": "18cm",
  },
  "opcion_entrega":"En local o servicio express alrededor de la zona de Coyolar, Orotina a partir de la compra de más de ₡10 000",
  "tiempo_entrega":"De 3 a 5 días después de realizar su pedido",
  "reseñas_usuarios": [
    {
      "usuario": "Juan Pérez",
      "valoracion": 5,
      "comentario": "El pastel estaba delicioso y llegó a tiempo. ¡Muy recomendado!"
    },
    {
      "usuario": "Ana Martínez",
      "valoracion": 4,
      "comentario": "Muy bueno, aunque me gustaría que tuviera un poco más de relleno."
    }
  ]
}
   ]
  