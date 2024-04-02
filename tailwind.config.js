/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-gray": "#161D2f",
        "custom-background": "#10141e",
        "custom-button": "#5a6b90",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
