/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'primary': '#0F3D3E',
        'primary_a': '#618E87',
        'secondary': '#DDAF52',
        'secondary_a': '#E2DCC8',
        'white': '#F1F1F1',
        'white_a': '#FDFDFD',
        'gray': '#656564',
        'light_gray_50': 'rgba(217, 217, 217, 0.20)',
        'black': '#010101'
      }
    },
  },
  plugins: [],
}
