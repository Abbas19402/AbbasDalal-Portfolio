/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './Components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './PageComponents/**/*.{js,ts,jsx,tsx}',
    './Layouts/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        }
      },
      animation: {
        'waving-hand': 'wave 2s linear infinite',
        'cursorPing': 'cursor 800ms infinite alternate ease-in-out',
        'cursorPingBefore' : 'cursorBefore 800ms infinite alternate ease-in-out'
      },
    },
  },
  plugins: [],
}
