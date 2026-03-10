// components/Hero.jsx
import { useState, useEffect } from "react";
import { client } from "../sanityClient";
export default function Hero() {
  const [heroData, setHeroData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Obtener datos de Sanity
    const fetchHeroData = async () => {
      try {
        const data = await client.fetch(`
          *[_type == "hero"][0] {
            tituloPrincipal,
            subtitulo,
            textoBoton,
            "imagenUrl": imagenFondo.asset->url
          }
        `);
        setHeroData(data);
      } catch (error) {
        console.error("Error fetching from Sanity:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHeroData();
  }, []);

  // Si está cargando o no hay datos, muestra lo que ya tenías
  if (loading || !heroData) {
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
          <h1 className="text-black font-extrabold leading-[1.15] text-[30px] sm:text-4xl md:text-5xl lg:text-6xl">
            Genera tus primeros{" "}
            <span className="text-black">$1,000 dólares</span> creando y
            vendiendo tu ebook digital en solo{" "}
            <span className="underline decoration-green-500 decoration-4">
              7 días.
            </span>
          </h1>

          <p className="mt-5 text-black font-semibold text-[14px] sm:text-base md:text-lg leading-relaxed">
            Transforma tu conocimiento en ingresos reales y empieza a construir
            tu negocio digital desde cero, sin complicaciones.
          </p>

          <div className="mt-10 flex justify-center">
            <div className="w-full max-w-sm md:max-w-md rounded-xl overflow-hidden shadow-lg bg-gray-100">
              <img
                src={`${process.env.PUBLIC_URL}/images/ebook-previews.jpeg`}
                alt="Vista previa del ebook"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Si hay datos de Sanity, los mostramos
  return (
    <section className="relative w-full overflow-hidden">
      {/* Fondo con cohetes - Ahora usa la imagen de Sanity si existe */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${
            heroData.imagenUrl ||
            `${process.env.PUBLIC_URL}/images/rockets-bg.jpg`
          })`,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/85" />

      {/* Contenido */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 py-12 md:py-20 text-center">
        {/* TÍTULO - Ahora editable desde Sanity */}
        <h1 className="text-black font-extrabold leading-[1.15] text-[30px] sm:text-4xl md:text-5xl lg:text-6xl">
          {heroData.tituloPrincipal ||
            "Genera tus primeros $1,000 dólares creando y vendiendo tu ebook digital en solo 7 días."}
        </h1>

        {/* SUBTÍTULO - Ahora editable desde Sanity */}
        <p className="mt-5 text-black font-semibold text-[14px] sm:text-base md:text-lg leading-relaxed">
          {heroData.subtitulo ||
            "Transforma tu conocimiento en ingresos reales y empieza a construir tu negocio digital desde cero, sin complicaciones."}
        </p>

        {/* IMAGEN - Ahora con opción de imagen desde Sanity */}
        <div className="mt-10 flex justify-center">
          <div className="w-full max-w-sm md:max-w-md rounded-xl overflow-hidden shadow-lg bg-gray-100">
            <img
              src={
                heroData.imagenUrl ||
                `${process.env.PUBLIC_URL}/images/ebook-previews.jpeg`
              }
              alt="Vista previa del ebook"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* BOTÓN - Agregamos el botón editable */}
        {heroData.textoBoton && (
          <div className="mt-8">
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg text-lg">
              {heroData.textoBoton}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
