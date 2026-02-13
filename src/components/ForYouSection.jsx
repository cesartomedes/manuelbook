import { AnimatedRockets } from "./AnimatedRockets";
export default function ForYouSection() {
  return (
    <section className="relative w-full overflow-hidden py-12 md:py-20">
      {/* Fondo estático */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/rockets2.jpg)`,
        }}
      />

      {/* Overlay para mejorar contraste */}
      <div className="absolute inset-0 bg-white/85" />

      {/* Cohetes animados */}
      <AnimatedRockets />

      {/* Contenido */}
      <div className="relative z-10 max-w-5xl mx-auto px-4">
        {/* TÍTULO */}
        <h2 className="text-black font-extrabold text-center leading-tight text-[28px] sm:text-4xl md:text-5xl">
          ESTO ES PARA TI SI...
        </h2>

        {/* LISTA */}
        <div className="mt-10 space-y-5">
          <CheckItem>
            Estás cansada/o de cursos que dan vueltas y{" "}
            <strong>quieres una guía práctica, clara y directa</strong> que
            puedas aplicar hoy mismo.
          </CheckItem>
          <CheckItem>
            Eres emprendedora/emprendedor, haces todo sola/o y{" "}
            <strong>necesitás una forma simple de vender</strong> sin sumar más
            tareas a tu rutina diaria.
          </CheckItem>
          <CheckItem>
            Quieres lanzar tu tienda digital, automatizar tus ventas y{" "}
            <strong>vender tu ebook 24/7</strong> sin depender de Instagram o
            WhatsApp.
          </CheckItem>
          <CheckItem>
            <strong>Tienes un ebook o quieres crear uno</strong>, pero no sabés
            cómo venderlo ni por dónde empezar sin perder tiempo ni dinero.
          </CheckItem>

          <CheckItem>
            Sientes que podrías{" "}
            <strong>generar ingresos con lo que sabes</strong>, pero la parte
            técnica te frena (tienda, pagos, automatización).
          </CheckItem>
        </div>
      </div>
    </section>
  );
}

function CheckItem({ children }) {
  return (
    <div className="flex items-start gap-4 bg-green-100 rounded-xl p-4 md:p-5">
      {/* CHECK */}
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={3}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>

      {/* TEXTO */}
      <p className="text-black font-medium text-sm sm:text-base leading-relaxed">
        {children}
      </p>
    </div>
  );
}
