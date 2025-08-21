/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        slate: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        indigo: {
          50: '#eef2ff',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
        },
        blue: {
          500: '#3b82f6',
          600: '#2563eb',
        },
        green: {
          500: '#22c55e',
        },
        orange: {
          500: '#f97316',
        },
        red: {
          500: '#ef4444',
        },
        gray: {
          500: '#6b7280',
        }
      },
      animation: {
        'spin': 'spin 1s linear infinite',
        'typing-pulse': 'typing-pulse 1.5s infinite',
      },
      keyframes: {
        'typing-pulse': {
          '0%, 100%': { opacity: '0.2', transform: 'scale(0.8)' },
          '50%': { opacity: '1', transform: 'scale(1)' },
        }
      }
    },
  },
  plugins: [],
}
