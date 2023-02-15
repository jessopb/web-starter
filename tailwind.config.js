/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    extend: {
      colors: {
        primary: {
          100: '#F1F0FF',
          200: '#CDC9FF',
          300: '#C3BEFF',
          400: '#BBB5FF',
          500: '#978EFF',
          600: '#7D72FF',
          700: '#1200E7',
          800: '#0D00A1',
          900: '#07005B',
        },
      },
      fontFamily: {
        sans: ['"Poppins"', 'sans-serif'],
        serif: ['"Display"', 'serif'],
      }
    },
  },
  plugins: [],
}
