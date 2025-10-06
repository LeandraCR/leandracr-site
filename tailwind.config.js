/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: { flutuar: 'flutuar 2s ease-in-out infinite alternate' },
      keyframes: { flutuar: { '0%': { transform: 'translateY(0px)' }, '100%': { transform: 'translateY(-30px)' } } },
    },
  },
  plugins: [],
}