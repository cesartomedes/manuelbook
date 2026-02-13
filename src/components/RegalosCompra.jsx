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
      <a
        href="https://api.whatsapp.com/send?phone=5491170614169&text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20la%20Gu%C3%ADa%20para%20vender%20Ebooks%20en%20Hotmart.%20%C2%BFPuedes%20ayudarme%3F"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex items-center justify-center gap-3 w-full bg-green-500 hover:bg-green-600 text-white font-extrabold text-lg py-4 rounded-xl shadow-lg transition-transform hover:scale-105"
      >
        {/* Ícono WhatsApp */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="w-6 h-6 fill-white"
        >
          <path d="M19.11 17.19c-.27-.13-1.59-.78-1.84-.87-.25-.09-.43-.13-.61.13-.18.27-.7.87-.86 1.05-.16.18-.32.2-.59.07-.27-.13-1.14-.42-2.17-1.34-.8-.71-1.34-1.58-1.5-1.85-.16-.27-.02-.42.12-.55.12-.12.27-.32.4-.48.13-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.13-.61-1.48-.84-2.03-.22-.53-.45-.46-.61-.47-.16-.01-.34-.01-.52-.01-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.29 0 1.34.98 2.64 1.11 2.82.13.18 1.92 2.93 4.66 4.11.65.28 1.16.45 1.56.58.66.21 1.26.18 1.74.11.53-.08 1.59-.65 1.81-1.27.22-.63.22-1.17.16-1.27-.06-.09-.25-.16-.52-.29z" />
          <path d="M16.01 2.67c-7.36 0-13.33 5.97-13.33 13.33 0 2.35.61 4.64 1.77 6.66L2.67 29.33l6.86-1.76c1.94 1.06 4.13 1.62 6.48 1.62 7.36 0 13.33-5.97 13.33-13.33S23.37 2.67 16.01 2.67zm0 24.33c-2.14 0-4.24-.58-6.07-1.67l-.43-.26-4.07 1.04 1.09-3.97-.28-.41c-1.19-1.86-1.82-4.02-1.82-6.25 0-6.44 5.24-11.67 11.67-11.67S27.67 9.04 27.67 15.48 22.44 27 16.01 27z" />
        </svg>
        Aprovecha esta oferta
      </a>
    </section>
  );
}
