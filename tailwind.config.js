/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial-top': 'radial-gradient(ellipse 150% 100% at top center, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

