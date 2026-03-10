// hero.ts - Sección principal de la landing
export default {
    name: 'hero',
    title: 'Hero Principal',
    type: 'document',
    fields: [
      {
        name: 'tituloPrincipal',
        title: 'Título Principal',
        type: 'string',
        description: 'Ej: "Aprende a Vender tu Primer Ebook en 30 Días"'
      },
      {
        name: 'subtitulo',
        title: 'Subtítulo',
        type: 'text',
        description: 'Texto de apoyo debajo del título'
      },
      {
        name: 'imagenFondo',
        title: 'Imagen de Fondo',
        type: 'image',
        options: { hotspot: true }
      },
      {
        name: 'textoBoton',
        title: 'Texto del Botón',
        type: 'string',
        description: 'Ej: "COMPRAR AHORA" o "QUIERO MI EBOOK"'
      }
    ]
  }