import { useEffect, useState } from "react";

export default function TimerBar() {
  // 20 horas en segundos
  const INITIAL_TIME = 20 * 60 * 60;

  const [timeLeft, setTimeLeft] = useState(INITIAL_TIME);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
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
