// schemaTypes/documents/forYou.ts
export default {
    name: 'forYou',
    title: 'Sección "Para Quién"',
    type: 'document',
    fields: [
      {
        name: 'titulo',
        title: 'Título',
        type: 'string',
        description: 'Ej: "¿Para quién es este ebook?"'
      },
      {
        name: 'items',
        title: 'Items',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              { name: 'icono', title: 'Icono (emoji)', type: 'string' },
              { name: 'titulo', title: 'Título', type: 'string' },
              { name: 'descripcion', title: 'Descripción', type: 'text' }
            ]
          }
        ]
      }
    ]
  }