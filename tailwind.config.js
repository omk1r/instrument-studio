/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient':
          'linear-gradient(to bottom, rgba(33, 33, 33, 1) 0%, rgba(15, 15, 15, 0) 100%)',
      },
      fontFamily: {
        instrument: ['Instrument Sans', 'sans-serif'],
        instrumentSerif: ['Instrument Serif', 'sans-serif'],
      },
      keyframes: {
        flying: {
          '0%': { transform: 'translate(-58%, 65%) rotate(0deg)' }, // Start position
          '16.67%': { transform: 'translate(110%, 0) rotate(-50deg)' }, // 1st phase of the movement
          '33.33%': { transform: 'translate(110%, -5%) rotate(-50deg)' }, // Pause for 2 seconds
          '50%': { transform: 'translate(120%, 80%) rotate(0deg)' }, // 2nd phase of the movement
          '66.67%': { transform: 'translate(120%, 75%) rotate(0deg)' }, // Pause for 2 seconds
          '75%': { transform: 'translate(-90%, 0) rotate(-50deg)' }, // 3rd phase of the movement
          '83.33%': { transform: 'translate(-90%, -5%) rotate(-50deg)' }, // Pause for 2 seconds
          '100%': { transform: 'translate(-58%, 65%) rotate(0deg)' }, // Back to start
        },
        slideRight: {
          '0%': { transform: 'translateX(0)', opacity: '1' },
          '50%': { transform: 'translateX(100%)', opacity: '0' },
          '51%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideText: {
          '0%': { transform: 'translateX(50%)' },
          '50%': { transform: 'translateX(-50%)' }, // Move out
          '100%': { transform: 'translateX(50%)' }, // Stay out
        },
      },
      animation: {
        flying: 'flying 12s ease-in-out infinite', //
        slideRight: 'slideRight 0.8s linear',
        slideText: 'slideText 20s linear infinite',
      },
    },
  },
  plugins: [],
};
