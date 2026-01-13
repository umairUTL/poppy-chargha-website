import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          maroon: '#800020',
          maroonDark: '#5C0015',
          maroonLight: '#A0002A',
          black: '#000000',
          blackLight: '#1A1A1A',
        },
        accent: {
          gold: '#D4AF37',
          warm: '#8B4513',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
