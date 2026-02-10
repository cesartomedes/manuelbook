export default function BonusTallerGrabado() {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
  
          {/* TÍTULO PRINCIPAL */}
          <h2 className="font-extrabold text-4xl sm:text-5xl md:text-6xl leading-tight max-w-4xl">
            Taller grabado{" "}
            <span className="font-extrabold">
              Meta Ads + Hotmart:
            </span>{" "}
            la fórmula definitiva
          </h2>
  
          {/* CONTENIDO */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
  
            {/* IMAGEN */}
            <div className="relative w-full aspect-video rounded-2xl shadow-xl overflow-hidden">
              <img
                src="/images/taller.png"
                alt="Taller grabado"
                className="w-full h-full object-cover"
              />
  
            
            </div>
  
            {/* TEXTO */}
            <div>
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                Mi objetivo es que aprendas{" "}
                <strong>sí o sí</strong>, y por eso incluyo en este
                material un taller exclusivo con todo lo que tenés
                que saber <strong>paso a paso</strong>.
              </p>
  
              {/* PRECIO */}
              <div className="mt-8">
                <p className="text-3xl font-extrabold text-red-500 line-through">
                  $50 dólares
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
  