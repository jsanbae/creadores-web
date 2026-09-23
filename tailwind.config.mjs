/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#00b4ec',
        secondary: '#ff3f26',
        'on-primary': '#0B0614',
        'on-secondary': '#0B0614',
        background: {
          primary: '#1A0F2B',
          secondary: '#12091C',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#D6D6D6',
        },
        border: '#2E2E3E',
        success: '#2ecc71',
        warning: '#f1c40f',
        error: '#e74c3c',
      },
      fontFamily: {
        sans: ['Sora', 'system-ui', 'sans-serif'],
        gaming: ['Orbitron', 'system-ui', 'sans-serif'],
        pixel: ['Press Start 2P', 'monospace'],
      },
      animation: {
        glow: 'glow 2s ease-out infinite alternate',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 2px 8px rgba(0, 180, 236, 0.35)' },
          '100%': { boxShadow: '0 4px 16px rgba(0, 180, 236, 0.55)' },
        },
      },
    },
  },
  plugins: [],
};
