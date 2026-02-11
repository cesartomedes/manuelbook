import { useEffect, useState } from "react";

export default function TimerBar() {
  const HOURS = 20;
  const DURATION = HOURS * 60 * 60 * 1000; // en milisegundos
  const STORAGE_KEY = "offer_end_time";

  const getRemainingTime = () => {
    const now = new Date().getTime();
    let endTime = localStorage.getItem(STORAGE_KEY);

    if (!endTime) {
      // Primera vez que entra
      endTime = now + DURATION;
      localStorage.setItem(STORAGE_KEY, endTime);
    }

    const remaining = Math.floor((endTime - now) / 1000);

    if (remaining <= 0) {
      // Reiniciar automáticamente cuando llegue a 0
      const newEndTime = now + DURATION;
      localStorage.setItem(STORAGE_KEY, newEndTime);
      return Math.floor(DURATION / 1000);
    }

    return remaining;
  };

  const [timeLeft, setTimeLeft] = useState(getRemainingTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getRemainingTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds) => {
    const h = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    return `${h}:${m}:${s}`;
  };

  return (
    <div className="bg-gradient-to-r from-green-400 to-green-600 text-green-950 text-center py-3 px-2 font-extrabold tracking-wide text-sm md:text-base">
      🔥 OFERTA ACTIVA POR TIEMPO LIMITADO{" "}
      <span className="bg-white text-green-700 px-3 py-1 mx-2 rounded-md font-mono shadow-sm">
        {formatTime(timeLeft)}
      </span>
      🔥
    </div>
  );
}
