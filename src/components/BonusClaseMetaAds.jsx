export default function BonusClaseMetaAds() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* TÍTULO */}
        <h2 className="font-extrabold text-4xl sm:text-5xl md:text-6xl leading-tight max-w-5xl">
          Clase completa donde te enseño a hacer{" "}
          <span className="block font-extrabold">
            Campañas de venta en Meta Ads
          </span>
        </h2>

        {/* CONTENIDO */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* IMAGEN / VIDEO */}
          <div className="relative w-full aspect-video rounded-2xl shadow-xl overflow-hidden bg-gray-100">
            {/* Tu imagen va acá */}
            <img
              src={`${process.env.PUBLIC_URL}/images/Imagen19.png`}
              alt="Clase Meta Ads"
              className="w-full h-full object-cover"
            />

            {/* Badge GRATIS */}
            <div className="absolute bottom-4 right-4 bg-red-500 text-white font-extrabold px-5 py-3 rotate-6 shadow-lg text-lg">
              GRATIS
            </div>
          </div>

          {/* TEXTO */}
          <div>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              Mi objetivo es que aprendas <strong>sí o sí</strong>, y por eso
              incluyo en este material una clase exclusiva con{" "}
              <strong>todo lo que tenés que saber</strong> para crear campañas
              de venta paso a paso.
            </p>

            {/* PRECIO */}
            <div className="mt-8">
              <p className="text-3xl font-extrabold text-red-500 line-through">
                $100 USD
              </p>
              <p className="text-4xl md:text-5xl font-extrabold text-green-500 mt-2">
                HOY GRATIS
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
