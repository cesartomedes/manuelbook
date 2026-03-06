import { useRef, useState, useEffect } from "react";
import Home from "./Home";

export default function VslLanding() {
  const videoRef = useRef(null);
  const offerRef = useRef(null);

  const [showHome, setShowHome] = useState(false);
  const [showOfferButton, setShowOfferButton] = useState(false);
  const [showPageUnderVideo, setShowPageUnderVideo] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const [progress, setProgress] = useState(0);
  const [freezeBar, setFreezeBar] = useState(false);

  const [timeLeft, setTimeLeft] = useState(900); // 15 minutos

  // Bloquear scroll al inicio
  useEffect(() => {
    document.body.style.overflow = showPageUnderVideo ? "auto" : "hidden";
  }, [showPageUnderVideo]);

  // Contador regresivo
  useEffect(() => {
    if (!showOfferButton) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [showOfferButton]);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video) return;

    const currentTime = video.currentTime;
    const duration = video.duration;

    const realProgress = currentTime / duration;

    // 🔥 PROGRESO PSICOLÓGICO
    let fakeProgress = 0;

    if (realProgress < 0.2) {
      // 20% del video = 60% barra
      fakeProgress = realProgress * 300;
    } else if (realProgress < 0.4) {
      // llega rápido a 85%
      fakeProgress = 60 + (realProgress - 0.2) * 125;
    } else if (realProgress < 0.6) {
      // sube a 93%
      fakeProgress = 85 + (realProgress - 0.4) * 40;
    } else {
      // casi terminado
      fakeProgress = 93 + (realProgress - 0.6) * 10;
    }

    if (fakeProgress > 100) fakeProgress = 100;

    // congelar barra en 96%
    if (fakeProgress >= 96 && !freezeBar) {
      setFreezeBar(true);
      setProgress(96);
    } else if (!freezeBar) {
      setProgress(fakeProgress);
    }

    // 🔥 minuto 6:55
    if (currentTime >= 415 && !showOfferButton) {
      setShowOfferButton(true);
      setShowPageUnderVideo(true);

      setTimeout(() => {
        offerRef.current?.scrollIntoView({
          behavior: "smooth",
        });
      }, 1000);
    }

    // 🔥 final del video
    if (realProgress >= 1) {
      setShowHome(true);
    }
  };

  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);

    if (!video.paused) return;
    video.play().catch(() => {});
  };

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
      {/* HERO */}
      {!showHome && (
        <section className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold max-w-4xl mb-6">
            Cómo Cientos De Personas Comunes Están Usando La IA Para Crear Y
            Vender Productos Digitales Por Ellos A Través de WhatsApp Todos Los
            Días 👇🏼
          </h1>

          <div className="w-full max-w-4xl relative">
            <video
              ref={videoRef}
              src={`${process.env.PUBLIC_URL}/videos/manuel.mp4`}
              className="w-full aspect-video rounded-2xl shadow-2xl"
              autoPlay
              muted
              playsInline
              onTimeUpdate={handleTimeUpdate}
            />

            {/* BARRA DE PROGRESO */}
            <div
              className="absolute bottom-2 left-0 w-full h-2 bg-gray-300 rounded cursor-pointer"
              onClick={handleProgressClick}
            >
              <div
                className="h-2 bg-green-500 rounded transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* BOTÓN OFERTA */}
            {showOfferButton && (
              <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 animate-bounce">
                <button
                  onClick={() =>
                    offerRef.current?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="bg-green-500 hover:bg-green-600 text-white font-extrabold px-10 py-4 rounded-xl text-xl shadow-xl"
                >
                  APROVECHA ESTA OFERTA POR TAN SOLO $6
                </button>
              </div>
            )}
          </div>

          {/* SONIDO */}
          <button
            onClick={toggleSound}
            className="mt-4 px-6 py-3 bg-white text-black font-semibold rounded-full"
          >
            {isMuted ? "Activar sonido" : "Silenciar"}
          </button>
        </section>
      )}

      {/* LANDING */}
      {showPageUnderVideo && (
        <div className="bg-white text-black pt-20">
          {/* BLOQUE OFERTA */}
          <div
            ref={offerRef}
            className="max-w-4xl mx-auto text-center py-20 px-6"
          >
            <h2 className="text-4xl font-extrabold mb-6">
              Oferta especial disponible ahora
            </h2>

            <p className="text-xl mb-6">Esta oferta desaparece en:</p>

            <div className="text-4xl font-bold text-red-600 mb-8">
              {formatTime(timeLeft)}
            </div>

            <button className="bg-green-500 hover:bg-green-600 text-white text-2xl font-extrabold px-12 py-5 rounded-xl shadow-xl">
              COMPRAR AHORA POR $6
            </button>
          </div>

          <Home />
        </div>
      )}

      {/* BOTÓN FLOTANTE */}
      {showOfferButton && (
        <div className="fixed bottom-6 right-6 z-50">
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3 rounded-full shadow-xl">
            Comprar $6
          </button>
        </div>
      )}
    </div>
  );
}
