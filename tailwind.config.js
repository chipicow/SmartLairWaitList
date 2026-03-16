/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // SmartLair theme - warm dragon/fire palette
        lair: {
          black: '#0D0D0F',
          charcoal: '#1A1A1D',
          smoke: '#2D2D32',
          ash: '#4A4A52',
          ember: '#E85D04',
          flame: '#F48C06',
          gold: '#FFBA08',
          cream: '#FFF8F0',
          dragon: '#DC2F02',
        }
      },
      fontFamily: {
        display: ['Clash Display', 'system-ui', 'sans-serif'],
        body: ['Satoshi', 'system-ui', 'sans-serif'],
      },
      animation: {
        'embers': 'embers 2s ease-in-out infinite',
        'peek': 'peek 0.5s ease-out',
        'fire-spark': 'fireSpark 0.6s ease-out',
      },
      keyframes: {
        embers: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        peek: {
          '0%': { transform: 'translateY(20px) scale(0.9)', opacity: '0' },
          '100%': { transform: 'translateY(0) scale(1)', opacity: '1' },
        },
        fireSpark: {
          '0%': { transform: 'scale(0)', opacity: '0' },
          '50%': { transform: 'scale(1.2)', opacity: '1' },
          '100%': { transform: 'scale(1)', opacity: '0.8' },
        },
      },
    },
  },
  plugins: [],
}
