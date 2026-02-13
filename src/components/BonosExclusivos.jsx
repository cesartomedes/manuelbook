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
      </section>
    </>
  );
}
