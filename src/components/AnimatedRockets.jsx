export function AnimatedRockets() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Se pueden agregar varios cohetes con animaciones distintas */}
      <RocketAnimation left="10%" delay="0s" duration="12s" />
      <RocketAnimation left="50%" delay="3s" duration="15s" />
      <RocketAnimation left="80%" delay="6s" duration="18s" />
    </div>
  );
}

function RocketAnimation({ left, delay, duration }) {
  return (
    <img
      src="/images/rockets.gif" // icono pequeño de cohete
      alt="Cohete"
      className={`absolute w-6 sm:w-8 animate-rocket`}
      style={{
        left,
        animationDelay: delay,
        animationDuration: duration,
      }}
    />
  );
}
