import { motion } from "framer-motion";

export default function BonosExclusivos() {
  const bonuses = [
    "Página Web de Venta para promocionar tu Ebook",
    "Clase en Vivo con el Experto",
    "Plantilla lista para tu tienda digital",
    "Checklist paso a paso para lanzar sin errores",
    "Guía rápida para vender en Hotmart sin complicaciones",
  ];

  return (
    <>
      {/* ===== SECCIÓN PRINCIPAL ===== */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 text-center relative">
          {/* Placa dorada */}
          <div
            className="relative mx-auto max-w-4xl rounded-3xl 
            bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 
            px-10 py-16 shadow-[0_30px_80px_rgba(0,0,0,0.35)] overflow-hidden"
          >
            {/* Brillo tipo Apple */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 left-0 w-1/3 h-full bg-white/30 blur-xl rotate-12"
            />

            {/* Regalo flotante izquierda */}
            <motion.img
              src={`${process.env.PUBLIC_URL}/images/gift.png`}
              alt="Regalo"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-10 -left-10 w-28 md:w-36"
            />

            {/* Regalo flotante derecha */}
            <motion.img
              src={`${process.env.PUBLIC_URL}/images/gift.png`}
              alt="Regalo"
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 3.5, repeat: Infinity }}
              className="absolute -top-10 -right-10 w-24 md:w-32"
            />

            {/* Título */}
            <h2 className="relative z-10 text-white font-extrabold text-4xl md:text-6xl tracking-wide drop-shadow-xl">
              BONOS
              <br />
              EXCLUSIVOS
            </h2>
          </div>

          {/* Texto debajo */}
          <div className="mt-14">
            <p className="text-xl md:text-2xl">Comprando el ebook accedés a</p>
            <p className="mt-2 text-2xl md:text-3xl font-extrabold">
              <span className="text-black">3 INCREÍBLES </span>
              <span className="text-orange-500">REGALOS 🎁</span>
            </p>
          </div>

          {/* ===== CARDS DE BONOS ===== */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {bonuses.map((bonus, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200 hover:scale-105 transition"
              >
                <div className="text-4xl mb-4">🎁</div>
                <p className="font-bold text-lg md:text-xl leading-snug">
                  {bonus}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="mt-12 flex justify-center">
          <a
            href="https://api.whatsapp.com/send?phone=5491170614169&text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20la%20Gu%C3%ADa%20para%20vender%20Ebooks%20en%20Hotmart.%20%C2%BFPuedes%20ayudarme%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center gap-3 
px-6 py-3 
bg-green-500 hover:bg-green-600 
text-white font-bold text-base md:text-lg 
rounded-xl shadow-lg 
transition-transform hover:scale-105"
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
            Quiero aprovechar esta oferta
          </a>
        </div>
      </section>
    </>
  );
}
