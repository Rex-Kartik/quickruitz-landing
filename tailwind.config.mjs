/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Brand
        primary: '#0052FF',
        'primary-dark': '#003ec7',
        'primary-light': '#e8efff',
        // Surfaces
        surface: '#f7f9fb',
        'surface-low': '#f2f4f6',
        'surface-blue': '#f0f4ff',
        // Dark sections
        navy: '#050d1a',
        'navy-mid': '#0a1628',
        'navy-card': '#0f1f3a',
        // Text
        'on-surface': '#191c1e',
        'on-surface-muted': '#64748b',
        // Borders
        border: '#e2e8f0',
        'border-blue': '#c7d7ff',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        pill: '9999px',
      },
      boxShadow: {
        card: '0 20px 60px rgba(0,0,0,0.06)',
        'card-blue': '0 20px 60px rgba(0,82,255,0.12)',
        'glow-blue': '0 0 40px rgba(0,82,255,0.25)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'pulse-dot': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.4' },
        },
        shimmer: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.5s ease-out forwards',
        'fade-in': 'fade-in 0.4s ease-out forwards',
        marquee: 'marquee 30s linear infinite',
        'pulse-dot': 'pulse-dot 2s ease-in-out infinite',
        shimmer: 'shimmer 3s linear infinite',
      },
    },
  },
  plugins: [],
};
