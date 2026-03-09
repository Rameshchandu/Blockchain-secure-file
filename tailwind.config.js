/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#050a0e', s1: '#0d1821', s2: '#142133', bd: '#1e3a52',
        teal: '#00d4aa', 'teal-d': '#00a882',
        blue: '#0096ff', amber: '#ffb800', danger: '#ff4757',
      },
      fontFamily: {
        mono: ['"Space Mono"', 'monospace'],
        sans: ['"DM Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
