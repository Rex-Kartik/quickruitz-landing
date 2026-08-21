/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#0052FF',
        'primary-dark': '#003ec7',
        surface: '#f7f9fb',
        'surface-low': '#f2f4f6',
        border: '#e2e8f0',
        'on-surface': '#191c1e',
        'on-surface-muted': '#64748b',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
