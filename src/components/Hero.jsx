export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Fondo con cohetes */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/rockets-bg.jpg)`,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/85" />

      {/* Contenido */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 py-12 md:py-20 text-center">
        {/* TÍTULO */}
        <h1
          className="
    text-black font-extrabold leading-[1.15]
    text-[30px]
    sm:text-4xl
    md:text-5xl
    lg:text-6xl
  "
        >
          Genera tus primeros <span className="text-black">$1,000 dólares</span>{" "}
          creando y vendiendo tu ebook digital en solo{" "}
          <span className="underline decoration-green-500 decoration-4">
            7 días.
          </span>
        </h1>

        {/* SUBTÍTULO */}
        <p
          className="
              mt-5 text-black font-semibold
              text-[14px]
              sm:text-base
              md:text-lg
              leading-relaxed
            "
        >
          Transforma tu conocimiento en ingresos reales y empieza a construir tu
          negocio digital desde cero, sin complicaciones.
        </p>

        {/* IMAGEN */}
        <div className="mt-10 flex justify-center">
          <div className="w-full max-w-sm md:max-w-md rounded-xl overflow-hidden shadow-lg bg-gray-100">
            <img
              src="/images/ebook-previews.jpeg"
              alt="Vista previa del ebook"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
