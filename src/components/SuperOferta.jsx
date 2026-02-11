export default function SuperOferta() {
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
              Vende eBooks en{" "}
              <span className="text-red-500">Hotmart</span>
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
              <p className="text-gray-400 text-lg line-through">
                Precio habitual $50.000
              </p>
              <p className="text-4xl sm:text-5xl font-extrabold text-green-500">
                $23.470
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Precio de oferta por tiempo limitado
              </p>
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
              💡 <span className="text-red-500 font-extrabold">19</span> personas están viendo esta página ahora mismo
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
            <p className="mt-2 text-xs text-gray-500">
              Te respondemos personalmente · Sin bots · Sin presión 🤝
            </p>
  
            {/* MICRO COPY FINAL */}
            <p className="mt-3 text-xs text-gray-500">
              Acceso inmediato · Sin riesgos · Resultados reales
            </p>
  
          </div>
        </div>
      </section>
    );
  }
  