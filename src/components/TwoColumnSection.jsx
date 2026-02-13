export default function TwoColumnSection() {
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Columna Izquierda */}
        <div className="text-center md:text-left">
          <h2 className="text-black font-extrabold leading-[1.5] text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            La fórmula paso a paso para{" "}
            <span className="text-green-500">lograr Ventas</span>{" "}
            <span className="text-orange-500">en Hotmart</span>{" "}
            <span className="text-green-500">en automático</span>
          </h2>

          {/* Imagen debajo del título */}
          <div className="mt-6">
            <img
              src={`${process.env.PUBLIC_URL}/images/manuel.PNG`}
              alt="Manuel vendiendo su libro"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Columna Derecha */}
        <div className="flex flex-col items-center">
          {/* Imagen de tiro al blanco centrada */}
          <div className="flex justify-center -mt-10 md:-mt-16">
            <img
              src={`${process.env.PUBLIC_URL}/images/tiro-al-blanco.png`}
              alt="Tiro al blanco"
              className="w-48 md:w-64 h-auto"
            />
          </div>

          {/* Texto debajo con saltos de línea */}
          <p className="mt-6 text-black font-medium text-lg sm:text-xl md:text-4xl leading-[1.5]">
            Esta clase es tu <br />
            <strong>mapa para vender</strong> <br />
            en <strong>piloto</strong> <br /> <strong>automático</strong> tus{" "}
            <br />
            conocimientos, sin <br />
            complicarte.
          </p>
        </div>
      </div>
    </section>
  );
}
