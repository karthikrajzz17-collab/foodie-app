/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FAF6F0',
          100: '#F4EBE1',
          200: '#E8D5C4',
          300: '#D6B79D',
          400: '#BA8F6E',
          500: '#8B4513', // Saddle Brown / Artisanal Roast
          600: '#783A0E',
          700: '#652E0B',
          800: '#51240A',
          900: '#3D1B07',
          DEFAULT: '#8B4513',
        },
        secondary: {
          50: '#FDFBF9',
          100: '#FAF6F0',
          200: '#F4EBE1',
          300: '#E8D5C4',
          DEFAULT: '#F4EBE1',
        },
        foodie: {
          bg: '#FAF7F2',
          text: '#2C221E',
          muted: '#7A6B63',
          border: '#EFE6DC',
          card: '#ffffff',
          accent: '#A0522D',
        }
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', '-apple-system', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif']
      },
      boxShadow: {
        'foodie': '0 4px 20px -2px rgba(139, 69, 19, 0.07), 0 2px 6px -1px rgba(44, 34, 30, 0.04)',
        'foodie-hover': '0 12px 28px -4px rgba(139, 69, 19, 0.14), 0 6px 12px -2px rgba(44, 34, 30, 0.06)',
        'foodie-card': '0 2px 12px rgba(44, 34, 30, 0.06)',
        'foodie-float': '0 10px 30px -5px rgba(139, 69, 19, 0.22)',
      },
      keyframes: {
        heartPop: {
          '0%': { transform: 'scale(1)' },
          '45%': { transform: 'scale(1.35)' },
          '75%': { transform: 'scale(0.92)' },
          '100%': { transform: 'scale(1)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(6px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      animation: {
        'heart-pop': 'heartPop 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        'fade-in': 'fadeIn 0.25s ease-out forwards',
      }
    },
  },
  plugins: [],
}
