import { useState, useEffect } from "react";

export default function SuperOferta() {
  // Array de números ordenados
  const numeros = [
    32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60,
    62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86, 88, 90,
    92, 94, 96, 98, 100, 102, 104, 106, 108, 110, 112, 114, 116,
    118, 120, 122, 124, 126, 128, 130, 132, 134, 136, 138, 140,
    142, 144, 146, 148, 150, 152, 154, 156, 158, 160, 162, 164,
    166, 168, 170, 172, 174, 176, 178, 180, 182, 184, 186, 188,
    190, 192, 194, 196, 198, 200, 202, 204, 206, 208, 210, 212,
    214, 216, 218, 220, 222, 224, 226, 228, 230, 232, 234, 236,
    238, 240, 242, 244, 246, 248, 250, 252, 254, 256, 258, 260,
    262, 264, 266, 268, 270, 272, 274, 276, 278, 280, 282, 284,
    286, 288, 290, 292, 294, 296, 298, 300, 302, 304, 306, 308,
    310, 312, 314, 316, 318, 320, 322, 324, 326, 328, 330, 332,
    334, 336, 338, 340, 342, 344, 345
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % numeros.length);
    }, 2000); // Cambia cada 2 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-xl mx-auto px-4">
        {/* CARD */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 text-center relative">
          {/* BADGE SUPER OFERTA */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-500 text-white font-extrabold px-6 py-2 rounded-full text-sm shadow-lg animate-pulse">
            🚀 Súper Oferta · 50% OFF
          </div>

          {/* TÍTULO */}
          <h2 className="mt-6 font-extrabold text-3xl sm:text-4xl leading-tight">
            Vende eBooks en <span className="text-red-500">Hotmart</span>
            <span className="block text-gray-900">
              La guía definitiva para vender todos los días
            </span>
          </h2>

          {/* SUBTÍTULO */}
          <p className="mt-3 text-lg text-gray-600">
            Aprende el sistema probado que usan emprendedores reales para
            <strong className="text-black"> generar ingresos digitales</strong>
          </p>

          {/* PRECIO */}
          <div className="mt-6">
            <p className="text-gray-400 text-lg line-through">Precio habitual $300,00</p>
            <p className="text-4xl sm:text-5xl font-extrabold text-green-500">$150,00</p>
            <p className="text-sm text-gray-500 mt-1">Precio de oferta por tiempo limitado</p>
          </div>

          {/* RATING */}
          <div className="mt-4 flex justify-center items-center gap-2 text-yellow-400 text-lg">
            ★★★★★
            <span className="text-gray-700 text-sm font-medium">
              4.8/5 de +1.300 emprendedores
            </span>
          </div>

          {/* INFO */}
          <div className="mt-6 space-y-3 text-left text-gray-700 font-medium">
            <p>⏰ <strong>DESCUENTO ESPECIAL POR TIEMPO LIMITADO</strong></p>
            <p>📘 EBOOK DIGITAL – DESCARGA INMEDIATA</p>
            <p>📩 ACCESO AUTOMÁTICO AL FINALIZAR LA COMPRA</p>
            <p>🔒 PAGO 100% SEGURO CON MERCADO PAGO</p>
          </div>

          {/* PERSONAS VIENDO */}
          <div className="mt-6 flex justify-center items-center gap-2 text-sm font-semibold text-gray-700">
            💡{" "}
            <span className="text-red-500 font-extrabold animate-pulse">{numeros[index]}</span>{" "}
            personas están viendo esta página ahora mismo
          </div>

          {/* BONIFICACIÓN */}
          <div className="mt-3 text-sm font-bold text-red-500 animate-pulse">
            🔥 BONIFICACIÓN ACTIVA SOLO HOY
          </div>

          {/* CTA WHATSAPP */}
          <a
            href="https://api.whatsapp.com/send?phone=5491170614169&text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20la%20Gu%C3%ADa%20para%20vender%20Ebooks%20en%20Hotmart.%20%C2%BFPuedes%20ayudarme%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center gap-3 w-full bg-green-500 hover:bg-green-600 text-white font-extrabold text-lg py-4 rounded-xl shadow-lg transition-transform hover:scale-105"
          >
            💬 Quiero más información por WhatsApp
          </a>

          {/* TIP PRO – CONFIANZA */}
          <p className="mt-2 text-xs text-gray-500">Te respondemos personalmente · Sin bots · Sin presión 🤝</p>

          {/* MICRO COPY FINAL */}
          <p className="mt-3 text-xs text-gray-500">Acceso inmediato · Sin riesgos · Resultados reales</p>
        </div>
      </div>
    </section>
  );
}
