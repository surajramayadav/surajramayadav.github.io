/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'slide-in-right': {
          '0%': { transform: 'translateX(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'scale-in': {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'bounce-in': {
          '0%': { transform: 'scale(0.3)', opacity: '0' },
          '50%': { transform: 'scale(1.05)', opacity: '0.8' },
          '70%': { transform: 'scale(0.9)', opacity: '0.9' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        }
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-in-out',
        'fade-in-delay-1': 'fade-in 0.5s ease-in-out 0.2s both',
        'fade-in-delay-2': 'fade-in 0.5s ease-in-out 0.4s both',
        'fade-in-delay-3': 'fade-in 0.5s ease-in-out 0.6s both',
        'fade-in-delay-4': 'fade-in 0.5s ease-in-out 0.8s both',
        'slide-up': 'slide-up 0.5s ease-out',
        'slide-in-right': 'slide-in-right 0.5s ease-out',
        'scale-in': 'scale-in 0.5s ease-out',
        'bounce-in': 'bounce-in 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      }
    },
  },
  plugins: [],
} 