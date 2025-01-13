/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: true,
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      animation: {
      blink: 'blink 1s steps(1, start) infinite',
      'spin-slow': 'spin 3s linear infinite',
      pulse: 'pulse 1.5s ease-in-out infinite',
      'pulse-slow': 'pulse 2s ease-in-out infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
        pulse: {
          '0%, 100%': { transform: 'scale(1)', opacity: 1 },
          '50%': { transform: 'scale(1.3)', opacity: 0.8 },
        },
      },
    },
  },
  plugins: [],
}

