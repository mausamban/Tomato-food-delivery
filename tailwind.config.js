/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        header_img: "url('/src/assets/frontend_assets/header_img.png')",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        fadeIn: "fadeIn 1s",
        fadeApp: "fadeIn 3s ease-in-out",
      },
    },
  },
  plugins: [],
};
