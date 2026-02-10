module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // Animaciones
      animation: {
        marquee: "marquee 18s linear infinite",
        rocket: "rocket 12s linear infinite",
      },
      // Keyframes
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        rocket: {
          "0%": { transform: "translateY(100vh) rotate(0deg)", opacity: 0 },
          "10%": { opacity: 1 },
          "50%": { transform: "translateY(-50vh) rotate(10deg)" },
          "100%": { transform: "translateY(-120vh) rotate(20deg)", opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};
