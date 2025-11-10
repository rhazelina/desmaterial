/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Noto Sans JP', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#eff6ff',
          500: '#265cff',
          900: '#1e3a8a',
        }
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out both',
        'bounce-soft': 'bounceSoft 1.3s cubic-bezier(.22,1,.36,1) infinite',
        'marquee': 'marquee 10s linear infinite',
        'flip-y': 'flipY 2.4s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeInUp: {
          from: { opacity: 0, transform: 'translateY(8px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        bounceSoft: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12%)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        flipY: {
          from: { transform: 'rotateY(0)' },
          to: { transform: 'rotateY(180deg)' },
        },
      }
    },
  },
  plugins: [],
}