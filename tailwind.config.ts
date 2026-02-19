import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx}',
    './styles/**/*.{css}',
  ],
  theme: {
    extend: {
      colors: {
        'segura-primary': '#FF9B21',
        'segura-secondary': '#1E40AF',
        'segura-dark': '#0F172A',
        'segura-offwhite': '#F8FAFC',
        'segura-success': '#10B981',
      },
      boxShadow: {
        'segura-soft': '0 4px 20px -2px rgba(0,0,0,0.05)',
        'segura-hover': '0 30px 60px -15px rgba(0,0,0,0.1)',
        'segura-glow': '0 0 15px rgba(255,155,33,0.3)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      fontFamily: {
        display: ['Poppins', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
