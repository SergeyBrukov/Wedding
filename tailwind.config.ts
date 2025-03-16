import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "fade-down": "fadeDown 1s ease-out",
        "fade-up": "fadeUp 1s ease-out",
        "slide-in": "slideIn 1s ease-out forwards",
        "opacity-in": "opacityIn 1s ease-out forwards",
        "typing": "typing 1.5s steps(40, end) forwards",
        "blink-caret": "blink-caret 0.75s step-end infinite",
      },
      keyframes: {
        fadeDown: {
          "0%": { opacity: "0", transform: "translateY(-50px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(50px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideIn: {
          "0%": { opacity: "0", transform: "translateX(-50px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        opacityIn: {
          "0%": { opacity: "0", transform: "translateY(3rem)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        typing: {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
        "blink-caret": {
          "0%, 100%": { borderColor: "transparent" },
          "50%": { borderColor: "orange" },
        },
      },
      colors: {
        // Основні кольори
        white: "#FFFFFF",      // Білий
        milk: "#fef6e4",       // Молочний
        cream: "#f7e8d1",      // Кремовий
        ivory: "#f5f5f0",      // Слонова кістка
        paleRose: "#f9e1e6",   // Блідо-рожевий
        lightBeige: "#f1e4d2", // Світло-бежевий
        warmGray: "#d1d1d1",   // Теплий сірий
        paleYellow: "#fff9d1", // Блідо-жовтий
        silverWhite: "#f5f5f5", // Білий зі сріблястим відтінком
        warmCream: "#f6e4b8",  // Теплий кремовий

        // Другорядні кольори
        success: "#4CAF50", // Зелений для успіху
        error: "#F44336",   // Червоний для помилок
        warning: "#FF9800", // Оранжевий для попереджень
      },

      // FONTS
      fontFamily: {
        greatVibes: ["var(--font-great-vibes)"],
        avenir: ["var(--font-avenir)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
