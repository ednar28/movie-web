import { addDynamicIconSelectors } from '@iconify/tailwind'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      aspectRatio: {
        banner: '5 / 1.8',
        promotion: '3 / 1',
        'movie-medium': '4 / 2',
      },
      colors: {
        primary: {
          default: '#e91e63',
          50: '#fef1f7',
          100: '#fee5f0',
          200: '#fecce3',
          300: '#ffa2cb',
          400: '#fe68a6',
          500: '#f83c85',
          600: '#e91e63',
          700: '#cb0b47',
          800: '#a70d3b',
          900: '#8b1034',
          950: '#55021a',
        },
      },
    },
  },
  plugins: [addDynamicIconSelectors()],
}
