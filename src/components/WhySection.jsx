import { useEffect, useState } from "react";

export default function WhySection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const items = [
    "Incluye bonos exclusivos para potenciar tu venta y promoción",
    "Convierte tu conocimiento en ingresos reales",
    "Crea y automatiza tu tienda digital paso a paso",
    "Aprende a vender tu ebook en Hotmart sin complicaciones técnicas",
    "Ideal para principiantes",
  ];

  return (
    <section className="bg-gray-50 py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4">

        {/* Bloque superior: dos columnas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          
          {/* Columna izquierda: tiro al blanco */}
          <div className="flex justify-center md:justify-start -mt-10 md:-mt-16">
            <img
              src={`${process.env.PUBLIC_URL}/images/tiro-al-blanco.png`}
              alt="Tiro al blanco"
              className="w-48 md:w-64 h-auto"
            />
          </div>

          {/* Columna derecha: título */}
          <div className="text-center md:text-left">
            <h2 className="text-black font-extrabold leading-[1.3] text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              ¿Por qué deberías <br />
              <span>Vender tu Primer eBook en </span>
              <span className="text-orange-500">Hotmart?</span>
            </h2>
          </div>
        </div>

        {/* Bloque inferior: items con color */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
          {items.map((item, index) => (
            <div
              key={index}
              className={`bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl p-6 shadow-xl text-center font-bold text-white text-lg sm:text-xl md:text-2xl leading-[1.5] transform transition-all duration-700 ease-out hover:scale-105
                ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
              `}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
