const { tokens } = require('./src/styles/tokens.bridge.cjs');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx}',
    './styles/**/*.css',
  ],
  theme: {
    extend: {
      colors: {
        brand: tokens.colors.brand,
        neutral: tokens.colors.neutral,
        status: tokens.colors.status,
        bg: tokens.colors.bg,
        text: tokens.colors.text,
        border: tokens.colors.border,
        action: tokens.colors.action,
        link: tokens.colors.link,
        focus: tokens.colors.focus,
        tech: tokens.colors.tech,
        // aliases legados
        'segura-primary': tokens.colors.action.primary,
        'segura-secondary': tokens.colors.action.secondary,
        'segura-dark': tokens.colors.bg.inverse,
        'segura-offwhite': tokens.colors.bg.surfaceMuted,
        'segura-success': tokens.colors.tech.compliance,
      },
      fontFamily: {
        display: tokens.typography.fontFamily.display,
        sans: tokens.typography.fontFamily.body,
        body: tokens.typography.fontFamily.body,
      },
      fontSize: Object.fromEntries(
        Object.entries(tokens.typography.fontSize).map(([k, v]) => [
          k,
          [v.size, { lineHeight: v.lineHeight, letterSpacing: v.letterSpacing, fontWeight: v.fontWeight }],
        ]),
      ),
      spacing: tokens.spacing,
      borderRadius: tokens.radius,
      boxShadow: {
        'elevation-1': tokens.elevation.shadow1,
        'elevation-2': tokens.elevation.shadow2,
        'elevation-3': tokens.elevation.shadow3,
        'glow-brand': tokens.elevation.glowBrand,
        'segura-soft': tokens.elevation.shadow1,
        'segura-hover': tokens.elevation.shadow2,
        'segura-glow': tokens.elevation.glowBrand,
      },
      transitionDuration: {
        fast: tokens.motion.duration.fast,
        base: tokens.motion.duration.base,
        slow: tokens.motion.duration.slow,
      },
      transitionTimingFunction: {
        standard: tokens.motion.easing.standard,
        emphasized: tokens.motion.easing.emphasized,
      },
    },
  },
  plugins: [],
};
