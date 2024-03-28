/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-gray": "#161D2f",
        "custom-background": "#10141e",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
