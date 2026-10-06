import animate from 'tailwindcss-animate'
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: { bg: '#0A0A0A', surface: '#111111', ink: '#F5F5F5', muted: '#858585', line: '#1E1E1E', accent1: '#89AACC', accent2: '#4E85BF' },
      fontFamily: { body: ['Inter', 'system-ui', 'sans-serif'], display: ['"Instrument Serif"', 'Georgia', 'serif'] },
      backgroundImage: {
        accent: 'linear-gradient(90deg,#89AACC 0%,#4E85BF 100%)',
        'accent-rev': 'linear-gradient(270deg,#89AACC 0%,#4E85BF 100%)'
      }
    }
  },
  plugins: [animate]
}
