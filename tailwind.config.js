/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cadre: {
          red:    '#E24B4A',
          orange: '#EF9F27',
          green:  '#639922',
          blue:   '#378ADD',
          purple: '#7F77DD',
        },
        dark: {
          page:   '#0D0D0D',
          card:   '#141414',
          border: '#222222',
          mock:   '#0F0F0F',
          photo:  '#1A1A1A',
          photoborder: '#2A2A2A',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
