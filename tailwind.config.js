/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: {
          light: '#FAFAF9',
          dark: '#0B0E14',
        },
        surface: {
          light: '#FFFFFF',
          dark: '#131720',
        },
        foreground: {
          light: '#14171F',
          dark: '#E7E9EE',
        },
        muted: {
          light: '#6B7280',
          dark: '#8B93A5',
        },
        accent: {
          // Was #3B6FE0 (4.43:1 on background-light — fails WCAG AA's 4.5:1
          // for normal text by a hair). Darkened slightly to 5.33:1. Visually
          // almost identical, same hue/saturation, just enough deeper to pass.
          DEFAULT: '#3562CC',
          light: '#3562CC',
          dark: '#5B8CFF',
        },
        border: {
          // Both were ~1.2-1.3:1 against their backgrounds — badly fails the
          // 3:1 minimum WCAG requires for UI component boundaries (buttons,
          // cards relying on a border alone to show their edge). These are
          // real, checked replacements (3.5-3.7:1), not guesses — see the
          // README for the exact numbers.
          light: '#7C8592',
          dark: '#636D85',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}

