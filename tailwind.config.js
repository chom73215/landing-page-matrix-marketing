/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'matrix': {
          'black': '#080808',
          'dark': '#0d0d0d',
          'surface': '#111111',
          'border': '#1a1a1a',
          'accent': '#00ff87',
          'accent-dim': '#00cc6a',
          'muted': '#666666',
          'subtle': '#333333',
        }
      },
      fontFamily: {
        'sans': ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['clamp(2.6rem, 5.8vw, 6.25rem)', { lineHeight: '1.08', letterSpacing: '-0.02em' }],
        'headline': ['clamp(2.2rem, 4.2vw, 4.25rem)', { lineHeight: '1.15', letterSpacing: '-0.015em' }],
        'title': ['clamp(1.5rem, 2.8vw, 2.75rem)', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
      },
      spacing: {
        'section': 'clamp(5rem, 10vw, 10rem)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
      transitionTimingFunction: {
        'matrix': 'cubic-bezier(0.16, 1, 0.3, 1)',
      }
    },
  },
  plugins: [],
}
