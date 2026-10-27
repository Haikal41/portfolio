/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: "#050713",
        darkCard: "#090d1a",
        darkCardLighter: "#0f1629",
        neonCyan: "#06b6d4",
        neonBlue: "#3b82f6",
        neonPurple: "#8b5cf6"
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace']
      },
      boxShadow: {
        'neon-cyan': '0 0 25px -5px rgba(6, 182, 212, 0.45)',
        'neon-blue': '0 0 25px -5px rgba(59, 130, 246, 0.45)',
        'neon-purple': '0 0 25px -5px rgba(139, 92, 246, 0.45)',
      }
    },
  },
  plugins: [],
}
