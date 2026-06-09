/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ink: {
          50: '#f6f7f9',
          100: '#eceef2',
          200: '#d4d9e2',
          300: '#aeb7c8',
          400: '#8290a8',
          500: '#62708b',
          600: '#4d5972',
          700: '#3f485d',
          800: '#373e4f',
          900: '#1c2230',
          950: '#11151d',
        },
        accent: {
          50: '#f3f6fb',
          100: '#e4ebf5',
          200: '#c9d8ec',
          300: '#a0bbdd',
          400: '#7197ca',
          500: '#4f77b6',
          600: '#3c5e9a',
          700: '#324c7d',
          800: '#2d4269',
          900: '#293a59',
          950: '#1b243a',
        },
        gold: {
          400: '#c9a24b',
          500: '#b6892f',
          600: '#9a7026',
        },
      },
      fontFamily: {
        serif: ['"Fraunces"', 'Georgia', 'Cambria', 'serif'],
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        prose: '70ch',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) both',
        'fade-in': 'fade-in 0.9s ease both',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
