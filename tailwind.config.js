/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          50: 'hsl(173, 80%, 94%)',
          100: 'hsl(173, 72%, 88%)',
          200: 'hsl(174, 68%, 77%)',
          300: 'hsl(174, 63%, 65%)',
          400: 'hsl(174, 63%, 50%)',
          500: 'hsl(173, 80%, 40%)', // teal-500
          600: 'hsl(174, 71%, 32%)', // teal-600
          700: 'hsl(175, 64%, 24%)', // teal-700
          800: 'hsl(176, 56%, 20%)',
          900: 'hsl(176, 48%, 16%)',
          950: 'hsl(178, 47%, 10%)',
        },
        secondary: {
          50: 'hsl(204, 100%, 97%)',
          100: 'hsl(204, 94%, 94%)',
          200: 'hsl(201, 94%, 86%)',
          300: 'hsl(199, 95%, 74%)',
          400: 'hsl(198, 93%, 60%)',
          500: 'hsl(199, 89%, 48%)',
          600: 'hsl(199, 93%, 39%)', // sky-600
          700: 'hsl(199, 89%, 32%)', // sky-700
          800: 'hsl(201, 92%, 24%)', // sky-800
          900: 'hsl(202, 80%, 20%)',
          950: 'hsl(203, 80%, 15%)',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'slide-down': 'slideDown 0.4s ease-out',
        'slide-left': 'slideLeft 0.4s ease-out',
        'slide-right': 'slideRight 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(10px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideRight: {
          '0%': { transform: 'translateX(-10px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};