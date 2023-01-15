/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: { 
    screens: {
      'mini': '500px',
      // => @media (min-width: 500px) { ... }
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      animation: {
        ping: 'ping 0.7s cubic-bezier(0, 0, 0.3, 0.6) infinite',
      },
    },
    fontFamily: {
      signature: ["Great Vibes"],
      numbers: ["Poppins"]
    }
  },
  plugins: [],
}