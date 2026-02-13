export default function RegalosCompra() {
  const items = [
    {
      title: "Prompts para crear tu ebook 100% con IA",
      description: "Crea tu ebook fácil y rápido, copia y pega",
      price: "$20 USD",
    },
    {
      title: "Plantillas editables para crear tu página en Hotmart",
      description: "Diseños y textos listos para usar y adaptar",
      price: "$200 USD",
    },
    {
      title: "Checklist completo para lanzar tu ebook digital",
      description: "El paso a paso para que realmente vendas",
      price: "$15 USD",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* TÍTULO */}
        <h2 className="text-center font-extrabold text-4xl sm:text-5xl md:text-6xl leading-tight">
          Con la compra de la guía te llevas{" "}
          <span className="text-green-500">GRATIS</span>
        </h2>

        {/* SECCIONES */}
        <div className="mt-16 space-y-10">
          {items.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-gray-50 rounded-2xl p-8 shadow-lg"
            >
              {/* COLUMNA TEXTO */}
              <div>
                <h3 className="font-extrabold text-2xl md:text-3xl leading-snug">
                  <strong>{item.title}</strong>
                </h3>
                <p className="mt-4 text-lg md:text-xl text-gray-700">
                  {item.description}
                </p>
              </div>

              {/* COLUMNA PRECIO */}
              <div className="text-center md:text-right">
                <p className="text-2xl md:text-3xl font-extrabold text-red-500 line-through">
                  {item.price}
                </p>
                <p className="mt-2 text-3xl md:text-4xl font-extrabold text-green-600">
                  HOY GRATIS
                </p>
              </div>
            </div>
          ))}
        </div>
        
      </div>
      
    </section>
    
  );
}
