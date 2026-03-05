import { useRef, useState, useEffect } from "react";
import Home from "./Home";

export default function VslLanding() {
  const videoRef = useRef(null);
  const [showHome, setShowHome] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);

  // Bloquear scroll mientras la landing no aparece
  useEffect(() => {
    document.body.style.overflow = showHome ? "auto" : "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showHome]);

  // Actualizar barra de progreso y detectar final
  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video) return;

    const currentProgress = (video.currentTime / video.duration) * 100;
    setProgress(currentProgress);

    if (currentProgress >= 100) {
      setShowHome(true);
    }
  };

  // Activar / silenciar sonido
  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);

    // Si estaba silenciado y el usuario activa sonido, reproduce inmediatamente
    if (!video.paused) return;
    video.play().catch(() => {});
  };

  // Permitir click en barra de progreso para saltar
  const handleProgressClick = (e) => {
    const video = videoRef.current;
    if (!video) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newTime = (clickX / rect.width) * video.duration;
    video.currentTime = newTime;
  };

  return (
    <div className="relative w-full min-h-screen bg-black text-white">
      {/* HERO: título + video */}
      <section className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 md:px-10 text-center">
        {/* TÍTULO ARRIBA */}
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold leading-tight max-w-4xl mb-6">
          Cómo Cientos De Personas Comunes Están Usando La IA Para Crear Y
          Vender Productos Digitales Por Ellos A Través de WhatsApp Todos Los
          Días 👇🏼
        </h1>

        {/* VIDEO */}
        <div className="w-full max-w-4xl relative">
          <video
            ref={videoRef}
            src="/videos/manuel.mp4"
            className="w-full h-auto aspect-video rounded-2xl shadow-2xl"
            autoPlay
            muted
            playsInline
            onTimeUpdate={handleTimeUpdate}
          />

          {/* BARRA DE PROGRESO PERSONALIZADA */}
          <div
            className="absolute bottom-2 left-0 w-full h-2 bg-gray-300 rounded cursor-pointer"
            onClick={handleProgressClick}
          >
            <div
              className="h-2 bg-green-500 rounded"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* BOTÓN PARA ACTIVAR/MUTEAR SONIDO */}
        <button
          onClick={toggleSound}
          className="mt-4 px-6 py-3 bg-white text-black font-semibold rounded-full hover:scale-105 transition"
        >
          {isMuted ? "Activar sonido" : "Silenciar"}
        </button>
      </section>

      {/* LANDING QUE APARECE AL TERMINAR */}
      <div
        className={`absolute top-0 left-0 w-full transition-all duration-1000 ease-in-out ${
          showHome ? "opacity-100 z-20" : "opacity-0 -z-10 pointer-events-none"
        }`}
      >
        <Home />
      </div>
    </div>
  );
}
