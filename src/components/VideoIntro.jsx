import { useEffect, useRef, useState } from "react";

export default function VideoIntro() {
  const videoRef = useRef(null);
  const [showContent, setShowContent] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    document.body.style.overflow = showContent ? "auto" : "hidden";
  }, [showContent]);

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video) return;

    const progress = video.currentTime / video.duration;

    if (progress >= 0.85) {
      setShowContent(true);
    }
  };

  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  return (
    <div className="relative w-full h-screen bg-black text-white overflow-hidden">
      {/* VIDEO */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src="/video/vsl.mp4" // coloca tu ruta aquí
        autoPlay
        muted
        playsInline
        onTimeUpdate={handleTimeUpdate}
      />

      {/* OVERLAY OSCURO */}
      <div className="absolute inset-0 bg-black/40" />

      {/* CONTENIDO ENCIMA DEL VIDEO */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold max-w-4xl leading-tight">
          Cómo Cientos De Personas Comunes Están Usando La IA Para Crear Y
          Vender Productos Digitales Por Ellos A Través de WhatsApp Todos Los
          Días 👇🏼
        </h1>

        <button
          onClick={toggleSound}
          className="mt-6 px-6 py-3 bg-white text-black font-semibold rounded-full hover:scale-105 transition"
        >
          {isMuted ? "Activar sonido" : "Silenciar"}
        </button>
      </div>

      {/* RESTO DEL CONTENIDO */}
      <div
        className={`absolute top-full w-full bg-white text-black transition-all duration-1000 ${
          showContent ? "translate-y-[-100vh]" : ""
        }`}
      >
        <section className="min-h-screen flex items-center justify-center">
          <h2 className="text-4xl font-bold">
            Aquí comienza el resto de la página 👇
          </h2>
        </section>
      </div>
    </div>
  );
}