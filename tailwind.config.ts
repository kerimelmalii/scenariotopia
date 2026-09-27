import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: 'var(--ink)',
        'ink-soft': 'var(--ink-soft)',
        'ink-faint': 'var(--ink-faint)',
        paper: 'var(--paper)',
        line: 'var(--line)',
        'line-soft': 'var(--line-soft)',
        accent: 'var(--accent)',
        'accent-2': 'var(--accent-2)',
        'accent-ink': 'var(--accent-ink)',
        'accent-wash': 'var(--accent-wash)',
        'c-bordo': 'var(--c-bordo)',
        'c-coral': 'var(--c-coral)',
        'c-purple': 'var(--c-purple)',
        'c-blue': 'var(--c-blue)',
        'c-turquoise': 'var(--c-turquoise)',
        'c-green': 'var(--c-green)',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        script: ['"Courier Prime"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(14px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp .7s cubic-bezier(.16,1,.3,1) both',
      },
    },
  },
  plugins: [],
} satisfies Config;
